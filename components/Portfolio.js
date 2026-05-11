function Portfolio() {
    const projects = [
        { name: "EduHub Platform", category: "Education Tech", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "A comprehensive learning management system for modern educational institutions.", link: "#" },
        { name: "TaskFlow SaaS", category: "Productivity", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "An intuitive project management tool designed for agile remote teams.", link: "#" },
        { name: "FitTrack Analytics", category: "Health & Fitness", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "A powerful data analytics dashboard for tracking fitness goals and metrics.", link: "#" }
    ];

    return (
        <section id="work" className="py-12 sm:py-16 bg-[#020205] relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-72 h-72 md:w-96 md:h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 sm:mb-16 reveal reveal-up">
                    <div className="inline-flex items-center gap-4 mb-4">
                        <div className="h-px bg-purple-500 w-10 sm:w-12"></div>
                        <h2 className="text-[11px] font-bold tracking-[0.2em] text-purple-400 uppercase">OUR WORK</h2>
                        <div className="h-px bg-purple-500 w-10 sm:w-12"></div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Projects</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {projects.map((proj, idx) => (
                        <div 
                            key={idx} 
                            className={`group relative rounded-xl overflow-hidden bg-[#0a0a16] border border-[#1f1f3a] hover:border-purple-500/50 transition-all duration-500 flex flex-col reveal reveal-up delay-${(idx % 3) * 100 + 100}`}
                        >
                            {/* Image */}
                            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#111122]">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a16] via-transparent to-transparent z-10 opacity-80"></div>
                                <img
                                    src={proj.image}
                                    alt={proj.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="w-10 h-10 rounded-full bg-purple-600/90 text-white flex items-center justify-center backdrop-blur-sm shadow-[0_0_20px_rgba(147,51,234,0.5)]">
                                        <div className="icon-arrow-up-right text-lg"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4 sm:p-5 relative z-20 -mt-8 bg-gradient-to-t from-[#0a0a16] via-[#0a0a16] to-transparent pt-10">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <div className="text-[8px] font-bold tracking-widest text-blue-400 uppercase mb-1">{proj.category}</div>
                                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-purple-300 transition-colors">{proj.name}</h4>
                                    </div>
                                    <div className="w-6 h-6 rounded-full border border-[#2a2a4a] group-hover:border-purple-500 flex items-center justify-center text-gray-400 group-hover:text-purple-400 transition-colors shrink-0 bg-[#0a0a16]">
                                        <div className="icon-arrow-right text-[10px] transform group-hover:-rotate-45 transition-transform"></div>
                                    </div>
                                </div>
                                <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-2">{proj.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

window.Portfolio = Portfolio;