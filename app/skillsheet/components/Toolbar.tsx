// app/skillsheet/components/Toolbar.tsx
"use client"; // Mark as a Client Component for interactivity

import { motion, useAnimation } from "framer-motion";
import { Share, Download, RefreshCw, Sun, Moon } from "lucide-react"; // Import Lucide icons
import { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

type ToolbarProps = {
  onReset: () => void; // Reset callback
  onDownload: () => void; // Download callback
  onToggleTheme: () => void; // Theme toggle callback
  isDarkTheme: boolean; // Current theme state
};

export default function Toolbar({
  onReset,
  onDownload,
  onToggleTheme,
  isDarkTheme,
}: ToolbarProps) {
  // Animation controls for the glow effect
  const controls = useAnimation();

  // Handle Share button click
  const handleShare = async () => {
    try {
      await navigator.share({
        title: "SkillSheet",
        text: "Check out this awesome resume builder!",
        url: "https://www.loschicos.online",
      });
    } catch (error) {
      console.error("Sharing failed:", error);
    }
  };

  // Handle Download button click
  const handleDownload = async () => {
    const resumeElement = document.getElementById("resume-preview"); // Get the resume element
    if (!resumeElement) return;

    // Convert the resume element to a canvas
    const canvas = await html2canvas(resumeElement, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    // Create a PDF
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("resume.pdf"); // Download the PDF

    onDownload(); // Trigger the onDownload callback
  };

  // Glow animation at large intervals
  useEffect(() => {
    const glowAnimation = async () => {
      while (true) {
        await controls.start({
          boxShadow: "0 0 10px 3px rgba(59, 130, 246, 0.5)", // Blue glow
          transition: { duration: 1, ease: "easeInOut" },
        });
        await controls.start({
          boxShadow: "0 0 0px 0px rgba(59, 130, 246, 0)", // Remove glow
          transition: { duration: 1, ease: "easeInOut" },
        });
        await new Promise((resolve) => setTimeout(resolve, 10000)); // Wait 10 seconds
      }
    };

    glowAnimation();
  }, [controls]);

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }} // Start off-screen to the right
      animate={{ x: 0, opacity: 1 }} // Slide in and fade in
      transition={{ duration: 0.5, delay: 0.2 }} // Smooth transition
      className="fixed right-0 top-0 h-full flex items-center justify-center z-50 pr-4" // Perfect vertical centering
    >
      {/* Modern Container */}
      <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-white/10 flex flex-col gap-3">
        {/* Theme Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.9 }} // Scale down on tap
          onClick={onToggleTheme}
          className="p-3 bg-gray-500 text-white rounded-full shadow-lg hover:bg-gray-600 transition-colors relative"
          aria-label="Toggle Theme"
        >
          {isDarkTheme ? <Moon size={20} /> : <Sun size={20} />}
        </motion.button>

        {/* Share Button */}
        <motion.button
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.9 }} // Scale down on tap
          onClick={handleShare}
          className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors relative"
          aria-label="Share"
          animate={controls} // Apply glow animation
        >
          <Share size={20} />
        </motion.button>

        {/* Download Button */}
        <motion.button
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.9 }} // Scale down on tap
          onClick={handleDownload}
          className="p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors relative"
          aria-label="Download"
          animate={controls} // Apply glow animation
        >
          <Download size={20} />
        </motion.button>

        {/* Reset Button */}
        <motion.button
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.9 }} // Scale down on tap
          onClick={onReset}
          className="p-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-colors relative"
          aria-label="Reset"
          animate={controls} // Apply glow animation
        >
          <RefreshCw size={20} />
        </motion.button>
      </div>
    </motion.div>
  );
}
