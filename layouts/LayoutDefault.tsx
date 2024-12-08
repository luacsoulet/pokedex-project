import "./style.css";

import "./tailwind.css";

import React from "react";
import logoUrl from "../assets/pokeball.png";
import { Link } from "../components/Link.js";
import { TeamProvider } from "../contexts/teamContext";
import { PokemonProvider } from "../contexts/pokemonContext";
import { motion } from "framer-motion";
import { TeamCounter } from "../components/TeamCounter";
import { Toaster } from 'react-hot-toast';

const sidebarVariants = {
  open: {
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)",
    background: "rgba(17, 24, 39, 0.8)",
    transition: {
      staggerChildren: 0.1,
    }
  },
  closed: {
    boxShadow: "none",
    background: "transparent"
  }
};

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <TeamProvider>
        <PokemonProvider>
          <div className="flex w-full h-full overflow-auto">
            <Sidebar>
              <Logo />
              <Link href="/">Pokédex</Link>
              <Link href="/team">Team
              </Link>
              <TeamCounter />
            </Sidebar>
            <Content>
              {children}
            </Content>
            <Toaster position="top-right" />
          </div>
        </PokemonProvider>
      </TeamProvider>
    </div>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <motion.div 
      id="sidebar" 
      className="p-5 flex flex-col shrink-0 border-r border-white/10 backdrop-blur-md gap-4 bg-white/5"
      variants={sidebarVariants}
      initial="closed"
      animate="open"
    >
      {children}
    </motion.div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container" className="flex-1 overflow-auto">
      <div id="page-content" className="p-5 pb-12 min-h-screen backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="p-5 mb-2">
      <motion.div 
        className="p-5 mb-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <a href="/">
          <motion.img 
            src={logoUrl} 
            height={64} 
            width={64} 
            alt="logo" 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          />
        </a>
      </motion.div>
    </div>
  );
}
