import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "Agency Website",
      image: "/portfolio/agency website.jpg",
      description:
        "Website agency untuk menampilkan layanan, portofolio, dan membangun kepercayaan calon klien.",
    },
    {
      title: "AI Technology Website",
      image: "/portfolio/ai technology website.jpg",
      description:
        "Website teknologi untuk memperkenalkan solusi AI, produk digital, dan layanan teknologi.",
    },
    {
      title: "Company Profile Website",
      image: "/portfolio/company profile website.jpg",
      description:
        "Company profile profesional untuk memperkenalkan perusahaan, layanan, dan informasi bisnis.",
    },
    {
      title: "Construction & Contractor Website",
      image: "/portfolio/construction and contractor website.jpg",
      description:
        "Website kontraktor untuk menampilkan layanan konstruksi, proyek, dan pengalaman perusahaan.",
    },
    {
      title: "E-commerce Website",
      image: "/portfolio/ecommerce website.jpg",
      description:
        "Website toko online untuk menampilkan produk dan membantu pelanggan melakukan pembelian.",
    },
    {
      title: "Education Website",
      image: "/portfolio/education website.jpg",
      description:
        "Website pendidikan untuk sekolah, lembaga kursus, program belajar, dan informasi akademik.",
    },
    {
      title: "Healthcare & Clinic Website",
      image: "/portfolio/health care & clinic website.jpg",
      description:
        "Website klinik untuk menampilkan layanan kesehatan, informasi dokter, fasilitas, dan kontak.",
    },
    {
      title: "Personal Brand Website",
      image: "/portfolio/personal brand website.jpg",
      description:
        "Website personal branding untuk memperkuat profil profesional dan membangun kredibilitas online.",
    },
    {
      title: "Personal Portfolio Website",
      image: "/portfolio/personal portofolio website.jpg",
      description:
        "Portfolio online untuk menampilkan keahlian, pengalaman, karya, dan project yang pernah dikerjakan.",
    },
    {
      title: "Personal Service Website",
      image: "/portfolio/personal service website.jpg",
      description:
        "Website layanan pribadi untuk memperkenalkan jasa, keahlian, paket layanan, dan cara menghubungi.",
    },
    {
      title: "Property & Real Estate Website",
      image: "/portfolio/property & real estate website.jpg",
      description:
        "Website properti untuk menampilkan listing, informasi rumah, lokasi, dan detail properti.",
    },
    {
      title: "Restaurant & Cafe Website",
      image: "/portfolio/restaurant & cafe website.jpg",
      description:
        "Website restoran dan cafe untuk menampilkan menu, suasana, lokasi, dan informasi reservasi.",
    },
    {
      title: "SaaS Website",
      image: "/portfolio/Saas Website.jpg",
      description:
        "Website SaaS untuk memperkenalkan produk software, fitur, manfaat, dan layanan berlangganan.",
    },
    {
      title: "Startup Website",
      image: "/portfolio/startup website.jpg",
      description:
        "Website startup untuk memperkenalkan produk, solusi, visi, dan value proposition kepada pengguna.",
    },
    {
      title: "Travel & Tourism Website",
      image: "/portfolio/travel & tourism website.jpg",
      description:
        "Website travel untuk menampilkan destinasi, paket perjalanan, layanan, dan informasi wisata.",
    },
  ];

  return (
    <section id="portfolio" className="bg-slate-50 py-20 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Portfolio
          </span>

          <h2 className="mt-3 text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
            Contoh Website
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Berbagai jenis website untuk bisnis, profesional, dan kebutuhan
            digital lainnya.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-200 dark:bg-slate-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-6 text-slate-500 dark:text-slate-400">
          Setiap project memiliki kebutuhan dan tingkat kompleksitas yang
          berbeda. Hubungi kami untuk mendiskusikan kebutuhan website kamu.
        </p>
      </div>
    </section>
  );
}
