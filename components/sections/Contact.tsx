'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Instagram, Phone, MapPin, Sparkles, MessageCircle, Heart, Code, Palette } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'lidiaars00@gmail.com',
      href: 'mailto:lidiaars00@gmail.com',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: Github,
      label: 'GitHub', 
      value: 'github.com/maulidiaars',
      href: 'https://github.com/maulidiaars',
      color: 'from-purple-400 to-blue-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/maulidia-rizki',
      href: 'https://linkedin.com/in/maulidia-rizki',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@lidiaars',
      href: 'https://instagram.com/lidiaars',
      color: 'from-pink-400 to-rose-500'
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+62 858-5316-4066',
      href: 'https://wa.me/6285853164066',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Lokasi',
      value: 'Mojokerto, Indonesia',
      href: '#',
      color: 'from-amber-400 to-orange-500'
    }
  ];

  // Floating icons dan emoji
  const floatingIcons = [
    { icon: '💻', top: '10%', left: '5%', delay: 0 },
    { icon: '📱', top: '15%', right: '8%', delay: 0.3 },
    { icon: '🎨', top: '80%', left: '3%', delay: 0.6 },
    { icon: '🚀', top: '75%', right: '5%', delay: 0.9 },
    { icon: '💫', top: '40%', left: '2%', delay: 1.2 },
    { icon: '✨', top: '50%', right: '3%', delay: 1.5 },
    { icon: '👩‍💻', top: '25%', left: '12%', delay: 1.8 },
    { icon: '📧', top: '65%', right: '12%', delay: 2.1 },
    { icon: '🌟', top: '35%', right: '15%', delay: 2.4 },
    { icon: '💖', top: '85%', left: '15%', delay: 2.7 },
  ];

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900 py-16 lg:py-20 overflow-hidden">
      
      {/* Background Effects - BANYAK PARTIKEL */}
      <div className="absolute inset-0">
        {/* Animated Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-blue-600/20"
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
        
        {/* Floating Particles - BANYAK BANGET */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Floating Icons/Emoji */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-2xl cursor-pointer z-5"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: item.delay }}
            whileHover={{ scale: 1.4, rotate: 15 }}
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut"
              }}
              className="text-yellow-300/90 hover:text-yellow-200 transition-colors duration-300 drop-shadow-lg"
            >
              {item.icon}
            </motion.div>
          </motion.div>
        ))}

        {/* Kartun Orang - Wave Hand */}
        <motion.div
          className="absolute bottom-10 left-10 hidden lg:block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{
              rotate: [0, 15, 0, -15, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-6xl"
          >
            👩‍💻
          </motion.div>
        </motion.div>

        {/* Kartun Lain - Floating Heart */}
        <motion.div
          className="absolute top-20 right-20 hidden lg:block"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-5xl"
          >
            💖
          </motion.div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Header - BAHASA INDONESIA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-yellow-400/30 px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-yellow-100 text-sm font-medium">LET'S JOIN !</span>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              Hubungi <span className="text-yellow-300">Saya</span>
            </motion.h2>

            <motion.p
              className="text-lg text-white/80 max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Siap mewujudkan ide Anda? Mari kita ciptakan sesuatu yang <span className="text-yellow-300 font-semibold">luar biasa bersama!</span>
            </motion.p>
          </motion.div>

          {/* Contact Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
          >
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -3,
                }}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 hover:bg-white/15"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-yellow-300 mb-1 text-sm lg:text-base">
                      {contact.label}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {contact.value}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;