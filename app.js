class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('App Error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-10 text-center text-red-500">
                    <h2 className="text-xl font-bold mb-2">Something went wrong.</h2>
                    <p>Please check the console for details.</p>
                </div>
            );
        }
        return this.props.children;
    }
}

function App() {
    const [currentPage, setCurrentPage] = React.useState('home');

    React.useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === '#about-page') {
                setCurrentPage('about');
                window.scrollTo(0, 0);
            } else if (window.location.hash === '#contact-page') {
                setCurrentPage('contact');
                window.scrollTo(0, 0);
            } else {
                setCurrentPage('home');
                // Allow browser to scroll to standard hashes like #services
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // check on initial load

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    React.useEffect(() => {
        const revealElements = () => {
            const reveals = document.querySelectorAll('.reveal');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, {
                threshold: 0.15 // Trigger when 15% of element is visible
            });

            reveals.forEach(el => observer.observe(el));
        };

        // Delay slightly to ensure components are rendered
        setTimeout(revealElements, 100);
    }, [currentPage]); // re-run on page change

    return (
        <ErrorBoundary>
            <div className="min-h-screen flex flex-col relative selection:bg-purple-500/30">
                <Navbar />
                
                {currentPage === 'about' ? (
                    <main className="flex-grow pt-20">
                        <AboutPage />
                    </main>
                ) : currentPage === 'contact' ? (
                    <main className="flex-grow pt-20">
                        <ContactPage />
                    </main>
                ) : (
                    <main className="flex-grow">
                        <Hero />
                        <Services />
                        <About />
                        <Process />
                        <Portfolio />
                        <Features />
                        <CTA />
                    </main>
                )}
                
                <Footer />
                
                {/* Global WhatsApp FAB - Clean Style */}
                <a
                    href="https://wa.me/916304218064?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                    target="_blank"
                    rel="noreferrer"
                    className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[100] group transition-transform hover:scale-110"
                    aria-label="Chat on WhatsApp"
                >
                    <div className="relative w-13 h-13 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl">
                        <svg 
                            viewBox="0 0 24 24" 
                            className="w-7 h-7 md:w-9 md:h-9 fill-white"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.543 4.197 1.574 6.04L0 24l6.117-1.605a11.787 11.787 0 005.931 1.606h.005c6.632 0 12.032-5.396 12.034-12.03a11.766 11.766 0 00-3.517-8.497z"/>
                        </svg>
                    </div>
                </a>
            </div>
        </ErrorBoundary>
    );
}

// Initialize the application
const initApp = () => {
    const container = document.getElementById('root');
    if (container) {
        const root = ReactDOM.createRoot(container);
        root.render(<App />);
    } else {
        console.error('Root element not found');
    }
};

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initApp();
} else {
    window.addEventListener('load', initApp);
}