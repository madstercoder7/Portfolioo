import {
  SiHtml5, SiCss3, SiJavascript,
  SiReact, SiTailwindcss,
  SiPython, SiFlask, SiGit, SiGithub
} from "react-icons/si";

const techStack = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Python", icon: SiPython },
  { name: "Flask", icon: SiFlask },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="scroll-mt-24 py-24 lg:py-32"
      aria-label="Tech Stack"
    >
      <div className="sticky top-0 z-20 mx-6 mb-8 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:mx-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-6 lg:opacity-100">
        <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">🛠️ Tech Stack</h2>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-slate-700 bg-[#0f172a] px-4 py-5 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <Icon className="text-3xl text-slate-300" />
              <span className="text-sm font-medium text-slate-200 text-center">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
