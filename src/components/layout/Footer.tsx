import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#5A0000] py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex gap-6 mb-4">
          <a
            href="https://linkedin.com/in/haneefmohamed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--ht2) hover:text-(--hta) transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} strokeWidth={1.5} />
          </a>
        </div>
        <p className="font-mono text-[0.875rem] text-[rgba(253,248,242,0.35)] text-center">
          © 2025 Haneef Mohamed · RTR. Colombo Mid Town · District 3220
        </p>
      </div>
    </footer>
  );
}
