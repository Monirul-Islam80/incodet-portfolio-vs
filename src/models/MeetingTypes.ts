import mongoose from "mongoose";

const MeetingTypeSchema = new mongoose.Schema({
  title: { type: String, required: true }, 
  slug: { type: String, required: true, unique: true },
  duration: { type: Number, required: true },
  description: { type: String },
  locationType: { type: String, default: "Google Meet" }, 
  isActive: { type: Boolean, default: true },
});

export const MeetingType = mongoose.models.MeetingType || mongoose.model("MeetingType", MeetingTypeSchema);