import clsx from "clsx";

export default function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/logo.jpg"
      alt="Logo"
      className={clsx("h-12 w-auto max-w-full object-contain", className)}
    />
  );
}
