import { useFadeUp } from '../hooks/useFadeUp'

export default function Give({ goTo }) {
  useFadeUp()

  return (
    <div id="page-give" className="page">

      <section className="hero">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <p className="hero-eyebrow fade-up">Give & Advocate · Macknificient World Inc.</p>
        <h1 className="hero-headline fade-up" style={{ transitionDelay: '.1s' }}>Every young<br />person <em>deserves</em><br />a foundation.</h1>
        <p className="hero-sub fade-up" style={{ transitionDelay: '.22s' }}>"I built Macknificient World because I watched too many young people fall through the cracks — not for lack of potential, but for lack of <em>someone who believed in them first.</em>"</p>
        <div className="hero-actions fade-up" style={{ transitionDelay: '.34s' }}>
          <a href="https://mackworldinc.org" target="_blank" rel="noreferrer" className="btn-amber">Visit mackworldinc.org →</a>
          <button onClick={() => document.getElementById('give-ways')?.scrollIntoView({ behavior: 'smooth' })} className="btn-ghost">Get involved</button>
        </div>
      </section>

      <div className="divider fade-up">
        <div className="divider-line"></div>
        <div className="divider-dot amber"></div>
        <div className="divider-line"></div>
      </div>

      <section className="mission fade-up">
        <div>
          <p className="section-label">The mission</p>
          <h2 className="mission-headline">Building the social-emotional foundation every young person needs to thrive.</h2>
          <div className="mission-body">
            <p>Macknificient World Inc. is a 501(c)(3) nonprofit dedicated to equipping young people with the social-emotional tools, mentorship, and community they need to grow into who they were created to be.</p>
            <p>We believe every child — regardless of their circumstances — has something Macknificient inside them. Our work is making sure they believe it too.</p>
          </div>
        </div>
        <div className="mission-right">
          <div className="mission-stat fade-up">
            <div className="stat-number">501(c)(3)</div>
            <div className="stat-label">Federally recognized nonprofit, built to serve and built to last.</div>
          </div>
          <div className="mission-stat fade-up" style={{ transitionDelay: '.1s' }}>
            <div className="stat-number">K–3</div>
            <div className="stat-label">Founded by a former educator who spent six years in the classroom before bringing this vision to life.</div>
          </div>
          <div className="mission-stat fade-up" style={{ transitionDelay: '.2s' }}>
            <div className="stat-number">SEL</div>
            <div className="stat-label">Social-emotional learning at the core of everything we build and every program we run.</div>
          </div>
        </div>
      </section>

      <section className="pillars-bg fade-up">
        <p className="section-label">What we focus on</p>
        <h2 className="pillars-title">Our pillars</h2>
        <div className="pillars-grid">
          <div className="give-pillar fade-up">
            <div className="give-pillar-icon">I.</div>
            <h3 className="give-pillar-name">Identity</h3>
            <p className="give-pillar-desc">Helping young people understand who they are — their strengths, their worth, and the unique role they were made to play in the world.</p>
          </div>
          <div className="give-pillar fade-up" style={{ transitionDelay: '.1s' }}>
            <div className="give-pillar-icon">II.</div>
            <h3 className="give-pillar-name">Emotional Intelligence</h3>
            <p className="give-pillar-desc">Teaching kids to name what they feel, manage how they respond, and build relationships rooted in empathy and respect.</p>
          </div>
          <div className="give-pillar fade-up" style={{ transitionDelay: '.2s' }}>
            <div className="give-pillar-icon">III.</div>
            <h3 className="give-pillar-name">Community</h3>
            <p className="give-pillar-desc">Creating safe spaces where young people are seen, supported, and surrounded by adults and peers who pour into them.</p>
          </div>
        </div>
      </section>

      <section className="three-ways fade-up" id="give-ways">
        <p className="section-label">How to show up</p>
        <h2 className="three-ways-title">Three ways to be part of this</h2>
        <div className="ways-grid">
          <a href="https://mackworldinc.org" target="_blank" rel="noreferrer" className="way-card learn fade-up">
            <p className="way-num">01</p>
            <h3 className="way-title">Learn</h3>
            <p className="way-desc">See the full picture — our programs, our story, and the young people we're building this for. Everything lives at mackworldinc.org.</p>
            <span className="way-link">Visit the site →</span>
          </a>
          <a href="https://mackworldinc.org" target="_blank" rel="noreferrer" className="way-card donate fade-up" style={{ transitionDelay: '.1s' }}>
            <p className="way-num">02</p>
            <h3 className="way-title">Give</h3>
            <p className="way-desc">Every dollar goes directly toward programs, resources, and experiences for young people who need it most. No overhead fluff — just impact.</p>
            <span className="way-link">Support the mission →</span>
          </a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd9igq5sXubXEWLnsxRhZGgn6Iy_vXtofp_jgmcttlN1Sb5ew/viewform" target="_blank" rel="noreferrer" className="way-card involve fade-up" style={{ transitionDelay: '.2s' }}>
            <p className="way-num">03</p>
            <h3 className="way-title">Get Involved</h3>
            <p className="way-desc">Whether you want to mentor, partner, or sponsor — there's a place for you here. Reach out and let's build something together.</p>
            <span className="way-link">Let's connect →</span>
          </a>
        </div>
      </section>

      <section className="founder-note fade-up">
        <p className="note-label">A note from the founder</p>
        <p className="note-quote">"I believe every young person is already <em>Macknificient</em> — they just need someone to show them where to look. Macknificient World exists to be that mirror."</p>
        <p className="note-attribution">— Jasmine Mack, Founder · Macknificient World Inc.</p>
      </section>

      <section className="cta-section fade-up">
        <div>
          <h2 className="cta-headline">Come see what<br /><em>we're building.</em></h2>
          <p className="cta-sub">The full story, the programs, the people, and how you can be part of it — all at mackworldinc.org.</p>
        </div>
        <div className="cta-actions">
          <a href="https://mackworldinc.org" target="_blank" rel="noreferrer" className="btn-amber">Visit mackworldinc.org →</a>
          <a href="https://www.instagram.com/macknificientworld/" target="_blank" rel="noreferrer" className="btn-outline">Follow on Instagram ↗</a>
        </div>
      </section>

      <footer>
        <button className="footer-mark" onClick={() => goTo('hub')}>← Back to Jasmine Mack</button>
        <div className="footer-links">
          <a href="https://mackworldinc.org" target="_blank" rel="noreferrer">mackworldinc.org</a>
          <a href="https://www.instagram.com/macknificientworld/" target="_blank" rel="noreferrer">World IG</a>
          <a href="https://www.instagram.com/macknificientgirls/" target="_blank" rel="noreferrer">Girls IG</a>
          <a href="mailto:macknificientgirls@gmail.com">Contact</a>
        </div>
      </footer>

    </div>
  )
}
