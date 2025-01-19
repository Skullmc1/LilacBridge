// app/projects/page.tsx
"use client"; // This is a Client Component

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code,
  Paintbrush,
  Smartphone,
  Globe,
  Database,
  Camera,
  Music,
  BookOpen,
  Rocket,
  Palette,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A cutting-edge web application for modern businesses.",
    link: "/projects/1",
    image: "", // No image provided
  },
  {
    id: 2,
    title: "Project 2",
    description: "An innovative mobile app for personal productivity.",
    link: "/projects/2",
    image: "/images/project2.jpg", // Image provided
  },
  {
    id: 3,
    title: "Project 3",
    description: "A creative platform for artists and designers.",
    link: "/projects/3",
    image: "", // No image provided
  },
];

// Array of Lucide icons to use as fallbacks
const lucideIcons = [
  { icon: Code, color: "text-blue-500" },
  { icon: Paintbrush, color: "text-pink-500" },
  { icon: Smartphone, color: "text-green-500" },
  { icon: Globe, color: "text-purple-500" },
  { icon: Database, color: "text-yellow-500" },
  { icon: Camera, color: "text-red-500" },
  { icon: Music, color: "text-indigo-500" },
  { icon: BookOpen, color: "text-teal-500" },
  { icon: Rocket, color: "text-orange-500" },
  { icon: Palette, color: "text-cyan-500" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectsPage() {
  // Function to get a random Lucide icon
  const getRandomIcon = () => {
    const randomIndex = Math.floor(Math.random() * lucideIcons.length);
    return lucideIcons[randomIndex];
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      {/* Add padding to account for Header and Footer overlays */}
      <div className="pt-20 pb-20 container mx-auto px-6">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-5xl font-bold text-center mb-12"
        >
          Our Projects
        </motion.h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            // Get a random Lucide icon if no image is provided
            const { icon: IconComponent, color } = getRandomIcon();

            return (
              <motion.div
                key={project.id}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Fallback to Lucide icon if no image is provided */}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 flex items-center justify-center bg-white/20">
                    <IconComponent className={`w-20 h-20 ${color}`} />
                  </div>
                )}

                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <Link
                    href={project.link}
                    className="inline-block bg-white text-purple-500 px-6 py-2 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
