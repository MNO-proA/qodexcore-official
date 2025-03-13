"use client";

import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data";

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 10,
        },
      }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
        transition: { duration: 0.3 },
      }}
      className="relative"
    >
      <Card className="h-full overflow-hidden group backdrop-blur-md bg-white/10 border border-white/20 shadow-xl">
        <CardHeader className="relative p-0 overflow-hidden h-72">
          <motion.img
            src={service.icon}
            alt={`${service.title} icon`}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 300,
              },
            }}
            whileHover={{
              scale: 1.1,
              rotate: 5,
            }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 300,
            }}
            className="w-full h-full object-cover"
          />
        </CardHeader>
        <CardContent className="h-full p-6 bg-gradient-to-b from-gray-900/80 to-gray-800/90 backdrop-blur-sm">
          <CardTitle className="text-2xl font-bold mb-4 text-cyan-300">
            {service.title}
          </CardTitle>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            }}
            className="space-y-2"
          >
            {service.items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.3 },
                }}
                className="text-white flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2 text-cyan-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function ServicesSection() {
  return (
    <section className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Fixed Robot Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url("/images/robot-fishing.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.8)'
        }}
      />
      
      {/* Overlay gradient to improve content visibility */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900/30 to-gray-900/70" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 },
        }}
        className="container mx-auto relative z-10"
      >
        <h2 className="mt-10 lg:text-5xl text-3xl md:text-4xl text-center font-bold mb-12 text-white drop-shadow-[0_2px_8px_rgba(0,200,255,0.8)]">
          Unique Technologies & Modern Approach
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}