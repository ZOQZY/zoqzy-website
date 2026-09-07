import { PROBLEMS } from '../data.js'

export default function Solutions() {
  return (
    <section id="solutions" className="section on-card">
      <div className="wrap">
        <div className="mono eyebrow reveal">Tell us the problem</div>
        <h2 className="reveal" style={{ marginBottom: 'clamp(40px,5vw,64px)', fontSize: 'clamp(32px,4.8vw,68px)', lineHeight: 1.03, letterSpacing: '-.03em', fontWeight: 800, maxWidth: '22ch' }}>
          Start with the problem. We'll figure out the technology.
        </h2>
        <div>
          {PROBLEMS.map((p) => (
            <div className="problem-row reveal" key={p.num}>
              <span className="num">{p.num}</span>
              <h3 className="quote">{p.quote}</h3>
              <div className="detail">
                <div className="solution">{p.solution}</div>
                <p className="body">{p.body}</p>
              </div>
            </div>
          ))}
          <div className="problem-end" />
        </div>
      </div>
    </section>
  )
}
