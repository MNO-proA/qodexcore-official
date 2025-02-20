import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  service: { type: String, required: true },
  paymentLink: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Client || mongoose.model("Client", ClientSchema);
