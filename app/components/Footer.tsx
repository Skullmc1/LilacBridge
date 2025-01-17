// app/components/Footer.tsx
"use client"; // This is a Client Component

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

const slideInFromBottom = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = (selectedTheme: "light" | "dark") => {
    setTheme(selectedTheme);
  };

  // Apply theme classes to the body
  if (typeof document !== "undefined") {
    document.body.className = theme;
  }

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={slideInFromBottom}
      className="sticky bottom-0 z-50 backdrop-blur-md bg-background/50 border-t border-primary/10"
    >
      <div className="container mx-auto p-6 relative">
        {/* Copyright (Left) */}
        <p className="text-sm text-primary absolute left-6 top-1/2 transform -translate-y-1/2">
          © 2025 LilacBridge. All rights reserved.
        </p>

        {/* Theme Switcher (Center) */}
        <div className="flex justify-center">
          <div className="flex gap-4">
            {/* Light Theme Dot */}
            <button
              onClick={() => toggleTheme("light")}
              className="relative group"
            >
              <div
                className={`w-6 h-6 rounded-full bg-[#EEEEEE] border-2 border-primary`} // Permanent outline
              />
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white text-xs px-2 py-1 rounded">
                Light Theme
              </div>
            </button>

            {/* Dark Theme Dot */}
            <button
              onClick={() => toggleTheme("dark")}
              className="relative group"
            >
              <div
                className={`w-6 h-6 rounded-full bg-[#1E1E1E] border-2 ${
                  theme === "dark" ? "border-primary" : "border-transparent"
                }`}
              />
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white text-xs px-2 py-1 rounded">
                Dark Theme
              </div>
            </button>
          </div>
        </div>

        {/* Social Links (Right) */}
        <div className="flex gap-6 absolute right-6 top-1/2 transform -translate-y-1/2">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-primary hover:text-secondary transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
