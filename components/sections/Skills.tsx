// components/Skills.tsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Palette, Database, Cloud, Zap, Sparkles, Target, Users, Heart, Brain } from 'lucide-react';
import { useState } from 'react';

export default function Skills() {
  const [tabAktif, setTabAktif] = useState<string>("semua");
  const [kategoriTerbuka, setKategoriTerbuka] = useState<string | null>(null);
  
  const skillTeknis = {
    frontend: [
      { nama: "HTML", level: 95, icon: "🌐", warna: "from-orange-500 to-red-500", tahun: "4+ tahun" },
      { nama: "CSS", level: 90, icon: "🎨", warna: "from-blue-500 to-cyan-500", tahun: "4+ tahun" },
      { nama: "JavaScript", level: 80, icon: "⚡", warna: "from-yellow-400 to-yellow-600", tahun: "3+ tahun" },
      { nama: "Tailwind CSS", level: 85, icon: "💨", warna: "from-teal-500 to-blue-500", tahun: "2+ tahun" },
      { nama: "React.js", level: 75, icon: "⚛️", warna: "from-cyan-500 to-blue-500", tahun: "2+ tahun" },
      { nama: "Next.js", level: 65, icon: "▲", warna: "from-gray-700 to-gray-900", tahun: "1+ bulan" }
    ],
    backend: [
      { nama: "Node.js", level: 75, icon: "🟢", warna: "from-green-500 to-green-700", tahun: "2+ tahun" },
      { nama: "Express.js", level: 80, icon: "🚂", warna: "from-gray-600 to-gray-800", tahun: "2+ tahun" },
      { nama: "REST API", level: 80, icon: "🔗", warna: "from-purple-500 to-pink-500", tahun: "2+ tahun" },
      { nama: "MySQL", level: 70, icon: "🐬", warna: "from-blue-400 to-blue-600", tahun: "2+ tahun" }
    ],
    design: [
      { nama: "Figma", level: 85, icon: "🎯", warna: "from-purple-500 to-pink-500", tahun: "2+ tahun" },
      { nama: "Adobe Photoshop", level: 90, icon: "🖼️", warna: "from-blue-500 to-indigo-500", tahun: "3+ tahun" },
      { nama: "Landing Page Design", level: 95, icon: "✨", warna: "from-green-500 to-emerald-500", tahun: "3+ tahun" },
      { nama: "Prototyping", level: 80, icon: "📱", warna: "from-blue-400 to-cyan-400", tahun: "2+ tahun" }
    ],
    tools: [
      { nama: "Git & GitHub", level: 70, icon: "📚", warna: "from-gray-700 to-gray-900", tahun: "2+ tahun" },
      { nama: "VS Code", level: 95, icon: "💻", warna: "from-blue-600 to-purple-600", tahun: "3+ tahun" },
      { nama: "Postman", level: 80, icon: "📮", warna: "from-orange-500 to-red-500", tahun: "2+ tahun" },
      { nama: "Android Studio", level: 60, icon: "🤖", warna: "from-green-500 to-emerald-500", tahun: "1+ tahun" }
    ],
    deployment: [
      { nama: "CPanel Hosting", level: 85, icon: "🌐", warna: "from-red-500 to-orange-500", tahun: "1+ tahun" },
      { nama: "Domain & DNS Setup", level: 70, icon: "🔗", warna: "from-blue-500 to-cyan-500", tahun: "2+ tahun" }
    ]
  };

  const skillSoft = [
    {
      kategori: "Kepemimpinan",
      skills: ["Manajemen Tim", "Perencanaan Proyek", "Pengambilan Keputusan", "Motivasi Tim"],
      icon: Users,
      warna: "from-purple-500 to-pink-500"
    },
    {
      kategori: "Komunikasi", 
      skills: ["Public Speaking", "Presentasi Teknis", "Kolaborasi Tim", "Menulis Dokumentasi"],
      icon: Heart,
      warna: "from-red-500 to-orange-500"
    },
    {
      kategori: "Problem Solving",
      skills: ["Analytical Thinking", "Kreativitas", "Research Skills", "Adaptabilitas"],
      icon: Brain,
      warna: "from-blue-500 to-cyan-500"
    }
  ];

  const kategoriSkill = [
    {
      id: "frontend",
      judul: "Frontend Development",
      icon: Code,
      warna: "from-blue-500 to-cyan-500",
      jumlah: `${skillTeknis.frontend.length} Skills`,
      deskripsi: "Teknologi frontend modern dan framework"
    },
    {
      id: "backend",
      judul: "Backend Development", 
      icon: Database,
      warna: "from-green-500 to-emerald-500",
      jumlah: `${skillTeknis.backend.length} Skills`,
      deskripsi: "Teknologi server-side dan database"
    },
    {
      id: "design",
      judul: "UI/UX Design",
      icon: Palette,
      warna: "from-purple-500 to-pink-500",
      jumlah: `${skillTeknis.design.length} Skills`,
      deskripsi: "Tools design dan prinsip user experience"
    },
    {
      id: "tools",
      judul: "Development Tools",
      icon: Zap,
      warna: "from-yellow-500 to-orange-500",
      jumlah: `${skillTeknis.tools.length} Skills`,
      deskripsi: "Tools development dan workflow"
    },
    {
      id: "deployment",
      judul: "Deployment & DevOps",
      icon: Cloud,
      warna: "from-orange-500 to-red-500",
      jumlah: `${skillTeknis.deployment.length} Skills`,
      deskripsi: "Platform deployment dan praktik DevOps"
    }
  ];

  const tabs = [
    { id: "semua", label: "Semua Skill", icon: Sparkles, deskripsi: "Overview lengkap semua skill" },
    { id: "teknis", label: "Skill Teknis", icon: Code, deskripsi: "Programming & development" },
    { id: "soft", label: "Soft Skills", icon: Users, deskripsi: "Kepemimpinan & komunikasi" }
  ];

  const bukaKategori = (categoryId: string) => {
    setKategoriTerbuka(kategoriTerbuka === categoryId ? null : categoryId);
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-red-950 via-purple-900 to-blue-900 relative overflow-hidden">
      
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
        
        {/* Particles Animasi */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
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

        {/* Elemen Floating */}
        {[
          { icon: '⚡', top: '10%', left: '5%', delay: 0 },
          { icon: '🎨', top: '15%', right: '8%', delay: 0.3 },
          { icon: '🚀', top: '60%', left: '3%', delay: 0.6 },
          { icon: '💻', bottom: '20%', right: '5%', delay: 0.9 }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-2xl text-amber-300/40 z-0"
            style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
            animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: item.delay }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-amber-400/50 px-6 py-3 rounded-full mb-6 group hover:bg-white/15 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-4 h-4 text-amber-300" />
            </motion.div>
            <span className="text-amber-100 text-sm font-semibold tracking-widest">
              SKILL & KEMAMPUAN
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">
              Kemampuan{" "}
            </span>
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Saya
            </span>
          </h2>
          
          <motion.div
            className="relative w-24 h-1.5 mx-auto mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500 rounded-full"></div>
            <motion.div 
              className="absolute top-0 left-0 w-full h-full bg-white/30 rounded-full"
              animate={{ x: [-100, 100] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
          </motion.div>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            Kombinasi keahlian teknis dengan kemampuan kepemimpinan dan komunikasi untuk hasil yang exceptional
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setTabAktif(tab.id)}
                className={`flex flex-col items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 border-2 backdrop-blur-sm min-w-[160px] ${
                  tabAktif === tab.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white border-transparent shadow-lg shadow-amber-500/25 scale-105'
                    : 'bg-white/10 text-amber-100 border-amber-400/30 hover:border-amber-300 hover:bg-white/15 hover:shadow-md'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent size={20} />
                <span className="text-base">{tab.label}</span>
                <span className="text-xs font-normal opacity-80">{tab.deskripsi}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {/* Tab Semua Skill */}
          {tabAktif === "semua" && (
            <motion.div
              key="semua"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Overview Skill Teknis */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
                {kategoriSkill.map((kategori, index) => (
                  <motion.div
                    key={kategori.id}
                    className="text-center group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => {
                      setTabAktif("teknis");
                      setTimeout(() => bukaKategori(kategori.id), 100);
                    }}
                  >
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border-2 border-amber-400/20 shadow-card-lg hover:shadow-xl hover:border-amber-400/40 transition-all duration-300 h-full">
                      <div className={`inline-flex p-3 bg-gradient-to-br ${kategori.warna} rounded-xl text-white shadow-lg mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <kategori.icon size={20} />
                      </div>
                      <h3 className="font-bold text-white text-sm mb-1">{kategori.judul}</h3>
                      <p className="text-amber-100 text-xs mb-2">{kategori.jumlah}</p>
                      <p className="text-amber-200/80 text-xs">{kategori.deskripsi}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Overview Soft Skills */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 border-amber-400/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white shadow-xl">
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Soft Skills & Kepemimpinan</h3>
                    <p className="text-amber-100 text-sm">Kemampuan interpersonal dan kepemimpinan</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {skillSoft.map((skill, index) => (
                    <motion.div
                      key={skill.kategori}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className="bg-amber-400/10 rounded-xl p-4 border border-amber-400/20 h-full">
                        <skill.icon className="w-6 h-6 text-amber-300 mx-auto mb-3" />
                        <h4 className="font-bold text-white text-base mb-2">{skill.kategori}</h4>
                        <div className="space-y-1">
                          {skill.skills.map((item) => (
                            <div key={item} className="text-amber-100 text-xs">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab Skill Teknis */}
          {tabAktif === "teknis" && (
            <motion.div
              key="teknis"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {kategoriSkill.map((kategori, index) => (
                <motion.div
                  key={kategori.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl border-2 border-amber-400/20 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Header Kategori */}
                  <div 
                    className="p-4 cursor-pointer flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                    onClick={() => bukaKategori(kategori.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 bg-gradient-to-br ${kategori.warna} rounded-lg text-white`}>
                        <kategori.icon size={18} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{kategori.judul}</h3>
                        <p className="text-amber-100 text-sm">{kategori.deskripsi}</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: kategoriTerbuka === kategori.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-amber-300 text-sm"
                    >
                      ▼
                    </motion.div>
                  </div>

                  {/* Konten Expandable - DIBAGI 2 KOLOM */}
                  <AnimatePresence>
                    {kategoriTerbuka === kategori.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-amber-400/20"
                      >
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                          {skillTeknis[kategori.id as keyof typeof skillTeknis]?.map((skill, skillIndex) => (
                            <motion.div
                              key={skill.nama}
                              className="bg-white rounded-xl p-4 shadow-lg border border-gray-200"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: skillIndex * 0.1 }}
                              whileHover={{ scale: 1.02 }}
                            >
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                  <span className="text-2xl">{skill.icon}</span>
                                  <div>
                                    <h4 className="font-bold text-gray-900 text-base">{skill.nama}</h4>
                                    <p className="text-gray-600 text-xs">{skill.tahun}</p>
                                  </div>
                                </div>
                                <span className="text-base font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                  {skill.level}%
                                </span>
                              </div>
                              
                              {/* Progress Bar Panjang dengan Animasi */}
                              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                <motion.div
                                  className={`h-3 rounded-full bg-gradient-to-r ${skill.warna} relative overflow-hidden`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ 
                                    duration: 2, 
                                    delay: skillIndex * 0.1 + 0.3, 
                                    ease: "easeOut" 
                                  }}
                                >
                                  {/* Efek Shimmer */}
                                  <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                                    animate={{
                                      x: ['-100%', '100%']
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: skillIndex * 0.1
                                    }}
                                  />
                                </motion.div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Tab Soft Skills */}
          {tabAktif === "soft" && (
            <motion.div
              key="soft"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-3">Professional & Soft Skills</h3>
                <p className="text-amber-100">Kemampuan untuk kolaborasi dan kepemimpinan</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillSoft.map((skill, index) => (
                  <motion.div
                    key={skill.kategori}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 border-amber-400/20 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className={`inline-flex p-3 bg-gradient-to-br ${skill.warna} rounded-xl text-white shadow-lg mb-4`}>
                      <skill.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{skill.kategori}</h3>
                    <div className="space-y-2">
                      {skill.skills.map((item, itemIndex) => (
                        <motion.div
                          key={item}
                          className="text-amber-100 text-base font-medium py-2 px-3 bg-amber-400/10 rounded-lg border border-amber-400/20"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + itemIndex * 0.1 }}
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}