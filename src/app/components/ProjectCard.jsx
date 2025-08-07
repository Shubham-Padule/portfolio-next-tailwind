import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
      <h2 className="text-2xl font-semibold text-blue-300">{title}</h2>
      <p className="text-gray-300 mt-2">{description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((item, i) => (
          <span key={i} className="text-sm px-2 py-1 bg-blue-700 rounded-md">{item}</span>
        ))}
      </div>

      <div className="mt-4 flex space-x-4">
        <a href={github} target="_blank" className="flex items-center gap-2 text-white hover:text-blue-400">
          <FaGithub /> Code
        </a>
        <a href={demo} target="_blank" className="flex items-center gap-2 text-white hover:text-blue-400">
          <FaExternalLinkAlt /> Live
        </a>
      </div>
    </div>
  );
}
