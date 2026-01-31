"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./Button";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white pt-20 pb-10">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <img
          src="/images/hero_abs.png"
          alt="Abstract Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Leading IT Solutions Provider
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-secondary mb-6 font-display leading-tight">
            Great Businesses are <br />
            <span className="text-primary relative inline-block">
              Powered
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-primary/20 -z-10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </span>{" "}
            by Great People
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            At ASIS, we provide purpose-built solutions for your industry. From
            ERP to Workforce Management, we engineer sustainability and
            innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/#contact">
              <Button
                size="lg"
                className="h-12 px-8 text-lg rounded-full shadow-xl shadow-primary/20"
              >
                Schedule Meeting <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/#services">
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 text-lg rounded-full border-2 hover:bg-slate-50"
              >
                View Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
