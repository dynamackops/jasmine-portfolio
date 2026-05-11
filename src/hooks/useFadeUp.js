import { useEffect } from 'react'

export function useFadeUp() {
  useEffect(() => {
    const page = document.querySelector('.page')
    if (!page) return

    const fadeEls = Array.from(page.querySelectorAll('.fade-up'))
    fadeEls.forEach(el => el.classList.remove('visible'))

    // Stagger hero elements in immediately
    const heroTimer = setTimeout(() => {
      page.querySelectorAll('.hero .fade-up').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 130)
      })
    }, 50)

    // IntersectionObserver for scroll-triggered animations
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.07, rootMargin: '0px 0px -30px 0px' }
    )

    // Two frames so React fully paints before observing
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        fadeEls.forEach(el => io.observe(el))
      })
    })

    // Fallback: ensure everything is visible after animations complete
    const fallback = setTimeout(() => {
      fadeEls.forEach(el => el.classList.add('visible'))
    }, 900)

    return () => {
      clearTimeout(heroTimer)
      clearTimeout(fallback)
      io.disconnect()
    }
  }, [])
}
