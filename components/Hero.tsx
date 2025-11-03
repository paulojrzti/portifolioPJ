"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GridBackground } from "./GridBackground";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

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

  const heroRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<HTMLAnchorElement[]>([]);
  const arrowRef = useRef<HTMLDivElement>(null);

  const nameRef = useRef<HTMLDivElement>(null);
  const consoleRef = useRef<HTMLParagraphElement>(null);

  // Rotação de tecnologias
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Animação de entrada geral com GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = heroRef.current?.querySelectorAll(
        ".hero-text, .tech, .hero-button, .hero-arrow"
      );
      if (!elements) return;

      gsap.from(elements, {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 3,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Typewriter da esquerda para direita
  useEffect(() => {
    if (nameRef.current && consoleRef.current) {
      const nameText = "I'mPaulo jr.";
      const consoleText = '> console.log("Olá, mundo!")';

      // Helper para animar letras
      const animateText = (el: HTMLElement, text: string, delay = 0) => {
        el.textContent = ""; // limpa antes
        const chars = text.split("");
        chars.forEach((char, i) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.opacity = "0";
          span.style.display = "inline-block";
          el.appendChild(span);

          gsap.to(span, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: delay + i * 0.08,
            ease: "power3.out",
            from: { x: -10 }, // surge da esquerda
          });
        });
      };

      animateText(nameRef.current, nameText);
      animateText(consoleRef.current, consoleText, 0.8); // delay entre name e console
    }
  }, []);

  // Hover tipo ScrambledText
  const handleScrambleHover = (index: number, originalText: string) => {
    const btn = buttonRefs.current[index];
    if (!btn) return;

    gsap.to(btn, {
      duration: 0.8,
      scrambleText: {
        text: originalText,
        chars: "01",
        speed: 2,
        revealDelay: 0.5,
      },
      onComplete: () => {
        btn.textContent = originalText;
      },
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20"
      ref={heroRef}
    >
      <GridBackground />
      <div className="max-w-7xl mx-auto w-full z-1">
        <div className="text-center flex flex-col items-center justify-center gap-6 text-foreground">
          {/* título principal */}
          <div className="text-5xl md:text-7xl lg:text-9xl font-bold w-max flex flex-col items-center justify-center gap-1 tracking-[2%]">
            <div className="hero-text text-white text-left w-full flex items-end justify-between">
              <h1 className="font-[110] leading">FRONT-END</h1>
              <div className="hero-text text-sm text-left font-mono font-light">
                <div ref={nameRef} className="text-sm font-light" />
                <p ref={consoleRef} className="text-sm font-light pb-6 pt-2" />
              </div>
            </div>

            <div className="hero-text text-right w-full flex items-center justify-between">
              <strong className="font-light font-atyp-display">{"</>"}</strong>
              <h2 className="font-atyp-display italic font-semibold">
                DEVELOPER
              </h2>
            </div>

            <div className="hero-text text-left w-full font-[110] italic ">
              <h3 className="font-[110] italic font-atyp-text">
                & DESIGN THINKER
              </h3>
            </div>
          </div>

          {/* tech animadas */}
          <div className="flex items-center justify-center gap-3 text-xl md:text-2xl text-gray-400 font-mono tech">
            <span className="text-foreground/80 whitespace-nowrap">
              Especialista em
            </span>
            <motion.span
              key={currentTech}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-foreground font-bold min-w-[150px] text-left"
            >
              {technologies[currentTech]}
            </motion.span>
          </div>

          {/* botões */}
          <div className="flex flex-col max-sm:flex-row sm:flex-row items-center justify-center gap-4 md:pt-8 pt-5">
            <a
              href="#projects"
              ref={(el) => (buttonRefs.current[0] = el!)}
              onMouseEnter={() => handleScrambleHover(0, "Ver Projetos")}
              className="hero-button px-6 py-3 md:px-8 md:py-4 bg-foreground text-background font-semibold rounded-lg hover:bg-transparent hover:border-2 hover:border-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              Ver Projetos
            </a>

            <a
              href="#contact"
              ref={(el) => (buttonRefs.current[1] = el!)}
              onMouseEnter={() => handleScrambleHover(1, "Entrar em Contato")}
              className="hero-button px-6 py-3 md:px-8 md:py-4 border-2 border-foreground text-foreground font-semibold rounded-lg hover:bg-foreground/10 transition-colors whitespace-nowrap"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>

      {/* seta animada */}
      <div
        className="hero-arrow absolute bottom-10 left-1/2 transform -translate-x-1/2"
        ref={arrowRef}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-foreground" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
