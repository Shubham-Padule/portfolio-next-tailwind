import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Shubham. All rights reserved.</p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaLinkedin size={20} />
          </a>
          <a href="https://instagram.com/your-insta-handle" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
