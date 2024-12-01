'use client'

import { motion } from 'framer-motion'
import styles from './MainLoader.module.css'

export default function MainLoader() {
  return (
    <div className={styles.mainLoaderContainer}>
      <motion.div
        className={styles.loaderContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.svg
          className={styles.loader}
          viewBox="0 0 100 100"
          initial="hidden"
          animate="visible"
        >
          {/* Outer circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            stroke="url(#mainGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, rotate: 0 }}
            animate={{ 
              pathLength: 1, 
              rotate: 360,
            }}
            transition={{
              pathLength: { duration: 2, ease: "easeInOut" },
              rotate: { duration: 8, ease: "linear", repeat: Infinity }
            }}
          />
          
          {/* Inner geometric pattern */}
          <motion.path
            d="M50,10 L90,50 L50,90 L10,50 Z"
            stroke="url(#mainGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: 0.7,
              opacity: 1,
              rotate: -360
            }}
            transition={{
              duration: 8,
              ease: "linear",
              repeat: Infinity
            }}
          />

          <defs>
            <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2d1b69">
                <animate
                  attributeName="stop-color"
                  values="#2d1b69; #7c2483; #2d1b69"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#7c2483">
                <animate
                  attributeName="stop-color"
                  values="#7c2483; #2d1b69; #7c2483"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>
        </motion.svg>
        
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          In Profectum
        </motion.h1>
      </motion.div>
    </div>
  )
} 