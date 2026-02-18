import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "~/components/ui/Button";
import { Users, Award, Calendar, CircleCheckBig } from "lucide-react";
import BookNowBtn from "../Header/BookNowBtn";

export default function Content() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Students",
    },
    {
      icon: Award,
      value: "95%",
      label: "Pass Rate",
    },
    {
      icon: Calendar,
      value: "5+",
      label: "Years",
    },
  ];
  return (
    <div className="container mx-auto p-5 lg:py-0 lg:px-4 relative z-10 lg:flex lg:items-center lg:justify-between">
      <div className="max-w-4xl">
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
          <div className="flex items-center w-fit gap-x-1.5 py-1 px-3 rounded-full bg-amber-500/10 text-amber-500 font-semibold text-sm mb-6 border border-amber-500/20 pointer-events-none">
            <CircleCheckBig
              size={18}
              strokeWidth={3.5}
              className="text-green-600"
            />{" "}
            Recommended Driving School
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Your <span className="text-amber-500">Road to Freedom</span> Start
            Here
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            One-on-one <strong className="text-amber-500">L-plate </strong>
            driving lessons with a patient, fully licensed instructor. Learn in
            a modern car, at your pace, on real Australian roads.
          </p>
        </motion.div>

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
            delay: 0.2,
          }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <BookNowBtn size="lg" />
          <Link to="/services">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View Courses
            </Button>
          </Link>
        </motion.div>

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
            delay: 0.4,
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center gap-2 mb-2 text-amber-500">
                <stat.icon className="size-5" />
                <span className="font-bold text-xl lg:text-2xl text-white">
                  {stat.value}
                </span>
              </div>
              <span className="text-slate-400 text-sx lg:text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="hidden lg:block w-xl aspect-square rounded-full overflow-hidden shadow-2xl">
        <img src="/hero.jpg" alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
