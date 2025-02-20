
"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Coins, Brain } from "lucide-react";
import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("@/components/Hero3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen flex items-center justify-center text-white">
      Loading...
    </div>
  ),
});

const AboutSection = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/herobg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-indigo-900/80 to-purple-900/90" />
      </div>

      {/* Main Content */}
      <div className="mt-32 md:mt-2 relative z-10 container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                Architects of Digital Innovation
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                We're not just another software agency; 
                <br /> 
                we're architects of digital experiences.
                <br /> 
                We're the team you turn to when you need more than just code – you need a partner 
                <br /> 
                who understands your vision and can bring it to life with cutting-edge technology.
              </p>
            </motion.div>

            {/* Features Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-white/10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <Brain className="w-6 sm:w-8 h-6 sm:h-8 text-indigo-400" />
                  <span className="text-white text-sm sm:text-base">AI-Powered Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-indigo-400" />
                  <span className="text-white text-sm sm:text-base">Secure Integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <Coins className="w-6 sm:w-8 h-6 sm:h-8 text-indigo-400" />
                  <span className="text-white text-sm sm:text-base">Payment Solutions</span>
                </div>
              </div>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/5 p-4 sm:p-6 rounded-lg border border-white/10"
            >
              <h3 className="text-white font-medium mb-2">Our Mission 2025</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                To be the leading provider of innovative, AI-powered software solutions in Ghana, 
                seamlessly integrating secure payment technologies to fuel 
                growth and transform digital experiences for our clients in commerce or retail.
              </p>
            </motion.div>
          </div>

          {/* Right Column: 3D Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto">
              <Hero3D />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
