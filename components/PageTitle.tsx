import { motion } from "framer-motion";

interface PageTitleProps {
  children: React.ReactNode;
}

export const PageTitle = ({ children }: PageTitleProps) => (
  <motion.h1
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="text-4xl font-bold text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60"
  >
    {children}
  </motion.h1>
); 