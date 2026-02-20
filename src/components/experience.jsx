import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

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
        <div
            ref={ref}
            className="exp-card reveal-fade-up"
            style={{ '--delay': `${delay}s`, '--exp-accent': exp.color }}
        >
            {/* Header */}
            <div className="exp-header">
                <div className="exp-type-badge" style={{
                    backgroundColor: isOSS ? '#4285F420' : '#FF9F4320',
                    color: exp.color,
                    borderColor: `${exp.color}40`,
                }}>
                    {isOSS ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                            <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                        </svg>
                    )}
                    {isOSS ? 'Open Source' : 'Internship'}
                </div>
                <span className="exp-date">{exp.date}</span>
            </div>

            {/* Title */}
            <h3 className="exp-title">{exp.title}</h3>
            <p className="exp-role">{exp.role}</p>

            {/* Bullets */}
            <ul className="exp-bullets">
                {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                ))}
            </ul>

            {/* Tags */}
            <div className="exp-tags">
                {exp.tags.map(tag => (
                    <span key={tag} className="exp-tag" style={{
                        backgroundColor: `${exp.color}10`,
                        color: exp.color,
                        borderColor: `${exp.color}25`,
                    }}>
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
                    className="exp-link"
                    style={{ color: exp.color }}
                >
                    {exp.linkLabel} →
                </a>
            )}
        </div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <div style={{ marginBottom: '3rem' }}>
                    <p style={{
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: 'var(--accent-primary)',
                        fontWeight: 700,
                        marginBottom: '0.5rem',
                    }}>Experience</p>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        fontWeight: 800,
                        margin: 0,
                        textTransform: 'uppercase',
                        letterSpacing: '-0.03em'
                    }}>
                        Experience & Open Source
                    </h2>
                </div>

                <div className="exp-grid">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={exp.title} exp={exp} delay={index * 0.15} />
                    ))}
                </div>
            </div>

            <style>{`
                .exp-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.5rem;
                }

                .exp-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border-color);
                    border-radius: 20px;
                    padding: 2rem;
                    transition: all 0.35s ease;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }
                .exp-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background: var(--exp-accent);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .exp-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5);
                    border-color: var(--exp-accent);
                }
                .exp-card:hover::before {
                    opacity: 1;
                }

                .exp-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 1rem;
                }

                .exp-type-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    font-size: 0.65rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.06em;
                    padding: 0.3rem 0.75rem;
                    border-radius: 99px;
                    border: 1px solid;
                }

                .exp-date {
                    font-size: 0.75rem;
                    color: var(--text-secondary);
                    font-weight: 500;
                }

                .exp-title {
                    font-size: 1.5rem;
                    font-weight: 800;
                    margin: 0 0 0.15rem;
                    text-transform: uppercase;
                    letter-spacing: -0.02em;
                }

                .exp-role {
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                    margin: 0 0 1.25rem;
                    font-weight: 500;
                }

                .exp-bullets {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 1.25rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    flex: 1;
                }
                .exp-bullets li {
                    font-size: 0.85rem;
                    line-height: 1.65;
                    color: var(--text-secondary);
                    padding-left: 1.2rem;
                    position: relative;
                }
                .exp-bullets li::before {
                    content: '▸';
                    position: absolute;
                    left: 0;
                    color: var(--exp-accent);
                    font-size: 0.9rem;
                }

                .exp-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem;
                    margin-bottom: 0.75rem;
                }
                .exp-tag {
                    font-size: 0.65rem;
                    font-weight: 600;
                    padding: 0.2rem 0.6rem;
                    border-radius: 999px;
                    border: 1px solid;
                }

                .exp-link {
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-decoration: none;
                    transition: opacity 0.2s;
                    margin-top: auto;
                }
                .exp-link:hover {
                    opacity: 0.8;
                    text-decoration: underline;
                    text-underline-offset: 3px;
                }

                @media (max-width: 768px) {
                    .exp-grid {
                        grid-template-columns: 1fr;
                    }
                    .exp-card {
                        padding: 1.5rem;
                    }
                    .exp-title {
                        font-size: 1.2rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Experience;
