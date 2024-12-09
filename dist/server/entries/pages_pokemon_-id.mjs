import import1 from "vike-react/__internal/integration/Loading";
import { onRenderHtml } from "vike-react/__internal/integration/onRenderHtml";
import { u as useTeam, L as LayoutDefault, i as import4 } from "../chunks/chunk-BCbjKukg.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useData } from "vike-react/useData";
import { useState } from "react";
import { t as typesWithColor } from "../chunks/chunk-Cdbg_Xna.js";
/* empty css                       */
/* empty css                       */
import "framer-motion";
import "react-hot-toast";
function Page() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const data2 = useData();
  const { state, dispatch } = useTeam();
  console.log(data2);
  const { current } = data2.currentPokemon;
  const [selectedSprite, setSelectedSprite] = useState(current.sprites.normal.male);
  if (!data2 || !data2.currentPokemon || !data2.currentPokemon.current) {
    return /* @__PURE__ */ jsx("div", { children: "Erreur : Pokémon introuvable ou problème de données." });
  }
  const handleAddToTeam = () => {
    var _a2, _b2, _c2;
    const isSelectedSpriteFemale = selectedSprite === current.sprites.normal.female || selectedSprite === ((_a2 = current.sprites.shiny) == null ? void 0 : _a2.female);
    dispatch({
      type: "ADD",
      payload: {
        id: current.id,
        slug: current.slug,
        isShiny: selectedSprite === ((_b2 = current.sprites.shiny) == null ? void 0 : _b2.male) || selectedSprite === ((_c2 = current.sprites.shiny) == null ? void 0 : _c2.female),
        isFemale: isSelectedSpriteFemale
      }
    });
  };
  const spriteButtons = [
    { type: "normal", gender: "male", label: "Normal ♂️", sprite: (_b = (_a = current.sprites) == null ? void 0 : _a.normal) == null ? void 0 : _b.male },
    { type: "normal", gender: "female", label: "Normal ♀️", sprite: (_d = (_c = current.sprites) == null ? void 0 : _c.normal) == null ? void 0 : _d.female },
    { type: "shiny", gender: "male", label: "Shiny ♂️", sprite: (_f = (_e = current.sprites) == null ? void 0 : _e.shiny) == null ? void 0 : _f.male },
    { type: "shiny", gender: "female", label: "Shiny ♀️", sprite: (_h = (_g = current.sprites) == null ? void 0 : _g.shiny) == null ? void 0 : _h.female }
  ];
  console.log(state);
  const getTypeColor = (type) => {
    var _a2;
    const typeStyle = typesWithColor.find((t) => t.slug === type.slug.toLowerCase());
    return ((_a2 = typeStyle == null ? void 0 : typeStyle.colors) == null ? void 0 : _a2[0]) || (typeStyle == null ? void 0 : typeStyle.color) || "#4A5568";
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-8 rounded-lg bg-gray-800/50 backdrop-blur-sm shadow-xl max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text", children: current.name }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: selectedSprite,
          alt: current.name,
          className: "mx-auto mb-4 h-64 object-contain [image-rendering:pixelated]"
        }
      ),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: "10px", marginTop: "10px" }, children: spriteButtons.map(({ type, gender, label, sprite }) => sprite && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setSelectedSprite(sprite),
          className: `px-4 py-2 rounded-lg transition-colors ${selectedSprite === sprite ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-200 hover:bg-gray-600"}`,
          children: label
        },
        `${type}-${gender}`
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mt-8 mb-4 text-gray-200", children: "Types" }),
      /* @__PURE__ */ jsx("ul", { className: "flex gap-2", children: current.types.map((type) => /* @__PURE__ */ jsx(
        "li",
        {
          className: "px-4 py-2 rounded-lg text-white",
          style: { backgroundColor: getTypeColor(type) },
          children: type.name
        },
        type.slug
      )) })
    ] }),
    current.stats && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mt-8 mb-4 text-gray-200", children: "Statistiques" }),
      /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-2 gap-4", children: current.stats.map((stat) => /* @__PURE__ */ jsxs("li", { className: "flex justify-between items-center p-4 bg-gray-700 rounded-lg", children: [
        /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: stat.name }),
        /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-semibold", children: stat.base_stat })
      ] }, stat.slug)) })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleAddToTeam,
        className: "mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors shadow-lg w-full",
        children: "Ajouter au team"
      }
    )
  ] });
}
const import5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: "Module" }));
async function data(pageContext) {
  const headers = {};
  {
    headers.Authorization = `Bearer ${"advanced-pokedex-api-key-9sd1u98cvg4t98yi"}`;
  }
  const pokemon = await fetch(`${"https://pokedex.coda.memento-dev.fr"}/pokemon/${pageContext.routeParams.id}`, {
    headers
  }).then((res) => res.json());
  return {
    currentPokemon: pokemon
  };
}
const import6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: data
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
    definedAtData: { "filePathToShowToUser": "/pages/pokemon/@id/+Page.tsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import5
    }
  },
  ["data"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/pokemon/@id/+data.ts", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import6
    }
  }
};
export {
  configValuesSerialized
};
