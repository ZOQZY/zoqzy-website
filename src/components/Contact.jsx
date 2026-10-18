import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name') || 'Website inquiry',
      email: form.get('email') || '',
      company: form.get('company') || 'Not provided',
      type: form.get('type') || 'Not specified',
      budget: form.get('budget') || 'Not specified',
      message: form.get('message') || '',
      _subject: `New inquiry from ${form.get('name') || 'Website inquiry'}`,
      _captcha: 'false',
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/mail2zoqzy@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      e.currentTarget.reset()
      setSent(true)
    } catch (err) {
      setError('Something went wrong while sending your inquiry. Please try again or email mail2zoqzy@gmail.com directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section on-card">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <h2 className="reveal">Let's talk.</h2>
          <p className="reveal">Have a project, an idea or a technology challenge? Tell us what you're working on.</p>
          <dl className="contact-details">
            <div>
              <dt>Email</dt>
              <dd><input type="email" value="[EMAIL]" readOnly aria-label="Email" /></dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd><input type="tel" value="[PHONE]" readOnly aria-label="Phone" /></dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd><input type="text" value="[LOCATION]" readOnly aria-label="Location" /></dd>
            </div>
          </dl>
        </div>

        <div className="contact-form-col">
          {sent ? (
            <div role="status" className="success-box">
              <div className="tag">Inquiry received</div>
              <h3>Thanks — we'll be in touch.</h3>
              <p>This is a demo form, so nothing was sent. Connect it to your inbox or CRM to go live.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="contact-form">
              <div className="field">
                <label htmlFor="f-name">Name</label>
                <input id="f-name" name="name" type="text" required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="f-email">Work email</label>
                <input id="f-email" name="email" type="email" required autoComplete="email" />
              </div>
              <div className="field">
                <label htmlFor="f-company">Company</label>
                <input id="f-company" name="company" type="text" autoComplete="organization" />
              </div>
              <div className="field">
                <label htmlFor="f-type">Project type</label>
                <select id="f-type" name="type" defaultValue="Software Development">
                  <option>Software Development</option>
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>AI & Data</option>
                  <option>Cloud & DevOps</option>
                  <option>UI/UX</option>
                  <option>Automation</option>
                  <option>Dedicated Team</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="f-budget">Budget range (optional)</label>
                <select id="f-budget" name="budget" defaultValue="Not sure yet">
                  <option>Not sure yet</option>
                  <option>Under 25k</option>
                  <option>25k – 75k</option>
                  <option>75k – 200k</option>
                  <option>200k+</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="f-msg">Tell us about your project</label>
                <textarea id="f-msg" name="message" rows={5} required />
              </div>
              {error ? <div className="field full error-message">{error}</div> : null}
              <button type="submit" className="btn btn-primary" disabled={submitting}>{submitting ? 'Sending...' : 'Send inquiry'} <span aria-hidden="true">→</span></button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
