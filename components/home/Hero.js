import Image from "next/image";
import Link from "next/link";
import InquiryButton from "@/components/ui/InquiryButton";
const featuredSpecs = [
    "Intel Core i9-13980HX, 13th Gen (24 Cores)",
    "32GB DDR5 4800MHz | 1TB PCIe 4.0 SSD",
    "NVIDIA GeForce RTX 4070 8GB GDDR6",
    '16" QHD+ 240Hz Nebula Display',
];
const stats = [
    { value: "500+", label: "Laptops Sold" },
    { value: "7-Day", label: "Warranty Support" },
    { value: "100%", label: "Genuine Hardware" },
];
export default function Hero() {
    return (<section id="home" className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-blue-50/60 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="fade-up" data-anim>
          <span className="inline-flex items-center gap-2 bg-blue-100 text-bblue px-4 py-1.5 rounded-full text-xs font-bold mb-6">
            <span className="w-2 h-2 bg-bblue rounded-full animate-pulse"/> Hafeez Center, Lahore&apos;s Tech Hub
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.15] text-slate-900 mb-6">
            Next-Gen <span className="text-bblue">Laptops</span> &amp;
            <br /> Elite Computing <span className="text-amber-500">Solutions</span>
          </h1>
          <p className="text-slate-600 text-lg mb-8 max-w-xl leading-relaxed">
            From RTX gaming beasts to sleek business ultrabooks and Apple MacBooks — explore our handpicked showcase of brand-new &amp; grade-A refurbished machines backed by verified warranties.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/#inventory" className="bg-bblue hover:bg-bblueDark text-white font-bold px-7 py-3.5 rounded-full shadow-md transition hover:scale-105">
              Explore Inventory
            </Link>
            <InquiryButton product="General Tech Consultation" className="bg-white border-2 border-slate-300 text-slate-800 font-bold px-7 py-3.5 rounded-full hover:border-bblue hover:text-bblue transition">
              Get Quick Quote
            </InquiryButton>
          </div>

          <div className="flex gap-8 mt-10 pt-8 border-t border-slate-200 text-sm">
            {stats.map((s) => (<div key={s.label}>
                <p className="font-display font-black text-2xl text-bblue">{s.value}</p>
                <p className="text-slate-500">{s.label}</p>
              </div>))}
          </div>
        </div>

        {/* Featured Deal Card */}
        <div className="fade-up" data-anim>
          <div className="relative tech-card rounded-3xl p-6 sm:p-8 max-w-md mx-auto border-2 border-blue-100 shadow-xl">
            <div className="absolute -top-4 left-6 bg-byellow text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full badge shadow-md z-10">
              ⭐ Best Value / Gamer&apos;s Choice
            </div>

            <div className="flex justify-between items-start mb-4 mt-2">
              <div>
                <p className="text-xs text-bblue font-bold uppercase tracking-wider">Top Pick Of The Week</p>
                <h3 className="font-display font-bold text-2xl mt-0.5 text-slate-900">ASUS ROG Strix G16</h3>
              </div>
              <span className="bg-bblue text-white text-[11px] font-bold px-3 py-1 rounded-full badge">Brand New</span>
            </div>

            <div className="img-frame w-full h-52 rounded-2xl border border-slate-200 mb-5">
              <Image src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80" alt="ASUS ROG Strix Gaming Laptop" fill priority sizes="(min-width: 1024px) 448px, 100vw" className="object-cover"/>
            </div>

            <ul className="text-sm text-slate-600 space-y-2 mb-6">
              {featuredSpecs.map((spec) => (<li key={spec} className="flex items-center gap-2">
                  <span className="text-amber-500 font-bold">●</span> {spec}
                </li>))}
            </ul>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div>
                <p className="text-slate-400 text-xs line-through">PKR 695,000</p>
                <p className="text-bblue font-display font-black text-2xl">PKR 629,000</p>
              </div>
              <InquiryButton product="ASUS ROG Strix G16 (i9 / RTX 4070)" className="bg-byellow hover:bg-byellowHover text-slate-900 font-bold px-5 py-3 rounded-full shadow-md hover:scale-105 transition text-sm">
                Check Price
              </InquiryButton>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
