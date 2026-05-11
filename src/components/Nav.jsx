import { useEffect, useRef } from 'react'

const NAV_CONFIGS = {
  work:   { color: 'green', text: 'Book a strategy session →', href: 'https://docs.google.com/forms/d/e/1FAIpQLSftRngfQ-IXqGqEDQP0GEWVemzxM9OpMB05Q-qyzlXGX_dWkg/viewform?usp=header' },
  give:   { color: 'amber', text: 'Visit Macknificient →', href: 'https://mackworldinc.org' },
  create: { color: 'terra', text: 'Work with me →', scrollTo: 'create-ugc' },
  write:  { color: 'mauve', text: 'Read on Substack →', href: 'https://jazzygmack.substack.com' },
}

const navBtnStyle = {
  background: 'none', border: 'none', cursor: 'pointer',
  fontSize: '0.75rem', fontWeight: 400,
  letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)',
}

export default function Nav({ page, goTo }) {
  const navRef = useRef(null)

  useEffect(() => {
    if (navRef.current) navRef.current.classList.remove('scrolled')
    const handler = () => {
      navRef.current?.classList.toggle('scrolled', window.scrollY > 50)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [page])

  const cfg = NAV_CONFIGS[page]

  return (
    <nav ref={navRef} id="main-nav">
      <button className="nav-logo" onClick={() => goTo('hub')}>Jasmine Mack</button>
      <div id="nav-right">
        {page === 'hub' ? (
          <ul className="nav-links" id="hub-nav-links">
            <li><button onClick={() => document.getElementById('hub-rooms')?.scrollIntoView({ behavior: 'smooth' })} style={navBtnStyle}>Rooms</button></li>
            <li><button onClick={() => goTo('work')} style={navBtnStyle}>Work with me</button></li>
            <li><button onClick={() => goTo('write')} style={navBtnStyle}>Writing</button></li>
            <li><button onClick={() => document.getElementById('hub-contact')?.scrollIntoView({ behavior: 'smooth' })} style={navBtnStyle}>Contact</button></li>
          </ul>
        ) : (
          <>
            <button className="nav-back-btn" onClick={() => goTo('hub')}>← Back to the entrance</button>
            {cfg?.href ? (
              <a href={cfg.href} target="_blank" rel="noreferrer" className={`nav-cta-btn ${cfg.color}`}>{cfg.text}</a>
            ) : cfg?.scrollTo ? (
              <button onClick={() => document.getElementById(cfg.scrollTo)?.scrollIntoView({ behavior: 'smooth' })} className={`nav-cta-btn ${cfg.color}`}>{cfg.text}</button>
            ) : null}
          </>
        )}
      </div>
    </nav>
  )
}
