import Footer from "@/components/footer";
import Header from "@/components/header";
import Card from "@/components/ui/card";
import { blog } from "@/constants";

export default function Blog() {
  return (
    <>
      <Header />
      <section className="min-h-screen bg-white px-6 flex flex-col justify-center py-6">
        <div className="max-w-7xl mx-auto pt-10">
          <h1 className="font-bold text-left text-3xl md:text-4xl">Blog</h1>

          {/* card */}
          <div className="pt-10 grid gap-10 grid-cols-1">
            {blog.map((blogs) => (
              <Card key={blogs.judul} className=" bg-white flex flex-col">
                <div className="flex flex-col gap-4">
                  <h1 className="text-black font-bold text-2xl md:text-3xl">
                    {blogs.judul}
                  </h1>
                  <span className="pt-4">
                    {blogs.tanggal} | {blogs.pencipta}
                  </span>
                </div>
                <div className="pt-4">
                  <p className="max-w-1xl">{blogs.deskripsi}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
