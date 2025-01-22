"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // Import Lucide icon

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

export default function NotFoundPage() {
  const [lilacs, setLilacs] = useState<React.CSSProperties[]>([]);
  const [showContent, setShowContent] = useState(false);

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

  // Trigger content animation
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 overflow-hidden">
      {/* Multiple Rotating Lilac SVGs */}
      {lilacs.map((style, index) => (
        <LilacSVG key={index} style={style} />
      ))}

      {/* Header Overlay Space */}
      <div className="h-24"></div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6 relative z-10 flex flex-col justify-center items-center text-center">
        {/* 404 Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="text-9xl font-bold text-white mb-4"
        >
          404
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-bold text-white mb-8"
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-white mb-12 max-w-2xl"
        >
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track!
        </motion.p>

        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: showContent ? 1 : 0, scale: showContent ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/"
            className="bg-white text-purple-500 px-8 py-3 rounded-lg hover:bg-purple-100 transition-colors flex items-center justify-center gap-2 w-fit mx-auto"
          >
            <ArrowLeft className="w-5 h-5" /> Go Back Home
          </Link>
        </motion.div>
      </main>

      {/* Footer Overlay Space */}
      <div className="h-24"></div>
    </div>
  );
}
