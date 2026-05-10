function Hero() {
    return (
        <section id="home" className="pt-20 sm:pt-24 md:pt-32 pb-12 md:pb-16 relative overflow-hidden bg-[#020205]">
            {/* Background blobs */}
            <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-0 right-[10%] w-[200px] sm:w-[350px] md:w-[500px] h-[200px] sm:h-[350px] md:h-[500px] bg-purple-700/20 rounded-full blur-[80px] md:blur-[120px] opacity-40"></div>
                <div className="absolute bottom-1/4 left-0 w-[150px] sm:w-[280px] md:w-[400px] h-[150px] sm:h-[280px] md:h-[400px] bg-blue-600/15 rounded-full blur-[60px] md:blur-[100px] opacity-30"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">

                    {/* Left Text Block */}
                    <div className="relative z-10 pt-2 sm:pt-6 text-center lg:text-left reveal reveal-left">
                        <div className="inline-block border border-blue-500/20 bg-blue-900/10 text-blue-400 text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full mb-5 tracking-widest uppercase">
                            BUILDING SOLUTIONS. DRIVING GROWTH.
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[64px] font-bold leading-[1.1] mb-5 text-white tracking-tight">
                            We Build Digital<br className="hidden xs:block"/>
                            {' '}Products That{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-300">Perform</span>
                        </h1>
                        <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-7 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            We design, develop and deploy powerful websites, SaaS platforms and custom software for startups and businesses.
                        </p>
                        <div className="flex flex-col xs:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mb-8 md:mb-12">
                            <button className="w-full xs:w-auto justify-center bg-gradient-to-r from-purple-600 to-purple-500 hover:opacity-90 text-white px-6 md:px-8 py-3 sm:py-3.5 rounded-full font-medium flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] text-sm sm:text-base">
                                Start Your Project
                                <div className="icon-arrow-right text-sm bg-white text-purple-600 rounded-full w-5 h-5 flex items-center justify-center"></div>
                            </button>
                            <button className="w-full xs:w-auto justify-center border border-gray-600 hover:border-gray-400 text-white px-6 md:px-8 py-3 sm:py-3.5 rounded-full font-medium flex items-center gap-2 transition-all bg-transparent text-sm sm:text-base">
                                View Our Work
                                <div className="icon-arrow-right text-sm"></div>
                            </button>
                        </div>

                        <div className="reveal reveal-up delay-200">
                            <p className="text-xs text-gray-500 mb-3 font-medium">Trusted by startups and businesses worldwide</p>
                            <div className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center lg:justify-start opacity-70">
                                <div className="flex items-center gap-1.5 text-white font-semibold text-xs sm:text-sm"><div className="icon-coffee text-white"></div> startupgrind</div>
                                <div className="flex items-center gap-1.5 text-white font-semibold text-xs sm:text-sm"><div className="icon-code text-white"></div> Codeyogi</div>
                                <div className="flex items-center gap-1.5 text-white font-semibold text-xs sm:text-sm"><div className="icon-box text-white"></div> StudySync</div>
                                <div className="flex items-center gap-1.5 text-white font-semibold text-xs sm:text-sm"><div className="icon-circle-check text-white"></div> TaskFlow</div>
                                <div className="flex items-center gap-1.5 text-white font-semibold text-xs sm:text-sm"><div className="icon-book-open text-white"></div> EduBridge</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Graphic */}
                    <div className="flex relative h-[220px] xs:h-[280px] sm:h-[360px] lg:h-[560px] w-full items-center justify-center lg:justify-end z-20 mt-4 lg:mt-0 reveal reveal-right">
                        <div className="relative w-full max-w-[280px] xs:max-w-[360px] sm:max-w-[480px] lg:max-w-[800px] xl:scale-110 xl:translate-x-10 z-10 flex items-center justify-center">
                            <img
                                src="https://app.trickle.so/storage/public/images/usr_1f04cef398000001/34280469-9fbb-41a6-ae28-b943a32ad6ed.jpeg"
                                alt="Forge Digital Products Platform"
                                className="w-full h-auto object-contain mix-blend-screen"
                                style={{
                                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
                                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)'
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-10 md:mt-14 border border-[#1f1f3a] rounded-xl p-5 sm:p-7 bg-[#0a0a16]/50 backdrop-blur-sm relative z-30 reveal reveal-up delay-300">
                    {[
                        { icon: 'icon-briefcase', iconColor: 'text-purple-400', bg: 'bg-purple-900/30', value: '50+', label: 'Projects Completed', border: 'md:border-r border-[#1f1f3a]' },
                        { icon: 'icon-smile', iconColor: 'text-blue-400', bg: 'bg-blue-900/30', value: '30+', label: 'Happy Clients', border: 'md:border-r border-[#1f1f3a]' },
                        { icon: 'icon-code', iconColor: 'text-green-400', bg: 'bg-[#1a1a2e] border border-gray-800', value: '100K+', label: 'Lines of Code', border: 'md:border-r border-[#1f1f3a]' },
                        { icon: 'icon-building-2', iconColor: 'text-yellow-400', bg: 'bg-[#1a1a2e] border border-gray-800', value: '10+', label: 'Industries Served', border: '' },
                    ].map((stat, i) => (
                        <div key={i} className={`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3 md:pr-4 ${stat.border}`}>
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${stat.bg} flex items-center justify-center ${stat.iconColor} shrink-0`}>
                                <div className={`${stat.icon} text-lg sm:text-xl`}></div>
                            </div>
                            <div>
                                <div className="text-xl sm:text-2xl font-bold text-white leading-tight">{stat.value}</div>
                                <div className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}