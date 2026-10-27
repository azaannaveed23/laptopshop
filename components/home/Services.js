import SectionHeading from "@/components/ui/SectionHeading";
import { StrokeIcon } from "@/components/ui/Icons";
const services = [
    {
        icon: "upgrade",
        title: "Hardware Upgrades",
        description: "Instant RAM expansions, Gen4 NVMe SSD upgrades & original battery replacements done in 30 minutes.",
    },
    {
        icon: "repair",
        title: "Chip-Level Repairs",
        description: "Micro-soldering, motherboard power circuit repairs, GPU re-balling and original display panel replacements.",
    },
    {
        icon: "flask",
        title: "Custom OS & AI Setup",
        description: "Genuine Windows / Linux installations, custom driver optimization, and local AI tool stack configurations.",
    },
    {
        icon: "building",
        title: "Corporate Supply",
        description: "Bulk laptop packages with invoice for software houses, BPO centers, and university research labs.",
    },
];
export default function Services() {
    return (<section id="services" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Lab & Diagnostics" title="Professional Tech Squad Services" description="Certified hardware engineers for chip repairs, fast SSD upgrades, and bulk procurement."/>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (<div key={s.title} className="tech-card rounded-2xl p-7 fade-up" data-anim>
              <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-5">
                <StrokeIcon name={s.icon} className="w-7 h-7 text-bblue"/>
              </div>
              <h3 className="font-display font-bold text-lg mb-2 text-slate-900">{s.title}</h3>
              <p className="text-slate-600 text-sm">{s.description}</p>
            </div>))}
        </div>
      </div>
    </section>);
}
