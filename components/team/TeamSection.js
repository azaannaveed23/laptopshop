import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site";
import { teamMembers } from "@/lib/team";
import ChairmanCard from "./ChairmanCard";
import TeamCard from "./TeamCard";
export default function TeamSection() {
    return (<section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Leadership & Specialists" title="Meet Our Executive Team" description={`The tech veterans, hardware specialists, and consultants driving quality and trust at ${siteConfig.name}.`} spacing="mb-16"/>

        <ChairmanCard />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (<TeamCard key={member.name} member={member}/>))}
        </div>
      </div>
    </section>);
}
