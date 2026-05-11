function ContactPage() {
    const [formData, setFormData] = React.useState({ name: '', email: '', phone: '', company: '', message: '' });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);

    React.useEffect(() => {
        window.scrollTo(0, 0);
        // Trigger reveal animations
        setTimeout(() => {
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach(el => el.classList.add('active'));
        }, 100);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', company: '', message: '' });
            // Show success for 5 seconds
            setTimeout(() => setSubmitted(false), 5000);
        }, 1500);
    };

    return (
        <div className="min-h-[calc(100vh-80px)] bg-[#020205] relative overflow-hidden flex flex-col">
            {/* Background elements - Cleaned */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[#020205]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10 w-full flex-grow">
                {/* Back Link */}
                <div className="mb-12 reveal reveal-left">
                    <a href="#home" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group">
                        <div className="w-8 h-8 rounded-full border border-[#1f1f3a] flex items-center justify-center group-hover:border-purple-500/50 transition-colors">
                            <div className="icon-arrow-left text-xs"></div>
                        </div>
                        <span className="font-medium tracking-wide">Return to platform</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    
                    {/* Left Column: Text & Info */}
                    <div className="reveal reveal-left delay-200">
                        <div className="inline-block border border-purple-500/20 bg-purple-900/10 text-purple-400 text-[10px] font-bold px-3 py-1.5 rounded-full mb-6 tracking-widest uppercase">
                            CONNECT WITH US
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                            Let's build your <br/>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400">next project</span> together.
                        </h1>
                        <p className="text-gray-400 text-lg mb-12 max-w-lg leading-relaxed">
                            Precision engineering paired with thoughtful design to deliver digital solutions that perform at scale.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-[#0a0a16] border border-[#1f1f3a] flex items-center justify-center text-purple-400 shrink-0 shadow-lg">
                                    <div className="icon-mail text-xl"></div>
                                </div>
                                <div>
                                    <h4 className="text-[11px] font-bold tracking-widest text-gray-500 uppercase mb-1">Email Support</h4>
                                    <p className="text-lg font-semibold text-white">hello@forgedigital.tech</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-[#0a0a16] border border-[#1f1f3a] flex items-center justify-center text-blue-400 shrink-0 shadow-lg">
                                    <div className="icon-phone text-xl"></div>
                                </div>
                                <div>
                                    <h4 className="text-[11px] font-bold tracking-widest text-gray-500 uppercase mb-1">Call Representative</h4>
                                    <p className="text-lg font-semibold text-white">+91 63042 18064</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-[#0a0a16] border border-[#1f1f3a] flex items-center justify-center text-green-400 shrink-0 shadow-lg">
                                    <div className="icon-map-pin text-xl"></div>
                                </div>
                                <div>
                                    <h4 className="text-[11px] font-bold tracking-widest text-gray-500 uppercase mb-1">Office Location</h4>
                                    <p className="text-lg font-semibold text-white">Hyderabad, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="reveal reveal-right delay-300">
                        <div className="bg-[#0a0a16] border border-[#1f1f3a] rounded-[2rem] p-8 sm:p-10 shadow-2xl relative overflow-hidden group">
                            {/* Form card decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl rounded-full"></div>
                            
                            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Project Inquiry</h3>
                            <p className="text-sm text-gray-500 mb-8">Fill out the form below and we'll be in touch shortly.</p>

                            {submitted ? (
                                <div className="py-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center text-green-400 mx-auto mb-6">
                                        <div className="icon-check text-4xl"></div>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                                    <p className="text-gray-400">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                                            <input 
                                                type="text" 
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="John Doe" 
                                                className="w-full bg-[#06060c] border border-[#1f1f3a] rounded-xl px-5 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/50 transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="john@example.com" 
                                                className="w-full bg-[#06060c] border border-[#1f1f3a] rounded-xl px-5 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/50 transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">Phone Number</label>
                                            <input 
                                                type="tel" 
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+91 XXXXX XXXXX" 
                                                className="w-full bg-[#06060c] border border-[#1f1f3a] rounded-xl px-5 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/50 transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">Company</label>
                                            <input 
                                                type="text" 
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Organization name" 
                                                className="w-full bg-[#06060c] border border-[#1f1f3a] rounded-xl px-5 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/50 transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">Your Message</label>
                                        <textarea 
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="4" 
                                            placeholder="Tell us about your project..." 
                                            className="w-full bg-[#06060c] border border-[#1f1f3a] rounded-xl px-5 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                                        ></textarea>
                                    </div>
                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-500/20 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        ) : (
                                            <>
                                                <span>Initialize Consultation</span>
                                                <div className="icon-arrow-right"></div>
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

window.ContactPage = ContactPage;
