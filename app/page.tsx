"use client";

import React, { useState, useEffect } from "react";
import {
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Menu,
  X,
  Cpu,
  Layers,
  Settings,
  Activity,
  FileCode,
  Smartphone,
  ChevronRight,
  ChevronLeft,
  Send,
  CheckCircle,
  AlertCircle,
  Check,
  TrendingUp,
  Users,
  Code2,
  Terminal,
} from "lucide-react";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

// Custom SVG Linkedin Icon Component
function Linkedin({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// Custom SVG Twitter/X Icon Component
function TwitterX({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Custom SVG WhatsApp Icon Component
function WhatsApp({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}


// Helper to render customized tech brand icons
function getSkillIcon(skill: string) {
  const name = skill.toLowerCase();
  const iconClass = "h-4 w-4 shrink-0 transition-transform group-hover/item:scale-110";

  if (name.includes("react native")) {
    return (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className={iconClass} fill="none" stroke="#61dafb" strokeWidth="1" aria-hidden="true">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    );
  }
  if (name.includes("javascript")) {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#f7df1e"/>
        <text x="12" y="17" fill="#000" fontWeight="bold" fontSize="11" fontFamily="sans-serif" textAnchor="middle">JS</text>
      </svg>
    );
  }
  if (name.includes("typescript")) {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#3178c6"/>
        <text x="12" y="17" fill="#fff" fontWeight="bold" fontSize="11" fontFamily="sans-serif" textAnchor="middle">TS</text>
      </svg>
    );
  }
  if (name === "ios" || name.startsWith("ios ")) {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.49-.62.71-1.16 1.85-1.01 2.97 1.11.09 2.23-.59 2.94-1.4" />
      </svg>
    );
  }
  if (name === "android" || name.startsWith("android ")) {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="#3ddc84" aria-hidden="true">
        <path d="M17.523 15.3c-.551 0-.999-.448-.999-1s.448-.999.999-.999c.551 0 1 .448 1 1s-.449 1-1 1zm-11.046 0c-.551 0-.999-.448-.999-1s.448-.999.999-.999c.551 0 1 .448 1 1s-.448 1-1 1zm11.545-5.872l1.93-3.343a.498.498 0 00-.182-.68.498.498 0 00-.68.182l-1.966 3.407A8.966 8.966 0 0012 8.006c-1.895 0-3.647.585-5.101 1.585L4.933 6.184a.498.498 0 00-.68-.182.498.498 0 00-.182.68l1.93 3.343A8.995 8.995 0 002.992 16h18.016a8.995 8.995 0 00-3.007-6.572z" />
      </svg>
    );
  }
  if (name.includes("firebase")) {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
        <path d="M3.89 15.572L6.012 2.186a.5.5 0 01.916-.17l2.122 3.972 6.452-6.452a.5.5 0 01.815.347l1.793 15.689-14.22 8.214a.5.5 0 01-.48 0L3.89 15.572z" fill="#FFC107"/>
        <path d="M15.502 6.335L3.89 15.572 6.012 2.186a.5.5 0 01.916-.17l8.574 4.319z" fill="#FFA000"/>
        <path d="M3.89 15.572l14.22-8.214a.5.5 0 01.696.168L20.6 21.86a.5.5 0 01-.696.696L3.89 15.572z" fill="#FF8F00"/>
      </svg>
    );
  }
  if (name.includes("objective c") || name.includes("objective-c")) {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#0b5a9e"/>
        <text x="12" y="16" fill="#fff" fontWeight="bold" fontSize="10" fontFamily="monospace" textAnchor="middle">[C]</text>
      </svg>
    );
  }
  if (name.includes("swift")) {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#f05138"/>
        <path d="M19.12 16.7c-2.28 1.84-5.36 2.4-7.85 2.1-1.3-.15-2.55-.65-3.6-1.4 1.94-.4 3.7-1.33 4.96-2.6 1.4-1.42 2.1-3.23 2.1-5.18 0-.4-.04-.8-.1-1.2 1.6 1.76 2.54 4.02 2.42 6.32-.05.97-.33 1.9-.93 1.96z" fill="#fff"/>
      </svg>
    );
  }
  if (name.includes("kotlin")) {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="url(#kotlin-grad3)"/>
        <defs>
          <linearGradient id="kotlin-grad3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0095D5"/>
            <stop offset="50%" stopColor="#3F52B5"/>
            <stop offset="100%" stopColor="#F88909"/>
          </linearGradient>
        </defs>
        <path d="M3 21V3h18L12 12l9 9z" fill="#fff" opacity="0.9"/>
      </svg>
    );
  }
  if (name.includes("jenkins")) {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#d33833"/>
        <circle cx="12" cy="9" r="4" fill="#fff" />
        <path d="M10 13c-3 0-5 2-5 5v3h14v-3c0-3-2-5-5-5h-4z" fill="#fff" />
      </svg>
    );
  }
  if (name.includes("fastlane")) {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#00f2fe"/>
        <path d="M12 2L2 22h20L12 2z" fill="#000" opacity="0.8" />
        <path d="M12 6l-6 12h12L12 6z" fill="#fff" />
      </svg>
    );
  }
  if (name.includes("xcode")) {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#1572b6"/>
        <path d="M6 18l4-12h4l4 12h-3l-1-3H10l-1 3H6zm4.5-5.5h3L12 8.5l-1.5 4z" fill="#fff"/>
      </svg>
    );
  }
  if (name.includes("vscode")) {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#007acc"/>
        <path d="M18 6l-6-4-2 1v14l2 1 6-4V6zm-9 6.5l3-3v6l-3-3z" fill="#fff"/>
      </svg>
    );
  }
  if (name.includes("android studio")) {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#3ddc84"/>
        <text x="12" y="16" fill="#000" fontWeight="bold" fontSize="10" fontFamily="sans-serif" textAnchor="middle">AS</text>
      </svg>
    );
  }
  if (name.includes("sentry")) {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="#362d59" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#e1564f"/>
      </svg>
    );
  }
  if (name.includes("crashlytics")) {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="#ffcb2b" aria-hidden="true">
        <path d="M12 2L2 22h20L12 2z" />
        <path d="M12 6l-6 12h12L12 6z" fill="#fff" />
      </svg>
    );
  }
  if (name.includes("git")) {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="#f05032" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 15V9a4 4 0 0 0-4-4H9" />
        <line x1="6" y1="9" x2="6" y2="15" />
      </svg>
    );
  }
  if (name.includes("cursor")) {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="#50e3c2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="3 3 10.07 19.97 12.58 12.58 19.97 10.07 3 3" />
        <line x1="13" y1="13" x2="19" y2="19" />
      </svg>
    );
  }
  if (name.includes("agile")) {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21.5 2v6h-6" />
        <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    );
  }
  if (name.includes("scrum")) {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <path d="M5 7h2M5 11h2M11 7h3M11 11h2M17 7h2" />
      </svg>
    );
  }
  if (name.includes("sprint") || name.includes("retrospective")) {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="#fb7185" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    );
  }
  if (name.includes("bugsnag")) {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="#3f2b4f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="4" fill="#3f2b4f" />
        <path d="M12 7v6" stroke="#ffffff" strokeWidth="2.5" />
        <path d="M12 17h.01" stroke="#ffffff" strokeWidth="2.5" />
      </svg>
    );
  }
  if (name.includes("google analytics")) {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden="true">
        <rect x="4" y="14" width="3.5" height="6" rx="1.5" fill="#F9AB00" />
        <rect x="10.25" y="8" width="3.5" height="12" rx="1.5" fill="#F25C54" />
        <rect x="16.5" y="3" width="3.5" height="17" rx="1.5" fill="#E84A5F" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// Sub-component: Scroll Reveal Wrapper
function ScrollReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref as any}
      className={`reveal-init ${isVisible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [showHeader, setShowHeader] = useState(true);
  const [activeScreenIndex, setActiveScreenIndex] = useState<Record<string, number>>({});
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  // Monitor Scroll for Active Section & Header Visibility
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const sections = ["hero", "skills", "timeline", "projects", "education", "awards", "contact"];
      const scrollPosition = currentScrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Smart Header Logic: show on scroll-up, hide on scroll-down
      if (currentScrollY < 100) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      {/* Background Decorative Mesh */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-violet-950/15 to-transparent pointer-events-none z-0" />
      <div className="absolute top-[1200px] right-0 w-[400px] h-[400px] bg-purple-950/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[800px] left-0 w-[500px] h-[500px] bg-indigo-950/10 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Header / Sticky Glass Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-zinc-800/40 bg-zinc-950/80 backdrop-blur-md transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 font-bold text-white shadow-lg transition-transform group-hover:scale-105">
              RS
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 opacity-30 blur-sm group-hover:opacity-60 transition-opacity" />
            </span>
            <span className="hidden text-lg font-semibold tracking-tight text-white sm:block">
              Rahul Singh <span className="text-indigo-400">Solanki</span>
            </span>
          </a>

          {/* Desktop Nav links */}
          <nav className="hidden items-center gap-1 md:flex">
            {[
              { id: "skills", label: "Skills" },
              { id: "timeline", label: "Timeline" },
              { id: "projects", label: "Projects" },
              { id: "education", label: "Education" },
              { id: "awards", label: "Awards" },
              { id: "contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-white ${
                  activeSection === link.id ? "text-indigo-400" : "text-zinc-400"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-indigo-400 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="https://linkedin.com/in/rahulsolanki1818"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="/resume.pdf"
              download="Rahul_Singh_Solanki_Resume.pdf"
              className="rounded-full bg-zinc-900 border border-zinc-800 px-4 py-2 text-xs font-semibold text-zinc-200 hover:bg-zinc-800 transition-all hover:border-zinc-700 flex items-center gap-2 group"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>
            <a
              href="mailto:rs.singh1812@gmail.com"
              className="rounded-full bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700 transition-all flex items-center gap-2 group shadow-md shadow-indigo-500/10"
            >
              Get in Touch
              <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="block text-zinc-400 hover:text-white md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-zinc-800/40 bg-zinc-950 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-3">
              {[
                { id: "skills", label: "Skills" },
                { id: "timeline", label: "Timeline" },
                { id: "projects", label: "Projects" },
                { id: "education", label: "Education" },
                { id: "awards", label: "Awards" },
                { id: "contact", label: "Contact" },
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 text-base font-medium transition-colors ${
                    activeSection === link.id ? "text-indigo-400" : "text-zinc-400"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="h-px bg-zinc-800 my-2" />
              <div className="flex flex-wrap items-center gap-4 py-2">
                <a
                  href="/resume.pdf"
                  download="Rahul_Singh_Solanki_Resume.pdf"
                  className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
                >
                  <Download className="h-5 w-5" /> Resume
                </a>
                <a
                  href="https://linkedin.com/in/rahulsolanki1818"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" /> LinkedIn
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section id="hero" className="relative mx-auto max-w-6xl px-6 py-20 md:py-32 z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-300">
                <Smartphone className="h-3.5 w-3.5 animate-pulse text-indigo-400" />
                8 Years Mobile App Expert
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1]">
                Hi, I'm Rahul, <br />
                <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">
                  Mobile App Developer
                </span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
                Accomplished <strong className="text-zinc-200">Technical Lead</strong> and mobile application developer with <strong className="text-zinc-200">8 years of experience</strong> in cross-platform mobile development, specializing in <strong className="text-zinc-200">React Native</strong>, <strong className="text-zinc-200">iOS</strong>, and <strong className="text-zinc-200">Android</strong> applications. Highly experienced in Agile methodologies, architecture design, and technical strategy with a focus on collaborative team leadership.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#contact"
                  className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:from-indigo-600 hover:to-violet-700 hover:shadow-indigo-500/35 hover:-translate-y-0.5 transition-all flex items-center gap-2 group"
                >
                  Hire Me
                  <Send className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="#timeline"
                  className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-6 py-3.5 text-sm font-semibold text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 transition-all flex items-center gap-2"
                >
                  View Experience
                  <Briefcase className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Side: Floating Mock Code Terminal Card */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-indigo-500 to-violet-500 opacity-25 blur-lg" />
              <div className="glow-card relative rounded-2xl border border-zinc-800/80 bg-zinc-900/90 shadow-2xl overflow-hidden font-mono text-xs">
                {/* Window Header */}
                <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-950/80 px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] text-zinc-500 flex items-center gap-1"><Terminal className="h-3 w-3" /> rahul_profile.ts</span>
                  <div className="w-8" />
                </div>
                {/* Code Window */}
                <div className="p-6 space-y-4 text-zinc-300 overflow-x-auto">
                  <div>
                    <span className="text-violet-400">const</span> <span className="text-indigo-300">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500">name:</span> <span className="text-emerald-300">"Rahul Singh Solanki"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500">role:</span> <span className="text-emerald-300">"Technical Lead"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500">experienceYears:</span> <span className="text-amber-300">8.0</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500">specialties:</span> [
                    <span className="text-emerald-300">"React Native"</span>, <span className="text-emerald-300">"iOS (Swift)"</span>, <span className="text-emerald-300">"Android (Kotlin)"</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500">performanceMetrics:</span> &#123;
                  </div>
                  <div className="pl-8">
                    <span className="text-zinc-500">renderTimeReduction:</span> <span className="text-emerald-300">"20%"</span>,
                  </div>
                  <div className="pl-8">
                    <span className="text-zinc-500">threadOptimisation:</span> <span className="text-emerald-300">"+25%"</span>,
                  </div>
                  <div className="pl-8">
                    <span className="text-zinc-500">pipelineSuccessRate:</span> <span className="text-emerald-300">"99%"</span>
                  </div>
                  <div className="pl-4">&#125;,</div>
                  <div className="pl-4">
                    <span className="text-zinc-500">currentLocation:</span> <span className="text-emerald-300">"Indore, M.P."</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500">isAvailableForHiring:</span> <span className="text-indigo-400">true</span>
                  </div>
                  <div>&#125;;</div>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="mx-auto max-w-6xl px-6 py-12 relative z-10 border-t border-zinc-900">
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { number: "8", label: "Years Experience", icon: Briefcase, color: "text-indigo-400" },
                { number: "3+", label: "Devs Managed", icon: Users, color: "text-purple-400" },
                { number: "25%", label: "Thread Boost", icon: TrendingUp, color: "text-emerald-400" },
                { number: "99%", label: "CI/CD Success", icon: Activity, color: "text-amber-400" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-6 hover:bg-zinc-900/60 hover:border-zinc-800 transition-all flex flex-col items-center text-center sm:items-start sm:text-left"
                >
                  <div className={`p-2.5 rounded-lg bg-zinc-950 border border-zinc-800/80 mb-4 group-hover:scale-105 transition-transform ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div className="text-3xl font-bold text-white tracking-tight">{stat.number}</div>
                  <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="mx-auto max-w-6xl px-6 py-20 relative z-10 border-t border-zinc-900">
          <ScrollReveal className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Expertise</h2>
              <p className="text-3xl font-bold text-white sm:text-4xl tracking-tight">Skills & Tech Stack</p>
              <p className="mx-auto max-w-xl text-zinc-400 text-sm sm:text-base">
                An overview of my engineering competencies, languages, and technical frameworks honed over 8 years.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Hybrid / Native Apps",
                  icon: Smartphone,
                  color: "from-indigo-500/10 to-indigo-600/5 border-indigo-500/20 hover:border-indigo-500/40 text-indigo-400",
                  skills: ["React Native (5.5 Years)", "iOS (1.5 Years)", "Android (4 Months)"],
                },
                {
                  title: "Programming Languages",
                  icon: Code2,
                  color: "from-purple-500/10 to-purple-600/5 border-purple-500/20 hover:border-purple-500/40 text-purple-400",
                  skills: ["JavaScript", "TypeScript", "Swift", "Objective-C", "Kotlin"],
                },
                {
                  title: "Developer Tools",
                  icon: Settings,
                  color: "from-emerald-500/10 to-emerald-600/5 border-emerald-500/20 hover:border-emerald-500/40 text-emerald-400",
                  skills: ["Xcode", "VSCode", "Cursor", "Android Studio", "Git", "GitHub"],
                },
                {
                  title: "CI/CD & DevOps",
                  icon: Layers,
                  color: "from-amber-500/10 to-amber-600/5 border-amber-500/20 hover:border-amber-500/40 text-amber-400",
                  skills: ["Jenkins", "Fastlane", "Firebase App Distribution"],
                },
                {
                  title: "Monitoring & Analytics",
                  icon: Activity,
                  color: "from-rose-500/10 to-rose-600/5 border-rose-500/20 hover:border-rose-500/40 text-rose-400",
                  skills: ["Sentry", "Crashlytics", "Bugsnag", "Google Analytics"],
                },
                {
                  title: "Methodologies",
                  icon: Cpu,
                  color: "from-sky-500/10 to-sky-600/5 border-sky-500/20 hover:border-sky-500/40 text-sky-400",
                  skills: ["Agile Development", "Scrum", "Sprint Planning", "Architecture Design"],
                },
              ].map((group, idx) => (
                <div
                  key={idx}
                  className={`glow-card relative rounded-2xl border bg-gradient-to-br ${group.color} p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800/80">
                      <group.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-white text-base">{group.title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {group.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2.5 text-zinc-400 text-sm group/item">
                        {getSkillIcon(skill)}
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* WORK TIMELINE SECTION */}
        <section id="timeline" className="mx-auto max-w-6xl px-6 py-20 relative z-10 border-t border-zinc-900">
          <ScrollReveal className="space-y-16">
            <div className="space-y-4 text-center">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Career History</h2>
              <p className="text-3xl font-bold text-white sm:text-4xl tracking-tight">Year-Wise Timeline</p>
              <p className="mx-auto max-w-xl text-zinc-400 text-sm sm:text-base">
                Track my professional journey and structural growth within leading product & services firms.
              </p>
            </div>

            {/* Timeline Vertical Stack */}
            <div className="relative pl-8 ml-4 md:ml-8 space-y-12">
              
              {/* Item 1: Juniper Square */}
              <div className="relative">
                {/* Vertical connector line */}
                <div className="absolute -left-[34px] top-3 w-0.5 bg-zinc-800/80 bottom-[-62px]" />
                {/* Bullet */}
                <div className="absolute -left-[45px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-indigo-500 bg-zinc-950 text-indigo-400 shadow-md">
                  <Briefcase className="h-3 w-3" />
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wide bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/20">
                      January 2026 - Present
                    </span>
                    <span className="text-xs text-zinc-500 flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> Bengaluru (Remote)
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Technical Lead</h3>
                    <h4 className="text-sm font-semibold text-zinc-300">Juniper Square</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-start gap-2.5">
                      <span className="text-base shrink-0 select-none">🏛️</span>
                      <span>Engineered and integrated major foundational organizational data pillars into the platform, specifically <strong className="text-zinc-200">Offerings, Prospects, and Entities</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-base shrink-0 select-none">⚡</span>
                      <span>Directed the end-to-end delivery of complex, large-scale, and extra-large technical projects, ensuring <strong className="text-zinc-200">100% on-time completion</strong> with <strong className="text-zinc-200">zero production bugs</strong>.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Item 2: Washmen */}
              <div className="relative">
                {/* Vertical connector line */}
                <div className="absolute -left-[34px] top-3 w-0.5 bg-zinc-800/80 bottom-[-62px]" />
                {/* Bullet */}
                <div className="absolute -left-[45px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-sky-400 bg-zinc-950 text-sky-400 shadow-md">
                  <Briefcase className="h-3 w-3" />
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-sky-400 uppercase tracking-wide bg-sky-400/10 px-2 py-0.5 rounded-md border border-sky-400/20">
                      November 2025 - January 2026
                    </span>
                    <span className="text-xs text-zinc-500 flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> Dubai (Remote)
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Senior Mobile Developer</h3>
                    <h4 className="text-sm font-semibold text-zinc-300">Washmen</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-start gap-2.5">
                      <span className="text-base shrink-0 select-none">📱</span>
                      <span>Resolved critical app-level navigation conflicts involving modal presentations, significantly improving <strong className="text-zinc-200">user flow and application stability</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-base shrink-0 select-none">✨</span>
                      <span>Developed and launched the mobile application integration of <strong className="text-zinc-200">"WF Plus" (Wash & Fold Plus)</strong>, a major new core service offering.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Item 3: Team Lead at Housing.com */}
              <div className="relative">
                {/* Vertical connector line */}
                <div className="absolute -left-[34px] top-3 w-0.5 bg-zinc-800/80 bottom-[-62px]" />
                {/* Bullet */}
                <div className="absolute -left-[45px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-emerald-500 bg-zinc-950 text-emerald-400 shadow-md">
                  <Briefcase className="h-3 w-3" />
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                      July 2023 - October 2025
                    </span>
                    <span className="text-xs text-zinc-500 flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> Gurugram, Haryana, India (Remote)
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Team Lead</h3>
                    <h4 className="text-sm font-semibold text-zinc-300">Housing.com</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-start gap-2.5">
                      <span className="text-base shrink-0 select-none">🚀</span>
                      <span>Modernized the Housing App by migrating to the <strong className="text-zinc-200">React Native New Architecture (0.79.5)</strong>, building custom <strong className="text-zinc-200">TurboModules and Fabric components</strong> for improved rendering performance.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-base shrink-0 select-none">📦</span>
                      <span>Implemented <strong className="text-zinc-200">split bundle loading</strong> for cross-platform optimization, transitioning to synchronous communication patterns and achieving a <strong className="text-zinc-200">25% improvement in thread performance</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-base shrink-0 select-none">👥</span>
                      <span>Enhanced team productivity through systematic technical issue identification and rapid resolution, achieving a <strong className="text-zinc-200">99% on-time delivery rate</strong> for product features.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-base shrink-0 select-none">⚙️</span>
                      <span>Set up and maintained Android and iOS CI/CD pipelines on <strong className="text-zinc-200">Jenkins</strong>, achieving a <strong className="text-zinc-200">99% build creation success rate</strong>, and designed an automated cleanup pipeline to resolve storage constraints.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-base shrink-0 select-none">🔥</span>
                      <span>Automated build creation and uploads to <strong className="text-zinc-200">Firebase App Distribution</strong>, reducing build delivery time to QA by <strong className="text-zinc-200">80%</strong> and increasing overall testing efficiency.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-base shrink-0 select-none">📷</span>
                      <span>Integrated Ricoh and GoPro <strong className="text-zinc-200">360-degree camera devices</strong> to capture and create immersive digital property tours.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Item 4: Senior SDE at Housing.com */}
              <div className="relative">
                {/* Vertical connector line */}
                <div className="absolute -left-[34px] top-3 w-0.5 bg-zinc-800/80 bottom-[-62px]" />
                {/* Bullet */}
                <div className="absolute -left-[45px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-violet-500 bg-zinc-950 text-violet-400 shadow-md">
                  <Briefcase className="h-3 w-3" />
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-violet-400 uppercase tracking-wide bg-violet-500/10 px-2 py-0.5 rounded-md border border-violet-500/20">
                      March 2022 - July 2023
                    </span>
                    <span className="text-xs text-zinc-500 flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> Gurugram, Haryana, India (Remote)
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Senior Software Development Engineer</h3>
                    <h4 className="text-sm font-semibold text-zinc-300">Housing.com</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-start gap-2.5">
                      <span className="text-base shrink-0 select-none">⬆️</span>
                      <span>Upgraded the <strong className="text-zinc-200">React Native version from 0.63.4 to 0.69.4</strong> for the Housing app and resolved technical debt by updating outdated blocking libraries.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-base shrink-0 select-none">⚙️</span>
                      <span>Created <strong className="text-zinc-200">generic, reusable components</strong> to reduce code duplication and decrease render time by 20%.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-base shrink-0 select-none">🖥️</span>
                      <span>Implemented <strong className="text-zinc-200">server-driven UI elements</strong> to minimize the risk of deployment issues affecting 100% of the active user base.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Item 5: Senior Solution Engineer at Deqode Solution */}
              <div className="relative">
                {/* Vertical connector line */}
                <div className="absolute -left-[34px] top-3 w-0.5 bg-zinc-800/80 bottom-[-62px]" />
                {/* Bullet */}
                <div className="absolute -left-[45px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-emerald-500 bg-zinc-950 text-emerald-400 shadow-md">
                  <Briefcase className="h-3 w-3" />
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                      October 2020 - March 2022
                    </span>
                    <span className="text-xs text-zinc-500 flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> Indore, Madhya Pradesh, India
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Senior Solution Engineer</h3>
                    <h4 className="text-sm font-semibold text-zinc-300">Deqode Solution</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-start gap-2.5">
                      <span className="text-base shrink-0 select-none">🤝</span>
                      <span>Coordinated directly with clients to analyze feature requirements and accurately plan deliverables during <strong className="text-zinc-200">Agile sprint cycles</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-base shrink-0 select-none">📤</span>
                      <span>Crafted a custom <strong className="text-zinc-200">iOS share image extension</strong> simplifying post creation from the native gallery, driving a <strong className="text-zinc-200">30% increase</strong> in overall post creation.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-base shrink-0 select-none">🤖</span>
                      <span>Developed and delivered a proof-of-concept Distributed Delivery app from scratch using React Native to demonstrate <strong className="text-zinc-200">Fetch.ai technology</strong>, earning inclusion in the official Fetch.ai portfolio.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Item 6: Software Engineer at Newput Infotech */}
              <div className="relative">
                {/* Bullet */}
                <div className="absolute -left-[45px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-amber-500 bg-zinc-950 text-amber-400 shadow-md">
                  <Briefcase className="h-3 w-3" />
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                      August 2018 - October 2020
                    </span>
                    <span className="text-xs text-zinc-500 flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> Indore, Madhya Pradesh, India
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Software Engineer</h3>
                    <h4 className="text-sm font-semibold text-zinc-300">Newput Infotech Pvt Ltd.</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-start gap-2.5">
                      <span className="text-base shrink-0 select-none">📱</span>
                      <span>Collaborated on the <strong className="text-zinc-200">Activity Hero iOS app</strong>, successfully launching on schedule with <strong className="text-zinc-200">full web feature parity</strong>, resulting in direct client appreciation.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-base shrink-0 select-none">⚡</span>
                      <span>Engineered the <strong className="text-zinc-200">HydroOttawa utility app</strong> using React Native from inception to Google Play Store deployment, incorporating server-driven features.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </section>

        {/* PORTFOLIO / PROJECTS SECTION */}
        <section id="projects" className="mx-auto max-w-6xl px-6 py-20 relative z-10 border-t border-zinc-900">
          <ScrollReveal className="space-y-16">
            <div className="space-y-4 text-center">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-400">My Work</h2>
              <p className="text-3xl font-bold text-white sm:text-4xl tracking-tight">Featured Projects</p>
              <p className="mx-auto max-w-xl text-zinc-400 text-sm sm:text-base">
                A selection of high-profile commercial and R&D projects engineered, optimized, and delivered.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  id: "juniper",
                  title: "Juniper Square",
                  desc: "Worked on major projects introducing foundational pillars to the app i.e. Prospects, Offering & Entity. Resolved pre-existing production bugs and integrated sleek, performant animations.",
                  tags: ["React Native", "UI Animation", "Architecture", "System Debugging"],
                  appStore: "https://apps.apple.com/in/app/juniper-square/id6739386645",
                  website: "https://www.junipersquare.com/",
                  featured: true,
                  screenshotsCount: 3,
                },
                {
                  id: "washmen",
                  title: "Washmen App",
                  desc: "Worked on the Washmen user-facing app to resolve navigation related issues related to modals throughout the app. Designed and revamped the new UI, achieving successful on-time delivery with zero bugs.",
                  tags: ["React Native", "UI Revamp", "Modal Navigation Flow", "App Store Release"],
                  playStore: "https://play.google.com/store/apps/details?id=com.getwashmen.app&referrer=adjust_reftag%3DchR55LdLNbBKw%26utm_source%3DLanding%2BPage%2B-%2BGoogle%2BAds",
                  appStore: "https://apps.apple.com/in/app/washmen-the-finery/id1037965236",
                  website: "https://www.washmen.com/",
                  screenshotsCount: 4,
                },
                {
                  id: "housing",
                  title: "Housing App",
                  desc: "Architected seamless React Native to native code integration across Android and iOS platforms, improving app performance by 20%.",
                  tags: ["React Native", "Native Modules", "iOS", "Android", "Performance Tuning"],
                  playStore: "https://play.google.com/store/apps/details?id=com.locon.housing&hl=en_IN",
                  appStore: "https://apps.apple.com/in/app/housing-buy-rent-sell-pay/id967257660",
                  website: "https://housing.com/",
                  screenshotsCount: 4,
                },
                {
                  id: "tinyview",
                  title: "Tiny View Comic Reader App",
                  desc: "Developed a comic reader platform from scratch in React Native, supporting tiny devices, in-app purchases, offline caching, and deep-link integration.",
                  tags: ["React Native", "Offline Caching", "In-App Purchases", "Deep Linking"],
                  playStore: "https://play.google.com/store/apps/details?id=com.newput.tinyview&hl=en_IN",
                  appStore: "https://apps.apple.com/in/app/tinyview-comics/id1478702420",
                  website: "https://tinyview.com/",
                  screenshotsCount: 4,
                },
                {
                  id: "gaggleamp",
                  title: "Gaggle-Amp Social Advisory App",
                  desc: "Developed a social advocacy app enabling companies to leverage employees for social media marketing activities.",
                  tags: ["React Native", "Social Media APIs", "Gamification", "Push Notifications"],
                  playStore: "https://play.google.com/store/apps/details?id=com.gaggleamp.engage.mobile.enterprise.production&hl=en_IN",
                  appStore: "https://apps.apple.com/in/app/gaggleamp-social-advocacy/id1454530096",
                  website: "https://www.gaggleamp.com/",
                  screenshotsCount: 4,
                },
                {
                  id: "wevideo",
                  title: "WeVideo Video Editing App",
                  desc: "Developed a cloud-based video editor with features for creating and editing videos, custom animations, and Adobe After Effects motion titles via the Squall library.",
                  tags: ["React Native", "Video Processing", "Squall / Adobe AE", "Animations"],
                  playStore: "https://play.google.com/store/apps/details?id=com.wevideo.mobile.android&hl=en_IN",
                  appStore: "https://apps.apple.com/in/app/wevideo-video-editor-maker/id615796920",
                  website: "https://www.wevideo.com/",
                  screenshotsCount: 4,
                },
                {
                  id: "fetch",
                  title: "Fetch.AI Distributed Delivery App (DDN)",
                  desc: "Developed and delivered a proof-of-concept Distributed Delivery app from scratch using React Native to demonstrate the applicability of Fetch.ai technology, achieving a 100% success rate and earning inclusion in the Fetch.ai portfolio.",
                  tags: ["React Native", "Distributed Ledger", "Fetch.ai Agents", "PoC R&D"],
                  youtubeDemo: "https://www.youtube.com/watch?v=heU7KT8JS3I",
                  website: "https://www.fetch.ai/",
                  screenshotsCount: 3,
                }
              ].map((proj) => (
                <div
                  key={proj.id}
                  className="glow-card relative flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 hover:bg-zinc-900/60 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="space-y-6">
                    {/* Top: Logo & Title Info */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={`/projects/${proj.id}_logo.png`}
                          alt={`${proj.title} Logo`}
                          className="h-12 w-12 rounded-2xl border border-zinc-800 bg-zinc-950 object-cover shrink-0 shadow-inner"
                          loading="lazy"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-white leading-tight">{proj.title}</h3>
                          <div className="flex items-center gap-1 mt-0.5 text-zinc-500 text-[10px] uppercase font-bold tracking-wider">
                            <Smartphone className="h-3.5 w-3.5" />
                            <span>Mobile Project</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {proj.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="rounded-full bg-zinc-950 border border-zinc-850 px-3 py-1 text-xs text-zinc-400 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Middle: Description */}
                    <p className="text-sm text-zinc-400 leading-relaxed max-w-4xl">{proj.desc}</p>

                    {/* Media Container: YouTube Embed Player or Screenshots Slider */}
                    {proj.youtubeDemo ? (
                      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-800 shadow-lg bg-zinc-950/40">
                        <iframe
                          src={`https://www.youtube.com/embed/${proj.youtubeDemo.split("v=")[1]?.split("&")[0]}`}
                          title={`${proj.title} Demo Video`}
                          className="absolute inset-0 w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      /* Compact Width Slider / Carousel */
                      <div className="relative group/carousel w-full overflow-hidden rounded-xl bg-zinc-950/40 p-4 select-none">
                        {/* Image Track */}
                        <div 
                          className="flex gap-3 transition-transform duration-500 ease-out"
                          style={{
                            transform: `translateX(-${(activeScreenIndex[proj.id] || 0) * 122}px)`
                          }}
                        >
                          {Array.from({ length: proj.screenshotsCount || 5 }).map((_, idx) => (
                            <div 
                              key={idx} 
                              onClick={() => setActiveModalImage(`/projects/${proj.id}_screenshot_${idx}.png`)}
                              className="w-[110px] aspect-[9/16] rounded-lg border border-zinc-800 overflow-hidden shrink-0 shadow-md bg-zinc-900 group-hover/carousel:border-zinc-700 hover:border-indigo-500/80 transition-all hover:scale-[1.03] cursor-zoom-in active:scale-95"
                            >
                              <img
                                src={`/projects/${proj.id}_screenshot_${idx}.png`}
                                alt={`${proj.title} Screenshot ${idx + 1}`}
                                className="w-full h-full object-cover object-top"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>

                        {/* Faded Left Button Overlay */}
                        <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-zinc-950/90 via-zinc-950/40 to-transparent z-20 flex items-center justify-start pl-1 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <button
                            onClick={() => {
                              const current = activeScreenIndex[proj.id] || 0;
                              if (current > 0) {
                                setActiveScreenIndex(prev => ({ ...prev, [proj.id]: current - 1 }));
                              }
                            }}
                            disabled={(activeScreenIndex[proj.id] || 0) === 0}
                            className="h-7 w-7 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-850 text-white flex items-center justify-center transition-all disabled:opacity-30 disabled:pointer-events-none shadow-md pointer-events-auto"
                            aria-label="Previous screenshot"
                          >
                            <ChevronLeft className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        {/* Faded Right Button Overlay */}
                        <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-zinc-950/90 via-zinc-950/40 to-transparent z-20 flex items-center justify-end pr-1 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <button
                            onClick={() => {
                              const total = proj.screenshotsCount || 5;
                              const current = activeScreenIndex[proj.id] || 0;
                              if (current < total - 1) {
                                setActiveScreenIndex(prev => ({ ...prev, [proj.id]: current + 1 }));
                              }
                            }}
                            disabled={(activeScreenIndex[proj.id] || 0) >= (proj.screenshotsCount || 5) - 1}
                            className="h-7 w-7 rounded-full bg-zinc-900/90 hover:bg-zinc-850 border border-zinc-850 text-white flex items-center justify-center transition-all disabled:opacity-30 disabled:pointer-events-none shadow-md pointer-events-auto"
                            aria-label="Next screenshot"
                          >
                            <ChevronRight className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer buttons with custom App Store / Play Store / Website links */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 mt-4">
                    {proj.website && (
                      <a
                        href={proj.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 hover:border-indigo-500/30 px-4 py-2.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-all flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4 shrink-0" />
                        Visit Website
                      </a>
                    )}
                    {proj.playStore && (
                      <a
                        href={proj.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 px-4 py-2.5 text-xs font-semibold text-zinc-200 hover:text-white transition-all flex items-center gap-2"
                      >
                        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current" fill="currentColor">
                          <path d="M5 3.5a1.206 1.206 0 00-.087.4L12.5 12 4.913 20.1a1.206 1.206 0 00.087.4 1.436 1.436 0 001.077-.123l12.8-7.3a1.493 1.493 0 000-2.154l-12.8-7.3A1.436 1.436 0 005 3.5z" />
                        </svg>
                        Google Play
                      </a>
                    )}
                    {proj.appStore && (
                      <a
                        href={proj.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 px-4 py-2.5 text-xs font-semibold text-zinc-200 hover:text-white transition-all flex items-center gap-2"
                      >
                        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.49-.62.71-1.16 1.85-1.01 2.97 1.11.09 2.23-.59 2.94-1.4" />
                        </svg>
                        App Store
                      </a>
                    )}
                    {proj.youtubeDemo && (
                      <a
                        href={proj.youtubeDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 hover:border-rose-500/30 px-4 py-2.5 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-all flex items-center gap-2"
                      >
                        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current text-rose-500" fill="currentColor">
                          <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.108C19.524 3.545 12 3.545 12 3.545s-7.525 0-9.388.51A3.003 3.003 0 00.502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 002.11 2.108c1.863.51 9.388.51 9.388.51s7.524 0 9.388-.51a3.003 3.003 0 002.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        Watch Video Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* ACADEMICS SECTION */}
        <section id="education" className="mx-auto max-w-6xl px-6 py-20 relative z-10 border-t border-zinc-900">
          <ScrollReveal className="space-y-16">
            <div className="space-y-4 text-center">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Academic Background</h2>
              <p className="text-3xl font-bold text-white sm:text-4xl tracking-tight">Education</p>
              <p className="mx-auto max-w-xl text-zinc-400 text-sm sm:text-base">
                Degrees and scholastic accomplishments that built my core engineering logic.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  year: "2014 - 2018",
                  title: "B.E. [Computer Science]",
                  inst: "RGPV, Bhopal",
                  grade: "7.43 CGPA",
                  badge: "Bachelor of Engineering",
                },
                {
                  year: "2014",
                  title: "12th Standard",
                  inst: "Mahavir Bal Mandir, Indore",
                  grade: "86.7%",
                  badge: "High School Certification",
                },
                {
                  year: "2012",
                  title: "10th Standard",
                  inst: "Adarsh Shishu Vihar, Indore",
                  grade: "67.0%",
                  badge: "Secondary Education",
                },
              ].map((edu, idx) => (
                <div
                  key={idx}
                  className="glow-card relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                      {edu.year}
                    </span>
                    <GraduationCap className="h-5 w-5 text-zinc-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{edu.title}</h3>
                  <p className="text-sm text-zinc-400 mb-4">{edu.inst}</p>
                  <div className="flex items-center gap-2 pt-3 border-t border-zinc-850">
                    <span className="text-xs font-bold text-zinc-500">Grade:</span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* APPRECIATION & REWARDS SECTION */}
        <section id="awards" className="mx-auto max-w-6xl px-6 py-20 relative z-10 border-t border-zinc-900">
          <ScrollReveal className="space-y-16">
            <div className="space-y-4 text-center">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Accomplishments</h2>
              <p className="text-3xl font-bold text-white sm:text-4xl tracking-tight">Appreciation & Rewards</p>
              <p className="mx-auto max-w-xl text-zinc-400 text-sm sm:text-base">
                Recognitions earned for exceptional delivery, leadership, and performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "People Manager Champion",
                  desc: "Awarded People Manager Engagement Champion recognition based on Housing MIC count survey results.",
                  source: "Housing.com",
                },
                {
                  title: "Spotlight Appreciation",
                  desc: "Received spotlight appreciation for integrating the seller's React Native and Android native code successfully.",
                  source: "Housing.com",
                },
                {
                  title: "Team Leadership Trust",
                  desc: "Given responsibility for managing the Seller Pod's app team due to outstanding performance.",
                  source: "Housing.com",
                },
                {
                  title: "Client Commendation",
                  desc: "Commended by the client for delivering the complex mobile application within tight deadlines.",
                  source: "Newput Infotech / Client",
                },
                {
                  title: "Scholastic Reward",
                  desc: "Awarded 25,000 INR for achieving an outstanding 86.7% score in 12th Standard boards.",
                  source: "Academic Excellence",
                },
                {
                  title: "Creative Runner-up",
                  desc: "Placed second runner-up in a branch video-making competition at College, demonstrating design and media editing skills.",
                  source: "College Branch Event",
                },
              ].map((award, idx) => (
                <div
                  key={idx}
                  className="glow-card relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 hover:bg-zinc-900/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      <Award className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-white text-sm sm:text-base">{award.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">{award.desc}</p>
                  <div className="text-[11px] font-bold text-zinc-500 uppercase tracking-wide">
                    Issued by: <span className="text-zinc-400">{award.source}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="mx-auto max-w-6xl px-6 py-20 relative z-10 border-t border-zinc-900">
          <ScrollReveal className="space-y-16">
            <div className="space-y-4 text-center">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Collaboration</h2>
              <p className="text-3xl font-bold text-white sm:text-4xl tracking-tight">Get In Touch</p>
              <p className="mx-auto max-w-xl text-zinc-400 text-sm sm:text-base">
                Feel free to reach out directly via below ways.
              </p>
            </div>

            <div className="flex justify-center">
              {/* Contact Info Card */}
              <div className="max-w-2xl w-full space-y-6">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 space-y-6">
                  <h3 className="text-lg font-bold text-white">Contact Information</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Feel free to reach out directly via below ways. I am always happy to discuss new opportunities or exchange notes on mobile technology.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href="mailto:rs.singh1812@gmail.com"
                      className="flex items-center gap-4 text-zinc-400 hover:text-indigo-400 transition-colors group"
                    >
                      <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-indigo-500/40 transition-colors">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs text-zinc-500 font-semibold">Email</div>
                        <div className="text-sm font-semibold">rs.singh1812@gmail.com</div>
                      </div>
                    </a>
                    
                    <a
                      href="tel:+918602670480"
                      className="flex items-center gap-4 text-zinc-400 hover:text-indigo-400 transition-colors group"
                    >
                      <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-indigo-500/40 transition-colors">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs text-zinc-500 font-semibold">Phone</div>
                        <div className="text-sm font-semibold">+91 86026 70480</div>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 text-zinc-400 sm:col-span-2">
                      <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs text-zinc-500 font-semibold">Location</div>
                        <div className="text-sm font-semibold">Indore, Madhya Pradesh, India</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-850 flex flex-wrap items-center gap-4 justify-center sm:justify-start">
                    <a
                      href="https://linkedin.com/in/rahulsolanki1818"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all flex items-center gap-2"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="text-sm font-semibold pr-1">Connect on LinkedIn</span>
                    </a>

                    <a
                      href="https://x.com/rahulsolanki181"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all flex items-center gap-2"
                      aria-label="Twitter / X"
                    >
                      <TwitterX className="h-5 w-5" />
                      <span className="text-sm font-semibold pr-1">Twitter / X</span>
                    </a>

                    <a
                      href="https://wa.me/918602670480"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all flex items-center gap-2"
                      aria-label="WhatsApp"
                    >
                      <WhatsApp className="h-5 w-5" />
                      <span className="text-sm font-semibold pr-1">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-10 z-10 text-center">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 font-bold text-white text-sm">
              RS
            </span>
            <span className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Rahul Singh Solanki. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/rahulsolanki1818"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:rs.singh1812@gmail.com"
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              rs.singh1812@gmail.com
            </a>
          </div>
        </div>
      </footer>

      {/* Lightbox / Screenshot Modal Overlay */}
      {activeModalImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300 animate-in fade-in"
          onClick={() => setActiveModalImage(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveModalImage(null)}
            className="absolute top-4 right-4 h-11 w-11 rounded-full bg-zinc-900/90 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-all z-55 shadow-xl hover:scale-105"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
          
          {/* Image Wrapper */}
          <div 
            className="relative max-w-full max-h-[85vh] aspect-[9/16] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950/50 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeModalImage}
              alt="Screenshot Large View"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
