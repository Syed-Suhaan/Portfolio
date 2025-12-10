import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import FooterGame from './footer-game';

const Contact = () => {
    const ref = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="contact" className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="container">
                <div
                    ref={ref}
                    className="reveal-fade-up"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '3rem',
                        alignItems: 'center'
                    }}
                >
                    {/* Left: Content */}
                    <div style={{ textAlign: 'left' }}>
                        <p style={{
                            fontSize: '1rem',
                            textTransform: 'uppercase',
                            color: 'var(--accent-primary)',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            marginBottom: '-0.5rem'
                        }}>
                            Get in Touch
                        </p>

                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                            fontWeight: 800,
                            margin: 0,
                            textTransform: 'uppercase',
                            letterSpacing: '-0.03em',
                            color: 'var(--text-primary)',
                            lineHeight: 0.9
                        }}>
                            Let's<br />
                            <span style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>Build</span><br />
                            Future.
                        </h2>

                        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                            <a
                                href="mailto:suhaansyed2004@gmail.com"
                                className="btn btn-primary"
                                style={{
                                    fontSize: '1.25rem',
                                    padding: '1.25rem 2.5rem',
                                    borderRadius: '99px'
                                }}
                            >
                                suhaansyed2004@gmail.com
                            </a>
                            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem' }}>
                                <a href="https://linkedin.com/in/syed-suhaan/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 600 }}>LinkedIn</a>
                                <a href="https://github.com/syed-suhaan" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 600 }}>GitHub</a>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                                <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>●</span> Open for Summer 2026 Internships
                            </p>
                        </div>
                    </div>

                    {/* Right: Game */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{
                            padding: '2rem',
                            backgroundColor: 'var(--bg-card)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '24px',
                            width: '100%',
                            maxWidth: '400px',
                            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)'
                        }}>
                            <FooterGame />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
