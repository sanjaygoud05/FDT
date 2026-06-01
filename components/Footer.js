function Footer() {
    return (
        <footer className="pt-16 sm:pt-20 pb-10 sm:pb-16 bg-[#020205] border-t border-[#1f1f3a] reveal reveal-up">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-6">

                    {/* Column 1: Logo & Info */}
                    <div className="sm:col-span-2 lg:col-span-1 lg:border-r border-[#1f1f3a] lg:pr-8 reveal reveal-left delay-200">
                        <a href="#home" className="inline-block mb-5">
                            <img
                                src="assets/logo.png"
                                alt="Forge Digital Technologies Logo"
                                className="h-14 sm:h-16 w-auto object-contain"
                            />
                        </a>
                        <p className="text-[13px] text-gray-500 mb-6 leading-relaxed max-w-xs">
                            We build scalable websites, SaaS products and custom software that help businesses grow and succeed in the digital world.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                <div className="icon-linkedin text-sm"></div>
                            </a>
                            <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                <div className="icon-instagram text-sm"></div>
                            </a>
                            <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full bg-[#1da1f2] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                <div className="icon-twitter text-sm"></div>
                            </a>
                            <a href="#" aria-label="GitHub" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                <div className="icon-github text-sm"></div>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="reveal reveal-up delay-300">
                        <h4 className="text-white font-semibold text-[15px] mb-5">Quick Links</h4>
                        <ul className="space-y-3.5">
                            {[['#home', 'Home'], ['#about-page', 'About Us'], ['#services', 'Services'], ['#work', 'Our Work'], ['#contact-page', 'Contact']].map(([href, label]) => (
                                <li key={href}><a href={href} className="text-[13px] text-gray-400 hover:text-white transition-colors">{label}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="reveal reveal-up delay-400">
                        <h4 className="text-white font-semibold text-[15px] mb-5">Services</h4>
                        <ul className="space-y-3.5">
                            {['Web Development', 'SaaS Development', 'UI/UX Design', 'Startup Tech Solutions', 'Automation & Tools', 'Hosting & Deployment'].map(svc => (
                                <li key={svc}><a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">{svc}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact + Proudly Part Of */}
                    <div className="flex flex-col gap-8 lg:border-l border-[#1f1f3a] lg:pl-8 reveal reveal-right delay-500">
                        <div>
                            <h4 className="text-white font-semibold text-[15px] mb-5">Contact Us</h4>
                            <ul className="space-y-4">
                                {[
                                    { icon: 'icon-mail', text: 'info@forgedigitaltechnologies.com' },
                                    { icon: 'icon-phone', text: '+91 63042 18064' },
                                    { icon: 'icon-map-pin', text: 'India' },
                                ].map(({ icon, text }) => (
                                    <li key={text} className="flex items-center gap-3 text-[13px] text-gray-400">
                                        <div className={`${icon} text-gray-500 text-base shrink-0`}></div>
                                        <span className="break-all">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Proudly Part Of */}
                        <div className="pt-4 border-t border-[#1f1f3a]">
                            <span className="text-[11px] text-gray-500 mb-3 block uppercase tracking-wider font-medium">Proudly Part of</span>
                            <div className="flex flex-col justify-center">
                                <span className="text-[13px] font-bold text-white tracking-widest uppercase leading-none mb-1">STUDENT FORGE</span>
                                <span className="text-[9px] text-gray-500 uppercase tracking-widest leading-none">TECHNOLOGIES PVT. LTD.</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-12 sm:mt-14 pt-6 border-t border-[#1f1f3a] text-center sm:text-left text-[12px] text-gray-600 reveal reveal-up delay-600">
                    © 2026 Student Forge Technologies Pvt.Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

window.Footer = Footer;