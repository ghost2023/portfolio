import React from "react";
import { Cpu, Terminal, Zap, Palette, Github, Database, Layout, Shield } from "lucide-react";

const Me: React.FC = () => {
  return (
    <section id="profile" className="py-32 bg-background relative overflow-hidden">
      {/* Background Ambience - similar to Hero */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] opacity-50"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.02]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-24">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[1px] bg-primary"></div>
              <span className="text-primary font-mono text-sm tracking-widest uppercase">
                System Profile
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Crafting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">
                Intelligence
              </span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
             <span className="font-mono text-gray-500 text-sm italic">// user_id: @the_developer</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Bio - Left Side */}
          <div className="lg:col-span-7 space-y-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-2xl text-gray-300 leading-relaxed font-light">
                I am a builder who thrives at the intersection of <span className="text-white font-medium">performance</span> and <span className="text-white font-medium">aesthetics</span>. Currently, I'm deep-rooting my expertise in <span className="text-primary">AI & Machine Learning</span> to create smarter, more adaptive systems.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-primary/50 transition-all duration-500">
                <Terminal className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg mb-2">Dev Environment</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Daily driver: <span className="text-gray-200">Linux + Neovim</span>. I value speed and minimalism, stripping away the bloat to focus on pure craftsmanship.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-secondary/50 transition-all duration-500">
                <Shield className="w-8 h-8 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg mb-2">Emerging Tech</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Exploring <span className="text-gray-200">Rust & Go</span> for their uncompromising stance on safety and runtime efficiency. Always learning, always optimizing.
                </p>
              </div>
            </div>
          </div>

          {/* Infrastructure/Experience - Right Side (Glass Panel style) */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-8 rounded-2xl bg-zinc-950/40 backdrop-blur-xl border border-white/10 relative overflow-hidden group">
               {/* Decorative elements */}
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Database className="w-24 h-24" />
              </div>

              <h3 className="text-white font-mono text-sm mb-8 flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                INFRASTRUCTURE_OPS
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">Deployment & Orchestration</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Docker", "Nix", "Dokploy", "Coolify"].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded text-xs text-gray-300 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">Monitoring & Observability</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Grafana", "Prometheus", "Loki"].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded text-xs text-gray-300 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Layout className="w-5 h-5 text-accent" />
                    <span className="text-sm">Obsessed with <span className="text-white font-medium">UI/UX Craftsmanship</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Activity Section */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-8">
             <Github className="w-6 h-6 text-white" />
             <h3 className="text-xl font-bold text-white">GitHub Activity</h3>
             <div className="flex-1 h-[1px] bg-white/5"></div>
          </div>
          
          <div className="relative group rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 p-4 md:p-8">
            {/* Visual noise/ambience */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <img 
                src="/github-graph.png" 
                alt="GitHub Contribution Graph" 
                className="w-full max-w-4xl h-auto filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
              />
              <div className="mt-6 flex items-center gap-6 text-gray-500 text-xs font-mono uppercase tracking-widest">
                <span>Total Contributions</span>
                <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                <span>Active Streak</span>
                <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                <span>Current Year</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Me;
