"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2" aria-label="Home">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-mono font-semibold bg-clip-text text-transparent bg-gradient-to-r from-rose-300 to-emerald-300 hover:from-rose-400 hover:to-emerald-400 transition-all"
            >
              Mardlian
            </motion.span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative text-gray-400 hover:text-gray-100 px-1 py-2 text-sm font-mono transition-colors duration-200 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-rose-400 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </motion.a>
            ))}

            <motion.a
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              href="#contact"
              className="ml-4 px-4 py-2 rounded-md bg-gradient-to-r from-rose-500 to-emerald-500 text-white text-sm font-mono font-medium hover:from-rose-600 hover:to-emerald-600 transition-all duration-200 shadow-sm"
            >
              Get in Touch
            </motion.a>
          </div>

          {/* Mobile menu button with animated hamburger icon */}
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:hidden text-gray-400 hover:text-gray-100 focus:outline-none z-50"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <div className="w-6 h-6 relative">
              <motion.span
                className="absolute block h-0.5 w-6 bg-current"
                animate={{
                  y: isOpen ? 6 : 0,
                  rotate: isOpen ? 45 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute block h-0.5 w-6 bg-current mt-2"
                animate={{
                  opacity: isOpen ? 0 : 1,
                }}
                transition={{ duration: 0.1 }}
              />
              <motion.span
                className="absolute block h-0.5 w-6 bg-current mt-4"
                animate={{
                  y: isOpen ? -6 : 0,
                  rotate: isOpen ? -45 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-gray-950/90 backdrop-blur-sm z-40 md:hidden"
              onClick={toggleMenu}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              className="fixed top-0 right-0 w-64 h-full bg-gray-900/95 backdrop-blur-lg border-l border-gray-800 z-40 shadow-2xl md:hidden"
            >
              <div className="h-full flex flex-col justify-center px-8 py-20">
                <motion.div
                  className="flex flex-col space-y-8"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2,
                      },
                    },
                  }}
                >
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 24,
                          },
                        },
                      }}
                      className="text-gray-300 hover:text-white text-lg font-mono transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </motion.a>
                  ))}

                  <motion.a
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 24,
                          delay: 0.4,
                        },
                      },
                    }}
                    href="#contact"
                    className="mt-8 px-6 py-3 rounded-md bg-gradient-to-r from-rose-500 to-emerald-500 text-white font-mono font-medium hover:from-rose-600 hover:to-emerald-600 transition-all duration-200 shadow-sm text-center"
                    onClick={toggleMenu}
                  >
                    Get in Touch
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
