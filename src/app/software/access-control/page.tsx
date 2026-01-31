"use client";

import {
  ShieldCheck,
  Clock,
  CheckCircle2,
  Lock,
  Activity,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";

export default function AccessControlPage() {
  const sections = [
    {
      title: "Comprehensive Admittance Management",
      description:
        "Access Control from ASIS manages employee admittance into controlled areas, preventing unauthorized admittance of non-employees, and is fully integrated with ASIS Work Force Management software.",
      icon: ShieldCheck,
      color: "bg-blue-600",
    },
    {
      title: "Precise Scheduling",
      description:
        "Define the exact time interval when employees can enter a punch. Lock out tardiness and early birds. Restriction of entrance outside work schedules ensures security compliance.",
      icon: Clock,
      color: "bg-orange-500",
    },
    {
      title: "Real-time Monitoring",
      description:
        "Collect current information at each access point indoors and outdoors, process it and grant access to authorized persons immediately.",
      icon: Activity,
      color: "bg-emerald-500",
    },
  ];

  const features = [
    "Define exact time intervals for employee entry",
    "Lock out tardiness and early birds",
    "Real-time tracking of entry/exit at all access points",
    "Assign access rights by person, location, and time",
    "Customizable access control policies",
    "Personnel movement tracing for full workforce management",
    "Integration with turnstiles, barriers, and gates",
    "Anti pass-back rules implementation",
    "Automatic alarm generation (e.g., doors forced open)",
    "Biometric and RFID technology integration",
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 skew-x-12 translate-x-32 -z-10" />
        <div className="absolute -top-24 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link
            href="/software"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Software
          </Link>

          <div className="flex flex-row gap-6 md:gap-12 items-start md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-primary/10 text-primary text-[10px] md:text-sm font-medium mb-4">
                <Lock className="w-3 h-3 md:w-4 md:h-4" /> Enterprise Security
              </div>
              <h1 className="text-xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6 font-display leading-tight">
                Secure Your Assets with <br />
                <span className="text-primary truncate block md:inline">
                  ASIS Access Control
                </span>
              </h1>
              <p className="text-sm md:text-xl text-slate-600 leading-relaxed mb-6 md:mb-8 line-clamp-3 md:line-clamp-none">
                The most advanced access control system designed to manage
                movements, enhance security, and integrate seamlessly with your
                workforce operations.
              </p>
              <Button
                size="sm"
                className="rounded-full px-6 md:h-12 md:px-8 md:text-lg"
              >
                Request a Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-24 h-24 sm:w-48 sm:h-48 md:w-5/12 md:aspect-video shrink-0 relative"
            >
              <div className="w-full h-full bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl border-2 md:border-8 border-white group relative">
                <img
                  src="/images/software/workforce.png"
                  alt="Access Control Illustration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge - Hidden on mobile, shown on md+ */}
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg border border-slate-100 hidden md:flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-900 leading-none">
                    Total Flow Control
                  </div>
                  <div className="text-[8px] text-slate-500 mt-0.5">
                    Real-time Ins & Outs
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Overview Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md"
              >
                <div
                  className={`w-12 h-12 ${section.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg`}
                >
                  <section.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {section.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {section.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature List Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">
                Software Features
              </h2>
              <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-1 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  </div>
                  <span className="text-slate-700 leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-secondary rounded-[2rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                Ready to enhance your facility security?
              </h2>
              <p className="text-slate-300 text-base md:text-lg mb-8">
                Get in touch with our security experts today for a personalized
                consultation and system walkthrough.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact">
                  <Button className="rounded-full px-8 h-12 text-lg">
                    Contact Us Now
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="rounded-full px-8 h-12 text-lg text-white border-white hover:bg-white/10 forced-colors:text-white"
                >
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
