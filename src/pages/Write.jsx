import { useFadeUp } from '../hooks/useFadeUp'

export default function Write({ goTo }) {
  useFadeUp()

  return (
    <div id="page-write" className="page">

      <section className="hero">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <p className="hero-eyebrow fade-up">Write & Voice · Jasmine Gabrielle</p>
        <h1 className="hero-headline fade-up" style={{ transitionDelay: '.1s' }}>Written to<br />be <em>felt,</em><br />not just read.</h1>
        <p className="hero-sub fade-up" style={{ transitionDelay: '.22s' }}>"I write because some things are too true for a caption and too sacred for small talk. This is where I put <em>all of it.</em>"</p>
        <div className="hero-actions fade-up" style={{ transitionDelay: '.34s' }}>
          <a href="https://jazzygmack.substack.com" target="_blank" rel="noreferrer" className="btn-mauve">Read on Substack →</a>
          <button onClick={() => document.getElementById('write-books')?.scrollIntoView({ behavior: 'smooth' })} className="btn-ghost">See the books</button>
        </div>
      </section>

      <div className="divider fade-up">
        <div className="divider-line"></div>
        <div className="divider-dot mauve"></div>
        <div className="divider-line"></div>
      </div>

      <section className="writing-as fade-up">
        <div>
          <p className="section-label">The writer</p>
          <h2 className="writing-headline">Writing as Jasmine Gabrielle</h2>
          <div className="writing-body">
            <p>Jasmine Gabrielle is the part of me that lives in the margins — the poems written at 2am, the fiction that asks hard theological questions, the essays that don't have clean endings.</p>
            <p>Writing has always been how I process what I can't yet say out loud. Everything here is an act of courage and an invitation.</p>
          </div>
        </div>
        <div className="writing-right">
          <div className="genre-pill fade-up">
            <span className="genre-name">Poetry</span>
            <span className="genre-desc">Raw, lyrical, and honest. Words that hold the things too heavy to carry alone.</span>
          </div>
          <div className="genre-pill fade-up" style={{ transitionDelay: '.1s' }}>
            <span className="genre-name">Fiction</span>
            <span className="genre-desc">Christian fiction rooted in scripture — stories that ask what faith looks like when everything falls apart.</span>
          </div>
          <div className="genre-pill fade-up" style={{ transitionDelay: '.2s' }}>
            <span className="genre-name">Essays</span>
            <span className="genre-desc">Long-form thinking on faith, identity, creativity, and what it means to build a life on purpose.</span>
          </div>
        </div>
      </section>

      <section className="books-section fade-up" id="write-books">
        <p className="section-label">The work</p>
        <h2 className="books-title">Books</h2>
        <div className="books-grid">
          <div className="book-card fade-up">
            <span className="book-badge"><span className="book-badge-dot"></span>Coming soon</span>
            <h3 className="book-title">Words I'll Never Say</h3>
            <span className="book-type">Poetry Collection · Vol. I</span>
            <p className="book-desc">The first collection. Twenty-eight poems about the things I held too long, the words I swallowed, and everything I finally let go. For anyone who has ever loved in silence.</p>
            <a href="https://jazzygmack.substack.com" target="_blank" rel="noreferrer" className="book-notify">Get notified →</a>
          </div>
          <div className="book-card fade-up" style={{ transitionDelay: '.1s' }}>
            <span className="book-badge"><span className="book-badge-dot"></span>In progress</span>
            <h3 className="book-title">Born from Fire</h3>
            <span className="book-type">Poetry Collection · Vol. II</span>
            <p className="book-desc">The second collection, still being forged. Fire-themed poetry about transformation, resilience, and what survives the burning. The sequel nobody asked for and everybody needed.</p>
            <a href="https://jazzygmack.substack.com" target="_blank" rel="noreferrer" className="book-notify">Follow the journey →</a>
          </div>
          <div className="book-card fade-up" style={{ transitionDelay: '.2s' }}>
            <span className="book-badge"><span className="book-badge-dot"></span>In progress</span>
            <h3 className="book-title">Redeemed & Remembered</h3>
            <span className="book-type">Christian Fiction · Novel</span>
            <p className="book-desc">A dystopian retelling of Rahab's story — a woman the world wrote off, rewritten into a world that doesn't look so different from ours. About redemption, identity, and what it means to be remembered by God when everyone else has moved on.</p>
            <a href="https://jazzygmack.substack.com" target="_blank" rel="noreferrer" className="book-notify">Follow the journey →</a>
          </div>
        </div>
      </section>

      <section className="substack-section fade-up">
        <div>
          <p className="section-label">On Substack</p>
          <h2 className="substack-headline">Where I write<br /><em>between the books.</em></h2>
          <p className="substack-desc">Essays, poems, and honest dispatches from the middle of building a life on purpose. Some weeks it's a poem. Some weeks it's 800 words about something I'm figuring out in real time. Always worth the read.</p>
          <p className="substack-meta">@jazzygmack on Substack</p>
        </div>
        <div className="substack-right">
          <a href="https://jazzygmack.substack.com" target="_blank" rel="noreferrer" className="btn-mauve">Read on Substack →</a>
          <a href="https://jazzygmack.substack.com" target="_blank" rel="noreferrer" className="btn-outline-mauve">Subscribe free ↗</a>
        </div>
      </section>

      <section className="quote-section fade-up">
        <div className="quote-inner">
          <span className="quote-mark">&ldquo;</span>
          <p className="quote-text">"Some words aren't meant to be heard —<br />they're meant to be <em>recognized.</em>"</p>
          <p className="quote-source">— Jasmine Gabrielle</p>
        </div>
      </section>

      <footer>
        <button className="footer-mark" onClick={() => goTo('hub')}>← Back to Jasmine Mack</button>
        <div className="footer-links">
          <a href="https://jazzygmack.substack.com" target="_blank" rel="noreferrer">Substack</a>
          <a href="https://www.instagram.com/astold.byjasmine/" target="_blank" rel="noreferrer">Writing IG</a>
          <a href="mailto:jasminemack.inquiries@gmail.com">Contact</a>
        </div>
      </footer>

    </div>
  )
}
