import Link from "next/link";
import { selectedWork } from "@/data/profile";
import { Separator } from "@/components/ui/separator";

export default function WorkSection() {
  return (
    <section id="work" className="mb-11">
      <h2 className="font-serif mb-4 text-[26px] font-normal tracking-tight text-foreground">
        Selected <em className="text-muted-foreground not-italic">work</em>
      </h2>

      <div className="flex flex-col">
        {selectedWork.map((project, index) => (
          <div key={project.slug}>
            {index > 0 && <Separator className="bg-border" />}
            <Link
              href={`/projects/${project.slug}`}
              className="group grid grid-cols-1 items-start gap-4 py-4 no-underline transition-colors hover:opacity-90 md:grid-cols-[1fr_auto]"
            >
              <div>
                <h3 className="mb-1.5 text-lg font-bold text-foreground group-hover:underline group-hover:underline-offset-2">
                  {project.title}
                </h3>
                <p className="m-0 max-w-[54ch] text-[15px] leading-snug text-muted-foreground">
                  {project.description}
                </p>
              </div>
              <div className="text-left md:text-right">
                <span className="font-serif text-[28px] leading-none text-foreground">
                  {project.metric}
                </span>
                <span className="mt-1 block text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {project.metricLabel}
                </span>
              </div>
            </Link>
          </div>
        ))}
        <Separator className="bg-border" />
      </div>
    </section>
  );
}
