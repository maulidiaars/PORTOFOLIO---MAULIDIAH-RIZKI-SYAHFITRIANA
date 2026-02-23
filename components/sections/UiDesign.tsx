'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Palette, Sparkles, Star, ChevronLeft, ChevronRight, Figma, Smartphone, Monitor, Tablet } from 'lucide-react';

export default function UiDesign() {
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // Default desktop

  useEffect(() => {
    setMounted(true);
  }, []);

  const designs = [
    {
      id: 1,
      title: "Website Dashboard",
      category: "Web Design",
      image: "/images/projects/project-3/cover ui.png",
    },
    {
      id: 2,
      title: "Food App Details",
      category: "Mobile App", 
      image: "/images/projects/project-3/ss2.png",
    },
    {
      id: 3,
      title: "Travel App Details",
      category: "Mobile App",
      image: "/images/projects/project-3/ss3.png",
    },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        if (window.innerWidth < 640) setSlidesToShow(1);
        else if (window.innerWidth < 1024) setSlidesToShow(2);
        else setSlidesToShow(3);
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + slidesToShow) % designs.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [designs.length, slidesToShow, mounted]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + slidesToShow) % designs.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - slidesToShow + designs.length) % designs.length);
  };

  const getSlideWidth = () => {
    if (slidesToShow === 1) return 'w-full';
    if (slidesToShow === 2) return 'w-1/2';
    return 'w-1/3';
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    img.style.display = 'none';
    const parent = img.parentElement;
    if (parent && !parent.querySelector('.fallback-ready')) {
      const fallbackDiv = document.createElement('div');
      fallbackDiv.className = 'fallback-ready w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center';
      const contentDiv = document.createElement('div');
      contentDiv.className = 'text-center p-4';
      contentDiv.innerHTML = `
        <span class="text-4xl mb-2 block">🎨</span>
        <p class="text-white text-sm font-semibold">${img.alt || 'Design'}</p>
        <p class="text-white/70 text-xs">UI Design</p>
      `;
      fallbackDiv.appendChild(contentDiv);
      parent.appendChild(fallbackDiv);
    }
  };

  // Jangan render sampai mounted
  if (!mounted) {
    return (
      <section id="ui-design" className="min-h-screen relative py-16 bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-purple-700 animate-pulse" />
          <h2 className="text-3xl text-white">Loading UI Designs...</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="ui-design" className="min-h-screen relative py-16 bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900 overflow-hidden">
      
      {/* BACKGROUND - TANPA Math.random() */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-pink-800/90 to-blue-900/90" />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-500/20 to-blue-600/30"
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{ backgroundSize: '200% 200%' }}
        />
        
        {/* Floating Icons - TANPA RANDOM, PAKAI ARRAY KONSTAN */}
        {[1,2,3,4,5,6,7,8,9,10].map((i) => (
          <motion.div
            key={i}
            className="absolute text-2xl text-white/5"
            style={{ 
              left: `${(i * 10) % 100}%`, 
              top: `${(i * 15) % 100}%` 
            }}
            animate={{ 
              y: [0, -30, 0], 
              rotate: [0, 360], 
              scale: [1, 1.2, 1] 
            }}
            transition={{ 
              duration: 10 + (i % 10), 
              repeat: Infinity, 
              delay: i * 0.5 
            }}
          >
            {['🎨', '🖌️', '✏️', '📱', '💻', '🎯', '✨', '🌈'][i % 8]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div ref={ref} className="max-w-6xl mx-auto">
          
          {/* HEADER */}
          <motion.div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 px-6 py-3 rounded-full mb-4">
              <Figma className="w-4 h-4 text-pink-300" />
              <span className="text-white text-sm font-semibold">UI/UX DESIGN</span>
              <Palette className="w-4 h-4 text-blue-300" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2">
              UI/UX <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300">Design</span>
            </h2>
            
            <p className="text-base text-white/80 max-w-2xl mx-auto">
              Eksplorasi desain kreatif untuk berbagai platform
            </p>
          </motion.div>

          {/* CAROUSEL */}
          <div className="relative px-8 sm:px-10">
            <button 
              onClick={prevSlide} 
              className="absolute -left-2 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/30"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button 
              onClick={nextSlide} 
              className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/30"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="overflow-hidden">
              <motion.div
                className="flex gap-4"
                animate={{ x: `-${currentIndex * (100 / slidesToShow)}%` }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {[...designs, ...designs].map((design, index) => (
                  <div key={`${design.id}-${index}`} className={`flex-shrink-0 ${getSlideWidth()}`}>
                    <div className="relative rounded-xl overflow-hidden shadow-xl bg-gray-900">
                      <div className="relative w-full aspect-video">
                        <img 
                          src={design.image}
                          alt={design.title}
                          className="w-full h-full object-cover"
                          onError={handleImageError}
                        />
                      </div>
                      <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                        {design.category}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* DOTS INDICATOR */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: Math.ceil(designs.length / slidesToShow) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > Math.floor(currentIndex / slidesToShow) ? 1 : -1);
                    setCurrentIndex(idx * slidesToShow);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    idx === Math.floor(currentIndex / slidesToShow) 
                      ? 'w-6 bg-white' 
                      : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* TECH STACK BADGES */}
          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-3 p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 mx-4">
              <div className="flex items-center gap-2 text-white bg-white/10 px-3 py-2 rounded-lg">
                <Figma className="w-4 h-4" />
                <span className="text-sm">Figma</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-white/10 px-3 py-2 rounded-lg">
                <Smartphone className="w-4 h-4" />
                <span className="text-sm">Mobile</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-white/10 px-3 py-2 rounded-lg">
                <Monitor className="w-4 h-4" />
                <span className="text-sm">Desktop</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-white/10 px-3 py-2 rounded-lg">
                <Tablet className="w-4 h-4" />
                <span className="text-sm">Tablet</span>
              </div>
            </div>
            <p className="text-white/50 text-xs mt-4">
              *Desain eksplorasi pribadi, bukan project mitra
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}