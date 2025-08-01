'use client';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0b1e36]/90 to-[#1a2c47]/90 text-white py-12 px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-blue-300 tracking-wide">Gaurav Singh</h3>
          <p className="text-sm text-gray-400 mt-2">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-xl text-cyan-300">
          <a
            href="https://github.com/GauravSingh160729"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gaurav-singh-72a455313/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:gauravsin1607@gmail.com"
            className="hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Divider Line */}
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm text-gray-400">
        Made with 💙 using Next.js & Tailwind CSS
      </div>
    </footer>
  );
}
