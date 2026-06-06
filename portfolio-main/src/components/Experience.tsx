import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const experiences = [
  {
    title: 'Power BI Intern',
    company: 'CodeAlpha',
    image: '/codealpha.png',
    period: 'Mar 2026 - Mar 2026',
    location: 'Remote',
    description:
      'Gained hands-on experience in business intelligence, data modeling, and creating dynamic dashboards to visualize complex business metrics.',
    achievements: [
      'Created interactive, high-impact Power BI dashboards to track key performance indicators (KPIs).',
      'Performed data transformations and modeling using DAX and Power Query.',
      'Delivered actionable insights through data storytelling and structured visualizations.',
    ],
    technologies: [
      'Power BI',
      'Data Visualization',
      'DAX',
      'Power Query',
      'Data Modeling',
      'Business Intelligence',
    ],
  },
  {
    title: 'Generative AI Intern',
    company: 'Prodigy InfoTech',
    image: '/prodigy.png',
    period: 'Aug 2025 - Sep 2025',
    location: 'Remote',
    description:
      'Focused on prompt engineering, building practical generative AI applications, text/image generation workflows, and LLMs integrations.',
    achievements: [
      'Developed generative AI applications, including text and image generation tools, utilizing state-of-the-art APIs.',
      'Built practical workflows that automate tasks and enhance productivity through LLM integrations.',
      'Collaborated with engineering teams to explore model limits, prompt engineering techniques, and creative applications of AI.',
    ],
    technologies: [
      'Generative AI',
      'LLMs',
      'Prompt Engineering',
      'Python',
      'API Integration',
      'Text Generation',
      'Image Generation',
    ],
  },
  {
    title: 'Machine Learning Intern',
    company: 'Cognifyz Technologies',
    image: '/cognifyz.png',
    period: 'Aug 2025 - Sep 2025',
    location: 'Remote',
    description:
      'Focused on dataset preprocessing, feature engineering, and training and evaluating supervised and unsupervised machine learning models to solve real-world problems.',
    achievements: [
      'Preprocessed and cleaned complex datasets for machine learning pipelines.',
      'Trained, optimized, and evaluated machine learning models to improve prediction accuracy.',
      'Collaborated on developing scalable ML workflows and feature engineering pipelines.',
    ],
    technologies: [
      'Machine Learning',
      'Python',
      'Scikit-Learn',
      'Supervised Learning',
      'Feature Engineering',
      'Model Evaluation',
    ],
  },
  {
    title: 'Data Analysis Intern',
    company: 'Cognifyz Technologies',
    image: '/cognifyz.png',
    period: 'Jun 2025 - Jul 2025',
    location: 'Remote',
    description:
      'Focused on data preprocessing, exploratory data analysis, business intelligence, and developing dashboards to drive business decision-making.',
    achievements: [
      'Conducted exploratory data analysis (EDA) on complex datasets to extract key business insights.',
      'Designed and developed interactive data dashboards to support data-driven decision-making.',
      'Preprocessed and cleaned raw data, improving analysis accuracy and reliability.',
    ],
    technologies: [
      'Data Analysis',
      'Python',
      'Pandas',
      'EDA',
      'Data Visualization',
      'Dashboarding',
    ],
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="experience" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From data analytics to automation and ML-driven insights, here’s my experience delivering business value with scalable solutions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute left-[34px] md:left-[46px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/40 to-transparent rounded-full origin-top"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedCards.includes(index);

              return (
                <motion.div
                  key={exp.company + exp.period}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20 md:pl-28"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.2, duration: 0.3 }}
                    className="absolute left-[27px] md:left-[39px] top-0 w-4 h-4 rounded-full bg-background border-[3px] border-primary z-10 shadow-[0_0_12px_rgba(59,235,245,0.5)] animate-pulse"
                  />

                  {/* Horizontal Connector Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
                    className="absolute left-[43px] md:left-[55px] top-6 w-8 md:w-12 h-[2px] bg-gradient-to-r from-primary to-transparent rounded-full opacity-60 origin-left"
                  />

                  <motion.div
                    className={`glass-card overflow-hidden transition-all duration-300 hover:border-primary/40 ${isExpanded ? 'border-primary/40 bg-secondary/40' : ''
                      }`}
                    whileHover={{ scale: 1.005 }}
                    layout
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-start gap-4 md:gap-6 mb-6">
                        {/* Logo Container */}
                        <div className="shrink-0">
                          <div className="w-20 h-16 md:w-24 md:h-18 rounded-xl bg-transparent flex items-center justify-center">
                            {exp.image ? (
                              <img
                                src={exp.image}
                                alt={exp.company}
                                className="w-full h-full object-contain p-0"
                              />
                            ) : null}
                          </div>
                        </div>

                        {/* Title & Company */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display text-lg md:text-xl font-bold text-foreground leading-tight mb-1">
                            {exp.title}
                          </h3>
                          <h4 className="text-base font-semibold text-primary mb-2">
                            {exp.company}
                          </h4>

                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs md:text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              📅 {exp.period}
                            </span>
                            {exp.location && (
                              <span className="flex items-center gap-1.5">
                                🌍 {exp.location}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <button
                        onClick={() => toggleCard(index)}
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                      >
                        {isExpanded ? 'Show Less' : 'Key Achievements & Skills'}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'group-hover:translate-y-0.5'
                            }`}
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 md:px-8 pb-8 pt-0 space-y-6 border-t border-border/50 mt-2">
                            {/* Achievements */}
                            <div className="pt-6">
                              <h5 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                                <span className="text-primary">⚡</span> Key Achievements
                              </h5>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h5 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                                <span className="text-primary">💻</span> Technologies Used
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-foreground border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
