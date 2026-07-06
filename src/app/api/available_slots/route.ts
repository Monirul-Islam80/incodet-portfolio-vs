import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Booking } from "@/models/Booking"; // Adjust this import to your actual path!

export const dynamic = "force-dynamic"; // Prevents Next.js from aggressively caching this

export async function GET() {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGODB_URI as string);
    }

    // Get today's date formatted as YYYY-MM-DD to use in our query
    const today = new Date().toISOString().split('T')[0];

    // Find ALL bookings from today onward
    const bookedData = await Booking.find({ 
      date: { $gte: today }, // $gte means "Greater than or equal to"
      status: { $ne: "canceled" } // Ignore canceled ones
    }).select("date timeSlot -_id"); // We only need the date and time strings

    // Returns an array like: [{ date: "2026-10-15", timeSlot: "10:00 AM" }, ...]
    return NextResponse.json(bookedData, { status: 200 });

  } catch (error) {
    console.error("[FETCH_BOOKED_ERROR]", error);
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
  }
}