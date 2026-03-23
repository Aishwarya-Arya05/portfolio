import { motion } from "framer-motion";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const DESCRIPTION_LIMIT = 120;

const Projects = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (i) =>
    setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));

  const projects = [
    {
      title: "InternMatch",
      img: null,
      description:
        "Built a full-stack MERN internship web application enabling students to discover and apply for internships while recruiters efficiently manage candidates. Implemented JWT authentication, role-based dashboards, secure CV uploads using Multer, and encrypted credentials with Bcrypt. Developed RESTful APIs for internship postings and applications.",
      tech: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JWT",
        "Bcrypt",
        "REST APIs",
      ],
      liveLink: "#",
      githubLink:
        "https://github.com/Aishwarya-Arya05/Online_InternshipMatching_platform",
      date: "Oct 2025 - Dec 2025",
    },
    {
      title: "Automated Climate Monitoring for Smart Agriculture",
      img: null,
      description:
        "Built an IoT dashboard for real-time climate monitoring using sensor data. Developed a PHP backend to fetch and display live data. Delivered centralized climate insights to support smarter agricultural decisions.",
      tech: ["HTML", "Tailwind CSS", "JavaScript", "MySQL", "PHP", "XAMPP"],
      liveLink: "#",
      githubLink: "https://github.com/Aishwarya-Arya05/Farm-Forecast",
      date: "Apr 2025",
    },
    {
      title: "Page Replacement Simulator",
      img: null,
      description:
        "Designed a simulator comparing FIFO and LRU algorithms with AI-based suggestions. Displayed real-time hits, faults, and frame allocation. Enabled interactive visualization for algorithm comparison.",
      tech: ["HTML", "CSS", "JavaScript", "AI Integration"],
      liveLink: "#",
      githubLink: "https://github.com/Aishwarya-Arya05/OS-project",
      date: "Mar 2025 - Apr 2025",
    },
  ];

  const openInNewTab = (url) => {
    if (!url || url === "#") {
      return;
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex py-10 flex-col items-center relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-rose-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl w-full px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-rose-400 bg-clip-text text-transparent inline-block">
            💻 My Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of projects demonstrating full-stack development, API
            integrations, and practical system design.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => {
            const isLive = project.liveLink && project.liveLink !== "#";
            const hasGithub = project.githubLink && project.githubLink !== "#";

            return (
              <motion.article
                key={i}
                variants={cardVariants}
                className="floating-card group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 h-full flex flex-col hover:border-white/20 transition-colors duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium text-teal-300 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
                    {project.date}
                  </span>
                </div>

                {/* Image */}
                {project.img && (
                  <div className="mb-4">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-auto rounded-2xl object-cover"
                    />
                  </div>
                )}

                {/* Description */}
                <div className="mb-6">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description.length > DESCRIPTION_LIMIT &&
                    !expanded[i]
                      ? project.description.slice(0, DESCRIPTION_LIMIT) + "…"
                      : project.description}
                  </p>
                  {project.description.length > DESCRIPTION_LIMIT && (
                    <button
                      onClick={() => toggleExpand(i)}
                      className="mt-1 text-teal-400 text-xs font-semibold hover:text-teal-300 transition-colors"
                    >
                      {expanded[i] ? "See less ▲" : "See more ▼"}
                    </button>
                  )}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-auto">
                  {/* GitHub Source */}
                  <button
                    onClick={() =>
                      hasGithub && openInNewTab(project.githubLink)
                    }
                    disabled={!hasGithub}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      hasGithub
                        ? "bg-white/10 text-white hover:bg-white/20 hover:scale-[1.02] cursor-pointer border border-white/10"
                        : "bg-white/5 text-gray-500 cursor-not-allowed border border-white/5"
                    }`}
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>Source</span>
                  </button>


                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
