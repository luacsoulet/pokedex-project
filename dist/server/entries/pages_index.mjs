import import1 from "vike-react/__internal/integration/Loading";
import { onRenderHtml } from "vike-react/__internal/integration/onRenderHtml";
import { p as pokeball, u as useTeam, a as usePokemonContext, L as LayoutDefault, i as import4 } from "../chunks/chunk-BCbjKukg.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useCallback, useEffect } from "react";
import { useData } from "vike-react/useData";
import { P as Pokecard } from "../chunks/chunk-CIGEoySL.js";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { getTypes, SearchPokemon, fetchMorePokemon } from "../chunks/chunk-L5QhxvU3.js";
/* empty css                       */
/* empty css                       */
import "react-hot-toast";
/* empty css                       */
import "telefunc";
const Loader = () => {
  const numPokeballs = 4;
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "flex gap-4", children: [...Array(numPokeballs)].map((_, index) => /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { y: 0, rotateZ: 0 },
      animate: {
        y: [-10, 0],
        rotateZ: [0, 360]
      },
      transition: {
        y: {
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeOut",
          delay: index * 0.15
        },
        rotateZ: {
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }
      },
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transformStyle: "preserve-3d"
      },
      children: /* @__PURE__ */ jsx(
        "img",
        {
          src: pokeball,
          alt: "Loading...",
          className: "w-8 h-8 object-contain"
        }
      )
    },
    index
  )) }) });
};
const Gallery = ({
  data: data2,
  isLoading,
  hasFilters = false,
  setIsLoading
}) => {
  const { dispatch } = useTeam();
  const pokemonList = Array.isArray(data2) ? data2 : (data2 == null ? void 0 : data2.pokemonList) || [];
  const handleAddToTeam = (pokemon) => {
    dispatch({
      type: "ADD",
      payload: {
        id: pokemon.id,
        slug: pokemon.slug,
        isShiny: false,
        isFemale: false
      }
    });
  };
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center w-[80vw]", children: isLoading && pokemonList.length === 0 ? /* @__PURE__ */ jsx(Loader, {}) : /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-4 w-full justify-center", children: (pokemonList == null ? void 0 : pokemonList.length) > 0 ? pokemonList.map((pokemon, index) => {
    var _a, _b;
    return pokemon && pokemon.id && /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("a", { href: `/pokemon/${pokemon.slug}`, children: /* @__PURE__ */ jsx(
        Pokecard,
        {
          name: pokemon.name,
          image: (_b = (_a = pokemon.sprites) == null ? void 0 : _a.normal) == null ? void 0 : _b.male,
          id: pokemon.id,
          slug: pokemon.slug
        }
      ) }),
      /* @__PURE__ */ jsx(
        motion.button,
        {
          onClick: (e) => {
            e.preventDefault();
            handleAddToTeam(pokemon);
          },
          whileHover: { scale: 1.2 },
          whileTap: { scale: 0.9 },
          transition: { type: "spring", stiffness: 400, damping: 17 },
          className: "absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg leading-none shadow-lg hover:bg-blue-500 transition-colors z-10",
          children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faPlus })
        }
      )
    ] }, index);
  }) : /* @__PURE__ */ jsx("p", { children: "No results found" }) }) });
};
const SearchBar = ({
  value,
  onChange,
  placeholder = "Rechercher un Pokémon",
  types,
  selectedType,
  onTypeChange,
  onReset
}) => {
  const handleInputChange = (e) => {
    const newValue = e.target.value.toLowerCase();
    if (newValue === "") {
      onReset();
    } else {
      onChange(newValue);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-center", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        value,
        onChange: handleInputChange,
        placeholder,
        className: "px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg w-[210px] bg-gray-800 text-white placeholder-gray-400"
      }
    ),
    value.length > 0 && /* @__PURE__ */ jsxs(
      "select",
      {
        value: selectedType,
        onChange: onTypeChange,
        className: "px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg bg-gray-800 text-white",
        children: [
          /* @__PURE__ */ jsx("option", { value: "", children: "Type" }),
          types.map((type, index) => /* @__PURE__ */ jsx("option", { value: type.slug, children: type.name }, index))
        ]
      }
    ),
    value.length > 0 && selectedType && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onReset,
        className: "px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors shadow-lg",
        children: "Réinitialiser"
      }
    )
  ] });
};
const PageTitle = ({ children }) => /* @__PURE__ */ jsx(
  motion.h1,
  {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
    className: "text-4xl font-bold text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60",
    children
  }
);
const useInfiniteScroll = ({
  isLoading,
  isContextLoading,
  searchTerm,
  selectedType,
  pokemonList,
  setPokemonList,
  fetchMore,
  pageSize,
  maxItems = 1024
}) => {
  const [loading, setLoading] = useState(isLoading);
  const handleScroll = useCallback(async () => {
    if (loading || isContextLoading || searchTerm || selectedType || pokemonList.length >= maxItems) {
      return;
    }
    const container = document.getElementById("page-container");
    if (!container) return;
    const { scrollHeight, scrollTop, clientHeight } = container;
    if (scrollHeight - scrollTop - clientHeight <= 200) {
      setLoading(true);
      try {
        const currentLength = pokemonList.length;
        const newPokemon = await fetchMore(currentLength + 1, pageSize);
        if ((newPokemon == null ? void 0 : newPokemon.length) > 0) {
          setPokemonList((prevList) => {
            const newList = [...prevList];
            newPokemon.forEach((pokemon) => {
              if (!newList.some((p) => p.id === pokemon.id)) {
                newList.push(pokemon);
              }
            });
            return newList;
          });
        }
      } catch (error) {
        console.error("Erreur lors du chargement:", error);
      } finally {
        setLoading(false);
      }
    }
  }, [loading, isContextLoading, searchTerm, selectedType, pokemonList.length]);
  useEffect(() => {
    const container = document.getElementById("page-container");
    if (!container) return;
    const onScroll = () => {
      if (!loading && !isContextLoading) {
        handleScroll();
      }
    };
    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, [handleScroll, loading, isContextLoading]);
  return { loading };
};
function Page() {
  const data2 = useData();
  const { pokemonList, setPokemonList, isContextLoading, setIsContextLoading } = usePokemonContext();
  const [filteredData, setFilteredData] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const PAGE_SIZE = 60;
  useEffect(() => {
    if (pokemonList.length > 0) {
      setFilteredData(pokemonList);
    } else if (data2.pokemonList) {
      setPokemonList(data2.pokemonList);
      setFilteredData(data2.pokemonList);
    }
  }, [data2.pokemonList, pokemonList, setPokemonList]);
  useEffect(() => {
    const searchAndFilter = async () => {
      setIsLoading(true);
      try {
        if (searchTerm) {
          const searchResults = await SearchPokemon(searchTerm);
          if (selectedType && selectedType !== "Select a type") {
            setFilteredData(searchResults.filter(
              (pokemon) => {
                var _a;
                return (_a = pokemon.types) == null ? void 0 : _a.some((type) => type.slug === selectedType);
              }
            ));
          } else {
            setFilteredData(searchResults);
          }
        } else {
          setFilteredData(data2.pokemonList);
        }
      } catch (error) {
        console.error("Erreur lors de la recherche ou du filtrage:", error);
        setFilteredData([]);
      } finally {
        setIsLoading(false);
      }
    };
    searchAndFilter();
  }, [searchTerm, selectedType, data2.pokemonList]);
  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };
  useEffect(() => {
    getTypes().then((types2) => setTypes(types2));
  }, []);
  const resetFilters = () => {
    setSelectedType("");
    setFilteredData(data2.pokemonList);
    setSearchTerm("");
  };
  const { loading } = useInfiniteScroll({
    isLoading,
    isContextLoading,
    searchTerm,
    selectedType,
    pokemonList,
    setPokemonList,
    fetchMore: fetchMorePokemon,
    pageSize: PAGE_SIZE
  });
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 justify-right items-center", children: [
    /* @__PURE__ */ jsx(PageTitle, { children: "Pokédex" }),
    /* @__PURE__ */ jsx(
      SearchBar,
      {
        value: searchTerm,
        onChange: setSearchTerm,
        types,
        selectedType,
        onTypeChange: handleTypeChange,
        onReset: resetFilters
      }
    ),
    /* @__PURE__ */ jsx(
      Gallery,
      {
        data: searchTerm ? filteredData : pokemonList,
        isLoading: loading || isContextLoading,
        hasFilters: !!(searchTerm || selectedType),
        setIsLoading
      }
    ),
    (loading || isContextLoading) && /* @__PURE__ */ jsx(Loader, {})
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
  const pokemonList = await fetch(`${"https://pokedex.coda.memento-dev.fr"}/pokemon?limit=60&with=types`, {
    headers
  }).then((res) => res.json());
  return {
    pokemonList
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
    definedAtData: { "filePathToShowToUser": "/pages/index/+Page.tsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import5
    }
  },
  ["data"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/index/+data.tsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import6
    }
  }
};
export {
  configValuesSerialized
};
