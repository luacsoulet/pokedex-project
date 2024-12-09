import{c as v,r as j,j as e,i as P,o as w,L as z,a as A,b as D}from"../chunks/chunk-BwIAFvK8.js";import{u as U}from"../chunks/chunk-CN62VPwh.js";import{t as E}from"../chunks/chunk-Bnp35atX.js";/* empty css                      */import"../chunks/chunk-25N4ygma.js";/* empty css                      *//* empty css                      */function N(){var n,d,p,u,m,c,h,g;const s=U(),{state:x,dispatch:f}=v();console.log(s);const{current:t}=s.currentPokemon,[i,y]=j.useState(t.sprites.normal.male);if(!s||!s.currentPokemon||!s.currentPokemon.current)return e.jsx("div",{children:"Erreur : Pokémon introuvable ou problème de données."});const T=()=>{var o,l,r;const a=i===t.sprites.normal.female||i===((o=t.sprites.shiny)==null?void 0:o.female);f({type:"ADD",payload:{id:t.id,slug:t.slug,isShiny:i===((l=t.sprites.shiny)==null?void 0:l.male)||i===((r=t.sprites.shiny)==null?void 0:r.female),isFemale:a}})},b=[{type:"normal",gender:"male",label:"Normal ♂️",sprite:(d=(n=t.sprites)==null?void 0:n.normal)==null?void 0:d.male},{type:"normal",gender:"female",label:"Normal ♀️",sprite:(u=(p=t.sprites)==null?void 0:p.normal)==null?void 0:u.female},{type:"shiny",gender:"male",label:"Shiny ♂️",sprite:(c=(m=t.sprites)==null?void 0:m.shiny)==null?void 0:c.male},{type:"shiny",gender:"female",label:"Shiny ♀️",sprite:(g=(h=t.sprites)==null?void 0:h.shiny)==null?void 0:g.female}];console.log(x);const S=a=>{var l;const o=E.find(r=>r.slug===a.slug.toLowerCase());return((l=o==null?void 0:o.colors)==null?void 0:l[0])||(o==null?void 0:o.color)||"#4A5568"};return e.jsxs("div",{className:"p-8 rounded-lg bg-gray-800/50 backdrop-blur-sm shadow-xl max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text",children:t.name}),e.jsxs("div",{children:[e.jsx("img",{src:i,alt:t.name,className:"mx-auto mb-4 h-64 object-contain [image-rendering:pixelated]"}),e.jsx("div",{style:{display:"flex",gap:"10px",marginTop:"10px"},children:b.map(({type:a,gender:o,label:l,sprite:r})=>r&&e.jsx("button",{onClick:()=>y(r),className:`px-4 py-2 rounded-lg transition-colors ${i===r?"bg-blue-600 text-white":"bg-gray-700 text-gray-200 hover:bg-gray-600"}`,children:l},`${a}-${o}`))})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-semibold mt-8 mb-4 text-gray-200",children:"Types"}),e.jsx("ul",{className:"flex gap-2",children:t.types.map(a=>e.jsx("li",{className:"px-4 py-2 rounded-lg text-white",style:{backgroundColor:S(a)},children:a.name},a.slug))})]}),t.stats&&e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-semibold mt-8 mb-4 text-gray-200",children:"Statistiques"}),e.jsx("ul",{className:"grid grid-cols-2 gap-4",children:t.stats.map(a=>e.jsxs("li",{className:"flex justify-between items-center p-4 bg-gray-700 rounded-lg",children:[e.jsx("span",{className:"text-gray-300",children:a.name}),e.jsx("span",{className:"text-blue-400 font-semibold",children:a.base_stat})]},a.slug))})]}),e.jsx("button",{onClick:T,className:"mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors shadow-lg w-full",children:"Ajouter au team"})]})}const k=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"})),F={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},Loading:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/Loading",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:P}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:w}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},Layout:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/layouts/LayoutDefault.tsx",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"pointer-import",value:z}]},title:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+config.ts",fileExportPathToShowToUser:["default","title"]},valueSerialized:{type:"js-serialized",value:"My Vike App"}},onPageTransitionEnd:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+onPageTransitionEnd.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}},onPageTransitionStart:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+onPageTransitionStart.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:D}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/pokemon/@id/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}}};export{F as configValuesSerialized};
