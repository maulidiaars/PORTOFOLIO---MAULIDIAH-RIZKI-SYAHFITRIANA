'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Home, User, Code, Briefcase, Clock, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    // Close mobile menu dulu
    setIsMobileMenuOpen(false);
    
    // Kasih delay sebentar biar mobile menu benar-benar tertutup dulu
    setTimeout(() => {
      const sectionId = href.replace('#', '');
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Hitung posisi yang tepat
        const elementTop = element.offsetTop;
        const offset = 80; // Sesuaikan dengan tinggi navbar
        
        window.scrollTo({
          top: elementTop - offset,
          behavior: 'smooth'
        });
        
        // Force update active section setelah scroll
        setTimeout(() => {
          setActiveSection(sectionId);
        }, 600);
      }
    }, 100);
  };

  // Alternative method yang lebih reliable
  const scrollToSectionAlternative = (href: string) => {
    setIsMobileMenuOpen(false);
    
    setTimeout(() => {
      const sectionId = href.replace('#', '');
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Method yang lebih simple dan reliable
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL hash (optional, tapi bisa bantu)
        window.history.pushState(null, '', href);
      }
    }, 150);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gradient-to-r from-pink-500/95 via-purple-500/95 to-blue-500/95 backdrop-blur-xl shadow-2xl shadow-purple-500/20 border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo dengan Subtitle */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg border border-white/20">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white drop-shadow-lg">
                  Maulidiah
                </span>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-1 h-1 bg-yellow-400 rounded-full"
                />
              </div>
              <span className="text-xs text-white/70 font-medium bg-white/10 px-2 py-1 rounded-full mt-1 backdrop-blur-sm">
                Fullsatck / Frontend Developer
              </span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 bg-white/10 backdrop-blur-lg rounded-2xl p-1 border border-white/20">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSectionAlternative(item.href)}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    isActive 
                      ? 'bg-white text-purple-600 shadow-lg' 
                      : 'text-white/80 hover:text-white hover:bg-white/20'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-white hover:bg-white/20' 
                : 'text-white hover:bg-white/10 backdrop-blur-sm'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden overflow-hidden rounded-2xl mt-2 mb-4 shadow-2xl ${
                isScrolled 
                  ? 'bg-white/95 backdrop-blur-xl' 
                  : 'bg-white/90 backdrop-blur-xl'
              }`}
            >
              <div className="flex flex-col py-2">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSectionAlternative(item.href)}
                      className={`flex items-center gap-3 px-4 py-3 text-left font-medium transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' 
                          : 'text-gray-700 hover:bg-pink-50'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.name}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;