"use client";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function Contact() {
  const [chatMessages, setChatMessages] = useState([
    {
      role: "bot",
      content:
        "Hello! I'm here to help you get in touch with Mardlian. What would you like to know?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      title: "Email",
      value: "mmardliannurofiq@gmail.com",
      href: "mailto:mmardliannurofiq@gmail.com?subject=Pertanyaan%20dari%20Website&body=Halo%2C%20saya%20ingin%20bertanya%20tentang%20produk%20ini.%20Terima%20kasih.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
          />
        </svg>
      ),
      title: "Whatsapp",
      value: "+62 857 9163 5708",
      href: "https://wa.me/6285791635708",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      title: "Location",
      value: "Surabaya, Indonesia",
      href: "https://maps.google.com",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      href: "https://github.com/yourusername",
      color: "hover:bg-gray-800 hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      href: "https://www.linkedin.com/in/mardlian/",
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      name: "Twitter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      ),
      href: "https://www.instagram.com/mrdlyand/#",
      color: "hover:bg-blue-400 hover:text-white",
    },
  ];

  const experienceData = {
    years: "2+ years",
    specialties: ["Laravel", "Next.js", "React", "Tailwind CSS"],
    projects: "10+ completed",
    clients: "Startups to enterprises",
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      role: "user",
      content: inputMessage,
    };
    setChatMessages([...chatMessages, userMessage]);
    setInputMessage("");

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      setChatMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  const generateBotResponse = (message) => {
    const lowerMessage = message.toLowerCase();

    if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("reach") ||
      lowerMessage.includes("get in touch")
    ) {
      return {
        role: "bot",
        content:
          "You can contact Mardlian through:\n- Email: mardlian@example.com\n- Phone: +62 812 3456 7890\n- LinkedIn: linkedin.com/in/mardlian\nOr use the contact cards above for quick access!",
      };
    } else if (
      lowerMessage.includes("social") ||
      lowerMessage.includes("media") ||
      lowerMessage.includes("github") ||
      lowerMessage.includes("linkedin") ||
      lowerMessage.includes("twitter")
    ) {
      return {
        role: "bot",
        content:
          "Mardlian is active on these platforms:\n- GitHub: github.com/yourusername\n- LinkedIn: linkedin.com/in/mardlian\n- Twitter: twitter.com/yourusername\nCheck the social links section above to connect!",
      };
    } else if (
      lowerMessage.includes("experience") ||
      lowerMessage.includes("work") ||
      lowerMessage.includes("background") ||
      lowerMessage.includes("years")
    ) {
      return {
        role: "bot",
        content: `Mardlian has ${
          experienceData.years
        } of professional experience specializing in ${experienceData.specialties.join(
          ", "
        )}. Has completed ${experienceData.projects} projects for ${
          experienceData.clients
        }. Would you like more specific details about any area?`,
      };
    } else if (
      lowerMessage.includes("hi") ||
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hey")
    ) {
      return {
        role: "bot",
        content:
          "Hello there! How can I help you connect with Mardlian today? You can ask about contact methods, social media, or work experience.",
      };
    } else {
      return {
        role: "bot",
        content:
          "I'm not sure I understand. You can ask me about:\n- Contact information\n- Social media links\n- Work experience\nWhat would you like to know?",
      };
    }
  };

  return (
    <section id="contact" className="py-28 px-6 bg-gray-950 relative">
      <div className="max-w-6xl mx-auto">
        {/* Floating Chat Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-lg ${
            isChatOpen
              ? "bg-rose-600"
              : "bg-gradient-to-br from-rose-500 to-emerald-500"
          } text-white`}
          aria-label="Chat assistant"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </motion.button>

        {/* Chat Window */}
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-24 right-8 w-80 bg-gray-900 rounded-lg shadow-xl border border-gray-800 flex flex-col z-50 overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-rose-900/50 to-emerald-900/50 p-4 border-b border-gray-800">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-br from-rose-500 to-emerald-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white font-mono">
                  Contact Assistant
                </h3>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto max-h-96">
              {chatMessages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: message.role === "user" ? 20 : -20,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`mb-4 flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs rounded-lg px-4 py-2 ${
                      message.role === "user"
                        ? "bg-rose-600/20 text-white"
                        : "bg-gray-800/80 text-gray-300"
                    } font-mono text-sm`}
                  >
                    {message.content.split("\n").map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form
              onSubmit={handleSendMessage}
              className="p-4 border-t border-gray-800"
            >
              <div className="flex">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask about contact info..."
                  className="flex-1 bg-gray-800 text-white text-sm rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500/50 font-mono"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-br from-rose-500 to-emerald-500 text-white px-4 py-2 rounded-r-lg hover:opacity-90 transition-opacity font-mono text-sm"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-300 to-emerald-300 mb-4 font-mono">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-mono">
            Whether you have a project in mind or just want to chat about tech,
            I'd love to hear from you!
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-rose-500/50 via-purple-500/50 to-emerald-500/50 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact methods */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start space-x-4 p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-rose-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/10"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-rose-900/30 to-emerald-900/30 text-rose-400 group-hover:from-rose-700/30 group-hover:to-emerald-700/30 transition-colors">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-300 group-hover:text-rose-300 transition-colors font-mono">
                    {method.title}
                  </h3>
                  <p className="text-emerald-400/90 group-hover:text-emerald-300 transition-colors font-mono">
                    {method.value}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-auto text-gray-500 group-hover:text-rose-400 transition-colors"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.a>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <h4 className="text-lg font-medium text-gray-300 mb-4 font-mono">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-gray-800 text-gray-400 ${social.color} transition-all duration-300`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-300 to-emerald-300 mb-6 font-mono">
              My Experience
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-2 bg-gradient-to-br from-rose-900/30 to-emerald-900/30 rounded-lg text-rose-400 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-300 mb-1 font-mono">
                    Years of Experience
                  </h4>
                  <p className="text-emerald-400/90 font-mono">
                    {experienceData.years}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-gradient-to-br from-rose-900/30 to-emerald-900/30 rounded-lg text-rose-400 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-300 mb-1 font-mono">
                    Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {experienceData.specialties.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800/50 text-emerald-300 rounded-full text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-gradient-to-br from-rose-900/30 to-emerald-900/30 rounded-lg text-rose-400 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-300 mb-1 font-mono">
                    Projects Completed
                  </h4>
                  <p className="text-emerald-400/90 font-mono">
                    {experienceData.projects}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-gradient-to-br from-rose-900/30 to-emerald-900/30 rounded-lg text-rose-400 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-300 mb-1 font-mono">
                    Client Types
                  </h4>
                  <p className="text-emerald-400/90 font-mono">
                    {experienceData.clients}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
