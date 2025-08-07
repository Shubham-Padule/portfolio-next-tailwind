'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">About Me</h1>

      <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300">
        <p>
          Hey there! m <span className="text-blue-300 font-semibold">Shubham</span> — a self-motivated frontend developer, gym enthusiast 🏋️‍♂️,
          and hardcore gamer 🎮 who believes in continuous growth.
        </p>
        
        <p>
          My journey began with curiosity and evolved into a passion for crafting smooth, responsive UIs and learning how to create real-world apps using React, MUI, and now diving deep into Next.js & Tailwind.
        </p>

        <p>
          I also love pushing limits in the gym 💪, experimenting with new tech 🧠, and applying discipline from fitness into my coding life.
        </p>

        <p className="border-l-4 border-blue-500 pl-4 italic">
          Discipline, consistency, and a growth mindset — that’s how I level up.
        </p>

        <div className="pt-8">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">My Journey</h2>
          <ul className="space-y-4 border-l border-gray-700 pl-6">
            <li>
              <span className="text-blue-400 font-bold">2022:</span> Started working on real-world React projects
            </li>
            <li>
              <span className="text-blue-400 font-bold">2023:</span> Built a role-based visitor management UI system
            </li>
            <li>
              <span className="text-blue-400 font-bold">2024:</span> Entered the Next.js & Tailwind world 🌍
            </li>
            <li>
              <span className="text-blue-400 font-bold">2025:</span> Building full-stack apps, exploring AI/ML, fitness coaching
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
