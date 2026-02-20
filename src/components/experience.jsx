import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
    {
        type: 'open-source',
        title: 'Kubeflow',
        role: 'Open Source Contributor',
        date: 'Dec 2025',
        color: '#4285F4',
        bullets: [
            'Contributed to the official Kubeflow documentation, adding guides for TorchTune and LoRA support, improving usability for practitioners adopting fine‑tuning workflows.',
            'Collaborated with project maintainers to successfully merge PR #4257, ensuring technical accuracy and alignment with upstream standards.',
        ],
        tags: ['TorchTune', 'LoRA', 'Documentation', 'Kubernetes'],
        link: 'https://github.com/kubeflow/website/pull/4257',
        linkLabel: 'PR #4257',
    },
    {
        type: 'internship',
        title: 'InternLoom',
        role: 'App Developer Intern',
        date: 'Mar 2025 – May 2025',
        color: '#FF9F43',
        bullets: [
            'Delivered a 20+ screen production mobile application, optimizing Firestore queries with pagination to reduce dashboard load time by 40% (~800 ms) on low‑end devices.',
            'Integrated 5+ REST APIs with a centralized error‑handling layer, significantly reducing crash rates during QA testing.',
        ],
        tags: ['Flutter', 'Firestore', 'REST APIs', 'Mobile'],
        link: null,
        linkLabel: null,
    },
];

const ExperienceCard = ({ exp, delay }) => {
    const ref = useIntersectionObserver({ threshold: 0.1 });
    const isOSS = exp.type === 'open-source';

    return (
        <Card
            ref={ref}
            className="reveal-fade-up bg-card border-border overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)] group h-full"
            style={{ '--delay': `${delay}s` }}
        >
            {/* Top accent bar */}
            <div className="h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out" style={{ backgroundColor: exp.color }} />

            <CardHeader className="p-6 pb-3">
                <div className="flex items-center justify-between mb-3">
                    <Badge
                        variant="outline"
                        className="text-[0.6rem] font-bold uppercase tracking-wider flex items-center gap-1.5"
                        style={{ borderColor: `${exp.color}50`, color: exp.color, backgroundColor: `${exp.color}10` }}
                    >
                        {isOSS ? (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        ) : (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                            </svg>
                        )}
                        {isOSS ? 'Open Source' : 'Internship'}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-medium">{exp.date}</span>
                </div>
                <h3 className="text-xl font-extrabold uppercase tracking-tight text-foreground m-0">{exp.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 m-0">{exp.role}</p>
            </CardHeader>

            <CardContent className="p-6 pt-0 flex flex-col flex-1">
                {/* Bullets */}
                <ul className="list-none p-0 m-0 flex flex-col gap-3 mb-5 flex-1">
                    {exp.bullets.map((bullet, i) => (
                        <li key={i} className="text-sm leading-relaxed text-muted-foreground pl-5 relative before:content-['▸'] before:absolute before:left-0 before:font-bold before:text-sm" style={{ '--tw-before-color': exp.color }}>
                            <span className="absolute left-0 font-bold text-sm" style={{ color: exp.color }}>▸</span>
                            <span className="pl-1">{bullet}</span>
                        </li>
                    ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {exp.tags.map(tag => (
                        <span
                            key={tag}
                            className="text-[0.6rem] font-semibold px-2.5 py-0.5 rounded-full border"
                            style={{ borderColor: `${exp.color}25`, color: exp.color, backgroundColor: `${exp.color}08` }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Link */}
                {exp.link && (
                    <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold transition-opacity hover:opacity-80 hover:underline underline-offset-4 mt-auto"
                        style={{ color: exp.color }}
                    >
                        {exp.linkLabel} →
                    </a>
                )}
            </CardContent>
        </Card>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="section py-24 bg-background">
            <div className="container max-w-[1200px] mx-auto px-8">
                <div className="mb-12">
                    <p className="text-xs uppercase tracking-[0.12em] text-primary font-bold mb-2 m-0">
                        Experience
                    </p>
                    <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold uppercase tracking-tight text-foreground m-0">
                        Experience & Open Source
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={exp.title} exp={exp} delay={index * 0.15} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
