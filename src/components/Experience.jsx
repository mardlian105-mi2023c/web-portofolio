"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const journey = [
    {
      title: "The Beginning",
      period: "2023-2024",
      description:
        "Started my journey in web development by learning HTML, CSS, and JavaScript fundamentals. Built simple static websites and began exploring PHP and MySQL for backend functionality.",
      tags: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: "Junior Web Development Scholarship",
      company: "Digitalent Komidigi",
      period: "2024",
      description:
        "This intensive program was a deep dive into modern web development, where I honed my skills in full-stack engineering. I took on individual and team-based projects, building functional applications from the ground up, tackling everything from UI/UX design and front-end development to robust back-end implementation. This experience has equipped me with the practical knowledge to deliver end-to-end web solutions.",
      tags: [
        "Fullstack",
        "Web Development",
        "UI/UX Design",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "React & Backend with AI Program Asah",
      company: "Dicoding & Accenture Indonesia",
      period: "2025",
      description:
        "Selected participant in the Asah Scholarship program, a collaboration between Dicoding and Accenture Indonesia. Focused on web development using React for the front-end and modern back-end technologies. Learned basic AI implementation for application features, Gen AI on AWS, and collaborated in a team to build a final project. In this program, I also learned about the cloud, databases with Amazon RDS, and basic AI implementation.",
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "AI",
        "Team Collaboration",
        "API Development",
        "AWS",
        "Cloud",
        "Amazon RDS",
        "Generative AI",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "Freelance Fullstack Developer",
      period: "2024-Present",
      description:
        "Transitioned to freelance work, expanding my skills across the full stack. Built modern applications with Laravel backend and Next.js frontends. Mastered state management, API development, and responsive design with Tailwind CSS. Learned to deploy applications on various platforms including VPS and serverless environments.",
      tags: [
        "Laravel",
        "Next.js",
        "Tailwind CSS",
        "REST API",
        "VPS Deployment",
        "State Management",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: "Current Focus",
      period: "2023-Present",
      description:
        "Deepening expertise in modern web technologies including TypeScript, advanced React patterns, and performance optimization. Exploring new backend technologies like Node.js and expanding into cloud architecture and microservices. Continuously learning through building complex applications and open-source contributions.",
      tags: [
        "TypeScript",
        "Advanced React",
        "Node.js",
        "Performance",
        "Cloud Architecture",
        "Microservices",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="journey" className="py-16 md:py-20 px-4 sm:px-6 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-300 to-emerald-300 mb-3 font-mono">
            My Development Journey
          </h2>
          <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-rose-500/50 via-purple-500/50 to-emerald-500/50 mx-auto mb-4 sm:mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4 font-mono">
            The evolution of my skills and experience as a fullstack developer
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="absolute left-3 sm:left-6 top-0 w-0.5 bg-gradient-to-b from-gray-800 via-gray-600 to-gray-800"
          />

          <div className="space-y-8 sm:space-y-10">
            {journey.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -5 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-10 sm:pl-16 group"
              >
                {/* Animated Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 45 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="absolute left-0 top-1 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-950 border-2 border-rose-400/80 z-10"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-2 h-2 rounded-full bg-rose-400"
                  />
                </motion.div>

                {/* Experience card */}
                <motion.div
                  whileHover={{
                    borderColor: "rgba(236, 72, 153, 0.5)",
                    boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.1)",
                  }}
                  className="bg-gray-900 p-5 sm:p-6 rounded-lg border border-gray-800 shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                    className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-emerald-500/20 pointer-events-none"
                  />

                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <motion.h3
                          whileHover={{
                            backgroundImage:
                              "linear-gradient(to right, #f472b6, #34d399)",
                            backgroundClip: "text",
                            color: "transparent",
                          }}
                          className="text-lg sm:text-xl font-semibold text-gray-100 mb-1 font-mono"
                        >
                          {step.title}
                        </motion.h3>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center text-gray-400 text-xs sm:text-sm gap-y-1 gap-x-4 font-mono">
                          {step.company && (
                            <motion.span
                              whileHover={{ color: "#f472b6" }}
                              className="flex items-center transition-colors mb-1 sm:mb-0"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-rose-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                              </svg>
                              {step.company}
                            </motion.span>
                          )}
                          <motion.span
                            whileHover={{ color: "#34d399" }}
                            className="flex items-center transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-emerald-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {step.period}
                          </motion.span>
                        </div>
                      </div>
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          background:
                            "linear-gradient(135deg, rgba(236, 72, 153, 0.7), rgba(52, 211, 153, 0.7))",
                        }}
                        className="p-1 sm:p-2 rounded-md bg-gradient-to-br from-rose-900/50 to-emerald-900/50 text-rose-300 transition-all self-start sm:self-auto"
                      >
                        {step.icon}
                      </motion.div>
                    </div>

                    <motion.p
                      whileHover={{ x: 3 }}
                      className="text-gray-300 text-sm sm:text-base my-4 sm:my-6 leading-relaxed font-mono transition-all"
                    >
                      {step.description}
                    </motion.p>

                    <div className="flex flex-wrap gap-2">
                      {step.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          whileHover={{
                            scale: 1.05,
                            background:
                              "linear-gradient(90deg, rgba(236, 72, 153, 0.2), rgba(52, 211, 153, 0.2))",
                            color: "#fff",
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs rounded-full bg-gray-800 text-gray-300 font-mono cursor-default"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
