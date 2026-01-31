"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  CheckCircle,
  ArrowRight,
  Users,
  ShieldCheck,
  Map as MapIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";

export default function SoftwarePage() {
  const softwareSolutions = [
    {
      title: "ERP System",
      description:
        "Computers have become so complex and commonplace in organizations, it is much easier to integrate all of the data and processing software modules and hardware into one large unit that is easier to access and control. This is called Enterprise Resource Planning, or ERP. Normally ERP systems use the same database throughout an entire company to store various types of data for different computerized functions. When first developed, ERP systems were used only for large manufacturing companies. Today, they benefit all sizes of companies, even those that are quite small.",
      features: [
        "Dynamic Dashboard",
        "Accounting & Finance",
        "Sales & CRM",
        "Purchasing & Procurement",
        "Inventory Management",
        "Point of Sale (POS)",
        "Fixed Assets",
        "Comprehensive Reporting",
      ],
      link: "/software/access-control",
      image: "/images/software/erp.png",
    },
    {
      title: "Hospital Management System",
      description:
        "Hospital Information systems are in high demand to handle increasing population needs and also aids the practicing doctors and hospital service and support staff with timely service and precision. There are varied metrics available to assess the performance of services like hospital industry, and the successful implementation and usage of Hospital information system forms a crucial role. Hospital information systems are available in the software market which in most cases needs to be customized and in some cases needs to be developed as a customized software based on specific hospital requirements.",
      features: [
        "Patient Dashboard",
        "Accounting Integration",
        "Pharmacy Sales",
        "Medical Purchasing",
        "Medical Inventory",
        "Clinic Point of Sale",
        "Hospital Assets",
        "Medical Reporting",
      ],
      link: "/software/access-control",
      image: "/images/software/hospital.png",
    },
    {
      title: "WorkForce Management",
      description:
        "Key elements of a good Workforce System are ease of use, efficiency, accuracy, flexibility and after sales service. We can offer all of these and more! Our systems are locally developed which virtually guarantees excellent support and product development to cater for ongoing changes in the market.",
      features: [
        "Interactive Dashboard",
        "Policy Management",
        "Schedule & Shift Planning",
        "Workflow Automation",
        "Team Calendar",
        "Project Tracking",
        "System Integration",
        "Smart Notifications",
        "Analytics & Reporting",
      ],
      link: "/software/access-control",
      image: "/images/software/workforce.png",
    },
    {
      title: "Visitor Management",
      description:
        "ASIS Visitor Management Solutions allows organizations to streamline the check-in process for visitors. Businesses can collect and easily recall real-time accurate data of current and pending authorized visitors and track visitor information to help monitor employee, visitors and facility safety. The ASIS Visitor Management application utilizes ID scanning, electronics signatures, pre-registration web portal of individuals, email notifications, and customizable printing of visitor badges.",
      features: [
        "Appointment Approval/Rejection",
        "Group & Individual Pre-registration",
        "Email/SMS Notifications",
        "Today's Appointments View",
        "Digital Visitor Sign-out",
        "Visitor History Tracking",
        "Visitor Blacklisting",
        "Centralized Tracking App",
        "Badge Printing",
      ],
      link: "/software/access-control",
    },
    {
      title: "Access Control",
      description:
        "Access Control from ASIS manages employee admittance into controlled areas, preventing unauthorized admittance of non-employees, and is fully integrated with ASIS Work Force Management software. The access control software lets managers control who will be allowed to use designated entryways and when. Access Control provides greater control of employee movements by restricting entrance outside work schedules. In addition, a facility's doors can be scheduled to lock and unlock at designated times, so all personnel can pass at will.",
      features: [
        "Define Time Intervals for Punches",
        "Lock Out Tardiness/Early Birds",
        "Real-time Access Point Data",
        "Entry/Exit Recording",
        "Role-based Access Rights",
        "Custom Access Policies",
        "Security Awareness",
        "Personalized Group Rights",
        "Access History Logs",
      ],
      link: "/software/access-control",
    },
    {
      title: "Staff Tracking",
      description:
        "Staff tracking solution is completely integrated with ASIS Workforce and Access Control and operates without automatically rekeying of data. Staff tracking integrates with many of the Data Collection Solutions & Time Attendance ASIS Staff Tracking System will provide you with real-time staff tracking. The system consists of a web based application, RFID Reader and RFID Access Card or any other technology. It will log staff that cross designated access points.",
      features: [
        "Zone-based Access Limiting",
        "Eliminate Unauthorized Overtime",
        "Secure Area Admittance Control",
        "Lock Out Unauthorized Personnel",
        "Automated Guard Tour Logs",
        "Hardware Integration (RFID/Biometric)",
        "Event Image Capture",
        "Real-time Location Monitoring",
        "Detailed Event Reporting",
      ],
      link: "/software/access-control",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <div className="pt-32 pb-12 bg-white relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 skew-x-12 translate-x-32 -z-10" />
        <div className="absolute -top-24 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Innovating Technology
              </div>
              <h1 className="text-3xl md:text-6xl font-bold text-slate-900 mb-6 font-display leading-tight">
                Our <span className="text-primary bg-clip-text">Software</span>{" "}
                <br />
                <span className="text-slate-800">Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                Empowering your business with cutting-edge software tailored to
                streamline operations, enhance security, and drive growth.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Solutions List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-16 md:gap-24">
            {softwareSolutions.map((solution, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-10 md:gap-16 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <h2 className="text-xl md:text-3xl font-bold text-slate-900 relative inline-block">
                    {solution.title}
                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
                    {solution.description}
                  </p>

                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      Key Features
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {solution.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-slate-600 text-xs md:text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={solution.link}>
                    <Button variant="outline" className="group">
                      Learn More{" "}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                {/* Visual Side */}
                <div className="w-full md:w-5/12 aspect-square md:aspect-video rounded-3xl overflow-hidden relative shadow-2xl group border-4 border-white flex items-center justify-center">
                  {solution.image ? (
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${index % 2 === 0 ? "from-primary/20 via-blue-500/10 to-slate-100" : "from-blue-500/20 via-primary/10 to-slate-100"} opacity-100 flex items-center justify-center`}
                    >
                      <div className="text-center space-y-4">
                        <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mx-auto mb-4 text-primary animate-pulse">
                          {solution.title.includes("Visitor") && (
                            <Users size={48} />
                          )}
                          {solution.title.includes("Access") && (
                            <ShieldCheck size={48} />
                          )}
                          {solution.title.includes("Staff") && (
                            <MapIcon size={48} />
                          )}
                        </div>
                        <span className="text-lg font-bold text-slate-800 opacity-60 px-8 text-center block leading-tight">
                          {solution.title}
                        </span>
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-widest block">
                          Illustration Pending
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
