import { type ReactNode } from "react";
interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  background?: "white" | "light" | "dark";
}
export function Section({
  id,
  className = "",
  children,
  background = "white",
}: SectionProps) {
  const bgStyles = {
    white: "bg-white",
    light: "bg-slate-50",
    dark: "bg-slate-900 text-white",
  };
  return (
    <section
      id={id}
      className={`py-20 md:py-24 ${bgStyles[background]} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">{children}</div>
    </section>
  );
}
