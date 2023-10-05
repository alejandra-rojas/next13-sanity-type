import { getProjects, getWelcome } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  console.log(projects);

  const welcome = await getWelcome();
  console.log(welcome);

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">
        {welcome.title}
        <span className="bg-gradient-to-r from-orange-600 to-purple-950 bg-clip-text text-transparent">
          Alejandra
        </span>
      </h1>
      <p className="mt-3 text-xl text-gray-900">{welcome.subtitle}</p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">
        {welcome.projects}
      </h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
          >
            {project.image && (
              <Image
                src={project.image.url}
                alt={project.image.alt}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="mt-2 font-extrabold">{project.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// in next 13 there is no need to use getStaticProps/Paths
