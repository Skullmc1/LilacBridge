// app/components/Footer.tsx
"use client"; // This is a Client Component

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const slideInFromBottom = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const wiggleAnimation = {
  rotate: [0, -10, 10, -10, 10, 0], // Wiggle effect
  transition: { duration: 0.5, ease: "easeInOut" },
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={slideInFromBottom}
      className="fixed bottom-0 left-0 w-full z-50 backdrop-blur-md bg-background/50 border-t border-primary/10"
    >
      <div className="container mx-auto p-6 relative">
        {/* Copyright (Left) */}
        <p className="text-sm text-primary absolute left-6 top-1/2 transform -translate-y-1/2">
          © 2025 LilacBridge. All rights reserved.
        </p>

        {/* Social Links (Right) */}
        <div className="flex gap-6 absolute right-6 top-1/2 transform -translate-y-1/2">
          <motion.div whileHover={wiggleAnimation}>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </motion.div>
          <motion.div whileHover={wiggleAnimation}>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </motion.div>
          <motion.div whileHover={wiggleAnimation}>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>
          <motion.div whileHover={wiggleAnimation}>
            <a
              href="mailto:youremail@example.com"
              className="text-primary hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
