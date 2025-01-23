// app/skillsheet/components/Footer.tsx
"use client"; // Mark as a Client Component for interactivity

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react"; // Import Lucide icons

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }} // Start off-screen
      animate={{ y: 0, opacity: 1 }} // Animate into view
      transition={{ type: "spring", stiffness: 100, damping: 15 }} // Spring animation
      className="fixed bottom-4 inset-x-0 mx-auto bg-blue-600 text-white rounded-full px-8 py-4 flex items-center justify-between shadow-lg z-50"
      style={{ width: "90%", maxWidth: "800px" }} // Set a max width and make it responsive
    >
      {/* Left Side: Social Links */}
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, x: -20 }} // Start hidden and slightly to the left
        animate={{ opacity: 1, x: 0 }} // Fade in and slide right
        transition={{ delay: 0.2 }} // Slight delay
      >
        <motion.a
          href="https://github.com/Skullmc101"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.9 }} // Scale down on tap
          className="cursor-pointer"
        >
          <Github size={24} />
        </motion.a>
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.9 }} // Scale down on tap
          className="cursor-pointer"
        >
          <Linkedin size={24} />
        </motion.a>
      </motion.div>

      {/* Center: Copyright Text */}
      <motion.p
        initial={{ scale: 0 }} // Start small
        animate={{ scale: 1 }} // Scale up
        transition={{ delay: 0.4 }} // Slight delay
        className="text-sm"
      >
        © 2025 Qclid. All rights reserved.
      </motion.p>

      {/* Right Side: Contact Links */}
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, x: 20 }} // Start hidden and slightly to the right
        animate={{ opacity: 1, x: 0 }} // Fade in and slide left
        transition={{ delay: 0.2 }} // Slight delay
      >
        <motion.a
          href="mailto:skullmc101@gmail.com"
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.9 }} // Scale down on tap
          className="cursor-pointer"
        >
          <Mail size={24} />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.9 }} // Scale down on tap
          className="cursor-pointer"
        >
          <Twitter size={24} />
        </motion.a>
      </motion.div>
    </motion.footer>
  );
}
