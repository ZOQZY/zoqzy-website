export default function FinalCta() {
  return (
    <section className="final-cta section">
      <div aria-hidden="true" className="final-cta-glow" />
      <div aria-hidden="true" className="final-cta-rule" />
      <div className="final-cta-inner">
        <h2 className="reveal">Have an idea?<br /><span style={{ color: 'var(--accent)' }}>Let's build it.</span></h2>
        <p className="reveal">Tell us what you're trying to achieve. We'll help you figure out the technology, the approach and the next step.</p>
        <div className="final-cta-row reveal">
          <a href="#contact" className="btn btn-primary">Start a conversation <span aria-hidden="true">→</span></a>
          <a href="#services" className="btn btn-ghost">Explore our services</a>
        </div>
      </div>
    </section>
  )
}
