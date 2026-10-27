import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";
export default function ContactSection() {
    return (<section id="contact" className="pt-20 pb-12 bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Connect With Us" title="Get in Touch with Our Team" description="Have questions about stock, corporate pricing, or a repair? Send us a message or visit our store."/>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <ContactInfo />
          <ContactForm />
        </div>

        <ContactMap />
      </div>
    </section>);
}
