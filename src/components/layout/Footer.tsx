import { Linkedin, Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--bg)] py-12 px-6 md:px-12 lg:px-20 border-t border-[var(--crimson-border)]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <div className="flex gap-6 mb-8">
          <a href="https://linkedin.com/in/haneefmohamed" target="_blank" rel="noopener noreferrer" className="text-[var(--t2)] hover:text-[var(--crimson)] transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} strokeWidth={1.5} />
          </a>
          <a href="https://github.com/haneefmohamed" target="_blank" rel="noopener noreferrer" className="text-[var(--t2)] hover:text-[var(--crimson)] transition-colors" aria-label="GitHub">
            <Github size={20} strokeWidth={1.5} />
          </a>
          <a href="https://twitter.com/haneefmohamed" target="_blank" rel="noopener noreferrer" className="text-[var(--t2)] hover:text-[var(--crimson)] transition-colors" aria-label="Twitter">
            <Twitter size={20} strokeWidth={1.5} />
          </a>
          <a href="https://instagram.com/haneefmohamed" target="_blank" rel="noopener noreferrer" className="text-[var(--t2)] hover:text-[var(--crimson)] transition-colors" aria-label="Instagram">
            <Instagram size={20} strokeWidth={1.5} />
          </a>
        </div>
        <p className="font-mono text-[var(--t-xs)] text-[var(--t3)] tracking-widest uppercase text-center">
          © 2025 Haneef Mohamed · RTR. Colombo Mid Town · District 3220
        </p>
      </div>
    </footer>
  );
}
