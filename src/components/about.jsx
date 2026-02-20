import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Card, CardContent } from '@/components/ui/card';

const EducationCard = ({ logo, title, subtitle }) => (
    <Card className="bg-card border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)]">
        <CardContent className="flex items-center gap-5 p-6">
            <div
                className="w-14 h-14 shrink-0 opacity-90"
                style={{
                    backgroundColor: 'hsl(var(--primary))',
                    maskImage: `url("${logo}")`,
                    WebkitMaskImage: `url("${logo}")`,
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',
                }}
            />
            <div>
                <h4 className="text-lg font-bold text-foreground m-0">{title}</h4>
                <p className="text-sm text-muted-foreground m-0">{subtitle}</p>
            </div>
        </CardContent>
    </Card>
);

const About = () => {
    const ref = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="about" className="section py-24 bg-background relative">
            <div className="container max-w-[1200px] mx-auto px-8">
                <div
                    ref={ref}
                    className="reveal-fade-up grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
                >
                    {/* Text Side */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 uppercase tracking-tight text-foreground">
                            About Me
                        </h2>
                        <p className="text-lg leading-relaxed text-muted-foreground mb-5">
                            I am an <span className="text-foreground font-semibold">Aspiring Software Engineer</span> with a deep-rooted passion for Competitive Programming.
                            My journey is defined by solving complex algorithmic challenges, with a peak rating of <span className="text-primary font-semibold">1523 on Codeforces</span>.
                        </p>
                        <p className="text-lg leading-relaxed text-muted-foreground mb-5">
                            This algorithmic foundation allows me to build highly efficient, optimized systems.
                            Whether it&apos;s a Go backend or a React frontend, I focus on writing clean, scalable code that performs under pressure.
                        </p>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Currently pursuing my B.Tech at Manipal Institute of Technology and{' '}
                            <span className="text-foreground border-b-2 border-primary">actively looking for Internships</span>.
                        </p>
                    </div>

                    {/* Education Side */}
                    <div className="flex flex-col gap-5">
                        <EducationCard
                            logo="/icons/college_logo.png"
                            title="Manipal Institute of Technology"
                            subtitle="Bachelors of Technology"
                        />
                        <EducationCard
                            logo="/icons/school_logo.png"
                            title="Jawahar Navodaya Vidyalaya"
                            subtitle="Higher Secondary Education"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
