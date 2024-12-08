import "./style.css";

import "./tailwind.css";

import React from "react";
import logoUrl from "../assets/logo.svg";
import { Link } from "../components/Link.js";
import { TeamProvider } from "../contexts/teamContext";
import { PokemonProvider } from "../contexts/pokemonContext";
import { motion } from "framer-motion";

const sidebarVariants = {
  open: {
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    background: "white",
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
    <div className={"flex max-w-5xl ml-0 mr-auto"}>
      <Sidebar>
        <Logo />
        <Link href="/">Pokédex</Link>
        <Link href="/team">My Team</Link>
        {""}
      </Sidebar>
      <Content>{children}</Content>
    </div>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <motion.div 
      id="sidebar" 
      className={"p-5 flex flex-col shrink-0 border-r-2 border-r-gray-200 backdrop-blur-sm"}
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
    <div id="page-container">
      <div id="page-content" className={"p-5 pb-12 min-h-screen"}>
        <PokemonProvider>
          <TeamProvider>
            {children}
          </TeamProvider>
        </PokemonProvider>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <motion.div 
      className={"p-5 mb-2"}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <a href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </a>
    </motion.div>
  );
}
