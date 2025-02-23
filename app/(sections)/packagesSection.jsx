"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { packages, maintenancePackages } from "@/data";

const PricingPackagesSection = () => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const containerRef = useRef(null);
    const videoRefs = useRef([]);

    const videos = [
        "/videos/packages.mp4",
        "/videos/packages2.mp4"
    ];

    // Handle scroll-based video switching
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const container = containerRef.current;
            const scrollPosition = window.scrollY;
            const containerHeight = container.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollPercentage = (scrollPosition / (containerHeight - windowHeight)) * 100;

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
                        playPromise.catch(error => {
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
                duration: 0.5 
            } 
        },
        hover: { 
            scale: 1.05, 
            y: -10, 
            transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
            } 
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
            transition: { 
                staggerChildren: 0.2,
                duration: 0.5
            } 
        }
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.5,
                delay: 0.2
            }
        }
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
                            ref={el => videoRefs.current[index] = el}
                            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                                currentVideo === index ? 'opacity-100' : 'opacity-0'
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
                <div className="absolute inset-0 z-10 bg-black bg-opacity-70" />
            </div>

            {/* Content */}
            <div className="relative z-20 px-4 py-16 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                        Transform Your Digital Presence
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                        From simple websites to complex web applications, we craft digital solutions 
                        that help your business thrive in the modern world.
                    </p>
                </motion.div>

                {/* Rest of the component remains the same */}
                {/* ... Packages and Maintenance sections ... */}
                {/* (I've removed them for brevity but they stay exactly the same) */}
                
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
                >
                    {packages.map((pkg) => (
                        <motion.div key={pkg.title} variants={cardVariants} whileHover="hover" className="h-full">
                            <Card className="h-full bg-white bg-opacity-95 backdrop-blur-sm">
                                <CardHeader className="text-center">
                                <div className="mx-auto mb-4">{pkg.icon}</div>
                                    <motion.h3 
                                        variants={contentVariants}
                                        className="text-2xl font-bold text-gray-200"
                                    >
                                        {pkg.title}
                                    </motion.h3>
                                    <motion.p 
                                        variants={contentVariants}
                                        className="text-3xl font-bold text-purple-600"
                                    >
                                        {pkg.price}
                                    </motion.p>
                                </CardHeader>
                                <CardContent>
                                    <motion.ul variants={contentVariants} className="space-y-3">
                                        {pkg.features.map((feature) => (
                                            <motion.li
                                                key={feature}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="flex items-center gap-2"
                                            >
                                                <Check className="w-5 h-5 text-purple-500" />
                                                <span className="text-gray-200">{feature}</span>
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-transform">
                                        Get Started
                                    </Button>
                                </CardFooter>
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
                    <h2 className="text-4xl font-bold mb-6 text-white">Website Maintenance & Support</h2>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                        Keep your website running smoothly with our comprehensive maintenance packages.
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
                        <motion.div key={pkg.title} variants={cardVariants} whileHover="hover" className="h-full">
                            <Card className="h-full bg-white bg-opacity-95 backdrop-blur-sm">
                                <CardHeader className="text-center">
                                    <motion.h3 
                                        variants={contentVariants}
                                        className="text-2xl font-bold text-gray-200"
                                    >
                                        {pkg.title}
                                    </motion.h3>
                                    <motion.div 
                                        variants={contentVariants}
                                        className="flex items-end justify-center gap-1"
                                    >
                                        <span className="text-3xl font-bold text-purple-600">{pkg.price}</span>
                                        <span className="text-gray-200">/{pkg.period}</span>
                                    </motion.div>
                                </CardHeader>
                                <CardContent>
                                    <motion.ul variants={contentVariants} className="space-y-3">
                                        {pkg.features.map((feature) => (
                                            <motion.li
                                                key={feature}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="flex items-center gap-2"
                                            >
                                                <Check className="w-5 h-5 text-purple-500" />
                                                <span className="text-gray-200">{feature}</span>
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-transform">
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