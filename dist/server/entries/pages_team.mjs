import import1 from "vike-react/__internal/integration/Loading";
import { onRenderHtml } from "vike-react/__internal/integration/onRenderHtml";
import { u as useTeam, L as LayoutDefault, i as import4 } from "../chunks/chunk-BCbjKukg.js";
import { jsxs, jsx } from "react/jsx-runtime";
import { getTeam } from "../chunks/chunk-CXLj-_Cc.js";
import { useState, useEffect } from "react";
import { P as Pokecard } from "../chunks/chunk-CIGEoySL.js";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { g as getTypeSlug, E as Energy } from "../chunks/chunk-Cdbg_Xna.js";
/* empty css                       */
/* empty css                       */
import "react-hot-toast";
import "telefunc";
/* empty css                       */
const StatsCard = ({ title, children, delay = 0 }) => /* @__PURE__ */ jsxs(
  motion.div,
  {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay },
    className: "relative p-6 bg-white/5 rounded-xl backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]",
    children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-4 px-2 py-1 bg-teal-600/90 rounded-md backdrop-blur-sm", children: /* @__PURE__ */ jsx("h2", { className: "text-sm font-bold text-white uppercase tracking-wider", children: title }) }),
      /* @__PURE__ */ jsx("div", { className: "pt-2", children })
    ]
  }
);
const TeamStats = ({ typeCount, teamStats }) => /* @__PURE__ */ jsxs("div", { className: "space-y-6 w-full max-w-3xl mx-auto", children: [
  /* @__PURE__ */ jsx(StatsCard, { title: "Types", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: Object.entries(typeCount).map(([typeName, count]) => {
    const typeInfo = {
      name: typeName,
      slug: getTypeSlug(typeName)
    };
    return /* @__PURE__ */ jsx(
      Energy,
      {
        type: typeInfo,
        count,
        size: "sm"
      },
      typeName
    );
  }) }) }),
  /* @__PURE__ */ jsx(StatsCard, { title: "Stats moyennes", delay: 0.1, children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: Object.entries(teamStats).map(([stat, value]) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300",
      children: [
        /* @__PURE__ */ jsx("div", { className: "text-gray-300 text-xs uppercase tracking-wider mb-1", children: stat }),
        /* @__PURE__ */ jsx("div", { className: "text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text", children: value })
      ]
    },
    stat
  )) }) })
] });
function Page() {
  const { state, dispatch } = useTeam();
  const [team, setTeam] = useState([]);
  const [teamStats, setTeamStats] = useState({});
  const [typeCount, setTypeCount] = useState({});
  useEffect(() => {
    const calculateTeamStats = (fetchedTeam) => {
      const stats = {};
      const types = {};
      fetchedTeam.forEach((pokemon) => {
        if (!pokemon.types) return;
        pokemon.types.forEach((type) => {
          types[type.name] = (types[type.name] || 0) + 1;
        });
        if (!pokemon.stats) return;
        pokemon.stats.forEach((stat) => {
          if (!stats[stat.name]) stats[stat.name] = [];
          stats[stat.name].push(stat.base_stat);
        });
      });
      const averages = Object.entries(stats).reduce((acc, [name, values]) => {
        acc[name] = Math.round(values.reduce((a, b) => a + b, 0) / values.length);
        return acc;
      }, {});
      setTeamStats(averages);
      setTypeCount(types);
    };
    const fetchTeam = async () => {
      if (state.team && state.team.length > 0) {
        const { team: fetchedTeam } = await getTeam(state.team);
        setTeam(fetchedTeam);
        calculateTeamStats(fetchedTeam);
      } else {
        setTeam([]);
        setTeamStats({});
        setTypeCount({});
      }
    };
    fetchTeam();
  }, [state.team]);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center min-h-[calc(100vh-2rem)] w-full", children: [
    /* @__PURE__ */ jsx(
      motion.h1,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: "easeOut" },
        className: "text-4xl font-bold text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60",
        children: "Mon équipe Pokémon"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "w-full max-w-7xl px-4 flex flex-col items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 place-items-center w-full max-w-5xl", children: Array(6).fill(null).map((_, slot) => {
        var _a, _b, _c;
        const pokemon = team[slot];
        const teamMember = state.team[slot];
        if (!pokemon || !teamMember) {
          return /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: slot * 0.1 },
              className: `relative w-[200px] min-h-[240px] rounded-xl border-2 border-dashed border-gray-700/50 flex flex-col items-center justify-center gap-4 bg-gray-800/20 backdrop-blur-sm`,
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-full border-2 border-dashed border-gray-700/50 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-3xl text-gray-700", children: "?" }) }),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-500 text-sm", children: [
                  "Emplacement ",
                  slot + 1
                ] })
              ]
            },
            `empty-${slot}`
          );
        }
        const spriteToShow = teamMember.isShiny && teamMember.isFemale ? ((_a = pokemon.sprites.shiny) == null ? void 0 : _a.female) ?? ((_b = pokemon.sprites.shiny) == null ? void 0 : _b.male) ?? pokemon.sprites.normal.male : teamMember.isShiny ? ((_c = pokemon.sprites.shiny) == null ? void 0 : _c.male) ?? pokemon.sprites.normal.male : teamMember.isFemale ? pokemon.sprites.normal.female ?? pokemon.sprites.normal.male : pokemon.sprites.normal.male;
        return /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "relative flex justify-center w-[200px]",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: slot * 0.1 },
            children: /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
              /* @__PURE__ */ jsx(
                Pokecard,
                {
                  id: pokemon.id,
                  name: pokemon.name,
                  image: spriteToShow
                }
              ),
              /* @__PURE__ */ jsx(
                motion.button,
                {
                  onClick: () => dispatch({ type: "DELETE", payload: slot }),
                  whileHover: { scale: 1.2 },
                  whileTap: { scale: 0.9 },
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                  className: "absolute -top-3 -right-3 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-lg leading-none shadow-lg hover:bg-red-500 transition-colors z-10",
                  children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faTrash })
                }
              )
            ] })
          },
          slot
        );
      }) }),
      team.length > 0 && /* @__PURE__ */ jsx("div", { className: "w-full max-w-3xl", children: /* @__PURE__ */ jsx(TeamStats, { typeCount, teamStats }) })
    ] })
  ] });
}
const import5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Page
}, Symbol.toStringTag, { value: "Module" }));
const configValuesSerialized = {
  ["isClientRuntimeLoaded"]: {
    type: "computed",
    definedAtData: null,
    valueSerialized: {
      type: "js-serialized",
      value: true
    }
  },
  ["Loading"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "vike-react/__internal/integration/Loading", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "pointer-import",
      value: import1
    }
  },
  ["onRenderHtml"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "vike-react/__internal/integration/onRenderHtml", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "pointer-import",
      value: onRenderHtml
    }
  },
  ["passToClient"]: {
    type: "cumulative",
    definedAtData: [{ "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "passToClient"] }],
    valueSerialized: [{
      type: "js-serialized",
      value: ["_configFromHook"]
    }]
  },
  ["Layout"]: {
    type: "cumulative",
    definedAtData: [{ "filePathToShowToUser": "/layouts/LayoutDefault.tsx", "fileExportPathToShowToUser": [] }],
    valueSerialized: [{
      type: "pointer-import",
      value: LayoutDefault
    }]
  },
  ["Head"]: {
    type: "cumulative",
    definedAtData: [{ "filePathToShowToUser": "/pages/+Head.tsx", "fileExportPathToShowToUser": [] }],
    valueSerialized: [{
      type: "plus-file",
      exportValues: import4
    }]
  },
  ["title"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/+config.ts", "fileExportPathToShowToUser": ["default", "title"] },
    valueSerialized: {
      type: "js-serialized",
      value: "My Vike App"
    }
  },
  ["description"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/+config.ts", "fileExportPathToShowToUser": ["default", "description"] },
    valueSerialized: {
      type: "js-serialized",
      value: "Demo showcasing Vike"
    }
  },
  ["Page"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/team/+Page.tsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import5
    }
  }
};
export {
  configValuesSerialized
};
