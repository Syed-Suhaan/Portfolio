import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Card, CardContent } from '@/components/ui/card';

const AchievementCard = ({ item, delay }) => {
    const ref = useIntersectionObserver({ threshold: 0.1 });

    return (
        <Card
            ref={ref}
            className="reveal-fade-up bg-card border-border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] hover:border-white/10 group"
            style={{ '--delay': `${delay}s` }}
        >
            <CardContent className="flex items-center gap-5 p-6">
                {/* Icon */}
                <div className="relative shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center border border-border group-hover:border-primary/30 transition-colors duration-300">
                        <div
                            className="w-7 h-7 transition-all duration-300 group-hover:scale-110"
                            style={{
                                backgroundColor: 'hsl(var(--primary))',
                                maskImage: `url("${item.icon}")`,
                                WebkitMaskImage: `url("${item.icon}")`,
                                maskSize: 'contain',
                                WebkitMaskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                WebkitMaskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                WebkitMaskPosition: 'center',
                            }}
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-2xl font-extrabold text-primary leading-none tracking-tight">{item.metric}</span>
                        <span className="text-sm font-bold text-foreground">{item.title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground m-0 leading-relaxed">{item.description}</p>
                </div>
            </CardContent>
        </Card>
    );
};

const Achievements = () => {
    const data = [
        { metric: "1523", title: "Codeforces Specialist", description: "Top 5 rank in college. Consistent competitive programmer.", icon: "/icons/codeforces-svgrepo-com.svg" },
        { metric: "1753", title: "CodeChef 3-Star", description: "Participated in 10+ live contests with high global rankings.", icon: "/icons/codechef-svgrepo-com.svg" },
        { metric: "#1", title: "App-A-Thon Winner", description: "Won 1st place out of 40+ teams for ERAS Protocol healthcare app.", icon: "/icons/appathon-alt-svgrepo-com.svg" },
        { metric: "886", title: "Meta Hacker Cup", description: "AIR 886 in Round 2 of Meta Hacker Cup 2025.", icon: "/icons/meta-logo-facebook-svgrepo-com.svg" }
    ];

    return (
        <section id="achievements" className="section py-24 bg-background">
            <div className="container max-w-[1200px] mx-auto px-8">
                <div className="mb-12">
                    <p className="text-xs uppercase tracking-[0.12em] text-primary font-bold mb-2 m-0">
                        Recognition
                    </p>
                    <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold uppercase tracking-tight text-foreground m-0">
                        Achievements
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {data.map((item, index) => (
                        <AchievementCard key={item.title} item={item} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
