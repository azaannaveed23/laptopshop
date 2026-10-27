export default function SectionHeading({ eyebrow, title, description, spacing = "mb-14" }) {
    return (<div className={`text-center ${spacing} fade-up`} data-anim>
      <span className="text-bblue font-bold text-sm uppercase tracking-widest">{eyebrow}</span>
      <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 mt-2">{title}</h2>
      <p className="text-slate-500 mt-2.5 max-w-xl mx-auto">{description}</p>
    </div>);
}
