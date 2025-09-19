'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

export default function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!pillarsRef.current) return;

    const pillars = gsap.utils.toArray('.preloader-pillar', pillarsRef.current);
    
    const tl = gsap.timeline();
    
    pillars.forEach((pillar: any, i: number) => {
      tl.to(pillar, {
        scaleY: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.05
      }, i * 0.1);
    });

    tl.to('.preloader-pillar', {
      scaleY: 0,
      duration: 0.6,
      stagger: 0.03,
      ease: 'power2.in'
    });

    tl.to(preloaderRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      onComplete: () => setIsLoading(false)
    });

    return () => {
      tl.kill();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div ref={preloaderRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div ref={pillarsRef} className="flex items-end justify-center h-32 gap-1">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="preloader-pillar w-3 bg-gradient-to-t from-white to-gray-300 scale-y-0 origin-bottom"
            style={{ height: `${30 + (Math.sin(i * 0.5) * 25)}px` }}
          />
        ))}
      </div>
    </div>
  );
}