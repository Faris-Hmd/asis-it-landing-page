"use client";

import {
  ArrowLeft,
  ShieldCheck,
  Mail,
  MapPin,
  CheckCircle2,
  FileText,
  Globe,
  Lock,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const lastUpdated = "February 1, 2026";

  const sections = [
    {
      id: "intro",
      title: "1. Introduction",
      icon: Globe,
      content:
        'Advanced Solutions for Information Systems ("ASIS", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.',
    },
    {
      id: "collect",
      title: "2. The Data We Collect",
      icon: FileText,
      content:
        "We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:",
      items: [
        {
          label: "Identity Data",
          desc: "Includes first name, last name, username or similar identifier.",
        },
        {
          label: "Contact Data",
          desc: "Includes email address and telephone numbers.",
        },
        {
          label: "Technical Data",
          desc: "Includes IP address, browser type, time zone setting, and device technology.",
        },
        {
          label: "Usage Data",
          desc: "Includes information about how you use our website, products and services.",
        },
      ],
    },
    {
      id: "usage",
      title: "3. How We Use Your Data",
      icon: CheckCircle2,
      content:
        "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:",
      items: [
        {
          label: "Service Delivery",
          desc: "To provide the services or information you have requested.",
        },
        {
          label: "Experience Optimization",
          desc: "To improve our website, products, and customer relationships.",
        },
        {
          label: "Legal Compliance",
          desc: "Where we need to comply with a legal or regulatory obligation.",
        },
        {
          label: "Legitimate Interests",
          desc: "Essential business operations that don't override your rights.",
        },
      ],
    },
    {
      id: "security",
      title: "4. Data Security",
      icon: Lock,
      content:
        "We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Premium Header/Hero */}
      <div className="relative pt-24 pb-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,#f9941e20,transparent)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,#3b82f610,transparent)]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Home
          </Link>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold mb-6">
                <ShieldCheck size={14} /> Trust & Transparency
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed italic">
                Protecting your digital footprint is at the core of everything
                we build.
              </p>
              <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <FileText size={16} /> Last Updated: {lastUpdated}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {sections.map((section, idx) => (
              <motion.section
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary">
                    <section.icon size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 font-display">
                    {section.title}
                  </h2>
                </div>

                <p className="text-slate-600 leading-relaxed text-lg mb-8">
                  {section.content}
                </p>

                {section.items && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {section.items.map((item, iIdx) => (
                      <div
                        key={iIdx}
                        className="bg-slate-50 p-5 rounded-2xl border border-slate-100 group hover:border-primary/20 transition-colors"
                      >
                        <div className="font-bold text-slate-900 mb-2 truncate">
                          {item.label}
                        </div>
                        <div className="text-sm text-slate-500 leading-snug">
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.section>
            ))}
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="bg-secondary p-8 rounded-[2.5rem] text-white overflow-hidden relative shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-xl font-bold mb-6 font-display relative z-10">
                  Concerns or Questions?
                </h3>
                <p className="text-slate-300 text-sm mb-8 relative z-10 leading-relaxed">
                  Our data protection team is here to help you understand how
                  your information is handled.
                </p>

                <div className="space-y-4 relative z-10">
                  <a
                    href="mailto:info@asis-it.com"
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                        Email us
                      </div>
                      <div className="text-sm font-medium">
                        info@asis-it.com
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                        Visit us
                      </div>
                      <div className="text-sm font-medium text-slate-200 leading-tight">
                        Doha, Qatar
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4">Quick Links</h4>
                <nav className="flex flex-col gap-2">
                  <Link
                    href="/terms-of-service"
                    className="text-sm text-slate-500 hover:text-primary p-2 -ml-2 rounded-lg hover:bg-slate-50 transition-all flex items-center justify-between group"
                  >
                    Terms of Service{" "}
                    <ArrowLeft
                      size={14}
                      className="rotate-180 opacity-0 group-hover:opacity-100 transition-all"
                    />
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm text-slate-500 hover:text-primary p-2 -ml-2 rounded-lg hover:bg-slate-50 transition-all flex items-center justify-between group"
                  >
                    About ASIS{" "}
                    <ArrowLeft
                      size={14}
                      className="rotate-180 opacity-0 group-hover:opacity-100 transition-all"
                    />
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
