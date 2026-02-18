import { ServicesSection } from "~/components/services";
import type { Route } from "./+types/home";
import { PageTitle } from "~/components/layout/PageTitle";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Thai Driving School | Services" }];
}

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageTitle
        title="Our Courses"
        subtitle="Find the perfect driving course tailored to your experience level and goals."
      />
      <ServicesSection />
    </div>
  );
}
