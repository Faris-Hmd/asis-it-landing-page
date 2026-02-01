"use client";

import {
  HeartPulse,
  ArrowLeft,
  CheckCircle2,
  Users,
  FlaskConical,
  Stethoscope,
  ClipboardList,
  Syringe,
  Activity,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";

export default function HospitalManagementPage() {
  const departments = [
    {
      title: "Patient Care",
      description:
        "Manage registrations, admissions, discharges, and patient records with a centralized digital system.",
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Clinical Services",
      description:
        "Streamline doctor consultations, prescriptions, and EMR management for better healthcare delivery.",
      icon: Stethoscope,
      color: "text-rose-600",
      bg: "bg-rose-50",
    },
    {
      title: "Lab & Diagnostics",
      description:
        "Integrated laboratory management for test ordering, results tracking, and medical imaging reports.",
      icon: FlaskConical,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "Pharmacy Operations",
      description:
        "Real-time inventory tracking for medications, streamlined dispensing, and automated reordering.",
      icon: Syringe,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  const benefits = [
    "Improved patient experience and reduced wait times",
    "Enhanced clinical accuracy with digital records",
    "Streamlined billing and insurance processing",
    "Integrated medical inventory management",
    "Comprehensive reporting and administrative dashboards",
    "Multi-department synchronization in real-time",
    "Secure and compliant data management",
    "Scalable for clinics to large multi-specialty hospitals",
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative flex items-center pt-14 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/software/hospital.png"
            alt="Hospital Management Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75 md:backdrop-blur-[2px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-4 md:py-6">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-medium mb-4 md:backdrop-blur-sm">
                <HeartPulse className="w-4 h-4 text-rose-500" /> Advanced
                Healthcare Solutions
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display leading-tight">
                Modernizing <br />
                <span className="text-primary italic">Healthcare Delivery</span>
              </h1>
              <p className="text-base md:text-lg text-slate-200 leading-relaxed max-w-2xl mb-6">
                Integrated Hospital Information Systems (HIS) designed to handle
                increasing patient demands while aiding doctors and support
                staff with precision and care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8">
                  Book a Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 text-white border-white/30 hover:bg-white/10"
                >
                  Medical Inquiry
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Solutions
            </h2>
            <p className="text-slate-600">
              A modular approach to hospital management that integrates every
              department effortlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div
                  className={`w-12 h-12 ${dept.bg} ${dept.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <dept.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {dept.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {dept.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient-Centric Technology - Full Background Version */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative rounded-[3rem] overflow-hidden min-h-[400px] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/banner_4.jpg"
                alt="Healthcare Technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/80 md:backdrop-blur-[1px]" />
            </div>

            {/* Content Overlaid */}
            <div className="relative z-10 w-full p-8 md:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Patient-Centric Technology
                  </h2>
                  <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-xl">
                    Our healthcare solutions focus on precision and care,
                    leveraging advanced digital systems to improve patient
                    outcomes and operational efficiency.
                  </p>
                  <div className="inline-flex items-center gap-4 bg-rose-500 p-4 rounded-2xl text-white shadow-xl shadow-rose-500/20">
                    <HeartPulse className="w-8 h-8" />
                    <div className="text-[10px] leading-tight opacity-90 uppercase tracking-widest font-semibold">
                      Dedicated to <br /> Clinical Excellence
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 md:backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                      <span className="text-slate-200 text-sm font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />
            <Activity className="absolute top-10 right-10 text-white/10 w-48 h-48 -rotate-12" />
            <h2 className="text-2xl md:text-5xl font-bold mb-6 relative z-10">
              Transform your Healthcare Facility
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Join healthcare providers across the region who trust ASIS for
              precision and performance.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-slate-100 rounded-full px-12 h-14 text-lg relative z-10"
            >
              Start Consultation
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
