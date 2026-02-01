import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img
                src="/images/logos/logo.png"
                alt="ASIS IT"
                className="h-12 w-auto brightness-0 invert opacity-80"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Advanced Solutions for Information Systems. Pioneering IT
              excellence in Qatar since 2001.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/software"
                  className="hover:text-primary transition-colors"
                >
                  Software
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/#partners"
                  className="hover:text-primary transition-colors"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/software/erp"
                  className="hover:text-primary transition-colors"
                >
                  ERP Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/software/hospital-management"
                  className="hover:text-primary transition-colors"
                >
                  Hospital Management
                </Link>
              </li>
              <li>
                <Link
                  href="/software/access-control"
                  className="hover:text-primary transition-colors"
                >
                  Access Control
                </Link>
              </li>
              <li>
                <Link
                  href="/software"
                  className="hover:text-primary transition-colors"
                >
                  WorkForce Management
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-primary transition-colors"
                >
                  Hardware & Gates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Doha, Qatar</li>
              <li>info@asis-it.com</li>
              <li>+974 1234 5678</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ASIS. All rights reserved.</p>
          <div className="flex items-center gap-8 mt-4 md:mt-0">
            <div className="flex gap-4 border-r border-slate-800 pr-8">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={14} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={14} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
