import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMysql, SiDjango } from "react-icons/si";

export default function About() {
  return (
    <main className="bg-gradient-to-tr from-[#0b1e36]/90 to-[#1a2c47]/90 min-h-screen py-24 text-white">
      {/* About Section */}
      <section className="max-w-5xl mx-auto mb-16 px-6 animate-fadein">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed [animation-delay:_0.12s]">
          Hey there 👋 I'm <span className="text-blue-300 font-semibold">Gaurav Singh</span> — a developer fueled by curiosity, creativity, and chai ☕. I blend sleek frontends with robust backends to build experiences that don’t just look good but feel right.<br/><br/>
          I turn ideas into code, and code into impact. From intuitive interfaces to powerful APIs, my work is about precision, performance, and a sprinkle of personality.
        </p>
        <blockquote className="italic border-l-4 border-cyan-400 pl-4 mt-8 text-gray-400 [animation-delay:_0.2s]">
          "Simplicity is the ultimate sophistication — and I like my code to reflect that."
        </blockquote>
      </section>

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto px-6 animate-fadein [animation-delay:_0.3s]">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-300 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
          🚀 My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend Card */}
          <SkillCard title="Frontend" color="text-cyan-300" skills={[
            { label: "HTML5", color: "text-orange-400", icon: <FaHtml5 size={44}/> },
            { label: "CSS3", color: "text-blue-400", icon: <FaCss3Alt size={44}/> },
            { label: "JavaScript", color: "text-yellow-400", icon: <FaJs size={44}/> },
            { label: "ReactJS", color: "text-cyan-400", icon: <FaReact size={44}/> },
            { label: "Next.js", color: "text-white", icon: <SiNextdotjs size={44}/> },
          ]}/>

          {/* Backend Card */}
          <SkillCard title="Backend & DB" color="text-purple-300" skills={[
            { label: "MySQL", color: "text-cyan-500", icon: <SiMysql size={44}/> },
            { label: "Django", color: "text-green-400", icon: <SiDjango size={44}/> },
            { label: "Node.js", color: "text-green-400", icon: <FaNodeJs size={44}/> },
          ]}/>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="max-w-5xl mx-auto mt-16 px-6 animate-fadein [animation-delay:_0.4s]">
        <h2 className="text-2xl font-bold mb-4 text-cyan-300">🤹 Beyond Code</h2>
        <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
          <li>I sketch interfaces before I code them.</li>
          <li>Jamming lo-fi with my guitar keeps my logic sharp.</li>
          <li>Big fan of tech podcasts and spicy street momos 🌶️</li>
        </ul>
      </section>
    </main>
  );
}

function SkillCard({ title, color, skills }) {
  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur-md p-8 shadow-lg border border-white/20 flex flex-col items-center hover:scale-[1.03] transition-transform duration-300 animate-fadein">
      <h3 className={`text-2xl font-semibold mb-6 ${color}`}>{title}</h3>
      <div className="flex flex-wrap gap-6 justify-center">
        {skills.map(({ label, color, icon }) => (
          <SkillIcon key={label} label={label} color={color}>
            {icon}
          </SkillIcon>
        ))}
      </div>
    </div>
  );
}

function SkillIcon({ label, color, children }) {
  return (
    <div className="flex flex-col items-center group cursor-pointer transition duration-300 hover:scale-110">
      <span className={`mb-2 ${color} icon-wiggle icon-glow`}>{children}</span>
      <span className="text-sm font-medium text-gray-200 group-hover:text-white">{label}</span>
    </div>
  );
}
