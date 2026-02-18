import { Car, BookOpen, Shield, ArrowRight } from "lucide-react";
import { Section } from "../ui/Section";
import { motion } from "motion/react";

export function ServicesSection() {
  const services = [
    {
      icon: Car,
      title: "Beginner Course",
      description:
        "Complete foundation for new drivers. Learn the basics of vehicle control, parking, road rules, and safe driving habits from scratch.",
      duration: "10-30 Hours",
    },
    {
      icon: BookOpen,
      title: "Refresher Training",
      description:
        "Perfect for licensed drivers looking to regain confidence behind the wheel. Brush up on skills, build awareness, and get comfortable again.",
      duration: "6-10 Hours",
    },
    {
      icon: Shield,
      title: "Ready for Driving Test",
      description:
        "Focused preparation for your official driving test. Covers test routes, mock exams, and everything you need to pass with confidence.",
      duration: "4-10 Hours",
    },
  ];
  return (
    <Section id="services" background="light">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Our Driving Courses
        </h2>
        <p className="text-lg text-slate-600">
          Whether you're a complete beginner or looking to polish your skills,
          we have a course tailored to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
              <service.icon className="h-6 w-6 text-amber-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {service.title}
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {service.description}
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                {service.duration}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
