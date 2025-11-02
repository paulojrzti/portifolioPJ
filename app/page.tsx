import About from "@/components/About";
import Contact from "@/components/Contact";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Hero from "@/components/Hero";
import HorizontalScroll from "@/components/HorizontalScroll";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";



export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
        <div className="grid-pattern fixed inset-0 pointer-events-none opacity-30" />
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <ExperienceTimeline />
        <HorizontalScroll />
        <Contact />
      </div>
    </main>
  );
}
