'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faJs, 
  faReact, 
  faNodeJs, 
  faGitAlt, 
  faCss3Alt, 
  faFigma,
  faRust,
  faPython,
  faDocker,
  faAws
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCube } from '@fortawesome/free-solid-svg-icons';

interface Skill {
  icon: any;
  name: string;
  color: string;
}

const skills: Skill[] = [
  { icon: faJs, name: 'JavaScript', color: '#F7DF1E' },
  { icon: faReact, name: 'React', color: '#61DAFB' },
  { icon: faNodeJs, name: 'Node.js', color: '#339933' },
  { icon: faCube, name: 'Three.js', color: '#000000' },
  { icon: faGitAlt, name: 'Git', color: '#F05032' },
  { icon: faCss3Alt, name: 'CSS/SCSS', color: '#1572B6' },
  { icon: faDatabase, name: 'Databases', color: '#336791' },
  { icon: faFigma, name: 'Figma', color: '#F24E1E' },
  { icon: faRust, name: 'Rust', color: '#000000' },
  { icon: faPython, name: 'Python', color: '#3776AB' },
  { icon: faDocker, name: 'Docker', color: '#2496ED' },
  { icon: faAws, name: 'AWS', color: '#FF9900' }
];

export default function SkillSphere() {
  const sphereRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!sphereRef.current) return;

    const icons = sphereRef.current.querySelectorAll('.skill-icon');
    
    icons.forEach((icon, index) => {
      const phi = Math.acos(-1 + (2 * index) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;
      
      const x = Math.cos(theta) * Math.sin(phi);
      const y = Math.sin(theta) * Math.sin(phi);
      const z = Math.cos(phi);
      
      gsap.set(icon, {
        x: x * 120,
        y: y * 120,
        z: z * 120,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0
      });
    });

    gsap.to(sphereRef.current, {
      rotationY: 360,
      duration: 20,
      repeat: -1,
      ease: 'none'
    });

    return () => {
      gsap.killTweensOf(sphereRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent, skillName: string) => {
    setHoveredSkill(skillName);
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96">
      <div
        ref={sphereRef}
        className="absolute inset-0 transform-style-3d"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="skill-icon absolute w-12 h-12 flex items-center justify-center cursor-pointer transform-style-3d"
            style={{ transformStyle: 'preserve-3d' }}
            onMouseMove={(e) => handleMouseMove(e, skill.name)}
            onMouseLeave={handleMouseLeave}
          >
            <FontAwesomeIcon 
              icon={skill.icon} 
              className="text-2xl transition-all duration-300 hover:scale-125"
              style={{ color: skill.color }}
            />
          </div>
        ))}
      </div>

      {hoveredSkill && (
        <div
          className="fixed bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-share-tech pointer-events-none z-50"
          style={{
            left: tooltipPosition.x + 15,
            top: tooltipPosition.y - 10,
            transform: 'translateZ(0)'
          }}
        >
          {hoveredSkill}
        </div>
      )}

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech&display=swap');
        
        .font-share-tech {
          font-family: 'Share Tech', sans-serif;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}