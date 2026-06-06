import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Printer, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-10 px-4 print:bg-white print:text-black print:py-0 print:px-0">
      {/* Action Buttons (Hidden on Print) */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center no-print">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700 text-sm"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all text-sm shadow-lg shadow-primary/20"
        >
          <Printer size={16} />
          Print / Save as PDF
        </button>
      </div>

      {/* Resume Container */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-slate-950 p-10 rounded-2xl shadow-2xl border border-slate-800 print:border-none print:shadow-none print:bg-white print:p-0 print:text-black print:rounded-none"
      >
        {/* Header */}
        <div className="border-b border-slate-800 pb-6 mb-6 print:border-slate-300">
          <div className="text-center md:text-left md:flex justify-between items-end">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white print:text-black">
                Mohammad Shanawaz Ahmed
              </h1>
              <p className="text-primary font-semibold text-lg mt-1 print:text-sky-700">
                Data Scientist & AI Engineer
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col items-center md:items-end gap-1.5 text-sm text-slate-400 print:text-slate-700">
              <span className="flex items-center gap-1.5">
                <Mail size={14} className="text-primary print:text-slate-600" />
                <a href="mailto:shanawazahmed599@gmail.com" className="hover:underline">
                  shanawazahmed599@gmail.com
                </a>
              </span>
              <span className="flex items-center gap-1.5">
                <Linkedin size={14} className="text-primary print:text-slate-600" />
                <a href="https://www.linkedin.com/in/shanawazahmed599" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  linkedin.com/in/shanawazahmed599
                </a>
              </span>
              <span className="flex items-center gap-1.5">
                <Github size={14} className="text-primary print:text-slate-600" />
                <a href="https://github.com/shanawazahmed599-commits" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  github.com/shanawazahmed599-commits
                </a>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-primary print:text-slate-600" />
                <span>India</span>
              </span>
            </div>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="mb-6">
          <h2 className="text-lg font-bold font-display uppercase tracking-wider text-primary mb-2.5 border-b border-slate-900 pb-1 print:text-sky-700 print:border-slate-200">
            Professional Summary
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm text-justify print:text-slate-800">
            Passionate Data Science undergraduate with a strong foundation in Artificial Intelligence, Machine Learning, Data Analytics, and Software Development. Experienced in designing and implementing data-driven systems, custom AI agents, and analytic dashboards. Proficient in Python, database modeling, and machine learning pipelines, with a proven track record of applying automated workflows and predictive analytics to solve complex real-world challenges.
          </p>
        </div>

        {/* Grid Section: Education & Internships */}
        <div className="grid md:grid-cols-12 gap-6 mb-6">
          {/* Experience (Left 7 Columns) */}
          <div className="md:col-span-7">
            <h2 className="text-lg font-bold font-display uppercase tracking-wider text-primary mb-3.5 border-b border-slate-900 pb-1 print:text-sky-700 print:border-slate-200">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {/* CodeAlpha */}
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-sm text-white print:text-black">CodeAlpha</h3>
                  <span className="text-xs text-slate-400 print:text-slate-600">Mar 2026</span>
                </div>
                <p className="text-xs text-primary font-medium print:text-sky-700">Power BI Intern</p>
                <ul className="list-disc pl-4 mt-1.5 text-xs text-slate-300 space-y-1 print:text-slate-800">
                  <li>Developed clean data transformation workflows and custom analytics reports using Microsoft Power BI.</li>
                  <li>Applied DAX calculations to extract business insights and optimize pipeline visualization models.</li>
                </ul>
              </div>

              {/* Prodigy InfoTech */}
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-sm text-white print:text-black">Prodigy InfoTech</h3>
                  <span className="text-xs text-slate-400 print:text-slate-600">Aug 2025 – Sep 2025</span>
                </div>
                <p className="text-xs text-primary font-medium print:text-sky-700">Generative AI Intern</p>
                <ul className="list-disc pl-4 mt-1.5 text-xs text-slate-300 space-y-1 print:text-slate-800">
                  <li>Built responsive AI agents using n8n and designed RAG (Retrieval-Augmented Generation) architectures.</li>
                  <li>Integrated large language models (LLMs) with private knowledge bases to automate business processes.</li>
                </ul>
              </div>

              {/* Cognifyz Technologies ML */}
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-sm text-white print:text-black">Cognifyz Technologies</h3>
                  <span className="text-xs text-slate-400 print:text-slate-600">Aug 2025 – Sep 2025</span>
                </div>
                <p className="text-xs text-primary font-medium print:text-sky-700">Machine Learning Intern</p>
                <ul className="list-disc pl-4 mt-1.5 text-xs text-slate-300 space-y-1 print:text-slate-800">
                  <li>Trained and tuned classification, clustering, and regression models using Scikit-learn and PyTorch.</li>
                  <li>Processed and analyzed raw datasets to evaluate and improve model prediction metrics.</li>
                </ul>
              </div>

              {/* Cognifyz Technologies DA */}
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-sm text-white print:text-black">Cognifyz Technologies</h3>
                  <span className="text-xs text-slate-400 print:text-slate-600">Jun 2025 – Jul 2025</span>
                </div>
                <p className="text-xs text-primary font-medium print:text-sky-700">Data Analysis Intern</p>
                <ul className="list-disc pl-4 mt-1.5 text-xs text-slate-300 space-y-1 print:text-slate-800">
                  <li>Performed exploratory data analysis (EDA) using Python libraries (Pandas, Seaborn, Matplotlib).</li>
                  <li>Identified actionable user trends and built analytics dashboards for cross-team reporting.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Certifications (Right 5 Columns) */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <h2 className="text-lg font-bold font-display uppercase tracking-wider text-primary mb-3.5 border-b border-slate-900 pb-1 print:text-sky-700 print:border-slate-200">
                Education
              </h2>
              <div>
                <h3 className="font-bold text-sm text-white print:text-black">Aditya Degree College</h3>
                <p className="text-xs text-slate-300 print:text-slate-800">Bachelors in Computer Science - Data Science</p>
                <p className="text-xs text-slate-400 mt-1 print:text-slate-600">2024 – 2027 | India</p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold font-display uppercase tracking-wider text-primary mb-3.5 border-b border-slate-900 pb-1 print:text-sky-700 print:border-slate-200">
                Certifications
              </h2>
              <ul className="space-y-3.5 text-xs text-slate-300 print:text-slate-800">
                <li>
                  <strong className="block text-white text-xs print:text-black">Google Advanced Data Analytics</strong>
                  <span className="text-slate-400 print:text-slate-600">Coursera Professional Certificate</span>
                </li>
                <li>
                  <strong className="block text-white text-xs print:text-black">Google Data Analytics</strong>
                  <span className="text-slate-400 print:text-slate-600">Coursera Professional Certificate</span>
                </li>
                <li>
                  <strong className="block text-white text-xs print:text-black">Microsoft Power BI Data Analyst</strong>
                  <span className="text-slate-400 print:text-slate-600">Coursera/Microsoft Certificate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold font-display uppercase tracking-wider text-primary mb-3.5 border-b border-slate-900 pb-1 print:text-sky-700 print:border-slate-200">
            Selected Projects
          </h2>
          <div className="space-y-4">
            {/* Project 1 */}
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-sm text-white print:text-black">AI Video Factory (Veo3 Automation Pipeline)</h3>
                <span className="text-xs text-slate-400 print:text-slate-600">Python, Gemini API, n8n</span>
              </div>
              <p className="text-xs text-slate-300 mt-1 print:text-slate-800">
                Developed an automated content generation system connecting Google Veo3 generation with Gemini text processing. Designed multi-stage n8n workflows that script, render, caption, and automatically publish video assets to target channels.
              </p>
            </div>

            {/* Project 2 */}
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-sm text-white print:text-black">Plemdo AI Enterprise Analytics</h3>
                <span className="text-xs text-slate-400 print:text-slate-600">n8n, LLM RAG, WhatsApp API</span>
              </div>
              <p className="text-xs text-slate-300 mt-1 print:text-slate-800">
                Created an end-to-end pipeline allowing users to feed raw data into n8n over a conversational interface (WhatsApp). The system automatically runs analytics models, summarizes data with LLMs, and returns PDF executive reports.
              </p>
            </div>

            {/* Project 3 */}
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-sm text-white print:text-black">Olympic Data Analytics Dashboard</h3>
                <span className="text-xs text-slate-400 print:text-slate-600">Power BI, SQL, Data Visualization</span>
              </div>
              <p className="text-xs text-slate-300 mt-1 print:text-slate-800">
                Engineered a comprehensive Power BI dashboard analyzing 120 years of historical Olympic data. Designed interactive visuals tracking country rankings, athlete demographics, and performance correlations.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-lg font-bold font-display uppercase tracking-wider text-primary mb-3.5 border-b border-slate-900 pb-1 print:text-sky-700 print:border-slate-200">
            Skills Inventory
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3.5 gap-x-6 text-xs text-slate-300 print:text-slate-800">
            <div>
              <strong className="block text-white font-semibold print:text-black">Programming:</strong>
              Python, SQL, R, Java, C++, JavaScript
            </div>
            <div>
              <strong className="block text-white font-semibold print:text-black">Machine Learning:</strong>
              Supervised/Unsupervised ML, NLP, PyTorch, Scikit-learn
            </div>
            <div>
              <strong className="block text-white font-semibold print:text-black">AI & Automation:</strong>
              n8n Agent Dev, RAG Pipelines, LLM Integrations
            </div>
            <div>
              <strong className="block text-white font-semibold print:text-black">Data Engineering:</strong>
              ETL, Apache Spark, Data Wrangling, APIs, Web Scraping
            </div>
            <div>
              <strong className="block text-white font-semibold print:text-black">Databases & Cloud:</strong>
              MySQL, PostgreSQL, MongoDB, AWS, Google Cloud, Azure
            </div>
            <div>
              <strong className="block text-white font-semibold print:text-black">Data Viz & BI:</strong>
              Power BI, Tableau, Looker Studio, Seaborn, Matplotlib
            </div>
          </div>
        </div>
      </motion.div>

      {/* Print Stylesheet Hook */}
      <style>{`
        @media print {
          body {
            background-color: white !important;
            color: black !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .no-print {
            display: none !important;
          }
          @page {
            size: A4;
            margin: 1.6cm 1.4cm;
          }
        }
      `}</style>
    </div>
  );
}
