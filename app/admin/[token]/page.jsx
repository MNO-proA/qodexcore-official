"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Get token from URL
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { addClient } from "@/actions/addClient"; // Import server action
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription } from "@/components/ui/alert-dialog";

const ADMIN_TOKEN = process.env.NEXT_PUBLIC_ADMIN_SECRET_CODE; // Use NEXT_PUBLIC for frontend

const ClientForm = () => {
  const params = useParams();
  const [token, setToken] = useState(null);
  const [clientData, setClientData] = useState({
    code: "",
    name: "",
    service: "",
    paymentLink: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Set token once on client side
  useEffect(() => {
    if (params?.token) {
      setToken(params.token);
    }
  }, [params]);

  const handleChange = (e) => {
    setClientData({ ...clientData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await addClient(clientData);
      if (response.success) {
        setSuccess(true);
        setClientData({ code: "", name: "", service: "", paymentLink: "" });
      } else {
        setError(response.error);
      }
    } catch (err) {
      console.error("Error adding client:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Wait until token is available to render content
  if (token === null) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  if (token !== ADMIN_TOKEN) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-600">Unauthorized</h2>
          <p className="text-gray-600">You are not authorized to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-4 text-center">Add Client</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input name="code" placeholder="Client Code" value={clientData.code} onChange={handleChange} required />
      <Input name="name" placeholder="Client Name" value={clientData.name} onChange={handleChange} required />
      <Input name="service" placeholder="Service" value={clientData.service} onChange={handleChange} required />
      <Input name="paymentLink" placeholder="Payment Link" value={clientData.paymentLink} onChange={handleChange} required />

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Submit"}
      </Button>
    </form>

    {/* Error Modal */}
    <AlertDialog open={!!error} onOpenChange={() => setError(null)}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-red-600">Error</AlertDialogTitle>
          <AlertDialogDescription>{error}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button variant="destructive" onClick={() => setError(null)}>Close</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

    {/* Success Modal */}
    <AlertDialog open={success} onOpenChange={() => setSuccess(false)}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-green-600">Success</AlertDialogTitle>
          <AlertDialogDescription>Client added successfully!</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button onClick={() => setSuccess(false)}>OK</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </div>
</div>

  );
};

export default ClientForm;
