'use client';

import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Background from '../components/Hero/HeroBackground';
import Preloader from '../components/Preloader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <Background />
      {isLoading && <Preloader />}
      <Hero />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}