'use client';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Heart, Lightbulb, Rocket, Target, Star, Sparkles, Zap, Calendar, Award, TrendingUp, Users, Book, Code, Brain, School, Route, Cpu, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('education');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const journey = [
    {
      year: "2022",
      title: "Mulai Perjalanan",
      description: "Memulai petualangan programming di PENS dengan dasar-dasar pemrograman",
      icon: <Book className="w-6 h-6" />,
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
      borderColor: "border-blue-400",
      status: "completed",
      achievements: ["HTML/CSS Dasar", "JavaScript Fundamental", "Algoritma Dasar"],
      tech: ["📘 HTML", "🎨 CSS", "⚡ JS"]
    },
    {
      year: "2023", 
      title: "Menemukan Passion",
      description: "Jatuh cinta dengan Frontend Development dan UI/UX Design",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      borderColor: "border-purple-400",
      status: "completed",
      achievements: ["React.js Mastery", "Tailwind CSS", "Figma Design"],
      tech: ["⚛️ React", "🎯 Tailwind", "🎨 Figma"]
    },
    {
      year: "2024",
      title: "Eksplorasi Backend", 
      description: "Mendalami Backend Development dengan berbagai teknologi server-side",
      icon: <Code className="w-6 h-6" />,
      color: "bg-gradient-to-br from-indigo-500 to-purple-600",
      borderColor: "border-indigo-400",
      status: "completed",
      achievements: ["Express.js Framework", "RESTful API", "Manajemen Database"],
      tech: ["🚀 Express", "🔗 REST API", "🗄️ Database"]
    },
    {
      year: "2025",
      title: "Full Stack Developer",
      description: "Menyatukan frontend dan backend menjadi aplikasi full stack yang powerful",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-gradient-to-br from-cyan-500 to-blue-600",
      borderColor: "border-cyan-400",
      status: "current",
      achievements: ["Integrasi Full Stack", "Arsitektur Sistem", "Optimasi Performance"],
      tech: ["🔗 Integration", "🏗️ Architecture", "⚡ Performance"]
    }
  ];

  const whyIT = [
    {
      icon: Lightbulb,
      title: "Kreativitas Tanpa Batas",
      description: "Bisa create sesuatu dari nol cuma pake code - itu magical banget!",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      borderColor: "border-blue-400",
      features: ["Ide Jadi Nyata", "Solusi Kreatif", "Pemikiran Inovatif"]
    },
    {
      icon: Rocket,
      title: "Dunia yang Dinamis", 
      description: "Teknologi selalu berkembang, jadi tidak pernah bosan untuk belajar",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      borderColor: "border-purple-400",
      features: ["Belajar Terus", "Teknologi Baru", "Perkembangan Cepat"]
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Setiap bug yang diselesaikan rasanya seperti menang game",
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      borderColor: "border-indigo-400",
      features: ["Berpikir Logis", "Skill Debugging", "Analisis Masalah"]
    },
    {
      icon: Heart,
      title: "Dampak ke Orang Lain",
      description: "Code yang kita tulis bisa bermanfaat untuk banyak orang",
      color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      borderColor: "border-cyan-400",
      features: ["User Experience", "Dampak Nyata", "Nilai untuk Komunitas"]
    }
  ];

  // Particle data untuk animasi
  const particles = [
    { icon: "💻", delay: 0, duration: 8, size: "text-4xl sm:text-6xl", x: 5, y: 10 },
    { icon: "🚀", delay: 1, duration: 9, size: "text-5xl sm:text-7xl", x: 85, y: 15 },
    { icon: "⚡", delay: 2, duration: 10, size: "text-4xl sm:text-6xl", x: 15, y: 80 },
    { icon: "🎯", delay: 3, duration: 11, size: "text-5xl sm:text-7xl", x: 75, y: 70 },
    { icon: "💡", delay: 4, duration: 12, size: "text-4xl sm:text-6xl", x: 90, y: 85 },
    { icon: "🌟", delay: 5, duration: 13, size: "text-5xl sm:text-7xl", x: 10, y: 40 },
    { icon: "🔧", delay: 6, duration: 14, size: "text-4xl sm:text-6xl", x: 45, y: 20 },
    { icon: "🎨", delay: 7, duration: 15, size: "text-5xl sm:text-7xl", x: 60, y: 90 },
    { icon: "📱", delay: 8, duration: 16, size: "text-4xl sm:text-6xl", x: 30, y: 25 },
    { icon: "🔮", delay: 9, duration: 17, size: "text-5xl sm:text-7xl", x: 80, y: 45 },
    { icon: "💫", delay: 10, duration: 18, size: "text-4xl sm:text-6xl", x: 20, y: 65 },
    { icon: "🎮", delay: 11, duration: 19, size: "text-5xl sm:text-7xl", x: 70, y: 35 }
  ];

  const tabs = [
    { 
      id: 'education', 
      label: 'Pendidikan', 
      icon: <School className="w-4 h-4 sm:w-5 sm:h-5" /> 
    },
    { 
      id: 'journey', 
      label: 'Perjalanan', 
      icon: <Route className="w-4 h-4 sm:w-5 sm:h-5" /> 
    },
    { 
      id: 'why', 
      label: 'Passion IT', 
      icon: <Cpu className="w-4 h-4 sm:w-5 sm:h-5" /> 
    }
  ];

  return (
    <section id="about" className="min-h-screen relative py-16 sm:py-20 bg-gradient-to-br from-white via-purple-50 to-blue-50 overflow-hidden">
      
      {/* BACKGROUND ANIMATIONS */}
      <div className="absolute inset-0">
        {/* Main Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-blue-50" />
        
        {/* Noise Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />

        {/* Animated Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-purple-400/5 via-pink-400/3 to-blue-400/5"
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
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Floating Icons */}
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className={`absolute ${particle.size} text-purple-400/10`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          >
            {particle.icon}
          </motion.div>
        ))}

        {/* Big Blob Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-purple-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-lg border border-purple-400/50 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 group hover:bg-white/90 transition-all duration-300 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
            </motion.div>
            <span className="text-purple-800 text-xs sm:text-sm font-semibold tracking-widest">
              PERJALANAN DEVELOPER SAYA
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 fill-purple-600" />
            </motion.div>
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Tentang <span className="text-purple-600">Saya</span>
          </motion.h2>
          
          <motion.div
            className="relative inline-block mb-4 sm:mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="w-32 sm:w-48 h-1 sm:h-1.5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-full"></div>
            <motion.div 
              className="absolute top-0 left-0 w-full h-full bg-purple-400/30 rounded-full"
              animate={{ x: [-100, 100] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-light px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Membuat <span className="text-purple-600 font-semibold">pengalaman digital</span> yang memadukan 
            desain indah dengan teknologi terkini
          </motion.p>
        </motion.div>

        {/* RESPONSIVE TAB NAVIGATION - IMPROVED VISUAL */}
        <motion.div
          className="flex justify-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Desktop Tabs */}
          <div className="hidden md:block bg-white/80 backdrop-blur-lg rounded-2xl p-1 sm:p-2 border border-purple-400/30 shadow-lg">
            <div className="flex gap-1 sm:gap-2">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-2xl shadow-purple-500/25' 
                      : 'text-gray-700 hover:text-purple-600 hover:bg-white/50 hover:shadow-lg'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={
                      activeTab === tab.id ? 
                      { rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] } : 
                      { rotate: 0, scale: 1 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    {tab.icon}
                  </motion.div>
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile Tabs - IMPROVED VISUAL */}
          <div className="md:hidden w-full max-w-sm">
            {/* Mobile Menu Button - LEBIH CLEAR KALO BISA DIKLIK */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-2xl p-4 border border-purple-400/50 shadow-lg flex items-center justify-between group transition-all duration-300"
              whileTap={{ scale: 0.95 }}
              whileHover={{ y: -2, shadow: "0 10px 25px -5px rgba(139, 92, 246, 0.4)" }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ 
                    scale: isMobileMenuOpen ? [1, 1.2, 1] : 1,
                    rotate: isMobileMenuOpen ? [0, 180, 0] : 0 
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center border border-white/30"
                >
                  {tabs.find(tab => tab.id === activeTab)?.icon}
                </motion.div>
                <div className="text-left">
                  <div className="text-xs text-white/80 font-medium">Pilih Section:</div>
                  <div className="font-bold text-white text-base">
                    {tabs.find(tab => tab.id === activeTab)?.label}
                  </div>
                </div>
              </div>
              
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0, y: isMobileMenuOpen ? 2 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-1"
              >
                <ChevronDown className="w-5 h-5 text-white" />
                <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
              </motion.div>
            </motion.button>

            {/* Mobile Dropdown Menu - IMPROVED VISUAL */}
            <motion.div
              className="mt-2 bg-white/90 backdrop-blur-lg rounded-2xl border border-purple-400/30 shadow-xl overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0,
                height: isMobileMenuOpen ? 'auto' : 0
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full px-4 py-4 flex items-center gap-3 transition-all duration-300 border-b border-purple-400/20 last:border-b-0 group ${
                    activeTab === tab.id 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-inner' 
                      : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      activeTab === tab.id 
                        ? 'bg-white/20 text-white' 
                        : 'bg-purple-100 text-purple-600 group-hover:bg-purple-200'
                    }`}
                  >
                    {tab.icon}
                  </motion.div>
                  
                  <div className="flex-1 text-left">
                    <div className={`font-bold text-sm ${
                      activeTab === tab.id ? 'text-white' : 'text-gray-800'
                    }`}>
                      {tab.label}
                    </div>
                    <div className={`text-xs ${
                      activeTab === tab.id ? 'text-white/80' : 'text-gray-500'
                    }`}>
                      {tab.id === 'education' && 'Lihat pendidikan formal'}
                      {tab.id === 'journey' && 'Jelajahi perjalanan coding'}
                      {tab.id === 'why' && 'Temukan passion di IT'}
                    </div>
                  </div>

                  {activeTab === tab.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-white rounded-full"
                    />
                  )}
                </motion.button>
              ))}
              
              {/* Footer hint */}
              <div className="px-4 py-3 bg-purple-50 border-t border-purple-400/20">
                <div className="text-xs text-purple-600 text-center font-medium">
                  💡 Pilih section untuk melihat detail
                </div>
              </div>
            </motion.div>

            {/* Visual indicator ketika dropdown terbuka */}
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 -z-10 bg-purple-200/20 blur-xl rounded-full"
              />
            )}
          </div>
        </motion.div>

        {/* CONTENT AREA */}
        <div className="max-w-6xl mx-auto">
          
          {/* EDUCATION SECTION */}
          {activeTab === 'education' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <motion.div className="relative group">
                <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-purple-400 group-hover:border-purple-300 transition-all duration-500 overflow-hidden shadow-2xl">
                  
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/20 rounded-2xl flex items-center justify-center border border-white/30 group-hover:border-white/50 transition-colors flex-shrink-0 shadow-lg mx-auto sm:mx-0"
                      >
                        <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                      </motion.div>
                      
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">Pendidikan Formal</h3>
                        <p className="text-white/90 text-base sm:text-lg lg:text-xl">Foundation yang membangun passion programming saya</p>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                      <motion.div className="space-y-4 sm:space-y-6">
                        <div className="bg-white/20 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/30 hover:border-white/50 transition-all duration-300 group shadow-lg">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/30 rounded-xl flex items-center justify-center border border-white/40 shadow-lg mx-auto sm:mx-0">
                              <Book className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div className="text-center sm:text-left">
                              <div className="text-white font-bold text-xl sm:text-2xl">D3 Teknik Informatika</div>
                              <div className="text-white/90 text-base sm:text-lg">Politeknik Elektronika Negeri Surabaya</div>
                            </div>
                          </div>
                          <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-white/90 text-sm bg-white/20 rounded-lg p-3 sm:p-4 border border-white/30">
                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            <span className="text-base sm:text-lg">2022 - 2025</span>
                          </div>
                        </div>

                        <motion.div
                          className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-400 hover:border-blue-300 transition-all duration-300 group shadow-lg"
                          whileHover={{ x: 5 }}
                        >
                          <div className="flex items-center gap-3 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/30 rounded-xl flex items-center justify-center border border-white/40 shadow-lg flex-shrink-0">
                              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            <div className="text-white">
                              <div className="font-bold text-white text-lg sm:text-xl">Lokasi Kampus</div>
                              <div className="text-sm sm:text-base lg:text-lg">Jl. Raya ITS, Sukolilo, Surabaya</div>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>

                      {/* PHILOSOPHY CARD */}
                      <motion.div
                        className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-400 shadow-lg relative overflow-hidden group"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-xl sm:text-2xl">💡</div>
                          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-lg sm:text-xl">🚀</div>
                        </div>
                        
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/30 rounded-xl flex items-center justify-center border border-white/40">
                              <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            <h4 className="text-white font-bold text-lg sm:text-xl">Filosofi Belajar</h4>
                          </div>
                          
                          <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                            "Setiap baris code adalah cerita, setiap bug adalah pembelajaran. 
                            <span className="text-white font-semibold"> Pendidikan bukan hanya tentang teori</span>, 
                            tapi tentang bagaimana kita menyelesaikan masalah nyata dengan kreativitas dan logika."
                          </p>
                          
                          <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
                            {["Problem Solving", "Berpikir Kreatif", "Belajar Terus", "Dampak Nyata"].map((item, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full flex-shrink-0"></div>
                                <span className="text-white/80 text-xs sm:text-sm">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* JOURNEY SECTION */}
          {activeTab === 'journey' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {journey.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                    className="group"
                  >
                    <motion.div
                      className={`relative ${item.color} rounded-xl sm:rounded-2xl p-4 sm:p-6 border ${item.borderColor} transition-all duration-300 overflow-hidden shadow-lg h-full`}
                      whileHover={{ y: -3 }}
                    >
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <motion.div
                            className="w-8 h-8 sm:w-10 sm:h-10 bg-white/30 rounded-lg flex items-center justify-center border border-white/40"
                            whileHover={{ scale: 1.1 }}
                          >
                            {item.icon}
                          </motion.div>
                          <div>
                            <div className="text-white font-black text-xl sm:text-2xl">{item.year}</div>
                            <div className={`text-xs font-bold tracking-widest px-2 py-1 rounded-full ${
                              item.status === 'current' ? 'bg-cyan-400 text-white' :
                              item.status === 'completed' ? 'bg-green-400 text-white' : 'bg-blue-400 text-white'
                            }`}>
                              {item.status === 'current' ? 'SEDANG BERJALAN' : 'SELESAI'}
                            </div>
                          </div>
                        </div>
                      </div>

                      <h4 className="text-white font-bold text-base sm:text-lg mb-2 sm:mb-3">{item.title}</h4>
                      <p className="text-white/90 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{item.description}</p>
                      
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
                        {item.tech.map((tech, i) => (
                          <span key={i} className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white/20 rounded text-xs text-white/90 border border-white/30">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center gap-1 sm:gap-2 text-xs text-white/80">
                            <Award className="w-3 h-3 text-white flex-shrink-0" />
                            <span className="text-xs">{achievement}</span>
                          </div>
                        ))}
                      </div>

                      {item.status === 'current' && (
                        <motion.div
                          className="mt-3 sm:mt-4 w-full bg-white/30 rounded-full h-1 overflow-hidden"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                        >
                          <motion.div
                            className="h-full bg-white rounded-full"
                            animate={{ width: ['0%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-400 text-center shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  <h4 className="text-lg sm:text-xl font-bold text-white">Mindset Pertumbuhan</h4>
                </div>
                <p className="text-white/90 leading-relaxed max-w-2xl mx-auto text-xs sm:text-sm">
                  "Dari fundamental sampai konsep advanced - setiap stage mengajarkan 
                  <span className="text-white font-semibold"> adaptabilitas dan ketahanan</span>. 
                  Teknologi berubah, tapi passion untuk belajar tetap konstan."
                </p>
              </motion.div>
            </motion.div>
          )}

          {/* WHY IT SECTION */}
          {activeTab === 'why' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-purple-400 mb-6 sm:mb-8 shadow-2xl">
                <div className="text-center mb-6 sm:mb-8">
                  <motion.div
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-white/30 rounded-2xl flex items-center justify-center border border-white/40 shadow-lg mx-auto mb-3 sm:mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                    Kenapa Saya Memilih IT
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  {whyIT.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className={`${item.color} rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border ${item.borderColor} transition-all duration-300 group shadow-lg`}
                    >
                      <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/30 rounded-xl flex items-center justify-center border border-white/40 group-hover:border-white/60 transition-colors flex-shrink-0 shadow-lg"
                        >
                          <item.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white text-base sm:text-lg mb-1 sm:mb-2">
                            {item.title}
                          </h4>
                          <p className="text-white/90 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">{item.description}</p>
                          
                          <div className="space-y-1">
                            {item.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-1 sm:gap-2 text-xs text-white/80">
                                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full flex-shrink-0"></div>
                                <span className="text-xs sm:text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-400 text-center shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Keyakinan Utama</h4>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
                  "Code lebih dari sekedar syntax - itu adalah bahasa untuk 
                  <span className="text-white font-semibold"> mencipta, berinovasi, dan menginspirasi</span>. 
                  Itulah keindahan teknologi."
                </p>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}