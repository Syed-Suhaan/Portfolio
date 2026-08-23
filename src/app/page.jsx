import AboutSection from "@/components/sections/about";
import NewsSection from "@/components/sections/news";
import WorkSection from "@/components/sections/work";
import ExperienceSection from "@/components/sections/experience";
import ContactSection from "@/components/sections/contact";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[920px] px-7 pb-16 pt-8">
      <AboutSection />
      <NewsSection />
      <WorkSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
