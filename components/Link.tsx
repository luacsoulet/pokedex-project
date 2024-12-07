import React from "react";
import { usePageContext } from "vike-react/usePageContext";
import { motion } from "framer-motion";


export const Link = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, x: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <a 
        href={href}
        className="py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
      >
        {children}
      </a>
    </motion.div>
  );
}
