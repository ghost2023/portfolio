import React from "react";
import { ArrowRight } from "lucide-react";
import { contacts } from "../constants";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-mono text-gray-400">
                Available for hire
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-primary font-mono text-lg tracking-widest">
                SYSTEM_INIT
              </h2>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
                Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
                  Resilient Systems.
                </span>
              </h1>
            </div>

            <p className="max-w-xl text-gray-400 text-lg leading-relaxed border-l-2 border-white/10 pl-6">
              Full-Stack Systems Engineer specializing in high-performance
              distributed architectures, robust APIs, and frictionless user
              experiences.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="#projects"
                className="group flex items-center gap-3 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all hover:scale-105"
              >
                View Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-4">
                {contacts
                  .filter(
                    (c) =>
                      c.url.includes("github") ||
                      c.url.includes("linkedin") ||
                      c.url.includes("tel"),
                  )
                  .map((contact) => (
                    <a
                      key={contact.url}
                      href={contact.url}
                      className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
                    >
                      <contact.icon className="w-5 h-5" />
                    </a>
                  ))}
              </div>
            </div>
          </div>

          {/* Right Column: Code/Nav Map */}
          <div
            className="hidden lg:block animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div
              style={{
                boxShadow: `inset 1px 1px 2px 0 rgba(255, 255, 255, 0.10),
          inset -1px -1px 1px 0px rgba(255, 255, 255, 0.1),
          0 2px 2px 0 rgba(255, 255, 255, 0.1)`,
              }}
              className="glass-panel rounded-xl p-8 max-w-md ml-auto transform rotate-1 bg-zinc-950/10 backdrop-blur-md group transition-transform duration-500"
            >
              <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="ml-4 text-xs text-gray-500 font-mono">
                  portfolio.config.js
                </div>
              </div>

              <div className="font-mono text-sm space-y-4">
                <div>
                  <span className="text-secondary">const</span>{" "}
                  <span className="text-accent">directory</span>{" "}
                  <span className="text-gray-500">=</span>{" "}
                  <span className="text-gray-300">{"{"}</span>
                </div>

                <div className="pl-6 space-y-3 border-l border-white/5 ml-2">
                  <a
                    href="#about"
                    className="group flex items-center gap-3 text-gray-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    <span className="text-gray-600">01</span>
                    <span className="group-hover:translate-x-2 transition-transform">
                      about:{" "}
                      <span className="text-gray-500">"The Developer"</span>,
                    </span>
                  </a>
                  <a
                    href="#projects"
                    className="group flex items-center gap-3 text-gray-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    <span className="text-gray-600">02</span>
                    <span className="group-hover:translate-x-2 transition-transform">
                      work:{" "}
                      <span className="text-gray-500">"Selected Projects"</span>
                      ,
                    </span>
                  </a>
                  <a
                    href="#profile"
                    className="group flex items-center gap-3 text-gray-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    <span className="text-gray-600">03</span>
                    <span className="group-hover:translate-x-2 transition-transform">
                      Me:{" "}
                      <span className="text-gray-500">
                        "Learn more about me"
                      </span>
                    </span>
                  </a>
                  <a
                    href="#contact"
                    className="group flex items-center gap-3 text-gray-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    <span className="text-gray-600">04</span>
                    <span className="group-hover:translate-x-2 transition-transform">
                      contact:{" "}
                      <span className="text-gray-500">"Get in touch"</span>
                    </span>
                  </a>
                </div>

                <div>
                  <span className="text-gray-300">{"}"}</span>
                  <span className="text-gray-500">;</span>
                </div>

                <div className="pt-4 text-xs text-gray-600">
                  <span className="text-green-500">// Ready to compile</span>
                  <div className="mt-1 animate-pulse">_</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
