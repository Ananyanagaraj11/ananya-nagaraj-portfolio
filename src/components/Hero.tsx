import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "@/components/ui/button";
import profileImage from "/image1.jpeg";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/50 to-black/80" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-purple-400 font-semibold tracking-wider uppercase"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              ANANYA NAGA RAJ
            </motion.h1>

            {/* ATS-OPTIMIZED SUBTITLE */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-purple-300 font-semibold"
            >
              Software Engineer | AI & Machine Learning Engineer | LLM & RAG Systems
            </motion.p>

            <div className="text-2xl md:text-3xl font-light">
              <span className="text-gray-300">Building </span>
              <TypeAnimation
                sequence={[
                  "Production-Ready LLM Applications",
                  2000,
                  "RAG Architectures",
                  2000,
                  "Full-Stack AI Systems",
                  2000,
                  "Scalable ML Pipelines",
                  2000,
                  "Cloud-Native Solutions",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-purple-400 font-semibold"
                repeat={Infinity}
              />
            </div>

            {/* ATS-OPTIMIZED DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 text-lg leading-relaxed max-w-2xl"
            >
              Software Engineer & AI/ML Engineer with experience building production-ready LLM-powered applications, 
              RAG architectures, and full-stack systems using Python, React, and cloud technologies. 
              Strong background in machine learning, NLP, and deep learning with hands-on experience in 
              Whisper, Transformers, PyTorch, TensorFlow, vector databases, and REST APIs. 
              Proven ability to deliver scalable, high-impact solutions across AI research and real-world applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <ScrollLink to="projects" smooth={true} duration={500}>
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  View Projects
                </Button>
              </ScrollLink>

              {/* FIXED RESUME DOWNLOAD BUTTON */}
              <a 
                href="/Ananya_NagaRaj_Resume.pdf" 
                download="Ananya_NagaRaj_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold px-8 py-6 text-lg rounded-full transition-all"
                >
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Profile Image with Static Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-[400px] h-[400px]">
              {/* Rotating background */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-20 blur-3xl"
              />

              {/* Circular Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl shadow-purple-500/50">
                <img
                  src={profileImage}
                  alt="Ananya Naga Raj - Software Engineer and AI/ML Engineer"
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
              </div>

              {/* Static Floating Elements */}
              {/* Experience Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-br from-purple-600 to-pink-600 text-white p-4 rounded-2xl shadow-xl"
              >
                <p className="text-3xl font-bold">2+</p>
                <p className="text-sm font-medium">Years Experience</p>
              </motion.div>

              {/* Skills Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-xl font-bold text-lg"
              >
                REACT
              </motion.div>

              {/* Top Right Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute top-12 -right-12 bg-gradient-to-br from-green-500 to-teal-500 text-white px-4 py-2 rounded-lg shadow-xl font-semibold"
              >
                AWS
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ScrollLink to="about" smooth={true} duration={500}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="cursor-pointer"
          >
            <ChevronDown className="w-8 h-8 text-purple-400" />
          </motion.div>
        </ScrollLink>
      </motion.div>
    </section>
  );
};