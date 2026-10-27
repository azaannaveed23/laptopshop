import Image from "next/image";
export default function TeamCard({ member }) {
    return (<div className="tech-card rounded-2xl p-6 text-center fade-up" data-anim>
      <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-slate-200 mb-4 bg-slate-100">
        <Image src={member.image} alt={member.alt} fill sizes="96px" className="object-cover"/>
      </div>
      <h4 className="font-display font-bold text-lg text-slate-900">{member.name}</h4>
      <p className="text-bblue font-semibold text-xs uppercase tracking-wider mt-0.5">{member.role}</p>
      <p className="text-slate-500 text-xs mt-3">{member.bio}</p>
    </div>);
}
