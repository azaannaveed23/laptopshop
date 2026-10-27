"use client";
import { openWhatsApp } from "@/lib/whatsapp";
const labelClass = "block text-xs font-bold text-slate-700 uppercase mb-1";
export default function ContactForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const field = (name) => String(data.get(name) ?? "").trim();
        openWhatsApp([
            "*New Contact Message*",
            `*Name:* ${field("name")}`,
            `*Email:* ${field("email")}`,
            `*Phone:* ${field("phone")}`,
            `*Message:* ${field("message")}`,
        ]);
        form.reset();
    };
    return (<div className="tech-card rounded-3xl p-7 sm:p-9 fade-up" data-anim>
      <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Send Us a Direct Message</h3>
      <p className="text-slate-500 text-xs mb-6">Fill in your information and our sales team will reply within 30 minutes.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="cName" className={labelClass}>Full Name</label>
          <input required type="text" id="cName" name="name" placeholder="e.g. Muhammad Ali" className="form-input"/>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="cEmail" className={labelClass}>Email Address</label>
            <input required type="email" id="cEmail" name="email" placeholder="ali@example.com" className="form-input"/>
          </div>
          <div>
            <label htmlFor="cPhone" className={labelClass}>Phone / WhatsApp</label>
            <input required type="tel" id="cPhone" name="phone" placeholder="0300 1234567" className="form-input"/>
          </div>
        </div>

        <div>
          <label htmlFor="cMessage" className={labelClass}>Message</label>
          <textarea required id="cMessage" name="message" rows={4} placeholder="Describe the machine you are looking for, or your repair problem..." className="form-input resize-none"/>
        </div>

        <button type="submit" className="w-full bg-byellow hover:bg-byellowHover text-slate-900 font-bold py-3.5 rounded-xl transition shadow-md hover:scale-[1.01]">
          Submit Message via WhatsApp
        </button>
      </form>
    </div>);
}
