import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Reveal = ({ children, className = "", delay = 0, animation = "reveal-fade-up" }) => {
    const ref = useIntersectionObserver();
    return (
        <div ref={ref} className={`${animation} ${className}`} style={{ '--delay': `${delay}s` }}>
            {children}
        </div>
    );
};

const TechIcon = ({ name, path }) => (
    <div className="flex flex-col items-center gap-2 group">
        <div
            className="w-10 h-10 transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_12px_hsl(14,100%,50%)]"
            style={{
                backgroundColor: 'hsl(var(--primary))',
                maskImage: `url("${path}")`,
                WebkitMaskImage: `url("${path}")`,
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
            }}
        />
        <span className="text-[0.7rem] font-semibold text-muted-foreground uppercase tracking-wide">{name}</span>
    </div>
);

const Hero = () => {
    const startDelay = 0.1;
    const stagger = 0.08;
    const getDelay = (index) => startDelay + (index * stagger);

    const stack = [
        { name: "Go", path: "/icons/go-svgrepo-com.svg" },
        { name: "Node.js", path: "/icons/nodejs02-svgrepo-com.svg" },
        { name: "FastAPI", path: "/icons/fastapi-svgrepo-com.svg" },
        { name: "Flutter", path: "/icons/flutter-svgrepo-com.svg" },
        { name: "React", path: "/icons/react-svgrepo-com.svg" },
        { name: "Firebase", path: "/icons/firebase-svgrepo-com.svg" }
    ];

    return (
        <section className="section hero-section min-h-screen flex flex-col justify-center pt-[15vh] bg-background relative overflow-hidden">
            {/* Background Image with Gradient Mask */}
            <div className="profile-image-container absolute top-0 right-0 w-1/2 h-full z-0 opacity-80"
                style={{
                    maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
                }}>
                <img
                    src="/profile.png"
                    alt="Syed Suhaan"
                    className="w-full h-full object-cover object-[center_top]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
            </div>

            <div className="container relative z-[1] max-w-[1200px] mx-auto px-8 md:px-8">
                {/* Massive Typography */}
                <div className="mb-12">
                    <Reveal delay={getDelay(0)}>
                        <h1 className="text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] tracking-tighter uppercase font-extrabold text-foreground m-0">
                            Aspiring
                        </h1>
                    </Reveal>
                    <Reveal delay={getDelay(2)}>
                        <h1 className="text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] tracking-tighter font-extrabold m-0 flex flex-col items-start">
                            <span className="text-primary font-serif italic font-normal lowercase">software</span>
                            <span className="text-foreground uppercase">Engineer</span>
                        </h1>
                    </Reveal>
                </div>

                {/* Subtext & Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 max-w-[900px]">
                    <Reveal delay={getDelay(4)}>
                        <div className="flex flex-col gap-6 items-start">
                            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground m-0">
                                Driven by algorithms and data structures.
                                Building high-performance applications with{' '}
                                <span className="text-foreground font-medium">O(n) efficiency</span>.
                            </p>

                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-foreground leading-none">1523</span>
                                <span className="text-xs uppercase text-muted-foreground font-semibold tracking-wide">Codeforces</span>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={getDelay(5)}>
                        <div className="flex flex-col justify-center items-start gap-4 h-full">
                            <Badge variant="outline" className="border-primary text-primary text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                                Open For Internships
                            </Badge>

                            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                                <Button variant="outline" asChild className="border-border hover:border-primary hover:text-primary text-foreground rounded-xl font-semibold uppercase tracking-wider text-xs transition-all duration-300">
                                    <a href="https://drive.google.com/file/d/1X-AvqQs-4fIeESDqYpalphUyqiGUD65L/view" target="_blank" rel="noopener noreferrer">
                                        View Resume
                                    </a>
                                </Button>
                                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold uppercase tracking-wider text-xs shadow-[0_0_20px_-4px_hsl(14,100%,50%,0.4)] hover:shadow-[0_0_28px_-2px_hsl(14,100%,50%,0.5)] transition-all duration-300">
                                    <a href="#contact">
                                        Let&apos;s Connect
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Tech Stack */}
                <Reveal delay={getDelay(6)}>
                    <div className="mt-16 pt-8 border-t border-border max-w-[900px]">
                        <p className="text-xs uppercase text-muted-foreground font-semibold tracking-widest mb-6 m-0">
                            Stack & Tools
                        </p>
                        <div className="flex flex-wrap gap-10 items-center">
                            {stack.map((tech, index) => (
                                <TechIcon key={index} {...tech} />
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .profile-image-container { display: none !important; }
                    .hero-section { padding-top: 10vh !important; justify-content: flex-start !important; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
