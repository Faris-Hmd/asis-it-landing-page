"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video md:aspect-[4/3] bg-gray-100">
              <img
                src="/images/qatari_meeting.png"
                alt="Qatari Business Meeting"
                className="object-cover w-full h-full"
              />
              {/* Subtle watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-white/20 text-6xl md:text-9xl font-bold select-none">
                  ASIS
                </span>
              </div>
            </div>
            {/* Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary font-bold text-xl">
                  20+
                </div>
                <div>
                  <p className="text-slate-900 font-bold">Years Experience</p>
                  <p className="text-slate-500 text-sm">Founded in 2001</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">
              About ASIS
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-display">
              Pioneering High-Quality IT Solutions in Qatar
            </h3>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Advanced Solutions for Information Systems (ASIS) was founded in
              Doha, Qatar in 2001. We are fully committed to being the leading
              provider of advanced technology and information systems. As a
              pioneer software house, we specialize in developing information
              systems and consultation services that meet the growing demands of
              the sector.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Our Vision</h4>
                  <p className="text-slate-600 text-sm">
                    The pioneers of quality and innovation in IT projects.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-secondary/10 p-2 rounded-lg text-secondary">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Our Message</h4>
                  <p className="text-slate-600 text-sm">
                    Best consultation based on good practices and international
                    standards.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
