import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Work', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`site-nav ${scrolled ? 'nav-solid' : ''}`}>
            <div className="container nav-content">
                <div className="logo">SUHAAN</div>

                {/* Desktop Links */}
                <div className="nav-links desktop-only">
                    {navLinks.map(link => (
                        <ScrollLink
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className="nav-link"
                            style={{ cursor: 'pointer' }}
                        >
                            {link.name}
                        </ScrollLink>
                    ))}
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="hamburger-btn mobile-only"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                </button>

                {/* Mobile Sidebar Overlay */}
                <div className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
                    <div className="sidebar-links">
                        {navLinks.map(link => (
                            <ScrollLink
                                key={link.to}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                className="sidebar-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </ScrollLink>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes fadeDownCustom {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-link:hover {
            filter: brightness(1.2);
            text-shadow: 0 0 10px rgba(255, 61, 0, 0.5);
        }

        /* Hamburger Button Styles */
        .hamburger-btn {
            background: none;
            border: none;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            gap: 6px;
            z-index: 2000; /* Above overlay */
            padding: 0.5rem;
        }
        .bar {
            width: 30px;
            height: 3px;
            background-color: var(--text-primary);
            transition: all 0.3s ease;
        }
        /* Hamburger Animation */
        .bar.open:nth-child(1) { transform: rotate(45deg) translate(5px, 6px); background-color: var(--accent-primary); }
        .bar.open:nth-child(2) { opacity: 0; }
        .bar.open:nth-child(3) { transform: rotate(-45deg) translate(7px, -8px); background-color: var(--accent-primary); }

        /* Mobile Sidebar Styles */
        .mobile-sidebar {
            position: fixed;
            top: 0;
            right: -100%;
            width: 70%; /* Side Drawer */
            height: 100vh;
            background-color: rgba(5, 5, 5, 0.98);
            backdrop-filter: blur(20px);
            z-index: 1500;
            transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            display: flex;
            align-items: center;
            justify-content: center;
            border-left: 1px solid var(--border-color);
            box-shadow: -10px 0 30px rgba(0,0,0,0.5);
        }
        .mobile-sidebar.open {
            right: 0;
        }
        .sidebar-links {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            text-align: center;
        }
        .sidebar-link {
            font-size: 2rem;
            font-weight: 800;
            color: var(--text-primary);
            text-transform: uppercase;
            cursor: pointer;
            transition: color 0.3s;
        }
        .sidebar-link:hover {
            color: var(--accent-primary);
        }

        /* Responsive Visibility */
        .mobile-only { display: none; }
        .desktop-only { display: flex; }

        @media (max-width: 768px) {
            .mobile-only { display: flex; }
            .desktop-only { display: none; }
            .nav-content {
                /* Keep horizontal row for Logo + Hamburger */
                flex-direction: row !important; 
                justify-content: space-between !important;
            }
        }
      `}</style>
        </nav >
    );
};

export default Navbar;
