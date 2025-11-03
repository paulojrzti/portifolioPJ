"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const codeLines = [
    "const pauloJunior = {",
    '  role: "Front-end Developer",',
    '  location: "Brasil 🇧🇷",',
    "  stack: [",
    '    "React",',
    '    "Next.js",',
    '    "TypeScript",',
    '    "TailwindCSS",',
    '    "Framer Motion",',
    '    "GSAP"',
    "  ],",
    '  passion: "Criar experiências únicas",',
    '  currentFocus: "Web Performance & Animations",',
    "  available: true",
    "};",
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Sobre Mim</span>
          </h2>
          <p className="text-gray-400 text-lg">{"// Conheça um pouco mais"}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0f0f0f] border border-white/10 rounded-lg p-8 code-block"
          >
            {codeLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                className="text-sm md:text-base mb-2"
              >
                {line.includes("role") ||
                line.includes("passion") ||
                line.includes("currentFocus") ? (
                  <span className="text-gray-400">
                    {line.split(":")[0]}:
                    <span className="text-[#9b5cff]">{line.split(":")[1]}</span>
                  </span>
                ) : line.includes('"') ? (
                  <span className="text-gray-400">
                    {line.split('"')[0]}
                    <span className="text-[#9b5cff]">
                      "{line.split('"')[1]}"
                    </span>
                    {line.split('"')[2]}
                  </span>
                ) : line.includes("true") ? (
                  <span className="text-gray-400">
                    {line.split("true")[0]}
                    <span className="text-orange-400">true</span>
                  </span>
                ) : (
                  <span className="text-gray-400">{line}</span>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Sou um{" "}
              <strong className="text-white">desenvolvedor front-end</strong>{" "}
              movido pela ideia de que cada linha de código pode transformar uma
              experiência digital. Trabalho com{" "}
              <strong className="text-[#9b5cff]">React</strong> e{" "}
              <strong className="text-[#9b5cff]">Next.js</strong> para criar
              interfaces modernas, performáticas e cheias de personalidade
              onde design e performance caminham lado a lado.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Tenho paixão por{" "}
              <strong className="text-white">animações fluidas</strong> e{" "}
              <strong className="text-white">
                interações que contam histórias
              </strong>
              . Meu foco está em transformar ideias complexas em experiências
              intuitivas e visualmente marcantes, com atenção especial à{" "}
              <strong className="text-[#9b5cff]">performance</strong> e à{" "}
              <strong className="text-[#9b5cff]">acessibilidade</strong>.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Acredito que o bom design não é só o que se vê é o que se sente
              ao usar. Por isso, busco sempre elevar o padrão do front-end,
              unindo <strong className="text-white">tecnologia</strong>,{" "}
              <strong className="text-white">criatividade</strong> e{" "}
              <strong className="text-white">propósito</strong> em cada projeto.
            </p>

            <div className="flex flex-wrap gap-3 pt-4 lg:flex md:hidden">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "TailwindCSS",
                "Framer Motion",
                "GSAP",
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="px-4 py-2 bg-[#9b5cff]/10 border border-[#9b5cff]/30 rounded-full text-[#9b5cff] text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
