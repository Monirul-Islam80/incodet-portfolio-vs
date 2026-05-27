"use client";

import { useState } from "react";
import {
  LogOut,
  CheckCircle2,
  CircleDashed,
  Circle,
  PenTool,
  FileText,
  ExternalLink,
  CreditCard,
  Lock,
  ArrowRight,
  Sparkles,
  Clock,
  Download,
} from "lucide-react";
import Image from "next/image";
import logo from "../icon.png";

// --- MOCK DATA ---
const projectData = {
  clientName: "Jhon Doe",
  projectName: "AI-Powered Task Manager",
  progress: 65,
  status: "In Progress",
  dueDate: "Dec 15, 2026",
  stages: [
    {
      id: 1,
      title: "Discovery & Requirements",
      date: "Oct 10",
      status: "completed",
    },
    {
      id: 2,
      title: "UI/UX Design (Figma)",
      date: "Oct 24",
      status: "completed",
    },
    { id: 3, title: "Frontend Development", date: "Nov 12", status: "current" },
    {
      id: 4,
      title: "Backend & AI Integration",
      date: "Nov 30",
      status: "upcoming",
    },
    { id: 5, title: "Testing & QA", date: "Dec 05", status: "upcoming" },
    { id: 6, title: "Final Launch", date: "Dec 15", status: "upcoming" },
  ],
  resources: [
    {
      name: "Product Requirements Document",
      type: "Notion",
      icon: FileText,
      link: "#",
    },
    {
      name: "High-Fidelity Wireframes",
      type: "Figma",
      icon: PenTool,
      link: "#",
    },
    {
      name: "Frontend Staging Server",
      type: "Vercel",
      icon: ExternalLink,
      link: "#",
    },
  ],
  billing: {
    type: "Milestone", // Could be "One-time", "Milestone", or "Monthly"
    total: "$12,000.00",
    paid: "$4,000.00",
    nextPayment: {
      name: "Milestone 2: Frontend Completion",
      amount: "$4,000.00",
      dueDate: "Nov 15, 2026",
      status: "due", // "paid", "due", "upcoming"
    },
  },
};

export default function ClientDashboard() {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate Stripe redirect
    setTimeout(() => {
      setIsProcessing(false);
      alert("Redirecting to secure Stripe Checkout...");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans selection:bg-blue-500/30">
      {/* --- TOP NAVIGATION --- */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <a
                href="#"
                className="w-10 h-10 relative rounded-full px-5 py-3 bg-[#3a3a3a] flex items-center justify-center text-white hover:bg-[#4a4a4a] transition-colors shadow-lg"
                aria-label="Home"
              >
                <Image
                  src={logo}
                  style={{ borderRadius: "inherit" }}
                  fill={true}
                  alt="logo of incodet"
                />
              </a>
            </div>
            <span className="text-xl font-bold tracking-widest text-white">
              INCODET
            </span>
            <span className="mx-4 text-white/20">|</span>
            <span className="text-sm font-medium text-gray-400">
              Client Portal
            </span>
          </div>

          <button className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Dashboard Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Welcome back, {projectData.clientName}
          </h1>
          <p className="text-gray-400 text-lg">
            Here is the latest progress on the{" "}
            <span className="text-white font-medium">
              {projectData.projectName}
            </span>
            .
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT/CENTER: Progress & Timeline (Takes up 2 columns) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overall Progress Card */}
            <div className="card-glass bg-[#121215]/80 border border-white/10 rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold mb-1">
                    Overall Progress
                  </h2>
                  <p className="text-sm text-gray-400">
                    Estimated completion: {projectData.dueDate}
                  </p>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                  {projectData.status}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative h-4 bg-white/5 rounded-full overflow-hidden border border-white/5">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${projectData.progress}%` }}
                />
              </div>
              <div className="flex justify-between mt-3 text-sm font-medium">
                <span className="text-white">
                  {projectData.progress}% Completed
                </span>
                <span className="text-gray-500">100%</span>
              </div>
            </div>

            {/* Project Timeline */}
            <div className="card-glass bg-[#121215]/80 border border-white/10 rounded-3xl p-8">
              <h2 className="text-xl font-semibold mb-8">Project Timeline</h2>

              <div className="relative pl-4 md:pl-0">
                {/* Vertical Line connecting timeline */}
                <div className="absolute left-[11px] md:left-[23px] top-4 bottom-8 w-[2px] bg-white/5" />

                <div className="space-y-8">
                  {projectData.stages.map((stage, index) => (
                    <div
                      key={stage.id}
                      className="relative flex items-start gap-6 group"
                    >
                      {/* Timeline Icon */}
                      <div className="relative z-10 bg-[#121215] md:w-12 flex justify-center mt-1">
                        {stage.status === "completed" ? (
                          <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                        ) : stage.status === "current" ? (
                          <CircleDashed className="w-6 h-6 text-blue-500 animate-[spin_4s_linear_infinite]" />
                        ) : (
                          <Circle className="w-6 h-6 text-gray-700" />
                        )}
                      </div>

                      {/* Timeline Content */}
                      <div
                        className={`flex-1 ${stage.status === "upcoming" ? "opacity-50" : "opacity-100"}`}
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                          <h3
                            className={`text-lg font-medium ${stage.status === "current" ? "text-blue-400" : "text-white"}`}
                          >
                            {stage.title}
                          </h3>
                          <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-gray-400 w-fit">
                            {stage.date}
                          </span>
                        </div>
                        {stage.status === "current" && (
                          <p className="text-sm text-gray-400 mt-2">
                            We are currently actively coding the frontend
                            components. Staging links will be available shortly.
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Payments & Resources */}
          <div className="space-y-8">
            {/* Payment / Billing Widget */}
            <div className="card-glass bg-[#121215]/80 border border-white/10 rounded-3xl overflow-hidden relative">
              {/* Decorative glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/20 blur-[60px] rounded-full pointer-events-none" />

              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h2 className="text-xl font-semibold">Billing</h2>
                </div>

                {/* Billing Summary */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">
                      Total Project
                    </p>
                    <p className="text-lg font-semibold text-white">
                      {projectData.billing.total}
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">
                      Paid so far
                    </p>
                    <p className="text-lg font-semibold text-white">
                      {projectData.billing.paid}
                    </p>
                  </div>
                </div>

                {/* Current Invoice Block */}
                <div className="p-5 rounded-2xl border border-blue-500/30 bg-blue-500/5 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-blue-500/20 text-blue-400 uppercase tracking-wider">
                      Action Required
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Due:{" "}
                      {projectData.billing.nextPayment.dueDate}
                    </span>
                  </div>

                  <p className="text-sm text-gray-300 mb-1">
                    {projectData.billing.nextPayment.name}
                  </p>
                  <p className="text-3xl font-bold text-white mb-6">
                    {projectData.billing.nextPayment.amount}
                  </p>

                  <button
                    onClick={handlePayment}
                    disabled={isProcessing}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    ) : (
                      <>
                        <Lock className="w-4 h-4" />
                        Pay Securely via Stripe
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
                    <span>Powered by</span>
                    <span className="font-bold text-gray-400 tracking-tight">
                      stripe
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Resources & Links */}
            <div className="card-glass bg-[#121215]/80 border border-white/10 rounded-3xl p-8">
              <h2 className="text-xl font-semibold mb-6">Project Resources</h2>

              <div className="space-y-3">
                {projectData.resources.map((resource, idx) => (
                  <a
                    key={idx}
                    href={resource.link}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0a0a0f] flex items-center justify-center">
                        <resource.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white line-clamp-1">
                          {resource.name}
                        </p>
                        <p className="text-xs text-gray-500">{resource.type}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>

              {/* Invoices Download Link */}
              <button className="w-full mt-6 flex items-center justify-center gap-2 py-3 text-sm font-medium text-gray-400 hover:text-white transition-colors border border-dashed border-white/10 rounded-xl hover:bg-white/5">
                <Download className="w-4 h-4" />
                Download Past Invoices
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
