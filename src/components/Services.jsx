import { useState, useEffect } from 'react'
import { SERVICES } from '../data.js'

export default function Services() {
  const [open, setOpen] = useState({})

  // Cards start expanded on desktop, collapsed (except the first) on mobile.
  useEffect(() => {
    const wide = window.innerWidth >= 900
    const initial = {}
    SERVICES.forEach((_, i) => { initial[i] = wide ? true : i === 0 })
    setOpen(initial)
  }, [])

  const toggle = (i) => setOpen((prev) => ({ ...prev, [i]: !prev[i] }))

  return (
    <section id="services" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="mono eyebrow reveal">Capabilities</div>
            <h2 className="reveal">What can we build for you?</h2>
          </div>
          <p className="lead reveal">Whatever the challenge, we bring the technology and engineering expertise to solve it.</p>
        </div>

        <div className="tile-grid">
          {SERVICES.map((svc, i) => {
            const isOpen = !!open[i]
            return (
              <div className="service-card reveal" key={svc.num}>
                <div className="top">
                  <span className="num">{svc.num}</span>
                  <span className="count">{svc.items.length} services</span>
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <button
                  type="button"
                  className="service-toggle"
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                >
                  {isOpen ? 'Hide services' : 'View services'}
                  <span aria-hidden="true" style={{ fontSize: 13 }}>{isOpen ? '−' : '+'}</span>
                </button>
                <div
                  className="service-list-wrap"
                  style={{ maxHeight: isOpen ? 460 : 0, opacity: isOpen ? 1 : 0 }}
                >
                  <ul className="service-list">
                    {svc.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <a href="#contact" className="service-cta">{svc.cta} <span aria-hidden="true">→</span></a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
