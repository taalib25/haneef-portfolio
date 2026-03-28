type RoutePath = '/' | '/professional' | '/rotaract';

const routeImporters: Record<RoutePath, () => Promise<unknown>> = {
  '/': () => import('../pages/Home'),
  '/professional': () => import('../pages/Professional'),
  '/rotaract': () => import('../pages/Rotaract'),
};

const preloadCache = new Map<RoutePath, Promise<unknown>>();

function preloadWithCache(path: RoutePath): Promise<unknown> {
  const cached = preloadCache.get(path);
  if (cached) return cached;
  const loader = routeImporters[path]();
  preloadCache.set(path, loader);
  return loader;
}

export const loadHome = () => preloadWithCache('/');
export const loadProfessional = () => preloadWithCache('/professional');
export const loadRotaract = () => preloadWithCache('/rotaract');

export function preloadRoute(pathname: string): void {
  const path = pathname as RoutePath;
  if (!(path in routeImporters)) return;
  void preloadWithCache(path);
}

export function preloadAllRoutes(): void {
  (Object.keys(routeImporters) as RoutePath[]).forEach((path) => {
    void preloadWithCache(path);
  });
}

export function preloadAllRoutesOnIdle(): void {
  if (typeof window === 'undefined') return;
  if ('requestIdleCallback' in window) {
    (window as Window & { requestIdleCallback: (cb: IdleRequestCallback) => number }).requestIdleCallback(() => {
      preloadAllRoutes();
    });
    return;
  }
  window.setTimeout(() => {
    preloadAllRoutes();
  }, 220);
}

export function getRoutePreloadHandlers(pathname: string) {
  const preload = () => preloadRoute(pathname);
  return {
    onMouseEnter: preload,
    onFocus: preload,
    onTouchStart: preload,
  };
}
