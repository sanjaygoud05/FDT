function CTA() {
    return (
        <section className="pt-2 pb-10 sm:pb-12 bg-[#020205]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-[#170a36] via-[#2c1566] to-[#170a36] border border-[#3b1d82] rounded-2xl sm:rounded-[24px] p-6 sm:p-8 lg:px-14 lg:py-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-[0_10px_40px_rgba(90,50,250,0.15)] reveal reveal-up">

                    {/* Left: Rocket + Text */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-8 text-center sm:text-left w-full md:w-auto">
                        <div className="hidden sm:flex w-20 h-20 lg:w-28 lg:h-24 shrink-0 items-center justify-center reveal reveal-left delay-300">
                            <div className="text-[60px] lg:text-[76px] leading-none filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.6)] transform -rotate-12 hover:-translate-y-2 hover:scale-105 transition-all duration-500 cursor-default">🚀</div>
                        </div>
                        <div className="reveal reveal-left delay-200">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-bold text-white mb-2 tracking-tight leading-tight">
                                Have an idea? Let's build it together!
                            </h2>
                            <p className="text-gray-300 text-sm">Turn your idea into a powerful digital product.</p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 shrink-0 w-full md:w-auto reveal reveal-right delay-400">
                        <a href="#contact-page" className="w-full xs:w-auto bg-white text-[#170a36] hover:bg-gray-100 px-6 md:px-7 py-3 md:py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2.5 transition-colors shadow-lg whitespace-nowrap">
                            Start Your Project
                            <div className="icon-arrow-right bg-[#170a36] text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px]"></div>
                        </a>
                        <a href="#contact-page" className="w-full xs:w-auto border-2 border-[#4623c2] hover:border-purple-400 bg-transparent text-white px-6 md:px-7 py-3 md:py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2.5 transition-all whitespace-nowrap">
                            Book a Call
                            <div className="icon-phone text-[14px]"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

window.CTA = CTA;