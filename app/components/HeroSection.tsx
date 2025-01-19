"use client"; // This is a Client Component

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Lilac SVG Component
const LilacSVG = ({ style }: { style: React.CSSProperties }) => {
  return (
    <motion.div
      style={style}
      animate={{ rotate: 360 }}
      transition={{
        duration: Math.random() * 20 + 10, // Random duration between 10s and 30s
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute opacity-20"
    >
      <img
        src="/images/lilac.svg"
        alt="Lilac"
        className="w-24 h-24" // Adjust size as needed
      />
    </motion.div>
  );
};

export default function HeroSection() {
  const [lilacs, setLilacs] = useState<React.CSSProperties[]>([]);

  // Generate random positions for lilacs
  useEffect(() => {
    const generateLilacs = () => {
      const newLilacs = [];
      for (let i = 0; i < 10; i++) {
        // Adjust the number of lilacs as needed
        const top = Math.random() * 100; // Random top position (0% to 100%)
        const left = Math.random() * 100; // Random left position (0% to 100%)
        newLilacs.push({ top: `${top}%`, left: `${left}%` });
      }
      setLilacs(newLilacs);
    };

    generateLilacs();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500">
      {/* Multiple Rotating Lilac SVGs */}
      {lilacs.map((style, index) => (
        <LilacSVG key={index} style={style} />
      ))}

      {/* Glass Morphism Content Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 bg-white/20 backdrop-blur-lg p-12 rounded-lg border border-white/10 shadow-lg"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl font-bold text-white mb-6"
        >
          Welcome to LilacBridge
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl text-white mb-8"
        >
          Where Creativity Meets Innovation
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            href="/projects"
            className="bg-white text-purple-500 px-8 py-3 rounded-lg hover:bg-purple-100 transition-colors flex items-center justify-center gap-2 w-fit mx-auto"
          >
            Explore Projects <ArrowRight size={20} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
