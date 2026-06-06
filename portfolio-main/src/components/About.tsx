import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Brain, Code2, Trophy, Zap, Users } from 'lucide-react';

const highlights = [
  {
    icon: TrendingUp,
    title: 'Data Analytics',
    description: 'Transforming raw data into actionable insights through EDA, statistical modeling, and visualization.',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Building predictive models, ML pipelines, and deploying intelligent systems.',
  },
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that stands the test of time',
  },
  {
    icon: Trophy,
    title: 'Problem Solver',
    description: 'Breaking down complex problems into scalable, efficient solutions.',
  },
  {
    icon: Zap,
    title: 'AI Agent Developer',
    description: 'Designing and deploying AI agents & automations using n8n and RAG workflows to connect knowledge, LLMs, and business systems for automated decisioning.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively with cross-functional teams to deliver exceptional results',
  },
];

const Counter = ({ target, duration = 1.5 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = target;
    const totalSteps = 40;
    const increment = end / totalSteps;
    const delay = (duration * 1000) / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, delay);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}</span>;
};

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Crafting data-driven solutions & intelligent systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 flex flex-col justify-between h-full"
          >
            <div>
              <h3 className="font-display text-xl font-semibold mb-4 gradient-text">Background</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am a passionate <span className="text-foreground font-medium">Data Science undergraduate</span> with a strong interest in Artificial Intelligence, Machine Learning, Data Analytics, and Software Development. My academic journey has been focused on building practical solutions that combine data-driven insights with modern technology. Through various projects, I have gained hands-on experience in Python programming, data analysis, machine learning, data visualization, and full-stack application development.
                </p>
                <p>
                  I enjoy transforming complex problems into simple, effective, and user-friendly solutions. My work spans across AI-powered applications, analytics dashboards, healthcare systems, career guidance platforms, attendance management systems, and automation tools. These projects have helped me strengthen my skills in data processing, model development, database management, and modern web technologies.
                </p>
                <p>
                  Beyond academics, I actively explore emerging technologies and continuously enhance my technical expertise through self-learning and project-based development. I am particularly interested in leveraging <span className="text-primary font-medium">Artificial Intelligence and Data Science</span> to create impactful solutions that improve decision-making, automate processes, and deliver meaningful value to users.
                </p>
              </div>
            </div>

            {/* Statistics Counters */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-800/60 pt-6 mt-6">
              <div className="text-center">
                <p className="font-display text-2xl sm:text-3xl font-black text-primary">
                  <Counter target={4} />+
                </p>
                <p className="text-xs text-slate-400 font-semibold mt-1">Internships</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl sm:text-3xl font-black text-accent">
                  <Counter target={10} />+
                </p>
                <p className="text-xs text-slate-400 font-semibold mt-1">AI Projects</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl sm:text-3xl font-black text-primary">
                  <Counter target={12} />+
                </p>
                <p className="text-xs text-slate-400 font-semibold mt-1">Certifications</p>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
