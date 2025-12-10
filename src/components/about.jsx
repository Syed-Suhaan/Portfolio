import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About = () => {
    const ref = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="about" className="section" style={{ backgroundColor: 'var(--bg-color)', position: 'relative' }}>
            <div className="container">
                <div
                    ref={ref}
                    className="reveal-fade-up about-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '4rem',
                        alignItems: 'center'
                    }}
                >
                    <style>{`
                    @media (max-width: 768px) {
                        .about-grid {
                            grid-template-columns: 1fr !important;
                            gap: 3rem !important;
                        }
                    }
                `}</style>
                    {/* Text Side */}
                    <div>
                        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
                            About Me
                        </h2>
                        <p style={{ fontSize: '1.125rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            I am an <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Aspiring Software Engineer</span> with a deep-rooted passion for Competitive Programming.
                            My journey is defined by solving complex algorithmic challenges, with a peak rating of <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>1494 on Codeforces</span>.
                        </p>
                        <p style={{ fontSize: '1.125rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            This algorithmic foundation allows me to build highly efficient, optimized systems.
                            Whether it's a Go backend or a React frontend, I focus on writing clean, scalable code that performs under pressure.
                        </p>
                        <p style={{ fontSize: '1.125rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                            Currently pursuing my B.Tech at Manipal Institute of Technology and <span style={{ color: 'var(--text-primary)', borderBottom: '2px solid var(--accent-primary)' }}>actively looking for Internships</span>.
                        </p>
                    </div>

                    {/* Education / Logos Side */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{
                            padding: '2rem',
                            backgroundColor: 'var(--bg-card)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                            transition: 'var(--transition-hover)'
                        }}>
                            {/* Masked Logo */}
                            <div style={{
                                width: '60px',
                                height: '60px',
                                backgroundColor: 'var(--accent-primary)',
                                maskImage: 'url("/icons/college_logo.png")',
                                WebkitMaskImage: 'url("/icons/college_logo.png")',
                                maskSize: 'contain',
                                WebkitMaskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                WebkitMaskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                WebkitMaskPosition: 'center',
                                opacity: 0.9
                            }} />
                            <div>
                                <h4 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-primary)' }}>Manipal Institute of Technology</h4>
                                <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Bachelors of Technology</p>
                            </div>
                        </div>

                        <div style={{
                            padding: '2rem',
                            backgroundColor: 'var(--bg-card)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                            transition: 'var(--transition-hover)'
                        }}>
                            {/* Masked Logo */}
                            <div style={{
                                width: '60px',
                                height: '60px',
                                backgroundColor: 'var(--accent-primary)',
                                maskImage: 'url("/icons/school_logo.png")',
                                WebkitMaskImage: 'url("/icons/school_logo.png")',
                                maskSize: 'contain',
                                WebkitMaskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                WebkitMaskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                WebkitMaskPosition: 'center',
                                opacity: 0.9
                            }} />
                            <div>
                                <h4 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-primary)' }}>Jawahar Navodaya Vidyalaya</h4>
                                <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Higher Secondary Education</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
