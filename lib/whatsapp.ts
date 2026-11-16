import { site } from "./site";

export function waLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export interface OrderExtras { name?: string; address?: string; note?: string }

export function orderMessage(product: string, pack: string, qty = 1, extra: OrderExtras = {}, total?: string): string {
  return [
    `Hello ${site.name}! I would like to order:`,
    `Product: ${product}`,
    `Pack size: ${pack}`,
    `Quantity: ${qty}`,
    total ? `Estimated total: ${total}` : "",
    extra.name ? `Name: ${extra.name}` : "",
    extra.address ? `City / address: ${extra.address}` : "",
    extra.note ? `Note: ${extra.note}` : "",
    "Please confirm availability, final price and delivery details.",
  ].filter(Boolean).join("\n");
}

export function bundleMessage(name: string): string {
  return `Hello ${site.name}! I would like to order the gift box: ${name}.\nPlease confirm availability, delivery and gift-message options.`;
}

export const generalMessage = `Hello ${site.name}! I'd like to know more about your products.`;
export const reviewMessage = `Hello ${site.name}! I'd like to share my experience with your products.`;
