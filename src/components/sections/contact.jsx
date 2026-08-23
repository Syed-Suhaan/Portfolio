import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="mb-11">
      <div className="rounded-[10px] border border-border bg-card p-7">
        <h2 className="font-serif mb-2.5 text-[26px] font-normal tracking-tight text-foreground">
          Contact
        </h2>
        <p className="mb-3.5 max-w-[48ch] text-[15px] text-muted-foreground">
          {profile.contactNote}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="text-xl font-semibold text-foreground underline underline-offset-4 hover:opacity-75"
        >
          {profile.email}
        </a>

        <div className="mt-4 flex flex-wrap gap-3">
          <Button asChild size="sm" className="bg-foreground text-background hover:bg-foreground/90">
            <a href={`mailto:${profile.email}`}>Email</a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href={profile.resume}>Resume</a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
