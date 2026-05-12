function AboutPage() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        // Trigger reveal animations
        setTimeout(() => {
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach(el => el.classList.add('active'));
        }, 100);
    }, []);

    return (
        <div className="bg-[#06060c] min-h-screen pt-20 md:pt-28 pb-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 reveal reveal-up">
                
                <div className="bg-[#020205] border border-[#1f1f3a] rounded-[2rem] shadow-2xl relative overflow-hidden">
                    {/* Ambient glows */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className="p-8 sm:p-12 md:p-16 lg:p-20 relative z-10">
                        
                        {/* Header Section */}
                        <div className="max-w-3xl mb-20 md:mb-28">
                            <div className="inline-flex items-center gap-3 mb-6">
                                <div className="h-px bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 w-12"></div>
                                <h2 className="text-[11px] font-bold tracking-[0.3em] text-purple-400 uppercase">Forge Digital Technologies</h2>
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
                                About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400">Us</span>
                            </h1>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 mb-6 tracking-tight">
                                We build digital products that perform.
                            </h3>
                            <p className="text-[15px] sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl">
                                Forge Digital Technologies is a tech solutions brand focused on building scalable web platforms, SaaS products, and custom software for real-world impact. We empower businesses with tools that drive efficiency and scale.
                            </p>
                        </div>

                        {/* Mission & Vision */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-24">
                            <div className="bg-[#0a0a16]/80 backdrop-blur border border-[#1f1f3a] rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <div className="icon-target text-2xl"></div>
                                </div>
                                <h4 className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">01</h4>
                                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Our Mission</h3>
                                <p className="text-[15px] text-gray-400 leading-relaxed">
                                    To empower businesses and startups with high-performance digital solutions that drive growth, efficiency, and impact in the modern web landscape.
                                </p>
                            </div>
                            <div className="bg-[#0a0a16]/80 backdrop-blur border border-[#1f1f3a] rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <div className="icon-eye text-2xl"></div>
                                </div>
                                <h4 className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">02</h4>
                                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Our Vision</h3>
                                <p className="text-[15px] text-gray-400 leading-relaxed">
                                    To become a leading technology partner for innovative and scalable products that shape the future, setting new standards in software architecture.
                                </p>
                            </div>
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1f1f3a] to-transparent mb-24"></div>

                        {/* What We Do & Why Choose Us */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-24">
                            {/* What We Do */}
                            <div>
                                <div className="mb-10">
                                    <h2 className="text-[12px] font-bold tracking-[0.2em] text-purple-400 uppercase mb-3">Expertise</h2>
                                    <h3 className="text-3xl font-bold text-white tracking-tight">What We Do</h3>
                                </div>
                                <div className="space-y-8">
                                    {[
                                        { icon: 'icon-monitor', title: 'Build Scalable Solutions', desc: 'We build fast, secure and scalable websites, web apps and SaaS platforms using modern stacks.' },
                                        { icon: 'icon-pen-tool', title: 'Design Experiences', desc: 'We create clean, modern and user-friendly designs that engage and convert visitors into users.' },
                                        { icon: 'icon-rocket', title: 'Startup Focused', desc: 'From idea validation to MVP and scaling, we support startups at every crucial stage.' },
                                        { icon: 'icon-headphones', title: 'Reliable Support', desc: 'We provide ongoing technical support and maintenance to keep your product running flawlessly.' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-5 group">
                                            <div className="w-12 h-12 rounded-lg bg-[#0a0a16] border border-[#1f1f3a] flex items-center justify-center text-gray-400 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-all shrink-0">
                                                <div className={`${item.icon} text-xl`}></div>
                                            </div>
                                            <div>
                                                <h5 className="text-[16px] font-semibold text-white mb-1.5">{item.title}</h5>
                                                <p className="text-[14px] text-gray-400 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Why Choose Us */}
                            <div>
                                <div className="mb-10">
                                    <h2 className="text-[12px] font-bold tracking-[0.2em] text-blue-400 uppercase mb-3">Advantages</h2>
                                    <h3 className="text-3xl font-bold text-white tracking-tight">Why Choose Us?</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        { icon: 'icon-shield-check', title: 'End-to-End Solutions', desc: 'From idea to launch and beyond - we handle everything.' },
                                        { icon: 'icon-users', title: 'Startup Mindset', desc: 'We understand the speed, challenges and goals of startups.' },
                                        { icon: 'icon-zap', title: 'Performance Driven', desc: 'We focus on speed, security and scalability above all.' },
                                        { icon: 'icon-heart-handshake', title: 'Reliable Partner', desc: 'Long-term support, transparent communication & trusted delivery.' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-[#0a0a16] border border-[#1f1f3a] p-6 rounded-2xl text-center hover:border-blue-500/30 transition-colors shadow-md">
                                            <div className="w-12 h-12 mx-auto rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
                                                <div className={`${item.icon} text-xl`}></div>
                                            </div>
                                            <h5 className="text-[15px] font-semibold text-white mb-2">{item.title}</h5>
                                            <p className="text-[13px] text-gray-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Our Approach */}
                        <div className="mb-20 relative z-10">
                            <div className="flex items-center gap-4 mb-14">
                                <div className="h-px bg-[#1f1f3a] flex-1"></div>
                                <h4 className="text-base sm:text-lg font-bold tracking-widest text-purple-400 uppercase">Our Approach</h4>
                                <div className="h-px bg-[#1f1f3a] flex-1"></div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4 relative">
                                <div className="hidden md:block absolute top-9 left-[10%] w-[80%] h-px bg-[#1f1f3a] z-0"></div>
                                {[
                                    { num: '01', icon: 'icon-users', title: 'Understand', desc: 'We listen, learn and understand your goals and challenges.' },
                                    { num: '02', icon: 'icon-file-text', title: 'Plan', desc: 'We plan the right strategy and architecture for your product.' },
                                    { num: '03', icon: 'icon-code', title: 'Build', desc: 'We design, develop and test with quality and performance.' },
                                    { num: '04', icon: 'icon-rocket', title: 'Launch', desc: 'We deploy and launch your product for the real world.' },
                                    { num: '05', icon: 'icon-trending-up', title: 'Scale', desc: 'We support and scale your product as your business grows.' }
                                ].map((step, idx) => (
                                    <div key={idx} className="flex flex-col items-center text-center max-w-[160px] mx-auto z-10 group">
                                        <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#111122] border border-purple-500/30 flex items-center justify-center text-purple-400 mb-5 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-lg">
                                            <div className={`${step.icon} text-3xl`}></div>
                                        </div>
                                        <h5 className="text-white font-bold text-base mb-2 tracking-wider">{step.num}. {step.title.toUpperCase()}</h5>
                                        <p className="text-sm text-gray-400">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 relative z-10">
                            {[
                                { icon: 'icon-briefcase', value: '50+', label: 'Projects Completed' },
                                { icon: 'icon-smile', value: '30+', label: 'Happy Clients' },
                                { icon: 'icon-code', value: '100K+', label: 'Lines of Code Delivered' },
                                { icon: 'icon-building-2', value: '10+', label: 'Industries Served' }
                            ].map((stat, idx) => (
                                <div key={idx} className="bg-[#0d0d1a] border border-[#1f1f3a] rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-md hover:border-purple-500/30 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-[#111122] border border-[#2a2a4a] flex items-center justify-center text-purple-400 mb-4">
                                        <div className={`${stat.icon} text-xl`}></div>
                                    </div>
                                    <div>
                                        <div className="text-2xl sm:text-3xl font-bold text-white leading-none mb-2">{stat.value}</div>
                                        <div className="text-[11px] sm:text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA block */}
                        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/20 rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left relative z-10 shadow-xl">
                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white shrink-0 shadow-[0_0_20px_rgba(147,51,234,0.6)]">
                                    <div className="icon-send text-2xl"></div>
                                </div>
                                <div>
                                    <h4 className="text-base sm:text-lg font-bold text-gray-300 mb-2 uppercase tracking-wider">HAVE AN IDEA?</h4>
                                    <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">LET'S BUILD IT TOGETHER!</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <a href="mailto:info@forgedigitaltechnologies.com" className="flex items-center justify-center lg:justify-start gap-3 text-base sm:text-lg text-gray-300 hover:text-white transition-colors bg-[#0a0a16]/50 px-4 py-2 rounded-lg">
                                    <div className="icon-mail text-purple-400"></div> info@forgedigitaltechnologies.com
                                </a>
                                <a href="tel:+911234567890" className="flex items-center justify-center lg:justify-start gap-3 text-base sm:text-lg text-gray-300 hover:text-white transition-colors bg-[#0a0a16]/50 px-4 py-2 rounded-lg">
                                    <div className="icon-phone text-purple-400"></div> +91 12345 67890
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

window.AboutPage = AboutPage;
