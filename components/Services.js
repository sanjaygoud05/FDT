function Services() {
    const [selectedService, setSelectedService] = React.useState(null);

    const services = [
        { 
            icon: "icon-code", 
            title: "High-Velocity Web Engineering", 
            desc: "Precision-engineered web applications designed to dominate your market with speed, accessibility, and elite scalability.",
            details: [
                "Cutting-edge Next.js & React architectures",
                "Pixel-perfect, performance-obsessed design",
                "Conversion-optimized user journeys",
                "Scalable infrastructure that grows with you"
            ]
        },
        { 
            icon: "icon-cloud", 
            title: "Revenue-Ready SaaS Products", 
            desc: "Architecting powerful software-as-a-service platforms that turn complex problems into recurring revenue streams.",
            details: [
                "Secure, multi-tenant cloud ecosystems",
                "Frictionless subscription management",
                "Real-time intelligence dashboards",
                "Automated customer lifecycle workflows"
            ]
        },
        { 
            icon: "icon-pen-tool", 
            title: "Iconic UI/UX Design", 
            desc: "Human-centric interfaces that strike a perfect balance between stunning aesthetics and effortless usability.",
            details: [
                "Strategic user behavior research",
                "High-conversion interface prototyping",
                "World-class visual brand identities",
                "Rigorous usability and accessibility audits"
            ]
        },
        { 
            icon: "icon-rocket", 
            title: "Market-Ready Startup Launchpad", 
            desc: "From concept to market leader—we help founders build, ship, and scale their MVPs with lightning speed.",
            details: [
                "Hyper-fast MVP development cycles",
                "Strategic product roadmap engineering",
                "Elite tech stack consultation",
                "Agile execution for rapid market entry"
            ]
        },
        { 
            icon: "icon-settings", 
            title: "Business Logic Automation", 
            desc: "Streamline your operations with custom-built automation tools that eliminate manual bottlenecks and save thousands of hours.",
            details: [
                "Custom-engineered workflow automation",
                "Seamless API & third-party integrations",
                "Proprietary internal efficiency tools",
                "Automated data intelligence pipelines"
            ]
        },
        { 
            icon: "icon-server", 
            title: "Elite Cloud Infrastructure", 
            desc: "Deploy with absolute confidence. We manage the complex tech so you can focus on scaling your business.",
            details: [
                "Architectural cloud setup (AWS/Vercel)",
                "Automated CI/CD deployment pipelines",
                "Zero-downtime monitoring & security",
                "Redundant backup & failover protocols"
            ]
        }
    ];

    return (
        <section id="services" className="py-12 sm:py-16 bg-[#020205]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 reveal reveal-up">
                    <div className="inline-flex items-center gap-4 mb-4">
                        <div className="h-px bg-purple-500/20 w-12"></div>
                        <h2 className="text-[11px] font-bold tracking-[0.3em] text-purple-400 uppercase">SERVICES</h2>
                        <div className="h-px bg-purple-500/20 w-12"></div>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                        What We <span className="text-purple-500">Do</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((svc, idx) => (
                        <div 
                            key={idx} 
                            onClick={() => setSelectedService(svc)}
                            className={`group relative rounded-xl p-8 border border-[#1f1f3a] bg-[#0a0a16] hover:bg-[#0d0d1e] hover:border-purple-500/50 transition-all duration-300 reveal reveal-up delay-${(idx % 3) * 100 + 100} cursor-pointer`}
                        >
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                <div className="icon-arrow-up-right text-purple-400 text-xl"></div>
                            </div>
                            <div className="mb-6 w-12 h-12 rounded-lg bg-purple-900/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                <div className={`${svc.icon} text-xl`}></div>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                {svc.title}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {svc.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedService && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity" onClick={() => setSelectedService(null)}>
                    <div 
                        className="relative bg-[#0a0a16] border border-[#1f1f3a] rounded-2xl p-8 max-w-lg w-full shadow-2xl animate-in fade-in zoom-in duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#1f1f3a]/50 text-gray-400 hover:text-white hover:bg-[#1f1f3a] transition-all"
                            onClick={() => setSelectedService(null)}
                        >
                            <div className="icon-x text-xl"></div>
                        </button>
                        
                        <div className="w-16 h-16 rounded-xl bg-purple-900/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6">
                            <div className={`${selectedService.icon} text-3xl`}></div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4">
                            {selectedService.title}
                        </h3>
                        
                        <p className="text-gray-400 leading-relaxed mb-8">
                            {selectedService.desc}
                        </p>
                        
                        <div className="space-y-4 mb-10">
                            <h4 className="text-[11px] font-bold tracking-widest text-purple-400 uppercase mb-4">What's Included</h4>
                            {selectedService.details.map((detail, i) => (
                                <div key={i} className="flex items-start gap-3 group/item">
                                    <div className="w-5 h-5 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 mt-0.5 group-hover/item:bg-purple-600 group-hover/item:text-white transition-all">
                                        <div className="icon-check text-[10px]"></div>
                                    </div>
                                    <span className="text-sm text-gray-400 group-hover/item:text-gray-200 transition-colors">{detail}</span>
                                </div>
                            ))}
                        </div>
                        
                        <div className="pt-6 border-t border-[#1f1f3a]">
                            <button 
                                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-500/20 transition-all flex items-center justify-center gap-3"
                                onClick={() => setSelectedService(null)}
                            >
                                <span>Close Details</span>
                                <div className="icon-x text-xs"></div>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

window.Services = Services;