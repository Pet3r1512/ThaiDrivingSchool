import { useEffect, useState } from "react";
import Logo from "../Logo";
import Navbar from "./Navbar";

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg py-4" : "bg-white py-6"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}
