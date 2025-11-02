"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "GSAP",
    "Framer Motion",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* linha superior */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-[#9b5cff] font-mono"
          >
            {'> console.log("Olá, mundo!")'}
          </motion.div>

          {/* título principal */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="text-white">Paulo Junior</span>
            <br />
            <span className="bg-gradient-to-r from-[#9b5cff] to-[#7a3eff] bg-clip-text text-transparent">
              Front-end Developer
            </span>
          </h1>

          {/* tech animadas */}
          <div className="flex items-center justify-center gap-3 text-xl md:text-2xl text-gray-400 font-mono">
            <span className="text-gray-300  whitespace-nowrap">
              Especialista em
            </span>
            <motion.span
              key={currentTech}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-[#9b5cff] font-bold min-w-[150px] text-left"
            >
              {technologies[currentTech]}
            </motion.span>
          </div>

          {/* descrição */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Transformando ideias em experiências digitais incríveis com código
            limpo e design moderno
          </motion.p>

          {/* botões */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col max-sm:flex-row sm:flex-row items-center justify-center gap-4 md:pt-8 pt-5"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 md:py-4 bg-[#9b5cff] text-white font-semibold rounded-lg glow-effect hover:bg-[#7a3eff] transition-colors whitespace-nowrap"
            >
              Ver Projetos
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 md:py-4 border-2 border-[#9b5cff] text-[#9b5cff] font-semibold rounded-lg hover:bg-[#9b5cff]/10 transition-colors whitespace-nowrap"
            >
              Entrar em Contato
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* seta animada */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-[#9b5cff]" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
