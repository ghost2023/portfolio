import React from "react";
import { Briefcase, User, Code, Terminal, Database, Cpu } from "lucide-react";
import { DEV_BIO, EXPERIENCE, SKILLS } from "../constants";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Bio & Skills Column */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-primary font-mono text-sm tracking-wider">
                  01. ABOUT ME
                </span>
                <div className="h-px bg-white/10 flex-grow"></div>
              </div>

              <h2 className="text-4xl font-bold text-white mb-6">
                Behind the Code
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {DEV_BIO}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <h3 className="text-3xl font-bold text-white mb-1">8+</h3>
                  <p className="text-gray-500 font-mono text-sm">
                    Years of Experience
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <h3 className="text-3xl font-bold text-white mb-1">50+</h3>
                  <p className="text-gray-500 font-mono text-sm">
                    Projects Deployed
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Stack Integration */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-accent" />
                Technical Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 rounded-lg text-sm font-mono bg-black border border-white/10 text-gray-300 hover:border-primary/50 hover:text-primary transition-all cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
                {/* Extra hardcoded for effect */}
                <span className="px-4 py-2 rounded-lg text-sm font-mono bg-black border border-white/10 text-gray-300 hover:border-primary/50 hover:text-primary transition-all">
                  GraphQL
                </span>
                <span className="px-4 py-2 rounded-lg text-sm font-mono bg-black border border-white/10 text-gray-300 hover:border-primary/50 hover:text-primary transition-all">
                  AWS
                </span>
                <span className="px-4 py-2 rounded-lg text-sm font-mono bg-black border border-white/10 text-gray-300 hover:border-primary/50 hover:text-primary transition-all">
                  Docker
                </span>
              </div>
            </div>
          </div>

          {/* Timeline Column */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="text-secondary w-5 h-5" />
                <h2 className="text-2xl font-bold text-white">
                  Experience Log
                </h2>
              </div>

              <div className="relative border-l border-white/10 ml-3 space-y-10">
                {EXPERIENCE.map((exp, index) => (
                  <div key={index} className="ml-8 relative group">
                    <span className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full bg-surface border border-white/20 group-hover:bg-primary group-hover:border-primary transition-colors"></span>
                    <div className="p-5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex justify-between items-center mb-3">
                        <p className="text-secondary font-mono text-sm">
                          {exp.company}
                        </p>
                        <p className="text-xs text-gray-500 font-mono">
                          {exp.period}
                        </p>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
