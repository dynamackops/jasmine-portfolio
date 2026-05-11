import { useFadeUp } from '../hooks/useFadeUp'

export default function Hub({ goTo }) {
  useFadeUp()

  return (
    <div id="page-hub" className="page">

      <section className="hero">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <span className="hero-line fade-up">Jasmine</span>
        <span className="hero-line italic fade-up" style={{ transitionDelay: '.1s' }}>Mack.</span>
        <p className="hero-tagline fade-up" style={{ transitionDelay: '.22s' }}>
          Whatever brought you here —<br /><em>you found what you were looking for.</em>
        </p>
        <div className="hero-actions fade-up" style={{ transitionDelay: '.34s' }}>
          <button onClick={() => document.getElementById('hub-rooms')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">Find your room →</button>
          <button onClick={() => goTo('work')} className="btn-ghost">Work with me</button>
        </div>
        <div className="hero-scroll" onClick={() => document.getElementById('hub-rooms')?.scrollIntoView({ behavior: 'smooth' })}>
          <div className="scroll-line"></div>
          <span className="scroll-label">Scroll</span>
        </div>
      </section>

      <div className="divider fade-up">
        <div className="divider-line"></div>
        <div className="divider-dot green"></div>
        <div className="divider-line"></div>
      </div>

      <section className="intro fade-up">
        <p className="eyebrow">Founder · Practitioner · Creator · Author</p>
        <p className="intro-text">I build AI-powered systems, teach people to use technology strategically, and create across business, writing, and advocacy.</p>
        <p className="intro-sub">This isn't one thing — it's every expression of a single calling: helping people find better systems for their work, their stories, and their lives. Pull up a chair. You belong here.</p>
      </section>

      <section className="rooms-section fade-up" id="hub-rooms">
        <div className="rooms-header">
          <h2 className="rooms-title">The rooms</h2>
          <span className="rooms-meta">Choose your door</span>
        </div>
        <div className="rooms-grid">
          <div className="room-card green fade-up" onClick={() => goTo('work')} style={{ cursor: 'pointer' }}>
            <p className="room-num">01</p>
            <h3 className="room-name">Work & AI</h3>
            <p className="room-desc">Fractional operations, AI automation, and security consulting through Dynamack Operations LLC. I build the systems your business has been missing.</p>
            <div className="room-tags">
              <span className="room-tag">n8n</span>
              <span className="room-tag">Automation</span>
              <span className="room-tag">AI Security</span>
              <span className="room-tag">Fractional Ops</span>
            </div>
            <span className="room-enter">Enter →</span>
          </div>
          <div className="room-card terra fade-up" onClick={() => goTo('create')} style={{ cursor: 'pointer', transitionDelay: '.1s' }}>
            <p className="room-num">02</p>
            <h3 className="room-name">Create & Life</h3>
            <p className="room-desc">Content creation, UGC, and the unfiltered documentation of building something real. Follow along @jazzygmack.</p>
            <div className="room-tags">
              <span className="room-tag">@jazzygmack</span>
              <span className="room-tag">TikTok</span>
              <span className="room-tag">Instagram</span>
              <span className="room-tag">UGC</span>
            </div>
            <span className="room-enter">Enter →</span>
          </div>
          <div className="room-card mauve fade-up" onClick={() => goTo('write')} style={{ cursor: 'pointer', transitionDelay: '.15s' }}>
            <p className="room-num">03</p>
            <h3 className="room-name">Write & Voice</h3>
            <p className="room-desc">Poetry, fiction, and the written life. Words I'll Never Say. Born from Fire. Redeemed & Remembered. Writing as Jasmine Gabrielle.</p>
            <div className="room-tags">
              <span className="room-tag">Substack</span>
              <span className="room-tag">Poetry</span>
              <span className="room-tag">Fiction</span>
            </div>
            <span className="room-enter">Enter →</span>
          </div>
          <div className="room-card amber-card fade-up" onClick={() => goTo('give')} style={{ cursor: 'pointer', transitionDelay: '.2s' }}>
            <p className="room-num">04</p>
            <h3 className="room-name">Give & Advocate</h3>
            <p className="room-desc">Macknificient World Inc. — a 501(c)(3) building social-emotional foundations and opportunity for young people.</p>
            <div className="room-tags">
              <span className="room-tag">Youth SEL</span>
              <span className="room-tag">Nonprofit</span>
              <span className="room-tag">mackworldinc.org</span>
            </div>
            <span className="room-enter">Enter →</span>
          </div>
        </div>
      </section>

      <section id="hub-contact" style={{ padding: '4rem 3.5rem', borderTop: '1px solid var(--border)' }}>
        <p style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Get in touch</p>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.75rem', fontWeight: 400, color: 'var(--ink)', marginBottom: '2rem' }}>However you prefer to connect.</p>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <a href="tel:8135451675" style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', padding: '1.25rem 1.75rem', background: 'white', border: '1px solid var(--border)', borderLeft: '3px solid var(--green)', borderRadius: '2px', textDecoration: 'none' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>By phone</span>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', color: 'var(--ink)' }}>813.545.1675</span>
          </a>
          <a href="mailto:jasminemack.inquiries@gmail.com" style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', padding: '1.25rem 1.75rem', background: 'white', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)', borderRadius: '2px', textDecoration: 'none' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>General inquiries</span>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: 'var(--ink)' }}>jasminemack.inquiries@gmail.com</span>
          </a>
        </div>
      </section>

      <footer>
        <button className="footer-mark" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Jasmine Mack</button>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/jasmine-mack" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/astold.byjasmine/" target="_blank" rel="noreferrer">Writing IG</a>
          <a href="https://jazzygmack.substack.com" target="_blank" rel="noreferrer">Substack</a>
          <button onClick={() => document.getElementById('hub-contact')?.scrollIntoView({ behavior: 'smooth' })} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.72rem', letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--muted)' }}>Contact</button>
        </div>
      </footer>

    </div>
  )
}
