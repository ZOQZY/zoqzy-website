import { useEffect, useState } from 'react'
import { useScrollReveal } from './hooks.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import BigPicture from './components/BigPicture.jsx'
import Services from './components/Services.jsx'
import Solutions from './components/Solutions.jsx'
import Process from './components/Process.jsx'
import Technology from './components/Technology.jsx'
import Work from './components/Work.jsx'
import Principles from './components/Principles.jsx'
import About from './components/About.jsx'
import FinalCta from './components/FinalCta.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const COMPANY_NAME = 'ZOQZY'
const DEFAULT_ACCENT = '#7C6BFF'
const THEME_KEY = 'om-it-theme'
const ACCENT_KEY = 'om-it-accent'

function washFor(hex, theme) {
  const h = String(hex).replace('#', '')
  const full = h.length === 3 ? h.replace(/./g, (c) => c + c) : h
  const n = parseInt(full, 16)
  if (Number.isNaN(n)) return 'rgba(59,130,246,.14)'
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255
  const alpha = theme === 'light' ? '.10' : '.16'
  return `rgba(${r},${g},${b},${alpha})`
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem(THEME_KEY)
      if (stored === 'light' || stored === 'dark') return stored
    } catch (e) { /* localStorage unavailable */ }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  const [accent, setAccent] = useState(() => {
    try {
      return localStorage.getItem(ACCENT_KEY) || DEFAULT_ACCENT
    } catch (e) {
      return DEFAULT_ACCENT
    }
  })

  const [scrolled, setScrolled] = useState(false)
  const [pageProgress, setPageProgress] = useState(0)

  useScrollReveal()

  // Apply theme + accent as CSS custom properties whenever they change.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.style.setProperty('--accent', accent)
    document.documentElement.style.setProperty('--wash', washFor(accent, theme))
  }, [theme, accent])

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = Math.max(1, doc.scrollHeight - window.innerHeight)
      setScrolled(window.scrollY > 12)
      setPageProgress(window.scrollY / max)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    try { localStorage.setItem(THEME_KEY, next) } catch (e) { /* ignore */ }
  }

  const pickAccent = (value) => {
    setAccent(value)
    try { localStorage.setItem(ACCENT_KEY, value) } catch (e) { /* ignore */ }
  }

  const journeyFill = Math.min(100, Math.max(0, (pageProgress - 0.08) * 420))

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'clip' }}>
      <div aria-hidden="true" className="bg-grid" />

      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${(pageProgress * 100).toFixed(2)}%` }} />
      </div>

      <Header
        companyName={COMPANY_NAME}
        scrolled={scrolled}
        theme={theme}
        onToggleTheme={toggleTheme}
        accent={accent}
        onPickAccent={pickAccent}
      />

      <main id="top" style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <BigPicture journeyFill={journeyFill} />
        <Services />
        <Solutions />
        <Process />
        <Technology />
        <Work />
        <Principles />
        <About />
        <FinalCta />
        <Contact />
      </main>

      <Footer companyName={COMPANY_NAME} />
    </div>
  )
}
