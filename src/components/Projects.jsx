"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Sesimonesia - Informasi Gempa Dunia",
      description:
        "Sebuah website informatif yang menampilkan data gempa bumi terkini di seluruh dunia. Dibangun menggunakan React untuk antarmuka dinamis dan Tailwind CSS untuk styling yang responsif. Data gempa diperoleh melalui API dari USGS (United States Geological Survey).",
      tags: [
        "React",
        "Tailwind CSS",
        "API",
        "USGS",
        "Data Visualisasi",
        "Frontend Development",
      ],
      image: "../assets/proyek1.png",
      github: "#",
      demo: "https://seismonesia.vercel.app/",
    },
    {
      title: "Mental Care",
      description:
        "An expert system for mental health diagnosis using Flask and Tailwind CSS. It leverages the Dempster-Shafer theory to provide probabilistic and data-driven assessments of user symptoms.",
      tags: ["Flask", "Tailwind CSS", "Dempster-Shafer", "Expert System"],
      image: "../assets/proyek2.png",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-300 to-emerald-300 mb-2 sm:mb-3 md:mb-4 font-mono">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-md sm:max-w-xl md:max-w-2xl mx-auto font-mono px-2 sm:px-0">
            A selection of my recent work showcasing fullstack capabilities and
            design sensibility
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 bg-gradient-to-r from-rose-500/50 via-purple-500/50 to-emerald-500/50 mx-auto mt-4 sm:mt-5 md:mt-6 rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                damping: 10,
                stiffness: 100,
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="relative group overflow-hidden rounded-xl sm:rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-rose-400/30 transition-all duration-500 shadow-lg hover:shadow-rose-500/10"
            >
              {/* Project image */}
              <div className="h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 to-emerald-900/20 group-hover:opacity-80 transition-opacity duration-500 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Project content */}
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-rose-300 mb-1 sm:mb-2 group-hover:text-rose-200 transition-colors font-mono">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-3 sm:mb-4 md:mb-5 leading-relaxed font-mono">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-5 md:mb-6">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] xs:text-xs rounded-full bg-gray-800 text-emerald-300 hover:bg-emerald-900/30 transition-colors font-mono"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-col xs:flex-row gap-2 sm:gap-3">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.github}
                    className="flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors font-mono text-xs sm:text-sm"
                  >
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                    Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.demo}
                    className="flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-gradient-to-r from-rose-500 to-emerald-500 text-white hover:from-rose-600 hover:to-emerald-600 transition-all font-mono text-xs sm:text-sm"
                  >
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
