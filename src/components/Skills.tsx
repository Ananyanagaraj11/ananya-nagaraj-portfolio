import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Simple SVG Icon Components
const CodeIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const BrainIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const CloudIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const CpuIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const LayersIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>
);

const skillCategories = [
  {
    title: "Programming Languages",
    icon: CodeIcon,
    skills: [
      { name: "Python", icon: CodeIcon },
      { name: "JavaScript", icon: CodeIcon },
      { name: "TypeScript", icon: CodeIcon },
      { name: "SQL", icon: DatabaseIcon },
      { name: "Java", icon: CodeIcon },
      { name: "C++", icon: CodeIcon },
    ],
  },
  {
    title: "Frontend & Full-Stack",
    icon: LayersIcon,
    skills: [
      { name: "React", icon: LayersIcon },
      { name: "Node.js", icon: CodeIcon },
      { name: "Backend APIs (Flask, FastAPI, Express)", icon: CodeIcon },
      { name: "HTML5, CSS3, Tailwind", icon: LayersIcon },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: BrainIcon,
    skills: [
      { name: "PyTorch", icon: BrainIcon },
      { name: "TensorFlow", icon: BrainIcon },
      { name: "scikit-learn", icon: BrainIcon },
      { name: "LangChain", icon: BrainIcon },
      { name: "Hugging Face", icon: BrainIcon },
      { name: "OpenCV", icon: BrainIcon },
    ],
  },
  {
    title: "LLMs & NLP",
    icon: CpuIcon,
    skills: [
      { name: "RAG Architectures", icon: CpuIcon },
      { name: "Prompt Engineering", icon: CpuIcon },
      { name: "Vector Databases (FAISS, Pinecone)", icon: DatabaseIcon },
      { name: "LLM Workflows (Inference, Evaluation)", icon: CpuIcon },
      { name: "Agentic AI", icon: BrainIcon },
    ],
  },
  {
    title: "Databases",
    icon: DatabaseIcon,
    skills: [
      { name: "PostgreSQL", icon: DatabaseIcon },
      { name: "MySQL", icon: DatabaseIcon },
      { name: "MongoDB", icon: DatabaseIcon },
      { name: "Redis", icon: DatabaseIcon },
      { name: "Vector DBs", icon: DatabaseIcon },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: CloudIcon,
    skills: [
      { name: "AWS (S3, IAM, CodeGuru)", icon: CloudIcon },
      { name: "GCP (Foundational)", icon: CloudIcon },
      { name: "Docker", icon: CloudIcon },
      { name: "CI/CD", icon: CloudIcon },
      { name: "GitHub Actions", icon: CloudIcon },
    ],
  },
  {
    title: "Data Science & Analytics",
    icon: ChartIcon,
    skills: [
      { name: "Pandas", icon: ChartIcon },
      { name: "NumPy", icon: ChartIcon },
      { name: "Data Pipelines", icon: ChartIcon },
      { name: "Model Evaluation", icon: BrainIcon },
      { name: "Feature Engineering", icon: ChartIcon },
    ],
  },
  {
    title: "Software Engineering",
    icon: UsersIcon,
    skills: [
      { name: "System Design", icon: UsersIcon },
      { name: "RESTful APIs", icon: CodeIcon },
      { name: "Microservices (Foundational)", icon: CloudIcon },
      { name: "Git & GitHub", icon: CodeIcon },
      { name: "Agile/Scrum", icon: UsersIcon },
      { name: "Code Review", icon: CodeIcon },
    ],
  },
];

export const Skills = () => {
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
    <section id="skills" className="py-20 relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, catIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl hover:border-purple-500 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                    <CategoryIcon />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: catIndex * 0.1 + skillIndex * 0.05, duration: 0.3 }}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700/50 transition-colors cursor-default"
                      >
                        <div className="text-purple-400">
                          <SkillIcon />
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};