import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import projects from '../data/projects';

const ProjectCard = ({ project, delay }) => {
    const ref = useIntersectionObserver({ threshold: 0.1 });
    const accentColor = project.color || 'hsl(var(--primary))';

    return (
        <Link to={`/projects/${project.slug}`} className="no-underline group">
            <Card
                ref={ref}
                className="reveal-fade-up bg-card border-border overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)] hover:border-white/10 h-full"
                style={{ '--delay': `${delay}s` }}
            >
                {/* Accent top bar */}
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

                    {/* Metric Preview */}
                    {project.highlights && project.highlights.length > 0 && (
                        <div className="flex gap-4 mb-4">
                            {project.highlights.slice(0, 2).map((h, i) => (
                                <div key={i} className="flex items-baseline gap-1.5">
                                    <span className="text-lg font-extrabold" style={{ color: accentColor }}>{h.metric}</span>
                                    <span className="text-[0.6rem] text-muted-foreground uppercase font-semibold">{h.label}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.tags?.slice(0, 4).map(tag => (
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

const Projects = () => {
    return (
        <section id="projects" className="section py-24 bg-background">
            <div className="container max-w-[1200px] mx-auto px-8">
                {/* Section Header */}
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <p className="text-xs uppercase tracking-[0.12em] text-primary font-bold mb-2 m-0">
                            Selected Work
                        </p>
                        <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold uppercase tracking-tight text-foreground m-0">
                            Projects
                        </h2>
                    </div>
                    <Link to="/projects">
                        <Button variant="ghost" className="text-muted-foreground hover:text-primary text-sm font-semibold uppercase tracking-wider group">
                            View All
                            <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Button>
                    </Link>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.slug} project={project} delay={index * 0.12} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
