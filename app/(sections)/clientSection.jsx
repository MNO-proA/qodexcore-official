"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { verifyClient } from "@/actions/verifyClient";
import { toast } from "sonner"
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";


const ClientVerificationCard = () => {
  const [clientCode, setClientCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [client, setClient] = useState(null);
  const [showComponent, setShowComponent] = useState(false);
    const [error, setError] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);

  useEffect(() => {
    setShowComponent(true);
  }, []);

 
  const handleVerifyClient = async () => {
    try {
      setLoading(true);
      setClient(null);
      setError(null);

      const response = await verifyClient(clientCode);

      if (response.success) {
        setClient(response.client);
        toast.success("Client Verified Successfully...")
        

      } else {
        toast.error('Client Verification Failed...')
        setError(response.error);
        setShowErrorModal(true); // Show error modal
      }
    } catch (error) {
      console.error("Error verifying client:", error);
      setError("An unexpected error occurred. Please try again later.");
      setShowErrorModal(true);
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden"
    >
      {/* Background Image with Animation */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/b3.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex justify-center items-center w-full max-w-4xl gap-8">
        {/* Verification Card */}
        <AnimatePresence>
          {!client && showComponent && (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-96 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-6"
            >
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800">Client Verification</h2>
                  <p className="text-sm text-gray-500 mt-1">Enter your client code to view details</p>
                </div>

                <div className="space-y-4">
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                    placeholder="Enter client code"
                    value={clientCode}
                    onChange={(e) => setClientCode(e.target.value)}
                  />

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleVerifyClient}
                    disabled={loading || !clientCode}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Verifying...
                      </span>
                    ) : (
                      'Verify Code'
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Client Information Card */}
        <AnimatePresence>
          {client && (
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-96 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800">Client Details</h3>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                    {client.code}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-500">Company Name</label>
                    <p className="text-base font-semibold text-gray-800">{client.name}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm text-gray-500">Service</label>
                    <p className="text-base font-semibold text-gray-800">{client.service}</p>
                  </div>

                  <div>
                    <label className="text-sm text-gray-500">Payment Link</label>
                    <a href={client.paymentLink} className="text-base font-semibold text-purple-600 hover:text-purple-700 break-all">
                    <br/>
                      {client.paymentLink}
                    </a>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <motion.a 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={client.paymentLink}
                      className="block w-full text-center bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Make Payment
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
         {/* ShadCN Alert Modal for Errors */}
      <AlertDialog open={showErrorModal} onOpenChange={setShowErrorModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-red-600">Verification Failed</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-600">
              {error}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button variant="destructive" onClick={() => setShowErrorModal(false)}>
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      </div>
    </motion.div>
  );
};

export default ClientVerificationCard;


