import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#5A0000] py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Social Links */}
        <div className="flex gap-6 mb-4">
          <a
            href="https://linkedin.com/in/haneefmohamed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgba(253,248,242,0.6)] hover:text-[rgba(253,248,242,0.95)] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} strokeWidth={1.5} />
          </a>
          <a
            href="mailto:haneef.rotaract3220@gmail.com"
            className="text-[rgba(253,248,242,0.6)] hover:text-[rgba(253,248,242,0.95)] transition-colors"
            aria-label="Email"
          >
            <Mail size={20} strokeWidth={1.5} />
          </a>
        </div>

        {/* Copyright */}
        <p className="font-mono text-[0.75rem] text-[rgba(253,248,242,0.4)] text-center max-w-md">
          © 2025 Haneef Mohamed · RTR. Colombo Mid Town · District 3220 · Sri Lanka & Maldives
        </p>
      </div>
    </footer>
  );
}
