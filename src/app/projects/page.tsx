// src/app/projects/page.tsx

'use client'
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "Fitness Tracker UI",
    description: "Responsive dashboard to track workouts, calories, and progress using React + MUI.",
    tech: ["React", "Material UI", "Chart.js"],
    github: "https://github.com/yourusername/fitness-tracker",
    demo: "https://fitness-demo.vercel.app",
  },
  {
    title: "Visitor Management System",
    description: "Role-based visitor logging system with supervisor dashboards using Next.js.",
    tech: ["Next.js", "Tailwind CSS", "Node.js"],
    github: "https://github.com/yourusername/visitor-system",
    demo: "https://visitor-demo.vercel.app",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-10 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center text-blue-400">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
