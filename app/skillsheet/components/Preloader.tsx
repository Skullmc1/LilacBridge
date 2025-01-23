// app/skillsheet/components/Preloader.tsx
"use client"; // Mark as a Client Component for interactivity

import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }} // Start fully visible
      animate={{ opacity: 1 }} // Stay visible
      exit={{ opacity: 0 }} // Fade out on exit
      transition={{ duration: 0.5 }} // Smooth transition
      className="fixed inset-0 flex items-center justify-center bg-background z-50"
    >
      {/* Morphing Cube */}
      <motion.div
        className="relative w-20 h-20"
        animate={{
          rotate: [0, 90, 180, 270, 360], // Rotate the cube
          scale: [1, 1.2, 1, 0.8, 1], // Scale the cube
          borderRadius: ["20%", "50%", "20%", "50%", "20%"], // Morph the shape
        }}
        transition={{
          duration: 2, // Animation duration
          repeat: Infinity, // Repeat infinitely
          ease: "easeInOut", // Smooth easing
        }}
      >
        {/* Cube Faces */}
        <motion.div
          className="absolute inset-0 bg-blue-600"
          animate={{
            rotate: [0, 90, 180, 270, 360], // Rotate each face
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-blue-600"
          animate={{
            rotate: [90, 180, 270, 360, 450], // Rotate each face
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-blue-600"
          animate={{
            rotate: [180, 270, 360, 450, 540], // Rotate each face
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Project Name */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }} // Start slightly below and hidden
        animate={{ y: 0, opacity: 1 }} // Move up and fade in
        transition={{ delay: 0.5, duration: 0.5 }} // Slight delay and smooth transition
        className="absolute bottom-8 text-2xl font-bold text-primary"
      >
        SkillSheet
      </motion.h1>
    </motion.div>
  );
}
