"use client";

import {useState, useEffect} from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
    {
      id: "software-dev",
      title: "Software Development",
      icon: "/images/e1.jpg",
      items: [
        "Web & Mobile App Development",
        "Custom Software Solutions",
        "Progressive Web Apps (PWA)",
        "Enterprise Software Development",
        "API Development & Integration",
        "Software Architecture & Code Optimization",
        "Scalability & Performance Tuning",
        "UI/UX Design & Frontend Engineering",
      ],
    },
    {
      id: "ai-data",
      title: "AI & Data Solutions",
      icon: "/images/e12.webp",
      items: [
        "Data Analysis, Visualization & Dashboards",
        "Machine Learning Model Development",
        "Predictive & Prescriptive Analytics",
        "Natural Language Processing (NLP)",
        "Generative AI & Large Language Models",
        "AI-Powered Automation & Decision Systems",
        "MLOps & AI Model Deployment",
        "AI Consulting & Strategy",
      ],
    },
    {
      id: "cloud",
      title: "Cloud Computing",
      icon: "/images/cloud.png",
      items: [
        "Cloud Infrastructure & Networking",
        "Serverless & Edge Computing",
        "Hybrid & Multi-Cloud Deployment",
        "Cloud Security & Compliance",
        "Scalability, Load Balancing & Auto-scaling",
        "Cloud Storage, Backup & Disaster Recovery",
        "DevOps, CI/CD Pipelines & Automation",
        "Containerization (Docker, Kubernetes)",
        "API Gateways & Microservices Architecture",
        "Cloud Cost Optimization & FinOps",
      ],
    },
    {
      id: "automation",
      title: "Business Automation",
      icon: "/images/bpa.webp",
      items: [
        "Robotic Process Automation (RPA)",
        "AI-Powered Chatbots & Virtual Assistants",
        "Workflow Automation & CRM Systems",
        "AI Agents & Intelligent Workflows",
        "E-commerce & Payment Automation",
        "Document Processing & OCR Automation",
        "Voice AI & AI-driven Call Centers",
      ],
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      icon: "/images/e7.avif",
      items: [
        "SEO Optimization & Growth Strategy",
        "Content Strategy & Marketing",
        "Social Media Campaigns & Ads",
        "Brand Development & Positioning",
        "A/B Testing & Performance Analytics",
        "Marketing Automation & AI-Powered Ads",
        "Email & Influencer Marketing",
      ],
    },
    {
      id: "ecommerce",
      title: "E-Commerce Solutions",
      icon: "/images/e8.jpg",
      items: [
        "E-commerce Website & App Development",
        "Payment Gateway & Subscription Management",
        "Inventory & Order Management Systems",
        "Omnichannel Commerce Integration",
        "Conversion Rate Optimization (CRO)",
        "AI-Powered Product Recommendations",
        "Marketplace & Multi-Vendor Solutions",
      ],
    },
  ];
  

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
      <Card className="h-full overflow-hidden group">
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
        <CardContent className="p-6 bg-white dark:bg-gray-900">
          <CardTitle className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
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
                className="text-gray-600 dark:text-gray-300 flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2 text-purple-500"
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



const backgroundImages = [
    "/images/tech-white.jpg",
    "/images/abs.jpg",
    "/images/circuit.jpg",
    "/images/c1.jpg",
    "/images/c2.jpg",
    "/images/c3.jpg",
    "/images/c4.jpg",
    "/images/c5.jpg",
    "/images/c6.jpg",
    "/images/c7.jpg"
];

export default function ServicesSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % backgroundImages.length
            );
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen bg-transparent dark:bg-gray-900 py-20 px-4 overflow-hidden">
            {/* Transitioning Background */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                        duration: 1.5, 
                        ease: "easeInOut" 
                    }}
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url("${backgroundImages[currentImageIndex]}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 },
                }}
                className="bg-transparent container mx-auto relative z-10"
            >
                <h2 className="mt-10 lg:text-5xl text-3xl md:text-4xl text-center font-bold mb-6 bg-gradient-to-r from-[#6B403C] to-[#58855C] bg-clip-text text-transparent drop-shadow-lg">
                    Unique Technologies & Modern Approach
                </h2>
                <div className="bg-transparent grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
