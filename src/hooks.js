import { useEffect } from 'react'

// Fades/slides in any [data-reveal] element as it scrolls into view.
// Runs once on mount; call after the full page tree exists.
export function useScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const nodes = document.querySelectorAll('.reveal')
    if (reduce || !('IntersectionObserver' in window)) {
      nodes.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    )
    nodes.forEach((el) => io.observe(el))

    // Safety net: reveal everything if observation never fires (e.g. detached mount).
    const fallback = setTimeout(() => {
      nodes.forEach((el) => el.classList.add('is-visible'))
    }, 2200)

    return () => {
      io.disconnect()
      clearTimeout(fallback)
    }
  }, [])
}
