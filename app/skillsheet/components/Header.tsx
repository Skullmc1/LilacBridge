// app/skillsheet/components/Header.tsx
"use client"; // Mark as a Client Component for interactivity

import { motion } from "framer-motion";
import { Menu, Settings, User } from "lucide-react"; // Import Lucide icons

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }} // Start off-screen
      animate={{ y: 0, opacity: 1 }} // Animate into view
      transition={{ type: "spring", stiffness: 100, damping: 15 }} // Spring animation
      className="fixed top-4 inset-x-0 mx-auto bg-blue-600 text-white rounded-full px-8 py-4 flex items-center justify-between shadow-lg z-50"
      style={{ width: "90%", maxWidth: "800px" }} // Set a max width and make it responsive
    >
      {/* Left Side: Menu Icon */}
      <motion.div
        whileHover={{ scale: 1.1 }} // Scale up on hover
        whileTap={{ scale: 0.9 }} // Scale down on tap
        className="cursor-pointer"
      >
        <Menu size={24} />
      </motion.div>

      {/* Center: Project Name */}
      <motion.h1
        initial={{ scale: 0 }} // Start small
        animate={{ scale: 1 }} // Scale up
        transition={{ delay: 0.2 }} // Slight delay
        className="text-2xl font-bold flex items-center gap-2"
      >
        SkillSheet
      </motion.h1>

      {/* Right Side: Icons */}
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, x: 20 }} // Start hidden and slightly to the right
        animate={{ opacity: 1, x: 0 }} // Fade in and slide left
        transition={{ delay: 0.4 }} // Slight delay
      >
        <motion.div
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.9 }} // Scale down on tap
          className="cursor-pointer"
        >
          <Settings size={24} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.9 }} // Scale down on tap
          className="cursor-pointer"
        >
          <User size={24} />
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
