import { useState } from 'react'
import Logo from './Logo.jsx'
import { ACCENTS } from '../data.js'

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
]

export default function Header({ companyName, scrolled, theme, onToggleTheme, accent, onPickAccent }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [accentOpen, setAccentOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const themeGlyph = theme === 'light' ? '◐' : '☼'
  const themeLabel = theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <nav className="nav" aria-label="Primary">
        <a href="#top" aria-label={`${companyName} — home`} className="brand">
          <Logo />
          <span>{companyName}</span>
        </a>

        <div className="nav-actions">
          <div className="desk-nav">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>

          <div className="accent-picker">
            <button
              type="button"
              className="icon-btn"
              aria-label="Change accent colour"
              aria-expanded={accentOpen}
              title="Change accent colour"
              onClick={() => setAccentOpen((v) => !v)}
            >
              <span aria-hidden="true" className="accent-swatch" />
            </button>
            {accentOpen && (
              <div role="group" aria-label="Accent colour" className="accent-pop">
                <div className="accent-pop-title">Accent</div>
                <div className="accent-row">
                  {ACCENTS.map((sw) => {
                    const active = accent.toLowerCase() === sw.value.toLowerCase()
                    return (
                      <button
                        key={sw.value}
                        type="button"
                        className={`accent-btn${active ? ' active' : ''}`}
                        aria-label={sw.name}
                        aria-pressed={active}
                        title={sw.name}
                        onClick={() => { onPickAccent(sw.value); setAccentOpen(false) }}
                      >
                        <span aria-hidden="true" style={{ background: sw.value }} />
                      </button>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          <button type="button" className="icon-btn" aria-label={themeLabel} title={themeLabel} onClick={onToggleTheme}>
            <span aria-hidden="true">{themeGlyph}</span>
          </button>

          <a href="#contact" className="btn btn-primary desk-cta">Start a project <span aria-hidden="true">→</span></a>

          <button type="button" className="icon-btn burger" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
            <span aria-hidden="true" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={closeMenu}>{l.label}</a>
          ))}
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="#contact" onClick={closeMenu} className="btn btn-primary">Start a project <span aria-hidden="true">→</span></a>
        </div>
      )}
    </header>
  )
}
