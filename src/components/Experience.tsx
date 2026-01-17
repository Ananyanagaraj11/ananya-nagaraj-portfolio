import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Custom SVG Icon
const BriefcaseIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const experiences = [
  {
    company: "Syracuse University - iConsult Project",
    role: "Software Developer",
    period: "November 2025 – Present",
    location: "Syracuse, NY",
    achievements: [
      "Reduced errors by 60% by designing AI agent workflows for recommendation system, implementing prompt engineering techniques and context optimization for improved task automation",
      "Improved system efficiency by 40% by building LLM-powered pipelines using Python, implementing function calling patterns and orchestration workflows for agentic AI applications",
      "Enhanced accuracy by 25% by applying advanced prompt engineering and RAG techniques to optimize LLM performance for user-facing AI features",
      "Integrated cloud-based vector databases and deployed scalable APIs to support large-scale LLM search and retrieval tasks, streamlining data accessibility for interdisciplinary research teams"
    ],
    color: "from-purple-600 to-pink-600",
  },
  {
    company: "Syracuse University - Biomedical & Chemical Engineering",
    role: "Graduate Research Assistant",
    period: "October 2025 – Present",
    location: "Syracuse, NY",
    achievements: [
      "Reduced processing time by 40% by designing scalable data collection mechanisms and building AI-driven modeling infrastructure using Python and TensorFlow",
      "Increased productivity by 30% by developing intelligent techniques to understand and represent complex scientific data with principled evaluation frameworks",
      "Streamlined experimental workflows by centralizing multi-source datasets and integrating automated quality assurance protocols, advancing data reliability and accelerating research outcomes"
    ],
    color: "from-blue-600 to-purple-600",
  },
  {
    company: "Selfy Page Developers Ltd.",
    role: "Software Developer",
    period: "March 2023 – June 2024",
    location: "Karnataka, India",
    achievements: [
      "Increased engagement by 25% by building LLM-powered recommendation system using semantic search and vector embeddings, implementing RAG architecture with Python serving 10,000+ users",
      "Reduced query time by 30% by designing text-to-SQL solution enabling natural language database querying, optimizing retrieval performance through vector database integration",
      "Decreased errors by 35% by implementing LLM observability and monitoring, building automated testing pipelines with GitHub Actions, maintaining AI workflows in Agile sprints"
    ],
    color: "from-green-600 to-teal-600",
  },
];

export const Experience = () => {
  const [inView, setInView] = useState(false);
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

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
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
            Professional <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 transform md:-translate-x-1/2" />

          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? "md:pr-[50%]" : "md:pl-[50%]"}`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.3 + 0.2, duration: 0.3 }}
                className="absolute left-8 md:left-1/2 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 transform md:-translate-x-1/2 shadow-lg shadow-purple-500/50"
              />

              {/* Card */}
              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl hover:border-purple-500 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${exp.color}`}>
                      <div className="text-white">
                        <BriefcaseIcon />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.company}</h3>
                      <p className="text-lg text-purple-400 font-medium mb-1">{exp.role}</p>
                      <p className="text-sm text-gray-400">{exp.period} • {exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-3" role="list">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        role="listitem"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.3 + 0.3 + i * 0.1, duration: 0.4 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-purple-400 mt-1.5 flex-shrink-0" aria-hidden="true">•</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">2+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">10K+</div>
            <div className="text-gray-300">Users Served</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">60%</div>
            <div className="text-gray-300">Error Reduction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};