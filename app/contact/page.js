import ContactSection from "@/components/contact/ContactSection";
import TeamSection from "@/components/team/TeamSection";

export const metadata = {
  title: "Contact Us",
  description: "Meet our team, find our Hafeez Center store, or send us a message on WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <TeamSection />
      <ContactSection />
    </>
  );
}
