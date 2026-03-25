function isMobile(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

interface DeepLinkConfig {
  app: string;
  web: string;
}

export function openAppOrWeb(config: DeepLinkConfig, event?: React.MouseEvent): void {
  if (event) {
    event.preventDefault();
  }

  if (!isMobile()) {
    window.open(config.web, '_blank', 'noopener,noreferrer');
    return;
  }

  const startTime = Date.now();
  const fallbackTimeout = 2500;

  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = config.app;
  document.body.appendChild(iframe);

  const fallback = setTimeout(() => {
    if (Date.now() - startTime < fallbackTimeout + 500) {
      window.open(config.web, '_blank', 'noopener,noreferrer');
    }
    document.body.removeChild(iframe);
  }, fallbackTimeout);

  const onVisibilityChange = () => {
    if (document.hidden) {
      clearTimeout(fallback);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      setTimeout(() => {
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe);
        }
      }, 100);
    }
  };

  document.addEventListener('visibilitychange', onVisibilityChange);

  setTimeout(() => {
    clearTimeout(fallback);
    document.removeEventListener('visibilitychange', onVisibilityChange);
    if (document.body.contains(iframe)) {
      document.body.removeChild(iframe);
    }
  }, fallbackTimeout + 1000);
}

export const deepLinks = {
  linkedin: (username: string): DeepLinkConfig => ({
    app: `linkedin://in/${username}`,
    web: `https://www.linkedin.com/in/${username}`,
  }),
  instagram: (username: string): DeepLinkConfig => ({
    app: `instagram://user?username=${username}`,
    web: `https://www.instagram.com/${username}`,
  }),
  twitter: (username: string): DeepLinkConfig => ({
    app: `twitter://user?screen_name=${username}`,
    web: `https://x.com/${username}`,
  }),
  facebook: (id: string): DeepLinkConfig => ({
    app: `fb://profile/${id}`,
    web: `https://www.facebook.com/${id}`,
  }),
  whatsapp: (phone: string): DeepLinkConfig => ({
    app: `whatsapp://send?phone=${phone}`,
    web: `https://wa.me/${phone}`,
  }),
  youtube: (channel: string): DeepLinkConfig => ({
    app: `youtube://channel/${channel}`,
    web: `https://www.youtube.com/@${channel}`,
  }),
};
