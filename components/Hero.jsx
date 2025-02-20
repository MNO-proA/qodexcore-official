"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
            <motion.button
              className="group bg-[#4EE891] hover:bg-purple-500 text-gray-900 px-3 py-3 text-lg rounded-full flex items-center"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(78, 232, 145, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
                
              }}
              onClick={() => setIsHovered(true)}
            >
              <span className="relative">Get Started</span>
              <motion.div
                className="ml-2"
                initial={{ x: 0 }}
                whileHover={{
                  x: 5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                <ChevronRight className="h-5 w-5" />
              </motion.div>
            </motion.button>
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
// "use client";

// import { useEffect, useState } from "react";
// import { ChevronRight } from "lucide-react";
// import { motion } from "framer-motion";

// const HeroSection = ({ setIsHovered }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Background Video */}
//       <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
//         <source src="/videos/ai-vid.mp4" type="video/mp4" />
//       </video>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-purple-900/50" />

//       {/* Content */}
//       <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col justify-center h-full space-y-8">
//           <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl">
//             Innovation in Business
//           </h1>

//           <div className="flex space-x-4 text-lg text-gray-300">
//             <span>Software</span>
//             <span>•</span>
//             <span>AI</span>
//             <span>•</span>
//             <span>Digital Marketing</span>
//           </div>

//           <motion.button
//             className="group bg-[#4EE891] hover:bg-purple-500 text-gray-900 px-4 py-3 text-lg rounded-full flex items-center"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setIsHovered(true)}
//           >
//             <span className="relative">Get Started</span>
//             <motion.div
//               className="ml-2"
//               initial={{ x: 0 }}
//               whileHover={{ x: 5 }}
//             >
//               <ChevronRight className="h-5 w-5" />
//             </motion.div>
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
