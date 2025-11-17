import Image from "next/image";
import Button from "./ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white pt-30 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Sisi Kiri */}
        <div className="py-12">
          {/* Deskripsi */}
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-semibold">
              Hi, I am John,
            </h1>
            <h1 className="text-3xl md:text-5xl font-semibold">
              Creative Technologist
            </h1>
          </div>
          <div className="py-4">
            <p className="max-w-2xl">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>

          {/* Tombol Download Resume */}
          <a href="/">
            <Button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white border-orange-500">
              Download Resume
            </Button>
          </a>
        </div>

        {/* Sisi Kanan */}
        <div className="w-64 h-64 rounded-full overflow-hidden">
          <Image
          src="/hero.png"
          alt="gambar hero"
          width={200}
          height={200}
          className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
