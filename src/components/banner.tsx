'use client'

import { motion } from 'framer-motion'
import { TbH4 } from 'react-icons/tb'

export function Banner() {
  return (
    <section
      id="banner"
      className="relative w-full px-4 py-12 md:py-20 bg-transparent mb-30"
    >
      <div className="w-full flex items-center justify-center min-h-[200px] md:min-h-[300px]">
        {/* Overlay content with animation */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <h1 className="text-[#1f2b6c] text-3xl md:text-5xl font-bold drop-shadow-lg">
            Your Turf, Your Time.
          </h1>
             <h4 className="text-orange-400 text-3xl md:text-2xl font-bold drop-shadow-lg">
"Zaapit – Seamless turf booking at your fingertips, anytime, anywhere."

          </h4>
        </motion.div>
      </div>
    </section>
  )
}
