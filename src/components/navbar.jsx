import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [sheetOpen, setSheetOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Work', to: 'projects' },
        { name: 'Experience', to: 'experience' },
        { name: 'Contact', to: 'contact' },
    ];

    const handleNavClick = (to) => {
        if (!isHome) {
            navigate('/', { state: { scrollTo: to } });
        }
        setSheetOpen(false);
    };

    return (
        <>
            <nav className={`
                fixed top-4 left-1/2 -translate-x-1/2 z-[1000] 
                w-[92%] max-w-[900px]
                transition-all duration-500 ease-out
                ${scrolled
                    ? 'top-3 w-[88%] max-w-[860px]'
                    : 'top-5'
                }
            `}>
                <div className={`
                    relative flex items-center justify-between
                    px-5 py-3 rounded-2xl
                    border border-white/[0.08]
                    transition-all duration-500 ease-out
                    ${scrolled
                        ? 'bg-white/[0.04] backdrop-blur-2xl shadow-[0_8px_32px_-4px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] border-white/[0.12]'
                        : 'bg-white/[0.02] backdrop-blur-xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.04)]'
                    }
                `}>
                    {/* Liquid glass highlights */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                        {/* Top edge highlight */}
                        <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
                        {/* Left corner glow */}
                        <div className="absolute -top-[50%] -left-[10%] w-[200px] h-[200px] bg-primary/[0.03] rounded-full blur-3xl" />
                        {/* Right corner glow */}
                        <div className="absolute -top-[50%] -right-[10%] w-[150px] h-[150px] bg-primary/[0.02] rounded-full blur-3xl" />
                    </div>

                    {/* Logo */}
                    <div
                        className="relative cursor-pointer font-['Syne'] font-extrabold text-xl text-primary uppercase tracking-tight leading-none select-none hover:scale-105 transition-transform duration-300"
                        onClick={() => navigate('/')}
                    >
                        SUHAAN
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1 relative">
                        {navLinks.map(link => (
                            isHome ? (
                                <ScrollLink
                                    key={link.to}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    className="px-3.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/[0.06] transition-all duration-200 cursor-pointer"
                                >
                                    {link.name}
                                </ScrollLink>
                            ) : (
                                <span
                                    key={link.to}
                                    className="px-3.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/[0.06] transition-all duration-200 cursor-pointer"
                                    onClick={() => handleNavClick(link.to)}
                                >
                                    {link.name}
                                </span>
                            )
                        ))}

                        {/* CTA */}
                        {isHome ? (
                            <ScrollLink
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="ml-2 cursor-pointer"
                            >
                                <Button size="sm" className="bg-primary/90 hover:bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider rounded-xl shadow-[0_0_20px_-4px_hsl(14,100%,50%,0.3)] hover:shadow-[0_0_24px_-2px_hsl(14,100%,50%,0.5)] transition-all duration-300">
                                    Let&apos;s Talk
                                </Button>
                            </ScrollLink>
                        ) : (
                            <Button
                                size="sm"
                                className="ml-2 bg-primary/90 hover:bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider rounded-xl shadow-[0_0_20px_-4px_hsl(14,100%,50%,0.3)] hover:shadow-[0_0_24px_-2px_hsl(14,100%,50%,0.5)] transition-all duration-300"
                                onClick={() => handleNavClick('contact')}
                            >
                                Let&apos;s Talk
                            </Button>
                        )}
                    </div>

                    {/* Mobile: Sheet Trigger */}
                    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <button className="relative z-50 flex flex-col gap-[5px] p-2 group">
                                <span className={`block w-6 h-[2px] bg-foreground transition-all duration-300 ${sheetOpen ? 'rotate-45 translate-y-[7px] bg-primary' : ''}`} />
                                <span className={`block w-6 h-[2px] bg-foreground transition-all duration-300 ${sheetOpen ? 'opacity-0' : ''}`} />
                                <span className={`block w-6 h-[2px] bg-foreground transition-all duration-300 ${sheetOpen ? '-rotate-45 -translate-y-[7px] bg-primary' : ''}`} />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[75%] bg-background/95 backdrop-blur-2xl border-l border-white/[0.06] pt-20">
                            <div className="flex flex-col gap-6">
                                {navLinks.map(link => (
                                    isHome ? (
                                        <ScrollLink
                                            key={link.to}
                                            to={link.to}
                                            smooth={true}
                                            duration={500}
                                            className="text-3xl font-extrabold text-foreground uppercase tracking-tight cursor-pointer hover:text-primary transition-colors duration-200"
                                            onClick={() => setSheetOpen(false)}
                                        >
                                            {link.name}
                                        </ScrollLink>
                                    ) : (
                                        <span
                                            key={link.to}
                                            className="text-3xl font-extrabold text-foreground uppercase tracking-tight cursor-pointer hover:text-primary transition-colors duration-200"
                                            onClick={() => handleNavClick(link.to)}
                                        >
                                            {link.name}
                                        </span>
                                    )
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
