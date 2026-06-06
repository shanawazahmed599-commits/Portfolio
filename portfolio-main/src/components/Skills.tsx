import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const skillCategories = [
  {
    title: 'Programming & Analytics',
    level: 95,
    skills: ['Python', 'Java', 'C++', 'C', 'JavaScript', 'TypeScript', 'R', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'SciPy', 'Statsmodels'],
  },
  {
    title: 'AI Agents & Intelligent Automation',
    level: 92,
    skills: ['LLM Integrations', 'n8n Agent Development', 'RAG Pipelines', 'AI Automation', 'Knowledge Base Engineering'],
  },
  {
    title: 'Data Visualization & BI',
    level: 90,
    skills: ['Tableau', 'Power BI', 'Matplotlib', 'Seaborn', 'Plotly', 'Looker Studio', 'Excel Pivot Tables'],
  },
  {
    title: 'Machine Learning & AI',
    level: 88,
    skills: ['Supervised ML', 'Unsupervised ML', 'Regression', 'Classification', 'Clustering', 'NLP', 'Deep Learning', 'PyTorch'],
  },
  {
    title: 'Databases & Cloud',
    level: 85,
    skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'AWS S3', 'AWS EC2', 'Microsoft Azure', 'Google Cloud'],
  },
  {
    title: 'Tools & Platforms',
    level: 88,
    skills: ['Git/GitHub', 'Jupyter', 'VS Code', 'Docker', 'JIRA', 'Confluence', 'Trello', 'MS Visio', 'Lucidchart'],
  },
  {
    title: 'Algorithms & Competitive Programming',
    level: 90,
    skills: ['Dynamic Programming', 'Greedy Algorithms', 'Data Structures', 'Time Complexity', 'Optimization', 'Problem Solving', 'Graph & Tree Algorithms', 'Code Optimization'],
  },
  {
    title: 'Data Engineering & ETL',
    level: 86,
    skills: ['ETL Pipelines', 'Apache Spark', 'Data Wrangling', 'Data Cleaning', 'API Integration', 'Data Pipelines', 'Web Scraping'],
  },
  {
    title: 'Mathematics & Statistics',
    level: 88,
    skills: ['Probability', 'Linear Algebra', 'Calculus', 'Hypothesis Testing', 'A/B Testing', 'Descriptive Statistics', 'Statistical Inference'],
  }
];

const Counter = ({ target, startTrigger }: { target: number; startTrigger: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startTrigger) return;

    let start = 0;
    const end = target;
    const totalSteps = 40;
    const increment = end / totalSteps;
    const delay = 1000 / totalSteps;

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
  }, [target, startTrigger]);

  return <span>{count}</span>;
};

const TiltCard = ({ children, startTrigger, delayIndex }: { children: React.ReactNode; startTrigger: boolean; delayIndex: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    const rotateX = -(mouseY / height) * 12;
    const rotateY = (mouseX / width) * 12;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={startTrigger ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delayIndex * 0.08 }}
      style={{
        transform: `perspective(800px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.15s ease-out, border-color 0.3s ease, box-shadow 0.3s ease',
        transformStyle: 'preserve-3d',
      }}
      className="glass-card p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 cursor-pointer relative group"
    >
      {children}
    </motion.div>
  );
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative bg-secondary/10" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I've worked with in real-world projects and professional environments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <TiltCard
              key={category.title}
              startTrigger={isInView}
              delayIndex={categoryIndex}
            >
              {/* Card Title & Level */}
              <div className="mb-4" style={{ transform: 'translateZ(20px)' }}>
                <div className="flex justify-between items-center mb-1.5">
                  <h3 className="font-display font-semibold text-base text-primary group-hover:text-white transition-colors duration-300">
                    {category.title}
                  </h3>
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-primary transition-colors">
                    <Counter target={category.level} startTrigger={isInView} />%
                  </span>
                </div>
                {/* Level Progress Bar */}
                <div className="w-full h-1 bg-slate-800/80 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={isInView ? { width: `${category.level}%` } : {}}
                    transition={{ duration: 1.2, delay: categoryIndex * 0.08, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-4" style={{ transform: 'translateZ(10px)' }}>
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge hover:scale-105 active:scale-95 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
