import React from "react";
import { Mail, MapPin, ArrowRight, File, Phone, Download } from "lucide-react";
import { DEV_NAME, contacts } from "../constants";

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
          <p className="text-gray-400 max-w-lg text-lg py-8">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
          <div className="flex sm:items-center max-sm:flex-col mt-8 gap-4">
            <a
              href={contacts.find((c) => c.icon === Mail)?.url}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-primary/50 transition-all"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="font-mono flex flex-col items-start gap-1">
                <div>Say Hello</div>
                <div className="text-sm text-gray-400 font-medium">
                  nathnaelwonisha@gmail.com
                </div>
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={contacts.find((c) => c.url.includes("tel"))?.url}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-primary/50 transition-all"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-mono flex flex-col items-start gap-1">
                <div>Call me</div>
                <div className="text-sm text-gray-400 font-medium">
                  +251-94-666-9787
                </div>
              </span>
              <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
            </a>{" "}
            <a
              href={contacts.find((c) => c.label === "Resume")?.url}
              download
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-primary/50 transition-all"
            >
              <File className="w-5 h-5 text-primary" />
              <span className="font-mono">Download Resume</span>
              <Download className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-white/5">
          <div className="flex items-center gap-6">
            <h4 className="text-white font-bold  text-base ">Socials</h4>
            <ul className="text-gray-500 flex items-center gap-4 text-sm">
              {contacts
                .filter((c) => c.label !== "Resume" && c.icon !== Mail)
                .map((contact) => (
                  <li key={contact.url}>
                    <a
                      href={contact.url}
                      className="hover:text-primary transition-colors"
                    >
                      {contact.url.includes("github")
                        ? "GitHub"
                        : contact.url.includes("linkedin")
                          ? "LinkedIn"
                          : contact.url.includes("t.me")
                            ? "Telegram"
                            : contact.url.includes("tel")
                              ? "Call"
                              : "Social"}
                    </a>
                  </li>
                ))}
            </ul>
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
