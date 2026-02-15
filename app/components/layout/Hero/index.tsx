import Background from "./Background";
import Content from "./Content";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900"
    >
      <Background />
      <Content />
    </section>
  );
}
