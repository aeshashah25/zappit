"use client";

import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
<<<<<<< HEAD
import { Html, OrbitControls, Stars } from "@react-three/drei";
=======
import { Html, OrbitControls } from "@react-three/drei";
>>>>>>> 87252843c6b89338908a95b4b759570e3cbe1c62
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stepContents = [
  {
    title: "Availability & Scheduling",
    description:
      "Eliminate long wait times with an efficient scheduling system...",
  },
  {
    title: "Fair & Transparent Booking",
    description:
      "Build trust with a fair and transparent booking system...",
  },
  {
    title: "Verified Profile Info",
    description:
      "Provide users with complete and trustworthy profiles...",
  },
  {
    title: "Amenities Overview",
    description:
      "Highlight all available amenities clearly—such as parking...",
  },
  {
    title: "Smart Filters & Comparison",
    description:
      "Help users find the right option quickly using filters...",
  },
  {
    title: "Direct Contact Access",
    description:
      "Ensure users can easily reach out to teams or owners...",
  },
];

const steps = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
<<<<<<< HEAD
=======
  angle: (-Math.PI / 2) + (i * Math.PI) / 5,
>>>>>>> 87252843c6b89338908a95b4b759570e3cbe1c62
}));

const arcRadius = 9.5;

export function User() {
  const [selectedStep, setSelectedStep] = useState(1);
  const contentRef = useRef(null);
  const circleRef = useRef(null);
  const stepRefs = useRef([]);
<<<<<<< HEAD
  const titleRef = useRef(null);
  stepRefs.current = [];

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(circleRef.current, {
      scrollTrigger: {
        trigger: circleRef.current,
        start: "top 80%",
=======
  stepRefs.current = [];

  // Add one-time scroll-triggered animations
  useEffect(() => {
    gsap.from(circleRef.current, {
      scrollTrigger: {
        trigger: circleRef.current,
        start: "top 80% ",
>>>>>>> 87252843c6b89338908a95b4b759570e3cbe1c62
      },
      rotation: 360,
      duration: 1,
      ease: "power2.out",
    });

    stepRefs.current.forEach((el, index) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
<<<<<<< HEAD
          start: "top 90%",
=======
          start: "top 90% ",
>>>>>>> 87252843c6b89338908a95b4b759570e3cbe1c62
        },
        y: 50,
        opacity: 0,
        duration: 0.5,
        delay: index * 0.2,
        ease: "power2.out",
      });
    });
  }, []);

<<<<<<< HEAD
=======
  // Auto-change steps every 3 seconds
>>>>>>> 87252843c6b89338908a95b4b759570e3cbe1c62
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedStep((prev) => (prev === 6 ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

<<<<<<< HEAD
=======
  // Animate content from bottom on selectedStep change
>>>>>>> 87252843c6b89338908a95b4b759570e3cbe1c62
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [selectedStep]);

<<<<<<< HEAD
  return (
 <div
  className="relative w-full h-auto md:min-h-screen aspect-[16/9] md:aspect-auto bg-cover bg-center bg-no-repeat mb-10"
  style={{ backgroundImage: `url('/images/turf_palying.jpg')` }}
>
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Top heading */}
      <div className="relative z-20 w-full text-center pt-8">
        <h1
          ref={titleRef}
          className="text-3xl md:text-4xl font-extrabold text-orange-700 "
        >
          User Challenges & Solutions
        </h1>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row max-w-7xl w-full mx-auto p-6 md:p-12 gap-12">
        {/* Left - 3D Canvas with semi-dark box behind */}
      <div className="relative w-full md:w-1/2 h-[400px] md:h-[600px] flex justify-center items-center">
  <Canvas camera={{ position: [0, 0, 30], fov: 45 }}>
    <ambientLight intensity={1} />
    <pointLight position={[10, 10, 10]} intensity={2} />
    <Stars radius={50} depth={50} count={2000} factor={4} fade speed={1} />
    <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />

    {/* Step Circles */}
    {steps.map((step, i) => {
      const angle = (-Math.PI / 2) + (i * Math.PI) / (steps.length - 1);
      const x = arcRadius * Math.cos(angle);
      const y = arcRadius * Math.sin(angle);

      return (
        <Html key={step.id} position={[x, y, 0]} center>
          <div
            ref={(el) => (stepRefs.current[i] = el)}
            onClick={() => setSelectedStep(step.id)}
            className="flex flex-col items-center gap-1 group cursor-pointer"
          >
            <div
              className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-transform duration-300 ${
                selectedStep === step.id ? "scale-125 rotate-12" : ""
              }`}
              style={{
                background:
                  selectedStep === step.id
                    ? "radial-gradient(circle at center, #ffee00, #ff6600)"
                    : "radial-gradient(circle at center, #ff9a3c, #ff6600)",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1rem",
                boxShadow: "0 0 15px rgba(255, 255, 0, 0.8)",
                border: "4px solid #fff",
              }}
            >
              <span className="text-base md:text-lg">{step.id}</span>
            </div>
            <div className="text-xs md:text-sm lg:text-base text-white font-semibold max-w-[120px] text-center">
              {stepContents[step.id - 1].title}
            </div>
          </div>
        </Html>
      );
    })}

    {/* Center Circle */}
    <Html center position={[0, 0, 0]}>
      <div
        ref={circleRef}
        className="w-32 h-32 md:w-56 md:h-56 bg-[#1f2b6c] rounded-full flex flex-col items-center justify-center text-center border-[6px] md:border-[8px] border-[#0b4b8e] animate-pulse shadow-2xl"
      >
        <div className="text-white font-bold text-sm md:text-xl lg:text-2xl leading-tight tracking-wide">
          Zaapit <br /> 6's <br /> Approach
        </div>
      </div>
    </Html>
  </Canvas>
</div>


        {/* Right - Text Content */}
    <div className="w-full max-w-md md:max-w-lg text-center flex flex-col justify-center items-center mx-auto">
  <div ref={contentRef}>
    <h3 className="text-lg md:text-3xl font-bold text-orange-300 mb-3">
      {stepContents[selectedStep - 1].title}
    </h3>
    <p className="text-white text-base md:text-lg italic">
      {stepContents[selectedStep - 1].description}
    </p>
  </div>
</div>

      </div>

      <style>
        {`
        .shimmer {
          background: linear-gradient(90deg, #fff 25%, #ff6600 50%, #fff 75%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 2s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        `}
      </style>
    </div>
  );
=======
return (
<div className="w-full px-4 py-10 md:py-16 bg-white/50 backdrop-blur-sm rounded-xl shadow-xl max-w-7xl mx-auto mb-8">
  <h2 className="text-3xl font-extrabold text-[#1f2b6c] text-center mb-10 tracking-tight">
    User Challenges & Solutions
  </h2>

  <div className="row flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-10">
    
    {/* Text Content */}
    <div
      ref={contentRef}
      className="col w-full md:w-6/12 text-center px-2 md:px-4"
    >
      <h3 className="text-lg md:text-4xl lg:text-5xl font-bold text-[#ff6600] mb-3 tracking-wide leading-tight">
        {stepContents[selectedStep - 1].title}
      </h3>
      <p className="text-[#1f2b6c] text-sm md:text-base lg:text-lg italic font-medium leading-relaxed max-w-xl mx-auto">
        {stepContents[selectedStep - 1].description}
      </p>
    </div>

    {/* 3D Canvas */}
    <div className="col w-full md:w-6/12 h-[360px] md:h-[500px] flex justify-center items-center z-10">
      <Canvas camera={{ position: [0, 0, 30], fov: 45 }}>
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />

        {/* Step Circles */}
        {steps.map((step, i) => {
          const stepsCount = steps.length;
const angle = (-Math.PI / 2) + (i * Math.PI) / (stepsCount - 1); // original: top-left-bottom (counter-clockwise)
          const x = arcRadius * Math.cos(angle);
          const y = arcRadius * Math.sin(angle);

          return (
            <Html key={step.id} position={[x, y, 0]} center>
              <div
                ref={(el) => (stepRefs.current[i] = el)}
                onClick={() => setSelectedStep(step.id)}
                className="flex flex-col items-center space-y-1 group"
              >
                <div
                  className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 ${
                    selectedStep === step.id ? "scale-110" : ""
                  }`}
                  style={{
                    background:
                      selectedStep === step.id
                        ? "radial-gradient(circle at center, #ff7e00, #ff6600)"
                        : "radial-gradient(circle at center, #ff9a3c, #ff6600)",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    boxShadow: "0 0 12px rgba(255, 102, 0, 0.8)",
                    border: "4px solid #fff",
                  }}
                >
                  {step.id}
                </div>
                <div className="text-[10px] md:text-sm text-center text-[#1f2b6c] max-w-[90px] md:max-w-[140px] font-semibold leading-snug tracking-tight">
                  {stepContents[step.id - 1].title}
                </div>
              </div>
            </Html>
          );
        })}

        {/* Center Circle */}
        <Html center position={[0, 0, 0]}>
          <div
            ref={circleRef}
            className="w-28 h-28 md:w-52 md:h-52 bg-[#1f2b6c] rounded-full flex flex-col items-center justify-center text-center border-[6px] md:border-[8px] border-[#0b4b8e]"
          >
            <div className="text-white font-bold text-sm md:text-xl leading-tight tracking-wide">
              Zaapit <br /> 6's <br /> Approach
            </div>
          </div>
        </Html>
      </Canvas>
    </div>
  </div>
</div>

);



>>>>>>> 87252843c6b89338908a95b4b759570e3cbe1c62
}
