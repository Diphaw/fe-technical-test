import { blog } from "@/constants";
import Card from "./ui/card";

export default function Blog() {
  return (
    <section className="min-h-[50vh] bg-blue-50 px-6 flex flex-col justify-center py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          <h1 className="font-bold text-center md:text-left">Recent Posts</h1>
          <a href="/blog" className="text-blue-400">
            View All
          </a>
        </div>

        {/* card */}
        <div className="pt-6 grid gap-10 grid-cols-1 md:grid-cols-2">
          {blog.map((blogs) => (
            <Card key={blogs.judul} className="p-4 bg-white flex flex-col">
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
  );
}
