"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";

export default function Experience() {
  const { experience, education } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-primary-light mb-4">
            My Journey
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">
            Experience & <span className="gradient-text">Education</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-semibold text-white">
                Work Experience
              </h4>
            </div>

            <div className="relative pl-8 border-l-2 border-primary/30">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative mb-8 last:mb-0 group"
                  whileHover={{ x: 5 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary group-hover:scale-150 transition-transform duration-300" />

                  <div className="relative glass rounded-2xl p-6 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/20 overflow-hidden">
                    {/* Animated gradient border on hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-[shimmer_2s_linear_infinite] p-[1px]">
                        <div className="w-full h-full rounded-2xl bg-dark" />
                      </div>
                    </div>
                    
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl pointer-events-none" />
                    
                    <div className="relative z-10">
                      <span className="text-primary-light text-sm">
                        {exp.period}
                      </span>
                      <h5 className="text-xl font-semibold text-white mt-1 group-hover:text-primary-light transition-colors duration-300">
                        {exp.title}
                      </h5>
                      <p className="text-gray-400 mt-1">
                        {exp.company} • {exp.location}
                      </p>
                      <p className="text-gray-400 text-sm mt-3">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-secondary to-primary flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-semibold text-white">Education</h4>
            </div>

            <div className="relative pl-8 border-l-2 border-secondary/30">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative mb-8 last:mb-0 group"
                  whileHover={{ x: -5 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-secondary to-primary group-hover:scale-150 transition-transform duration-300" />

                  <div className="relative glass rounded-2xl p-6 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-secondary/20 overflow-hidden">
                    {/* Animated gradient border on hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-secondary via-primary to-secondary bg-[length:200%_100%] animate-[shimmer_2s_linear_infinite] p-[1px]">
                        <div className="w-full h-full rounded-2xl bg-dark" />
                      </div>
                    </div>
                    
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl pointer-events-none" />
                    
                    <div className="relative z-10">
                      <span className="text-secondary-light text-sm">
                        {edu.year}
                      </span>
                      <h5 className="text-xl font-semibold text-white mt-1 group-hover:text-secondary-light transition-colors duration-300">
                        {edu.degree}
                      </h5>
                      <p className="text-gray-400 mt-1">{edu.institution}</p>
                      <p className="text-primary-light text-sm mt-2">
                        {edu.result}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
