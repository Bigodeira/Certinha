import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
const tab = await fetch('http://127.0.0.1:9223/json/new?about:blank', { method: 'PUT' }).then(response => response.json())
const socket = new WebSocket(tab.webSocketDebuggerUrl)
await new Promise((resolve, reject) => {
  socket.addEventListener('open', resolve, { once: true })
  socket.addEventListener('error', reject, { once: true })
})

let nextId = 0
const pending = new Map()
const events = new Map()
const cssRequests = []

socket.addEventListener('message', ({ data }) => {
  const message = JSON.parse(data)
  if (message.id) {
    const request = pending.get(message.id)
    if (!request) return
    pending.delete(message.id)
    if (message.error) request.reject(new Error(message.error.message))
    else request.resolve(message.result)
    return
  }

  if (message.method === 'Network.requestWillBeSent' && message.params.request.url.includes('.css')) {
    cssRequests.push(message.params.request.url)
  }

  const listeners = events.get(message.method) ?? []
  events.delete(message.method)
  listeners.forEach(resolve => resolve(message.params))
})

const command = (method, params = {}) => new Promise((resolve, reject) => {
  const id = ++nextId
  pending.set(id, { resolve, reject })
  socket.send(JSON.stringify({ id, method, params }))
})

const once = (method) => new Promise(resolve => {
  const listeners = events.get(method) ?? []
  listeners.push(resolve)
  events.set(method, listeners)
})

const navigate = async (url) => {
  const loaded = once('Page.loadEventFired')
  await command('Page.navigate', { url })
  await Promise.race([loaded, delay(10000)])
  await delay(800)
  await command('Runtime.evaluate', {
    expression: 'document.fonts.ready',
    awaitPromise: true,
    returnByValue: true,
  })
}

const inspect = async () => {
  const expression = `(() => {
    const displays = selector => [...document.querySelectorAll(selector)].map(element => getComputedStyle(element).display)
    const hero = document.querySelector('section[aria-label="Hero"]')
    const heading = hero?.querySelector('h1')
    const image = hero?.querySelector('img')
    const pricing = document.querySelector('#pricing')
    const link = document.querySelector('link[href$=".css"]')
    return {
      mobileVariants: displays('.md\\:hidden'),
      desktopVariants: displays('.md\\:flex'),
      floatingCta: displays('.md\\:inline-flex'),
      hero: hero && { top: hero.getBoundingClientRect().top, width: hero.getBoundingClientRect().width, background: getComputedStyle(hero).backgroundImage },
      heading: heading && { display: getComputedStyle(heading).display, fontFamily: getComputedStyle(heading).fontFamily, fontSize: getComputedStyle(heading).fontSize, width: heading.getBoundingClientRect().width },
      image: image && { display: getComputedStyle(image).display, width: image.getBoundingClientRect().width, height: image.getBoundingClientRect().height },
      pricingBackground: pricing && getComputedStyle(pricing).backgroundColor,
      cssLink: link && { rel: link.rel, as: link.as, href: link.getAttribute('href') },
      cls: window.__pronailCls ?? 0,
      scrollWidth: document.documentElement.scrollWidth,
      viewportWidth: innerWidth,
    }
  })()`
  const result = await command('Runtime.evaluate', { expression, returnByValue: true })
  return result.result.value
}

const capture = async (name) => {
  const result = await command('Page.captureScreenshot', { format: 'png', fromSurface: true })
  const path = join(process.env.TEMP, name)
  writeFileSync(path, Buffer.from(result.data, 'base64'))
  return path
}

await command('Page.enable')
await command('Runtime.enable')
await command('Network.enable')
await command('Network.setCacheDisabled', { cacheDisabled: true })
await command('Network.emulateNetworkConditions', {
  offline: false,
  latency: 150,
  downloadThroughput: 180 * 1024,
  uploadThroughput: 90 * 1024,
  connectionType: 'cellular4g',
})
await command('Page.addScriptToEvaluateOnNewDocument', {
  source: `window.__pronailCls = 0;
    new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) window.__pronailCls += entry.value;
      }
    }).observe({ type: 'layout-shift', buffered: true });`,
})
await command('Emulation.setEmulatedMedia', {
  media: 'screen',
  features: [{ name: 'prefers-reduced-motion', value: 'reduce' }],
})

const viewports = [320, 375, 390, 412, 768, 1365]
const report = []

for (const width of viewports) {
  const height = width === 1365 ? 768 : 900
  await command('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width <= 768 })

  await command('Network.setBlockedURLs', {
    urls: ['*index-*.css', '*googletagmanager.com*', '*clarity.ms*'],
  })
  await navigate(`http://127.0.0.1:4173/?critical=${width}`)
  const criticalOnly = await inspect()
  const criticalScreenshot = await capture(`pronail-critical-${width}.png`)

  cssRequests.length = 0
  await command('Network.clearBrowserCache')
  await command('Network.setBlockedURLs', {
    urls: ['*googletagmanager.com*', '*clarity.ms*'],
  })
  await navigate(`http://127.0.0.1:4173/?full=${width}`)
  const full = await inspect()
  const fullScreenshot = await capture(`pronail-full-${width}.png`)

  report.push({
    width,
    height,
    criticalOnly,
    full,
    cssRequestCount: cssRequests.filter(url => url.includes('/assets/index-')).length,
    criticalScreenshot,
    fullScreenshot,
  })
}

console.log(JSON.stringify(report, null, 2))
socket.close()
