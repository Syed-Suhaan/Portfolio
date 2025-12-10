import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Reveal = ({ children, className = "", delay = 0, animation = "reveal-fade-up" }) => {
    const ref = useIntersectionObserver();
    return (
        <div
            ref={ref}
            className={`${animation} ${className}`}
            style={{ '--delay': `${delay}s` }}
        >
            {children}
        </div>
    );
};

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
                transition: 'all 0.3s ease'
            }}
        />
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>{name}</span>
    </div>
);

const Hero = () => {
    const startDelay = 0.1;
    const stagger = 0.08;
    const getDelay = (index) => startDelay + (index * stagger);

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
        <section className="section hero-section" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', /* Vertically center */
            paddingTop: '15vh',
            backgroundColor: 'var(--bg-color)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Image with Gradient Mask */}
            <div className="profile-image-container" style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '50%', /* Cover right half or adjust as needed */
                height: '100%',
                zIndex: 0,
                opacity: 0.8,
                maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
            }}>
                <img
                    src="/profile.png"
                    alt="Syed Suhaan"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top'
                    }}
                />
                {/* Overlay for better text contrast if needed */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 60%, var(--bg-color) 100%)'
                }}></div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* 1. Name removed as requested (now in Navbar) */}

                {/* 2. Massive Typography */}
                <div className="hero-title" style={{ marginTop: '0', marginBottom: '3rem' }}>
                    <Reveal delay={getDelay(0)} className="hero-title-line">
                        <h1 style={{
                            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                            lineHeight: 0.9,
                            letterSpacing: '-0.04em',
                            textTransform: 'uppercase',
                            fontWeight: 800,
                            margin: 0,
                            color: 'var(--text-primary)'
                        }}>
                            Aspiring
                        </h1>
                    </Reveal>
                    <Reveal delay={getDelay(2)} className="hero-title-line">
                        <h1 style={{
                            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                            lineHeight: 0.9,
                            letterSpacing: '-0.04em',
                            fontWeight: 800,
                            margin: 0,
                            color: 'var(--text-primary)',
                            display: 'flex',
                            flexDirection: 'column', // Stacked
                            alignItems: 'flex-start',
                        }}>
                            <span style={{ color: 'var(--accent-primary)', fontFamily: 'serif', fontStyle: 'italic', fontWeight: 400, textTransform: 'lowercase' }}>software</span>
                            <span style={{ textTransform: 'uppercase' }}>Engineer</span>
                        </h1>
                    </Reveal>
                </div>

                {/* 3. Subtext & Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '900px' }}>
                    <Reveal delay={getDelay(4)} className="hero-subtext">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start' }}>
                            <p style={{ fontSize: '1.25rem', lineHeight: 1.5, color: 'var(--text-secondary)', fontWeight: 400, margin: 0 }}>
                                Driven by algorithms and data structures.
                                Building high-performance applications with <span style={{ color: 'var(--text-primary)' }}>O(n) efficiency</span>.
                            </p>

                            {/* Stats moved here */}
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1 }}>1494</span>
                                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 600 }}>Codeforces </span>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={getDelay(5)} className="hero-cta-group">
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '1rem', height: '100%' }}>
                            <div style={{
                                padding: '0.4rem 0.8rem',
                                border: '1px solid var(--accent-primary)',
                                borderRadius: '99px',
                                color: 'var(--accent-primary)',
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                Open For Internships
                            </div>

                            {/* Buttons Group */}
                            <div className="cta-container">
                                <a
                                    href="https://drive.google.com/file/d/1Nxh2weEzHh4kmAcWEdpEv81fUPSYAB3C/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                    style={{ textAlign: 'center' }}
                                >
                                    View Resume
                                </a>
                                <a href="#contact" className="btn btn-primary" style={{ textAlign: 'center' }}>
                                    Let's Connect
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* 4. Tech Stack (Moved from separate component) */}
                <Reveal delay={getDelay(6)} className="hero-stack">
                    <div style={{
                        marginTop: '4rem',
                        paddingTop: '2rem',
                        borderTop: '1px solid var(--border-color)',
                        maxWidth: '900px'
                    }}>
                        <p style={{
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            color: 'var(--text-secondary)',
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            marginBottom: '1.5rem'
                        }}>
                            Stack & Tools
                        </p>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '3rem',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}>
                            {stack.map((tech, index) => (
                                <TechIcon key={index} {...tech} />
                            ))}
                        </div>
                    </div>
                </Reveal>

            </div>
            <style>{`
                .tech-icon:hover {
                    transform: scale(1.2);
                    background-color: var(--accent-primary) !important; 
                    filter: drop-shadow(0 0 10px var(--accent-primary)) drop-shadow(0 0 20px var(--accent-primary));
                    opacity: 1;
                }

                @media (max-width: 768px) {
                    .profile-image-container {
                        display: none !important;
                    }
                    /* Reset container positioning for mobile flow */
                    .hero-section {
                        padding-top: 10vh !important;
                        justify-content: flex-start !important;
                    }
                    /* Typography scaling */
                    .hero-title h1 {
                        font-size: 3.5rem !important; /* Smaller but still bold */
                    }
                    .hero-subtext p {
                         font-size: 1rem !important;
                    }
                    .hero-stack {
                         margin-top: 2rem !important;
                    }

                    .cta-container {
                        display: flex; 
                        flex-direction: column; 
                        gap: 1rem; 
                        width: 100%; /* Full width on mobile */
                    }

                    /* Prevent button overflow */
                    .btn {
                        width: 100%; /* Full width buttons on mobile */
                        justify-content: center;
                    }
                }

                /* Desktop specific styles for buttons */
                @media (min-width: 769px) {
                    .cta-container {
                        display: flex; 
                        flex-direction: column; 
                        gap: 1rem; 
                        width: auto; /* Fit content on desktop */
                        min-width: 200px; /* Minimum consistent width */
                    }
                }
            `}</style>
        </section>
    );
};
export default Hero;
