"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, X, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const whatsappNumber = "5527988110158"; // seu número completo com código do país

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "",
      message: formData.message.trim() === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    const textMessage = `Olá, meu nome é ${formData.name}.\nEmail: ${formData.email}\nMensagem: ${formData.message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      textMessage
    )}`;

    setTimeout(() => {
      window.open(url, "_blank");
      setLoading(false);
      setIsOpen(false);
      setFormData({ name: "", email: "", message: "" });
      toast({
        title: "Redirecionando para o WhatsApp 🚀",
        description: "Você pode enviar a mensagem diretamente pelo WhatsApp.",
      });
    }, 500);
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/paulojrzti",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/paulojrzti/",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/paulojrz.dev?igsh=Y3VobGE2eGs5cWZi",
    },
    { icon: Mail, label: "Email", href: "mailto:paulojrzti@gmail.com" },
  ];

  return (
    <section id="contact" className="relative py-32 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">
              Vamos construir algo incrível?
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Estou sempre aberto a novos projetos e oportunidades. Entre em
            contato e vamos transformar suas ideias em realidade!
          </p>

          <motion.button
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 gradient text-black font-bold text-lg rounded-lg glow-effect hover:bg-ring transition-colors inline-block"
          >
            Iniciar Conversa
          </motion.button>

          <div className="flex items-center justify-center gap-6 pt-12">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-14 h-14 bg-[#0f0f0f] border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-ring hover:border-primary/50 transition-all"
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* POP-UP DE CONTATO */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 w-[90%] max-w-md relative text-left shadow-2xl"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
              >
                <X size={22} />
              </button>

              <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">
                Enviar Mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className={`w-full p-3 rounded-lg bg-black border ${
                      errors.name ? "border-red-500" : "border-white/10"
                    } text-white placeholder-gray-500 focus:border-primary outline-none transition`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      Nome é obrigatório.
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Seu e-mail"
                    className={`w-full p-3 rounded-lg bg-black border ${
                      errors.email ? "border-red-500" : "border-white/10"
                    } text-white placeholder-gray-500 focus:border-primary outline-none transition`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      E-mail é obrigatório.
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Sua mensagem"
                    rows={4}
                    className={`w-full p-3 rounded-lg bg-black border ${
                      errors.message ? "border-red-500" : "border-white/10"
                    } text-white placeholder-gray-500 focus:border-primary outline-none transition resize-none`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      Mensagem é obrigatória.
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={!loading ? { scale: 1.03 } : {}}
                  whileTap={!loading ? { scale: 0.95 } : {}}
                  disabled={loading}
                  className={`w-full py-3 font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
                    loading
                      ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                      : "gradient text-black hover:bg-ring glow-effect"
                  }`}
                >
                  {loading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />{" "}
                      Redirecionando...
                    </>
                  ) : (
                    "Enviar via WhatsApp"
                  )}
                </motion.button>

                <div className="text-sm text-gray-500 text-center mt-4">
                  ou envie para{" "}
                  <a
                    href="mailto:paulojrzti@gmail.com"
                    className="text-primary hover:underline"
                  >
                    paulojrzti@gmail.com
                  </a>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-24 pt-12 border-t border-white/10"
      >
        <p className="text-gray-500 text-sm">
          © 2024 Paulo Junior. Desenvolvido com React & Framer Motion
        </p>
        <p className="text-gray-600 text-xs mt-2 font-mono">
          {"<code> with ❤️ </code>"}
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
