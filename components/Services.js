function Services() {
    const services = [
        { icon: "icon-code", title: "Web Development", desc: "High-performance websites built for speed, scalability and great user experience." },
        { icon: "icon-cloud", title: "SaaS Development", desc: "End-to-end SaaS solutions with powerful dashboards, automation and analytics." },
        { icon: "icon-pen-tool", title: "UI/UX Design", desc: "Clean, modern and intuitive designs that engage users and drive results." },
        { icon: "icon-rocket", title: "Startup Tech Solutions", desc: "From idea validation to MVP and scaling - we help startups build and grow fast." },
        { icon: "icon-settings", title: "Automation & Tools", desc: "Custom tools and automation systems to streamline processes and save time." },
        { icon: "icon-server", title: "Hosting & Deployment", desc: "Secure hosting, seamless deployment and ongoing maintenance & support." }
    ];

    return (
        <section id="services" className="py-20 sm:py-24 bg-[#020205]">
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
                            className={`group relative rounded-xl p-8 border border-[#1f1f3a] bg-[#0a0a16] hover:bg-[#0d0d1e] hover:border-purple-500/50 transition-all duration-300 reveal reveal-up delay-${(idx % 3) * 100 + 100}`}
                        >
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
        </section>
    );
}