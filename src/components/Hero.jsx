"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [typedName, setTypedName] = useState("");
  const [typedGreeting, setTypedGreeting] = useState("");
  const fullName = "Mardlian";
  const greeting = "Hello, I'm";
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Greeting typing effect
    let i = 0;
    const greetingInterval = setInterval(() => {
      if (i < greeting.length) {
        setTypedGreeting(greeting.substring(0, i + 1));
        i++;
      } else {
        clearInterval(greetingInterval);
        // Start name typing after greeting finishes
        startNameTyping();
      }
    }, 100);

    const startNameTyping = () => {
      let j = 0;
      const nameInterval = setInterval(() => {
        if (j < fullName.length) {
          setTypedName(fullName.substring(0, j + 1));
          j++;
        } else {
          clearInterval(nameInterval);
          setShowContent(true);
        }
      }, 150);
    };

    return () => {
      clearInterval(greetingInterval);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-950 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-gradient-to-br from-rose-800 via-fuchsia-900 to-purple-900 blur-[100px] animate-pulse md:blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full bg-gradient-to-tr from-emerald-800 via-teal-900 to-gray-800 blur-[100px] animate-pulse md:blur-3xl"
        />
      </div>

      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl">
        {/* Greeting with typing effect */}
        <div className="min-h-[32px] md:min-h-[40px] flex items-center justify-center">
          <h2 className="text-base md:text-lg text-rose-300 font-mono mb-2 md:mb-4 tracking-wide">
            {typedGreeting}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="ml-0.5"
            >
              |
            </motion.span>
          </h2>
        </div>

        {/* Typing Name */}
        <div className="min-h-[80px] md:min-h-[120px] flex items-center justify-center">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-rose-300 via-white to-emerald-200 tracking-wide"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {typedName}
            {typedName && !showContent && (
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="ml-1"
              >
                |
              </motion.span>
            )}
          </motion.h1>
        </div>

        {showContent && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-4 md:mb-6 font-mono"
            >
              I craft{" "}
              <motion.span
                className="text-white font-semibold"
                animate={{
                  textShadow: [
                    "0 0 8px rgba(255,255,255,0)",
                    "0 0 8px rgba(255,255,255,0.3)",
                    "0 0 8px rgba(255,255,255,0)",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 3, delay: 1 }}
              >
                exceptional interfaces
              </motion.span>{" "}
              with{" "}
              <motion.span
                className="text-emerald-300 font-semibold"
                animate={{
                  textShadow: [
                    "0 0 8px rgba(110,231,183,0)",
                    "0 0 8px rgba(110,231,183,0.3)",
                    "0 0 8px rgba(110,231,183,0)",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 3, delay: 1.2 }}
              >
                clean architecture
              </motion.span>{" "}
              and{" "}
              <motion.span
                className="text-rose-300 font-semibold"
                animate={{
                  textShadow: [
                    "0 0 8px rgba(251,113,133,0)",
                    "0 0 8px rgba(251,113,133,0.3)",
                    "0 0 8px rgba(251,113,133,0)",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 3, delay: 1.4 }}
              >
                thoughtful design
              </motion.span>
              .
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base md:text-lg text-gray-400 mb-8 md:mb-10 font-mono"
            >
              Specialized in{" "}
              <span className="text-rose-400 font-medium">Laravel</span> &{" "}
              <span className="text-emerald-300 font-medium">Next.js</span>{" "}
              applications.
            </motion.div>

            {/* Elegant Transparent Button with Border Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center font-mono"
            >
              <motion.a
                initial={{ scale: 0.95 }}
                animate={{
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
                whileTap={{ scale: 0.98 }}
                href="#journey"
                className="relative px-8 py-3.5 rounded-lg font-medium transition-all overflow-hidden"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  color: "#e2e8f0",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                {/* Animated border elements */}
                <motion.span
                  className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-400 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                  initial={{ x: "100%" }}
                  whileHover={{ x: "-100%" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.span
                  className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-rose-400 to-transparent"
                  initial={{ y: "-100%" }}
                  whileHover={{ y: "100%" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.span
                  className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-emerald-400 to-transparent"
                  initial={{ y: "100%" }}
                  whileHover={{ y: "-100%" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Button text with subtle glow */}
                <motion.span
                  className="relative z-10 flex items-center justify-center gap-2"
                  animate={{
                    textShadow: [
                      "0 0 8px rgba(255,255,255,0)",
                      "0 0 12px rgba(255,255,255,0.1)",
                      "0 0 8px rgba(255,255,255,0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  View My Work
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{
                      x: [0, 4, 0],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </motion.svg>
                </motion.span>

                {/* Subtle background shimmer */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0"
                  whileHover={{
                    opacity: 1,
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "linear",
                  }}
                />
              </motion.a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-16 md:mt-24"
            >
              <div className="flex flex-col items-center space-y-2">
                <motion.p
                  className="text-xs text-gray-500 tracking-widest font-mono"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  SCROLL TO EXPLORE
                </motion.p>
                <motion.div
                  animate={{
                    y: [0, 12, 0],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1.5 }}
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
