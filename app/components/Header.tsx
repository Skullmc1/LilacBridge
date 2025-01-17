// app/components/Header.tsx
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

export default function Header({ currentPage }: { currentPage: string }) {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={slideInFromTop}
      className="sticky top-0 z-50 backdrop-blur-md bg-background/50 border-b border-primary/10"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo with Flower2 icon */}
        <Link href="/" className="flex items-center gap-2 group">
          <Flower2 className="w-8 h-8 text-accent group-hover:text-secondary transition-colors" />
          <h1 className="text-2xl font-bold group-hover:text-secondary transition-colors">
            LilacBridge
          </h1>
        </Link>

        {/* Navigation Links with Lucide Icons */}
        <nav className="flex gap-8">
          <Link
            href="/"
            className={`flex items-center gap-2 ${
              currentPage === "home" ? "text-secondary" : "text-primary"
            } hover:text-secondary transition-colors`}
          >
            <House className="w-6 h-6" />
            <span>Home</span>
          </Link>
          <Link
            href="/projects"
            className={`flex items-center gap-2 ${
              currentPage === "projects" ? "text-secondary" : "text-primary"
            } hover:text-secondary transition-colors`}
          >
            <LibraryBig className="w-6 h-6" />
            <span>Projects</span>
          </Link>
          <Link
            href="/about"
            className={`flex items-center gap-2 ${
              currentPage === "about" ? "text-secondary" : "text-primary"
            } hover:text-secondary transition-colors`}
          >
            <CircleUserRound className="w-6 h-6" />
            <span>About</span>
          </Link>
          <Link
            href="/contact"
            className={`flex items-center gap-2 ${
              currentPage === "contact" ? "text-secondary" : "text-primary"
            } hover:text-secondary transition-colors`}
          >
            <PhoneCall className="w-6 h-6" />
            <span>Contact</span>
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
