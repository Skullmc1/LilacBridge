'use client'

import { useState, useEffect } from 'react'
import Loader from '../../components/Loader'

export default function PhoenixPage() {
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
      minHeight: '100vh',
      backgroundColor: '#0f0f0f',
      color: '#f0f0f0',
      fontFamily: 'monospace',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        marginBottom: '1rem',
        background: 'linear-gradient(45deg, #f0f0f0, #a0a0a0)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        Phoenix
      </h1>
      <p style={{
        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
        maxWidth: '600px',
        opacity: 0.8
      }}>
        Premium social network for verified professionals and industry leaders
      </p>
    </div>
  )
} 