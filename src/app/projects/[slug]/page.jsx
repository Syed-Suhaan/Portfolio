import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — Syed Suhaan`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className="mx-auto max-w-[920px] px-7 pb-16 pt-8">
      <Button variant="ghost" size="sm" asChild className="mb-8 -ml-2 text-muted-foreground">
        <Link href="/#work">← Back to work</Link>
      </Button>

      <header className="mb-10 border-b border-border pb-8">
        <p className="mb-2 text-sm text-muted-foreground">
          {project.category} · {project.date}
        </p>
        <h1 className="font-serif text-[clamp(2rem,5vw,2.75rem)] font-normal leading-tight tracking-tight text-foreground">
          {project.title}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">{project.subtitle}</p>
        <p className="mt-4 max-w-[65ch] text-[17px] leading-relaxed text-foreground/90">
          {project.description}
        </p>

        {project.highlights?.length > 0 && (
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {project.highlights.slice(0, 4).map((h) => (
              <div key={h.label}>
                <span className="font-serif text-2xl text-foreground">{h.metric}</span>
                <span className="mt-1 block text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {h.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </header>

      {project.bullets?.length > 0 && (
        <section className="mb-10">
          <h2 className="font-serif mb-4 text-[22px] font-normal text-foreground">Overview</h2>
          <ul className="m-0 list-none space-y-3 p-0">
            {project.bullets.map((bullet) => (
              <li key={bullet.slice(0, 40)} className="relative pl-5 text-[15px] leading-relaxed text-muted-foreground before:absolute before:left-0 before:content-['▸'] before:text-foreground">
                {bullet}
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.tags?.length > 0 && (
        <section className="mb-10">
          <h2 className="font-serif mb-4 text-[22px] font-normal text-foreground">Stack</h2>
          <p className="text-[15px] text-muted-foreground">{project.tags.join(" · ")}</p>
        </section>
      )}

      {(project.links?.github || project.links?.live) && (
        <>
          <Separator className="mb-6 bg-border" />
          <div className="flex flex-wrap gap-3">
            {project.links.github && (
              <Button asChild variant="outline" size="sm">
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
            )}
            {project.links.live && (
              <Button asChild variant="outline" size="sm">
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  Live demo
                </a>
              </Button>
            )}
          </div>
        </>
      )}
    </main>
  );
}
