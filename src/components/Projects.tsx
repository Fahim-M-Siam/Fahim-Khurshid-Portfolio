"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";

export default function Projects() {
  const { projects } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-primary-light mb-4">
            My Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of my recent full-stack projects built with modern
            technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
              whileHover={{ y: -10 }}
            >
              <div className="relative glass rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/20">
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-[shimmer_2s_linear_infinite] p-[1px]">
                    <div className="w-full h-full rounded-3xl bg-dark" />
                  </div>
                </div>
                
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                  {/* Animated icon */}
                  <motion.div 
                    className="text-6xl opacity-50 group-hover:opacity-80 transition-all duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {index === 0 ? "🌐" : index === 1 ? "📦" : "🍽️"}
                  </motion.div>
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col relative z-10">
                  <h4 className="text-xl font-semibold text-white mb-1 group-hover:text-primary-light transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-primary-light text-sm mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 5).map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary-light border border-primary/20 group-hover:border-primary/50 transition-all duration-300"
                        style={{ transitionDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary-light border border-primary/20">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-center text-sm font-medium hover:shadow-lg hover:shadow-primary/30 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubClient}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-all"
                      whileHover={{ scale: 1.05, rotate: 360 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
