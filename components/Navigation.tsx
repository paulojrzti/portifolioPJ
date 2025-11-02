"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
  ];

  // animações do menu mobile
  const menuVariants: Variants = {
    hidden: {
      opacity: 0,
      clipPath: "circle(4% at 90% 5%)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    visible: {
      opacity: 1,
      clipPath: "circle(150% at 90% 5%)",
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-lg border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold gradient-text cursor-pointer"
          >
            {"<PJ />"}
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white z-50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* menu mobile animado */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-40 md:hidden"
          >
            <motion.div
              className="h-full flex flex-col items-center justify-center gap-8"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ staggerChildren: 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  variants={itemVariants}
                  className="text-3xl font-medium text-gray-300 hover:text-primary transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
