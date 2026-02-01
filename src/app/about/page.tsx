"use client";

import { motion } from "framer-motion";
import {
  Target,
  Rocket,
  Heart,
  Award,
  Users,
  CheckCircle2,
  Quote,
  History,
  Globe,
} from "lucide-react";
import { Button } from "@/components/Button";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      title: "Integrity & Honesty",
      description:
        "Upholding the highest ethical standards in every partnership and project we undertake.",
      icon: Heart,
      color: "bg-rose-500",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Our unquenchable passion for quality ensures we meet and exceed client expectations.",
      icon: Users,
      color: "bg-primary",
    },
    {
      title: "Consistency & Efficiency",
      description:
        "Specializing in integrated solutions that drive productivity and minimize lost time.",
      icon: CheckCircle2,
      color: "bg-emerald-500",
    },
  ];

  const milestones = [
    { year: "2001", event: "ASIS founded in Doha, Qatar." },
    {
      year: "2010",
      event: "Established as a pioneer software house in the region.",
    },
    { year: "2018", event: "Expanded global presence and solution portfolio." },
    {
      year: "Today",
      event: "Leading provider of world-class turnkey IT solutions.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative flex items-center pt-14 overflow-hidden min-h-[40vh]">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/qatari_meeting.png"
            alt="Qatar Business Meeting"
            className="w-full h-full object-cover"
          />
          {/* Dark Black Overlay for contrast */}
          <div className="absolute inset-0 bg-black/80 md:bg-black/70 md:backdrop-blur-[2px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-8 md:py-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium mb-4 md:backdrop-blur-sm">
                Pioneering Qatar's IT Since 2001
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display leading-tight">
                Driving the Future of <br />
                <span className="text-primary italic">
                  Information Systems in Qatar
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl">
                Advanced Solutions for Information Systems (ASIS) is a leading
                provider of advanced technology and pioneer software development
                deeply rooted in the development of Doha, Qatar.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 relative overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:scale-110 transition-transform">
                  <Target size={120} />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                    <Target size={24} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 font-display">
                    Our Vision
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
                    To create world-class IT solutions for automated businesses
                    or organizations, setting the benchmark for digital
                    excellence globally.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 text-blue-500/10 group-hover:scale-110 transition-transform">
                  <Rocket size={120} />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                    <Rocket size={24} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 font-display">
                    Our Mission
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
                    ASIS strives to be recognized by clients for turnkey IT
                    solutions through unparalleled product excellence and
                    service dedication.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-[3rem] p-10 md:p-16 text-white relative shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
              <Quote className="text-primary opacity-50 mb-8" size={64} />
              <h3 className="text-2xl md:text-3xl font-bold mb-6 font-display">
                A Message from ASIS
              </h3>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 italic">
                "We live in a most promising era where technology moves at a
                fast pace. 10 minutes of lost time per day is equivalent to a
                week of lost productivity. Can you afford not to have an ASIS
                management solution?"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 rounded-full bg-primary" />
                <span className="font-medium tracking-wider uppercase text-sm">
                  The ASIS Leadership Team
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-2xl md:text-5xl font-bold text-slate-900 mb-6 font-display">
              Our Core Values
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Advanced Solutions for Information Systems always does its best to
              uphold these core values in every facet of our business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-10 rounded-3xl border border-slate-100 text-center flex flex-col items-center group transition-all"
              >
                <div
                  className={`w-20 h-20 ${value.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-2xl group-hover:scale-110 transition-transform`}
                >
                  <value.icon size={36} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones / History */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/3">
              <History size={48} className="text-primary mb-6" />
              <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display">
                Our Journey
              </h2>
              <p className="text-slate-400 text-base md:text-lg">
                For over two decades, we have been at the forefront of the
                digital revolution in Qatar, helping organizations navigate
                complexity with elegant technology.
              </p>
            </div>

            <div className="md:w-1/2 space-y-12 relative before:absolute before:left-0 md:before:left-8 before:top-2 before:bottom-2 before:w-[2px] before:bg-primary/20">
              {milestones.map((ms, idx) => (
                <div key={idx} className="relative pl-8 md:pl-20">
                  {/* Outer Ring */}
                  <div className="absolute left-0 md:left-8 top-1.5 -translate-x-1/2 w-5 h-5 border-2 border-primary/30 rounded-full z-10 bg-slate-900" />
                  {/* Inner Dot */}
                  <div className="absolute left-0 md:left-8 top-1.5 -translate-x-1/2 translate-y-[6px] w-[8px] h-[8px] bg-primary rounded-full shadow-[0_0_12px_rgba(249,148,30,0.4)] z-20" />

                  <div className="text-primary font-bold text-2xl mb-2 leading-none">
                    {ms.year}
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {ms.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Award size={200} />
            </div>
            <h2 className="text-2xl md:text-5xl font-bold mb-8 font-display relative z-10">
              Partner with the Pioneers
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
              Experience the unquenchable passion for quality that has made us
              the preferred choice for leading organizations since 2001.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <Link href="/#contact">
                <Button className="bg-white text-primary hover:bg-slate-100 rounded-full h-14 px-10 text-lg font-bold shadow-xl">
                  Contact Us
                </Button>
              </Link>
              <Link href="/software">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full h-14 px-10 text-lg font-bold"
                >
                  Our Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
