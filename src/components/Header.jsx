"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 dark:text-white"
        >
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
            DevFolio
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#about"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition"
          >
            Contact
          </Link>
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          {/* Mobile menu button would go here */}
        </div>
      </div>
    </header>
  );
}
