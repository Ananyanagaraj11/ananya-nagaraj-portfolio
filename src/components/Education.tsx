import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Custom SVG Icon
const GraduationCapIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
  </svg>
);

const education = [
  {
    degree: "🎓 Master of Science in Computer Science",
    school: "Syracuse University",
    location: "Syracuse, NY",
    period: "2024 - 2026",
    gpa: "3.5/4.0",
    icon: "🎓",
    highlights: [
      "🏆 Awarded 20% scholarship in tuition fees",
      "🤖 Focus: AI/ML, Software Engineering"
    ]
  },
  {
    degree: "💻 Bachelor of Technology in Computer Science",
    school: "Adichunchanagiri Institute of Science and Technology",
    location: "Karnataka, India",
    period: "2019 - 2023",
    gpa: "3.48/4.0",
    icon: "💻",
    highlights: [
      "🔬 Computer Science & Engineering",
      "🧠 Machine Learning specialization"
    ]
  }
];

export const Education = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
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
    <section id="education" className="py-20 relative overflow-hidden bg-gray-900">
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
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-xl hover:border-purple-500 transition-all group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="relative">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="text-5xl"
                  >
                    {edu.icon}
                  </motion.div>
                  <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-white">
                      <GraduationCapIcon />
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-gray-300 mb-1">{edu.school}</p>
                  <p className="text-sm text-gray-400 mb-2">{edu.location}</p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <p className="text-sm text-purple-400 font-medium">{edu.period}</p>
                    <span className="text-gray-600">•</span>
                    <p className="text-sm text-green-400 font-semibold">GPA: {edu.gpa}</p>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-4 space-y-2">
                {edu.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1 text-xs">▸</span>
                    <p className="text-sm text-gray-300">{highlight}</p>
                  </div>
                ))}
              </div>

              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "100%" } : {}}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mt-6 rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};