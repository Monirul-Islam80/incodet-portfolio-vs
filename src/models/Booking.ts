import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  clientEmail: { type: String, required: true },
  company: { type: String },
  message: { type: String },
  date: { type: String, required: true }, 
  timeSlot: { type: String, required: true }, 
  status: { type: String, enum: ["confirmed", "canceled"], default: "confirmed" },
  createdAt: { type: Date, default: Date.now },
});

export const Booking = mongoose.models.Booking || mongoose.model("Booking", BookingSchema);