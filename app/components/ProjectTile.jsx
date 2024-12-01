'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import TileBackground from './TileBackground'
import Loader from './Loader'
import styles from './ProjectTile.module.css'

const item = {
  hidden: { 
    opacity: 0, 
    y: 100,
    scale: 0.95
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      mass: 1,
      damping: 15
    }
  }
}

export default function ProjectTile({ project }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    router.push(`/projects/${project.name.toLowerCase()}`)
  }

  return (
    <>
      {isLoading && <Loader />}
      <motion.div
        variants={item}
        onClick={handleClick}
        className={`${styles.tile} ${styles[project.name.toLowerCase()]}`}
        whileHover={{ 
          scale: 1.03,
          transition: { 
            type: "spring",
            stiffness: 400,
            damping: 10
          }
        }}
      >
        <TileBackground projectName={project.name.toLowerCase()} />
        <div className={styles.tileContent}>
          <h2 style={{
            margin: '0 0 1.5rem 0',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '1rem',
            borderRadius: '12px'
          }}>
            {project.name}
          </h2>
          <p style={{
            margin: 0,
            opacity: 0.8,
            fontSize: '1.1rem',
            lineHeight: '1.7'
          }}>
            {project.desc}
          </p>
          <div style={{
            fontSize: '0.9rem',
            opacity: 0.6,
            marginTop: 'auto',
            paddingTop: '2rem'
          }}>
            Click to explore →
          </div>
        </div>
      </motion.div>
    </>
  )
} 