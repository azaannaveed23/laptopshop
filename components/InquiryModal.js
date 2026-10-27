"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useInquiry } from "@/context/InquiryContext";
import { StrokeIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { openWhatsApp } from "@/lib/whatsapp";
/** Mounted once in <Providers>; renders nothing until an inquiry is opened. */
export default function InquiryModal() {
    const { productName } = useInquiry();
    // `key` remounts the dialog per product so the prefilled message resets cleanly
    return productName ? <InquiryDialog key={productName} productName={productName}/> : null;
}
function InquiryDialog({ productName }) {
    const { closeInquiry } = useInquiry();
    const boxRef = useRef(null);
    const [message, setMessage] = useState(`Hi, I am interested in "${productName}". Please share stock availability and pricing.`);
    useEffect(() => {
        document.body.style.overflow = "hidden";
        const tween = gsap.fromTo(boxRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.25, ease: "power2.out" });
        const onKeyDown = (e) => {
            if (e.key === "Escape")
                closeInquiry();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => {
            tween.kill();
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [closeInquiry]);
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget)
            closeInquiry();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const field = (name) => String(data.get(name) ?? "").trim();
        openWhatsApp([
            "*New Laptop Inquiry*",
            `*Item:* ${productName}`,
            `*Name:* ${field("name")}`,
            `*Phone:* ${field("phone")}`,
            `*Message:* ${message.trim()}`,
        ]);
        closeInquiry();
    };
    return (<div onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-labelledby="modalProductName" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div ref={boxRef} className="bg-white rounded-3xl p-7 sm:p-8 w-full max-w-md relative shadow-2xl border border-slate-200">
        <button type="button" onClick={closeInquiry} aria-label="Close inquiry form" className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 transition">
          <StrokeIcon name="close" className="w-6 h-6" strokeWidth={2}/>
        </button>
        <span className="text-bblue text-xs font-bold uppercase tracking-widest">Inventory Inquiry</span>
        <h3 id="modalProductName" className="font-display font-bold text-xl mt-1 mb-6 text-slate-900">
          {productName}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input required type="text" name="name" placeholder="Your Full Name" className="form-input"/>
          <input required type="tel" name="phone" placeholder="WhatsApp / Phone Number" className="form-input"/>
          <textarea rows={3} value={message} onChange={(e) => setMessage(e.target.value)} aria-label="Your message" className="form-input resize-none"/>
          <button type="submit" className="w-full bg-byellow hover:bg-byellowHover text-slate-900 font-bold py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2">
            <WhatsAppIcon className="w-4 h-4"/>
            Send Details via WhatsApp
          </button>
        </form>
      </div>
    </div>);
}
