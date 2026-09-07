import { PRINCIPLES } from '../data.js'

export default function Principles() {
  return (
    <section className="section on-card">
      <div className="wrap">
        <div className="mono eyebrow reveal">Why us</div>
        <h2 className="reveal" style={{ marginBottom: 'clamp(40px,5vw,68px)', fontSize: 'clamp(30px,4.4vw,62px)', lineHeight: 1.05, letterSpacing: '-.03em', fontWeight: 800, maxWidth: '26ch' }}>
          Technology is only useful when it solves the right problem.
        </h2>
        <div className="principles-grid">
          {PRINCIPLES.map((pr) => (
            <div className="principle-card reveal" key={pr.num}>
              <div className="num">{pr.num}</div>
              <h3>{pr.title}</h3>
              <p>{pr.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
