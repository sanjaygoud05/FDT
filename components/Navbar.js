function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [activeHash, setActiveHash] = React.useState(window.location.hash || '#home');

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    // Update active hash on change
    React.useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash || '#home');
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    // Close menu on resize to desktop
    React.useEffect(() => {
        const handleResize = () => { if (window.innerWidth >= 768) closeMenu(); };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about-page', label: 'About' },
        { href: '#services-page', label: 'Services' },
        { href: '#work', label: 'Our Work' },
        { href: '#contact-page', label: 'Contact' },
    ];

    // Helper to check if a link is active
    const isActive = (href) => {
        if (href === '#home' && (!activeHash || activeHash === '#home')) return true;
        if (activeHash.startsWith('#service-') && href === '#services-page') return true;
        return activeHash === href;
    };

    return (
        <nav className="fixed w-full z-50 top-0 border-b border-[#1f1f3a] bg-[#06060c]/90 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    {/* Logo */}
                    <a href="#home" className="flex items-center shrink-0 z-50" onClick={closeMenu}>
                        <img
                            src="assets/logo.png"
                            alt="Forge Digital Technologies Logo"
                            className="h-14 sm:h-16 md:h-20 w-auto object-contain"
                            style={{ filter: 'brightness(1) invert(0)' }}
                        />
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
                        {navLinks.map(({ href, label }) => (
                            <a 
                                key={href}
                                href={href} 
                                className={`font-medium text-sm transition-all duration-300 relative py-2 ${
                                    isActive(href) 
                                    ? 'text-white after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:bg-purple-500 after:rounded-full' 
                                    : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex">
                        <a href="#contact-page" className="bg-gradient-primary hover:opacity-90 text-white px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 transition-all">
                            Let's Talk
                            <div className="icon-arrow-right text-sm bg-white text-purple-600 rounded-full w-4 h-4 flex items-center justify-center"></div>
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden flex items-center z-50">
                        <button
                            onClick={toggleMenu}
                            className="p-2 text-white focus:outline-none bg-[#1f1f3a]/80 border border-[#2a2a4a] rounded-lg transition-colors hover:bg-[#2a2a4a]"
                            aria-label="Toggle menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <div className={`text-2xl transition-all duration-200 ${isMobileMenuOpen ? 'icon-x' : 'icon-menu'}`}></div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden fixed top-16 sm:top-20 left-0 w-full bg-[#06060c] z-40 border-b border-[#1f1f3a] transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col items-start px-5 py-5 space-y-1">
                    {navLinks.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            onClick={closeMenu}
                            className={`text-base font-medium transition-colors w-full py-3.5 border-b border-[#1f1f3a]/60 first:pt-0 ${
                                isActive(href) ? 'text-purple-400' : 'text-gray-200 hover:text-purple-400'
                            }`}
                        >
                            {label}
                        </a>
                    ))}
                    <a
                        href="#contact-page"
                        onClick={closeMenu}
                        className="mt-4 w-full justify-center bg-gradient-primary hover:opacity-90 text-white px-6 py-3.5 rounded-full font-medium text-sm flex items-center gap-2 transition-all"
                    >
                        Let's Talk
                        <div className="icon-arrow-right text-[10px] bg-white text-purple-600 rounded-full w-4 h-4 flex items-center justify-center"></div>
                    </a>
                </div>
            </div>
        </nav>
    );
}

window.Navbar = Navbar;
