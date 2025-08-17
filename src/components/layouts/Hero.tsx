import React from "react";
import { Button } from "../ui/shadcn/button";
import Link from "next/link";

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "🔗" },
  { name: "TypeScript", icon: "🟦" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "Shadcn UI", icon: "✨" },
  { name: "Zustand", icon: "👌" },
];

const Hero = () => {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center ">
        {/* Animated Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 animate-gradient bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
          <span className="inline-block animate-bounce">🚀</span>
          Pixel CV
        </h1>
        <p className="text-lg md:text-2xl mb-12 text-center max-w-2xl">
          Create stunning resumes effortlessly with our modern, tech-powered ats
          friendly resume.
        </p>
        <Button variant={"gradient"} className="cursor-pointer py-5 mb-5">
          <Link href={"/resume"} className="cursor-pointer">
            Lets make a resume
          </Link>
        </Button>
        {/* Tech Stack Section */}
        <section className="bg-white/80 rounded-xl shadow-lg p-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Tech Stack Used
          </h2>
          <ul className="flex flex-wrap gap-6 justify-center">
            {techStack.map((tech) => (
              <li
                key={tech.name}
                className="flex flex-col items-center text-lg font-medium text-gray-700"
              >
                <span className="text-3xl mb-1">{tech.icon}</span>
                {tech.name}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Hero;
