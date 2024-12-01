'use client'

import { motion } from 'framer-motion'
import styles from './Loader.module.css'

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <motion.svg
        className={styles.loader}
        viewBox="0 0 100 100"
        initial="hidden"
        animate="visible"
      >
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          stroke="url(#gradient)"
          strokeWidth="4"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="20"
          stroke="url(#gradient)"
          strokeWidth="4"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2d1b69" />
            <stop offset="100%" stopColor="#7c2483" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  )
} 