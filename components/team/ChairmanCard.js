import Image from "next/image";
import { StarIcon, StrokeIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { chairman } from "@/lib/team";
import { whatsappUrl } from "@/lib/whatsapp";
export default function ChairmanCard() {
    return (<div className="max-w-2xl mx-auto mb-16 fade-up" data-anim>
      <div className="chairman-card rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-1.5 bg-byellow text-slate-900 text-xs font-black uppercase px-4 py-1.5 rounded-full shadow mb-6">
          <StarIcon className="w-4 h-4"/>
          Executive Leadership
        </div>

        <div className="relative w-36 h-36 mx-auto mb-6">
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-byellow shadow-xl bg-slate-100">
            <Image src={chairman.image} alt={chairman.alt} fill sizes="144px" className="object-cover"/>
          </div>
          <span className="absolute bottom-1 right-1 w-7 h-7 bg-bblue text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white shadow">
            ✓
          </span>
        </div>

        <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900">{chairman.name}</h3>
        <p className="text-bblue font-bold text-sm sm:text-base mt-1">{chairman.role}</p>
        <p className="text-slate-600 text-sm mt-4 max-w-lg mx-auto leading-relaxed">{chairman.bio}</p>

        <div className="flex justify-center gap-4 mt-6">
          <a href={`mailto:${chairman.email}`} aria-label="Email the chairman" className="w-9 h-9 rounded-full bg-blue-50 text-bblue hover:bg-bblue hover:text-white flex items-center justify-center transition">
            <StrokeIcon name="mail" className="w-4 h-4" strokeWidth={2}/>
          </a>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Chat with the chairman on WhatsApp" className="w-9 h-9 rounded-full bg-amber-50 text-amber-600 hover:bg-byellow hover:text-slate-900 flex items-center justify-center transition">
            <WhatsAppIcon className="w-4 h-4"/>
          </a>
        </div>
      </div>
    </div>);
}
