"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio-data";

export default function Hero() {
  const { personal } = portfolioData;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              variants={itemVariants}
              className="text-primary-light text-lg mb-4"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
            >
              {/* Animated First Name - simplified on mobile */}
              {isMobile ? (
                <motion.span
                  className="text-white inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {personal.name.split(" ")[0]}
                </motion.span>
              ) : (
                <span className="text-white inline-block">
                  {personal.name.split(" ")[0].split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      className="inline-block cursor-default"
                      style={{ willChange: "transform" }}
                      initial={{ opacity: 0, y: 50, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5 + index * 0.1,
                        type: "spring",
                        stiffness: 100,
                      }}
                      whileHover={{ 
                        y: -5,
                        color: "#818cf8",
                        textShadow: "0 0 20px rgba(129, 140, 248, 0.8)",
                        transition: { duration: 0.2 } 
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              )}{" "}
              {/* Animated Last Name with gradient - simplified on mobile */}
              {isMobile ? (
                <motion.span
                  className="inline-block gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {personal.name.split(" ")[1]}
                </motion.span>
              ) : (
                <span className="inline-block">
                  {personal.name.split(" ")[1].split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      className="inline-block cursor-default gradient-text"
                      style={{ willChange: "transform" }}
                      initial={{ opacity: 0, y: -50, scale: 0 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 1 + index * 0.08,
                        type: "spring",
                        stiffness: 150,
                      }}
                      whileHover={{ 
                        y: -8,
                        textShadow: "0 0 25px rgba(139, 92, 246, 0.8)",
                        transition: { duration: 0.2 } 
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              )}
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                <span className="gradient-text font-semibold">{personal.title}</span>
              </h2>
            </motion.div>

            {/* Bio with Typewriter Effect */}
            <motion.div
              variants={itemVariants}
              className="max-w-xl mx-auto lg:mx-0 mb-8"
            >
              <motion.p
                className="text-gray-400 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                {personal.bio.slice(0, 120)}
              </motion.p>
              
              {/* Read More Link with animated arrow */}
              <motion.a
                href="#about"
                className="inline-flex items-center gap-2 mt-4 text-primary-light hover:text-white transition-colors group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                whileHover={{ x: 5 }}
              >
                <span className="text-sm font-medium">Read more about me</span>
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </motion.a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold overflow-hidden"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Shine sweep effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                {/* Pulse ring effect */}
                <span className="absolute inset-0 rounded-full animate-ping bg-primary/20 opacity-0 group-hover:opacity-75" style={{ animationDuration: '1.5s' }} />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <motion.svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
              </motion.a>
              <motion.a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated gradient border */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]" />
                <span className="absolute inset-[2px] rounded-full bg-dark" />
                {/* Shine sweep effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
                <span className="relative z-10 flex items-center justify-center gap-2 text-white font-semibold">
                  <motion.svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </motion.svg>
                  Download Resume
                </span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 mt-10 justify-center lg:justify-start"
            >
              <motion.a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-full overflow-hidden"
                whileHover={{ y: -5, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {/* Animated gradient border on hover */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute inset-[2px] rounded-full bg-dark-lighter group-hover:bg-dark transition-colors" />
                <span className="absolute inset-0 flex items-center justify-center z-10">
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </span>
              </motion.a>
              <motion.a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-full overflow-hidden"
                whileHover={{ y: -5, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {/* Animated gradient border on hover */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute inset-[2px] rounded-full bg-dark-lighter group-hover:bg-dark transition-colors" />
                <span className="absolute inset-0 flex items-center justify-center z-10">
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
              </motion.a>
              <motion.a
                href={personal.social.email}
                className="group relative w-12 h-12 rounded-full overflow-hidden"
                whileHover={{ y: -5, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {/* Animated gradient border on hover */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute inset-[2px] rounded-full bg-dark-lighter group-hover:bg-dark transition-colors" />
                <span className="absolute inset-0 flex items-center justify-center z-10">
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </motion.a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30" />

              {/* Image container with glassmorphism border */}
              <motion.div
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden glass-strong p-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="/images/profile.jpg"
                    alt={personal.name}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full glass"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-gray-500 flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-gray-500 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
