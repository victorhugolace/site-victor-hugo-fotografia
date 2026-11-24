import { SITE } from '../config/site';

// Módulo único dos canais de contato. Um formulário com servidor, no futuro,
// só precisará de um novo "destino" aqui.
export const hasEmail = () => SITE.contactEmail.trim() !== '';
export const hasWhatsapp = () => /^\d{10,15}$/.test(SITE.whatsappNumber);

export function mailtoLink(subject: string, body = ''): string {
  return `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function whatsappLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
