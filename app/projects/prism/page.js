'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function PrismPage() {
  const router = useRouter()
  const [colors, setColors] = useState({
    primary: '#FF5555',
    secondary: '#50FA7B',
    background: '#1A1A1A',
    text: '#F8F8F2',
    accent: '#BD93F9'
  })
  
  const [selectedElement, setSelectedElement] = useState('primary')
  const [rgbValues, setRgbValues] = useState({ r: 255, g: 85, b: 85 })

  // Convert hex to RGB when selected element changes
  useEffect(() => {
    const hex = colors[selectedElement]
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    setRgbValues({ r, g, b })
  }, [selectedElement, colors])

  // Convert RGB to hex and update colors
  const handleRgbChange = (channel, value) => {
    const newRgb = { ...rgbValues, [channel]: value }
    setRgbValues(newRgb)
    
    const hex = '#' + 
      newRgb.r.toString(16).padStart(2, '0') +
      newRgb.g.toString(16).padStart(2, '0') +
      newRgb.b.toString(16).padStart(2, '0')
    
    setColors(prev => ({
      ...prev,
      [selectedElement]: hex.toUpperCase()
    }))
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0f0f0f',
      color: '#f0f0f0',
      fontFamily: 'monospace',
      padding: '2rem',
      position: 'relative'
    }}>
      <h1 style={{
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        marginBottom: '2rem'
      }}>
        Prism
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 350px',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Example UI Section */}
        <section style={{
          backgroundColor: colors.background,
          padding: '2rem',
          borderRadius: '12px',
          minHeight: '500px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            {/* Header */}
            <header style={{
              backgroundColor: colors.primary,
              padding: '1.5rem',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={() => setSelectedElement('primary')}>
              <h2 style={{ 
                color: colors.text,
                margin: 0,
                fontSize: '1.8rem'
              }}>
                Design System
              </h2>
            </header>

            {/* Navigation */}
            <nav style={{
              backgroundColor: colors.secondary,
              padding: '1rem',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={() => setSelectedElement('secondary')}>
              <ul style={{
                display: 'flex',
                gap: '2rem',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                color: colors.text,
                justifyContent: 'center',
                fontSize: '1.1rem'
              }}>
                <li style={{ opacity: 0.9 }}>Components</li>
                <li style={{ opacity: 0.9 }}>Typography</li>
                <li style={{ opacity: 0.9 }}>Colors</li>
              </ul>
            </nav>

            {/* Main Content */}
            <main style={{
              backgroundColor: colors.background,
              padding: '2rem',
              borderRadius: '12px',
              border: `2px solid ${colors.accent}`,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              minHeight: '200px'
            }}
            onClick={() => setSelectedElement('background')}>
              <div style={{ 
                color: colors.text,
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <h3 style={{ margin: 0 }}>Color System</h3>
                <p style={{ 
                  opacity: 0.8,
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  Create a cohesive design system by selecting and adjusting colors for different UI elements. Click any element to modify its color using the controls.
                </p>
              </div>
            </main>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <button style={{
                backgroundColor: colors.accent,
                color: colors.text,
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                flex: 1
              }}
              onClick={() => setSelectedElement('accent')}>
                Primary Action
              </button>
              <button style={{
                backgroundColor: 'transparent',
                color: colors.accent,
                border: `2px solid ${colors.accent}`,
                padding: '1rem 2rem',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                flex: 1
              }}
              onClick={() => setSelectedElement('accent')}>
                Secondary Action
              </button>
            </div>
          </div>
        </section>

        {/* New Color Controls Section */}
        <section style={{
          backgroundColor: '#1a1a1a',
          padding: '1.5rem',
          borderRadius: '12px',
          height: 'fit-content'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Color Controls</h3>
          
          <div style={{ marginBottom: '1.5rem' }}>
            Selected: {selectedElement}
          </div>

          {/* Color Preview */}
          <div style={{
            width: '100%',
            height: '100px',
            backgroundColor: colors[selectedElement],
            borderRadius: '8px',
            marginBottom: '1.5rem',
            border: '2px solid #333'
          }} />

          {/* RGB Sliders */}
          <div style={{
            display: 'grid',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#FF5555'
              }}>
                Red: {rgbValues.r}
              </label>
              <input
                type="range"
                min="0"
                max="255"
                value={rgbValues.r}
                onChange={(e) => handleRgbChange('r', parseInt(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#FF5555'
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#50FA7B'
              }}>
                Green: {rgbValues.g}
              </label>
              <input
                type="range"
                min="0"
                max="255"
                value={rgbValues.g}
                onChange={(e) => handleRgbChange('g', parseInt(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#50FA7B'
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#8BE9FD'
              }}>
                Blue: {rgbValues.b}
              </label>
              <input
                type="range"
                min="0"
                max="255"
                value={rgbValues.b}
                onChange={(e) => handleRgbChange('b', parseInt(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#8BE9FD'
                }}
              />
            </div>
          </div>

          {/* Color Input */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem'
            }}>
              Hex Color:
            </label>
            <div style={{
              display: 'flex',
              gap: '0.5rem'
            }}>
              <input
                type="color"
                value={colors[selectedElement]}
                onChange={(e) => {
                  setColors(prev => ({
                    ...prev,
                    [selectedElement]: e.target.value.toUpperCase()
                  }))
                }}
                style={{
                  width: '50px',
                  height: '40px',
                  padding: 0,
                  border: 'none',
                  borderRadius: '4px',
                  backgroundColor: 'transparent'
                }}
              />
              <input
                type="text"
                value={colors[selectedElement]}
                onChange={(e) => {
                  setColors(prev => ({
                    ...prev,
                    [selectedElement]: e.target.value.toUpperCase()
                  }))
                }}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  backgroundColor: '#252525',
                  border: 'none',
                  borderRadius: '4px',
                  color: '#f0f0f0',
                  fontFamily: 'monospace'
                }}
              />
            </div>
          </div>

          {/* Current Colors List */}
          <div style={{
            display: 'grid',
            gap: '0.5rem'
          }}>
            {Object.entries(colors).map(([key, value]) => (
              <div 
                key={key} 
                onClick={() => setSelectedElement(key)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.5rem',
                  backgroundColor: selectedElement === key ? '#333' : '#252525',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
              >
                <span>{key}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <button
        onClick={() => router.push('/')}
        style={{
          position: 'fixed',
          bottom: '2rem',
          left: '2rem',
          backgroundColor: '#252525',
          color: '#f0f0f0',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          cursor: 'pointer',
          fontFamily: 'monospace',
          fontSize: '1rem',
          transition: 'all 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          ':hover': {
            backgroundColor: '#333'
          }
        }}
      >
        ← Back
      </button>
    </div>
  )
} 