import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync } from 'node:fs'

const criticalCss = readFileSync(new URL('./src/critical.css', import.meta.url), 'utf8')
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\s+/g, ' ')
  .replace(/\s*([{}:;,])\s*/g, '$1')
  .trim()

const asyncStylesheetPlugin = () => ({
  name: 'pronail-critical-css',
  apply: 'build' as const,
  transformIndexHtml: {
    order: 'post' as const,
    handler(html: string) {
      const stylesheetPattern = /<link rel="stylesheet"([^>]*?)href="([^"]+\.css)"([^>]*)>/
      const match = html.match(stylesheetPattern)

      if (!match) {
        throw new Error('The generated stylesheet link was not found in index.html.')
      }

      const [, beforeHref, href, afterHref] = match
      const attributes = `${beforeHref}${afterHref}`
      const crossorigin = attributes.match(/\bcrossorigin(?:="([^"]*)")?/)
      const crossoriginAttribute = crossorigin
        ? ` crossorigin${crossorigin[1] !== undefined ? `="${crossorigin[1]}"` : ''}`
        : ''
      const asyncStylesheet = `<link rel="preload" as="style"${crossoriginAttribute} href="${href}" onload="this.onload=null;this.rel='stylesheet'">`
      const noscriptFallback = `<noscript><link rel="stylesheet"${crossoriginAttribute} href="${href}"></noscript>`

      return html
        .replace(match[0], asyncStylesheet)
        .replace('</head>', `    <style data-pronail-critical>${criticalCss}</style>\n    ${noscriptFallback}\n  </head>`)
    },
  },
})

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    asyncStylesheetPlugin(),
  ],
})
