'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import TileBackground from './TileBackground'
import styles from './ProjectTile.module.css'

export default function ProjectTile({ project }) {
  const router = useRouter()

  const handleClick = () => {
    if (!project.isErrorTile) {
      router.push(`/projects/${project.name.toLowerCase()}`)
    }
  }

  return (
    <motion.div
      onClick={handleClick}
      className={`${styles.tile} ${styles[project.name.toLowerCase()]}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={!project.isErrorTile ? { scale: 1.03 } : {}}
    >
      <TileBackground project={project} />
      <div className={styles.tileContent}>
        <h2 style={{
          margin: '0 0 1rem 0',
          fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '0.5rem',
          borderRadius: '4px'
        }}>
          {project.name}
        </h2>
        <p style={{
          margin: 0,
          opacity: 0.7,
          fontSize: '0.9rem'
        }}>
          {project.desc}
        </p>
        {project.isErrorTile ? (
          <div className={styles.errorButtons}>
            {project.errors.map((error) => (
              <motion.button
                key={error.code}
                onClick={(e) => {
                  e.stopPropagation()
                  router.push(`/error-test/${error.code}`)
                }}
                className={styles.errorButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {error.code}
              </motion.button>
            ))}
          </div>
        ) : (
          <div style={{
            fontSize: '0.8rem',
            opacity: 0.5,
            marginTop: 'auto',
            paddingTop: '1rem'
          }}>
            Click to view →
          </div>
        )}
      </div>
    </motion.div>
  )
} 