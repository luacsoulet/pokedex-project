import { jsx, jsxs, Fragment } from "react/jsx-runtime";
/* empty css               */
/* empty css               */
import { motion } from "framer-motion";
import { createContext, useReducer, useContext, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
const pokeball = "/assets/static/pokeball.BTZOIN1e.png";
const Link = ({ href, children }) => {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
      transition: { type: "spring", stiffness: 400, damping: 17 },
      children: /* @__PURE__ */ jsxs(
        "a",
        {
          href,
          className: "\n          relative px-6 py-3 rounded-xl\n          bg-white/10 hover:bg-white/20\n          flex items-center gap-3\n          text-white/80 hover:text-white\n          transition-colors duration-200\n          overflow-hidden\n          group\n        ",
          children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100",
                transition: { duration: 0.3 }
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "relative z-10", children })
          ]
        }
      )
    }
  );
};
const initialState = {
  team: []
};
const teamReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (state.team.length >= 6) return state;
      return {
        ...state,
        team: [...state.team, {
          id: action.payload.id,
          slug: action.payload.slug,
          isShiny: Boolean(action.payload.isShiny),
          isFemale: Boolean(action.payload.isFemale)
        }]
      };
    case "DELETE":
      return {
        ...state,
        team: state.team.filter((_, index) => index !== action.payload)
      };
    default:
      return state;
  }
};
const TeamContext = createContext(void 0);
const TeamProvider = ({ children }) => {
  const [state, dispatch] = useReducer(teamReducer, initialState);
  const enhancedDispatch = (action) => {
    const MAX_TEAM_SIZE = 6;
    switch (action.type) {
      case "ADD":
        if (state.team.length >= MAX_TEAM_SIZE) {
          toast.error("Votre équipe est déjà complète !", {
            icon: "🚫",
            duration: 3e3,
            style: {
              background: "#164e63",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)"
            }
          });
          return;
        }
        toast.success("Pokémon ajouté à l'équipe !", {
          icon: "✨",
          duration: 2e3,
          style: {
            background: "#164e63",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)"
          }
        });
        break;
      case "DELETE":
        toast.success("Pokémon retiré de l'équipe", {
          icon: "👋",
          duration: 2e3
        });
        break;
    }
    dispatch(action);
  };
  return /* @__PURE__ */ jsx(TeamContext.Provider, { value: { state, dispatch: enhancedDispatch }, children });
};
const useTeam = () => {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error("useTeam must be used within a TeamProvider");
  }
  return context;
};
const PokemonContext = createContext(void 0);
function PokemonProvider({ children, initialPokemonList = [] }) {
  const [pokemonList, setPokemonList] = useState(initialPokemonList);
  const [isContextLoading, setIsContextLoading] = useState(false);
  return /* @__PURE__ */ jsx(PokemonContext.Provider, { value: {
    pokemonList,
    setPokemonList,
    isContextLoading,
    setIsContextLoading
  }, children });
}
function usePokemonContext() {
  const context = useContext(PokemonContext);
  if (context === void 0) {
    throw new Error("usePokemonContext must be used within a PokemonProvider");
  }
  return context;
}
const TeamCounter = () => {
  const { state } = useTeam();
  const MAX_TEAM_SIZE = 6;
  return /* @__PURE__ */ jsxs("div", { className: "mt-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400 mb-1", children: "Équipe" }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text", children: state.team.length }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "/" }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: MAX_TEAM_SIZE })
    ] })
  ] });
};
const sidebarVariants = {
  open: {
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)",
    background: "rgba(17, 24, 39, 0.8)",
    transition: {
      staggerChildren: 0.1
    }
  },
  closed: {
    boxShadow: "none",
    background: "transparent"
  }
};
function LayoutDefault({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900", children: /* @__PURE__ */ jsx(TeamProvider, { children: /* @__PURE__ */ jsx(PokemonProvider, { children: /* @__PURE__ */ jsxs("div", { className: "flex w-full h-full overflow-auto", children: [
    /* @__PURE__ */ jsxs(Sidebar, { children: [
      /* @__PURE__ */ jsx(Logo, {}),
      /* @__PURE__ */ jsx(Link, { href: "/", children: "Pokédex" }),
      /* @__PURE__ */ jsx(Link, { href: "/team", children: "Team" }),
      /* @__PURE__ */ jsx(TeamCounter, {})
    ] }),
    /* @__PURE__ */ jsx(Content, { children }),
    /* @__PURE__ */ jsx(Toaster, { position: "top-right" })
  ] }) }) }) });
}
function Sidebar({ children }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      id: "sidebar",
      className: "p-5 flex flex-col shrink-0 border-r border-white/10 backdrop-blur-md gap-4 bg-white/5",
      variants: sidebarVariants,
      initial: "closed",
      animate: "open",
      children
    }
  );
}
function Content({ children }) {
  return /* @__PURE__ */ jsx("div", { id: "page-container", className: "flex-1 overflow-auto", children: /* @__PURE__ */ jsx("div", { id: "page-content", className: "p-5 pb-12 min-h-screen backdrop-blur-sm", children }) });
}
function Logo() {
  return /* @__PURE__ */ jsx("div", { className: "p-5 mb-2", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "p-5 mb-2",
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.9 },
      transition: { type: "spring", stiffness: 400, damping: 17 },
      children: /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx(
        motion.img,
        {
          src: pokeball,
          height: 64,
          width: 64,
          alt: "logo",
          whileHover: { scale: 1.1 },
          whileTap: { scale: 0.9 },
          transition: { type: "spring", stiffness: 400, damping: 17 }
        }
      ) })
    }
  ) });
}
const logoUrl = "/assets/static/logo.DLJJsk-H.svg";
function HeadDefault() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("link", { rel: "icon", href: logoUrl }) });
}
const import4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HeadDefault
}, Symbol.toStringTag, { value: "Module" }));
export {
  LayoutDefault as L,
  usePokemonContext as a,
  import4 as i,
  pokeball as p,
  useTeam as u
};
