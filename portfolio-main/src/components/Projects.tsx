import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const categories = [
  '🎯 All Projects',
  '🌐 Web Development',
  '🤖 AI & Automation',
  '📊 PowerBI',
  '📈 Tableau',
  '🧠 ML & Data Science',
  '💾 SQL',
];

const projects = [
  {
    title: 'Olympic Data Analytics Dashboard',
    description: 'Interactive Power BI dashboard visualizing 120 years of Olympic history (1896–2016). Comprehensive analysis of medal distributions, athlete performance, and global trends.',
    tags: ['Power BI', 'Data Visualization', 'Data Analysis', 'Olympics'],
    categories: ['📊 PowerBI'],
    github: 'https://github.com/dineshbarri/Olympic-Data-Analytics-Dashboard-1896-2016-Power-BI-Insights',
    live: 'https://www.novypro.com/project/interactive-olympics-analysis-',
    image: '/project-olympic.png',
  },
  {
    title: 'Ireland Hotel Pricing & Ratings Analysis',
    description: 'End-to-end analytics pipeline transforming raw hotel listings into actionable insights, revealing the relationship between price, ratings, and location across Ireland.',
    tags: ['Python', 'SQL', 'Data Engineering', 'Netlify'],
    categories: ['📊 PowerBI', '🧠 ML & Data Science', '💾 SQL'],
    github: 'https://github.com/dineshbarri/ireland-hotel-pricing-ratings-analysis',
    live: 'https://www.novypro.com/project/ireland-hotel-intelligence-dashboard',
    image: '/project-hotel.png',
  },
  {
    title: 'AI Video Factory - Veo3 Automation',
    description: 'Automated video creation system powered by Google Veo3 and n8n — generate, store, and publish AI-generated videos with captions, Drive uploads, and YouTube automation.',
    tags: ['AI', 'Automation', 'Google Gemini', 'n8n', 'YouTube'],
    categories: ['🤖 AI & Automation'],
    github: 'https://github.com/dineshbarri/AI-Video-Factory-Veo3-Automation-Pipeline',
    image: '/project-ai-video.png',
  },
  {
    title: 'Plemdo AI Enterprise Analytics',
    description: 'From WhatsApp message to boardroom report in 60 seconds. AI-powered analytics that transforms conversations into consultant-grade intelligence.',
    tags: ['AI', 'WhatsApp API', 'n8n', 'Data Analysis'],
    categories: ['🤖 AI & Automation'],
    github: 'https://github.com/dineshbarri/Plemdo-AI-Enterprise-Analytics',
    image: '/project-plemdo.png',
  },
  {
    title: 'Neural Digit Recognizer',
    description: 'Interactive web app built with Flask and PyTorch that recognizes handwritten digits using a Convolutional Neural Network (CNN). Includes Docker deployment.',
    tags: ['PyTorch', 'Flask', 'Deep Learning', 'Docker', 'CNN'],
    categories: ['🌐 Web Development', '🧠 ML & Data Science'],
    github: 'https://github.com/dineshbarri/Neural_Digit_Recognizer',
    live: 'https://neural-digit-recognizer-t47d.onrender.com/',
    image: '/project-neural.png',
  },
  {
    title: 'Harry Potter Data Analytics',
    description: 'Interactive Tableau dashboard uncovering fascinating insights from Harry Potter book sales, awards, and release trends across the wizarding universe.',
    tags: ['Tableau', 'Data Visualization', 'EDA'],
    categories: ['📈 Tableau'],
    github: 'https://github.com/dineshbarri/Wizarding-Analytics-Harry-Potter-Through-Data-',
    live: 'https://public.tableau.com/app/profile/dinesh.barri8170/viz/TheWizardingWorldUnveiledAHarryPotterDataJourney/Dashboard1',
    image: '/project-hp.png',
  },
  {
    title: 'Titanic Survivors Dashboard',
    description: 'Visualization uncovering survival patterns based on gender, age, class, and fare. Interactive Tableau dashboard with comprehensive analysis.',
    tags: ['Tableau', 'Data Visualization', 'Analytics'],
    categories: ['📈 Tableau'],
    github: 'https://github.com/dineshbarri/Titanic-Survivors-Analysis-Dashboard',
    live: 'https://public.tableau.com/app/profile/dinesh.barri8170/viz/TitanicSurvivorsAnalysisDashboard/TitanicPassengersOverview',
    image: '/project-titanic.png',
  },
  {
    title: 'Netflix SQL Analysis',
    description: 'End-to-end SQL analytics project powered by MySQL — uncovering global streaming trends, ratings, and regional insights from Netflix data.',
    tags: ['MySQL', 'SQL', 'Data Analysis'],
    categories: ['💾 SQL'],
    github: 'https://github.com/dineshbarri/Netflix_Sql_Analysis',
    image: '/project-netflix.png',
  },
  {
    title: 'COVID-19 Ireland Dashboard',
    description: 'Data-driven app visualizing Ireland\'s COVID-19 trends using open-source datasets. Interactive charts and real-time filtering.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Data Visualization'],
    categories: ['🌐 Web Development'],
    github: 'https://github.com/dineshbarri/covid19-ireland-dashboard',
    live: 'https://dineshbarri-ireland-covid19-analysis.netlify.app/',
    image: '/project-covid.png',
  },
  {
    title: 'Retail Pulse Dashboard',
    description: 'Comprehensive analytics platform empowering business leaders to explore sales, profit, and order trends across categories, time, and regions. Built with Tableau for actionable insights.',
    tags: ['Tableau', 'Data Visualization', 'Business Intelligence', 'Analytics'],
    categories: ['📈 Tableau'],
    github: 'https://github.com/dineshbarri/Retail_Pulse-Dashboard',
    live: 'https://public.tableau.com/app/profile/dinesh.barri8170/viz/RetailPulseDashboard/RetailAnalysisDashboarding',
    image: '/project-retail-pulse.png',
  },
  {
    title: 'Ireland Hotel Analytics Website',
    description: 'Interactive analytics dashboard analyzing Irish hospitality market with real-time data visualization. Features interactive maps, price vs quality analysis, advanced filtering, and mobile-responsive design showcasing modern web development excellence.',
    tags: ['JavaScript', 'HTML', 'CSS', 'ECharts', 'Leaflet', 'Data Visualization'],
    categories: ['🌐 Web Development'],
    github: 'https://github.com/dineshbarri/Ireland-Hotel-Analytics-Website',
    live: 'https://ireland-hotels-dineshbarri.netlify.app/',
    image: '/project-ireland-hotel-web.png',
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState('🎯 All Projects');
  const [rotate, setRotate] = useState<{ [key: string]: { x: number; y: number } }>({});

  const handleMouseMove = (title: string, e: React.MouseEvent) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    const rotateX = -(mouseY / height) * 10;
    const rotateY = (mouseX / width) * 10;

    setRotate(prev => ({
      ...prev,
      [title]: { x: rotateX, y: rotateY }
    }));
  };

  const handleMouseLeave = (title: string) => {
    setRotate(prev => ({
      ...prev,
      [title]: { x: 0, y: 0 }
    }));
  };

  const filteredProjects = projects.filter(project =>
    activeCategory === '🎯 All Projects' || project.categories.includes(activeCategory)
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work in data analytics, machine learning, and AI automation
          </p>
        </motion.div>

        {/* Category Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false); // Reset show all when changing category
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105'
                : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => {
            const tilt = rotate[project.title] || { x: 0, y: 0 };
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseMove={(e) => handleMouseMove(project.title, e)}
                onMouseLeave={() => handleMouseLeave(project.title)}
                style={{
                  transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transition: 'transform 0.15s ease-out, border-color 0.3s ease, box-shadow 0.3s ease',
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 8px 32px 0 rgba(15, 23, 42, 0.3)'
                }}
                className="flex flex-col bg-slate-950/40 backdrop-blur-sm rounded-2xl border border-slate-800/80 hover:border-primary/40 transition-all duration-300 overflow-hidden group min-h-[500px] cursor-pointer"
              >
                <div className="relative w-full aspect-[4/2.2] bg-secondary overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                </div>
                <div className="flex flex-col flex-1 px-6 pt-6 pb-7" style={{ transform: 'translateZ(10px)' }}>
                  <h3 className="font-display font-bold text-xl lg:text-2xl mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-normal line-clamp-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-16"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
              <ChevronRight size={18} className={`transition-transform ${showAll ? 'rotate-90' : ''}`} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
