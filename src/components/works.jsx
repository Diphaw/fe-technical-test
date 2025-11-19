import Image from "next/image";
import Link from "next/link";
import { works } from "@/constants";
import Card from "./ui/card";

export default function Works() {
  return (
    <section className="min-h-screen bg-white flex flex-col justify-center px-6 py-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="">
          <h1 className="font-bold text-black text-center md:text-left">
            Featured Works
          </h1>
        </div>

        {/* Card */}
        <div className="flex flex-col gap-4">
          {works.map((work) => (
            <Link key={work.slug} href={`works/${work.slug}`}>
              <Card className="bg-white flex flex-col pt-6 hover:bg-gray-200">
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
                    <h1 className="font-bold text-2xl md:text-3xl text-black">
                      {work.judul}
                    </h1>
                    <div className="flex gap-4">
                      <h2 className="border rounded-2xl bg-black text-white px-2 font-bold">
                        {work.tahun}
                      </h2>
                      <h2 className="text-gray-400">{work.tema}</h2>
                    </div>
                    <p className="text-black">{work.deskripsi}</p>
                  </div>
                </div>
                <div className="w-full mt-6 h-px bg-gray-400"></div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
