import { SITE } from '../../config/site';

export function pageTitle(title?: string): string {
  return title ? `${title} | ${SITE.name}` : `${SITE.name} | Fotografia documental`;
}

// Canonical só é gerada quando o domínio definitivo (`site`) estiver configurado.
export function canonicalUrl(pathname: string, site?: URL): string | undefined {
  return site ? new URL(pathname, site).href : undefined;
}
