"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

export default function AboutPage() {
  const [showWhoAmI, setShowWhoAmI] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showWhatCanIDo, setShowWhatCanIDo] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
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

  // Trigger animations sequentially
  useEffect(() => {
    const timer1 = setTimeout(() => setShowWhoAmI(true), 500);
    const timer2 = setTimeout(() => setShowDescription(true), 2500);
    const timer3 = setTimeout(() => setShowWhatCanIDo(true), 4000);
    const timer4 = setTimeout(() => setShowSkills(true), 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
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
      <main className="flex-grow container mx-auto p-6 relative z-10">
        {/* Who Am I? (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: showWhoAmI ? 1 : 0, x: showWhoAmI ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="text-left mb-8 ml-[10%]"
        >
          <h1 className="text-6xl font-bold text-white">
            Who am I?
            {showWhoAmI && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                }}
                className="ml-2"
              >
                |
              </motion.span>
            )}
          </h1>
        </motion.div>

        {/* Description Tile (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: showDescription ? 1 : 0,
            x: showDescription ? 0 : 50,
          }}
          transition={{ duration: 0.8 }}
          className="text-right mb-8 mr-[10%]"
        >
          <div className="bg-white/20 backdrop-blur-lg p-8 rounded-lg border border-white/10 shadow-lg hover:shadow-xl transition-shadow max-w-2xl mx-auto">
            <p className="text-white text-lg leading-relaxed">
              <span className="text-5xl font-bold float-left mr-2 -mt-1 text-white">
                Hi,
              </span>
              I'm a passionate developer and designer with a love for creating
              beautiful and functional websites. I enjoy working with modern
              technologies like Next.js, Tailwind CSS, and Framer Motion to
              bring ideas to life. When I'm not coding, you can find me
              exploring new design trends, experimenting with animations, or
              enjoying a good cup of coffee.
            </p>
          </div>
        </motion.div>

        {/* What Can I Do? (Left) */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: showWhatCanIDo ? 1 : 0,
            scale: showWhatCanIDo ? 1 : 0.5,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="text-left text-4xl font-bold text-white mb-8 ml-[10%]"
        >
          What can I do?
        </motion.h2>

        {/* Skills Tile (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: showSkills ? 1 : 0, x: showSkills ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-right mr-[10%]"
        >
          <div className="bg-white/20 backdrop-blur-lg p-8 rounded-lg border border-white/10 shadow-lg hover:shadow-xl transition-shadow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">My Skills</h3>
            <ul className="text-white text-lg space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Next.js & React
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Tailwind CSS
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Framer Motion
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                TypeScript
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                UI/UX Design
              </li>
            </ul>
          </div>
        </motion.div>
      </main>

      {/* Footer Overlay Space */}
      <div className="h-24"></div>
    </div>
  );
}
