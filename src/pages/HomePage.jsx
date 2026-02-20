import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Experience from "../components/experience";
import Achievements from "../components/testimonials";
import About from "../components/about";
import Contact from "../components/contact";
import { Separator } from "@/components/ui/separator";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Achievements />
            <Contact />

            {/* Footer */}
            <footer className="border-t border-border bg-card py-12">
                <div className="container max-w-[1200px] mx-auto px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Brand */}
                        <div className="text-center md:text-left">
                            <h3 className="font-['Syne'] font-extrabold text-2xl text-primary uppercase tracking-tight leading-none m-0">
                                SUHAAN
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground m-0">
                                © 2025 All Rights Reserved.
                            </p>
                        </div>

                        {/* Links */}
                        <div className="flex gap-8 items-center">
                            <a href="https://linkedin.com/in/syed-suhaan/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
                                LinkedIn
                            </a>
                            <a href="https://github.com/syed-suhaan" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
                                GitHub
                            </a>
                            <a href="mailto:suhaansyed2004@gmail.com" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
                                Email
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default HomePage;
