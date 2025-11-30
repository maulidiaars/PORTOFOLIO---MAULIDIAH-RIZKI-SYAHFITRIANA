// components/Hero.tsx - VERSI FINAL GEMUK & FUNGSIONAL
'use client';
import { motion } from 'framer-motion';
import { Mail, ChevronDown, Sparkles, Star } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const floatingElements = [
    { icon: '⚛️', top: '10%', left: '5%', delay: 0, size: 'text-2xl' },
    { icon: '▲', top: '20%', right: '5%', delay: 0.3, size: 'text-2xl' },
    { icon: '📘', top: '55%', left: '8%', delay: 0.6, size: 'text-3xl' },
    { icon: '💨', bottom: '25%', right: '8%', delay: 0.9, size: 'text-2xl' },
    { icon: '🎨', top: '35%', right: '3%', delay: 1.2, size: 'text-2xl' },
    { icon: '🚀', bottom: '35%', left: '4%', delay: 1.5, size: 'text-3xl' },
  ];

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-950 via-purple-900 to-blue-900 pt-20 lg:pt-16">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/15 to-blue-600/20"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            backgroundSize: '200% 200%',
          }}
        />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 xl:gap-16">
          
          {/* TEXT CONTENT */}
          <motion.div
            className="flex-1 text-center lg:text-left space-y-4 lg:space-y-6 mt-4 lg:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            {/* BADGE */}
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

            {/* NAME */}
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

            {/* TITLE & DESCRIPTION */}
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

            {/* BUTTONS - VERSI GEMUK & TEBAL */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              {/* START PROJECT BUTTON - GEMUK TAPI TIDAK FULL WIDTH */}
              <motion.a
                href="#contact"
                className="group relative bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 lg:px-12 py-4 lg:py-5 rounded-2xl font-bold text-lg lg:text-xl overflow-hidden w-auto max-w-sm mx-auto lg:mx-0 flex items-center justify-center gap-3 shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 border-2 border-amber-400/30"
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  borderColor: 'rgba(245, 158, 11, 0.6)'
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  height: '60px' // TINGGI FIXED BIAR GEMUK
                }}
              >
                {/* Main Content */}
                <div className="relative z-10 flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Mail className="w-5 h-5 lg:w-6 lg:h-6" />
                  </motion.div>
                  <span className="text-lg lg:text-xl font-bold tracking-wide">Start Project</span>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                  <div className="absolute inset-[3px] rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600"></div>
                </div>

                {/* Sparkle Effects */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{ 
                    boxShadow: [
                      "0 0 25px rgba(245, 158, 11, 0.4)",
                      "0 0 50px rgba(245, 158, 11, 0.8)", 
                      "0 0 25px rgba(245, 158, 11, 0.4)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: '-10px',
                      }}
                      animate={{
                        y: [0, 80, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* PHOTO SECTION - HIDDEN DI MOBILE, TAMPIL DI TABLET & DESKTOP */}
          <motion.div
            className="flex-1 relative justify-center items-center mt-8 lg:mt-0 hidden md:flex"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              
              {/* OUTER GLOW EFFECT */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/20 via-pink-500/20 to-purple-500/20 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* MAIN PHOTO CONTAINER */}
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 lg:border-8 border-white/20 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* GRADIENT BACKGROUND */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-pink-500 to-purple-600"></div>
                
                {/* VECTOR-STYLE ANIMATED PROFILE */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* FACE CONTOUR */}
                  <motion.div
                    className="w-28 h-32 sm:w-32 sm:h-36 lg:w-36 lg:h-40 xl:w-40 xl:h-44 bg-white/10 rounded-full absolute"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* HAIR */}
                  <motion.div
                    className="w-32 h-36 sm:w-36 sm:h-40 lg:w-40 lg:h-44 xl:w-44 xl:h-48 bg-amber-900/80 rounded-full absolute -top-4"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  
                  {/* EYES */}
                  <div className="flex gap-6 sm:gap-8 lg:gap-10 absolute top-16 sm:top-20 lg:top-24 xl:top-28">
                    {[...Array(2)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-4 sm:w-4 sm:h-6 lg:w-5 lg:h-8 bg-blue-900 rounded-full"
                        animate={{
                          scaleY: [1, 0.3, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      >
                        <div className="w-1.5 h-2 sm:w-2 sm:h-3 lg:w-2.5 lg:h-4 bg-white rounded-full ml-0.5 mt-0.5"></div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* SMILE */}
                  <motion.div
                    className="w-12 h-3 sm:w-14 sm:h-4 lg:w-16 lg:h-5 bg-pink-300 rounded-full absolute bottom-12 sm:bottom-16 lg:bottom-20 xl:bottom-24"
                    animate={{
                      scaleX: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* DECORATIVE ELEMENTS */}
                  <motion.div
                    className="absolute -top-2 -right-2 text-2xl"
                    animate={{
                      rotate: 360,
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    ✨
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-2 -left-2 text-2xl"
                    animate={{
                      rotate: -360,
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    🌟
                  </motion.div>
                </div>

                {/* FLOATING PARTICLES AROUND PHOTO */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* FLOATING TECH ICONS */}
              {floatingElements.map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.size} cursor-pointer z-20`}
                  style={{
                    top: item.top,
                    left: item.left,
                    right: item.right,
                    bottom: item.bottom,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.2 }}
                  whileHover={{ scale: 1.3, rotate: 15 }}
                >
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: item.delay,
                      ease: "easeInOut"
                    }}
                    className="text-amber-300/90 hover:text-amber-200 transition-colors duration-300 drop-shadow-lg"
                  >
                    {item.icon}
                  </motion.div>
                </motion.div>
              ))}

              {/* ROTATING CIRCLE ELEMENTS */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-amber-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div
                className="absolute inset-4 rounded-full border border-purple-400/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR - HIDDEN DI MOBILE, TAMPIL DI TABLET & DESKTOP */}
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
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            {/* Scroll Bar Container */}
            <div className="w-6 h-12 border-2 border-amber-400/70 rounded-full flex justify-center items-start pt-2 group-hover:border-amber-300 transition-all duration-500 bg-white/5 backdrop-blur-sm">
              <motion.div
                className="w-1 h-3 bg-amber-300 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            
            {/* Pulsing Glow Effect */}
            <motion.div
              className="absolute inset-0 border-2 border-amber-300 rounded-full opacity-0 group-hover:opacity-100"
              animate={{ scale: [1, 1.4, 1], opacity: [0, 0.6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          {/* Text dengan alignment yang tepat */}
          <div className="text-center space-y-1">
            <motion.span 
              className="text-xs font-semibold tracking-widest block group-hover:text-amber-200 text-amber-300/80"
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              EXPLORE
            </motion.span>
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={12} className="mx-auto group-hover:translate-y-1 transition-transform duration-500 text-amber-300/70" />
            </motion.div>
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
}