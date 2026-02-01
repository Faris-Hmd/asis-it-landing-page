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
      <div className="relative flex items-center pt-14 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/software/workforce.png"
            alt="Access Control Background"
            className="w-full h-full object-cover"
          />
          {/* Darker Black Overlay for better contrast and visibility of nav links */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-4 md:py-8">
          <Link
            href="/software"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-primary transition-colors mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Software
          </Link>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium mb-4 backdrop-blur-sm">
                <Lock className="w-4 h-4" /> Enterprise Security
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display leading-tight">
                Secure Your Assets with <br />
                <span className="text-primary italic">ASIS Access Control</span>
              </h1>
              <p className="text-base md:text-lg text-slate-200 leading-relaxed mb-6 max-w-2xl">
                The most advanced access control system designed to manage
                movements, enhance security, and integrate seamlessly with your
                workforce operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 h-12 md:h-14 md:text-lg"
                >
                  Request a Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 h-12 md:h-14 md:text-lg text-white border-white/30 hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements removed */}
      </div>

      {/* Overview Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">
              Uncompromising Security Management
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Our Access Control system provides a comprehensive suite of tools
              designed to protect your facilities while simplifying
              administrative oversight.
            </p>
          </div>
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

      {/* Software Features - Full Background Version */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative rounded-[3rem] overflow-hidden min-h-[400px] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/contact_bg.png"
                alt="Security Management"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-[1px]" />
            </div>

            {/* Content Overlaid */}
            <div className="relative z-10 w-full p-8 md:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Advanced Security Features
                  </h2>
                  <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-xl">
                    Our access control software provides unprecedented control
                    over your facility, integrating biometric security,
                    real-time tracing, and automated alerts into a single
                    powerful platform.
                  </p>
                  <div className="inline-flex items-center gap-4 bg-primary p-4 rounded-2xl text-white shadow-xl shadow-primary/20">
                    <ShieldCheck className="w-8 h-8" />
                    <div className="text-[10px] leading-tight opacity-90 uppercase tracking-widest font-semibold">
                      Enterprise Grade <br /> Security Standards
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-slate-200 text-sm font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
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
