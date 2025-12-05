"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";

const FrontendIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 6H10C9.44772 6 9 6.44772 9 7V17C9 17.5523 9.44772 18 10 18H14C14.5523 18 15 17.5523 15 17V7C15 6.44772 14.5523 6 14 6ZM10 4C8.34315 4 7 5.34315 7 7V17C7 18.6569 8.34315 20 10 20H14C15.6569 20 17 18.6569 17 17V7C17 5.34315 15.6569 4 14 4H10Z"
      fill="currentColor"
    />
    <path
      d="M6 7.45936L3.4932 7.04156C1.6646 6.73679 0 8.14692 0 10.0007V14.918C0 16.7718 1.6646 18.1819 3.4932 17.8772L6 17.4594V15.4318L3.1644 15.9044C2.55487 16.006 2 15.5359 2 14.918V10.0007C2 9.3828 2.55487 8.91276 3.1644 9.01435L6 9.48695V7.45936Z"
      fill="currentColor"
    />
    <path
      d="M18 7.45936L20.5068 7.04156C22.3354 6.73679 24 8.14692 24 10.0007V14.918C24 16.7718 22.3354 18.1819 20.5068 17.8772L18 17.4594V15.4318L20.8356 15.9044C21.4451 16.006 22 15.5359 22 14.918V10.0007C22 9.3828 21.4451 8.91276 20.8356 9.01435L18 9.48695V7.45936Z"
      fill="currentColor"
    />
  </svg>
);

const BackendIcon = () => (
  <span
    dangerouslySetInnerHTML={{
      __html: '<ion-icon name="server-outline" style="font-size: 24px; color: white;"></ion-icon>',
    }}
  />
);

const ToolsIcon = () => (
  <span
    dangerouslySetInnerHTML={{
      __html: '<ion-icon name="cog-outline" style="font-size: 24px; color: white;"></ion-icon>',
    }}
  />
);

export default function Skills() {
  const { skills } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    { name: "Frontend", skills: skills.frontend, icon: <FrontendIcon />, gradient: "from-primary to-secondary" },
    { name: "Backend", skills: skills.backend, icon: <BackendIcon />, gradient: "from-secondary to-primary" },
    { name: "Tools", skills: skills.tools, icon: <ToolsIcon />, gradient: "from-primary via-secondary to-primary" },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-secondary/5 to-transparent" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-primary-light mb-4">
            My Skills
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">
            Technical <span className="gradient-text">Expertise</span>
          </h3>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="group"
              whileHover={{ y: -10 }}
            >
              <div className="relative glass rounded-3xl p-8 h-full overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/20">
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.gradient} bg-[length:200%_100%] animate-[shimmer_2s_linear_infinite] p-[1px]`}>
                    <div className="w-full h-full rounded-3xl bg-dark" />
                  </div>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-3xl pointer-events-none" />

                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h4 className="text-2xl font-semibold text-white group-hover:text-primary-light transition-colors duration-300">
                      {category.name}
                    </h4>
                  </div>

                  {/* Skills Tags - Modern minimal style */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.2 + skillIndex * 0.05,
                        }}
                        className="relative group/skill"
                      >
                        <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:border-primary/50 hover:text-white hover:bg-primary/10 transition-all duration-300 cursor-default">
                          {skill.name}
                          {/* Skill level indicator dot */}
                          <span 
                            className={`ml-2 inline-block w-2 h-2 rounded-full ${
                              skill.level >= 85 ? 'bg-green-400' : 
                              skill.level >= 70 ? 'bg-primary-light' : 
                              skill.level >= 50 ? 'bg-yellow-400' : 'bg-gray-400'
                            }`}
                          />
                        </div>
                      </motion.div>
                    ))}
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
