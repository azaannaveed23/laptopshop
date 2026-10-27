import Image from "next/image";
import InquiryButton from "@/components/ui/InquiryButton";
const badgeStyles = {
    yellow: "bg-byellow text-slate-900",
    blue: "bg-bblue text-white",
};
export default function ProductCard({ product: p }) {
    return (<div className="tech-card rounded-2xl p-5 fade-up">
      <div className="img-frame relative w-full h-44 rounded-xl border border-slate-200 mb-5">
        <span className={`absolute top-3 left-3 ${badgeStyles[p.badgeTone]} text-[10px] font-bold px-3 py-1 rounded-full badge z-10 shadow-sm`}>
          {p.badge}
        </span>
        <Image src={p.image} alt={p.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover"/>
      </div>
      <h3 className="font-display font-bold text-lg text-slate-900 mb-3">{p.title}</h3>
      <ul className="text-sm text-slate-600 space-y-1.5 mb-4">
        {p.specs.map((spec) => (<li key={spec} className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-bblue shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="5"/>
            </svg>{" "}
            {spec}
          </li>))}
      </ul>
      <div className="flex items-center justify-between text-xs mb-4 border-t border-slate-100 pt-3">
        <span className="text-slate-500 font-medium">{p.condition}</span>
        <span className="text-bblue font-bold">{p.stock}</span>
      </div>
      <div className="flex items-center justify-between gap-3 pt-1">
        <p className="font-display font-black text-bblue text-lg">{p.price}</p>
        <InquiryButton product={p.title} className="bg-byellow hover:bg-byellowHover text-slate-900 text-sm font-bold px-4 py-2.5 rounded-full transition shadow-sm whitespace-nowrap hover:scale-105">
          Inquire / Check Price
        </InquiryButton>
      </div>
    </div>);
}
