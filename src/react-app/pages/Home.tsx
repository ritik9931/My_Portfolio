import { useEffect, useState, useRef } from "react";
import { 
  Mail, Phone, MapPin, Linkedin, Github, ExternalLink, 
  ChevronDown, Briefcase, Code2, GraduationCap, Award, 
  Terminal, Database, Globe, Server
} from "lucide-react";
import { 
  personalInfo, summary, experience, projects, 
  skills, education, certifications, languages 
} from "@/data/portfolio";

// Intersection Observer Hook for scroll animations
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

// Animated Section wrapper
function AnimatedSection({ 
  children, 
  className = "",
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) {
  const { ref, isInView } = useInView();
  
  return (
    <div 
      ref={ref}
      className={`${className} transition-all duration-700 ${
        isInView 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold gradient-text">RK</a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full animate-spin" style={{ animationDuration: "30s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/5 rounded-full animate-spin" style={{ animationDuration: "45s", animationDirection: "reverse" }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,165,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,165,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary">Available for opportunities</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up stagger-1">
          <span className="text-foreground">Hi, I'm </span>
          <span className="gradient-text">{personalInfo.name}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up stagger-2">
          {personalInfo.title}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up stagger-3">
          <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span className="text-sm">{personalInfo.phone}</span>
          </a>
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            <span className="text-sm">{personalInfo.email}</span>
          </a>
          <span className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{personalInfo.location}</span>
          </span>
        </div>

        <div className="flex items-center justify-center gap-4 animate-slide-up stagger-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
          >
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
          >
            Get in Touch
          </a>
        </div>

        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <Terminal className="w-8 h-8 text-primary" />
            <span>About Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mb-8" />
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed pl-8">
              {summary}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// Experience Section
function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-primary" />
            <span>Work Experience</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mb-12" />
        </AnimatedSection>

        {experience.map((job, index) => (
          <AnimatedSection key={index} delay={100}>
            <div className="relative pl-8 border-l-2 border-primary/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary animate-pulse" />
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                <p className="text-primary font-medium">{job.company}</p>
                <p className="text-sm text-muted-foreground">{job.period}</p>
              </div>
              <ul className="mt-4 space-y-3">
                {job.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-2 flex-shrink-0">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

// Projects Section
function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <Code2 className="w-8 h-8 text-primary" />
            <span>Featured Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mb-12" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Production" 
                      ? "bg-green-500/10 text-green-400 border border-green-500/30"
                      : "bg-blue-500/10 text-blue-400 border border-blue-500/30"
                  }`}>
                    {project.status}
                  </span>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary" />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-primary mb-3">{project.company}</p>
                <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                {project.features && (
                  <p className="text-muted-foreground text-sm mb-4 opacity-80">{project.features}</p>
                )}
                
                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-secondary text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// Skills Section
function SkillsSection() {
  const skillCategories = [
    { title: "Frontend", icon: Globe, items: skills.frontend },
    { title: "Backend", icon: Server, items: skills.backend },
    { title: "Database", icon: Database, items: skills.database },
    { title: "Languages", icon: Code2, items: skills.languages },
    { title: "Tools & Practices", icon: Terminal, items: skills.tools },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <Terminal className="w-8 h-8 text-primary" />
            <span>Technical Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mb-12" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary/50 text-muted-foreground border border-border hover:border-primary/30 hover:text-foreground transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// Education & Certifications Section
function EducationSection() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-primary" />
                <span>Education</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mb-8" />
            </AnimatedSection>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="relative pl-6 border-l-2 border-primary/30 py-2">
                    <div className="absolute -left-[5px] top-3 w-2 h-2 rounded-full bg-primary" />
                    <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-primary">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                    {edu.score && <p className="text-sm text-muted-foreground mt-1">{edu.score}</p>}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                <Award className="w-8 h-8 text-primary" />
                <span>Certifications</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mb-8" />
            </AnimatedSection>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <AnimatedSection key={index} delay={index * 50}>
                  <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-all duration-300 group">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{cert.name}</h4>
                      {cert.issuer && <p className="text-sm text-muted-foreground">{cert.issuer}</p>}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
            <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Feel free to reach out if you'd like to collaborate!
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="flex flex-col items-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-sm text-muted-foreground text-center break-all">{personalInfo.email}</p>
            </a>

            <a 
              href={`tel:${personalInfo.phone}`}
              className="flex flex-col items-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-sm text-muted-foreground">{personalInfo.phone}</p>
            </a>

            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">GitHub</h3>
              <p className="text-sm text-muted-foreground">@ritik9931</p>
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">Languages: {languages.map(l => `${l.name} (${l.level})`).join(" • ")}</p>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              {personalInfo.location}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a 
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

// Main Home Component
export default function Home() {
  useEffect(() => {
    // Load Google Font
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Apply font to body
    document.body.style.fontFamily = "'Space Grotesk', sans-serif";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
