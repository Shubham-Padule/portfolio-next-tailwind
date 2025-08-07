// src/app/components/Hero.jsx

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black to-gray-900 px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Hi, I'm <span className="text-blue-400">Shubham</span>
      </h1>
      <p className="text-lg md:text-2xl text-gray-300 max-w-xl mb-6">
        Frontend Developer | Fitness Freak 💪 | Gamer 🎮 | Always Leveling Up 🚀
      </p>
      <div className="flex space-x-4">
        <a href="/projects" className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
          View Projects
        </a>
        <a href="/Shubham-Resume.pdf" className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition">
          Download Resume
        </a>
      </div>
    </section>
  );
}
