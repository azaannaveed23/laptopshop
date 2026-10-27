import { StrokeIcon } from "@/components/ui/Icons";
const tones = {
    blue: { wrap: "bg-blue-50 border border-blue-200", icon: "text-bblue" },
    amber: { wrap: "bg-amber-50 border border-amber-200", icon: "text-amber-500" },
};
const badges = [
    { icon: "shield", tone: "blue", title: "7-Day Replacement", text: "Peace of mind testing warranty" },
    { icon: "database", tone: "amber", title: "100% Genuine Hardware", text: "Original chargers & parts only" },
    { icon: "cog", tone: "blue", title: "Free Benchmarking", text: "Full stress test before dispatch" },
    { icon: "technician", tone: "amber", title: "Senior Technicians", text: "15+ years in Hafeez Center" },
];
export default function WhyUs() {
    return (<section id="why-us" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="tech-card rounded-3xl py-12 px-6 sm:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center fade-up" data-anim>
          {badges.map((b) => (<div key={b.title}>
              <div className={`w-16 h-16 mx-auto rounded-full ${tones[b.tone].wrap} flex items-center justify-center mb-4`}>
                <StrokeIcon name={b.icon} className={`w-8 h-8 ${tones[b.tone].icon}`}/>
              </div>
              <h4 className="font-bold text-slate-900 mb-1">{b.title}</h4>
              <p className="text-slate-500 text-sm">{b.text}</p>
            </div>))}
        </div>
      </div>
    </section>);
}
