import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Thai Driving School" }];
}

export default function Home() {
  return <></>;
}
