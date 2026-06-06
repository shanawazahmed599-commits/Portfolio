import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelors in Computer Science - Data Science',
    institution: 'Aditya Degree College',
    location: 'India',
    period: '2024 - 2027',
    logo: 'ADC',
    description: 'Focusing on computer science fundamentals, data analytics, machine learning, and application development.',
    learnings: [
      'Data structures and algorithm foundations',
      'Database systems and SQL queries',
      'Machine learning and data science methodologies',
      'Modern software engineering practices'
    ]
  }
];

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and continuous learning
          </p>
        </motion.div>

        <div className="w-full flex flex-col items-center justify-center">
          <div
            className="flex flex-col gap-8 md:flex-row md:gap-8 w-full justify-center items-stretch"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex-1 min-w-[260px] max-w-md bg-slate-950/40 border border-slate-800/80 hover:border-primary/40 rounded-2xl shadow-lg hover:shadow-2xl hover:translate-y-[-4px] px-6 py-8 flex flex-col md:min-h-[410px] mx-auto md:mx-0 backdrop-blur-sm transition-all duration-300"
                style={{ boxShadow: '0 8px 32px 0 rgba(15, 23, 42, 0.3)' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <span className="font-display font-bold text-xl gradient-text">{edu.logo}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg md:text-xl mb-1 text-left group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <GraduationCap size={18} /> <span>{edu.institution}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
                    <Calendar size={14} className="text-primary" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
                    <MapPin size={14} className="text-primary" />
                    <span>{edu.location}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-normal text-balance">
                  {edu.description}
                </p>
                <div className="flex-1 flex flex-col justify-end">
                  <p className="text-sm font-semibold text-foreground mb-1">Key Learnings:</p>
                  <ul className="space-y-2 mb-2">
                    {edu.learnings.map((learning, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
