import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      title: "B.Tech in Computer Science and Engineering",
      institution: "Lovely Professional University, Phagwara, Punjab",
      duration: "Aug 2023 - Present",
      grade: "CGPA: 7.4",
    },
    {
      title: "Intermediate",
      institution: "D.A.V Public School, Pakur, Jharkhand",
      duration: "Apr 2021 - Mar 2023",
      grade: "Percentage: 77%",
    },
    {
      title: "Matriculation",
      institution: "D.A.V Public School, Pakur, Jharkhand",
      duration: "Apr 2020 - Mar 2021",
      grade: "Percentage: 89%",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center text-white px-6 py-10 relative overflow-hidden"
    >
      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-rose-400 bg-clip-text text-transparent inline-block">
            🎓 Education
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            My academic journey and milestones.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-teal-500/0 via-teal-500/50 to-teal-500/0" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 rounded-full border-4 border-black z-10 ${
                    edu.duration.includes("Present")
                      ? "bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)]"
                      : "bg-teal-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                  }`}
                >
                  {edu.duration.includes("Present") && (
                    <span className="absolute -inset-1 rounded-full bg-green-500 opacity-75 animate-ping" />
                  )}
                </div>

                {/* Content Card */}
                <div className="ml-6 md:ml-0 md:w-1/2">
                  <div className="floating-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-teal-500/30 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-2 text-teal-400">
                      <FaGraduationCap className="text-xl" />
                      <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                        {edu.title}
                      </h3>
                    </div>

                    <p className="text-gray-300 font-medium mb-2">
                      {edu.institution}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <FaCalendarAlt />
                      <span>{edu.duration}</span>
                    </div>

                    <div className="inline-block px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-semibold text-teal-300">
                      {edu.grade}
                    </div>
                  </div>
                </div>

                {/* Empty Space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
