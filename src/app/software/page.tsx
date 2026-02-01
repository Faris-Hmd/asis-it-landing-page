"use client";

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
      link: "/software/erp",
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
      link: "/software/hospital-management",
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
      {/* Hero Section */}
      <section className="relative flex items-center pt-14 overflow-hidden min-h-[40vh] shadow-lg">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/qatari_meeting.png"
            alt="Qatar Business Technology"
            className="w-full h-full object-cover"
          />
          {/* Dark Black Overlay for contrast */}
          <div className="absolute inset-0 bg-black/70 md:backdrop-blur-[1px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-8 md:py-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium mb-4 md:backdrop-blur-sm">
                Innovating Qatar's Digital Landscape
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display leading-tight">
                Our{" "}
                <span className="text-primary italic">Software Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl">
                Empowering businesses across Qatar with cutting-edge software
                tailored to streamline operations, enhance security, and drive
                digital transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {softwareSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col h-full"
              >
                {/* Image / Header Visual */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {solution.image ? (
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                      <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                        {solution.title.includes("Visitor") && (
                          <Users className="w-10 h-10" />
                        )}
                        {solution.title.includes("Access") && (
                          <ShieldCheck className="w-10 h-10" />
                        )}
                        {solution.title.includes("Staff") && (
                          <MapIcon className="w-10 h-10" />
                        )}
                      </div>
                    </div>
                  )}

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-white/90 md:backdrop-blur-md p-2 rounded-xl shadow-lg border border-white/20">
                      {solution.title.includes("ERP") && (
                        <Activity className="w-5 h-5 text-primary" />
                      )}
                      {solution.title.includes("Hospital") && (
                        <Briefcase className="w-5 h-5 text-blue-600" />
                      )}
                      {solution.title.includes("WorkForce") && (
                        <Clock className="w-5 h-5 text-emerald-600" />
                      )}
                      {(solution.title.includes("Visitor") ||
                        solution.title.includes("Access") ||
                        solution.title.includes("Staff")) && (
                        <Lock className="w-5 h-5 text-slate-800" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {solution.description}
                  </p>

                  <div className="mt-auto space-y-6">
                    {/* Simplified Feature List */}
                    <div className="flex flex-wrap gap-2">
                      {solution.features.slice(0, 3).map((feature, fIdx) => (
                        <span
                          key={fIdx}
                          className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-slate-50 text-slate-500 rounded-md border border-slate-100"
                        >
                          {feature}
                        </span>
                      ))}
                      {solution.features.length > 3 && (
                        <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-primary/5 text-primary rounded-md border border-primary/10">
                          +{solution.features.length - 3} More
                        </span>
                      )}
                    </div>

                    <Link href={solution.link} className="block">
                      <Button
                        variant="primary"
                        className="w-full rounded-xl group/btn"
                      >
                        Explore Solution
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Additional icons used in the grid
function Briefcase(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function Activity(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function Clock(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function Lock(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
