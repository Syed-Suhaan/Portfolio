import Image from "next/image";
import { profile } from "@/data/profile";

export default function AboutSection() {
  return (
    <section id="about" className="mb-11 grid grid-cols-1 items-start gap-8 border-b border-border pb-9 md:grid-cols-[160px_1fr] md:gap-8">
      <div className="relative mx-auto md:mx-0">
        <Image
          src="/profile.png"
          alt={profile.name}
          width={160}
          height={200}
          className="block h-[200px] w-[160px] rounded-sm bg-muted object-cover grayscale"
          priority
        />
        <span
          className="absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-background bg-foreground"
          aria-hidden="true"
        />
      </div>

      <div>
        <h1 className="font-serif text-[clamp(2rem,5vw,2.75rem)] font-normal leading-tight tracking-tight text-foreground">
          {profile.name}
        </h1>
        <p className="mb-5 mt-1.5 text-[15px] font-medium text-muted-foreground">
          {profile.affiliation}
        </p>

        {profile.bio.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="mb-4 max-w-[52ch] text-[17px] leading-relaxed text-foreground/90 last:mb-0">
            {paragraph}
          </p>
        ))}

        <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-foreground/90">
          Reach me at{" "}
          <a href={`mailto:${profile.email}`} className="text-foreground underline underline-offset-[3px] hover:opacity-70">
            {profile.email}
          </a>{" "}
          if you want to talk agents, memory systems, or collaboration.
        </p>
      </div>
    </section>
  );
}
