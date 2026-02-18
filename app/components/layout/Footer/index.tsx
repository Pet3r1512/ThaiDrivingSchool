import { Link } from "react-router";
import Logo from "../Logo";
import { Phone } from "lucide-react";

export function Footer() {
  const quickLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-5">
            <Logo />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Learn smart, drive safe, and master the road with{" "}
              <strong className="text-amber-500">LTHAI</strong> — driving with
              confidence every step of the way.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-amber-500 transition-colors text-left"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Courses</h4>
            <ul className="space-y-3 text-sm">
              <li>Beginner Course</li>
              <li>Refresher Training</li>
              <li>Get Ready for Driving Test</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex flex-col gap-y-2">
                <div className="text-slate-500 text-xs uppercase tracking-wider mb-1 flex items-center gap-x-1.5">
                  <Phone size={18} className="text-amber-500" />{" "}
                  <Link
                    to="tel:0450309999"
                    className="text-[14px] lg:text-[16px]"
                  >
                    0450309999
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} LTHAI Driving School. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
