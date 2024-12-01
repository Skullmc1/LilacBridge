'use client'

import { useState, useEffect } from 'react'
import Loader from '../../components/Loader'
import SolarSystem from '../../components/SolarSystem'

export default function NebulaPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) return <Loader />

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundColor: '#000000',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        zIndex: 10,
        color: '#f0f0f0',
        fontFamily: 'monospace',
        padding: '1rem',
        background: 'rgba(0,0,0,0.5)',
        borderRadius: '0.5rem'
      }}>
        <h1 style={{
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          marginBottom: '0.5rem',
          background: 'linear-gradient(45deg, #f0f0f0, #a0a0a0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Nebula
        </h1>
        <p style={{
          fontSize: '0.9rem',
          opacity: 0.8
        }}>
          Use mouse to orbit • Scroll to zoom
        </p>
      </div>
      <SolarSystem />
    </div>
  )
} 