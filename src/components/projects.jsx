import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ProjectCard = ({ title, description, tags, delay, icon }) => {
    const ref = useIntersectionObserver({ threshold: 0.1 }); // Use lower threshold for grid items

    return (
        <article
            ref={ref}
            className="project-card reveal-fade-up"
            style={{
                '--delay': `${delay}s`,
                backgroundColor: 'var(--bg-card)',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--border-color)',
                transition: 'var(--transition-hover)',
                cursor: 'pointer'
            }}
        >
            <div className="project-image" style={{ height: '200px', backgroundColor: '#050505', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Thumbnail Background: Dark Neutral */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #111, #050505)' }}></div>

                {/* Orange Masked Icon */}
                {icon && (
                    <div
                        style={{
                            width: '80px',
                            height: '80px',
                            backgroundColor: 'var(--accent-primary)',
                            maskImage: `url("${icon}")`,
                            WebkitMaskImage: `url("${icon}")`,
                            maskSize: 'contain',
                            WebkitMaskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            WebkitMaskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskPosition: 'center',
                            zIndex: 1,
                            filter: 'drop-shadow(0 0 15px rgba(255, 61, 0, 0.4))'
                        }}
                    />
                )}
            </div>

            <div style={{ padding: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{title}</h3>
                <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>{description}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {tags.map(tag => (
                        <span key={tag} style={{
                            fontSize: '0.75rem',
                            padding: '0.25rem 0.75rem',
                            backgroundColor: 'rgba(255, 61, 0, 0.08)', // Orange tint
                            color: 'var(--accent-primary)',
                            borderRadius: '999px',
                            border: '1px solid rgba(255, 61, 0, 0.2)'
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "PassportPhotoIndia",
            category: "SaaS / Image Processing",
            description: "A high-performance passport photo generation tool. Engineered a custom image processing pipeline using React & Canvas for sub-100ms rendering. Optimized cropping algorithms to handle high-resolution uploads efficiently.",
            tags: ["React", "Node.js", "MongoDB", "Canvas"],
            icon: "/icons/passportphotoindia.svg"
        },
        {
            title: "Radish (Redis in Go)",
            category: "Systems / Backend",
            description: "A lightweight Redis implementation in Go. Rebuilt core data structures (HashMaps, Linked Lists) to handle concurrent TCP connections with minimal latency. Demonstrated strong grasp of system design and memory management.",
            tags: ["Go", "TCP", "Concurrency"],
            icon: "/icons/radish-svgrepo-com.svg"
        },
        {
            title: "ERAS Protocol App",
            description: "Award-winning 'Enhanced Recovery After Surgery' app. Digitized 20+ pages of manual hospital logs into a seamless Flutter interface. Won 1st place in App-a-thon.",
            tags: ["Flutter", "Firebase", "HealthTech"],
            icon: "/icons/eras-protocol.svg"
        },

    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, margin: 0, textTransform: 'uppercase', letterSpacing: '-0.03em' }}>
                        Selected Projects
                    </h2>
                    <a href="https://github.com/Syed-Suhaan" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                        View GitHub
                    </a>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            delay={index * 0.1}
                            {...project}
                        />
                    ))}
                </div>
            </div>
            <style>{`
        .project-card {
          position: relative;
          overflow: hidden;
        }
        /* Hide description by default (or show a snippet) */
        .project-card p {
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        /* Hover Effect: "Pop up" overlay */
        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5);
          border-color: var(--accent-primary) !important;
        }
        
        /* Image Scale */
        .project-card:hover .project-image div {
          transform: scale(1.05);
          filter: brightness(0.3); /* Darken image to make text readable */
          transition: transform 0.4s ease, filter 0.4s ease;
        }

        /* Reveal Description on Hover securely */
        .project-card:hover .project-content {
          transform: translateY(-10px);
        }
      `}</style>
        </section>
    );
};

export default Projects;
