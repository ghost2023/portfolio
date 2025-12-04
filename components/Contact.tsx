import React from "react";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { DEV_NAME } from "../constants";

const Contact: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-background pt-24 pb-12 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-8 mb-20">
          <span className="text-primary font-mono text-sm tracking-wider">
            03. WHAT'S NEXT?
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-lg text-lg">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
          <a
            href="mailto:hello@example.com"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-primary/50 transition-all"
          >
            <Mail className="w-5 h-5 text-primary" />
            <span className="font-mono">Say Hello</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-white/5">
          <div>
            <h4 className="text-white font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Socials</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-4">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">
              Subscribe for updates on my latest projects and articles.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-primary w-full"
              />
              <button className="bg-primary hover:bg-violet-600 px-4 py-2 text-white text-sm font-medium rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-mono">
          <p>© 2024 {DEV_NAME}. Built with React & Tailwind.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-900 border border-green-500"></span>
            All Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
