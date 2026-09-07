import { useRef, useState } from 'react'
import { PROCESS } from '../data.js'

export default function Process() {
  const scrollerRef = useRef(null)
  const [progress, setProgress] = useState(0)

  const onScroll = () => {
    const el = scrollerRef.current
    if (!el) return
    const max = Math.max(1, el.scrollWidth - el.clientWidth)
    setProgress(el.scrollLeft / max)
  }

  return (
    <section className="section" style={{ padding: 'clamp(72px,9vw,140px) 0' }}>
      <div className="wrap-pad">
        <div className="section-head">
          <div>
            <div className="mono eyebrow reveal">How we work</div>
            <h2 className="reveal">From idea to impact.</h2>
          </div>
          <p className="lead reveal" style={{ maxWidth: '38ch' }}>A clear process. No unnecessary complexity.</p>
        </div>
      </div>
      <div className="wrap-pad" style={{ paddingBottom: 20 }}>
        <div className="process-track-wrap">
          <div className="process-track-fill" style={{ width: `${progress * 100}%` }} />
        </div>
      </div>
      <div className="process-scroller" ref={scrollerRef} onScroll={onScroll}>
        {PROCESS.map((step) => (
          <div className="process-step" key={step.num}>
            <div className="num">{step.num}</div>
            <h3>{step.name}</h3>
            <p>{step.body}</p>
          </div>
        ))}
      </div>
      <div className="scroll-hint">Scroll →</div>
    </section>
  )
}
