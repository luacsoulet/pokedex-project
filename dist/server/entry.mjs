import { setImportBuildGetters } from "vike/__internal/loadImportBuild";
import { setTelefuncLoaders } from "telefunc/__internal/loadBuild";
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const pageConfigsSerialized = [
  {
    pageId: "/pages/_error",
    isErrorPage: true,
    routeFilesystem: void 0,
    loadConfigValuesAll: () => import("./entries/pages_error.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/", "definedBy": "/pages/index/" },
    loadConfigValuesAll: () => import("./entries/pages_index.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/pokemon/@id",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/pokemon/@id", "definedBy": "/pages/pokemon/@id/" },
    loadConfigValuesAll: () => import("./entries/pages_pokemon_-id.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/team",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/team", "definedBy": "/pages/team/" },
    loadConfigValuesAll: () => import("./entries/pages_team.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  }
];
const pageConfigGlobalSerialized = {
  configValuesSerialized: {}
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const pageFiles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
const telefuncFilesGlob = /* @__PURE__ */ Object.assign({ "/pages/index/SearchPokemon.telefunc.ts": () => import("./chunks/chunk-L5QhxvU3.js"), "/pages/team/TeamList.telefunc.ts": () => import("./chunks/chunk-CXLj-_Cc.js") });
const telefuncFiles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  telefuncFilesGlob
}, Symbol.toStringTag, { value: "Module" }));
{
  const assetsManifest = {
  "_chunk-!~{006}~.js": {
    "file": "assets/static/layouts_style-b34a8e57.a91n6qlS.css",
    "src": "_chunk-!~{006}~.js"
  },
  "_chunk-!~{007}~.js": {
    "file": "assets/static/layouts_tailwind-00e65532.DNYZC4XB.css",
    "src": "_chunk-!~{007}~.js"
  },
  "_chunk-!~{008}~.js": {
    "file": "assets/static/styles_pokecard-57fdc4c3.CT_qCgmN.css",
    "src": "_chunk-!~{008}~.js"
  },
  "_chunk-!~{009}~.js": {
    "file": "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
    "src": "_chunk-!~{009}~.js"
  },
  "_chunk-25N4ygma.js": {
    "file": "assets/chunks/chunk-25N4ygma.js",
    "name": "executeHook"
  },
  "_chunk-Bnp35atX.js": {
    "file": "assets/chunks/chunk-Bnp35atX.js",
    "name": "Energy",
    "imports": [
      "_chunk-BwIAFvK8.js"
    ]
  },
  "_chunk-BwIAFvK8.js": {
    "file": "assets/chunks/chunk-BwIAFvK8.js",
    "name": "_onPageTransitionStart",
    "imports": [
      "_chunk-25N4ygma.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
      "assets/static/layouts_style-b34a8e57.a91n6qlS.css",
      "assets/static/layouts_tailwind-00e65532.DNYZC4XB.css"
    ],
    "assets": [
      "assets/static/pokeball.BTZOIN1e.png"
    ]
  },
  "_chunk-CN62VPwh.js": {
    "file": "assets/chunks/chunk-CN62VPwh.js",
    "name": "useData",
    "imports": [
      "_chunk-BwIAFvK8.js"
    ]
  },
  "_chunk-DadAjXvZ.js": {
    "file": "assets/chunks/chunk-DadAjXvZ.js",
    "name": "remoteTelefunctionCall",
    "imports": [
      "_chunk-BwIAFvK8.js",
      "_chunk-DpUred2z.js"
    ],
    "css": [
      "assets/static/styles_pokecard-57fdc4c3.CT_qCgmN.css"
    ]
  },
  "_chunk-DpUred2z.js": {
    "file": "assets/chunks/chunk-DpUred2z.js",
    "name": "parse"
  },
  "assets/pokeball.png": {
    "file": "assets/static/pokeball.BTZOIN1e.png",
    "src": "assets/pokeball.png"
  },
  "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js": {
    "file": "assets/entries/entry-client-routing.D18NEAxz.js",
    "name": "entries/entry-client-routing",
    "src": "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js",
    "isEntry": true,
    "imports": [
      "_chunk-25N4ygma.js",
      "_chunk-DpUred2z.js"
    ],
    "dynamicImports": [
      "virtual:vike:pageConfigValuesAll:client:/pages/_error",
      "virtual:vike:pageConfigValuesAll:client:/pages/index",
      "virtual:vike:pageConfigValuesAll:client:/pages/pokemon/@id",
      "virtual:vike:pageConfigValuesAll:client:/pages/team"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/_error": {
    "file": "assets/entries/pages_error.CL_fcOay.js",
    "name": "entries/pages/_error",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/_error",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-BwIAFvK8.js",
      "_chunk-25N4ygma.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
      "assets/static/layouts_style-b34a8e57.a91n6qlS.css",
      "assets/static/layouts_tailwind-00e65532.DNYZC4XB.css"
    ],
    "assets": [
      "assets/static/logo.DLJJsk-H.svg"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/index": {
    "file": "assets/entries/pages_index.Bthv9kt_.js",
    "name": "entries/pages/index",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-BwIAFvK8.js",
      "_chunk-CN62VPwh.js",
      "_chunk-DadAjXvZ.js",
      "_chunk-25N4ygma.js",
      "_chunk-DpUred2z.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
      "assets/static/layouts_style-b34a8e57.a91n6qlS.css",
      "assets/static/layouts_tailwind-00e65532.DNYZC4XB.css",
      "assets/static/styles_pokecard-57fdc4c3.CT_qCgmN.css"
    ],
    "assets": [
      "assets/static/logo.DLJJsk-H.svg"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/pokemon/@id": {
    "file": "assets/entries/pages_pokemon_-id.Zq9vqyFu.js",
    "name": "entries/pages/pokemon/@id",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/pokemon/@id",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-BwIAFvK8.js",
      "_chunk-CN62VPwh.js",
      "_chunk-Bnp35atX.js",
      "_chunk-25N4ygma.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
      "assets/static/layouts_style-b34a8e57.a91n6qlS.css",
      "assets/static/layouts_tailwind-00e65532.DNYZC4XB.css"
    ],
    "assets": [
      "assets/static/logo.DLJJsk-H.svg"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/team": {
    "file": "assets/entries/pages_team.C1iczx5E.js",
    "name": "entries/pages/team",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/team",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-BwIAFvK8.js",
      "_chunk-DadAjXvZ.js",
      "_chunk-Bnp35atX.js",
      "_chunk-25N4ygma.js",
      "_chunk-DpUred2z.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
      "assets/static/layouts_style-b34a8e57.a91n6qlS.css",
      "assets/static/layouts_tailwind-00e65532.DNYZC4XB.css",
      "assets/static/styles_pokecard-57fdc4c3.CT_qCgmN.css"
    ],
    "assets": [
      "assets/static/logo.DLJJsk-H.svg"
    ]
  }
};
  const pluginManifest = {
    "version": "0.4.206",
    "usesClientRouter": false,
    "baseServer": "/",
    "baseAssets": "/",
    "includeAssetsImportedByServer": true,
    "redirects": {},
    "trailingSlash": false,
    "disableUrlNormalization": false
  };
  setImportBuildGetters({
    pageFiles: () => pageFiles,
    getAssetsManifest: () => assetsManifest,
    pluginManifest: () => pluginManifest
  });
}
setTelefuncLoaders({
  loadTelefuncFiles: () => telefuncFiles,
  loadManifest: () => ({
    "version": "0.1.82",
    "config": {}
  })
});
