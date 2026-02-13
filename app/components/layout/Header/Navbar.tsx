import { useLocation } from "react-router";
import BookNowBtn from "./BookNowBtn";
import Sidebar from "./Sidebar";

export const navLinks = [
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

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname === path;
  };
  return (
    <>
      <nav className="hidden lg:flex items-center gap-x-8 ml-auto">
        {navLinks.map((link, index) => {
          return (
            <a
              key={index}
              href={link.path}
              className={`text-sm font-medium lg:hover:text-amber-500 ${isActive(link.path) ? "text-amber-500" : "text-slate-600"} transition-all duration-150 ease-linear`}
            >
              {link.name}
            </a>
          );
        })}
        <BookNowBtn />
      </nav>
      <nav className="lg:hidden ml-auto h-full flex items-center">
        <Sidebar />
      </nav>
    </>
  );
}
