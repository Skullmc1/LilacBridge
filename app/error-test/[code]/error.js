'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import styles from './error.module.css'

export default function Error({ error }) {
  const router = useRouter()
  const errorCode = error.message

  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.errorContainer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className={styles.errorCode}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          {errorCode}
        </motion.div>
        
        <motion.div 
          className={styles.errorGraphic}
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg viewBox="0 0 200 200" className={styles.errorSvg}>
            <motion.path
              d="M100,20 C140,20 170,50 170,90 C170,130 140,160 100,160 C60,160 30,130 30,90 C30,50 60,20 100,20"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.circle
              cx="70"
              cy="80"
              r="8"
              fill="currentColor"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
            />
            <motion.circle
              cx="130"
              cy="80"
              r="8"
              fill="currentColor"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
            />
            <motion.path
              d="M70,120 Q100,140 130,120"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            />
          </svg>
        </motion.div>

        <motion.button
          className={styles.homeButton}
          onClick={() => router.push('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Return Home
        </motion.button>
      </motion.div>
    </div>
  )
} 