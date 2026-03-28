import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const canUseWindow = typeof window !== 'undefined'
const isTouchDevice = canUseWindow && (
  'ontouchstart' in window ||
  navigator.maxTouchPoints > 0 ||
  window.matchMedia('(pointer: coarse)').matches
)
const hasFinePointer = canUseWindow && window.matchMedia('(hover: hover) and (pointer: fine)').matches
const prefersReduced = canUseWindow && window.matchMedia('(prefers-reduced-motion: reduce)').matches
const isDesktopViewport = canUseWindow && window.innerWidth >= 1024
const shouldUseLenis = canUseWindow && hasFinePointer && isDesktopViewport && !isTouchDevice && !prefersReduced

let lenisInstance: Lenis | null = shouldUseLenis
  ? new Lenis({
    lerp: 0.14,
    smoothWheel: true,
    syncTouch: false,
    touchMultiplier: 1,
    duration: 0.72,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    wheelMultiplier: 1,
    infinite: false,
  })
  : null

let tickerCallback: ((time: number) => void) | null = null
let touchFallbackBound = false

export const lenis = lenisInstance

export function isLenisActive(): boolean {
  return lenisInstance !== null
}

export function destroyLenisIfActive() {
  if (!lenisInstance) return

  if (tickerCallback) {
    gsap.ticker.remove(tickerCallback)
    tickerCallback = null
  }

  lenisInstance.off('scroll', ScrollTrigger.update)
  lenisInstance.stop()
  lenisInstance.destroy()
  lenisInstance = null

  ScrollTrigger.refresh()
}

if (lenisInstance) {
  tickerCallback = (time) => {
    lenisInstance?.raf(time * 1000)
  }

  gsap.ticker.add(tickerCallback)
  gsap.ticker.lagSmoothing(0)

  ScrollTrigger.scrollerProxy(document.documentElement, {
    scrollTop(value) {
      if (arguments.length) lenisInstance?.scrollTo(value, { immediate: true })
      return lenisInstance?.scroll ?? window.scrollY
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
    },
  })

  lenisInstance.on('scroll', ScrollTrigger.update)
}

if (canUseWindow && !touchFallbackBound) {
  const onFirstTouch = () => {
    if (isLenisActive()) {
      destroyLenisIfActive()
    }
    window.removeEventListener('touchstart', onFirstTouch)
    touchFallbackBound = false
  }

  window.addEventListener('touchstart', onFirstTouch, { passive: true, once: true })
  touchFallbackBound = true
}

export function getReducedMotion() {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
  return false
}
