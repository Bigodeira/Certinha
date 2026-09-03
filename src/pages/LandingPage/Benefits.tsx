import { useEffect, useState } from 'react'
import { FiCheck } from 'react-icons/fi'
import bgFolhas from '../../6frascosfundo.png'
import pronailDuplo from '../../pronailduplo.png'

const CHECKLIST = [
  { label: 'Natural Formula' },
  { label: 'Easy To Use' },
  { label: 'No Stimulants' },
  { label: 'Non-GMO' },
]

export default function Benefits() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(max-width: 768px)').matches
  })

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section
      className="section-pad pronail-benefits"
      style={{
        backgroundImage: `url(${bgFolhas})`,
        backgroundColor: '#eaeaea',
        backgroundSize: isMobile ? '100% 100%' : 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: isMobile ? '64px 20px' : '80px 24px',
      }}
    >
      <div id="benefits" style={{ position: 'relative', top: '-20px', visibility: 'hidden' }} />

      <div
        style={{
          position: 'relative',
          backgroundColor: '#ffffff',
          borderRadius: 24,
          maxWidth: isMobile ? 400 : 1050,
          width: '100%',
          padding: isMobile ? '44px 30px 40px' : 'clamp(40px, 3.5vw, 52px)',
          boxShadow: '0 24px 50px -18px rgba(0,0,0,0.28)',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: isMobile ? 0 : 36,
          textAlign: 'center',
        }}
      >
        <div style={{ flex: isMobile ? '0 1 auto' : '1 1 460px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start' }}>
          <h2
            style={{
              fontSize: isMobile ? 'clamp(38px, 12vw, 52px)' : 'clamp(42px, 4vw, 56px)',
              fontFamily: "'Poppins', 'Montserrat', 'Helvetica Neue', Arial, sans-serif",
              color: '#111111',
              lineHeight: 1.1,
              marginBottom: 32,
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            <span style={{ fontWeight: 300 }}>ProNail</span><br />
            <strong style={{ fontWeight: 800 }}>Complex</strong>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(180px, 1fr))', width: '100%', gap: 24, marginBottom: isMobile ? 24 : 0 }}>
            {CHECKLIST.map(({ label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ backgroundColor: '#3FA34D', borderRadius: 8, width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                  <FiCheck size={18} strokeWidth={3} />
                </div>
                <span style={{ fontFamily: "'Poppins', 'Montserrat', 'Helvetica Neue', Arial, sans-serif", fontSize: isMobile ? 21 : 18, fontWeight: 600, color: '#111111', textAlign: 'left' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <img
          src={pronailDuplo}
          alt="ProNail Complex"
          width={1027}
          height={891}
          loading="lazy"
          decoding="async"
          style={{ maxWidth: '100%', width: isMobile ? 280 : 'clamp(320px, 31vw, 400px)', height: 'auto', objectFit: 'contain', marginTop: isMobile ? 8 : 0, flexShrink: 0 }}
        />
      </div>
    </section>
  )
}
