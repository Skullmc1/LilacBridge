"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectTile from "./components/ProjectTile";
import MainLoader from "./components/MainLoader";
import SendToWebhook from "./components/SendToWebhook";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const projects = [
    {
      name: "Nebula",
      id: 1,
      desc: "Interactive solar system visualization with real-time planetary movements and cosmic events",
    },
    {
      name: "Quantum",
      id: 2,
      desc: "Secure video conferencing platform with end-to-end encryption and virtual backgrounds",
    },
    {
      name: "Phoenix",
      id: 3,
      desc: "Premium social network for verified professionals and industry leaders",
    },
    {
      name: "Atlas",
      id: 4,
      desc: "Next-generation mapping interface with augmented reality integration",
    },
    {
      name: "Horizon",
      id: 5,
      desc: "AI-powered research assistant that aggregates and analyzes online discussions",
    },
    {
      name: "Prism",
      id: 6,
      desc: "Interactive color theory laboratory for designers and artists",
    },
  ];

  if (isLoading) return <MainLoader />;

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f0f0f",
        color: "#f0f0f0",
        fontFamily: "monospace",
        padding: "4rem 2rem",
        margin: 0,
        boxSizing: "border-box",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
      }}
    >
      <SendToWebhook />
      <h1
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          marginBottom: "clamp(4rem, 10vh, 6rem)",
          textAlign: "center",
          fontWeight: "bold",
          background: "linear-gradient(45deg, #f0f0f0, #a0a0a0)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        In Profectum
      </h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(4rem, 8vh, 6rem)",
          padding: "2rem",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {projects.map((project, index) => (
          <ProjectTile key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </main>
  );
}
