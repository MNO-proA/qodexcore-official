"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useHeader } from "@/context/HeaderContext"; 

const generateDots = (count) => {
  return Array.from({ length: count }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${Math.random() * 4 + 2}px`,
    height: `${Math.random() * 4 + 2}px`,
    animationDuration: `${Math.random() * 3 + 2}s`,
    animationDelay: `${Math.random()}s`,
  }));
};

const HeroSection = () => {
  const { isHovered, setIsHovered } = useHeader();
  const [dots, setDots] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    setDots(generateDots(20)); // Only generate on the client
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/ai-vid.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-purple-900/50" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full space-y-8">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <img
              src="/favicon_qodexcore.svg"
              alt="Qodexcore Logo"
              className="w-24 h-24"
            />
          </div>

          <h1
            className={`text-4xl md:text-6xl font-bold text-white max-w-3xl transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Innovation in Business
          </h1>

          <div
            className={`flex space-x-4 text-lg text-gray-300 transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span>Software</span>
            <span>•</span>
            <span>AI</span>
            <span>•</span>
            <span>Digital Marketing</span>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Enhanced arrow icon - hidden on mobile */}
            <motion.div 
              className="hidden md:flex justify-center mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="relative p-4 rounded-full cursor-pointer flex items-center justify-center"
                whileHover={{ 
                  scale: 1.2
                }}
                onClick={() => setIsHovered(true)}
              >
                {/* Pulsing ring effect */}
                <motion.div 
                  className="absolute w-16 h-16 rounded-full bg-[#4EE891]/20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 0.3, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }}
                />
                
                {/* Solid background circle */}
                <div className="absolute w-14 h-14 rounded-full bg-[#4EE891]/30" />
                
                {/* Bouncing arrow */}
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }}
                  className="z-10"
                >
                  <ChevronDown className="h-12 w-12 text-white drop-shadow-lg" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated dots */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <div className="relative h-full">
          {dots.map((dot, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/30"
              style={{
                left: dot.left,
                top: dot.top,
                width: dot.width,
                height: dot.height,
                animation: `float ${dot.animationDuration} ease-in-out infinite`,
                animationDelay: dot.animationDelay,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;