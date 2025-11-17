import Header from "@/components/header";
import Hero from "@/components/hero";
import Blog from "@/components/blog";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Blog />
    </div>
  );
}
