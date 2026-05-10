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
    }, []);

    return (
        <ErrorBoundary>
            <div className="min-h-screen flex flex-col relative selection:bg-purple-500/30">
                <Navbar />
                <main className="flex-grow">
                    <Hero />
                    <Services />
                    <About />
                    <Process />
                    <Portfolio />
                    <Features />
                    <CTA />
                </main>
                <Footer />
            </div>
        </ErrorBoundary>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);