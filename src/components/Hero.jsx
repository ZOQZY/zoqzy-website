import { PIPELINE } from '../data.js'

const WORDS = ['Software', 'AI', 'Cloud', 'Data', 'Design', 'Automation']

export default function Hero() {
  return (
    <section className="hero">
      <div aria-hidden="true" className="hero-glow" />
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="kicker reveal">
            <span className="rule" aria-hidden="true" />
            Digital Engineering • AI • Cloud • Software
          </div>
          <h1 className="h1 reveal">
            Technology for every stage of your <span className="accent">business.</span>
          </h1>
          <p className="lede reveal">
            From the first idea to production and beyond, we design, build, automate and scale digital solutions that help businesses move forward.
          </p>
          <div className="cta-row reveal">
            <a href="#contact" className="btn btn-primary">Start a project <span aria-hidden="true">→</span></a>
            <a href="#services" className="btn btn-ghost">Explore our services <span aria-hidden="true">↓</span></a>
          </div>
          <ul className="word-strip reveal">
            {WORDS.map((w, i) => (
              <li key={w} style={{ animationDelay: `${i * 0.5}s` }}>
                {i > 0 && <span aria-hidden="true" className="dot">• </span>}
                {w}
              </li>
            ))}
          </ul>
        </div>

        <div aria-hidden="true" className="pipeline-panel reveal">
          <div className="pipeline-card">
            <div className="pipeline-grid" />
            <div className="pipeline-scan" />
            <div className="pipeline-head">
              <span>delivery_pipeline</span>
              <span className="live"><span className="dot" />active</span>
            </div>
            <div className="pipeline-rows">
              {PIPELINE.map((row) => (
                <div className="pipeline-row" key={row.n}>
                  <span className="n">{row.n}</span>
                  <span className="label">{row.label}</span>
                  <span className="meta">{row.meta}</span>
                </div>
              ))}
            </div>
            <div className="pipeline-bars">
              <span className="fill" />
              <span className="f2" />
              <span className="f1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
