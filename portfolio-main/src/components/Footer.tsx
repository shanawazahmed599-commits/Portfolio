import { Github, Linkedin, Mail, BookOpen, BarChart3, Database, Code2 } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/shanawazahmed599', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/shanawazahmed599-commits', label: 'GitHub' },
  { icon: BookOpen, href: 'https://medium.com/@dineshbarri', label: 'Medium' },
  { icon: BarChart3, href: 'https://www.kaggle.com/dinuuu', label: 'Kaggle' },
  { icon: Database, href: 'https://public.tableau.com/app/profile/dinesh.barri8170/vizzes', label: 'Tableau Public' },
  { icon: BarChart3, href: 'https://my.novypro.com/dinesh-barri', label: 'Power BI' },
  { icon: Code2, href: 'https://codeforces.com/profile/dinesh_barri', label: 'Codeforces' },
  { icon: Mail, href: 'mailto:shanawazahmed599@gmail.com', label: 'Email' },
];

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-secondary/20">
      <div className="section-container">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <a href="#" className="font-display text-2xl font-bold mb-6">
            <span className="gradient-text">Mohammad Shanawaz Ahmed</span>
          </a>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {socialLinks.map((link) => {
              const isClickable = ['LinkedIn', 'GitHub', 'Email'].includes(link.label);
              if (isClickable) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    title={link.label}
                  >
                    <link.icon size={18} />
                  </a>
                );
              }
              return (
                <div
                  key={link.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/30 text-muted-foreground/50 cursor-default"
                  title={`${link.label} (Showcase)`}
                >
                  <link.icon size={18} />
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
            <a href="#education" className="text-muted-foreground hover:text-primary transition-colors">Education</a>
            <a href="#certifications" className="text-muted-foreground hover:text-primary transition-colors">Certifications</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Mohammad Shanawaz Ahmed. All rights reserved.</p>
            <p className="mt-1">Data Analyst | Data Scientist | AI Agent Developer</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
