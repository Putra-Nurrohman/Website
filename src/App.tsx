import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Anchor, 
  Ship, 
  Navigation, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  ChevronRight, 
  Menu, 
  X, 
  Globe, 
  ShieldCheck, 
  Clock,
  ArrowRight,
  Award,
  Waves
} from 'lucide-react';

const WHATSAPP_NUMBER = "+6287761591095";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=Halo%20PT.%20AntaVior%20Samudera,%20saya%20tertarik%20dengan%20layanan%20Anda.`;

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen selection:bg-gold-luxe selection:text-navy-dark bg-navy-dark maritime-pattern">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <Anchor className="w-8 h-8 text-gold-luxe group-hover:rotate-12 transition-transform duration-500" />
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -inset-1 bg-gold-luxe/20 blur-lg rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold tracking-[0.2em] text-white">
                ANTAVIOR
              </span>
              <span className="text-[10px] tracking-[0.5em] text-gold-luxe font-bold -mt-1">
                SAMUDERA
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[11px] uppercase tracking-[0.25em] font-medium text-white/70 hover:text-gold-luxe transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-luxe transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-3 overflow-hidden bg-transparent border border-gold-luxe/50"
            >
              <div className="absolute inset-0 bg-gold-luxe translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-luxe group-hover:text-navy-dark transition-colors duration-500">
                Inquiry Now
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-navy-dark flex flex-col justify-center items-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-serif text-white hover:text-gold-luxe transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 border border-gold-luxe text-gold-luxe px-12 py-4 font-bold uppercase tracking-widest"
            >
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            src="https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?auto=format&fit=crop&q=80&w=2000" 
            alt="Busy Port with Ships"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 hero-gradient" />
          
          {/* Animated Particles/Waves Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-gold-luxe/10 to-transparent" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-px bg-gold-luxe mb-8" 
            />
            <span className="text-gold-luxe uppercase tracking-[0.5em] text-xs font-bold mb-6 block">
              The Pinnacle of Maritime Logistics
            </span>
            <h1 className="text-7xl md:text-9xl text-white leading-[0.9] mb-10 font-serif italic">
              Excellence <br />
              <span className="text-gold-luxe not-italic">Beyond Horizons.</span>
            </h1>
            <p className="text-white/50 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl font-light">
              PT. AntaVior Samudera redefines industrial shipping with a legacy of precision, 
              unwavering integrity, and world-class maritime solutions based in Semarang.
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <a href="#services" className="group relative px-12 py-5 bg-gold-luxe text-navy-dark font-bold uppercase tracking-[0.2em] text-xs transition-all duration-500 hover:bg-white">
                Discover Services
              </a>
              <a href="#contact" className="text-white text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-4 group">
                Contact Us <div className="w-12 h-px bg-white/30 group-hover:w-20 transition-all duration-500" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Side Rail Text */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:block">
          <span className="writing-mode-vertical text-[10px] uppercase tracking-[1em] text-white/20 rotate-180">
            SEMARANG • INDONESIA • EST 2010
          </span>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5 bg-navy-deep/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Vessels Managed", value: "45+" },
              { label: "Ports Connected", value: "120+" },
              { label: "Annual Tonnage", value: "2.5M" },
              { label: "Years Excellence", value: "15" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-4xl md:text-5xl font-serif text-gold-luxe mb-2">{stat.value}</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden luxe-border p-4">
                <img 
                  src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&q=80&w=1000" 
                  alt="Corporate Excellence"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 bg-navy-deep p-12 luxe-border hidden lg:block">
                <Award className="w-12 h-12 text-gold-luxe mb-4" />
                <p className="text-xs uppercase tracking-widest text-white/50 leading-loose">
                  Certified <br /> Global Standard <br /> ISO 9001:2015
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold-luxe font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Our Heritage</span>
              <h2 className="text-5xl md:text-6xl text-white mb-10 leading-tight italic">
                A Legacy of <br /> <span className="not-italic text-gold-luxe">Maritime Mastery.</span>
              </h2>
              <div className="space-y-8 text-white/60 font-light leading-relaxed text-lg">
                <p>
                  PT. AntaVior Samudera stands as a beacon of professional maritime industry in Semarang. 
                  We don't just move cargo; we manage the lifelines of global commerce with a standard 
                  of luxury and precision that is unmatched in the region.
                </p>
                <p>
                  Our commitment to excellence is reflected in every nautical mile we cover. 
                  From our strategic headquarters in Tanjung Emas, we orchestrate a symphony of 
                  logistics that spans the Indonesian archipelago and beyond.
                </p>
              </div>
              
              <div className="mt-16 grid grid-cols-2 gap-12">
                <div className="space-y-4">
                  <Waves className="text-gold-luxe w-6 h-6" />
                  <h4 className="text-white uppercase tracking-widest text-xs font-bold">Oceanic Reach</h4>
                  <p className="text-[11px] text-white/40 leading-relaxed">Connecting major global trade hubs with seamless efficiency.</p>
                </div>
                <div className="space-y-4">
                  <ShieldCheck className="text-gold-luxe w-6 h-6" />
                  <h4 className="text-white uppercase tracking-widest text-xs font-bold">Elite Security</h4>
                  <p className="text-[11px] text-white/40 leading-relaxed">Uncompromising safety protocols for high-value industrial assets.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-navy-deep/50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-gold-luxe font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Premium Solutions</span>
              <h2 className="text-5xl md:text-6xl text-white italic">Bespoke <span className="not-italic text-gold-luxe">Maritime Services.</span></h2>
            </div>
            <div className="h-px w-32 bg-gold-luxe/30 hidden md:block mb-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/5">
            {[
              {
                icon: <Ship className="w-8 h-8" />,
                title: "Industrial Shipping",
                desc: "Specialized bulk and container transport across the Indonesian archipelago with guaranteed schedules."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Forwarding",
                desc: "End-to-end international logistics management, navigating complex customs and oceanic routes."
              },
              {
                icon: <Navigation className="w-8 h-8" />,
                title: "Port Operations",
                desc: "Elite stevedoring and terminal management services at Semarang's most strategic maritime gateways."
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ backgroundColor: "rgba(197, 160, 89, 0.05)" }}
                className="bg-navy-dark p-16 transition-all duration-500 group"
              >
                <div className="text-gold-luxe mb-12 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                <h3 className="text-2xl text-white mb-6 italic font-serif">{service.title}</h3>
                <p className="text-white/40 mb-12 leading-relaxed font-light text-sm">{service.desc}</p>
                <a href={WHATSAPP_LINK} className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-gold-luxe font-bold group-hover:gap-6 transition-all">
                  Consultation <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <span className="text-gold-luxe font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">The Armada</span>
            <h2 className="text-5xl md:text-7xl text-white italic">Vessels of <span className="not-italic text-gold-luxe">Distinction.</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { name: "AVS PRESTIGE", type: "Ultra Large Container", img: "https://images.unsplash.com/photo-1494412574743-019485676a38" },
              { name: "AVS MAJESTIC", type: "Deep Sea Tanker", img: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca" },
              { name: "AVS SOVEREIGN", type: "Bulk Carrier", img: "https://images.unsplash.com/photo-1544441893-675973e31985" },
              { name: "AVS EMPIRE", type: "Ro-Ro Specialist", img: "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7" }
            ].map((ship, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative aspect-video overflow-hidden luxe-border"
              >
                <img 
                  src={`${ship.img}?auto=format&fit=crop&q=80&w=1200`} 
                  alt={ship.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-12 w-full flex justify-between items-end">
                  <div>
                    <span className="text-gold-luxe text-[10px] font-bold uppercase tracking-[0.4em] mb-3 block">{ship.type}</span>
                    <h4 className="text-white text-3xl font-serif italic">{ship.name}</h4>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-gold-luxe group-hover:border-gold-luxe transition-all duration-500">
                    <ArrowRight className="w-5 h-5 text-white group-hover:text-navy-dark" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Maritime Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?auto=format&fit=crop&q=80&w=2000" 
            alt="Semarang Port View"
            className="w-full h-full object-cover opacity-30 fixed"
            style={{ objectPosition: 'center 30%' }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-navy-dark/80" />
        </div>
        <div className="relative z-10 text-center px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl text-white font-serif italic mb-8">
              "Navigating the Future of <span className="text-gold-luxe not-italic">Global Trade.</span>"
            </h2>
            <div className="h-px w-24 bg-gold-luxe mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-navy-deep/30 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-32">
            <div>
              <span className="text-gold-luxe font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Get In Touch</span>
              <h2 className="text-5xl md:text-7xl text-white mb-12 italic">Connect with <br /> <span className="not-italic text-gold-luxe">Our Experts.</span></h2>
              
              <div className="space-y-12">
                <div className="flex gap-8">
                  <MapPin className="text-gold-luxe w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-3">Headquarters</h4>
                    <p className="text-white/50 font-light leading-relaxed">Jl. RE Martadinata No. 12, Tanjung Emas <br /> Semarang, Central Java, Indonesia</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <Phone className="text-gold-luxe w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-3">Direct Line</h4>
                    <p className="text-white/50 font-light">+62 24 1234 5678</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <Mail className="text-gold-luxe w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-3">Electronic Mail</h4>
                    <p className="text-white/50 font-light">concierge@antaviorsamudera.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gold-luxe/5 blur-3xl rounded-full" />
              <div className="relative bg-navy-dark p-12 luxe-border">
                <h3 className="text-2xl text-white mb-10 italic font-serif">Direct Inquiry</h3>
                <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-gold-luxe outline-none transition-colors font-light" placeholder="Full Name" />
                      <div className="absolute bottom-0 left-0 w-0 h-px bg-gold-luxe transition-all duration-500 group-focus-within:w-full" />
                    </div>
                    <div className="relative group">
                      <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-gold-luxe outline-none transition-colors font-light" placeholder="Email Address" />
                      <div className="absolute bottom-0 left-0 w-0 h-px bg-gold-luxe transition-all duration-500 group-focus-within:w-full" />
                    </div>
                  </div>
                  <div className="relative group">
                    <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-gold-luxe outline-none transition-colors font-light" placeholder="Nature of Inquiry" />
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-gold-luxe transition-all duration-500 group-focus-within:w-full" />
                  </div>
                  <div className="relative group">
                    <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-gold-luxe outline-none transition-colors font-light resize-none" placeholder="Your Message" />
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-gold-luxe transition-all duration-500 group-focus-within:w-full" />
                  </div>
                  <button className="w-full bg-gold-luxe text-navy-dark py-5 font-bold uppercase tracking-[0.3em] text-xs hover:bg-white transition-all duration-500">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl font-serif font-bold tracking-[0.3em] text-white mb-2">ANTAVIOR</span>
              <span className="text-xs tracking-[0.6em] text-gold-luxe font-bold">SAMUDERA</span>
            </div>
            <div className="flex gap-12">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} className="text-[10px] uppercase tracking-widest text-white/40 hover:text-gold-luxe transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold-luxe hover:border-gold-luxe transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold-luxe hover:border-gold-luxe transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
              © 2026 PT. AntaVior Samudera. All Rights Reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-white/20 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-white/20 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Shortcut */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ y: -5 }}
        className="fixed bottom-10 right-10 z-50 bg-gold-luxe text-navy-dark p-5 rounded-full shadow-[0_0_30px_rgba(197,160,89,0.3)] flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 whitespace-nowrap font-bold text-xs uppercase tracking-widest">
          Concierge
        </span>
      </motion.a>

      {/* Navigation Shortcut (Floating Menu) */}
      <div className="fixed bottom-10 left-10 z-50 hidden lg:flex flex-col gap-3">
        {navLinks.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.href}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + idx * 0.1 }}
            className="group flex items-center gap-4"
          >
            <div className="w-10 h-10 bg-navy-dark border border-gold-luxe/30 flex items-center justify-center text-[10px] font-bold text-gold-luxe group-hover:bg-gold-luxe group-hover:text-navy-dark transition-all duration-300 shadow-xl">
              0{idx + 1}
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 bg-navy-dark/90 px-4 py-2 backdrop-blur-md border border-white/10 shadow-2xl pointer-events-none">
              {link.name}
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
