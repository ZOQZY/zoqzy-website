import Logo from './Logo.jsx'

export default function Footer({ companyName }) {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="mark">
              <Logo height={34} />
              <span>{companyName}</span>
            </div>
            <p>Technology for every stage of your business.</p>
          </div>
          <div className="footer-col">
            <div className="label">Navigate</div>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#solutions">Solutions</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="label">Services</div>
            <ul>
              <li><a href="#services">Software</a></li>
              <li><a href="#services">AI &amp; Data</a></li>
              <li><a href="#services">Cloud &amp; DevOps</a></li>
              <li><a href="#services">Design</a></li>
              <li><a href="#services">Automation</a></li>
              <li><a href="#services">Engineering</a></li>
            </ul>
          </div>
          <div className="footer-col footer-start">
            <div className="label">Start</div>
            <a href="#contact">Start a project <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} {companyName}. All rights reserved.</span>
          <div className="links">
            <a href="#contact">Privacy Policy</a>
            <a href="#contact">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
