"use client";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com",
      label: "GitHub",
      color: "hover:text-rose-400",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/m-mardlian-nurofiq-822348282/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BTyBtkJ9GTdSzH26nGAu7ew%3D%3D",
      label: "LinkedIn",
      color: "hover:text-emerald-400",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com",
      label: "Instagram",
      color: "hover:text-purple-400",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-950/80 backdrop-blur-sm py-12 border-t border-gray-800"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <Link
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-rose-300 to-emerald-300 bg-clip-text text-transparent font-mono"
            >
              Mardlian
            </Link>
            <p className="text-gray-400 mt-2 font-mono">
              Building digital experiences that matter
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${social.color} transition-all duration-300 text-xl`}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 font-mono"
        >
          <p>&copy; {currentYear} Mardlian. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
