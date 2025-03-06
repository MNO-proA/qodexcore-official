"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { packages, maintenancePackages } from "@/data";

const PricingPackagesSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const containerRef = useRef(null);
  const videoRefs = useRef([]);

  const videos = ["/videos/packages.mp4", "/videos/packages2.mp4"];

  // Handle scroll-based video switching
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const scrollPosition = window.scrollY;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollPercentage =
        (scrollPosition / (containerHeight - windowHeight)) * 100;

      if (scrollPercentage > 75 && currentVideo !== 1) {
        setCurrentVideo(1);
      } else if (scrollPercentage <= 75 && currentVideo !== 0) {
        setCurrentVideo(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentVideo]);

  // Play videos when they become active
  useEffect(() => {
    videoRefs.current.forEach((ref, index) => {
      if (ref) {
        if (index === currentVideo) {
          const playPromise = ref.play();
          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              console.log("Video play failed:", error);
            });
          }
        } else {
          ref.pause();
        }
      }
    });
  }, [currentVideo]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Background Video Container */}
      <div className="fixed top-0 left-0 w-full h-full">
        {/* Videos */}
        <div className="absolute inset-0 z-0">
          {videos.map((video, index) => (
            <video
              key={index}
              ref={(el) => (videoRefs.current[index] = el)}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                currentVideo === index ? "opacity-100" : "opacity-0"
              }`}
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src={video} type="video/mp4" />
            </video>
          ))}
        </div>

        {/* Overlay - Always visible */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-teal-900/70 via-indigo-900/70 to-purple-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-20 px-4 py-16 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-20"
        >
          <h1 className="lg:text-5xl text-3xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
            Transform Your Digital Presence
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            From simple websites to complex web applications, we craft digital
            solutions that help your business thrive in the modern world.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 items-center"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              variants={cardVariants}
              whileHover="hover"
              className={`h-full ${
                index === packages.length - 1 && packages.length % 3 !== 0
                  ? "lg:col-start-2 lg:col-span-1 flex justify-center"
                  : ""
              }`}
            >
              <Card
                className={`h-full bg-white/90 backdrop-blur-sm border-0 shadow-2xl ${
                  index === packages.length - 1 && packages.length % 3 !== 0
                    ? "w-full max-w-[28rem]"
                    : "w-full max-w-xs md:max-w-sm"
                }`}
              >
                <CardHeader className="text-center bg-gradient-to-br from-teal-100 to-pink-100 bg-opacity-50 py-6">
                  <div className="mx-auto mb-2">{pkg.icon}</div>
                  <motion.h3
                    variants={contentVariants}
                    className="text-xl font-bold text-gray-800"
                  >
                    {pkg.title}
                  </motion.h3>
                  <motion.p
                    variants={contentVariants}
                    className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-pink-600 bg-clip-text text-transparent"
                  >
                    {pkg.price}
                  </motion.p>
                </CardHeader>
                <CardContent className="bg-white/60">
                  <motion.ul variants={contentVariants} className="space-y-3">
                    {pkg.features.map((feature) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-2"
                      >
                        <Check className="w-5 h-5 text-teal-600" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Maintenance Packages Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-500 to-teal-400 bg-clip-text text-transparent">
            Website Maintenance & Support
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Keep your website running smoothly with our comprehensive
            maintenance packages.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {maintenancePackages.map((pkg) => (
            <motion.div
              key={pkg.title}
              variants={cardVariants}
              whileHover="hover"
              className="h-full"
            >
              <Card className="h-full bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
                <CardHeader className="text-center bg-gradient-to-br from-orange-100 to-teal-100 bg-opacity-50 py-6">
                  <motion.h3
                    variants={contentVariants}
                    className="text-2xl font-bold text-gray-800"
                  >
                    {pkg.title}
                  </motion.h3>
                  <motion.div
                    variants={contentVariants}
                    className="flex items-end justify-center gap-1"
                  >
                    <span className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-teal-600 bg-clip-text text-transparent">
                      {pkg.price}
                    </span>
                    <span className="text-gray-600">/{pkg.period}</span>
                  </motion.div>
                </CardHeader>
                <CardContent className="bg-white/60">
                  <motion.ul variants={contentVariants} className="space-y-3">
                    {pkg.features.map((feature) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-2"
                      >
                        <Check className="w-5 h-5 text-orange-600" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </CardContent>
                <CardFooter className="bg-gradient-to-br from-orange-50 to-teal-50">
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-teal-600 hover:from-orange-700 hover:to-teal-700 text-white hover:scale-105 transition-transform">
                    Subscribe Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPackagesSection;
