import React, { useState, useEffect } from "react";
import {
  Github,
  X,
  Smartphone,
  Monitor,
  Calendar,
  User,
  ArrowUpRight,
  Maximize2,
} from "lucide-react";
import { PROJECTS } from "../constants";
import { Project } from "../types";

const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle Open/Close Animation Logic
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (selectedId) {
      // Opening: Set project immediately, then trigger animation
      setActiveProject(PROJECTS.find((p) => p.id === selectedId) || null);
      document.body.style.overflow = "hidden";

      // Small delay to ensure DOM is rendered before adding opacity class
      timer = setTimeout(() => setIsAnimating(true), 50);
    } else {
      // Closing: Trigger exit animation first
      setIsAnimating(false);
      document.body.style.overflow = "unset";

      // Wait for animation to finish before removing from DOM
      timer = setTimeout(() => setActiveProject(null), 500);
    }

    return () => clearTimeout(timer);
  }, [selectedId]);

  return (
    <section id="projects" className="py-32 bg-background relative z-10">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-20">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[1px] bg-primary"></div>
              <span className="text-primary font-mono text-sm tracking-widest">
                SELECTED WORKS
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">
                Artifacts
              </span>
            </h2>
          </div>
        </div>

        {/* Artistic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className={`group relative cursor-pointer rounded-xl overflow-hidden bg-surface border border-white/5 hover:border-white/20 transition-all duration-700 ${
                /* Make the second item span 2 columns if on large screen for variety */
                index === 1 || index === 2 ? "lg:col-span-2" : ""
                }`}
            >
              {/* Image Container with Artistic Filters */}
              <div className="relative h-[450px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 z-10 transition-colors duration-500" />
                {/* Noise overlay */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 blur-[2px] group-hover:blur-0 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
                />

                {/* Hover Reveal Details */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                  <div className="bg-zinc-400/40 backdrop-blur-xl border shadow border-white/20 px-6 py-3 rounded-full flex items-center gap-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-white font-mono tracking-wider">
                      View More
                    </span>
                    <Maximize2 className=" size-4.5 text-primary" />
                  </div>
                </div>
              </div>

              {/* Minimal Info Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/70 to-transparent group-hover:via-black/80 z-20">
                <div className="flex justify-between items-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-primary text-xs font-mono font-medium uppercase tracking-widest opacity-0  group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.type === "mobile" ? (
                        <Smartphone className="size-3.5" />
                      ) : (
                        <Monitor className="size-3.5" />
                      )}
                      {project.type}
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-300 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="hidden md:flex text-4xl text-zinc-100/15 group-hover:text-zinc-100/80 font-bold font-mono transition-colors">
                    0{index + 1}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Screen Detailed Modal (Overlay) */}
      {activeProject && (
        <div
          className={`fixed inset-0 z-[100] flex items-end justify-center pt-4 transition-all duration-500 ease-out ${isAnimating ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        >
          {/* Backdrop with Blur */}

          {/* Modal Content */}
          <div
            className={`relative w-full h-[calc(100dvh-70px)] backdrop-blur-md border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl shadow-primary/5 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${isAnimating
                ? "scale-100 translate-y-0"
                : "scale-95 translate-y-12"
              }`}
          >
            {/* Left: Visual Showcase */}
            <div className="w-full md:w-7/12 bg-[#05050520] relative overflow-y-auto custom-scrollbar p-8 md:p-12 flex flex-col items-center justify-start border-b md:border-b-0 md:border-r border-white/5">
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-6 left-6 md:hidden p-2 bg-white/10 rounded-full text-white z-50 backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>

              {activeProject.type === "mobile" ? (
                /* Mobile Presentation */
                <div className="grid grid-cols-2 gap-8 w-full max-w-lg mx-auto py-8">
                  {activeProject.gallery?.map((img, idx) => (
                    <div
                      key={idx}
                      className={`relative rounded-[2.5rem] overflow-hidden border-[8px] border-[#1a1a1a] bg-black shadow-2xl aspect-[9/19] transform transition-transform duration-700 ${idx % 2 !== 0 ? "translate-y-12" : ""
                        } ${isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                      {/* Phone Glare */}
                      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 to-transparent pointer-events-none"></div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Web Presentation */
                <div className="space-y-12 w-full py-4">
                  {activeProject.gallery?.map((img, idx) => (
                    <div
                      key={idx}
                      className={`relative rounded-xl overflow-hidden border border-white/10 bg-[#111] shadow-2xl group transform transition-all duration-700 ${isAnimating
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10"
                        }`}
                      style={{ transitionDelay: `${idx * 150}ms` }}
                    >
                      {/* Browser Bar Mockup */}
                      <div className="h-8 bg-[#151515] border-b border-white/5 flex items-center px-4 gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30"></div>
                        </div>
                        <div className="ml-4 flex-1 h-4 bg-white/5 rounded text-[10px] text-gray-600 flex items-center px-2 font-mono">
                          localhost:3000
                        </div>
                      </div>
                      <img
                        src={img}
                        alt=""
                        className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Details & Context */}
            <div className="w-full md:w-7/12 p-8 bg-surface/80 backdrop-blur-xl  md:p-12 overflow-y-auto relative custom-scrollbar">
              <button
                onClick={() => setSelectedId(null)}
                className="hidden md:flex absolute top-8 right-8 p-3 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors group border border-transparent hover:border-white/10"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              <div
                className={`space-y-10 mt-8 transition-all duration-700 delay-200 ${isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div>
                  <div className="flex items-center gap-3 text-primary font-mono text-xs mb-6">
                    <span className="px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                      {activeProject.year}
                    </span>
                    <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
                      {activeProject.type.toUpperCase()}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    {activeProject.title}
                  </h2>
                  <p className="text-xl text-gray-400 font-light leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                <div className="flex gap-8 border-y border-white/5 py-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">
                      <User className="w-4 h-4" /> ROLE
                    </div>
                    <div className="text-white font-medium text-lg">
                      {activeProject.role}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">
                      <Calendar className="w-4 h-4" /> TIMELINE
                    </div>
                    <div className="text-white font-medium text-lg">
                      3 Months
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-200 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <div className="w-1 h-4 bg-primary rounded-full"></div>
                    About the Project
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {activeProject.longDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-200 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <div className="w-1 h-4 bg-secondary rounded-full"></div>
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm font-mono text-gray-300 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-8">
                  <a
                    href={activeProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-black border border-white/10 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 hover:border-white/30 transition-all"
                  >
                    <Github className="w-5 h-5" />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
