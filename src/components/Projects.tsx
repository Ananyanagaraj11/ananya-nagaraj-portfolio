import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Custom SVG Icons
const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ChevronLeft = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const projects = [
  {
    title: "🎤 SafeVoice AI - Harassment Detection System",
    description: [
      "Built production RAG system with Whisper + NLP for real-time voice-based harassment detection, serving thousands of users with 85%+ accuracy",
      "Engineered audio-to-text pipeline processing 500+ hours of voice data, implementing emotion classification and toxicity detection using Transformers",
      "Developed React frontend with Flask backend, integrating LangChain for context-aware threat analysis and automated response generation",
      "Implemented vector database for semantic search enabling 60% faster incident retrieval and pattern recognition across historical cases"
    ],
    tech: ["Python", "React", "Whisper", "Transformers", "LangChain", "Flask", "Vector DB", "NLP"],
    metrics: "Thousands of Users • 85% Accuracy • 500+ Hours of Audio",
    github: "https://github.com/Ananyanagaraj11/safevoice-ai",
    demo: "http://safevoiceai.netlify.app/",
    impact: "high"
  },
  {
    title: "🛡️ IoT Attack Detection & Visualization",
    description: [
      "Achieved 99.90% accuracy on CICIDS2017 dataset by building CNN/LSTM ensemble for real-time IoT attack classification across 12 attack types",
      "Engineered automated feature extraction pipeline processing 2M+ network traffic records, reducing detection latency by 45%",
      "Developed interactive dashboard with SHAP explainability showing model decisions, improving security team trust by 40%",
      "Implemented automated alerting system with 30% reduction in false positives through ensemble voting and confidence thresholds"
    ],
    tech: ["Python", "PyTorch", "TensorFlow", "React", "SHAP", "CNN", "LSTM", "Autoencoders"],
    metrics: "99.90% Accuracy • 2M+ Records • 45% Faster Detection",
    github: "https://github.com/Ananyanagaraj11/iot-attack-detection-dashboard",
    demo: "https://ananyanagaraj11.github.io/iot-attack-detection-dashboard/",
    impact: "high"
  },
  {
    title: "💄 GlamScan - AI Fashion Recommendation",
    description: [
      "Built ML-powered fashion recommendation engine serving personalized product suggestions to 1,000+ users using collaborative filtering and computer vision",
      "Developed full-stack application with React frontend and Flask API, implementing image similarity search with 70% user engagement improvement",
      "Engineered recommendation pipeline combining user behavior analysis and visual embeddings, achieving 65% click-through rate on suggestions",
      "Integrated Redis caching and optimized database queries reducing API response time by 50% for real-time recommendations"
    ],
    tech: ["React", "Flask", "Python", "Computer Vision", "ML", "Redis", "PostgreSQL", "REST API"],
    metrics: "1K+ Users • 70% Engagement Increase • 65% CTR",
    github: null,
    demo: null,
    impact: "high"
  },
  {
    title: "🏥 Medical NER with BioBERT",
    description: [
      "Fine-tuned BioBERT on BC5CDR dataset for biomedical named entity recognition, achieving 92% F1-score for disease and chemical extraction",
      "Processed and annotated 15,000+ medical abstracts, implementing custom tokenization and entity linking for clinical text analysis",
      "Built evaluation framework with SHAP explainability revealing model attention patterns, improving interpretability for medical researchers",
      "Exposed NER pipeline via REST APIs enabling downstream clinical text processing workflows, reducing manual annotation time by 75%"
    ],
    tech: ["Python", "BioBERT", "Transformers", "Hugging Face", "SHAP", "NLP", "PyTorch", "Flask API"],
    metrics: "92% F1-Score • 15K+ Abstracts • 75% Time Savings",
    github: "https://github.com/Ananyanagaraj11/medical-ner-biobert",
    demo: "https://medical-ner-dashboard.vercel.app/",
    impact: "high"
  }
];

export const Projects = () => {
  const [inView, setInView] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden group hover:border-purple-500 transition-all"
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                    {project.impact === 'high' && (
                      <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                        🔥 High Impact
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-700/50 hover:bg-gray-600 rounded-lg transition-colors text-white"
                      aria-label="View on GitHub"
                    >
                      <GithubIcon />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-white"
                      aria-label="View Live Demo"
                    >
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>

              {/* Metrics */}
              <div className="mb-6 p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <p className="text-purple-300 font-semibold text-center">{project.metrics}</p>
              </div>

              {/* Description */}
              <ul className="space-y-3 mb-6" role="list">
                {project.description.map((point, idx) => (
                  <motion.li
                    key={idx}
                    role="listitem"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-purple-400 mt-1 flex-shrink-0" aria-hidden="true">•</span>
                    <span className="leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevProject}
              className="p-3 bg-gray-800/50 border border-gray-700 hover:border-purple-500 rounded-full transition-all group"
              aria-label="Previous project"
            >
              <div className="text-purple-400 group-hover:scale-110 transition-transform">
                <ChevronLeft />
              </div>
            </button>
            
            <div className="flex gap-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentProject(idx)}
                  className={`h-3 rounded-full transition-all ${
                    idx === currentProject 
                      ? 'bg-purple-500 w-8' 
                      : 'bg-gray-600 hover:bg-gray-500 w-3'
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextProject}
              className="p-3 bg-gray-800/50 border border-gray-700 hover:border-purple-500 rounded-full transition-all group"
              aria-label="Next project"
            >
              <div className="text-purple-400 group-hover:scale-110 transition-transform">
                <ChevronRight />
              </div>
            </button>
          </div>

          {/* Project Counter */}
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm">
              Project {currentProject + 1} of {projects.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};