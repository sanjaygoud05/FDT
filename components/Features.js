function Features() {
    const features = [
        { icon: 'icon-briefcase', title: 'End-to-End Solutions', desc: 'From idea to launch and beyond.' },
        { icon: 'icon-rocket', title: 'Startup Focused', desc: 'We understand the speed and challenges of startups.' },
        { icon: 'icon-zap', title: 'Performance Driven', desc: 'We focus on speed, security and scalability.' },
        { icon: 'icon-box', title: 'Innovative & Future Ready', desc: 'We use modern tech to build future-ready products.' },
        { icon: 'icon-shield-check', title: 'Transparent & Reliable', desc: 'Clear communication and dependable delivery.' },
    ];

    return (
        <section className="py-14 sm:py-16 bg-[#020205]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16 reveal reveal-up">
                    <div className="inline-flex items-center gap-4 mb-4">
                        <div className="h-px bg-purple-500 w-10 sm:w-12"></div>
                        <h2 className="text-[11px] font-bold tracking-[0.2em] text-purple-400 uppercase">WHY CHOOSE US</h2>
                        <div className="h-px bg-purple-500 w-10 sm:w-12"></div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Forge</span>
                    </h3>
                </div>

                {/* 1 col mobile → 2 col sm → 3 col md → 5 col xl */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 border-b border-[#1f1f3a] pb-12 sm:pb-16">
                    {features.map((feat, i) => (
                        <div key={i} className={`flex gap-4 items-start reveal reveal-up delay-${i * 100 + 100}`}>
                            <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full border border-purple-500/30 flex items-center justify-center text-purple-400 bg-purple-900/10">
                                <div className={`${feat.icon} text-lg sm:text-xl`}></div>
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-sm sm:text-base mb-1 sm:mb-2">{feat.title}</h3>
                                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{feat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

window.Features = Features;