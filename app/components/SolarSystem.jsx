'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function SolarSystem() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000)
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    })
    
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 1)
    mountRef.current.appendChild(renderer.domElement)

    // Camera position
    camera.position.set(0, 30, 80)
    camera.lookAt(0, 0, 0)

    // Add stars
    const starGeometry = new THREE.BufferGeometry()
    const starMaterial = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      size: 0.2,
      sizeAttenuation: true
    })

    const starVertices = []
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000
      const y = (Math.random() - 0.5) * 2000
      const z = (Math.random() - 0.5) * 2000
      starVertices.push(x, y, z)
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3))
    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1)
    const pointLight = new THREE.PointLight(0xffffff, 2, 300)
    pointLight.position.set(0, 0, 0)
    scene.add(ambientLight, pointLight)

    // Sun
    const sunGeometry = new THREE.SphereGeometry(8, 32, 32)
    const sunMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xff9933,
      emissive: 0xff9933,
    })
    const sun = new THREE.Mesh(sunGeometry, sunMaterial)
    scene.add(sun)
    
    // Add sun glow
    const sunLight = new THREE.PointLight(0xff9933, 2, 100)
    sun.add(sunLight)

    // Planets data
    const planets = [
      { name: 'Mercury', radius: 1, distance: 15, speed: 0.008, color: 0x8A7967 },
      { name: 'Venus', radius: 1.8, distance: 20, speed: 0.006, color: 0xE6B8B8 },
      { name: 'Earth', radius: 2, distance: 28, speed: 0.004, color: 0x2E5FA1 },
      { name: 'Mars', radius: 1.5, distance: 35, speed: 0.003, color: 0xA0522D },
      { name: 'Jupiter', radius: 4, distance: 45, speed: 0.002, color: 0xC88B3A },
      { name: 'Saturn', radius: 3.5, distance: 55, speed: 0.001, color: 0xEAD6B8 }
    ]

    // Create orbit lines
    planets.forEach(planet => {
      const orbitGeometry = new THREE.RingGeometry(planet.distance, planet.distance + 0.1, 64)
      const orbitMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x666666,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.3
      })
      const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial)
      orbit.rotation.x = Math.PI / 2
      scene.add(orbit)
    })

    // Create planets
    const planetMeshes = planets.map(planet => {
      const geometry = new THREE.SphereGeometry(planet.radius, 32, 32)
      const material = new THREE.MeshStandardMaterial({ 
        color: planet.color,
        roughness: 0.7,
        metalness: 0.3
      })
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.x = planet.distance
      scene.add(mesh)
      return { mesh, ...planet }
    })

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.maxDistance = 200
    controls.minDistance = 20

    // Animation
    function animate() {
      requestAnimationFrame(animate)

      // Rotate sun
      sun.rotation.y += 0.001

      // Update planets
      planetMeshes.forEach(planet => {
        const time = Date.now() * planet.speed
        planet.mesh.position.x = Math.cos(time) * planet.distance
        planet.mesh.position.z = Math.sin(time) * planet.distance
        planet.mesh.rotation.y += 0.01
      })

      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
      scene.clear()
    }
  }, [])

  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: '100%', 
        height: '100vh',
        background: '#000000'
      }} 
    />
  )
} 