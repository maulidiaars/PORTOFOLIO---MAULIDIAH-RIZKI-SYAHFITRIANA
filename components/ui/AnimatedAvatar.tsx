'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Code, Cpu, Network, Zap } from 'lucide-react';

const AnimatedAvatar = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nodes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  const connections = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    start: Math.floor(Math.random() * 50),
    end: Math.floor(Math.random() * 50),
  }));

  return (
    <div className="relative w-full h-96 md:h-[500px] lg:h-[600px]">
      {/* Main Avatar Container */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
        className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
      >
        {/* Outer Glow Ring */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity },
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary via-secondary-dark to-secondary blur-xl opacity-50"
        />

        {/* Main Avatar Circle */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-dark via-primary to-primary-light shadow-2xl border-2 border-secondary/30 backdrop-blur-sm"
        >
          {/* Animated Letter M */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="text-6xl md:text-8xl font-black text-secondary drop-shadow-2xl">
              M
            </span>
          </motion.div>

          {/* Floating Tech Icons */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <motion.div
              animate={{
                rotate: -360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity },
              }}
              className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <Code className="w-6 h-6 text-secondary/80" />
            </motion.div>

            <motion.div
              animate={{
                rotate: 360,
                scale: [1.2, 1, 1.2],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity },
              }}
              className="absolute bottom-2 left-2"
            >
              <Cpu className="w-5 h-5 text-secondary/70" />
            </motion.div>

            <motion.div
              animate={{
                rotate: -360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 28, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity },
              }}
              className="absolute bottom-2 right-2"
            >
              <Network className="w-5 h-5 text-secondary/70" />
            </motion.div>

            <motion.div
              animate={{
                rotate: 360,
                scale: [1.1, 1, 1.1],
              }}
              transition={{
                rotate: { duration: 22, repeat: Infinity, ease: "linear" },
                scale: { duration: 6, repeat: Infinity },
              }}
              className="absolute top-2 right-2"
            >
              <Zap className="w-5 h-5 text-secondary/70" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Particle Network */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              className="absolute w-1 h-1 bg-secondary/40 rounded-full"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
              }}
              animate={{
                scale: [0.5, 1.5, 0.5],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: node.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Neural Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {connections.map((conn) => {
            const startNode = nodes[conn.start];
            const endNode = nodes[conn.end];
            if (!startNode || !endNode) return null;

            return (
              <motion.line
                key={conn.id}
                x1={`${startNode.x}%`}
                y1={`${startNode.y}%`}
                x2={`${endNode.x}%`}
                y2={`${endNode.y}%`}
                stroke="url(#gradient)"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 0.3, 0] }}
                transition={{
                  pathLength: { duration: 2, repeat: Infinity, delay: conn.id * 0.1 },
                  opacity: { duration: 2, repeat: Infinity, delay: conn.id * 0.1 },
                }}
              />
            );
          })}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e8d8c4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#c7b7a3" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Floating Code Elements */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute -bottom-4 -left-4 bg-primary/90 backdrop-blur-sm border border-secondary/20 rounded-2xl p-4 shadow-2xl z-10"
      >
        <div className="text-xs text-secondary font-mono space-y-1">
          <div className="flex gap-2">
            <span className="text-secondary-dark">1</span>
            <span className="text-secondary">class Developer extends</span>
            <span className="text-secondary-light">Human</span>
            <span className="text-secondary">&#123;</span>
          </div>
          <div className="flex gap-2">
            <span className="text-secondary-dark">2</span>
            <span className="text-secondary-light ml-4">constructor()</span>
            <span className="text-secondary">&#123;</span>
          </div>
          <div className="flex gap-2">
            <span className="text-secondary-dark">3</span>
            <span className="text-secondary ml-8">this.skills = [</span>
            <span className="text-secondary-light">'Fullstack'</span>
            <span className="text-secondary">,</span>
            <span className="text-secondary-light">'Frontend'</span>
            <span className="text-secondary">];</span>
          </div>
          <div className="flex gap-2">
            <span className="text-secondary-dark">4</span>
            <span className="text-secondary ml-4">&#125;</span>
          </div>
          <div className="flex gap-2">
            <span className="text-secondary-dark">5</span>
            <span className="text-secondary">&#125;</span>
          </div>
        </div>
      </motion.div>

      {/* Binary Rain Effect */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs text-secondary/30 font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-20px',
            }}
            animate={{
              y: ['0%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}
      </div>

      {/* Interactive Mouse Tracker */}
      <motion.div
        className="absolute w-20 h-20 rounded-full bg-secondary/10 pointer-events-none"
        animate={{
          x: `${mousePosition.x}%`,
          y: `${mousePosition.y}%`,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
    </div>
  );
};

export default AnimatedAvatar;