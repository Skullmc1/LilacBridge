import styles from './ProjectTile.module.css';

const TileBackground = ({ project }) => {
  switch (project.name.toLowerCase()) {
    case 'nebula':
      return (
        <svg className={styles.svg} viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="30" fill="rgba(255,255,255,0.2)" />
          <circle cx="60" cy="60" r="15" fill="rgba(255,255,255,0.15)" />
          <circle cx="140" cy="150" r="20" fill="rgba(255,255,255,0.1)" />
          <circle cx="40" cy="140" r="8" fill="rgba(255,255,255,0.2)" />
          <circle cx="170" cy="70" r="10" fill="rgba(255,255,255,0.15)" />
        </svg>
      );
    case 'quantum':
      return (
        <svg className={styles.svg} viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="25" fill="rgba(255,255,255,0.1)" />
          <path d="M60,100 Q100,60 140,100" stroke="rgba(255,255,255,0.2)" fill="none" strokeWidth="3" strokeLinecap="round" />
          <path d="M60,100 Q100,140 140,100" stroke="rgba(255,255,255,0.2)" fill="none" strokeWidth="3" strokeLinecap="round" />
          <circle cx="60" cy="100" r="10" fill="rgba(255,255,255,0.2)" />
          <circle cx="140" cy="100" r="10" fill="rgba(255,255,255,0.2)" />
        </svg>
      );
    case 'phoenix':
      return (
        <svg className={styles.svg} viewBox="0 0 200 200">
          <path d="M100,40 C130,60 150,80 140,120 C160,100 160,140 140,160 C120,180 80,180 60,160 C40,140 40,100 60,120 C50,80 70,60 100,40" 
                stroke="rgba(255,215,0,0.2)" fill="none" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'atlas':
      return (
        <svg className={styles.svg} viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
          <path d="M60,60 Q100,20 140,60 Q180,100 140,140 Q100,180 60,140 Q20,100 60,60" 
                fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
        </svg>
      );
    case 'horizon':
      return (
        <svg className={styles.svg} viewBox="0 0 200 200">
          <path d="M40,100 Q100,80 160,100" stroke="rgba(255,255,255,0.2)" fill="none" strokeWidth="3" strokeLinecap="round" />
          <path d="M40,120 Q100,100 160,120" stroke="rgba(255,255,255,0.15)" fill="none" strokeWidth="3" strokeLinecap="round" />
          <path d="M40,80 Q100,60 160,80" stroke="rgba(255,255,255,0.1)" fill="none" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'prism':
      return (
        <svg className={styles.svg} viewBox="0 0 200 200">
          <circle cx="100" cy="70" r="25" fill="rgba(255,255,255,0.2)" />
          <circle cx="70" cy="130" r="20" fill="rgba(255,255,255,0.15)" />
          <circle cx="130" cy="130" r="20" fill="rgba(255,255,255,0.1)" />
          <path d="M70,130 Q100,100 130,130" stroke="rgba(255,255,255,0.2)" fill="none" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
};

export default TileBackground; 