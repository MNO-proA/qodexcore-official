"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white overflow-hidden">
      {/* Hero Video Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <motion.video
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/powered-servers.mp4" type="video/mp4" />
        </motion.video>

        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }} // Smoothly disappears when scrolled away
          transition={{ duration: 1, ease: "backOut" }}
          className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50"
        >
          <h1 className="text-2xl lg:text-6xl text-gray-50 font-extrabold tracking-tight drop-shadow-[0_2px_8px_rgba(0,200,255,0.8)] flex items-center">
            ABOUT
            <br />
            <span className="inline-block h-24 w-24 -mr-4 ml-2">
              <img
                src="favicon_qodexcore.svg"
                alt="Logo"
                className="h-full w-full"
              />
            </span>
            <span className="text-[#4EE891]">ODEX</span>
            CORE
          </h1>
        </motion.div>
      </div>

      {/* Content Section - Animates when in view, disappears when out */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ amount: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
        className="container mx-auto px-4 py-16"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section - Fades in and fades out smoothly */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#4EE891] to-[#FF857A] bg-clip-text text-transparent drop-shadow-lg">
              Architects of Digital Innovation
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              We&apos;re not just another software agency; <br />
              we&apos;re architects of digital experiences. <br />
              We&apos;re the team you turn to when you need more than just code
              – you need a partner who understands your vision and can bring it
              to life with cutting-edge technology.
            </p>
            <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      viewport={{ amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="mt-8"
    >
      <Link href="/contact-us">
        <motion.button
          className="px-8 py-3 rounded-full font-medium text-white bg-gradient-to-r from-[#4EE891] to-[#FF857A] hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </Link>
    </motion.div>
          </motion.div>

          {/* Video Section - Slides in and slides out smoothly */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full h-[400px]"
          >
            <motion.video
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
            >
              <source src="/videos/tech-story.mp4" type="video/mp4" />
            </motion.video>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
