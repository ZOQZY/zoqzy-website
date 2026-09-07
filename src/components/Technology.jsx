import { TECH } from '../data.js'

export default function Technology() {
  return (
    <section className="section on-card">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="mono eyebrow reveal">Technology</div>
            <h2 className="reveal" style={{ maxWidth: '24ch' }}>The right technology for the right problem.</h2>
          </div>
          <p className="lead reveal" style={{ maxWidth: '42ch' }}>We choose technology based on what the product needs, not because it's fashionable.</p>
        </div>
        <div className="tech-grid">
          {TECH.map((cat) => (
            <div className="tech-cat reveal" key={cat.name}>
              <div className="name">{cat.name}</div>
              <ul>
                {cat.items.map((t) => (
                  <li key={t}><span className="dot" aria-hidden="true" />{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
