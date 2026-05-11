function Process() {
    const steps = [
        { num: "01", icon: "icon-users", title: "Understand", desc: "We listen, learn and understand your goals and challenges." },
        { num: "02", icon: "icon-file-text", title: "Plan", desc: "We plan the strategy, architecture and roadmap." },
        { num: "03", icon: "icon-code", title: "Build", desc: "We design, develop and test with quality and performance." },
        { num: "04", icon: "icon-rocket", title: "Launch", desc: "We deploy your product for a successful launch." },
        { num: "05", icon: "icon-trending-up", title: "Scale", desc: "We support and scale your product as your business grows." }
    ];

    return (
        <section className="py-12 sm:py-16 relative bg-[#020205] overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 sm:mb-16 reveal reveal-up">
                    <div className="inline-flex items-center gap-4 mb-5">
                        <div className="h-px bg-purple-500/50 w-10 sm:w-16"></div>
                        <h2 className="text-[11px] font-bold tracking-[0.3em] text-purple-400 uppercase">OUR PROCESS</h2>
                        <div className="h-px bg-purple-500/50 w-10 sm:w-16"></div>
                    </div>
                    <h3 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
                        How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Work</span>
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed opacity-80">
                        Our battle-tested workflow designed to deliver high-quality digital products with speed and precision.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between gap-16 lg:gap-6 relative">
                    {steps.map((step, idx) => (
                        <div key={idx} className={`flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center relative group gap-8 lg:gap-0 flex-1 reveal reveal-up delay-${idx * 100 + 100}`}>
                            
                            {/* Vertical connecting line for mobile/tablet */}
                            {idx < steps.length - 1 && (
                                <div className="absolute left-[28px] sm:left-[32px] top-16 sm:top-20 w-[2px] h-[calc(100%+4rem)] bg-gradient-to-b from-purple-500 via-purple-500/30 to-transparent lg:hidden z-0"></div>
                            )}

                            {/* Horizontal connector line for desktop */}
                            {idx < steps.length - 1 && (
                                <div className="hidden lg:flex absolute top-10 left-[calc(50%+3rem)] w-[calc(100%-6rem)] items-center z-0 opacity-20 group-hover:opacity-60 transition-opacity duration-500">
                                    <div className="w-full border-t border-dashed border-purple-500"></div>
                                    <div className="icon-chevron-right text-purple-500 -ml-2 text-xl shrink-0"></div>
                                </div>
                            )}

                            {/* Step Icon Container */}
                            <div className="relative shrink-0 z-10 mb-0 lg:mb-8">
                                {/* Main Outer Circle */}
                                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border bg-[#0a0a16] border-purple-500/30 shadow-[0_0_30px_rgba(147,51,234,0.1)] transition-all duration-700 group-hover:shadow-[0_0_50px_rgba(147,51,234,0.4)] group-hover:border-purple-400 group-hover:scale-105 relative">
                                    <div className={`${step.icon} text-xl sm:text-3xl text-purple-300 group-hover:text-white transition-colors`}></div>
                                    
                                    {/* Number Badge */}
                                    <div className="absolute -top-1 -right-1 sm:top-0 sm:right-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 border-2 border-[#020205] flex items-center justify-center text-[10px] sm:text-[12px] text-white font-bold font-mono shadow-lg">
                                        {step.num}
                                    </div>
                                </div>
                                
                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col pt-1 lg:pt-0">
                                <h4 className="text-white font-bold text-lg sm:text-xl mb-2 lg:mb-4 group-hover:text-purple-300 transition-colors tracking-tight">
                                    {step.title}
                                </h4>
                                <p className="text-sm sm:text-[15px] text-gray-400 leading-relaxed lg:max-w-[220px] group-hover:text-gray-300 transition-colors">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

window.Process = Process;
