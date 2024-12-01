'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'

const ERROR_PAGES = [
  { code: 401, desc: "Unauthorized" },
  { code: 403, desc: "Forbidden" },
  { code: 404, desc: "Not Found" },
  { code: 500, desc: "Internal Server Error" },
  { code: 502, desc: "Bad Gateway" },
  { code: 503, desc: "Service Unavailable" },
  { code: 504, desc: "Gateway Timeout" }
]

export default function ErrorTestPage() {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Error Pages
        </motion.h1>
        <div className={styles.grid}>
          {ERROR_PAGES.map((error) => (
            <motion.button
              key={error.code}
              onClick={() => router.push(`/error-test/${error.code}`)}
              className={styles.errorButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span className={styles.errorCode}>{error.code}</span>
              <span className={styles.errorDesc}>{error.desc}</span>
            </motion.button>
          ))}
        </div>
        <motion.button
          onClick={() => router.push('/')}
          className={styles.backButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Return Home
        </motion.button>
      </motion.div>
    </div>
  )
} 