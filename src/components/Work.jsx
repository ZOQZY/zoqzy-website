import { WORK } from '../data.js'

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="mono eyebrow reveal">Selected work</div>
            <h2 className="reveal">Built to make an impact.</h2>
          </div>
          <p className="lead reveal" style={{ maxWidth: '40ch' }}>Technology should solve real problems and create measurable value.</p>
        </div>
        <div className="work-note reveal">
          <span className="dot" aria-hidden="true" />Placeholder examples — no client data
        </div>
        <div className="work-list">
          {WORK.map((c) => (
            <article className="work-card reveal" key={c.num}>
              <div className="work-copy">
                <div className="work-meta">
                  <span className="num">{c.num}</span>
                  <span>Industry — {c.industry}</span>
                </div>
                <h3>{c.name}</h3>
                <div className="work-cols">
                  <div>
                    <div className="label">Challenge</div>
                    <p>{c.challenge}</p>
                  </div>
                  <div>
                    <div className="label">Solution</div>
                    <p>{c.solution}</p>
                  </div>
                </div>
                <div className="work-stack">
                  {c.stack.map((t) => <span key={t}>{t}</span>)}
                </div>
                <div className="work-outcome"><strong>Outcome — </strong>{c.outcome}</div>
              </div>
              <div aria-hidden="true" className="work-visual">
                <div className="grid" />
                <div className="glow" />
                <div className="bars">
                  <span className="a" />
                  <span className="b" />
                  <span className="c" />
                </div>
                <div className="tag">{c.tag}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
