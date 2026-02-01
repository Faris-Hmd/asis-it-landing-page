"use client";

import { useState, useEffect } from "react";
import {
  ArrowLeft,
  HelpCircle,
  ChevronDown,
  Mail,
  MessageSquare,
  Phone,
  Search,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What industries does ASIS IT specialize in?",
        a: "We specialize in providing tailored IT solutions for a wide range of industries, with core expertise in Healthcare (HMS), Enterprise Resource Planning (ERP), and Secure Access Control systems.",
      },
      {
        q: "Where is ASIS IT located?",
        a: "Our headquarters are located in Doha, Qatar, where we serve both regional and international clients with dedicated local support.",
      },
      {
        q: "How long has ASIS IT been in operation?",
        a: "ASIS IT has over a decade of experience in delivering high-quality software solutions and consulting services to major organizations across the Middle East.",
      },
    ],
  },
  {
    category: "Solutions",
    questions: [
      {
        q: "Can your ERP system be customized for my specific business?",
        a: "Yes, our ERP solutions are designed with modularity in mind. We work closely with your team to customize workflows, reporting, and integrations to match your unique business processes.",
      },
      {
        q: "Is the Hospital Management System (HMS) compliant with local regulations?",
        a: "Absolutely. Our HMS is fully compliant with regional healthcare standards and data protection regulations, ensuring secure and legal patient data management.",
      },
      {
        q: "Do you offer cloud-based or on-premise installation?",
        a: "We offer both. Depending on your security requirements and infrastructure, we can deploy our solutions on-premise, in the private cloud, or as a hybrid model.",
      },
    ],
  },
  {
    category: "Support",
    questions: [
      {
        q: "What kind of post-implementation support do you provide?",
        a: "We provide comprehensive 24/7 technical support, regular software updates, and dedicated account management to ensure your systems run smoothly after launch.",
      },
      {
        q: "Do you provide training for our staff?",
        a: "Yes, staff training is a core part of our implementation process. We provide both on-site and remote training sessions, along with detailed documentation and help guides.",
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as any });
  }, []);

  const filteredFaqs =
    faqs
      .find((f) => f.category === activeCategory)
      ?.questions.filter(
        (item) =>
          item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.a.toLowerCase().includes(searchQuery.toLowerCase()),
      ) || [];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Premium Hero */}
      <div className="relative pt-24 pb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#f9941e15,transparent)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#3b82f615,transparent)]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold mb-6">
              <HelpCircle size={14} /> Knowledge Base
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight">
              Frequently Asked{" "}
              <span className="text-primary italic">Questions</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Find answers to common questions about our solutions,
              implementation process, and dedicated support.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative group">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors"
                size={20}
              />
              <input
                type="text"
                placeholder="Search for a question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-12 pr-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all text-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest px-4">
                Categories
              </h3>
              <div className="flex flex-col gap-1">
                {faqs.map((cat) => (
                  <button
                    key={cat.category}
                    onClick={() => {
                      setActiveCategory(cat.category);
                      setOpenIndex(0);
                      // Force instant scroll to avoid conflicts with global smooth-scroll
                      window.scrollTo({ top: 0, behavior: "instant" as any });
                    }}
                    className={cn(
                      "flex items-center justify-between p-4 rounded-2xl transition-all text-left font-bold",
                      activeCategory === cat.category
                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                        : "text-slate-600 hover:bg-white hover:shadow-sm",
                    )}
                  >
                    {cat.category}
                    <Sparkles
                      size={16}
                      className={cn(
                        activeCategory === cat.category
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />
                  </button>
                ))}
              </div>

              {/* Contact Card in Sidebar */}
              <div className="mt-8 bg-secondary p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
                <h4 className="text-lg font-bold mb-4 relative z-10">
                  Still need help?
                </h4>
                <p className="text-sm text-slate-400 mb-6 relative z-10">
                  Our team is ready to assist you with any custom inquiry.
                </p>
                <Link
                  href="/#contact"
                  className="flex items-center justify-center gap-2 w-full p-3 bg-primary rounded-xl font-bold text-white hover:bg-primary/90 transition-all"
                >
                  <Mail size={18} /> Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, idx) => (
                    <motion.div
                      key={faq.q}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all"
                    >
                      <button
                        onClick={() =>
                          setOpenIndex(openIndex === idx ? null : idx)
                        }
                        className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
                      >
                        <span className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-primary transition-colors pr-8">
                          {faq.q}
                        </span>
                        <div
                          className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                            openIndex === idx
                              ? "bg-primary text-white rotate-180"
                              : "bg-slate-50 text-slate-400 group-hover:bg-slate-100",
                          )}
                        >
                          <ChevronDown size={20} />
                        </div>
                      </button>

                      <AnimatePresence>
                        {openIndex === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-6 md:px-8 pb-8 pt-0 text-slate-600 text-lg leading-relaxed border-t border-slate-50">
                              <div className="pt-6">{faq.a}</div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                    <Search size={48} className="mx-auto text-slate-300 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900">
                      No results found
                    </h3>
                    <p className="text-slate-500">
                      Try adjusting your search query.
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Contact Icons */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm text-center group hover:border-primary/20 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <h5 className="font-bold text-slate-900 mb-1">Email</h5>
                <p className="text-sm text-slate-500">info@asis-it.com</p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm text-center group hover:border-primary/20 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare size={24} />
                </div>
                <h5 className="font-bold text-slate-900 mb-1">Live Chat</h5>
                <p className="text-sm text-slate-500">Available 9am - 6pm</p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm text-center group hover:border-primary/20 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <h5 className="font-bold text-slate-900 mb-1">Call Us</h5>
                <p className="text-sm text-slate-500">+974 4400 0000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
