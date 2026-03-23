import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGithub,
  FaGitAlt,
  FaDocker,
  FaPhp,
  FaCss3Alt,
  FaBootstrap,
  FaAws,
  FaLinux,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiCplusplus,
  SiPostgresql,
  SiKubernetes,
  SiJenkins,
  SiGithubactions,
  SiXampp,
} from "react-icons/si";

import { VscVscodeInsiders } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";

const categories = [
  {
    title: "Languages",
    icon: "💻",
    tech: [
      {
        node: <SiCplusplus className="text-5xl text-[#0c4a86]" />,
        title: "C++",
      },
      {
        node: <FaJs className="text-5xl text-[#f4e11e]" />,
        title: "JavaScript",
      },
      {
        node: <FaPython className="text-5xl text-[#3776AB]" />,
        title: "Python",
      },
      { node: <FaJava className="text-5xl text-[#f89820]" />, title: "Java" },
      { node: <FaPhp className="text-5xl text-[#777BB4]" />, title: "PHP" },
    ],
  },
  {
    title: "Frontend",
    icon: "🎨",
    tech: [
      { node: <FaReact className="text-5xl text-[#20d9ff]" />, title: "React" },
      {
        node: <SiTailwindcss className="text-5xl text-[#38BDF8]" />,
        title: "Tailwind CSS",
      },
      { node: <FaHtml5 className="text-5xl text-[#f75403]" />, title: "HTML" },
      { node: <FaCss3Alt className="text-5xl text-[#1572B6]" />, title: "CSS" },
      {
        node: <FaBootstrap className="text-5xl text-[#7952B3]" />,
        title: "Bootstrap",
      },
    ],
  },
  {
    title: "Backend & DB",
    icon: "🗄️",
    tech: [
      {
        node: <FaNodeJs className="text-5xl text-[#3c873a]" />,
        title: "Node.js",
      },
      {
        node: <SiExpress className="text-5xl text-gray-300" />,
        title: "Express.js",
      },
      { node: <FaPhp className="text-5xl text-[#777BB4]" />, title: "PHP" },
      { node: <GrMysql className="text-5xl text-[#00758F]" />, title: "MySQL" },
      {
        node: <SiMongodb className="text-5xl text-[#4db33d]" />,
        title: "MongoDB",
      },
      {
        node: <SiPostgresql className="text-5xl text-[#336791]" />,
        title: "PostgreSQL",
      },
    ],
  },
  {
    title: "DevOps",
    icon: "⚙️",
    tech: [
      {
        node: <FaDocker className="text-5xl text-[#2496ED]" />,
        title: "Docker",
      },
      {
        node: <SiKubernetes className="text-5xl text-[#326CE5]" />,
        title: "Kubernetes",
      },
      {
        node: <SiJenkins className="text-5xl text-[#D24939]" />,
        title: "Jenkins",
      },
      {
        node: <SiGithubactions className="text-5xl text-[#2088FF]" />,
        title: "GitHub Actions",
      },
      { node: <FaAws className="text-5xl text-[#FF9900]" />, title: "AWS" },
      { node: <FaLinux className="text-5xl text-[#FCC624]" />, title: "Linux" },
    ],
  },
  {
    title: "Tools",
    icon: "🧰",
    tech: [
      { node: <FaGitAlt className="text-5xl text-[#f05032]" />, title: "Git" },
      { node: <FaGithub className="text-5xl text-white" />, title: "GitHub" },
      {
        node: <VscVscodeInsiders className="text-5xl text-[#3e9dd7]" />,
        title: "VS Code",
      },
      { node: <SiXampp className="text-5xl text-[#FB7A24]" />, title: "XAMPP" },
    ],
  },
];

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

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: { type: "spring", stiffness: 300 },
  },
};

const TechStack = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex py-10 flex-col items-center relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-rose-400 bg-clip-text text-transparent inline-block">
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="floating-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-colors duration-300 group"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-6 justify-center">
                {category.tech.map((tech, i) => (
                  <motion.div
                    key={i}
                    variants={iconVariants}
                    whileHover="hover"
                    className="flex flex-col items-center gap-2 group/icon"
                  >
                    <div className="relative p-3 rounded-xl bg-black/20 border border-white/5 group-hover/icon:border-white/20 transition-colors">
                      {tech.node}
                    </div>
                    <span className="text-xs font-medium text-gray-400 group-hover/icon:text-white transition-colors">
                      {tech.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
