import { FOUNDERS } from '../data.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap about-grid">
        <div className="about-copy1">
          <div className="mono eyebrow reveal">About us</div>
          <h2 className="reveal">We're building technology with purpose.</h2>
        </div>
        <div className="about-copy2">
          <p className="reveal">We are a technology company focused on building digital products, solving complex engineering problems and helping businesses make better use of technology.</p>
          <p className="reveal mut">From startups taking their first digital step to established businesses modernizing their technology, we work across the entire technology journey.</p>
          <a href="#founders" className="meet-team reveal">Meet the team <span aria-hidden="true">→</span></a>
        </div>
      </div>

      <div id="founders" style={{ maxWidth: 1320, margin: 'clamp(56px,7vw,104px) auto 0' }}>
        <div className="founders-head reveal">
          <div className="label">Founders</div>
          <div className="meta">04 — placeholder names, photos &amp; bios</div>
        </div>
        <div className="founders-grid">
          {FOUNDERS.map((f) => (
            <div className="founder-card reveal" key={f.num}>
              <div className="founder-photo">
                <span>Drop founder photo (4:5)</span>
              </div>
              <div className="founder-body">
                <div className="num">{f.num}</div>
                <h3>{f.name}</h3>
                <div className="role">{f.role}</div>
                <p className="bio">{f.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
