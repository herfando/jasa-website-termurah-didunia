import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "Agency Website",
      image: "/portfolio/agency website.jpg",
      description:
        "Agency website to showcase services, portfolio, and build trust with potential clients.",
    },
    {
      title: "AI Technology Website",
      image: "/portfolio/ai technology website.jpg",
      description:
        "Technology website to introduce AI solutions, digital products, and technology services.",
    },
    {
      title: "Company Profile Website",
      image: "/portfolio/company profile website.jpg",
      description:
        "Professional company profile to introduce the company, services, and business information.",
    },
    {
      title: "Construction & Contractor Website",
      image: "/portfolio/construction and contractor website.jpg",
      description:
        "Contractor website to showcase construction services, projects, and company experience.",
    },
    {
      title: "E-commerce Website",
      image: "/portfolio/ecommerce website.jpg",
      description:
        "Online store website to showcase products and help customers make purchases.",
    },
    {
      title: "Education Website",
      image: "/portfolio/education website.jpg",
      description:
        "Education website for schools, courses, learning programs, and academic information.",
    },
    {
      title: "Healthcare & Clinic Website",
      image: "/portfolio/health care & clinic website.jpg",
      description:
        "Clinic website to showcase healthcare services, doctors, facilities, and contact information.",
    },
    {
      title: "Personal Brand Website",
      image: "/portfolio/personal brand website.jpg",
      description:
        "Personal branding website to strengthen a professional profile and build online credibility.",
    },
    {
      title: "Personal Portfolio Website",
      image: "/portfolio/personal portofolio website.jpg",
      description:
        "Online portfolio to showcase skills, experience, work, and previous projects.",
    },
    {
      title: "Personal Service Website",
      image: "/portfolio/personal service website.jpg",
      description:
        "Personal service website to introduce services, expertise, service packages, and contact information.",
    },
    {
      title: "Property & Real Estate Website",
      image: "/portfolio/property & real estate website.jpg",
      description:
        "Property website to showcase listings, property information, locations, and property details.",
    },
    {
      title: "Restaurant & Cafe Website",
      image: "/portfolio/restaurant & cafe website.jpg",
      description:
        "Restaurant and cafe website to showcase menus, atmosphere, location, and reservation information.",
    },
    {
      title: "SaaS Website",
      image: "/portfolio/Saas Website.jpg",
      description:
        "SaaS website to introduce software products, features, benefits, and subscription services.",
    },
    {
      title: "Startup Website",
      image: "/portfolio/startup website.jpg",
      description:
        "Startup website to introduce products, solutions, vision, and value proposition to users.",
    },
    {
      title: "Travel & Tourism Website",
      image: "/portfolio/travel & tourism website.jpg",
      description:
        "Travel website to showcase destinations, travel packages, services, and tourism information.",
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
            Website Examples
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Various types of websites for businesses, professionals, and other
            digital needs.
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
          Every project has different requirements and levels of complexity.
          Contact us to discuss your website needs.
        </p>
      </div>
    </section>
  );
}
