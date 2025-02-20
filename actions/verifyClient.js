"use server";

import { connectToDatabase } from "@/lib/mongodb";
import Client from "@/models/Client";

export async function verifyClient(code) {
  if (!code) {
    return { error: "Client code is required" };
  }

  try {
    await connectToDatabase();
    const client = await Client.findOne({ code });

    if (!client) {
      return { error: "Client not found" };
    }

    return {
      success: true,
      client: {
        code: client.code,
        name: client.name,
        service: client.service,
        paymentLink: client.paymentLink,
      },
    };
  } catch (error) {
    console.error("Error verifying client:", error);
    return { error: "Server error, please try again later" };
  }
}
