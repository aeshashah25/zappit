'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from 'lucide-react';

export default function Footer() {
  const [showFooter, setShowFooter] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowFooter(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sentinelRef.current) observer.observe(sentinelRef.current);

    return () => {
      if (sentinelRef.current) observer.unobserve(sentinelRef.current);
    };
  }, []);

  return (
    <>
      {/* Sentinel div at the bottom of the page */}
      <div ref={sentinelRef} className="w-full h-1"></div>

      <footer
        className={`bg-white text-black-100 w-full py-6 px-4 sm:px-8 lg:px-24 transition-all duration-500 ease-in-out transform ${
          showFooter ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-10">

          {/* Left Column */}
          <div className="flex flex-col space-y-2 md:space-y-4 md:w-1/4 items-center md:items-start">
            <Image src="/images/logo name.png" alt="Zappit Logo" width={120} height={30} />
            <p className="font-semibold text-blue-600 text-center md:text-left text-xs sm:text-sm">
              © 2025 Techicom<br />
              All Rights Reserved.
            </p>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-10 w-full text-center md:text-left">
            
            {/* Company */}
            <div>
              <h4 className="font-semibold mb-2 text-orange-600">Company</h4>
              <ul className="space-y-1 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-blue-500 transition">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500 transition">Learn</a></li>
                <li><a href="#" className="hover:text-blue-500 transition">Contact</a></li>
                <li><a href="#" className="hover:text-blue-500 transition">Careers</a></li>
                <li><a href="#" className="hover:text-blue-500 transition">Partner With Us</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-2 text-orange-600">Social</h4>
              <ul className="space-y-1 text-xs sm:text-sm">
                <li><a href="#" className="flex items-center gap-1 justify-center md:justify-start hover:text-blue-500 transition"><Instagram size={14} /> Instagram</a></li>
                <li><a href="#" className="flex items-center gap-1 justify-center md:justify-start hover:text-blue-500 transition"><Facebook size={14} /> Facebook</a></li>
                <li><a href="#" className="flex items-center gap-1 justify-center md:justify-start hover:text-blue-500 transition"><Linkedin size={14} /> LinkedIn</a></li>
                <li><a href="#" className="flex items-center gap-1 justify-center md:justify-start hover:text-blue-500 transition"><Twitter size={14} /> Twitter</a></li>
              </ul>
            </div>

            {/* Privacy */}
            <div>
              <h4 className="font-semibold mb-2 text-orange-600">Privacy & Terms</h4>
              <ul className="space-y-1 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-blue-500 transition">FAQs</a></li>
                <li><a href="#" className="hover:text-blue-500 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-500 transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-500 transition">Cancellation Policy</a></li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}
