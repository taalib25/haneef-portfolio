import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const lenis = new Lenis({
  lerp: 0.075,
  smoothWheel: true,
  syncTouch: false,
  touchMultiplier: 1.8,
   duration: 1.2, // Longer duration = smoother scroll
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -8 * t)), // Natural easing curve
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    wheelMultiplier: 1, // Don't amplify wheel input
    infinite: false,
})

gsap.ticker.add((time) => lenis.raf(time * 1000))
gsap.ticker.lagSmoothing(0)

ScrollTrigger.scrollerProxy(document.documentElement, {
  scrollTop(value) {
    if (arguments.length) lenis.scrollTo(value, { immediate: true })
    return lenis.scroll
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
  },
})

lenis.on('scroll', ScrollTrigger.update)

export function getReducedMotion() {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
  return false
}
