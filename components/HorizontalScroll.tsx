"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "React", level: 95, category: "Framework" },
    { name: "Next.js", level: 90, category: "Framework" },
    { name: "TypeScript", level: 85, category: "Language" },
    { name: "JavaScript", level: 95, category: "Language" },
    { name: "TailwindCSS", level: 90, category: "Styling" },
    { name: "Framer Motion", level: 88, category: "Animation" },
    { name: "GSAP", level: 82, category: "Animation" },
    { name: "Git", level: 90, category: "Tools" },
    { name: "Figma", level: 75, category: "Design" },
    { name: "Performance", level: 85, category: "Optimization" },
  ];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    // Total de scroll horizontal
    const totalScroll = container.scrollWidth - window.innerWidth;

    // Scroll horizontal
    gsap.to(container, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        id: "horizontal-scroll",
        trigger: section,
        start: "top top",
        end: () => `+=${totalScroll}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black/50 pt-32 pb-5 overflow-hidden "
    >
      {/* Título */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          
        </div>
      </div>

      {/* Container horizontal */}
      <div ref={containerRef} className="flex gap-8 px-6 w-max">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card flex-shrink-0 w-80 bg-[#0f0f0f] border border-white/10 rounded-lg p-8 hover:border-primary/50 transition-all group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                  {skill.category}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Proficiência</span>
                  <span className="gradient-text font-bold">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r gradient rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

              <div className="pt-4 text-gray-400 text-sm leading-relaxed">
                Experiência sólida em desenvolvimento e implementação de
                soluções modernas
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
