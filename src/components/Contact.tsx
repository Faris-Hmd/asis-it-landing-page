"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { Button } from "./Button";

export function Contact() {
  return (
    <section id="contact" className="py-8 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 hidden lg:block" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary font-display mb-3">
                Let's Build Something <br />
                <span className="text-primary">Great Together</span>
              </h2>
              <p className="text-slate-600 text-base max-w-md">
                Reach out to our team of experts to discuss how we can transform
                your business.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-sm mb-0.5">
                    Our Office
                  </h4>
                  <p className="text-slate-600 text-xs">
                    123 Business Tower, <br />
                    West Bay, Doha, Qatar
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-sm mb-0.5">
                    Phone
                  </h4>
                  <p className="text-slate-600 text-xs">
                    +974 1234 5678 <br />
                    +974 8765 4321
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-sm mb-0.5">
                    Email
                  </h4>
                  <p className="text-slate-600 text-xs">
                    info@asis-it.com <br />
                    support@asis-it.com
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-sm mb-0.5">
                    Working Hours
                  </h4>
                  <p className="text-slate-600 text-xs">
                    Sun - Thu: 8am - 5pm <br />
                    Fri - Sat: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 relative"
          >
            {/* Form Decor */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-2xl -z-10" />

            <h3 className="text-xl font-bold text-secondary mb-4">
              Send us a Message
            </h3>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-medium text-slate-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="subject"
                  className="text-xs font-medium text-slate-700"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-600"
                >
                  <option>General Inquiry</option>
                  <option>Project Proposal</option>
                  <option>Technical Support</option>
                  <option>Careers</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <Button
                size="md"
                className="w-full h-10 text-base rounded-lg shadow-lg shadow-primary/20 group"
              >
                Send Message{" "}
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
