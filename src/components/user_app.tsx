"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import { motion, useAnimation, useInView } from 'framer-motion';

export function UserApp() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const imageSlides = [
    '/images/user_app/turf_ss1.jpg',
    '/images/user_app/turf_ss2.jpg',
    '/images/user_app/turf_ss3.jpg',
    '/images/user_app/turf_ss4.jpg',
    '/images/user_app/turf_ss5.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imageSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imageSlides.length]);

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: '-100px' });
  const rightInView = useInView(rightRef, { once: true, margin: '-100px' });
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    if (leftInView) {
      leftControls.start({ opacity: 1, y: 0 });
    }
    if (rightInView) {
      rightControls.start({ opacity: 1, y: 0 });
    }
  }, [leftInView, rightInView, leftControls, rightControls]);

  return (
    <div className="relative w-full overflow-hidden mb-10">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
        style={{ backgroundImage: `url('/images/turf_palying.jpg')` }}
      />
      {/* Optional gradient overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-6 md:p-12 gap-12">
        {/* Left Content */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, y: 50 }}
          animate={leftControls}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex-1 text-center md:text-left flex flex-col gap-6"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold italic text-orange-500"
            animate={{ scale: [1, 1.05, 1], textShadow: ['0 0 10px #f97316', '0 0 20px #f97316', '0 0 10px #f97316'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Zaapit <span className="underline decoration-wavy">Turf App</span>
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-100 italic">
            Book, play, and manage your turf games with ease!{' '}
            <span className="font-bold">Zaapit</span> lets you discover the best
            turfs near you, check availability, and make instant reservations—all
            from your phone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.zappit_techicom.app"
              className="bg-gradient-to-r from-green-500 to-green-700 text-white flex items-center gap-2 px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition transform duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <FaGooglePlay className="text-2xl" />
              <span className="font-semibold">Get on Play Store</span>
            </motion.a>
            <motion.a
              href="https://www.apple.com/app-store/"
              className="bg-gradient-to-r from-gray-900 to-gray-700 text-white flex items-center gap-2 px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition transform duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <FaApple className="text-2xl" />
              <span className="font-semibold">Download on App Store</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content - Mobile Mockup */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, y: 50 }}
          animate={rightControls}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="flex-1 flex justify-center"
        >
          <motion.div
            className="relative w-64 h-[500px] bg-black rounded-3xl border-4 border-gray-700 shadow-2xl overflow-hidden transform rotate-[-10deg] hover:rotate-0 transition-transform duration-700"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {/* Camera Dot */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 h-1.5 bg-gray-700 rounded-full"></div>

            {/* Slider Content */}
            <div className="w-full h-full relative">
              <img
                src={imageSlides[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-full object-cover transition-all duration-700"
              />

              {/* Slider Controls */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
                <button
                  onClick={() =>
                    setCurrentSlide(
                      currentSlide === 0
                        ? imageSlides.length - 1
                        : currentSlide - 1
                    )
                  }
                  className="w-4 h-4 rounded-full bg-white opacity-70 hover:opacity-100 hover:scale-110 transition"
                />
                <button
                  onClick={() =>
                    setCurrentSlide((currentSlide + 1) % imageSlides.length)
                  }
                  className="w-4 h-4 rounded-full bg-white opacity-70 hover:opacity-100 hover:scale-110 transition"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
