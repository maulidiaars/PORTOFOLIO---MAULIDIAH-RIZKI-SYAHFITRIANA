'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Mail, ChevronDown, Sparkles, Star, Code, Database, Layout, Figma, Github, Linkedin, Instagram, Cpu, Globe, Smartphone } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  // Icon coding di sekitar foto - PASTIKAN KONSTAN
  const floatingIcons = [
    { icon: Code, color: "from-blue-400 to-cyan-400", top: '5%', left: '10%', delay: 0, rotate: 0, label: "Code" },
    { icon: Database, color: "from-green-400 to-emerald-400", top: '15%', right: '5%', delay: 0.3, rotate: 15, label: "Database" },
    { icon: Layout, color: "from-purple-400 to-pink-400", bottom: '20%', left: '8%', delay: 0.6, rotate: -10, label: "Frontend" },
    { icon: Figma, color: "from-orange-400 to-red-400", bottom: '25%', right: '10%', delay: 0.9, rotate: 5, label: "Design" },
    { icon: Github, color: "from-gray-600 to-gray-800", top: '40%', left: '2%', delay: 1.2, rotate: -5, label: "GitHub" },
    { icon: Linkedin, color: "from-blue-500 to-blue-700", top: '60%', right: '3%', delay: 1.5, rotate: 8, label: "LinkedIn" },
    { icon: Cpu, color: "from-red-400 to-pink-400", bottom: '40%', left: '15%', delay: 1.8, rotate: -15, label: "Tech" },
    { icon: Globe, color: "from-indigo-400 to-purple-400", top: '75%', left: '5%', delay: 2.1, rotate: 12, label: "Web" },
    { icon: Smartphone, color: "from-yellow-400 to-orange-400", bottom: '10%', right: '15%', delay: 2.4, rotate: -8, label: "Mobile" },
    { icon: Instagram, color: "from-pink-400 to-rose-400", top: '25%', right: '15%', delay: 2.7, rotate: 20, label: "Social" },
  ];

  // BANYAK BANGET PARTIKEL - PASTIKAN KONSTAN (HAPUS Math.random())
  const particles = [
    { id: 1, x: 10, y: 20, size: 3, duration: 10, delay: 0, color: 'rgba(255, 215, 0, 0.5)', opacity: 0.5 },
    { id: 2, x: 20, y: 40, size: 4, duration: 12, delay: 0.5, color: 'rgba(255, 105, 180, 0.5)', opacity: 0.5 },
    { id: 3, x: 30, y: 60, size: 2, duration: 15, delay: 1, color: 'rgba(135, 206, 250, 0.5)', opacity: 0.5 },
    { id: 4, x: 40, y: 80, size: 5, duration: 8, delay: 1.5, color: 'rgba(255, 255, 255, 0.5)', opacity: 0.5 },
    { id: 5, x: 50, y: 30, size: 3, duration: 14, delay: 2, color: 'rgba(218, 112, 214, 0.5)', opacity: 0.5 },
    { id: 6, x: 60, y: 50, size: 4, duration: 11, delay: 2.5, color: 'rgba(255, 215, 0, 0.5)', opacity: 0.5 },
    { id: 7, x: 70, y: 70, size: 2, duration: 9, delay: 3, color: 'rgba(255, 105, 180, 0.5)', opacity: 0.5 },
    { id: 8, x: 80, y: 90, size: 5, duration: 13, delay: 3.5, color: 'rgba(135, 206, 250, 0.5)', opacity: 0.5 },
    { id: 9, x: 90, y: 15, size: 3, duration: 16, delay: 4, color: 'rgba(255, 255, 255, 0.5)', opacity: 0.5 },
    { id: 10, x: 15, y: 85, size: 4, duration: 10, delay: 4.5, color: 'rgba(218, 112, 214, 0.5)', opacity: 0.5 },
    { id: 11, x: 25, y: 45, size: 2, duration: 12, delay: 5, color: 'rgba(255, 215, 0, 0.5)', opacity: 0.5 },
    { id: 12, x: 35, y: 65, size: 5, duration: 14, delay: 5.5, color: 'rgba(255, 105, 180, 0.5)', opacity: 0.5 },
    { id: 13, x: 45, y: 25, size: 3, duration: 8, delay: 6, color: 'rgba(135, 206, 250, 0.5)', opacity: 0.5 },
    { id: 14, x: 55, y: 55, size: 4, duration: 15, delay: 6.5, color: 'rgba(255, 255, 255, 0.5)', opacity: 0.5 },
    { id: 15, x: 65, y: 75, size: 2, duration: 11, delay: 7, color: 'rgba(218, 112, 214, 0.5)', opacity: 0.5 },
    { id: 16, x: 75, y: 35, size: 5, duration: 9, delay: 7.5, color: 'rgba(255, 215, 0, 0.5)', opacity: 0.5 },
    { id: 17, x: 85, y: 95, size: 3, duration: 13, delay: 8, color: 'rgba(255, 105, 180, 0.5)', opacity: 0.5 },
    { id: 18, x: 95, y: 10, size: 4, duration: 16, delay: 8.5, color: 'rgba(135, 206, 250, 0.5)', opacity: 0.5 },
    { id: 19, x: 5, y: 50, size: 2, duration: 10, delay: 9, color: 'rgba(255, 255, 255, 0.5)', opacity: 0.5 },
    { id: 20, x: 45, y: 5, size: 5, duration: 12, delay: 9.5, color: 'rgba(218, 112, 214, 0.5)', opacity: 0.5 },
  ];

  // PARTIKEL BESAR - PASTIKAN KONSTAN
  const bigStars = [
    { id: 1, x: 10, y: 10, size: 8, duration: 15, delay: 0 },
    { id: 2, x: 30, y: 30, size: 10, duration: 18, delay: 0.5 },
    { id: 3, x: 50, y: 50, size: 12, duration: 20, delay: 1 },
    { id: 4, x: 70, y: 70, size: 9, duration: 16, delay: 1.5 },
    { id: 5, x: 90, y: 90, size: 11, duration: 19, delay: 2 },
    { id: 6, x: 80, y: 20, size: 7, duration: 14, delay: 2.5 },
    { id: 7, x: 20, y: 80, size: 13, duration: 22, delay: 3 },
    { id: 8, x: 40, y: 60, size: 8, duration: 15, delay: 3.5 },
    { id: 9, x: 60, y: 40, size: 10, duration: 18, delay: 4 },
    { id: 10, x: 85, y: 45, size: 9, duration: 17, delay: 4.5 },
  ];

  // Jangan render sampai mounted
  if (!mounted) {
    return (
      <section id="home" className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-[#561c24] via-purple-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse" />
            <h1 className="text-4xl font-bold mb-2">Maulidiah</h1>
            <p className="text-xl">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#561c24] via-purple-900 to-blue-900 pt-20 lg:pt-16">
      
      {/* BACKGROUND SUPER DUPER GEMERLIP - TANPA Math.random() */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#561c24] via-purple-900 to-blue-900" />
        
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-pink-500/30 to-blue-600/40"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            backgroundSize: '300% 300%',
          }}
        />
        
        {/* LAPISAN PARTIKEL 1 - KONSTAN */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <motion.div
              key={`small-${particle.id}`}
              className="absolute rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
                background: particle.color,
                boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
              }}
              animate={{
                y: [0, -40, 0, 20, 0],
                x: [0, particle.x > 50 ? -15 : 15, 0, particle.x > 50 ? 10 : -10, 0],
                scale: [1, 1.8, 1, 1.4, 1],
                opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity, particle.opacity * 1.2, particle.opacity],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* LAPISAN PARTIKEL 2 - BINTANG BESAR */}
        <div className="absolute inset-0">
          {bigStars.map((star) => (
            <motion.div
              key={`big-${star.id}`}
              className="absolute"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
              }}
              animate={{
                scale: [1, 1.5, 1, 1.2, 1],
                opacity: [0.3, 0.9, 0.3, 0.6, 0.3],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut"
              }}
            >
              <div className="relative">
                <div 
                  className="absolute rounded-full"
                  style={{
                    width: star.size,
                    height: star.size,
                    background: 'rgba(255, 255, 255, 0.8)',
                    boxShadow: `0 0 ${star.size * 3}px rgba(255, 215, 0, 0.6)`,
                  }}
                />
                {star.size > 8 && (
                  <>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-4 bg-white/60" style={{ transform: 'translate(-50%, -50%) rotate(45deg)' }} />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-white/60" style={{ transform: 'translate(-50%, -50%) rotate(45deg)' }} />
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* LAPISAN PARTIKEL 3 - SPARKLES */}
        <div className="absolute inset-0">
          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute text-white/20 text-2xl"
              style={{
                left: `${i * 5}%`,
                top: `${(i * 7) % 100}%`,
              }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            >
              ✦
            </motion.div>
          ))}
        </div>

        {/* Big floating tech symbols */}
        <motion.div
          className="absolute top-1/4 left-1/4 text-9xl text-white/10 font-mono"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ 
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity },
            opacity: { duration: 8, repeat: Infinity }
          }}
        >
          {'{ }'}
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 text-9xl text-white/10 font-mono"
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ 
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity },
            opacity: { duration: 10, repeat: Infinity }
          }}
        >
          {'</>'}
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/3 text-7xl text-white/10"
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.05, 0.15, 0.05],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        >
          ⚛️
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/3 text-7xl text-white/10"
          animate={{ 
            scale: [1, 1.4, 1], 
            opacity: [0.05, 0.15, 0.05],
            rotate: [0, -10, 10, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        >
          🔷
        </motion.div>

        {/* Grid lines effect */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }} />

        {/* Garis cahaya */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,215,0,0.03) 20px, rgba(255,215,0,0.03) 40px)',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* MAIN CONTENT - SISANYA SAMA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ... text content tetap sama ... */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 xl:gap-16">
          
          {/* TEXT CONTENT */}
          <motion.div
            className="flex-1 text-center lg:text-left space-y-4 lg:space-y-6 mt-4 lg:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-amber-400/50 px-6 py-3 rounded-full mx-auto lg:mx-0 group hover:bg-white/15 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
              </motion.div>
              <span className="text-amber-100 text-sm font-semibold tracking-widest">
                FULLSTACK DEVELOPER
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight">
                MAULIDIAH
              </h1>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="w-48 h-1.5 bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500 rounded-full mx-auto lg:mx-0"></div>
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full bg-white/30 rounded-full"
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-3 lg:space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-amber-100 font-light tracking-wide">
                Fullstack Developer & <span className="font-semibold text-amber-300">Frontend Developer</span>
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                Membuat <span className="text-amber-300 font-semibold">pengalaman digital</span> yang memadukan 
                desain indah dengan teknologi terkini. Passionate dalam menciptakan 
                interface yang user-friendly dan aplikasi web yang powerful.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.a
                href="#contact"
                className="group relative bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 lg:px-12 py-4 lg:py-5 rounded-2xl font-bold text-lg lg:text-xl overflow-hidden w-auto max-w-sm mx-auto lg:mx-0 flex items-center justify-center gap-3 shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 border-2 border-amber-400/30"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative z-10 flex items-center gap-3">
                  <Mail className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span className="text-lg lg:text-xl font-bold tracking-wide">Start Project</span>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* PHOTO SECTION */}
          <motion.div
            className="flex-1 relative justify-center items-center mt-8 lg:mt-0 hidden md:flex"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              
              {/* BINGKAI FOTO */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/40 via-pink-500/40 to-purple-500/40 blur-3xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.9, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* LAPISAN KEDUA: ROTATING BORDER */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500 rounded-full" 
                     style={{ 
                       mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', 
                       WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', 
                       maskComposite: 'exclude',
                       WebkitMaskComposite: 'xor'
                     }} 
                />
              </motion.div>

              {/* LAPISAN KETIGA: ROTATING BORDER KEDUA */}
              <motion.div
                className="absolute inset-2 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/50" />
              </motion.div>

              {/* LAPISAN KEEMPAT: BORDER PUTIH */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/30"
                animate={{ 
                  scale: [1, 1.02, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* LAPISAN KELIMA: TITIK-TITIK BERKELILING */}
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-amber-300"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `rotate(${i * 30}deg) translateY(-130px)`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}

              {/* MAIN PHOTO */}
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-white/20 ring-offset-4 ring-offset-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image 
                  src="/images/projects/WhatsApp Image 2026-02-23 at 20.44.37.jpeg"
                  alt="Maulidiah"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>

              {/* FLOATING ICONS */}
              {floatingIcons.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="absolute z-20"
                    style={{
                      top: item.top,
                      left: item.left,
                      right: item.right,
                      bottom: item.bottom,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, item.rotate, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: item.delay,
                        ease: "easeInOut"
                      }}
                      className="relative group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-xl border-2 border-white/30 backdrop-blur-sm`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      {/* Tooltip */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {item.label}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <motion.button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-amber-300/90 hover:text-amber-200 cursor-pointer transition-colors duration-500 group"
          whileHover={{ y: -2 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-full bg-amber-400/30 blur-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="relative w-6 h-12 border-2 border-amber-400/70 rounded-full flex justify-center items-start pt-2 group-hover:border-amber-300 transition-all duration-500 bg-white/5 backdrop-blur-sm">
              <motion.div
                className="w-1 h-3 bg-amber-300 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
          <motion.span 
            className="text-xs font-semibold tracking-widest text-amber-300/80"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            EXPLORE
          </motion.span>
        </motion.button>
      </motion.div>
    </section>
  );
}