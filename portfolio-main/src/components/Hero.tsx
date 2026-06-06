import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { TypeWriter } from './TypeWriter';
import { SiPython, SiPytorch, SiGooglecloud } from 'react-icons/si';
import { TiPower } from 'react-icons/ti';
import heroBg from '@/assets/hero-bg.png';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none"
      />

      <div className="section-container relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Column: Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-primary font-medium mb-4 text-lg">Hi, I am</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Mohammad Shanawaz Ahmed
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl"
          >
            <TypeWriter
              words={[
                'Data Science Student',
                'AI Enthusiast',
                'Machine Learning Developer',
                'Data Analyst',
                'Future AI Engineer'
              ]}
              className="text-primary font-semibold"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground mb-8 max-w-xl leading-relaxed"
          >
            I build intelligent data products—analytics pipelines, machine learning models, and n8n/RAG AI agents. My focus is on clean design, automation, and end-to-end systems that turn data into action. I enjoy breaking complex problems into simple, scalable solutions.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-4 mb-10"
          >
            <a href="https://github.com/shanawazahmed599-commits" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/shanawazahmed599" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={20} />
            </a>
            <a href="mailto:shanawazahmed599@gmail.com" className="social-icon">
              <Mail size={20} />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a href="#projects" className="btn-primary hover:scale-105 active:scale-95 transition-transform duration-300">
              View Projects
              <ArrowDown size={18} className="-rotate-90 animate-pulse" />
            </a>
            <a href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform duration-300"
            >
              Resume
              <Download size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 select-none">
            {/* Rotating colorful gradient glow ring */}
            <div className="absolute inset-[-6px] rounded-[2.5rem] bg-gradient-to-r from-primary via-slate-800 to-accent animate-[spin_8s_linear_infinite] opacity-60 blur-[3px] pointer-events-none" />

            {/* Pulsing glow underlay */}
            <div className="absolute inset-[-10px] rounded-[2.5rem] bg-gradient-to-r from-primary to-accent opacity-20 blur-md animate-pulse-glow pointer-events-none" />

            {/* Image Container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full rounded-[2rem] overflow-hidden border border-primary/20 shadow-2xl bg-slate-950/40 backdrop-blur-sm cursor-pointer group"
            >
              <img
                src="/ahmed.jpg"
                alt="Mohammad Shanawaz Ahmed"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70" />
            </motion.div>

            {/* Floating tech stack badges */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-slate-900 border border-primary/40 flex items-center justify-center shadow-lg text-primary text-xl hover:scale-125 transition-transform"
              title="Python"
            >
              <SiPython />
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0], rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 -left-4 w-10 h-10 rounded-full bg-slate-900 border border-accent/40 flex items-center justify-center shadow-lg text-accent text-lg hover:scale-125 transition-transform"
              title="PyTorch"
            >
              <SiPytorch />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0], rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -right-5 w-10 h-10 rounded-full bg-slate-900 border border-primary/40 flex items-center justify-center shadow-lg text-[#33EBFA] text-lg hover:scale-125 transition-transform"
              title="Power BI"
            >
              <TiPower />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], rotate: -360 }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 -right-4 w-8 h-8 rounded-full bg-slate-900 border border-accent/30 flex items-center justify-center shadow-lg text-slate-300 text-sm hover:scale-125 transition-transform"
              title="Google Cloud"
            >
              <SiGooglecloud />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 right-2 bg-slate-950 border border-primary/30 py-2.5 px-4 rounded-xl shadow-xl backdrop-blur-md"
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-foreground">Open to Work</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
