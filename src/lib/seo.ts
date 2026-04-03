function updateMeta(selector: string, content: string): void {
  const node = document.head.querySelector<HTMLMetaElement>(selector);
  if (node) {
    node.setAttribute('content', content);
  }
}

function updateLink(selector: string, href: string): void {
  const node = document.head.querySelector<HTMLLinkElement>(selector);
  if (node) {
    node.setAttribute('href', href);
  }
}

export function syncRuntimeSeoUrls(): void {
  if (typeof window === 'undefined') return;

  const origin = window.location.origin;
  const url = `${origin}${window.location.pathname}`;
  const image = `${origin}/og-image.png`;

  updateLink('link[rel="canonical"]', url);

  updateMeta('meta[property="og:url"]', url);
  updateMeta('meta[property="og:image"]', image);

  const personSchema = Array.from(
    document.head.querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"]')
  ).find((script) => script.textContent?.includes('"@type": "Person"'));

  if (personSchema?.textContent) {
    try {
      const parsed = JSON.parse(personSchema.textContent);
      parsed.url = url;
      parsed.image = image;
      personSchema.textContent = JSON.stringify(parsed, null, 2);
    } catch {
    }
  }
}
