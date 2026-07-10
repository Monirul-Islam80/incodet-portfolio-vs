// lib/mongodb.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env");
}

// Use a global variable to cache the connection in development
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  // If we already have a connection, return it immediately
  if (cached.conn) {
    return cached.conn;
  }

  // If a connection is currently being established, wait for it
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      family: 4, // 👈 Forces IPv4, fixes 'querySrv ECONNREFUSED' network errors
    };

    cached.promise = mongoose.connect(MONGODB_URI as string, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}