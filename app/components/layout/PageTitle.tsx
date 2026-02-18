import { motion } from "motion/react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}
export function PageTitle({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="relative bg-slate-900 pt-32 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 opacity-90" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 skew-x-12 transform origin-top-right" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-500/5 -skew-x-12 transform origin-bottom-left" />

        {/* Decorative Road Lines */}
        <div className="absolute left-1/4 top-0 bottom-0 w-32 border-r-2 border-dashed border-slate-700/30 transform -skew-x-12" />
        <div className="absolute right-1/4 top-0 bottom-0 w-32 border-l-2 border-dashed border-slate-700/30 transform -skew-x-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">{subtitle}</p>
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-20 bg-amber-500 rounded-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
