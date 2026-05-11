import { useFadeUp } from '../hooks/useFadeUp' // updated

export default function Work({ goTo }) {
  useFadeUp()

  return (
    <div id="page-work" className="page">

      <section className="hero">
        <div className="hero-orb hero-orb-1"></div>
        <p className="hero-eyebrow fade-up">Work & AI · Dynamack Operations LLC</p>
        <h1 className="hero-headline fade-up" style={{ transitionDelay: '.1s' }}>Solutions<br /><em>before the</em><br />problem.</h1>
        <p className="hero-sub fade-up" style={{ transitionDelay: '.22s' }}>"Most businesses don't know what's broken until it costs them. I find it first — then build the systems to make sure it never does."</p>
        <div className="hero-actions fade-up" style={{ transitionDelay: '.34s' }}>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSftRngfQ-IXqGqEDQP0GEWVemzxM9OpMB05Q-qyzlXGX_dWkg/viewform?usp=header" target="_blank" rel="noreferrer" className="btn-primary">Book a strategy session →</a>
          <a href="https://dynamackops.tiiny.site" target="_blank" rel="noreferrer" className="btn-ghost">View Dynamack Operations</a>
        </div>
      </section>

      <div className="divider fade-up">
        <div className="divider-line"></div>
        <div className="divider-dot green"></div>
        <div className="divider-line"></div>
      </div>

      <section className="services fade-up">
        <p className="section-label">What I do</p>
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          <div className="service-card active fade-up">
            <span className="service-badge badge-live"><span className="badge-dot"></span>Available now</span>
            <h3 className="service-name">AI Automation & Workflows</h3>
            <p className="service-desc">I design and build custom automation systems that eliminate the manual work stealing hours from your week. Your platforms talk to each other. Your data flows without you touching it. Your business runs smarter.</p>
            <div className="service-tags">
              <span className="service-tag">n8n</span>
              <span className="service-tag">Zapier</span>
              <span className="service-tag">Zoho Flow</span>
              <span className="service-tag">API Integration</span>
              <span className="service-tag">Supabase</span>
            </div>
          </div>
          <div className="service-card active fade-up" style={{ transitionDelay: '.1s' }}>
            <span className="service-badge badge-live"><span className="badge-dot"></span>Available now</span>
            <h3 className="service-name">Fractional Ops & Business Systems</h3>
            <p className="service-desc">I embed as your operations partner — no long onboarding, no jargon, no wasted time. I audit what's broken, build what's missing, document everything, and leave your team stronger than I found them.</p>
            <div className="service-tags">
              <span className="service-tag">SOPs</span>
              <span className="service-tag">CRM</span>
              <span className="service-tag">ClickUp</span>
              <span className="service-tag">QuickBooks</span>
              <span className="service-tag">Zoho CRM</span>
            </div>
          </div>
          <div className="service-card coming fade-up" style={{ transitionDelay: '.2s' }}>
            <span className="service-badge badge-soon"><span className="badge-dot"></span>Coming soon</span>
            <h3 className="service-name">AI Red Teaming & Security</h3>
            <p className="service-desc">I'm actively building expertise in adversarial AI testing and LLM security — probing AI systems for the vulnerabilities that could become tomorrow's headlines.</p>
            <p className="coming-note">Interested in being an early client? Reach out and let's talk.</p>
          </div>
        </div>
      </section>

      <section className="process fade-up">
        <p className="section-label">The process</p>
        <h2 className="section-title">How I work</h2>
        <div className="steps-grid">
          <div className="step fade-up">
            <div className="step-num">01</div>
            <h3 className="step-name">Discover</h3>
            <p className="step-desc">We get honest about what's actually happening in your business — not just the surface problems, but the systems underneath causing them.</p>
          </div>
          <div className="step fade-up" style={{ transitionDelay: '.08s' }}>
            <div className="step-num">02</div>
            <h3 className="step-name">Design</h3>
            <p className="step-desc">Before a single workflow is built, I map the full solution so we both know exactly what we're building and why it will work.</p>
          </div>
          <div className="step fade-up" style={{ transitionDelay: '.16s' }}>
            <div className="step-num">03</div>
            <h3 className="step-name">Build</h3>
            <p className="step-desc">Clean, documented systems your team can actually maintain — not black boxes that only work while I'm around.</p>
          </div>
          <div className="step fade-up" style={{ transitionDelay: '.24s' }}>
            <div className="step-num">04</div>
            <h3 className="step-name">Support</h3>
            <p className="step-desc">I don't disappear after delivery. I stay long enough to make sure it's working and your team is confident running it.</p>
          </div>
        </div>
      </section>

      <section className="fit-section fade-up">
        <div>
          <p className="section-label">Who this is for</p>
          <p className="fit-intro">I do my best work with mission-driven leaders who are building something real and know their operations need to catch up.</p>
        </div>
        <div className="fit-lists">
          <div>
            <p className="fit-group-label yes">Great fit</p>
            <ul className="fit-list">
              <li><span className="fit-icon yes">✓</span>Service businesses with 1–15 people growing faster than their systems</li>
              <li><span className="fit-icon yes">✓</span>Founders who want a real partner, not just a vendor</li>
              <li><span className="fit-icon yes">✓</span>Teams ready to hand off the operational chaos</li>
              <li><span className="fit-icon yes">✓</span>Leaders who value autonomy and clear communication</li>
            </ul>
          </div>
          <div>
            <p className="fit-group-label no">Not a fit</p>
            <ul className="fit-list">
              <li><span className="fit-icon no">✕</span>Clients who need to approve every micro-decision</li>
              <li><span className="fit-icon no">✕</span>Projects with no defined scope or outcome</li>
              <li><span className="fit-icon no">✕</span>Businesses not ready to actually implement what we build</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="tools fade-up">
        <p className="tools-label">Current tool stack</p>
        <div className="tools-strip">
          <span className="tool-pill">n8n</span>
          <span className="tool-pill">Zoho CRM</span>
          <span className="tool-pill">Zoho Flow</span>
          <span className="tool-pill">QuickBooks</span>
          <span className="tool-pill">InvoiceASAP</span>
          <span className="tool-pill">Supabase</span>
          <span className="tool-pill">Google Sheets</span>
          <span className="tool-pill">API Integration</span>
          <span className="tool-pill">Zapier</span>
          <span className="tool-pill">ClickUp</span>
          <span className="tool-pill">Netlify</span>
          <span className="tool-pill">Groq / Llama</span>
          <span className="tool-pill">React</span>
        </div>
      </section>

      <section className="cta-section fade-up">
        <div>
          <h2 className="cta-headline">Ready to solve it<br /><em>before it breaks?</em></h2>
          <p className="cta-sub">A strategy session is 20 minutes of honest conversation about where your business is leaking time and money — and a clear picture of what fixing it actually looks like. No pitch. Just clarity.</p>
        </div>
        <div className="cta-actions">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSftRngfQ-IXqGqEDQP0GEWVemzxM9OpMB05Q-qyzlXGX_dWkg/viewform?usp=header" target="_blank" rel="noreferrer" className="btn-terra">Book a strategy session →</a>
          <a href="https://dynamackops.tiiny.site" target="_blank" rel="noreferrer" className="btn-outline">View Dynamack Operations ↗</a>
        </div>
      </section>

      <footer>
        <button className="footer-mark" onClick={() => goTo('hub')}>← Back to Jasmine Mack</button>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/jasmine-mack" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://instagram.com/jazzygmack" target="_blank" rel="noreferrer">Instagram</a>
          <a href="mailto:dynamackops@gmail.com">Contact</a>
        </div>
      </footer>

    </div>
  )
}
