"use server";

import { connectToDatabase } from "@/lib/mongodb";
import Client from "@/models/Client";

export async function addClient(clientData) {
  try {
    await connectToDatabase();

    // Check if client already exists
    const existingClient = await Client.findOne({ code: clientData.code });
    if (existingClient) {
      return { success: false, error: "Client code already exists" };
    }

    // Create and save new client
    const newClient = new Client(clientData);
    await newClient.save();

    // Return a plain object instead of the full Mongoose document
    return {
      success: true,
      client: {
        code: newClient.code,
        name: newClient.name,
        service: newClient.service,
        paymentLink: newClient.paymentLink,
      },
    };
  } catch (error) {
    console.error("Error adding client:", error);
    return { success: false, error: "Failed to add client" };
  }
}

