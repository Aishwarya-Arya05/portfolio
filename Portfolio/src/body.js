import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const profileImage = new URL("./image/profile.jpg", import.meta.url).href;

export default function Body() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      {/* Floating Animation Wrapper */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="relative z-10"
      >
        {/* Round Container */}
        <div className="w-[250px] h-[250px] relative mt-16 md:mt-0">
          {/* The Glow/Border Effect */}
          <div className="absolute -inset-1 bg-gradient-to-br from-teal-500 via-rose-500 to-fuchsia-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>

          {/* Floating Icons */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 bg-black/50 p-3 rounded-full border border-white/10 backdrop-blur-sm z-20"
          >
            <FaReact className="text-3xl text-[#20d9ff]" />
          </motion.div>
          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute bottom-6 -right-8 bg-black/50 p-3 rounded-full border border-white/10 backdrop-blur-sm z-20"
          >
            <FaNodeJs className="text-3xl text-[#3c873a]" />
          </motion.div>
          <motion.div
            animate={{ y: [-3, 3, -3] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="absolute -bottom-8 left-4 bg-black/50 p-3 rounded-full border border-white/10 backdrop-blur-sm z-20"
          >
            <SiMongodb className="text-3xl text-[#4db33d]" />
          </motion.div>

          {/* The Image Container */}
          <div className="w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-white/10 relative z-10 bg-[#0a0a0a] flex items-center justify-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>
      </motion.div>

      {/* Background Glow Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-teal-500/20 blur-[100px] rounded-full -z-10" />
    </motion.div>
  );
}
