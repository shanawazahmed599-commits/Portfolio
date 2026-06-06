import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  name: string;
  url: string;
  authority: string;
  license: string;
  description: string[];
  logo: string;
}

const certificationDescriptions: Record<string, { description: string[], logo: string }> = {
  'Google Advanced Data Analytics Professional Certificate': {
    description: [
      'Advanced statistical analysis and regression modeling',
      'Machine learning fundamentals and model building with Python'
    ],
    logo: '/logos/google.png'
  },
  'Google Data Analytics Professional Certificate': {
    description: [
      'Data cleaning, transformation, and visualization techniques',
      'SQL queries and spreadsheet analysis for business insights'
    ],
    logo: '/logos/google.png'
  },
  'Microsoft Power BI Data Analyst Professional Certificate': {
    description: [
      'Creating interactive dashboards and reports',
      'DAX formulas and data modeling for business analytics'
    ],
    logo: '/logos/microsoft.png'
  },
  'TensorFlow Developer Certificate (DeepLearning.AI)': {
    description: [
      'Building and training neural networks with TensorFlow',
      'Computer vision and natural language processing applications'
    ],
    logo: '/logos/deeplearning.png'
  },
  'AWS Cloud Practitioner Essentials': {
    description: [
      'AWS cloud computing fundamentals and architecture',
      'Core AWS services for storage, compute, and database'
    ],
    logo: '/logos/aws.png'
  },
  'Prepare Data for ML APIs on Google Cloud': {
    description: [
      'Data preprocessing and feature engineering for ML',
      'Using Google Cloud AI APIs for predictions'
    ],
    logo: '/logos/google-cloud.png'
  },
  'Introduction to Generative AI': {
    description: [
      'Fundamentals of generative AI and large language models',
      'AWS AI services and generative AI applications'
    ],
    logo: '/logos/aws.png'
  },
  'Introduction to Relational Databases (RDBMS)': {
    description: [
      'Database design principles and normalization',
      'SQL fundamentals and relational database concepts'
    ],
    logo: '/logos/ibm.png'
  },
  'Python for Data Science, AI & Development': {
    description: [
      'Python programming for data manipulation and analysis',
      'Libraries like Pandas, NumPy, and Matplotlib'
    ],
    logo: '/logos/ibm.png'
  },
  'Gemini for Data Scientists and Analysts': {
    description: [
      'Leveraging Gemini AI for data analysis workflows',
      'AI-powered insights and automation techniques'
    ],
    logo: '/logos/google-cloud.png'
  },
  'Looker Studio Essentials': {
    description: [
      'Building interactive dashboards and data visualizations',
      'Connecting data sources and creating compelling reports'
    ],
    logo: '/logos/google-cloud.png'
  },
  'SQL (Advanced)': {
    description: [
      'Complex query optimization and performance tuning',
      'Advanced joins, subqueries, and window functions'
    ],
    logo: '/logos/hackerrank.png'
  }
};

const priorityOrder = [
  'Google Advanced Data Analytics Professional Certificate',
  'Google Data Analytics Professional Certificate',
  'Microsoft Power BI Data Analyst Professional Certificate',
  'TensorFlow Developer Certificate (DeepLearning.AI)',
  'AWS Cloud Practitioner Essentials',
  'Prepare Data for ML APIs on Google Cloud',
  'Introduction to Generative AI',
  'Introduction to Relational Databases (RDBMS)',
  'Python for Data Science, AI & Development',
  'Gemini for Data Scientists and Analysts',
  'Looker Studio Essentials',
  'SQL (Advanced)'
];

export const Certifications = ({ limit }: { limit?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    fetch('/Certifications.csv')
      .then(response => response.text())
      .then(data => {
        const lines = data.split('\n').slice(1);
        const certs: Certification[] = [];

        lines.forEach(line => {
          if (!line.trim()) return;

          const parts: string[] = [];
          let current = '';
          let inQuotes = false;

          for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (char === '"') {
              inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
              parts.push(current.trim());
              current = '';
            } else {
              current += char;
            }
          }
          parts.push(current.trim());

          const name = parts[0] || '';
          const url = parts[1] || '';
          const authority = parts[2] || '';
          const license = parts[5] || '';

          if (name && certificationDescriptions[name]) {
            certs.push({
              name,
              url,
              authority,
              license,
              description: certificationDescriptions[name].description,
              logo: certificationDescriptions[name].logo
            });
          }
        });

        const orderedCerts = certs.sort((a, b) => {
          const aIndex = priorityOrder.indexOf(a.name);
          const bIndex = priorityOrder.indexOf(b.name);
          if (aIndex === -1 && bIndex === -1) return 0;
          if (aIndex === -1) return 1;
          if (bIndex === -1) return -1;
          return aIndex - bIndex;
        });

        setCertifications(limit ? orderedCerts.slice(0, limit) : orderedCerts);
      })
      .catch(error => console.error('Error loading certifications:', error));
  }, [limit]);



  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized credentials demonstrating expertise across data science, analytics, and cloud technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => {
            const isClickable = [
              'Google Advanced Data Analytics Professional Certificate',
              'Google Data Analytics Professional Certificate',
              'Microsoft Power BI Data Analyst Professional Certificate'
            ].includes(cert.name);

            const cardContent = (
              <>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shrink-0 p-2 border border-border/20 group-hover:border-primary/30 transition-colors">
                    <img
                      src={cert.logo}
                      alt={cert.authority}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `<span class="font-bold text-primary text-lg">${cert.authority.substring(0, 3).toUpperCase()}</span>`;
                      }}
                    />
                  </div>
                  {isClickable && (
                    <ExternalLink size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                  )}
                </div>

                <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {cert.name}
                </h3>

                <p className="text-sm text-primary font-semibold mb-3">
                  {cert.authority}
                </p>

                <ul className="space-y-2 mb-4">
                  {cert.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {cert.license && (
                  <p className="text-xs text-muted-foreground mt-auto pt-4 border-t border-border/50">
                    License: {cert.license}
                  </p>
                )}
              </>
            );

            if (isClickable) {
              return (
                <motion.a
                  key={cert.name}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group cursor-pointer hover:translate-y-[-4px] hover:shadow-lg flex flex-col h-full"
                >
                  {cardContent}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 transition-all duration-300 group cursor-default flex flex-col h-full"
              >
                {cardContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
