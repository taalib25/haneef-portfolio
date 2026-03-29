import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type ScrollMode = 'native-mobile' | 'smooth-desktop'

let lenisInstance: Lenis | null = null
let tickerCallback: ((time: number) => void) | null = null
let touchFallbackUnbind: (() => void) | null = null
let didInit = false
let teardown: (() => void) | null = null

function canUseWindow(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

function hasTouchCapability(): boolean {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

function shouldUseDesktopSmoothScroll(): boolean {
  const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isDesktopViewport = window.innerWidth >= 1024
  const isTouch = hasTouchCapability()

  return hasFinePointer && isDesktopViewport && !isCoarsePointer && !isTouch && !prefersReducedMotion
}

function setScrollModeMarker(mode: ScrollMode) {
  const root = document.documentElement
  root.dataset.scrollMode = mode

  if (mode === 'native-mobile') {
    root.classList.add('mobile-safe-scroll')
    return
  }

  root.classList.remove('mobile-safe-scroll')
}

function bindTouchFallback() {
  const onFirstTouch = () => {
    destroyLenisIfActive()
    setScrollModeMarker('native-mobile')
    document.documentElement.style.overflowY = 'auto'
    document.body.style.overflowY = 'auto'
    touchFallbackUnbind = null
  }

  window.addEventListener('touchstart', onFirstTouch, { passive: true, once: true })
  touchFallbackUnbind = () => {
    window.removeEventListener('touchstart', onFirstTouch)
  }
}

function startDesktopSmoothScroll() {
  lenisInstance = new Lenis({
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

  tickerCallback = (time) => {
    lenisInstance?.raf(time * 1000)
  }

  gsap.ticker.add(tickerCallback)
  gsap.ticker.lagSmoothing(0)

  lenisInstance.on('scroll', ScrollTrigger.update)
  bindTouchFallback()
  ScrollTrigger.refresh()
}

export function isLenisActive(): boolean {
  return lenisInstance !== null
}

export function destroyLenisIfActive() {
  const hadSmoothController = Boolean(lenisInstance || tickerCallback || touchFallbackUnbind)
  if (!hadSmoothController) return

  if (touchFallbackUnbind) {
    touchFallbackUnbind()
    touchFallbackUnbind = null
  }

  if (tickerCallback) {
    gsap.ticker.remove(tickerCallback)
    tickerCallback = null
  }

  if (lenisInstance) {
    lenisInstance.off('scroll', ScrollTrigger.update)
    lenisInstance.stop()
    lenisInstance.destroy()
    lenisInstance = null
  }

  ScrollTrigger.refresh()
}

export function isMobileSafeScrollMode(): boolean {
  if (!canUseWindow()) return false
  return document.documentElement.classList.contains('mobile-safe-scroll')
}

export function initSmoothScroll(): () => void {
  if (!canUseWindow()) return () => {}
  if (didInit) return teardown ?? (() => {})

  didInit = true
  const useDesktopSmoothScroll = shouldUseDesktopSmoothScroll()

  if (useDesktopSmoothScroll) {
    setScrollModeMarker('smooth-desktop')
    startDesktopSmoothScroll()
  } else {
    setScrollModeMarker('native-mobile')
    destroyLenisIfActive()
    document.documentElement.style.overflowY = 'auto'
    document.body.style.overflowY = 'auto'
  }

  teardown = () => {
    destroyLenisIfActive()
    const root = document.documentElement
    root.style.overflowY = ''
    document.body.style.overflowY = ''
    root.classList.remove('mobile-safe-scroll')
    delete root.dataset.scrollMode
    didInit = false
    teardown = null
  }

  return teardown
}

export function getReducedMotion() {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
  return false
}
