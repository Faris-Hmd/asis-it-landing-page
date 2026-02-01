"use client";

import {
  ArrowLeft,
  Scale,
  Shield,
  FileText,
  Briefcase,
  Gavel,
  HelpCircle,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TermsOfService() {
  const lastUpdated = "February 1, 2026";

  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      icon: Shield,
      content:
        "By accessing or using the ASIS IT website and services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services. Your continued use of the platform signifies your acceptance of any future updates to these terms.",
    },
    {
      id: "description",
      title: "2. Description of Service",
      icon: Briefcase,
      content:
        "ASIS IT provides enterprise software solutions, including but not limited to ERP systems, Hospital Management Systems, and Workforce Management software. We reserve the right to modify, update, or discontinue any part of our service at our sole discretion.",
    },
    {
      id: "responsibilities",
      title: "3. User Responsibilities",
      icon: FileText,
      content:
        "When using our platform, you agree to adhere to the following standards of conduct:",
      items: [
        {
          label: "Accuracy",
          desc: "Provide true and current information when requested.",
        },
        {
          label: "Compliance",
          desc: "Use services only for legal and authorized purposes.",
        },
        {
          label: "Integrity",
          desc: "Do not attempt to disrupt or interfere with our servers.",
        },
        {
          label: "Ownership",
          desc: "Do not reproduce or resell any portion of the service.",
        },
      ],
    },
    {
      id: "ip",
      title: "4. Intellectual Property",
      icon: Gavel,
      content:
        "All contents of our website, including logos, text, graphics, and proprietary software, are the exclusive intellectual property of ASIS IT. Any unauthorized use of these materials may violate copyright and trademark laws.",
    },
    {
      id: "governing",
      title: "5. Governing Law",
      icon: Scale,
      content:
        "These Terms shall be governed and construed in accordance with the laws of the State of Qatar. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Doha, Qatar.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Premium Header/Hero */}
      <div className="relative pt-24 pb-16 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,#3b82f620,transparent)]" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_80%,#f9941e10,transparent)]" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-bold mb-6">
                <Scale size={14} /> Legal Framework
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight">
                Terms of Service
              </h1>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed italic">
                Defining the standard of excellence and mutual trust in our
                professional partnership.
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
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
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
                        className="bg-slate-50 p-5 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-colors"
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
              <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white overflow-hidden relative shadow-2xl">
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
                <h3 className="text-xl font-bold mb-6 font-display relative z-10 flex items-center gap-2">
                  <HelpCircle size={20} className="text-blue-400" /> Need
                  Clarity?
                </h3>
                <p className="text-slate-400 text-sm mb-8 relative z-10 leading-relaxed">
                  Our legal department is available to clarify any aspect of our
                  service agreements.
                </p>

                <div className="space-y-4 relative z-10">
                  <a
                    href="mailto:legal@asis-it.com"
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                        Legal Support
                      </div>
                      <div className="text-sm font-medium">
                        legal@asis-it.com
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                        Headquarters
                      </div>
                      <div className="text-sm font-medium text-slate-200 leading-tight">
                        Doha, Qatar
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4">Related Pages</h4>
                <nav className="flex flex-col gap-2">
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-slate-500 hover:text-primary p-2 -ml-2 rounded-lg hover:bg-slate-50 transition-all flex items-center justify-between group"
                  >
                    Privacy Policy{" "}
                    <ArrowLeft
                      size={14}
                      className="rotate-180 opacity-0 group-hover:opacity-100 transition-all"
                    />
                  </Link>
                  <Link
                    href="/software"
                    className="text-sm text-slate-500 hover:text-primary p-2 -ml-2 rounded-lg hover:bg-slate-50 transition-all flex items-center justify-between group"
                  >
                    Solutions{" "}
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
