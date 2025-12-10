import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const TechIcon = ({ name, path }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <div
            className="tech-icon"
            style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'var(--accent-primary)',
                maskImage: `url("${path}")`,
                WebkitMaskImage: `url("${path}")`,
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
                transition: 'transform 0.3s ease, background-color 0.3s ease'
            }}
        />
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>{name}</span>
    </div>
);

const TechStack = () => {
    const ref = useIntersectionObserver({ threshold: 0.1 });

    // Using user-provided icons from public/icons folder
    const stack = [
        { name: "Go", path: "/icons/go-svgrepo-com.svg" },
        { name: "Node.js", path: "/icons/nodejs02-svgrepo-com.svg" },
        { name: "FastAPI", path: "/icons/fastapi-svgrepo-com.svg" },
        { name: "Flutter", path: "/icons/flutter-svgrepo-com.svg" },
        { name: "React", path: "/icons/react-svgrepo-com.svg" },
        { name: "Firebase", path: "/icons/firebase-svgrepo-com.svg" }
    ];

    return (
        <section className="section" style={{ padding: '4rem 0', borderBottom: '1px solid var(--border-color)' }}>
            <div className="container">
                <p style={{
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em'
                }}>
                    Tech Stack & Tools
                </p>

                <div
                    ref={ref}
                    className="reveal-fade-up"
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '3rem',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}
                >
                    {stack.map((tech, index) => (
                        <TechIcon key={index} {...tech} />
                    ))}
                </div>
            </div>
            <style>{`
        .tech-icon:hover {
            transform: scale(1.2);
            /* Brighten the orange on hover */
            background-color: var(--accent-hover) !important; 
            filter: drop-shadow(0 0 8px var(--accent-primary));
        }
      `}</style>
        </section>
    );
};

export default TechStack;
