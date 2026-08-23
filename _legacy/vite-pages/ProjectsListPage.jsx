import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import projects from "../data/projects";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectListCard = ({ project, delay }) => {
  const ref = useIntersectionObserver({ threshold: 0.1 });
  const accentColor = project.color || "hsl(var(--primary))";

  return (
    <Link to={`/projects/${project.slug}`} className="no-underline group">
      <Card
        ref={ref}
        className="reveal-fade-up bg-card border-border overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)] hover:border-white/10 h-full"
        style={{ '--delay': `${delay}s` }}
      >
        <div className="h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out" style={{ backgroundColor: accentColor }} />

        <CardHeader className="p-6 pb-3">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="outline" className="text-[0.6rem] font-bold uppercase tracking-wider" style={{ borderColor: accentColor, color: accentColor }}>
              {project.category}
            </Badge>
            <span className="text-xs text-muted-foreground font-medium">{project.date}</span>
          </div>
          <h3 className="text-xl font-extrabold uppercase tracking-tight text-foreground group-hover:text-white transition-colors m-0">
            {project.title}
          </h3>
          <p className="text-xs text-muted-foreground font-medium mt-1 m-0">{project.subtitle}</p>
        </CardHeader>

        <CardContent className="p-6 pt-0">
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-5">
            {project.description}
          </p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="flex gap-4 mb-4">
              {project.highlights.slice(0, 3).map((h, i) => (
                <div key={i} className="flex items-baseline gap-1.5">
                  <span className="text-lg font-extrabold" style={{ color: accentColor }}>{h.metric}</span>
                  <span className="text-[0.6rem] text-muted-foreground uppercase font-semibold">{h.label}</span>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.tags?.slice(0, 5).map(tag => (
              <span key={tag} className="text-[0.6rem] font-semibold px-2.5 py-0.5 rounded-full border border-border text-muted-foreground bg-secondary/50">
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

const ProjectsListPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen pb-16">
      {/* Floating back button */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-6 left-6 z-[100] flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-full text-muted-foreground text-sm font-semibold cursor-pointer transition-all duration-300 hover:text-foreground hover:border-white/20 hover:-translate-x-1 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04)]"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Home
      </button>

      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="container max-w-[1200px] mx-auto px-8">
          <p className="text-xs uppercase tracking-[0.12em] text-primary font-bold mb-2 m-0">Portfolio</p>
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold uppercase tracking-tighter text-foreground m-0">
            All Projects
          </h1>
          <p className="text-lg text-muted-foreground mt-3 max-w-[600px] m-0">
            A collection of engineering work spanning systems programming, AI/ML, SaaS, and mobile development.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section>
        <div className="container max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project, index) => (
              <ProjectListCard key={project.slug} project={project} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsListPage;
