"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const ContactUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen w-full relative bg-gray-900 flex items-center justify-center p-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/90" />
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('images/accra-1.jpg')`
          }}
        />
      </div>

      {/* Content Container */}
      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <motion.div 
            {...fadeIn}
            className="space-y-8 text-white p-6"
          >
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-20 text-3xl font-bold mb-6"
            >
              Contact Us
            </motion.h2>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-[#ADEBB3]" />
                <p>(233) 54-444-6455</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-[#ADEBB3]" />
                <p>admin@qodexcore.com</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="w-5 h-5 text-[#ADEBB3]" />
                <p>Accra, Ghana</p>
                <p> | </p>
                <p >Kumasi, Ghana</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            {...fadeIn}
            className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-xl"
          >
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 bg-white/5 border border-gray-500 rounded-md focus:outline-none focus:border-teal-400 text-white"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 bg-white/5 border border-gray-500 rounded-md focus:outline-none focus:border-teal-400 text-white"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <textarea
                  placeholder="Type your message..."
                  rows={4}
                  className="w-full p-3 bg-white/5 border border-gray-500 rounded-md focus:outline-none focus:border-teal-400 text-white resize-none"
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#ADEBB3] text-[#4A4A4A] hover:text-white py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-[#58855C] transition-colors"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 " />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;