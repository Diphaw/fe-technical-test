import Blog from "@/components/blog";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Works from "@/components/works";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Blog />
      <Works />
      <Footer />
    </div>
  );
}
