'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Award, Sparkles, Star, Calendar, Building, ExternalLink, Download, ChevronRight, Medal, Trophy, BadgeCheck, ScrollText, FileText, CheckCircle, Clock, X, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';

export default function Certificates() {
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const certificates = [
    {
      id: 1,
      title: "Sertifikasi Kompetensi Pengembang Web",
      organization: "Lembaga Sertifikasi Profesi PENS",
      shortOrg: "LSP PENS",
      date: "November 2024",
      expiry: "November 2024",
      score: "Kompeten",
      description: "Uji kompetensi pengembangan web tingkat nasional. Meliputi perancangan antarmuka, pengkodean, pengujian, dan pemeliharaan situs web sesuai standar industri.",
      color: "from-blue-600 to-indigo-600",
      lightColor: "from-blue-400 to-indigo-400",
      icon: "💻",
      bgPattern: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-indigo-50 to-white",
      badge: "Kompeten",
      issuer: "BNSP - LSP PENS",
      images: [
        "/images/projects/WhatsApp Image 2026-02-04 at 14.54.53.jpeg",
      ]
    },
    {
      id: 2,
      title: "Tes Kemahiran Bahasa Inggris PENS",
      organization: "Pusat Bahasa dan Budaya PENS",
      shortOrg: "PLCC PENS",
      date: "Maret 2025",
      expiry: "Maret 2027",
      score: "450",
      description: "Tes kemahiran bahasa Inggris setara TOEFL yang mengukur kemampuan listening, structure, dan reading comprehension. Berlaku untuk persyaratan akademik dan profesional.",
      color: "from-emerald-600 to-teal-600",
      lightColor: "from-emerald-400 to-teal-400",
      icon: "📜",
      bgPattern: "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-50 via-teal-50 to-white",
      badge: "Skor 450",
      issuer: "PENS Language Center",
      images: [
        "/images/projects/WhatsApp Image 2026-02-04 at 14.54.54.jpeg"
      ]
    }
  ];

  // ===== BACKGROUND SUPER DUPER RAME - TANPA Math.random() =====
  // Floating icons - PAKAI ARRAY KONSTAN
  const floatingIcons = [
    { icon: "⭐", size: "text-3xl", top: "2%", left: "1%", delay: 0, duration: 8 },
    { icon: "✨", size: "text-4xl", top: "8%", right: "3%", delay: 0.3, duration: 9 },
    { icon: "💫", size: "text-5xl", bottom: "5%", left: "2%", delay: 0.6, duration: 10 },
    { icon: "⚡", size: "text-3xl", top: "15%", right: "10%", delay: 0.9, duration: 11 },
    { icon: "🎯", size: "text-4xl", top: "25%", left: "8%", delay: 1.2, duration: 12 },
    { icon: "🌟", size: "text-5xl", bottom: "20%", right: "5%", delay: 1.5, duration: 13 },
    { icon: "💎", size: "text-3xl", top: "40%", left: "12%", delay: 1.8, duration: 14 },
    { icon: "🚀", size: "text-4xl", top: "55%", right: "8%", delay: 2.1, duration: 15 },
    { icon: "🎨", size: "text-5xl", bottom: "35%", left: "5%", delay: 2.4, duration: 16 },
    { icon: "🌈", size: "text-4xl", top: "70%", right: "15%", delay: 2.7, duration: 17 },
    { icon: "🔥", size: "text-3xl", bottom: "50%", left: "15%", delay: 3.0, duration: 18 },
    { icon: "💧", size: "text-4xl", top: "80%", right: "2%", delay: 3.3, duration: 19 },
    { icon: "🌿", size: "text-5xl", bottom: "70%", left: "10%", delay: 3.6, duration: 20 },
    { icon: "🌀", size: "text-4xl", top: "90%", right: "12%", delay: 3.9, duration: 21 },
    { icon: "🎵", size: "text-3xl", bottom: "85%", left: "20%", delay: 4.2, duration: 22 },
    { icon: "💡", size: "text-5xl", top: "45%", left: "20%", delay: 4.5, duration: 23 },
    { icon: "🔮", size: "text-4xl", bottom: "40%", right: "20%", delay: 4.8, duration: 24 },
    { icon: "📚", size: "text-3xl", top: "60%", left: "3%", delay: 5.1, duration: 25 },
    { icon: "🎪", size: "text-5xl", bottom: "60%", right: "18%", delay: 5.4, duration: 26 },
    { icon: "🌊", size: "text-4xl", top: "10%", left: "18%", delay: 5.7, duration: 27 },
    { icon: "🍕", size: "text-3xl", bottom: "15%", left: "25%", delay: 6.0, duration: 28 },
    { icon: "🎮", size: "text-5xl", top: "85%", left: "15%", delay: 6.3, duration: 29 },
    { icon: "🎲", size: "text-4xl", bottom: "75%", right: "25%", delay: 6.6, duration: 30 },
    { icon: "🎸", size: "text-3xl", top: "35%", right: "22%", delay: 6.9, duration: 31 },
    { icon: "🌸", size: "text-4xl", bottom: "90%", left: "30%", delay: 7.2, duration: 32 },
    { icon: "🍃", size: "text-5xl", top: "95%", right: "28%", delay: 7.5, duration: 33 },
    { icon: "🌙", size: "text-3xl", bottom: "10%", right: "30%", delay: 7.8, duration: 34 },
    { icon: "☀️", size: "text-4xl", top: "20%", left: "28%", delay: 8.1, duration: 35 },
    { icon: "⛄", size: "text-5xl", bottom: "45%", left: "22%", delay: 8.4, duration: 36 },
    { icon: "🎈", size: "text-3xl", top: "75%", left: "25%", delay: 8.7, duration: 37 },
    { icon: "🎉", size: "text-4xl", bottom: "30%", right: "12%", delay: 9.0, duration: 38 },
    { icon: "🎊", size: "text-5xl", top: "50%", right: "25%", delay: 9.3, duration: 39 },
  ];

  // Particles - TANPA Math.random(), PAKAI LOOP INDEX
  const particles = [];
  for (let i = 1; i <= 70; i++) {
    particles.push({
      id: i,
      x: (i * 1.4) % 100,
      y: (i * 1.7) % 100,
      size: (i % 8) + 2,
      duration: (i % 25) + 15,
      delay: (i % 5) * 0.1,
      opacity: 0.3,
      color: i % 5 === 0 ? 'rgba(255, 215, 0, 0.3)' :
             i % 5 === 1 ? 'rgba(255, 105, 180, 0.3)' :
             i % 5 === 2 ? 'rgba(135, 206, 250, 0.3)' :
             i % 5 === 3 ? 'rgba(255, 255, 255, 0.3)' :
                          'rgba(218, 112, 214, 0.3)'
    });
  }

  // Untuk modal gambar
  const selectedCertData = certificates.find(c => c.id === selectedCert);

  const nextImage = () => {
    if (selectedCertData) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedCertData.images.length);
    }
  };

  const prevImage = () => {
    if (selectedCertData) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedCertData.images.length) % selectedCertData.images.length);
    }
  };

  // Auto slide di modal
  useEffect(() => {
    if (!selectedCert || !mounted) return;
    
    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(interval);
  }, [selectedCert, currentImageIndex, mounted]);

  // Jangan render sampai mounted
  if (!mounted) {
    return (
      <section id="certificates" className="min-h-screen relative py-24 bg-gradient-to-br from-white via-purple-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-purple-200 animate-pulse" />
          <h2 className="text-3xl text-gray-900">Loading Certificates...</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="certificates" className="min-h-screen relative py-24 overflow-hidden bg-gradient-to-br from-white via-purple-50 to-blue-50">
      
      {/* ===== BACKGROUND SUPER DUPER RAME - TANPA RANDOM ===== */}
      <div className="absolute inset-0">
        {/* Base gradient dengan animasi */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-blue-50"
          animate={{
            background: [
              'radial-gradient(circle at 30% 30%, rgba(168,85,247,0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 70%, rgba(59,130,246,0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 70%, rgba(236,72,153,0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 30%, rgba(168,85,247,0.08) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Texture NOISE */}
        <div 
          className="absolute inset-0 opacity-30 mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.6'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />

        {/* Animated Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-blue-400/10"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            backgroundSize: '200% 200%',
          }}
        />
        
        {/* BANYAK PARTICLES - PAKAI ARRAY KONSTAN */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
                background: particle.color,
                filter: 'blur(1px)',
                boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
              }}
              animate={{
                y: [0, -80, 0],
                x: [0, particle.id % 2 === 0 ? 30 : -30, 0],
                scale: [0.8, 1.8, 0.8],
                opacity: [0.2, 0.7, 0.2],
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

        {/* FLOATING ICONS BANYAK */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.size} text-purple-300/30 z-0 pointer-events-none`}
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, index % 2 === 0 ? 15 : -15, 0],
              rotate: [0, 360],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              y: { duration: item.duration / 2, repeat: Infinity, delay: item.delay, ease: "easeInOut" },
              x: { duration: item.duration / 3, repeat: Infinity, delay: item.delay, ease: "easeInOut" },
              rotate: { duration: item.duration, repeat: Infinity, ease: "linear" },
              scale: { duration: item.duration, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            {item.icon}
          </motion.div>
        ))}

        {/* Big Blob Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.4, 1, 1.4],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #a855f7 1px, transparent 1px),
              linear-gradient(to bottom, #a855f7 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Garis-garis berkilau */}
        {[1,2,3,4,5,6,7,8].map((i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
            style={{
              top: `${10 + i * 12}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Efek kilauan titik-titik */}
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((i) => (
          <motion.div
            key={`glint-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${i * 5}%`,
              top: `${(i * 7) % 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* ===== KONTEN - CARD NYA TETAP ===== */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-5xl mx-auto"
        >
          {/* HEADER */}
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
                <Medal className="w-4 h-4 text-purple-600" />
              </motion.div>
              <span className="text-purple-800 text-sm font-semibold tracking-widest">
                SERTIFIKASI RESMI
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Trophy className="w-4 h-4 text-purple-600" />
              </motion.div>
            </motion.div>

            <motion.h2 
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Bukti <span className="text-purple-600">Kompetensi</span>
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
              Sertifikasi resmi yang diperoleh selama <span className="text-purple-600 font-semibold">perjalanan akademik</span>
            </motion.p>
          </motion.div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onHoverStart={() => setHoveredCert(cert.id)}
                onHoverEnd={() => setHoveredCert(null)}
                className="relative group"
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500">
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100/30 to-transparent" />
                  </div>

                  {/* Header dengan icon */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-14 h-14 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center text-3xl shadow-lg flex-shrink-0`}>
                      {cert.icon}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <BadgeCheck className="w-4 h-4 text-purple-600" />
                        <span className="text-xs font-medium text-purple-700 uppercase tracking-wider">
                          {cert.issuer}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 leading-tight mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-500">{cert.organization}</p>
                    </div>
                  </div>

                  {/* Info badges */}
                  <div className="flex flex-wrap gap-3 mb-5">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-100">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      <span className="text-xs text-gray-600">{cert.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-100">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      <span className="text-xs text-gray-600">{cert.expiry}</span>
                    </div>
                  </div>

                  {/* Score badge */}
                  <div className="mb-5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r ${cert.lightColor} text-white text-xs font-medium rounded-lg`}>
                      <CheckCircle className="w-3.5 h-3.5" />
                      {cert.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-5 border-l-2 border-purple-200 pl-3 italic">
                    "{cert.description}"
                  </p>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setSelectedCert(cert.id);
                        setCurrentImageIndex(0);
                      }}
                      className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-2.5 px-4 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <FileText className="w-4 h-4" />
                      Lihat Foto Sertifikat
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center text-gray-600 transition-colors border border-gray-200"
                    >
                      <Download className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* MODAL FOTO SERTIFIKAT */}
      <AnimatePresence>
        {selectedCert && selectedCertData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                onClick={() => setSelectedCert(null)}
                whileHover={{ scale: 1.1 }}
                className="absolute top-4 right-4 z-50 p-2 bg-black/60 backdrop-blur-lg text-white rounded-full hover:bg-black/80 transition-all border border-white/30 shadow-lg"
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Image container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={selectedCertData.images[currentImageIndex]}
                    alt={`Sertifikat ${selectedCertData.title}`}
                    className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.png';
                    }}
                  />
                </AnimatePresence>

                {/* Navigation arrows */}
                {selectedCertData.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-lg text-white rounded-full hover:bg-black/70 transition-all border border-white/20"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-lg text-white rounded-full hover:bg-black/70 transition-all border border-white/20"
                    >
                      <ChevronRightIcon className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-lg text-white text-sm rounded-full border border-white/20">
                  {currentImageIndex + 1} / {selectedCertData.images.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}