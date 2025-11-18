import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Card from "@/components/ui/card";
import { works } from "@/constants";

export default async function WorkDetail({ params }) {
  const { slug } = await params;

  const work = works.find((item) => item.slug === slug);

  if (!work) return <div>Work not found</div>;

  return (
    <>
      <Header />
      <section className="min-h-screen py-6 px-6 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto pt-10">
          <Card>
            <div className="">
              <div className="pb-6">
                <h1 className="text-3xl font-bold">{work.judul}</h1>
              </div>
              <div className="flex flex-row gap-6 pb-6">
                <h2 className="border rounded-2xl px-2 bg-orange-500 text-white font-bold">
                  {work.tahun}
                </h2>
                <h2 className="">{work.tema}</h2>
              </div>
              <div className="pb-6">
                <p className="max-w-3xl">{work.deskripsi}</p>
              </div>
              <div className="pb-6">
                <Image
                  src={work.image}
                  alt={work.judul}
                  width={800}
                  height={800}
                />
              </div>
            </div>

            <div className="">
              <div className="pb-6">
                <h1 className="text-3xl">Heading 1</h1>
                <h2 className="text-2xl">Heading 2</h2>
              </div>
              <div className="pb-6">
                <p className="max-w-3xl">{work.deskripsi}</p>
              </div>
              <div className="pb-6">
                <Image
                  src={work.image}
                  alt={work.judul}
                  width={800}
                  height={800}
                />
              </div>
              <div className="pb-6">
                <Image
                  src={work.image}
                  alt={work.judul}
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </>
  );
}
