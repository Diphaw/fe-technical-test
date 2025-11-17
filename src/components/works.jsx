import Card from "./ui/card";

export default function Works() {
  const works = [
    {
      image: "/",
      judul: "Designing Dashboards",
      tahun: "2020",
      tema: "Dashboard",
      deskripsi:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      image: "/",
      judul: "Vibrant Portraits of 2020",
      tahun: "2018",
      tema: "Ilustration",
      deskripsi:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      image: "/",
      judul: "36 Days of Malayalam type",
      tahun: "2018",
      tema: "Typography",
      deskripsi:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <section className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="">Featured Works</h1>
      </div>

      <div className="">
        {works.map((work) => (
          <Card key={work.image}>
            <div className="">{work.image}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}
