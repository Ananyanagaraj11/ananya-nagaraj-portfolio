import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Custom SVG Icons
const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const SendIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

export const Contact = () => {
  const [inView, setInView] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert("Message sent successfully! I'll get back to you soon. 📧");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
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
            💬 Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-1 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-white text-center">Let's Connect 🤝</h3>
                <p className="text-gray-300 mb-8 text-center max-w-2xl mx-auto">
                  I'm always open to discussing new opportunities, AI/ML projects, or innovative software solutions. Feel free to reach out!
                </p>

                <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                  <motion.a
                    href="mailto:annagara@syr.edu"
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 border border-gray-600 hover:border-purple-500 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                      <MailIcon />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">📧 Email</p>
                      <p className="text-white font-medium">annagara@syr.edu</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/AnanyaNagaRaj"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 border border-gray-600 hover:border-purple-500 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                      <LinkedinIcon />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">💼 LinkedIn</p>
                      <p className="text-white font-medium">AnanyaNagaRaj</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://github.com/Ananyanagaraj11"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 border border-gray-600 hover:border-purple-500 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                      <GithubIcon />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">💻 GitHub</p>
                      <p className="text-white font-medium">Ananyanagaraj11</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+16462961005"
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 border border-gray-600 hover:border-purple-500 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                      <PhoneIcon />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">📱 Phone</p>
                      <p className="text-white font-medium">+1 (646) 296-1005</p>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};