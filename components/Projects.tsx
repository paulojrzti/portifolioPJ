"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Clínica Médica Particular",
      description:
        "Website institucional desenvolvido para uma clínica médica moderna, com foco em agilidade no atendimento e experiência digital humanizada.",
      tech: ["Next.js", "TailwindCSS", "Framer Motion", "SEO"],
      image: "/medico.png",
    },
    {
      title: "Consultório Odontológico",
      description:
        "Landing page para uma clínica odontológica de alto padrão, com layout limpo, sistema de agendamento online e ênfase na confiança do paciente.",
      tech: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
      image: "/dentista.png",
    },
    {
      title: "Agência de SEO",
      description:
        "Interface escura e elegante desenvolvida para uma agência digital focada em SEO e performance, com animações sutis e tipografia de impacto.",
      tech: ["Next.js", "Framer Motion", "TailwindCSS", "GSAP"],
      image: "/agencia.png",
    },
    {
      title: "Estúdio de Branding",
      description:
        "Website conceitual minimalista para uma agência de branding, explorando contraste, tipografia e microinterações para transmitir sofisticação.",
      tech: ["Next.js", "Three.js", "Framer Motion", "TailwindCSS"],
      image: "/estudio.png",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-32 px-6 bg-black/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Projetos em Destaque</span>
          </h2>
          <p className="text-gray-400 text-lg">
            {"// Experiências digitais desenvolvidas com precisão e propósito"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-[#0f0f0f] border border-white/10 rounded-lg overflow-hidden hover:border-[#9b5cff]/50 transition-all duration-300"
            >
              {/* Imagem do projeto */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#9b5cff]/20 to-transparent">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#9b5cff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#9b5cff]/10 border border-[#9b5cff]/30 rounded-full text-[#9b5cff] text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#9b5cff]/0 to-[#9b5cff]/0 group-hover:from-[#9b5cff]/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
