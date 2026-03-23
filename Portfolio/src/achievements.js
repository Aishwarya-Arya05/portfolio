import { motion } from "framer-motion";
import { FaTrophy, FaExternalLinkAlt } from "react-icons/fa";

const Achievements = () => {
  const achievements = [
    {
      title: "Competitive Programming Ratings",
      description:
        "Achieved 1550+ LeetCode Biweekly rating and 1 Star (1461) on CodeChef.",
      icon: <FaTrophy />,
      link: "#",
      date: "Current",
    },
    {
      title: "DSA Problem Solving",
      description:
        "Solved 200+ DSA problems across LeetCode, CodeChef, and GeeksforGeeks platforms.",
      icon: <FaTrophy />,
      link: "#",
      date: "Current",
    },
    {
      title: "HackerRank Badges",
      description: "Earned 3 HackerRank badges in C, C++, and Python.",
      icon: <FaTrophy />,
      link: "#",
      date: "Oct 2025",
    },
  ];

  const openInNewTab = (url) => {
    if (!url || url === "#") return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="achievements"
      className="min-h-screen flex py-10 flex-col items-center relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-rose-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl w-full px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-rose-400 bg-clip-text text-transparent">
            🏆 Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Highlights of my competitive programming and problem-solving
            journey.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {achievements.map((ach, i) => (
            <motion.article
              key={i}
              variants={cardVariants}
              className="floating-card group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition duration-300 flex flex-col hover:border-white/20"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-teal-400">
                  {ach.title}
                </h3>
                <span className="text-xs text-teal-300 bg-teal-500/10 px-3 py-1 rounded-full">
                  {ach.date}
                </span>
              </div>

              {/* Icon */}
              <div className="text-teal-400 text-3xl mb-4">{ach.icon}</div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {ach.description}
              </p>

              {/* Button */}
              <button
                onClick={() => openInNewTab(ach.link)}
                className="mt-auto flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-teal-600 to-rose-600 text-white hover:scale-[1.02] transition"
              >
                <FaExternalLinkAlt className="w-3 h-3" />
                View Profile
              </button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
