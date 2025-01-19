"use client"; // This is a Client Component

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Flower2,
  House,
  LibraryBig,
  CircleUserRound,
  PhoneCall,
} from "lucide-react";

const slideInFromTop = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const wiggleAnimation = {
  rotate: [0, -10, 10, -10, 10, 0], // Wiggle effect
  transition: { duration: 0.5, ease: "easeInOut" },
};

export default function Header({ currentPage }: { currentPage: string }) {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={slideInFromTop}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-background/50 border-b border-primary/10"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo with Flower2 icon */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div whileHover={wiggleAnimation}>
            <Flower2 className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
          </motion.div>
          <motion.h1
            whileHover={wiggleAnimation}
            className="text-2xl font-bold text-accent group-hover:text-white transition-colors"
          >
            LilacBridge
          </motion.h1>
        </Link>

        {/* Navigation Links with Lucide Icons */}
        <nav className="flex gap-8">
          <motion.div whileHover={wiggleAnimation}>
            <Link
              href="/"
              className={`flex items-center gap-2 ${
                currentPage === "home" ? "text-secondary" : "text-accent"
              } hover:text-white transition-colors`}
            >
              <House className="w-6 h-6" />
              <span>Home</span>
            </Link>
          </motion.div>
          <motion.div whileHover={wiggleAnimation}>
            <Link
              href="/projects"
              className={`flex items-center gap-2 ${
                currentPage === "projects" ? "text-secondary" : "text-accent"
              } hover:text-white transition-colors`}
            >
              <LibraryBig className="w-6 h-6" />
              <span>Projects</span>
            </Link>
          </motion.div>
          <motion.div whileHover={wiggleAnimation}>
            <Link
              href="/about"
              className={`flex items-center gap-2 ${
                currentPage === "about" ? "text-secondary" : "text-accent"
              } hover:text-white transition-colors`}
            >
              <CircleUserRound className="w-6 h-6" />
              <span>About</span>
            </Link>
          </motion.div>
          <motion.div whileHover={wiggleAnimation}>
            <Link
              href="/contact"
              className={`flex items-center gap-2 ${
                currentPage === "contact" ? "text-secondary" : "text-accent"
              } hover:text-white transition-colors`}
            >
              <PhoneCall className="w-6 h-6" />
              <span>Contact</span>
            </Link>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
}
