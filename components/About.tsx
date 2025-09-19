'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo(contentRef.current,
        { opacity: 0, x: -30 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
          }
        }
      );

      gsap.fromTo(imageRef.current,
        { opacity: 0, x: 30 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="space-y-6">
            <p className="text-lg text-gray-700">
              I'm a passionate developer and designer with over 5 years of experience creating 
              digital experiences that blend aesthetics with functionality.
            </p>
            <p className="text-lg text-gray-700">
              My expertise lies in front-end development, motion design, and creating immersive 
              web experiences using modern technologies like React, Three.js, and GSAP.
            </p>
            <p className="text-lg text-gray-700">
              When I'm not coding, you can find me exploring new design trends, experimenting with 
              3D graphics, or contributing to open source projects.
            </p>
          </div>
          
          <div ref={imageRef} className="flex justify-center">
            <div className="w-64 h-64 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center">
              <svg className="w-32 h-32 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}