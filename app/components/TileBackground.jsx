import { motion } from 'framer-motion';
import styles from './ProjectTile.module.css';

const TileBackground = ({ projectName }) => {
  switch (projectName) {
    case 'errorpages':
      return (
        <svg className={styles.svg} viewBox="0 0 200 200">
          <motion.path
            d="M40,100 Q100,140 160,100"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <motion.path
            d="M40,80 Q100,120 160,80"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <motion.circle
            cx="100"
            cy="100"
            r="40"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default TileBackground;
