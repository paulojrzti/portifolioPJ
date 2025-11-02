"use client";

import { useRef, useLayoutEffect } from "react";
import { Briefcase, Code2, Rocket, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Experience {
  year: string;
  title: string;
  role: string;
  description: string;
  icon: React.ElementType;
}

const experiences: Experience[] = [
  {
    year: "2024 - Atual",
    title: "Freelancer",
    role: "Desenvolvedor Web",
    description:
      "Criação de sites modernos e institucionais em WordPress e Next.js, com foco em performance, UI limpa e UX otimizada.",
    icon: Code2,
  },
  {
    year: "2024",
    title: "Riachuelo",
    role: "Varanda • Next.js Dev",
    description:
      "Desenvolvimento de um sistema interno de metas e automação de processos para otimizar a operação da equipe.",
    icon: Rocket,
  },
  {
    year: "2023 - 2024",
    title: "Expansiva Gestão",
    role: "Automação e CRM",
    description:
      "Implantação de fluxos automatizados e sistemas personalizados de CRM, integrando processos e relatórios.",
    icon: Zap,
  },
  {
    year: "2022 - 2023",
    title: "Laplace Consultoria",
    role: "Estágio em Web Design",
    description:
      "Criação de landing pages e dashboards técnicos, aprimorando práticas de UI e front-end responsivo.",
    icon: Briefcase,
  },
];

export default function ExperienceTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Linha crescendo
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Cards aparecendo alternadamente
      const cards = gsap.utils.toArray<HTMLElement>(".exp-card");
      cards.forEach((card, i) => {
        const fromX = i % 2 === 0 ? -80 : 80;
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, x: fromX },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Ícones com brilho e pulso
      gsap.utils.toArray<HTMLElement>(".exp-icon").forEach((icon) => {
        gsap.fromTo(
          icon,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: icon,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            onComplete: () => {
              gsap.to(icon, {
                repeat: -1,
                yoyo: true,
                duration: 2,
                ease: "sine.inOut",
                boxShadow: "0 0 10px #9b5cff", // roxo premium
                scale: 1.1,
              });
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-3">
            <span className="gradient-text">
              Experiências
            </span>
          </h2>
          <p className="text-gray-500 text-lg">
            // Minha trajetória profissional
          </p>
        </div>

        {/* Linha central */}
        <div className="relative flex flex-col items-center">
          <div
            ref={lineRef}
            className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-gradient-to-b from-[#9b5cff]/40 to-transparent scale-y-0"
          />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const Icon = exp.icon;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                } mb-24 w-full`}
              >
                {/* Card */}
                <div
                  className={`exp-card w-full md:w-[45%] bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 shadow-xl ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <p className="text-sm text-gray-400 mb-2">{exp.year}</p>
                  <h3 className="text-2xl font-semibold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-gray-300 font-medium mb-4">{exp.role}</p>
                  <p className="text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Ícone */}
                <div className="exp-icon absolute left-1/2 -translate-x-1/2 bg-[#0f0f0f] border border-white/10 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                  <Icon className="text-[#9b5cff]" size={22} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
