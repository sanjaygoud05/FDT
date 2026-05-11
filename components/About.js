function About() {
    return (
        <section id="about" className="pb-10 sm:pb-12 pt-6 sm:pt-8 bg-[#020205]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="bg-[#0a0a16] border border-[#1f1f3a] rounded-2xl p-5 sm:p-8 lg:p-12 relative overflow-hidden reveal reveal-up">
                    {/* Background glow */}
                    <div className="absolute top-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-900/10 rounded-full blur-[80px] pointer-events-none"></div>

                    {/* Layout: stacked on mobile, 3-col on lg */}
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

                        {/* Laptop Graphic — bottom on mobile, left on desktop */}
                        <div className="w-full lg:w-[32%] shrink-0 flex justify-center order-2 lg:order-1 mt-4 lg:mt-0 reveal reveal-left delay-200">
                            <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
                                {/* Glowing base */}
                                <div className="absolute -bottom-2 -left-4 -right-4 h-6 rounded-[50%] bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 blur-xl opacity-60 z-0"></div>

                                <div className="relative z-10">
                                    {/* Screen */}
                                    <div className="relative w-full aspect-[16/10] bg-[#020205] border-[4px] border-[#1a1a2e] rounded-t-xl shadow-2xl flex flex-col justify-between overflow-hidden">
                                        <div className="absolute inset-0 bg-[#060611] flex flex-col p-2 sm:p-3">
                                            <div className="w-full h-2 bg-[#1f1f3a] rounded mb-3 flex items-center px-1 gap-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                            </div>
                                            <div className="flex-grow flex items-center justify-center p-4">
                                                <img 
                                                    src="assets/logo.png" 
                                                    alt="FDT Logo" 
                                                    className="w-full max-w-[80px] h-auto object-contain opacity-80"
                                                />
                                            </div>
                                            <div className="absolute bottom-2 right-2 w-10 h-10 bg-purple-600/20 border border-purple-500/30 rounded-lg flex items-center justify-center">
                                                <div className="icon-code text-purple-400 text-sm"></div>
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
                                    </div>
                                    {/* Base */}
                                    <div className="relative w-[114%] -left-[7%] h-5 bg-[#1a1a2e] rounded-b-[15px] border-t border-[#333] z-20 flex flex-col items-center">
                                        <div className="w-full h-0.5 bg-[#111] mb-0.5"></div>
                                        <div className="w-1/4 h-1.5 bg-[#222] rounded-b-md"></div>
                                        <div className="absolute -bottom-1 w-[90%] h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] z-30"></div>
                                    </div>
                                </div>

                                {/* Floating badges */}
                                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-lg bg-[#0a0a16]/90 border border-blue-500/30 flex items-center justify-center shadow-lg transform rotate-12 z-30">
                                    <div className="icon-shield-check text-blue-400 text-sm"></div>
                                </div>
                                <div className="absolute top-1/2 -left-6 w-11 h-11 rounded-lg bg-[#0a0a16]/90 border border-purple-500/30 flex items-center justify-center shadow-lg transform -rotate-12 z-30">
                                    <div className="text-purple-400 font-bold text-xs">UI/UX</div>
                                </div>
                            </div>
                        </div>

                        {/* Center Text */}
                        <div className="w-full lg:w-[40%] text-center lg:text-left order-1 lg:order-2 reveal reveal-right delay-200">
                            <div className="text-[10px] font-bold tracking-widest text-white uppercase mb-3 flex items-center justify-center lg:justify-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                OUR STORY
                            </div>
                            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold mb-5 text-white leading-tight">
                                Empowering the next generation of <span className="text-purple-500">builders</span>.
                            </h2>
                            <p className="text-sm text-gray-400 mb-7 leading-relaxed">
                                Forge Digital Technologies is more than a tech company. Based in the heart of Hyderabad, we build the tools and communities that help the next generation learn, lead, and grow.
                            </p>
                            <p className="text-[13px] text-gray-500 mb-7 italic border-l-2 border-purple-500/30 pl-4">
                                "Students are the spark of every revolution. Our focus is on solving the real challenge — not a lack of talent, but a lack of the right ecosystem." — Jashwanth Sonti, CEO
                            </p>
                            <a 
                                href="#about-page"
                                className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#2a2a4a] hover:border-purple-500 rounded-full text-xs font-semibold text-white transition-colors bg-[#111122] hover:bg-purple-900/20 cursor-pointer"
                            >
                                Learn More About Us <div className="icon-arrow-right"></div>
                            </a>
                        </div>

                        {/* Right Features */}
                        <div className="w-full lg:w-[28%] flex flex-col sm:flex-row lg:flex-col justify-center gap-6 sm:gap-8 lg:gap-8 order-3 border-t lg:border-t-0 lg:border-l border-[#1f1f3a] pt-6 lg:pt-0 lg:pl-8">
                            {[
                                { icon: 'icon-target', color: 'text-purple-400', bg: 'bg-purple-900/20 border-purple-500/20', title: 'Client First Approach', desc: 'Your success is our priority.' },
                                { icon: 'icon-zap', color: 'text-blue-400', bg: 'bg-blue-900/20 border-blue-500/20', title: 'Quality & Performance', desc: 'We build for speed, security and scalability.' },
                                { icon: 'icon-headphones', color: 'text-purple-400', bg: 'bg-purple-900/20 border-purple-500/20', title: 'Reliable Support', desc: "We're with you even after launch." },
                            ].map((feat, i) => (
                                <div key={i} className={`flex gap-4 items-start reveal reveal-right delay-${i * 100 + 300}`}>
                                    <div className={`w-10 h-10 rounded-full ${feat.bg} border flex items-center justify-center ${feat.color} shrink-0`}>
                                        <div className={`${feat.icon} text-lg`}></div>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-sm mb-1">{feat.title}</h4>
                                        <p className="text-[11px] text-gray-400">{feat.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

window.About = About;