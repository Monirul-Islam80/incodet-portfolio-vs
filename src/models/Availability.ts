import mongoose from "mongoose";
const AvailabilitySchema = new mongoose.Schema({
  // Weekly hours (e.g., Mon: 9:00 AM - 5:00 PM)
  weeklyHours: [{
    dayOfWeek: { type: Number, required: true }, // 0 (Sunday) to 6 (Saturday)
    isAvailable: { type: Boolean, default: true },
    slots: [{ type: String }] // ["09:00 AM", "09:30 AM", "10:00 AM", ...]
  }],
  // Dates the client is out of office
  blackoutDates: [{ type: String }], // Array of "YYYY-MM-DD"
  timezone: { type: String, default: "America/New_York" },
});

export const Availability = mongoose.models.Availability || mongoose.model("Availability", AvailabilitySchema);