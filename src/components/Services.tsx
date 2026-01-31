"use client";

import { motion } from "framer-motion";
import {
  Database,
  Activity,
  Users,
  Server,
  ScanFace,
  Smartphone,
  ArrowRight,
  Clock,
  Building2,
  IdCard,
  Cctv,
  Network,
  Tag,
  Key,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const services = [
  {
    title: "ERP Enterprise Resource Planning",
    description:
      "Comprehensive business process management software to streamline your operations.",
    icon: Database,
    color: "bg-blue-600",
    link: "/software/access-control",
  },
  {
    title: "Time Management System",
    description:
      "Track employee hours, attendance, and productivity efficiently with automated tools.",
    icon: Clock,
    color: "bg-emerald-500",
    link: "/software/access-control",
  },
  {
    title: "Out Sourcing Solutions",
    description:
      "Expert IT staffing and resource allocation to augment your team's capabilities.",
    icon: Users,
    color: "bg-violet-600",
    link: "/software/access-control",
  },
  {
    title: "Fixed Assets",
    description:
      "Manage and track the entire lifecycle of your physical and digital assets.",
    icon: Building2,
    color: "bg-slate-600",
    link: "/software/access-control",
  },
  {
    title: "E-Gates System",
    description:
      "Automated entry control systems tailored for high-security and high-traffic areas.",
    icon: ScanFace, // or generic entry icon
    color: "bg-indigo-600",
    link: "/software/access-control",
  },
  {
    title: "ID-Solutions",
    description:
      "Advanced identification, card printing, and issuance systems for secure access.",
    icon: IdCard,
    color: "bg-sky-500",
    link: "/software/access-control",
  },
  {
    title: "Smart Mobile Application",
    description:
      "Custom-built mobile apps for iOS and Android to engage your customers on the go.",
    icon: Smartphone,
    color: "bg-rose-500",
    link: "/software/access-control",
  },
  {
    title: "IP Camera",
    description:
      "High-definition surveillance and security monitoring solutions for total peace of mind.",
    icon: Cctv, // Need to check if CCTV exists, otherwise Camera or Video
    color: "bg-red-600",
    link: "/software/access-control",
  },
  {
    title: "Networking System",
    description:
      "Robust network infrastructure, cabling, and switching for seamless connectivity.",
    icon: Network,
    color: "bg-cyan-600",
    link: "/software/access-control",
  },
  {
    title: "Assets Tracking",
    description:
      "Real-time tracking of valuable assets using RFID and IoT technologies.",
    icon: Tag,
    color: "bg-amber-500",
    link: "/software/access-control",
  },
  {
    title: "Key Management System",
    description:
      "Secure automated control and audit trails for physical key usage.",
    icon: Key,
    color: "bg-teal-600",
    link: "/software/access-control",
  },
  {
    title: "Hospital Management System",
    description:
      "Integrated healthcare solutions for patient management, billing, and administration.",
    icon: Activity,
    color: "bg-fuchsia-600",
    link: "/software/access-control",
  },
];

export function Services() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      id="services"
      className="py-10 md:py-20 bg-slate-50 relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 skew-x-12 translate-x-32" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">
            What We Do
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-display">
            Our Products & Solutions
          </h3>
          <p className="text-slate-600 text-lg">
            We deliver a wide range of IT solutions tailored to streamline your
            operations and drive growth.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <div className="absolute -top-20 right-0 hidden md:flex gap-2">
              <CarouselPrevious className="static translate-y-0 translate-x-0 h-12 w-12 border-slate-200 hover:bg-white" />
              <CarouselNext className="static translate-y-0 translate-x-0 h-12 w-12 border-slate-200 hover:bg-white" />
            </div>

            <CarouselContent className="-ml-6 py-4">
              {services.map((service, index) => (
                <CarouselItem
                  key={index}
                  className="pl-6 basis-[85%] md:basis-[45%] lg:basis-[28%]"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="h-full min-h-[200px] bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all border border-slate-100 flex flex-col group/card"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-md transition-transform group-hover/card:scale-110 duration-300 shrink-0",
                          service.color,
                        )}
                      >
                        <service.icon size={20} />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 group-hover/card:text-primary transition-colors line-clamp-2 leading-tight">
                        {service.title}
                      </h4>
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed flex-grow text-xs md:text-sm line-clamp-3">
                      {service.description}
                    </p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-primary font-bold text-xs hover:gap-2 transition-all mt-auto"
                    >
                      Learn more <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots Pagination */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  current === index + 1
                    ? "bg-primary w-8"
                    : "bg-primary/20 hover:bg-primary/40",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
