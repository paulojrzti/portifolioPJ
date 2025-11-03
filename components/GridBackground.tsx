"use client";
import { useEffect, useRef } from "react";

export function GridBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current!;
    if (!el) return;

    let running = true;
    const gridSize = 120;

    function createLightLine() {
      if (!running) return;

      const line = document.createElement("div");
      line.className = "grid-light vertical";

      const xStep = Math.floor(window.innerWidth / gridSize);
      const yStep = Math.floor(window.innerHeight / gridSize);
      const left = Math.floor(Math.random() * xStep) * gridSize;
      const top = Math.floor(Math.random() * yStep) * gridSize;

      line.style.left = `${left}px`;
      line.style.top = `${top}px`;

      el.appendChild(line);
      setTimeout(() => line.remove(), 7000);

      // nova linha aleatória
      setTimeout(createLightLine, 1500 + Math.random() * 2500);
    }

    createLightLine();
    return () => {
      running = false;
    };
  }, []);

  return (
    <div ref={ref} className="grid-wrapper" aria-hidden>
      <div className="grid-lines" />
    </div>
  );
}
