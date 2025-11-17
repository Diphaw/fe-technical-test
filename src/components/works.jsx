import Image from "next/image";
import Card from "./ui/card";

export default function Works() {
  const works = [
    {
      image: "/image/projek1.png",
      judul: "Designing Dashboards",
      tahun: "2020",
      tema: "Dashboard",
      deskripsi:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      image: "/projek2.png",
      judul: "Vibrant Portraits of 2020",
      tahun: "2018",
      tema: "Ilustration",
      deskripsi:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      image: "/projek3.png",
      judul: "36 Days of Malayalam type",
      tahun: "2018",
      tema: "Typography",
      deskripsi:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <section className="min-h-screen bg-white flex flex-col justify-center px-6 py-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="">
          <h1 className="font-bold text-black text-center md:text-left">Featured Works</h1>
        </div>

        <div className="flex flex-col gap-4">
          {works.map((work) => (
            <Card key={work.image} className="bg-white flex flex-col pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-auto">
                  <Image
                    src={work.image}
                    alt="projek"
                    width={250}
                    height={250}
                    className="w-full md:w-auto rounded-lg object-cover "
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <h1 className="font-bold text-3xl">{work.judul}</h1>
                  <div className="flex gap-4">
                    <h2 className="border rounded-2xl bg-black text-white px-2 font-bold">
                      {work.tahun}
                    </h2>
                    <h2 className="text-gray-400">{work.tema}</h2>
                  </div>
                  <p className="">{work.deskripsi}</p>
                </div>
              </div>
              <div className="w-full mt-6 h-px bg-gray-400"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
