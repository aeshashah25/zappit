"use client";
import React, { useEffect, useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  { title: "Availability & Scheduling", description: "Efficient scheduling eliminates wait times and improves planning." },
  { title: "Transparent Booking", description: "Ensure trust with fair and clearly communicated booking processes." },
  { title: "Verified Profiles", description: "Build credibility with verified and complete profiles." },
  { title: "Amenities Overview", description: "Showcase all features including parking, Wi-Fi, and more." },
  { title: "Smart Filters", description: "Let users find what they need fast with intelligent filters." },
];

export default function Manager() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      timeline.from(card, {
        opacity: 0,
        y: 100,
        z: -200,
        duration: 0.6,
        ease: "back.out(1.7)",
      });

      timeline.from(
        card.querySelectorAll("h3, svg, p"),
        {
          opacity: 0,
          y: 20,
          stagger: 0.2,
          duration: 0.4,
        },
        "-=0.3"
      );
    });
  }, []);

  return (
    <div className="relative w-full min-h-[600px] flex justify-center items-center py-10 md:py-14 mb-10">
      {/* Background Image + Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
        style={{ backgroundImage: `url('/images/turf_palying.jpg')` }}
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-orange-900 text-center mb-10 tracking-tight drop-shadow-lg">
          Manager Challenges & Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="bg-white/10 border-t-4 border-[#ff6600] rounded-xl shadow-lg backdrop-blur-md p-1 hover:scale-[1.03] transition-transform duration-300"
            >
              {/* Black Box for Text */}
              <div className="bg-white rounded-lg p-6 flex flex-col items-center text-center space-y-5">
                <h3 className="text-xl font-semibold text-blue-800">{item.title}</h3>

                <FaArrowDown className="text-orange-400 text-2xl" />

                <p className="text-blue-400 text-sm max-w-[280px]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
