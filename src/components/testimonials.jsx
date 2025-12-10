import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AchievementCard = ({ title, metric, description, delay, icon }) => {
    const ref = useIntersectionObserver({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className="reveal-fade-up testimonial-card"
            style={{
                '--delay': `${delay}s`,
                padding: '2rem',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'var(--transition-hover)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent-primary)', margin: 0, lineHeight: 1 }}>
                    {metric}
                </h3>
                {/* Logo with Orange Mask */}
                {icon && (
                    <div style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: 'var(--accent-primary)',
                        maskImage: `url("${icon}")`,
                        WebkitMaskImage: `url("${icon}")`,
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskPosition: 'center',
                        opacity: 0.8
                    }} />
                )}
            </div>

            <div>
                <h4 style={{ margin: 0, fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-primary)' }}>{title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: 1.5 }}>
                    {description}
                </p>
            </div>
        </div>
    );
};

const Achievements = () => {
    const data = [
        { metric: "1412", title: "Codeforces Specialist", description: "Top 5 rank in college. Consistent competitive programmer.", icon: "/icons/codeforces-svgrepo-com.svg" },
        { metric: "1653", title: "CodeChef 3-Star", description: "Participated in 10+ live contests with high global rankings.", icon: "/icons/codechef-svgrepo-com.svg" },
        { metric: "#1", title: "App-A-Thon Winner", description: "Won 1st place out of 40+ teams for ERAS Protocol healthcare app.", icon: "/icons/appathon-alt-svgrepo-com.svg" },
        { metric: "886", title: "Meta Hacker Cup", description: "AIR 886 in Round 2 of Meta Hacker Cup 2025.", icon: "/icons/meta-logo-facebook-svgrepo-com.svg" }
    ];

    return (
        <section id="achievements" className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
            <div className="container">
                <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '3rem', textTransform: 'uppercase', letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
                    Achievements
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {data.map((item, index) => (
                        <AchievementCard key={index} delay={index * 0.1} {...item} />
                    ))}
                </div>
            </div>
            <style>{`
                .testimonial-card:hover {
                    transform: translateY(-5px);
                    border-color: var(--accent-primary) !important;
                    box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
                }
            `}</style>
        </section>
    );
};

export default Achievements;
