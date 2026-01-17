import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Certifications = () => {
  const certifications = [
    {
      title: "McKinsey.org Forward Program",
      issuer: "McKinsey & Company",
      date: "Dec 2025",
      credentialId: "580d7c0a-aba3-45db-8057-3422023a7871",
      skills: ["Digital Toolkit", "Communication", "Resilience", "Creative Problem Solving"],
      link: "https://www.linkedin.com/in/AnanyaNagaRaj/details/certifications/",
      logo: "https://logo.clearbit.com/mckinsey.com"
    },
    {
      title: "Crash Course on Python",
      issuer: "Google",
      date: "Jun 2025",
      credentialId: "EUK1ZKGOCIBH",
      skills: ["Python", "Machine Learning", "TensorFlow", "CNN"],
      link: "https://www.linkedin.com/in/AnanyaNagaRaj/details/certifications/",
      logo: "https://logo.clearbit.com/google.com"
    },
    {
      title: "Improve Code Quality with Amazon CodeGuru Reviewer",
      issuer: "Amazon Web Services (AWS)",
      date: "Jun 2025",
      credentialId: null,
      skills: ["Python", "Machine Learning", "TensorFlow", "Code Quality"],
      link: "https://www.linkedin.com/in/AnanyaNagaRaj/details/certifications/",
      logo: "https://logo.clearbit.com/aws.amazon.com"
    },
    {
      title: "What is Data Science?",
      issuer: "IBM",
      date: "Jun 2025",
      credentialId: "5EHAY1WG94N5",
      skills: ["Data Science", "Analytics", "Machine Learning"],
      link: "https://www.linkedin.com/in/AnanyaNagaRaj/details/certifications/",
      logo: "https://logo.clearbit.com/ibm.com"
    },
    {
      title: "Machine Learning Project",
      issuer: "Adichunchanagiri Institute of Technology",
      date: "May 2023",
      credentialId: null,
      skills: ["CNN", "Machine Learning", "Python", "TensorFlow"],
      link: "https://www.linkedin.com/in/AnanyaNagaRaj/details/certifications/",
      logo: null
    },
    {
      title: "DevOps and GitHub Fundamentals",
      issuer: "Internship Program",
      date: "Mar 2023",
      credentialId: null,
      skills: ["GitHub", "DevOps", "Communication", "Problem Solving"],
      link: "https://www.linkedin.com/in/AnanyaNagaRaj/details/certifications/",
      logo: null
    },
    {
      title: "TCS Certification",
      issuer: "Tata Consultancy Services",
      date: "Oct 2022",
      credentialId: null,
      skills: ["Software Development", "Enterprise Solutions"],
      link: "https://www.linkedin.com/in/AnanyaNagaRaj/details/certifications/",
      logo: "https://logo.clearbit.com/tcs.com"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Certifications
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all duration-300 h-full backdrop-blur-sm group">
                <CardContent className="p-6">
                  {/* Logo and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {cert.logo ? (
                        <img 
                          src={cert.logo} 
                          alt={cert.issuer}
                          className="w-8 h-8 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const sibling = target.nextElementSibling as HTMLElement;
                            if (sibling) sibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <Award className="w-6 h-6 text-purple-400" style={{ display: cert.logo ? 'none' : 'block' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-400">{cert.issuer}</p>
                    </div>
                  </div>

                  {/* Date */}
                  <p className="text-sm text-purple-400 font-medium mb-3">
                    Issued: {cert.date}
                  </p>

                  {/* Credential ID */}
                  {cert.credentialId && (
                    <p className="text-xs text-gray-500 mb-4 font-mono">
                      ID: {cert.credentialId}
                    </p>
                  )}

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="text-xs px-3 py-1 bg-gray-700 text-gray-300 rounded-full">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* View Certificate Link */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors group/link"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.linkedin.com/in/AnanyaNagaRaj/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-lg font-semibold group"
          >
            <span>View All Certifications on LinkedIn</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};