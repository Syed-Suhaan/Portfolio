import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import projects from "../data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-6 bg-background">
        <h1 className="text-7xl font-extrabold text-primary">404</h1>
        <p className="text-muted-foreground">Project not found.</p>
        <Button asChild variant="outline">
          <Link to="/projects">Back to Projects</Link>
        </Button>
      </div>
    );
  }

  const accentColor = project.color || "hsl(var(--primary))";

  return (
    <div className="bg-background min-h-screen pb-16">
      {/* Floating back button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-6 left-6 z-[100] flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-full text-muted-foreground text-sm font-semibold cursor-pointer transition-all duration-300 hover:text-foreground hover:border-white/20 hover:-translate-x-1 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04)]"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      {/* ── Hero Section ── */}
      <section className="pt-32 pb-16 border-b border-border">
        <div className="container max-w-[1200px] mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            {/* Icon */}
            <div className="shrink-0 w-24 h-24 md:w-[120px] md:h-[120px] rounded-2xl md:rounded-3xl bg-gradient-to-br from-card to-background border border-border flex items-center justify-center">
              <div
                className="w-12 h-12 md:w-16 md:h-16"
                style={{
                  backgroundColor: accentColor,
                  maskImage: `url("${project.icon}")`,
                  WebkitMaskImage: `url("${project.icon}")`,
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                }}
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3 flex-wrap">
                <Badge variant="outline" className="text-[0.65rem] font-bold uppercase tracking-wider" style={{ borderColor: accentColor, color: accentColor }}>
                  {project.category}
                </Badge>
                <span className="text-sm text-muted-foreground font-medium">{project.date}</span>
              </div>
              <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tighter uppercase leading-none m-0">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground mt-1 mb-4 m-0">{project.subtitle}</p>
              <p className="text-base leading-relaxed text-muted-foreground max-w-[700px] m-0">{project.description}</p>

              {/* Links */}
              <div className="flex gap-3 mt-6">
                {project.links?.live && (
                  <Button asChild className="text-xs font-semibold uppercase tracking-wider rounded-xl" style={{ backgroundColor: accentColor }}>
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                      Live Site
                    </a>
                  </Button>
                )}
                {project.links?.github && (
                  <Button asChild variant="outline" className="text-xs font-semibold uppercase tracking-wider rounded-xl border-border hover:border-white/20">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="mr-1.5">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Source Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlights / Metrics ── */}
      {project.highlights && project.highlights.length > 0 && (
        <section className="py-16">
          <div className="container max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.highlights.map((h, i) => (
                <Card key={i} className="bg-card border-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] hover:border-white/10 relative" style={{ '--accent': accentColor }}>
                  {/* Left accent bar */}
                  <div className="absolute top-0 left-0 w-1 h-full rounded-l-lg" style={{ backgroundColor: accentColor }} />
                  <CardContent className="p-6 pl-7 flex flex-col gap-1">
                    <span className="text-3xl font-extrabold leading-none" style={{ color: accentColor }}>{h.metric}</span>
                    <span className="text-sm font-bold text-foreground uppercase tracking-wide mt-2">{h.label}</span>
                    <span className="text-xs text-muted-foreground leading-relaxed mt-1">{h.detail}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── What I Built ── */}
      <section className="py-16">
        <div className="container max-w-[1200px] mx-auto px-8">
          <h2 className="text-2xl font-extrabold uppercase tracking-tight mb-8">
            <span className="font-mono font-normal mr-2" style={{ color: accentColor }}>//</span>
            What I Built
          </h2>
          <div className="flex flex-col gap-5 max-w-[800px]">
            {project.bullets.map((bullet, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full shrink-0 mt-2.5" style={{ backgroundColor: accentColor }} />
                <p className="text-[0.95rem] leading-relaxed text-muted-foreground m-0">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Architecture ── */}
      {project.architecture && (
        <section className="py-16">
          <div className="container max-w-[1200px] mx-auto px-8">
            <h2 className="text-2xl font-extrabold uppercase tracking-tight mb-8">
              <span className="font-mono font-normal mr-2" style={{ color: accentColor }}>//</span>
              Architecture
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground max-w-[800px] mb-8 m-0">{project.architecture.overview}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.architecture.layers.map((layer, i) => (
                <Card key={i} className="bg-card border-border transition-all duration-300 hover:-translate-y-1 hover:border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-sm font-bold opacity-70" style={{ color: accentColor }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-sm font-bold uppercase tracking-wide m-0">{layer.name}</h3>
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground m-0">{layer.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Version History (ALRA only) ── */}
      {project.versionHistory && (
        <section className="py-16">
          <div className="container max-w-[1200px] mx-auto px-8">
            <h2 className="text-2xl font-extrabold uppercase tracking-tight mb-8">
              <span className="font-mono font-normal mr-2" style={{ color: accentColor }}>//</span>
              {project.versionHistory.title}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground max-w-[800px] mb-8 m-0">{project.versionHistory.intro}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {project.versionHistory.versions.map((ver, i) => (
                <Card
                  key={i}
                  className={`bg-card border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] ${ver.version === '2.0' ? 'border-primary/40 bg-gradient-to-br from-primary/[0.03] to-card' : ''}`}
                >
                  <CardContent className="p-7">
                    <div className="flex items-center gap-3 mb-5">
                      <Badge
                        className="text-[0.65rem] font-extrabold uppercase tracking-wider"
                        style={{
                          backgroundColor: ver.version === '2.0' ? accentColor : 'transparent',
                          border: ver.version === '1.0' ? '1px solid hsl(var(--border))' : 'none',
                          color: ver.version === '2.0' ? '#fff' : 'hsl(var(--muted-foreground))',
                        }}
                      >
                        v{ver.version}
                      </Badge>
                      <div>
                        <h3 className="text-base font-extrabold uppercase tracking-tight m-0">{ver.label}</h3>
                        <span className="text-xs text-muted-foreground">{ver.date}</span>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground mb-5 m-0">{ver.description}</p>

                    <div className="mb-4">
                      <h4 className="text-[0.65rem] uppercase tracking-[0.1em] font-bold mb-2 m-0" style={{ color: accentColor }}>Features</h4>
                      <ul className="list-none p-0 m-0 flex flex-col gap-2">
                        {ver.features.map((f, j) => (
                          <li key={j} className="text-xs leading-relaxed text-muted-foreground pl-4 relative">
                            <span className="absolute left-0 font-bold" style={{ color: accentColor }}>›</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {ver.limitations && (
                      <div className="mb-4">
                        <h4 className="text-[0.65rem] uppercase tracking-[0.1em] text-red-400 font-bold mb-2 m-0">Limitations</h4>
                        <ul className="list-none p-0 m-0 flex flex-col gap-2">
                          {ver.limitations.map((l, j) => (
                            <li key={j} className="text-xs leading-relaxed text-muted-foreground pl-4 relative">
                              <span className="absolute left-0 font-bold text-red-400">›</span>
                              {l}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {ver.improvements && (
                      <div>
                        <h4 className="text-[0.65rem] uppercase tracking-[0.1em] text-green-400 font-bold mb-2 m-0">What Changed</h4>
                        <ul className="list-none p-0 m-0 flex flex-col gap-2">
                          {ver.improvements.map((imp, j) => (
                            <li key={j} className="text-xs leading-relaxed text-muted-foreground pl-4 relative">
                              <span className="absolute left-0 font-bold text-green-400">›</span>
                              {imp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Benchmarks (SusyDB only) ── */}
      {project.benchmarks && (
        <section className="py-16">
          <div className="container max-w-[1200px] mx-auto px-8">
            <h2 className="text-2xl font-extrabold uppercase tracking-tight mb-8">
              <span className="font-mono font-normal mr-2" style={{ color: accentColor }}>//</span>
              Benchmarks
            </h2>
            <p className="text-xs text-muted-foreground font-medium mb-5">
              50 Concurrent Clients · 100,000 Requests · Small (16B) payloads · Windows 11
            </p>
            <Card className="bg-card border-border overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="text-left p-4 font-bold uppercase text-[0.65rem] tracking-wider text-muted-foreground border-b border-border whitespace-nowrap">Workload</th>
                    <th className="text-left p-4 font-bold uppercase text-[0.65rem] tracking-wider text-muted-foreground border-b border-border whitespace-nowrap">Redis (RPS / P99)</th>
                    <th className="text-left p-4 font-bold uppercase text-[0.65rem] tracking-wider text-muted-foreground border-b border-border whitespace-nowrap">SusyDB (RPS / P99)</th>
                    <th className="text-left p-4 font-bold uppercase text-[0.65rem] tracking-wider text-muted-foreground border-b border-border whitespace-nowrap">Gain</th>
                  </tr>
                </thead>
                <tbody>
                  {project.benchmarks.map((b, i) => (
                    <tr key={i} className="border-b border-white/[0.03] last:border-b-0">
                      <td className="p-4 font-semibold text-foreground whitespace-nowrap">{b.workload}</td>
                      <td className="p-4 text-muted-foreground whitespace-nowrap">{b.redis}</td>
                      <td className="p-4 font-bold whitespace-nowrap" style={{ color: accentColor }}>{b.susydb}</td>
                      <td className="p-4 font-extrabold text-primary whitespace-nowrap">{b.gain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        </section>
      )}

      {/* ── Tech Stack ── */}
      <section className="py-16">
        <div className="container max-w-[1200px] mx-auto px-8">
          <h2 className="text-2xl font-extrabold uppercase tracking-tight mb-8">
            <span className="font-mono font-normal mr-2" style={{ color: accentColor }}>//</span>
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-white/15">
                {tech.icon && (
                  <div
                    className="w-[18px] h-[18px]"
                    style={{
                      backgroundColor: accentColor,
                      maskImage: `url("${tech.icon}")`,
                      WebkitMaskImage: `url("${tech.icon}")`,
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                    }}
                  />
                )}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Navigation Footer ── */}
      <section className="py-16 border-t border-border mt-8">
        <div className="container max-w-[1200px] mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {(() => {
              const idx = projects.findIndex((p) => p.slug === slug);
              const prev = idx > 0 ? projects[idx - 1] : null;
              const next = idx < projects.length - 1 ? projects[idx + 1] : null;
              return (
                <>
                  {prev ? (
                    <Link to={`/projects/${prev.slug}`} className="text-muted-foreground hover:text-foreground transition-colors flex flex-col gap-1 no-underline">
                      <span className="text-[0.65rem] uppercase tracking-wider font-semibold">← Previous</span>
                      <span className="text-lg font-bold">{prev.title}</span>
                    </Link>
                  ) : <div />}
                  <Link to="/projects" className="text-sm font-bold uppercase tracking-wider text-primary no-underline hover:underline underline-offset-4">
                    All Projects
                  </Link>
                  {next ? (
                    <Link to={`/projects/${next.slug}`} className="text-muted-foreground hover:text-foreground transition-colors flex flex-col gap-1 text-right no-underline">
                      <span className="text-[0.65rem] uppercase tracking-wider font-semibold">Next →</span>
                      <span className="text-lg font-bold">{next.title}</span>
                    </Link>
                  ) : <div />}
                </>
              );
            })()}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
