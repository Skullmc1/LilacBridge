'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        { scale: 0.8, opacity: 0, rotation: -5 },
        { scale: 1, opacity: 1, rotation: 0, duration: 1.5, ease: 'back.out(1.7)', delay: 3.3 }
      );

      if (nameRef.current) {
        const nameText = nameRef.current.textContent || '';
        nameRef.current.innerHTML = nameText.split('').map(letter => 
          `<span class="inline-block opacity-0">${letter === ' ' ? '&nbsp;' : letter}</span>`
        ).join('');
        
        gsap.to(nameRef.current.querySelectorAll('span'), {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: 'power3.out',
          delay: 3.1,
          onStart: () => {
            gsap.set(nameRef.current.querySelectorAll('span'), { y: 50 });
          }
        });
      }

      if (titleRef.current) {
        const titleText = titleRef.current.textContent || '';
        titleRef.current.innerHTML = titleText.split('').map(letter => 
          `<span class="inline-block opacity-0">${letter === ' ' ? '&nbsp;' : letter}</span>`
        ).join('');
        
        const letters = titleRef.current.querySelectorAll('span');
        letters.forEach((letter, i) => {
          const directions = [
            { x: -80, y: -80 },
            { x: 80, y: -80 },
            { x: -80, y: 80 },
            { x: 80, y: 80 },
            { x: -120, y: 0 },
            { x: 120, y: 0 },
          ];
          const randomDir = directions[Math.floor(Math.random() * directions.length)];
          
          gsap.to(letter, {
            opacity: 1,
            x: 0,
            y: 0,
            delay: 3.2 + (i * 0.02),
            duration: 0.8,
            ease: 'power3.out',
            onStart: () => {
              gsap.set(letter, { x: randomDir.x, y: randomDir.y });
            }
          });
        });
      }

      gsap.fromTo(scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 3.5, ease: 'power2.out' }
      );

      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToNextSection = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="min-h-screen flex items-center px-6 relative overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        <div className="flex flex-col justify-center">
          <h1 ref={nameRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-white tracking-tight font-orbitron whitespace-nowrap">
            Javiru Geesath
          </h1>
          <p ref={titleRef} className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 font-share-tech">
            Creative Developer & Digital Experience Designer
          </p>
        </div>
        
        <div ref={imageRef} className="flex justify-center order-first md:order-last">
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
            <img 
              src="/pfp.jpeg" 
              alt="Javiru Geesath" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div 
        ref={scrollIndicatorRef} 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={scrollToNextSection}
      >
        <ChevronDown size={32} className="text-white" />
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Share+Tech&display=swap');
        
        .font-orbitron {
          font-family: 'Orbitron', monospace;
        }
        
        .font-share-tech {
          font-family: 'Share Tech', sans-serif;
        }
      `}</style>
    </section>
  );
}