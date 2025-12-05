"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-xl font-display font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-white">&lt;</span>
            <span className="gradient-text">Fahim</span>
            <span className="text-white">/&gt;</span>
          </motion.a>

          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center">
            © {currentYear} Fahim Khurshid. All rights reserved.
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-all"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
