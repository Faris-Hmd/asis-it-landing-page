"use client";

import {
  Activity,
  ArrowLeft,
  CheckCircle2,
  PieChart,
  BarChart3,
  Users,
  Box,
  CreditCard,
  Target,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";

export default function ERPPage() {
  const modules = [
    {
      title: "Accounting & Finance",
      description:
        "Complete financial control with automated journals, accounts payable/receivable, and real-time bank reconciliation.",
      icon: CreditCard,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Inventory Management",
      description:
        "Optimize stock levels with multi-location tracking, automated reordering, and precise SKU management.",
      icon: Box,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      title: "Sales & CRM",
      description:
        "Manage lead-to-cash cycles, customer relationships, and sales pipelines through a single intuitive interface.",
      icon: Users,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "Reporting & BI",
      description:
        "Gain actionable insights with flexible dashboards and advanced business intelligence reporting tools.",
      icon: BarChart3,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  const features = [
    "Seamless integration across all business units",
    "Real-time data synchronization for instant updates",
    "Highly customizable to meet specific industry needs",
    "Scalable architecture that grows with your business",
    "Advanced security and role-based access control",
    "Cloud-native or on-premise deployment options",
    "Comprehensive audit trails for compliance",
    "Automated workflow and approval processes",
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative flex items-center pt-14 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/software/erp.png"
            alt="ERP System Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-medium mb-4 backdrop-blur-sm">
                <Activity className="w-4 h-4" /> Comprehensive Enterprise
                Management
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display leading-tight">
                Empower Growth with <br />
                <span className="text-primary italic">ASIS ERP Solutions</span>
              </h1>
              <p className="text-base md:text-lg text-slate-200 leading-relaxed max-w-2xl mb-6">
                A unified platform to integrate all data and processing software
                modules, making your organization easier to access, control, and
                scale.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8">
                  Schedule Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 text-white border-white/30 hover:bg-white/10"
                >
                  Inquire Now
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
              Core Modules
            </h2>
            <p className="text-slate-600">
              Our ERP solution covers every aspect of your business operations
              with powerful, specialized modules.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div
                  className={`w-12 h-12 ${module.bg} ${module.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <module.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {module.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {module.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ASIS ERP? - Full Background Version */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative rounded-[3rem] overflow-hidden min-h-[400px] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/banner_4.jpg"
                alt="ERP Integration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[1px]" />
            </div>

            {/* Content Overlaid */}
            <div className="relative z-10 w-full p-8 md:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Why Choose ASIS ERP?
                  </h2>
                  <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-xl">
                    Our platform is designed to unify every aspect of your
                    business, providing 100% data integration and real-time
                    insights that drive sustainable growth.
                  </p>
                  <div className="inline-flex items-center gap-4 bg-primary p-4 rounded-2xl text-white shadow-xl">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-[10px] leading-tight opacity-90 uppercase tracking-widest font-semibold">
                      Reliability & <br /> Data Accuracy
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

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-2xl md:text-5xl font-bold mb-6">
              Ready to unify your business?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Join leading organizations that have transformed their operations
              with ASIS. Let's build your future-ready enterprise today.
            </p>
            <Button size="lg" className="rounded-full px-12 h-14 text-lg">
              Contact Sales Expert
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
