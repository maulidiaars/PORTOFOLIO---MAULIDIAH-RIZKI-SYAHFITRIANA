'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ExternalLink, ArrowUpRight, Eye, X, ChevronLeft, ChevronRight, Play, Star, Sparkles, Github, Code, Palette, Database, Zap, Cpu, Smartphone, Globe } from 'lucide-react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoSlideIndex, setAutoSlideIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Al Rahmah Tour & Travel",
      description: "Platform management tour & travel dengan architecture modern untuk pengelolaan paket perjalanan yang efisien.",
      tech: ["JavaScript", "Express.js", "MySQL", "Node.js", "CSS", "Bootstrap"],
      image: "/images/projects/project-1/cover alrahmah.png",
      screenshots: [
        "/images/projects/project-1/cover alrahmah.png",
        "/images/projects/project-1/ss1.png",
        "/images/projects/project-1/ss2.png",
        "/images/projects/project-1/ss3.png",
        "/images/projects/project-1/ss4.png",
        "/images/projects/project-1/ss5.png",
        "/images/projects/project-1/ss6.png",
        "/images/projects/project-1/ss7.png",
        "/images/projects/project-1/ss8.png",
        "/images/projects/project-1/ss9.png",
      ],
      liveUrl: "#",
      githubUrl: "#",
      accentColor: "from-purple-600 to-blue-600",
      icon: <Globe className="w-6 h-6" />,
      cardColor: "bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600",
      borderColor: "border-purple-400",
      status: "completed"
    },
    {
      id: 2,
      title: "Bappeda Malang", 
      description: "Sistem pengelolaan anggaran dengan tampilan modern dan laporan real-time yang mudah dipahami.",
      tech: ["Express.js", "MySQL", "JavaScript", "REST API", "Chart.js"],
      image: "/images/projects/project-2/cover bappeda.png",
      screenshots: [
        "/images/projects/project-2/cover bappeda.png",
        "/images/projects/project-2/ss1.png",
        "/images/projects/project-2/ss2.png",
        "/images/projects/project-2/ss3.png",
        "/images/projects/project-2/ss4.png",
        "/images/projects/project-2/ss5.png",
        "/images/projects/project-2/ss6.png",
      ],
      liveUrl: "#",
      githubUrl: "#",
      accentColor: "from-cyan-600 to-blue-600",
      icon: <Database className="w-6 h-6" />,
      cardColor: "bg-gradient-to-br from-cyan-600 to-blue-600",
      borderColor: "border-cyan-400",
      status: "completed"
    },
    {
      id: 3,
      title: "UI/UX Collection",
      description: "Koleksi design system dan prototype untuk berbagai platform yang saya buat selama eksplorasi desain.",
      tech: ["Figma", "Prototyping", "Design System", "UI/UX"],
      image: "/images/projects/project-3/cover ui.png",
      screenshots: [
        "/images/projects/project-3/cover ui.png",
        "/images/projects/project-3/ss1.png",
        "/images/projects/project-3/ss2.png",
        "/images/projects/project-3/ss3.png",
      ],
      liveUrl: "#",
      githubUrl: "#",
      accentColor: "from-pink-600 to-purple-600",
      icon: <Palette className="w-6 h-6" />,
      cardColor: "bg-gradient-to-br from-pink-600 to-purple-600",
      borderColor: "border-pink-400",
      status: "completed"
    }
  ];

  // Collect all screenshots from all projects for the auto-slider
  const allScreenshots = projects.flatMap(project => project.screenshots);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setAutoSlideIndex((prev) => (prev + 1) % allScreenshots.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [allScreenshots.length]);

  const openPreview = (projectId: number) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(0);
  };

  const closePreview = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    const project = projects.find(p => p.id === selectedProject);
    if (project) {
      setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length);
    }
  };

  const prevImage = () => {
    const project = projects.find(p => p.id === selectedProject);
    if (project) {
      setCurrentImageIndex((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
    }
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  // Auto slide untuk modal preview
  useEffect(() => {
    if (!selectedProject) return;
    
    const interval = setInterval(() => {
      const project = projects.find(p => p.id === selectedProject);
      if (project) {
        setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length);
      }
    }, 4000); // Ganti gambar setiap 4 detik di modal

    return () => clearInterval(interval);
  }, [selectedProject]);

  // Particle data untuk animasi background - SAMA DENGAN ABOUT
  const particles = [
    { icon: "💻", delay: 0, duration: 8, size: "text-6xl", x: 5, y: 10 },
    { icon: "🚀", delay: 1, duration: 9, size: "text-7xl", x: 85, y: 15 },
    { icon: "⚡", delay: 2, duration: 10, size: "text-6xl", x: 15, y: 80 },
    { icon: "🎯", delay: 3, duration: 11, size: "text-7xl", x: 75, y: 70 },
    { icon: "💡", delay: 4, duration: 12, size: "text-6xl", x: 90, y: 85 },
    { icon: "🌟", delay: 5, duration: 13, size: "text-7xl", x: 10, y: 40 },
    { icon: "🔧", delay: 6, duration: 14, size: "text-6xl", x: 45, y: 20 },
    { icon: "🎨", delay: 7, duration: 15, size: "text-7xl", x: 60, y: 90 },
    { icon: "📱", delay: 8, duration: 16, size: "text-6xl", x: 30, y: 25 },
    { icon: "🔮", delay: 9, duration: 17, size: "text-7xl", x: 80, y: 45 },
    { icon: "💫", delay: 10, duration: 18, size: "text-6xl", x: 20, y: 65 },
    { icon: "🎮", delay: 11, duration: 19, size: "text-7xl", x: 70, y: 35 }
  ];

  return (
    <section id="projects" className="min-h-screen relative py-20 bg-gradient-to-br from-white via-purple-50 to-blue-50 overflow-hidden">
      
      {/* BACKGROUND DENGAN BANYAK ICON BESAR - SAMA DENGAN ABOUT */}
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
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -60, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 5 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Floating Icons Besar - SAMA DENGAN ABOUT */}
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className={`absolute ${particle.size} text-purple-400/10`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 180, 360],
              scale: [0.8, 1.5, 0.8],
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
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* HEADER - SAMA DENGAN ABOUT */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-lg border border-purple-400/50 px-6 py-3 rounded-full mb-6 group hover:bg-white/90 transition-all duration-300 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-purple-600" />
              </motion.div>
              <span className="text-purple-800 text-sm font-semibold tracking-widest">
                PORTFOLIO PROJECTS
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="w-4 h-4 text-purple-600 fill-purple-600" />
              </motion.div>
            </motion.div>

            <motion.h2 
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Project <span className="text-purple-600">Portfolio</span>
            </motion.h2>
            
            <motion.div
              className="relative inline-block mb-6"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="w-48 h-1.5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-full"></div>
              <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-purple-400/30 rounded-full"
                animate={{ x: [-100, 100] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
            </motion.div>

            <motion.p
              className="text-xl sm:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              Koleksi <span className="text-purple-600 font-semibold">project terbaik</span> yang menggabungkan 
              teknologi modern dengan desain yang memukau
            </motion.p>
          </motion.div>

          {/* Projects Grid - DESIGN SAMA DENGAN ABOUT */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`relative ${project.cardColor} rounded-2xl p-6 border ${project.borderColor} transition-all duration-300 overflow-hidden shadow-lg h-full cursor-pointer`}
                  onClick={() => openPreview(project.id)}
                >
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center border border-white/40"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {project.icon}
                      </motion.div>
                      <div>
                        <div className={`text-xs font-bold tracking-widest px-2 py-1 rounded-full bg-white/20 text-white border border-white/30`}>
                          {project.status === 'completed' ? 'SELESAI' : 'BERJALAN'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <h3 className="text-white font-bold text-xl mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/20 rounded-lg text-xs text-white/90 border border-white/30 backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Preview Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white/20 backdrop-blur-lg border border-white/30 text-white py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white/30 transition-all duration-300"
                  >
                    <Eye className="w-4 h-4" />
                    Lihat Detail Project
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* NEW CTA SECTION WITH IMAGE SLIDER */}
          <motion.div
            className="grid lg:grid-cols-2 gap-8 items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Left Side - Small CTA */}
            <div className="space-y-6">
              <motion.div
                className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-2xl p-6 border border-purple-400 shadow-lg"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center border border-white/40"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Code className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Tertarik Berkolaborasi?
                    </h3>
                    <p className="text-white/80 text-sm">
                      Mari buat sesuatu yang luar biasa
                    </p>
                  </div>
                </div>
                
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="w-full bg-white text-purple-600 py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                Mulai Project
                <Zap className="w-4 h-4" />
              </motion.a>

              </motion.div>

              {/* Additional Info */}
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30 shadow-lg">
                <h4 className="font-bold text-gray-900 mb-3">Tech Stack Favorit</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>React.js</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span>Tailwind CSS</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span>Node.js</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image Slider */}
            <motion.div
              className="relative h-80 rounded-2xl overflow-hidden shadow-2xl border border-purple-400/30"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Auto-sliding Images */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={autoSlideIndex}
                  src={allScreenshots[autoSlideIndex]}
                  alt={`Project screenshot ${autoSlideIndex + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </AnimatePresence>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Slide Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {allScreenshots.slice(0, 6).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setAutoSlideIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === autoSlideIndex % 6 ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

              {/* Info Badge */}
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm border border-white/20">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3" />
                  <span>Project Showcase</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* PREVIEW MODAL - RESPONSIVE & FIXED HEIGHT */}
      <AnimatePresence>
        {selectedProject && selectedProjectData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            onClick={closePreview}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900 rounded-2xl w-full max-w-4xl mx-4 max-h-[95vh] overflow-hidden shadow-2xl border border-purple-500/20 relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10" />
              
              {/* Close Button */}
              <motion.button
                onClick={closePreview}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 z-50 p-2 bg-black/60 backdrop-blur-lg text-white/80 hover:text-white transition-all rounded-lg border border-purple-500/30 hover:border-purple-400/50 shadow-lg"
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Modal Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Header - Fixed Height */}
                <div className="p-4 sm:p-6 border-b border-purple-500/20 bg-gradient-to-r from-purple-900/30 to-transparent flex-shrink-0">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <motion.div
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center border border-purple-400/30 shadow-lg flex-shrink-0"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {selectedProjectData.icon}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 leading-tight line-clamp-2">
                        {selectedProjectData.title}
                      </h3>
                      <p className="text-purple-200 text-xs sm:text-sm leading-relaxed line-clamp-2">
                        {selectedProjectData.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image Carousel - Flexible Height dengan Scroll */}
                <div className="flex-1 min-h-0 p-4 sm:p-6 flex items-center justify-center bg-gradient-to-br from-gray-800/50 to-purple-900/30 relative overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex}
                        className="w-full h-full flex items-center justify-center"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <img
                          src={selectedProjectData.screenshots[currentImageIndex]}
                          alt={`Screenshot ${currentImageIndex + 1}`}
                          className="max-w-full max-h-full object-contain rounded-lg shadow-xl"
                          style={{ 
                            maxHeight: 'calc(95vh - 200px)',
                            width: 'auto',
                            height: 'auto'
                          }}
                        />
                      </motion.div>
                    </AnimatePresence>
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/60 backdrop-blur-lg text-white p-2 sm:p-3 rounded-lg hover:bg-black/80 transition-all z-20 border border-purple-500/30 hover:border-purple-400/50 shadow-lg"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/60 backdrop-blur-lg text-white p-2 sm:p-3 rounded-lg hover:bg-black/80 transition-all z-20 border border-purple-500/30 hover:border-purple-400/50 shadow-lg"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-lg text-white px-3 py-1 rounded-full text-xs border border-purple-500/30 shadow-lg">
                      {currentImageIndex + 1} / {selectedProjectData.screenshots.length}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}