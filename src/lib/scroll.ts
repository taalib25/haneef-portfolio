import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const lenis = new Lenis({
  lerp: 0.14,
  smoothWheel: true,
  syncTouch: true,
  touchMultiplier: 1.25,
  duration: 0.72,
  easing: (t) => 1 - Math.pow(1 - t, 3),
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  wheelMultiplier: 1,
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
