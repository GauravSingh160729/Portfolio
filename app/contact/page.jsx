// app/contact/page.jsx

'use client';

import ContactForm from "@/components/contactform";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0b1e36]/90 to-[#1a2c47]/90 flex items-center justify-center px-6 py-24 text-white">
      <section className="w-full max-w-xl bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-2xl border border-white/20 animate-fadein">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-center">
          📬 Get In Touch
        </h1>
        <p className="text-gray-300 text-center mb-8">
          Have a project, idea, or just want to say hi? Fill out the form and I’ll get back to you soon!
        </p>
        <ContactForm />
      </section>
    </main>
  );
}
