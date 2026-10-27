import { siteConfig } from "./site";
export function whatsappUrl(text) {
    const base = `https://wa.me/${siteConfig.whatsappNumber}`;
    return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
/** Client-only: opens WhatsApp with a multi-line message. */
export function openWhatsApp(lines) {
    window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
}
