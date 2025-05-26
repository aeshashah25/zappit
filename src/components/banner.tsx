'use client'

import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'

export function Banner() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Trigger animation after page load
    setLoaded(true)
  }, [])

  return (
    <section className="relative w-full max-w-7xl mx-auto mt-20 px-4 md:px-0 rounded-3xl overflow-hidden shadow-lg">
      {/* Three.js Canvas for floating symbols */}
      <div className="absolute top-[-150px] left-0 w-full h-40">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Float speed={2} rotationIntensity={2} floatIntensity={2}>
            <mesh>
              <sphereGeometry args={[0.5, 32, 32]} />
              <meshStandardMaterial color="orange" />
            </mesh>
          </Float>
          <Stars />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* Video section */}
      <div className="relative w-full h-64 md:h-[500px] rounded-3xl">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover rounded-3xl"
          src="/videos/turf1.mp4"
        />

        {/* Animated overlay text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <h1 className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent text-2xl md:text-5xl font-bold text-center drop-shadow-lg">
            Zapp: Your Turf, Your Time.
          </h1>
          
        </motion.div>
      </div>
    </section>
  )
}
