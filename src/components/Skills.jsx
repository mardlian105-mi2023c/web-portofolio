"use client";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaPhp, FaLaravel } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiFlask,
} from "react-icons/si";

const programmingSkills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  {
    name: "Python",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        className="w-8 h-8"
      >
        <path
          fill="#3776AB"
          d="M63.9 1.5c-33.3 0-31.2 14.5-31.2 14.5l.1 15.1h31.6v4.5H21.9S2 32.5 2 65.8c0 33.4 17.7 32.3 17.7 32.3h10.6V82.3s-.6-17.7 17.3-17.7h29.5s16.7.3 16.7-16.1V17.7S95.9 1.5 63.9 1.5zM47 11.2c3.1 0 5.6 2.5 5.6 5.6s-2.5 5.6-5.6 5.6a5.6 5.6 0 1 1 0-11.2z"
        />
        <path
          fill="#FFD43B"
          d="M64.1 126.4c33.3 0 31.2-14.5 31.2-14.5l-.1-15.1H63.6v-4.5h42.6s19.9 3.1 19.9-30.2c0-33.4-17.7-32.3-17.7-32.3H97.8v15.8s.6 17.7-17.3 17.7H51c-16.7 0-16.7 16.1-16.7 16.1v31.2s-2.2 16.2 29.8 16.2zM81 116.7c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6a5.6 5.6 0 1 1 0 11.2z"
        />
      </svg>
    ),
  },
  { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
];

const frameworkSkills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
];

const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-orange-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Flask", icon: <SiFlask className="text-gray-300" /> },
];

const marqueeVariants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      ease: "linear",
      duration: 15,
      repeat: Infinity,
    },
  },
};

export default function Skills() {
  const renderMarquee = (skills) => (
    <div className="overflow-hidden relative group mb-12">
      {/* Enhanced fade gradient with subtle animation */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-gray-950 via-gray-950/90 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-gray-950 via-gray-950/90 to-transparent z-10"></div>

      <motion.div
        className="flex space-x-5 sm:space-x-7"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...skills, ...skills].map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -8,
              scale: 1.08,
              boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.3)",
            }}
            className="min-w-[140px] sm:min-w-[160px] flex-shrink-0 bg-gray-900/70 backdrop-blur-sm rounded-xl p-5 border border-gray-800 hover:border-rose-400/60 shadow-lg hover:shadow-rose-500/20 transition-all duration-300 h-full flex flex-col items-center group-hover:opacity-90 hover:!opacity-100"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 flex items-center justify-center text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-110">
              {skill.icon}
            </div>
            <h3 className="font-medium text-gray-200 text-sm sm:text-base text-center font-sans tracking-wider">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section
      id="skills"
      className="py-20 md:py-28 bg-gray-950 flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex flex-col items-center">
        {/* Enhanced Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-20 w-full"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-purple-300 to-emerald-300 mb-4 md:mb-5 font-sans tracking-tight">
            Technical Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-mono tracking-wide leading-relaxed">
            The tools and technologies I master to craft exceptional digital
            experiences
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-rose-500/60 via-purple-500/60 to-emerald-500/60 mx-auto mt-6 md:mt-8 rounded-full"
          ></motion.div>
        </motion.div>

        {/* Programming Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-2 w-full text-center"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-gray-300 mb-5 font-mono tracking-wider uppercase">
            <span className="bg-gradient-to-r from-rose-500/20 to-emerald-500/20 px-3 py-1 rounded-full">
              Language
            </span>
          </h3>
        </motion.div>
        <div className="w-full flex justify-center">
          {renderMarquee(programmingSkills)}
        </div>

        {/* Frameworks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-2 w-full text-center"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-gray-300 mb-5 font-mono tracking-wider uppercase">
            <span className="bg-gradient-to-r from-rose-500/20 to-emerald-500/20 px-3 py-1 rounded-full">
              Framework
            </span>
          </h3>
        </motion.div>
        <div className="w-full flex justify-center">
          {renderMarquee(frameworkSkills)}
        </div>

        {/* Backend & Databases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-2 w-full text-center"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-gray-300 mb-5 font-mono tracking-wider uppercase">
            <span className="bg-gradient-to-r from-rose-500/20 to-emerald-500/20 px-3 py-1 rounded-full">
              Backend & Database
            </span>
          </h3>
        </motion.div>
        <div className="w-full flex justify-center">
          {renderMarquee(backendSkills)}
        </div>
      </div>
    </section>
  );
}
