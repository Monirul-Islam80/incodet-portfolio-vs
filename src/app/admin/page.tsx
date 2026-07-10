import { connectDB } from "@/lib/mongodb";
import { Booking } from "@/models/Booking";
import { Contact } from "@/models/Contact";
import { Calendar, MessageSquare, Clock } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  await connectDB();

  const bookingsData = await Booking.find().sort({ createdAt: -1 }).lean();
  const messagesData = await Contact.find().sort({ createdAt: -1 }).lean();

  const bookings = JSON.parse(JSON.stringify(bookingsData));
  const messages = JSON.parse(JSON.stringify(messagesData));

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Incodet Admin</h1>
          <p className="text-gray-400">Manage your discovery calls and incoming messages.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* BOOKINGS TABLE */}
          <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <Calendar className="text-blue-500 w-6 h-6" />
              <h2 className="text-xl font-semibold">Scheduled Calls</h2>
            </div>
            
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {bookings.length === 0 ? (
                <p className="text-gray-500">No bookings yet.</p>
              ) : (
                bookings.map((booking: any) => (
                  <div key={booking._id} className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-lg">{booking.clientName}</h3>
                        <a href={`mailto:${booking.clientEmail}`} className="text-sm text-blue-400 hover:underline">
                          {booking.clientEmail}
                        </a>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">
                          <Clock className="w-3.5 h-3.5" />
                          {booking.date} at {booking.timeSlot}
                        </span>
                      </div>
                    </div>
                    {booking.message && (
                      <div className="mt-3 text-sm text-gray-400 bg-black/20 p-3 rounded-lg">
                        {booking.message}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* MESSAGES TABLE */}
          <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <MessageSquare className="text-purple-500 w-6 h-6" />
              <h2 className="text-xl font-semibold">Direct Messages</h2>
            </div>
            
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {messages.length === 0 ? (
                <p className="text-gray-500">No messages yet.</p>
              ) : (
                messages.map((msg: any) => (
                  <div key={msg._id} className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-lg">{msg.name}</h3>
                        <p className="text-sm text-gray-400">{msg.company || "No company provided"}</p>
                        <a href={`mailto:${msg.email}`} className="text-sm text-purple-400 hover:underline">
                          {msg.email}
                        </a>
                      </div>
                      <span className="text-xs text-gray-500">
                        {new Date(msg.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="mt-3 text-sm text-gray-300 bg-black/20 p-3 rounded-lg leading-relaxed">
                      {msg.message}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}