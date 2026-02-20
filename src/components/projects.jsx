import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import projects from '../data/projects';

const ProjectCard = ({ project, delay }) => {
    const ref = useIntersectionObserver({ threshold: 0.1 });
    const accentColor = project.color || 'var(--accent-primary)';

    return (
        <Link
            to={`/projects/${project.slug}`}
            ref={ref}
            className="project-card reveal-fade-up"
            style={{
                '--delay': `${delay}s`,
                '--card-accent': accentColor,
                backgroundColor: 'var(--bg-card)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid var(--border-color)',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Thumbnail Area */}
            <div className="project-image" style={{
                height: '200px',
                backgroundColor: '#050505',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Background gradient */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, ${accentColor}08 0%, #050505 50%, ${accentColor}05 100%)`,
                }}></div>

                {/* Accent glow on hover */}
                <div className="project-glow" style={{
                    position: 'absolute',
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${accentColor}20, transparent 70%)`,
                    filter: 'blur(30px)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                }}></div>

                {/* Icon */}
                {project.icon && (
                    <div
                        className="project-card-icon"
                        style={{
                            width: '64px',
                            height: '64px',
                            backgroundColor: accentColor,
                            maskImage: `url("${project.icon}")`,
                            WebkitMaskImage: `url("${project.icon}")`,
                            maskSize: 'contain',
                            WebkitMaskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            WebkitMaskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskPosition: 'center',
                            zIndex: 1,
                            transition: 'all 0.4s ease',
                            filter: `drop-shadow(0 0 15px ${accentColor}40)`
                        }}
                    />
                )}
            </div>

            {/* Content Area */}
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                {/* Category + Date row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span style={{
                        fontSize: '0.6rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        padding: '0.2rem 0.5rem',
                        border: `1px solid ${accentColor}40`,
                        borderRadius: '99px',
                        color: accentColor,
                    }}>
                        {project.category}
                    </span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                        {project.date}
                    </span>
                </div>

                <h3 style={{
                    marginBottom: '0.25rem',
                    fontSize: '1.3rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.02em'
                }}>{project.title}</h3>

                <p style={{
                    fontSize: '0.8rem',
                    marginBottom: '1rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    flex: 1
                }}>{project.summary}</p>

                {/* Key metric preview */}
                {project.highlights?.[0] && (
                    <div style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '0.5rem',
                        marginBottom: '1rem',
                        paddingTop: '0.75rem',
                        borderTop: `1px solid var(--border-color)`,
                    }}>
                        <span style={{
                            fontSize: '1.5rem',
                            fontWeight: 800,
                            color: accentColor,
                            lineHeight: 1,
                        }}>{project.highlights[0].metric}</span>
                        <span style={{
                            fontSize: '0.65rem',
                            textTransform: 'uppercase',
                            fontWeight: 600,
                            color: 'var(--text-secondary)',
                            letterSpacing: '0.03em',
                        }}>{project.highlights[0].label}</span>
                    </div>
                )}

                {/* Tags */}
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {project.tags.slice(0, 4).map(tag => (
                        <span key={tag} style={{
                            fontSize: '0.7rem',
                            padding: '0.2rem 0.6rem',
                            backgroundColor: `${accentColor}10`,
                            color: accentColor,
                            borderRadius: '999px',
                            border: `1px solid ${accentColor}25`,
                            fontWeight: 600,
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
                    <div>
                        <p style={{
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.12em',
                            color: 'var(--accent-primary)',
                            fontWeight: 700,
                            marginBottom: '0.5rem',
                        }}>Work</p>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 5vw, 3rem)',
                            fontWeight: 800,
                            margin: 0,
                            textTransform: 'uppercase',
                            letterSpacing: '-0.03em'
                        }}>
                            Selected Projects
                        </h2>
                    </div>
                    <Link to="/projects" style={{
                        color: 'var(--accent-primary)',
                        fontWeight: 600,
                        textDecoration: 'underline',
                        textUnderlineOffset: '4px',
                        fontSize: '0.9rem',
                        whiteSpace: 'nowrap',
                    }}>
                        View All →
                    </Link>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
            <style>{`
        .project-card {
          position: relative;
          overflow: hidden;
        }
        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px -12px rgba(0,0,0,0.6);
          border-color: var(--card-accent) !important;
        }
        .project-card:hover .project-glow {
          opacity: 1 !important;
        }
        .project-card:hover .project-card-icon {
          transform: scale(1.1);
          filter: drop-shadow(0 0 25px var(--card-accent)) !important;
        }
        .project-card:hover .project-image > div:first-child {
          transition: transform 0.4s ease;
          transform: scale(1.05);
        }
      `}</style>
        </section>
    );
};

export default Projects;
