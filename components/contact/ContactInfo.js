import { StrokeIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { whatsappUrl } from "@/lib/whatsapp";
const details = [
    {
        icon: "location",
        label: "Physical Store Address",
        value: "Shop #12, Hafeez Center, Main Boulevard, Gulberg III, Lahore, Pakistan",
        link: { href: "https://maps.google.com/?q=Hafeez+Center+Lahore", text: "Open in Google Maps →" },
    },
    { icon: "mail", label: "Official Email", value: "info@yourdomain.com | support@yourdomain.com" },
    { icon: "phone", label: "Phone & WhatsApp Hotline", value: "+92 300 1234567 | +92 42 3571 8899" },
    { icon: "clock", label: "Store Timings", value: "Monday – Saturday: 11:30 AM – 9:30 PM (Sunday Closed)" },
];
export default function ContactInfo() {
    return (<div className="fade-up" data-anim>
      <div className="space-y-6">
        {details.map((d) => (<div key={d.label} className="flex items-start gap-4">
            <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center">
              <StrokeIcon name={d.icon} className="w-6 h-6 text-bblue"/>
            </div>
            <div>
              <p className="font-bold text-slate-900">{d.label}</p>
              <p className="text-slate-600 text-sm mt-0.5">{d.value}</p>
              {d.link && (<a href={d.link.href} target="_blank" rel="noopener noreferrer" className="text-bblue text-sm font-semibold hover:underline mt-1 inline-block">
                  {d.link.text}
                </a>)}
            </div>
          </div>))}
      </div>

      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 bg-bblue hover:bg-bblueDark text-white font-bold px-6 py-3.5 rounded-full shadow-md transition hover:scale-105">
        <WhatsAppIcon className="w-4 h-4"/>
        Quick Chat on WhatsApp
      </a>
    </div>);
}
