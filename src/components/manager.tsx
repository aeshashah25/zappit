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
  <div className="w-full px-4 py-10 md:py-14 bg-white/40 backdrop-blur-sm rounded-xl shadow-xl max-w-7xl mx-auto ">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#1f2b6c] text-center mb-8 tracking-tight">
        Manager Challenges & Solutions
      </h2>

      <div className="mt-1 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {solutions.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#ff6600] hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center text-center space-y-4"
          >
            <h3 className="text-xl font-semibold text-[#1f2b6c]">{item.title}</h3>
            <FaArrowDown className="text-[#ff6600] text-lg" />
            <p className="text-gray-700 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
