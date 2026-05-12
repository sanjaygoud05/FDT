function Services({ isPage = false }) {
    // Use the global services data defined in app.js
    const services = window.SERVICES_DATA || [];

    return (
        <section id="services" className={`py-12 sm:py-16 ${isPage ? 'bg-[#06060c] pt-20 md:pt-28' : 'bg-[#020205]'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-16 reveal reveal-up">
                    <div className="inline-flex items-center gap-4 mb-4">
                        <div className="h-px bg-purple-500/20 w-12"></div>
                        <h2 className="text-[11px] font-bold tracking-[0.3em] text-purple-400 uppercase">
                            {isPage ? 'BUILDING SOLUTIONS. DRIVING GROWTH.' : 'SERVICES'}
                        </h2>
                        <div className="h-px bg-purple-500/20 w-12"></div>
                    </div>
                    {/* Refined Heading Size */}
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase">
                        OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">SERVICES</span>
                    </h1>
                    <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed font-medium">
                        End-to-end digital solutions crafted to grow your business and bring your ideas to life.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-24">
                    {services.map((svc, idx) => (
                        <a 
                            key={svc.id || idx} 
                            href={`#service-${svc.id}`}
                            className="group relative rounded-2xl p-7 border border-[#1f1f3a] bg-[#0d0d1a]/40 hover:bg-[#0d0d1e] hover:border-purple-500/40 transition-all duration-500 reveal reveal-up cursor-pointer block overflow-hidden"
                        >
                            <div className="absolute -inset-px bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="relative mb-7 w-16 h-16">
                                <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all"></div>
                                <div className="relative w-16 h-16 rounded-full bg-[#0a0a16] border-2 border-[#1f1f3a] group-hover:border-purple-500/50 flex items-center justify-center text-white transition-all duration-500">
                                    <div className={`${svc.icon} text-2xl`}></div>
                                    <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-[#0a0a16] border border-[#1f1f3a] flex items-center justify-center group-hover:border-purple-500/50 transition-colors">
                                        <div className="w-1 h-1 rounded-full bg-purple-500"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors uppercase tracking-tight relative z-10">
                                {svc.title}
                            </h3>
                            
                            <p className="text-gray-400 text-sm leading-relaxed mb-8 group-hover:text-gray-300 transition-colors relative z-10 h-10 overflow-hidden">
                                {svc.desc}
                            </p>
                            
                            <div className="flex items-center gap-2 text-purple-400 text-[11px] font-bold tracking-widest uppercase relative z-10">
                                <div className="icon-arrow-right-circle text-base"></div>
                                <span>{svc.tagline}</span>
                            </div>
                        </a>
                    ))}
                </div>


                {/* Final CTA Block - More Compact and Refined */}
                {isPage && (
                    <div className="reveal reveal-up">
                        <div className="bg-[#0a0a16] border border-[#1f1f3a] rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[100px] rounded-full"></div>
                            
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="text-center mb-10">
                                    <h4 className="text-purple-400 font-bold tracking-[0.2em] text-[10px] mb-3 uppercase">HAVE AN IDEA?</h4>
                                    <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-2 tracking-tight uppercase">
                                        LET'S BUILD IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">TOGETHER!</span>
                                    </h2>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mb-12">
                                    <a href="#contact-page" className="flex items-center gap-4 p-5 rounded-2xl bg-[#0d0d1e] border border-[#1f1f3a] hover:border-purple-500/50 transition-all group/item">
                                        <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg group-hover/item:scale-105 transition-transform">
                                            <div className="icon-send text-lg"></div>
                                        </div>
                                        <div>
                                            <h5 className="text-white font-bold text-sm mb-0.5 uppercase tracking-tight">START YOUR PROJECT</h5>
                                            <p className="text-gray-500 text-[11px]">Turn your idea into reality.</p>
                                        </div>
                                    </a>
                                    <a href="https://wa.me/916304218064" className="flex items-center gap-4 p-5 rounded-2xl bg-[#0d0d1e] border border-[#1f1f3a] hover:border-blue-500/50 transition-all group/item">
                                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg group-hover/item:scale-105 transition-transform">
                                            <div className="icon-phone text-lg"></div>
                                        </div>
                                        <div>
                                            <h5 className="text-white font-bold text-sm mb-0.5 uppercase tracking-tight">BOOK A CALL</h5>
                                            <p className="text-gray-500 text-[11px]">Free technical consultation.</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="flex flex-wrap justify-center gap-6 md:gap-10 pt-8 border-t border-[#1f1f3a] w-full">
                                    <div className="flex items-center gap-2">
                                        <div className="icon-mail text-xs text-purple-400"></div>
                                        <span className="text-[12px] font-medium text-gray-400">info@forgedigitaltechnologies.com</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="icon-phone text-xs text-purple-400"></div>
                                        <span className="text-[12px] font-medium text-gray-400">+91 63042 18064</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

window.Services = Services;