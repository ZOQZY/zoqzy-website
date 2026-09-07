import { JOURNEY } from '../data.js'

export default function BigPicture({ journeyFill }) {
  return (
    <section className="section">
      <div className="wrap big-picture-grid">
        <div className="big-picture-copy">
          <div className="mono eyebrow reveal">The big picture</div>
          <h2 className="reveal">One team.<br />Every technology.</h2>
          <p className="reveal">
            You don't need five different technology partners to build one great product. We bring product thinking, engineering, design, AI and infrastructure together under one team.
          </p>
        </div>
        <div className="journey-col">
          <div className="journey-track" />
          <div className="journey-fill" style={{ height: `${journeyFill}%` }} />
          <div className="journey-list">
            {JOURNEY.map((step) => (
              <div className="journey-step reveal" key={step.name}>
                <span className="bullet" aria-hidden="true" />
                <span className="name">{step.name}</span>
                <span className="rule" aria-hidden="true" />
                <span className="note">{step.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
