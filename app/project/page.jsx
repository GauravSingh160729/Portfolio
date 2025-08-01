'use client';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Project One",
    description:
      "Dice Game ",
    imageSrc: "/dice.png",
    techStack: ["Bootstrap", "Tailwind", "React"],
    projectLink: "https://dicegamebygaurav.netlify.app/"
  },
  {
    title: "Project Two",
    description:
      "Worldatlas website",
    imageSrc: "/world.png",
    techStack: ["React", "API Integration"],
    projectLink: "https://worldatlasbygauravsingh.netlify.app/"
  },
  {
    title: "Project Three",
    description:
      "E-Commerce website",
    imageSrc: "/comm.png",
    techStack: ["React", "JavaScript", "CSS", "API"],
    projectLink: "https://worldstorebygaurav.netlify.app/"
  }
];

export default function Projects() {
  return (
    <section className="bg-gradient-to-br from-[#0b1e36]/90 to-[#1a2c47]/90 py-24 px-6 sm:px-8 md:px-12 lg:px-16 text-white min-h-screen">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-fadein text-center">
        💼 My Projects
      </h2>

      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ title, description, imageSrc, techStack, projectLink }, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 overflow-hidden hover:scale-[1.03] transition-transform duration-300"
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            <div className="relative h-52 w-full">
              <Image
                src={imageSrc}
                alt={`${title} screenshot`}
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="/placeholder.png"
              />
            </div>

            <div className="p-6 flex flex-col justify-between min-h-[280px]">
              <h3 className="text-xl font-semibold mb-2 text-blue-300">{title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-cyan-500/30 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={projectLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-cyan-300 hover:text-blue-300 font-medium transition text-sm"
              >
                View Project <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
