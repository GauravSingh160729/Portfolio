'use client';
import Image from 'next/image';
import profilePic from '../public/Port.jpg';
import { useEffect, useState } from 'react';

import About from './about/page';
import Project from './project/page';
import Contact from './contact/page';

const titles = [
  'I’m a coder',
  'I’m a frontend developer',
  'I’m a backend developer',
];

export default function HomePage() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = deleting ? 50 : 100;
    const timeout = setTimeout(() => {
      const currentTitle = titles[index];
      if (!deleting && charIndex <= currentTitle.length) {
        setText(currentTitle.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      } else if (deleting && charIndex > 0) {
        setText(currentTitle.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setDeleting(!deleting);
        if (!deleting) {
          setTimeout(() => {}, 1000);
        } else {
          setIndex((index + 1) % titles.length);
        }
      }
    }, typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index]);

  return (
    <>
      <div className="bg-gradient-to-r from-[#0b1e36]/90 to-[#1a2c47]/90 text-white min-h-screen py-28 px-6 animate-fadein">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Section */}
          <div>
            <h1 className="text-4xl font-bold mb-4 animate-textGlow">
              Hello, I’m <span className="text-blue-300">Gaurav Singh</span>
            </h1>
            <h2 className="text-2xl mb-4 text-cyan-300">{text}</h2>
            <p className="text-gray-200">
              Passionate about building exceptional digital experiences from front-end design to
              back-end logic. Let's connect and craft something great together!
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
              >
                Hire Me 💼
              </a>
              <a
                href="https://drive.google.com/file/d/18QNNbO_Dgp90PUS_bI70-B940ywPHTFV/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-950 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
              >
                View CV 📄
              </a>
            </div>

            <a
              href="/contact"
              className="inline-block mt-6 text-cyan-300 hover:text-blue-300 font-medium"
            >
              Let’s Connect 🚀
            </a>
          </div>

          {/* Right Section */}
          <div className="flex justify-center md:justify-end animate-pop">
            <Image
              src={profilePic}
              alt="Gaurav's profile"
              width={320}
              height={320}
              className="rounded-full border-4 border-blue-300 shadow-xl"
              priority
            />
          </div>
        </div>
      </div>

      <About />
      <Project />
      <Contact />
    </>
  );
}
