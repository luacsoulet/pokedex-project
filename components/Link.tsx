import React from "react";
import { motion } from "framer-motion";

export const Link = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <a 
        href={href}
        className="
          relative px-6 py-3 rounded-xl
          bg-white/10 hover:bg-white/20
          flex items-center gap-3
          text-white/80 hover:text-white
          transition-colors duration-200
          overflow-hidden
          group
        "
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />
        <span className="relative z-10">
          {children}
        </span>
      </a>
    </motion.div>
  );
};
