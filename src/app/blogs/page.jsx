import Footer from "@/components/footer";
import Header from "@/components/header";
import Card from "@/components/ui/card";

export default function Blog() {
  const blog = [
    {
      judul: "Making a design system from scratch",
      tanggal: "12 Feb 2020",
      pencipta: "Design, Pattern",
      deskripsi:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      judul: "Creating pixel prfect icons in Figma",
      tanggal: "12 Feb 2020",
      pencipta: "Figma, Icon Design",
      deskripsi:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      judul: "Creating pixel perfect icns in Figma",
      tanggal: "12 Feb 2020",
      pencipta: "Figma, Icon Design",
      deskripsi:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      judul: "Creating pixel perfect icons in Figa",
      tanggal: "12 Feb 2020",
      pencipta: "Figma, Icon Design",
      deskripsi:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <><Header /><section className="min-h-screen bg-white px-6 flex flex-col justify-center py-6">
          <div className="max-w-7xl mx-auto pt-10">
              <h1 className="font-bold text-center md:text-left text-3xl md:text-4xl">
                  Blog
              </h1>

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
      </section><Footer/></>
  );
}
