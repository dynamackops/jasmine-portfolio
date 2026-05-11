import { useFadeUp } from '../hooks/useFadeUp'

export default function Create({ goTo }) {
  useFadeUp()

  return (
    <div id="page-create" className="page">

      <section className="hero">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-left">
          <p className="hero-eyebrow fade-up">Create & Life · @jazzygmack</p>
          <h1 className="hero-headline fade-up" style={{ transitionDelay: '.1s' }}>The<br />unfiltered<br /><em>version.</em></h1>
          <p className="hero-sub fade-up" style={{ transitionDelay: '.22s' }}>"This is where I document the whole thing — the building, the learning, the living. <em>No highlight reel. Just the real.</em>"</p>
          <div className="hero-actions fade-up" style={{ transitionDelay: '.34s' }}>
            <a href="https://instagram.com/jazzygmack" target="_blank" rel="noreferrer" className="btn-terra">Follow @jazzygmack →</a>
            <button onClick={() => document.getElementById('create-ugc')?.scrollIntoView({ behavior: 'smooth' })} className="btn-ghost">Work with me</button>
          </div>
        </div>
        <div className="hero-right fade-up" style={{ transitionDelay: '.2s' }}>
          <a href="https://instagram.com/jazzygmack" target="_blank" rel="noreferrer" className="platform-card ig">
            <span className="platform-name">Instagram</span>
            <span className="platform-handle">@jazzygmack</span>
            <p className="platform-desc">Life, AI, creativity, and the in-between moments worth saving.</p>
          </a>
          <a href="https://tiktok.com/@jazzygmack" target="_blank" rel="noreferrer" className="platform-card tiktok">
            <span className="platform-name">TikTok</span>
            <span className="platform-handle">@jazzygmack</span>
            <p className="platform-desc">Short-form content that hits — education, humor, and real life.</p>
          </a>
          <a href="https://youtube.com/@jazzygmack" target="_blank" rel="noreferrer" className="platform-card youtube">
            <span className="platform-name">YouTube</span>
            <span className="platform-handle">@jazzygmack</span>
            <p className="platform-desc">Long-form vlogs, behind-the-scenes, and full-length storytelling.</p>
          </a>
          <a href="https://www.facebook.com/jasmine.mack.411325/" target="_blank" rel="noreferrer" className="platform-card facebook">
            <span className="platform-name">Facebook</span>
            <span className="platform-handle">@jazzygmack</span>
            <p className="platform-desc">Community updates, announcements, and longer conversations.</p>
          </a>
        </div>
      </section>

      <div className="divider fade-up">
        <div className="divider-line"></div>
        <div className="divider-dot terra"></div>
        <div className="divider-line"></div>
      </div>

      <section className="pillars fade-up">
        <p className="section-label">What I talk about</p>
        <h2 className="section-title">Content pillars</h2>
        <div className="pillars-grid">
          <div className="create-pillar fade-up">
            <div className="create-pillar-mark">I.</div>
            <h3 className="create-pillar-name">AI & Ops</h3>
            <p className="create-pillar-desc">Making AI and automation accessible — what it actually looks like to build systems, run a consultancy, and think strategically in real time.</p>
          </div>
          <div className="create-pillar fade-up" style={{ transitionDelay: '.08s' }}>
            <div className="create-pillar-mark">II.</div>
            <h3 className="create-pillar-name">Advocacy</h3>
            <p className="create-pillar-desc">The work behind Macknificient World — why youth advocacy matters and what it looks like to build a nonprofit from the ground up.</p>
          </div>
          <div className="create-pillar fade-up" style={{ transitionDelay: '.16s' }}>
            <div className="create-pillar-mark">III.</div>
            <h3 className="create-pillar-name">Creative</h3>
            <p className="create-pillar-desc">Poetry, writing, art, AI animation — the creative side that doesn't fit neatly into a job description but belongs here anyway.</p>
          </div>
          <div className="create-pillar fade-up" style={{ transitionDelay: '.24s' }}>
            <div className="create-pillar-mark">IV.</div>
            <h3 className="create-pillar-name">Personal</h3>
            <p className="create-pillar-desc">Fitness and aerial, faith, the apartment era, Luna — the parts of being human that make everything else make sense.</p>
          </div>
        </div>
      </section>

      <section className="ugc-section fade-up" id="create-ugc">
        <p className="section-label">For brands & partners</p>
        <h2 className="ugc-headline">Content that <em>converts</em> because it's actually real.</h2>
        <p className="ugc-sub">I don't just create content — I think about why it works. My background in AI and operations means I bring strategy to every brief, not just aesthetics. What I make for your brand is built to perform, not just to look good.</p>
        <div className="ugc-grid">
          <div className="ugc-card fade-up">
            <h3 className="ugc-card-title">Short-form Video</h3>
            <p className="ugc-card-desc">TikTok and Instagram Reels scripted, filmed, and edited — native content that fits the platform and stops the scroll.</p>
          </div>
          <div className="ugc-card fade-up" style={{ transitionDelay: '.1s' }}>
            <h3 className="ugc-card-title">Lifestyle & Review</h3>
            <p className="ugc-card-desc">Authentic product integration woven into real life — not a sponsored post that looks like a sponsored post.</p>
          </div>
          <div className="ugc-card fade-up" style={{ transitionDelay: '.2s' }}>
            <h3 className="ugc-card-title">Education & Explainer</h3>
            <p className="ugc-card-desc">Content that teaches something — especially strong for tech, productivity, wellness, and mission-driven brands.</p>
          </div>
        </div>
        <div className="ugc-actions fade-up">
          <a href="mailto:jasminemack.inquiries@gmail.com" className="btn-terra-outline">Inquire about UGC →</a>
          <a href="https://instagram.com/jazzygmack" target="_blank" rel="noreferrer" className="btn-ghost-light">View my content ↗</a>
        </div>
      </section>

      <section className="tools fade-up">
        <p className="tools-label">How I create</p>
        <div className="tools-strip">
          <span className="tool-pill">OBS Studio</span>
          <span className="tool-pill">DaVinci Resolve</span>
          <span className="tool-pill">CapCut</span>
          <span className="tool-pill">Canva</span>
          <span className="tool-pill">MacBook Pro M1</span>
          <span className="tool-pill">AI Animation</span>
          <span className="tool-pill">Substack · @jazzygmack</span>
        </div>
      </section>

      <section className="follow-section fade-up">
        <div>
          <h2 className="follow-headline">Come hang out<br /><em>in my world.</em></h2>
          <p className="follow-sub">Real talk about building a business, a nonprofit, a creative life, and a future — all at the same time. No curated feeds. Just me, figuring it out and taking you with me.</p>
        </div>
        <div className="social-links">
          <a href="https://instagram.com/jazzygmack" target="_blank" rel="noreferrer" className="social-link">
            <span className="social-platform">Instagram</span>
            <span className="social-handle">@jazzygmack</span>
          </a>
          <a href="https://tiktok.com/@jazzygmack" target="_blank" rel="noreferrer" className="social-link">
            <span className="social-platform">TikTok</span>
            <span className="social-handle">@jazzygmack</span>
          </a>
          <a href="https://youtube.com/@jazzygmack" target="_blank" rel="noreferrer" className="social-link">
            <span className="social-platform">YouTube</span>
            <span className="social-handle">@jazzygmack</span>
          </a>
          <a href="https://www.facebook.com/jasmine.mack.411325/" target="_blank" rel="noreferrer" className="social-link">
            <span className="social-platform">Facebook</span>
            <span className="social-handle">@jazzygmack</span>
          </a>
        </div>
      </section>

      <footer>
        <button className="footer-mark" onClick={() => goTo('hub')}>← Back to Jasmine Mack</button>
        <div className="footer-links">
          <a href="https://instagram.com/jazzygmack" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://tiktok.com/@jazzygmack" target="_blank" rel="noreferrer">TikTok</a>
          <a href="mailto:jasminemack.inquiries@gmail.com">Contact</a>
        </div>
      </footer>

    </div>
  )
}
