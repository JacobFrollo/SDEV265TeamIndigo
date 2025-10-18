//Navagation found in all pages.

import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";
{
  /*Home navigation function*/
}
//Navagator that takes the viewer to the rest of the site from any page.
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      {/*footer section*/}
      <footer className="bg-muted/50 py-8 text-center text-muted-foreground">
        <div className="container px-4 mx-auto">
          <p>&copy; A Collabrative Endeavor Created By Team Indigo.</p>
        </div>
      </footer>
    </main>
  );
}
