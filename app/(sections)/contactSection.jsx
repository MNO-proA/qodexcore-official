"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { handleContactForm } from "@/actions/contactAction";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setError(null);

    try {
      const formResponse = await handleContactForm(new FormData(e.target));

      if (formResponse?.success) {
        setFormData({
          fullName: "",
          email: "",
          message: "",
        });
        e.target.reset(); // Reset form fields for uncontrolled elements
        setStatus(formResponse.message);
      } else {
        setError(
          formResponse?.message || "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen w-full relative bg-gray-900 flex items-center justify-center p-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/90" />
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('images/accra-1.jpg')`,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Left Column - Contact Info */}
          <motion.div {...fadeIn} className="space-y-8 text-white p-6">
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
                <p>Kumasi, Ghana</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            {...fadeIn}
            className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <input
                  name="fullName"
                  placeholder="Full Name"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
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
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-3 bg-white/5 border border-gray-500 rounded-md focus:outline-none focus:border-teal-400 text-white"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <textarea
                  name="message"
                  placeholder="Type your message..."
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full p-3 bg-white/5 border border-gray-500 rounded-md focus:outline-none focus:border-teal-400 text-white resize-none"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-[#28A745] text-white py-3 rounded-lg flex items-center justify-center shadow-md transition-all duration-300"
              >
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center space-x-3 px-6 py-3 text-white font-semibold bg-[#28A745] rounded-lg shadow-md hover:bg-[#23963D] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </motion.div>

              {status && (
                <p className="text-center text-white bg-[#23963D] py-2 mt-4 rounded-md shadow-md">
                  {status}
                </p>
              )}
              {error && (
                <p className="text-center text-white bg-[#D9534F] py-2 mt-4 rounded-md shadow-md">
                  {error}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
      
    </div>
  );
};

export default ContactUs;
