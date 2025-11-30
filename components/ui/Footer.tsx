'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp, Mail, Github, Linkedin, Instagram, Sparkles, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIcons = [
    { 
      icon: Mail, 
      href: 'mailto:lidiaars@gmail.com',
      name: 'Email',
      color: 'hover:bg-red-100 hover:text-red-600'
    },
    { 
      icon: Github, 
      href: 'https://github.com/maulidiaars',
      name: 'GitHub',
      color: 'hover:bg-purple-100 hover:text-purple-600'
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/maulidia-rizki',
      name: 'LinkedIn',
      color: 'hover:bg-blue-100 hover:text-blue-600'
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/lidiaars',
      name: 'Instagram',
      color: 'hover:bg-pink-100 hover:text-pink-600'
    }
  ];

  return (
    <footer className="bg-white text-gray-800 relative overflow-hidden border-t border-gray-200">
      
      {/* Background Particles */}
      <div className="absolute inset-0">
        {/* Floating Particles Berwarna */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, ${
                ['#f472b6', '#a855f7', '#3b82f6', '#f59e0b'][i % 4]
              }, ${
                ['#ec4899', '#8b5cf6', '#2563eb', '#eab308'][i % 4]
              })`
            }}
            animate={{
              y: [0, -30, 0],
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

        {/* Big Floating Icons */}
        {[
          { icon: '💻', size: 'text-4xl', top: '10%', left: '5%', delay: 0 },
          { icon: '🚀', size: 'text-5xl', top: '20%', right: '8%', delay: 0.5 },
          { icon: '🎨', size: 'text-3xl', top: '70%', left: '3%', delay: 1 },
          { icon: '💫', size: 'text-4xl', top: '80%', right: '5%', delay: 1.5 },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.size} opacity-10`}
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: item.delay,
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        
        {/* Main Content - Layout Horizontal */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left Side - Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-gray-800">Maulidiah Rizki</h3>
              <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                <Code className="w-4 h-4" />
                Fullstack / Frontend Developer
              </p>
            </div>
          </motion.div>

          {/* Center - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-3"
          >
            {socialIcons.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200 transition-all duration-300 ${social.color} group relative`}
              >
                <social.icon className="w-5 h-5 text-gray-600 group-hover:scale-110 transition-transform" />
              </motion.a>
            ))}
          </motion.div>

          {/* Right Side - Copyright & Back to Top */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4"
          >
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
              </motion.div>
              <span>© 2025 Maulidiah</span>
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-gray-300"></div>

            {/* Back to Top */}
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-6 pt-6 border-t border-gray-200"
        >
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <Coffee className="w-4 h-4" />
            Dibuat dengan semangat sambil menikmati secangkir kopi
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;