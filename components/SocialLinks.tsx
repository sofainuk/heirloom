import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "./Icons";
import { site } from "@/lib/site";
import { generalMessage, waLink } from "@/lib/whatsapp";

/** Facebook · Instagram · TikTok · WhatsApp. Links come from lib/site.ts. */
export default function SocialLinks({ variant = "round", className = "" }: { variant?: "round" | "labelled" | "bar"; className?: string }) {
  const items = [
    { name: "WhatsApp", href: waLink(generalMessage), Icon: WhatsAppIcon, hover: "hover:bg-[#25D366] hover:text-emerald-950" },
    { name: "Instagram", href: site.socials.instagram, Icon: InstagramIcon, hover: "hover:bg-gradient-to-br hover:from-[#f9a03f] hover:via-[#e1306c] hover:to-[#7b3fe4] hover:text-white" },
    { name: "Facebook", href: site.socials.facebook, Icon: FacebookIcon, hover: "hover:bg-[#1877f2] hover:text-white" },
    { name: "TikTok", href: site.socials.tiktok, Icon: TikTokIcon, hover: "hover:bg-white hover:text-ink" },
  ].filter((i) => i.href);

  if (variant === "labelled") {
    return (
      <ul className={`grid gap-3 sm:grid-cols-2 ${className}`}>
        {items.map(({ name, href, Icon }) => (
          <li key={name}>
            <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl bg-white/[0.07] p-4 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/[0.12]">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 text-ink"><Icon className="h-6 w-6" /></span>
              <span><b className="block text-lg text-ivory">{name}</b><span className="text-sm text-ivory/60">Follow &amp; message us</span></span>
            </a>
          </li>
        ))}
      </ul>
    );
  }
  const size = variant === "bar" ? "h-8 w-8" : "h-11 w-11";
  const tone = variant === "bar" ? "bg-white/10 text-gold-200" : "bg-white/10 text-ivory";
  return (
    <ul className={`flex items-center gap-2.5 ${className}`}>
      {items.map(({ name, href, Icon, hover }) => (
        <li key={name}>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${name} — ${site.name}`} className={`grid ${size} place-items-center rounded-full transition-all duration-300 hover:-translate-y-0.5 ${tone} ${hover}`}>
            <Icon className={variant === "bar" ? "h-4 w-4" : "h-5 w-5"} />
          </a>
        </li>
      ))}
    </ul>
  );
}
