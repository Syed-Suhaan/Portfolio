import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FooterGame from './footer-game';

const Contact = () => {
    const ref = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="contact" className="section py-24 min-h-[60vh] flex items-center justify-center bg-background">
            <div className="container max-w-[1200px] mx-auto px-8">
                <div
                    ref={ref}
                    className="reveal-fade-up grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center"
                >
                    {/* Left: Content */}
                    <div>
                        <p className="text-sm uppercase text-primary font-semibold tracking-[0.1em] mb-2 m-0">
                            Get in Touch
                        </p>

                        <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-extrabold uppercase tracking-tight text-foreground leading-[0.9] m-0">
                            Let&apos;s<br />
                            <span className="text-muted-foreground/50">Build</span><br />
                            Future.
                        </h2>

                        <div className="mt-8 flex flex-col gap-4 items-start">
                            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold rounded-full px-10 py-6 shadow-[0_0_30px_-4px_hsl(14,100%,50%,0.3)] hover:shadow-[0_0_40px_-2px_hsl(14,100%,50%,0.45)] transition-all duration-300">
                                <a href="mailto:suhaansyed2004@gmail.com">
                                    suhaansyed2004@gmail.com
                                </a>
                            </Button>

                            <div className="flex gap-6 mt-2">
                                <a href="https://linkedin.com/in/syed-suhaan/" target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold hover:text-primary transition-colors duration-200">
                                    LinkedIn
                                </a>
                                <a href="https://github.com/syed-suhaan" target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold hover:text-primary transition-colors duration-200">
                                    GitHub
                                </a>
                            </div>

                            <p className="text-sm text-muted-foreground m-0">
                                <span className="text-primary font-bold">●</span> Open for Summer 2026 Internships
                            </p>
                        </div>
                    </div>

                    {/* Right: Game */}
                    <div className="flex justify-center items-center">
                        <Card className="p-6 bg-card border-border rounded-3xl w-full max-w-[400px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
                            <FooterGame />
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
