import React, { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';

interface PillarProps {
  totalBlocks: number;
    className?: string;
}

const Pillar: React.FC<PillarProps> = ({ totalBlocks, className = '' }) => {
  const blocks = useMemo(() => {
    return Array.from({ length: totalBlocks }, (_, i) => {
      const opacity = 1 - (i / totalBlocks);
      const background = `rgba(255, 255, 255, ${opacity})`;
      return (
        <div
          key={i}
          className="block"
          style={{
            flexGrow: 1,
            background,
          }}
        />
      );
    });
  }, [totalBlocks]);

  return (
    <div
      className={`pillar ${className}`}
      style={{
        width: 'calc(100% / 19)',
        display: 'flex',
        flexDirection: 'column-reverse',
      }}
    >
      {blocks}
    </div>
  );
};

const Background: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayContainerRef = useRef<HTMLDivElement>(null);
  const sineContainerRef = useRef<HTMLDivElement>(null);
  const pillarCount = 19;

  const getPillarData = (minBlocks, maxBlocks, expandedHeight, compressedHeight) => {
    return Array.from({ length: pillarCount }, (_, i) => {
      const distanceFromCenter = Math.abs(i - Math.floor(pillarCount / 2));
      const maxDistance = Math.floor(pillarCount / 2);
      const blocksRange = maxBlocks - minBlocks;
      const totalBlocks = Math.round((distanceFromCenter / maxDistance) * blocksRange + minBlocks);

      const maxPillarHeight = totalBlocks * expandedHeight;
      const minPillarHeight = totalBlocks * compressedHeight;

      return {
        totalBlocks,
        minPillarHeight,
        maxPillarHeight,
      };
    });
  };

  const basePillarData = useMemo(() => getPillarData(8, 25, 5, 4), []);
  const sidesPillarData = useMemo(() => getPillarData(15, 40, 3, 2), []);
  const sinePillarData = useMemo(() => getPillarData(10, 30, 4, 3), []);


  const basePillars = useMemo(() => {
    return basePillarData.map((data, i) => (
      <Pillar
        key={i}
        totalBlocks={data.totalBlocks}
        className="base-pillar"
      />
    ));
  }, [basePillarData]);

  const sidesPillars = useMemo(() => {
    return sidesPillarData.map((data, i) => (
      <Pillar
        key={i}
        totalBlocks={data.totalBlocks}
        className="sides-pillar"
      />
    ));
  }, [sidesPillarData]);

  const sinePillars = useMemo(() => {
    return sinePillarData.map((data, i) => (
      <Pillar
        key={i}
        totalBlocks={data.totalBlocks}
        className="sine-pillar"
      />
    ));
  }, [sinePillarData]);


  useEffect(() => {
    if (containerRef.current && overlayContainerRef.current && sineContainerRef.current) {
      const basePillars = gsap.utils.toArray('.base-pillar', containerRef.current);
      const sidesPillars = gsap.utils.toArray('.sides-pillar', overlayContainerRef.current);
      const sinePillars = gsap.utils.toArray('.sine-pillar', sineContainerRef.current);

      gsap.set(basePillars, { height: (i) => `${basePillarData[i].minPillarHeight}%` });
      const tl1 = gsap.timeline({ repeat: -1, yoyo: true });
      tl1.to(basePillars, {
        height: (i) => `${basePillarData[i].maxPillarHeight}%`,
        ease: 'power1.inOut',
        stagger: { each: 0.1, from: 'center' },
        duration: 2,
      });

      gsap.set(sidesPillars, { height: (i) => `${sidesPillarData[i].minPillarHeight}%` });
      const tl2 = gsap.timeline({ repeat: -1, yoyo: true });
      tl2.to(sidesPillars, {
        height: (i) => `${sidesPillarData[i].maxPillarHeight}%`,
        ease: 'power1.inOut',
        stagger: { each: 0.1, from: 'edges' },
        duration: 2,
        delay: 0.5,
      });

      gsap.set(sinePillars, { height: (i) => `${sinePillarData[i].minPillarHeight}%` });
      const tl3 = gsap.timeline({ repeat: -1, yoyo: true });
      tl3.to(sinePillars, {
        height: (i) => `${sinePillarData[i].maxPillarHeight}%`,
        ease: 'power1.inOut',
        stagger: {
          each: 0.1,
          from: 'start',
          ease: 'sine.inOut'
        },
        duration: 2.5,
        delay: 1,
      });
    }
  }, [basePillarData, sidesPillarData, sinePillarData]);

  return (
    <div
      style={{
        backgroundColor: '#000000',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -5,
      }}
    >
      <div
        ref={containerRef}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          overflow: 'hidden',
          zIndex: -4,
          opacity: 0.8,
        }}
      >
        {basePillars}
      </div>
      <div
        ref={overlayContainerRef}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          overflow: 'hidden',
          zIndex: -3,
          opacity: 0.3,
        }}
      >
        {sidesPillars}
      </div>
      <div
        ref={sineContainerRef}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          overflow: 'hidden',
          zIndex: -2,
          opacity: 0.1,
        }}
      >
        {sinePillars}
      </div>
      <div className="fixed inset-0 w-full h-full bg-black opacity-50 z-0" />
    </div>
  );
};

export default Background;