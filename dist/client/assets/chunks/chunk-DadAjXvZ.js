import{j as L,m as st,g as Fn,R as ze}from"./chunk-BwIAFvK8.js";/* empty css              */import{p as jn,t as Ln}from"./chunk-DpUred2z.js";const js=t=>L.jsxs(st.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},whileHover:"hover",variants:{hover:{scale:1.05}},transition:{duration:.3},className:"relative p-4 rounded-xl bg-gray-800/80 backdrop-blur-sm border border-gray-700 shadow-lg hover:shadow-xl transition-all w-[200px] flex flex-col items-center gap-4",children:[L.jsxs("span",{className:"absolute top-2 left-2 text-sm font-mono text-gray-400",children:["#",t.id.toString().padStart(3,"0")]}),L.jsx(st.div,{className:"relative w-40 h-40 flex items-center justify-center",initial:{y:0,scale:1},animate:{y:0,scale:1},variants:{hover:{y:[0,-8,0],scale:1.05,transition:{y:{repeat:1/0,duration:2,ease:"easeInOut"},scale:{duration:.3}}}},transition:{type:"spring",stiffness:100,damping:15},children:t.image?L.jsx(st.img,{src:t.image,alt:t.name,className:"w-full h-full object-contain drop-shadow-lg [image-rendering:pixelated]"}):L.jsx("div",{className:"w-full h-full flex items-center justify-center bg-gray-700/50 rounded-lg",children:L.jsx("p",{className:"text-gray-400 text-sm",children:"Données manquantes"})})}),L.jsx(st.div,{className:"absolute bottom-16 w-24 h-2 bg-black/20 rounded-full blur-sm",style:{transformOrigin:"center"},initial:{scaleX:1},animate:{scaleX:1},variants:{hover:{scaleX:[1,.6,1],transition:{repeat:1/0,duration:2,ease:"easeInOut"}}},transition:{type:"spring",stiffness:100,damping:15}}),L.jsx("h2",{className:"text-lg font-semibold text-gray-200 mt-2",children:t.name})]});/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Rn(t,e,n){return(e=Dn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ae(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ae(Object(n),!0).forEach(function(a){Rn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Mn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Dn(t){var e=Mn(t,"string");return typeof e=="symbol"?e:e+""}const re=()=>{};let Gt={},Ue={},We=null,$e={mark:re,measure:re};try{typeof window<"u"&&(Gt=window),typeof document<"u"&&(Ue=document),typeof MutationObserver<"u"&&(We=MutationObserver),typeof performance<"u"&&($e=performance)}catch{}const{userAgent:se=""}=Gt.navigator||{},M=Gt,h=Ue,oe=We,ot=$e;M.document;const j=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",Ye=~se.indexOf("MSIE")||~se.indexOf("Trident/");var zn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Un=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,He={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Wn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Be=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],A="classic",mt="duotone",$n="sharp",Yn="sharp-duotone",Ge=[A,mt,$n,Yn],Hn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Bn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Gn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Xn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Vn=["fak","fa-kit","fakd","fa-kit-duotone"],ie={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},qn=["kit"],Kn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Jn=["fak","fakd"],Qn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},le={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},it={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ta=["fak","fa-kit","fakd","fa-kit-duotone"],ea={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},na={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},aa={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Et={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},ra=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Tt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Zn,...ra],sa=["solid","regular","light","thin","duotone","brands"],Xe=[1,2,3,4,5,6,7,8,9,10],oa=Xe.concat([11,12,13,14,15,16,17,18,19,20]),ia=[...Object.keys(aa),...sa,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",it.GROUP,it.SWAP_OPACITY,it.PRIMARY,it.SECONDARY].concat(Xe.map(t=>"".concat(t,"x"))).concat(oa.map(t=>"w-".concat(t))),la={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const _="___FONT_AWESOME___",It=16,Ve="fa",qe="svg-inline--fa",$="data-fa-i2svg",Nt="data-fa-pseudo-element",fa="data-fa-pseudo-element-pending",Xt="data-prefix",Vt="data-icon",fe="fontawesome-i2svg",ca="async",ua=["HTML","HEAD","STYLE","SCRIPT"],Ke=(()=>{try{return!0}catch{return!1}})();function at(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[A]}})}const Je=l({},He);Je[A]=l(l(l(l({},{"fa-duotone":"duotone"}),He[A]),ie.kit),ie["kit-duotone"]);const da=at(Je),Ct=l({},Xn);Ct[A]=l(l(l(l({},{duotone:"fad"}),Ct[A]),le.kit),le["kit-duotone"]);const ce=at(Ct),_t=l({},Et);_t[A]=l(l({},_t[A]),Qn.kit);const qt=at(_t),Ft=l({},na);Ft[A]=l(l({},Ft[A]),Kn.kit);at(Ft);const ma=zn,Qe="fa-layers-text",pa=Un,ga=l({},Hn);at(ga);const ha=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],vt=Wn,ba=[...qn,...ia],Q=M.FontAwesomeConfig||{};function ya(t){var e=h.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function va(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}h&&typeof h.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=va(ya(n));r!=null&&(Q[a]=r)});const Ze={styleDefault:"solid",familyDefault:A,cssPrefix:Ve,replacementClass:qe,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Q.familyPrefix&&(Q.cssPrefix=Q.familyPrefix);const V=l(l({},Ze),Q);V.autoReplaceSvg||(V.observeMutations=!1);const d={};Object.keys(Ze).forEach(t=>{Object.defineProperty(d,t,{enumerable:!0,set:function(e){V[t]=e,Z.forEach(n=>n(d))},get:function(){return V[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(t){V.cssPrefix=t,Z.forEach(e=>e(d))},get:function(){return V.cssPrefix}});M.FontAwesomeConfig=d;const Z=[];function xa(t){return Z.push(t),()=>{Z.splice(Z.indexOf(t),1)}}const R=It,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Aa(t){if(!t||!j)return;const e=h.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=h.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=s)}return h.head.insertBefore(e,a),t}const wa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function et(){let t=12,e="";for(;t-- >0;)e+=wa[Math.random()*62|0];return e}function q(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Kt(t){return t.classList?q(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function tn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Oa(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(tn(t[n]),'" '),"").trim()}function pt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Jt(t){return t.size!==I.size||t.x!==I.x||t.y!==I.y||t.rotate!==I.rotate||t.flipX||t.flipY}function Sa(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(i)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:f}}function Pa(t){let{transform:e,width:n=It,height:a=It,startCentered:r=!1}=t,s="";return r&&Ye?s+="translate(".concat(e.x/R-n/2,"em, ").concat(e.y/R-a/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/R,"em), calc(-50% + ").concat(e.y/R,"em)) "):s+="translate(".concat(e.x/R,"em, ").concat(e.y/R,"em) "),s+="scale(".concat(e.size/R*(e.flipX?-1:1),", ").concat(e.size/R*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var ka=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function en(){const t=Ve,e=qe,n=d.cssPrefix,a=d.replacementClass;let r=ka;if(n!==t||a!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(i,".".concat(a))}return r}let ue=!1;function xt(){d.autoAddCss&&!ue&&(Aa(en()),ue=!0)}var Ea={mixout(){return{dom:{css:en,insertCss:xt}}},hooks(){return{beforeDOMElementCreation(){xt()},beforeI2svg(){xt()}}}};const F=M||{};F[_]||(F[_]={});F[_].styles||(F[_].styles={});F[_].hooks||(F[_].hooks={});F[_].shims||(F[_].shims=[]);var N=F[_];const nn=[],an=function(){h.removeEventListener("DOMContentLoaded",an),ct=1,nn.map(t=>t())};let ct=!1;j&&(ct=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),ct||h.addEventListener("DOMContentLoaded",an));function Ta(t){j&&(ct?setTimeout(t,0):nn.push(t))}function rt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?tn(t):"<".concat(e," ").concat(Oa(n),">").concat(a.map(rt).join(""),"</").concat(e,">")}function de(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var At=function(e,n,a,r){var s=Object.keys(e),o=s.length,i=n,c,f,u;for(a===void 0?(c=1,u=e[s[0]]):(c=0,u=a);c<o;c++)f=s[c],u=i(u,e[f],f,e);return u};function Ia(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function jt(t){const e=Ia(t);return e.length===1?e[0].toString(16):null}function Na(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function me(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Lt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=me(e);typeof N.hooks.addPack=="function"&&!a?N.hooks.addPack(t,me(e)):N.styles[t]=l(l({},N.styles[t]||{}),r),t==="fas"&&Lt("fa",e)}const{styles:nt,shims:Ca}=N,rn=Object.keys(qt),_a=rn.reduce((t,e)=>(t[e]=Object.keys(qt[e]),t),{});let Qt=null,sn={},on={},ln={},fn={},cn={};function Fa(t){return~ba.indexOf(t)}function ja(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Fa(r)?r:null}const un=()=>{const t=a=>At(nt,(r,s,o)=>(r[o]=At(s,a,{}),r),{});sn=t((a,r,s)=>(r[3]&&(a[r[3]]=s),r[2]&&r[2].filter(i=>typeof i=="number").forEach(i=>{a[i.toString(16)]=s}),a)),on=t((a,r,s)=>(a[s]=s,r[2]&&r[2].filter(i=>typeof i=="string").forEach(i=>{a[i]=s}),a)),cn=t((a,r,s)=>{const o=r[2];return a[s]=s,o.forEach(i=>{a[i]=s}),a});const e="far"in nt||d.autoFetchSvg,n=At(Ca,(a,r)=>{const s=r[0];let o=r[1];const i=r[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:i}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:i}),a},{names:{},unicodes:{}});ln=n.names,fn=n.unicodes,Qt=gt(d.styleDefault,{family:d.familyDefault})};xa(t=>{Qt=gt(t.styleDefault,{family:d.familyDefault})});un();function Zt(t,e){return(sn[t]||{})[e]}function La(t,e){return(on[t]||{})[e]}function W(t,e){return(cn[t]||{})[e]}function dn(t){return ln[t]||{prefix:null,iconName:null}}function Ra(t){const e=fn[t],n=Zt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function D(){return Qt}const mn=()=>({prefix:null,iconName:null,rest:[]});function Ma(t){let e=A;const n=rn.reduce((a,r)=>(a[r]="".concat(d.cssPrefix,"-").concat(r),a),{});return Ge.forEach(a=>{(t.includes(n[a])||t.some(r=>_a[a].includes(r)))&&(e=a)}),e}function gt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=A}=e,a=da[n][t];if(n===mt&&!t)return"fad";const r=ce[n][t]||ce[n][a],s=t in N.styles?t:null;return r||s||null}function Da(t){let e=[],n=null;return t.forEach(a=>{const r=ja(d.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function pe(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function ht(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=Tt.concat(ta),s=pe(t.filter(p=>r.includes(p))),o=pe(t.filter(p=>!Tt.includes(p))),i=s.filter(p=>(a=p,!Be.includes(p))),[c=null]=i,f=Ma(s),u=l(l({},Da(o)),{},{prefix:gt(c,{family:f})});return l(l(l({},u),$a({values:t,family:f,styles:nt,config:d,canonical:u,givenPrefix:a})),za(n,a,u))}function za(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const s=e==="fa"?dn(r):{},o=W(a,r);return r=s.iconName||o||r,a=s.prefix||a,a==="far"&&!nt.far&&nt.fas&&!d.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Ua=Ge.filter(t=>t!==A||t!==mt),Wa=Object.keys(Et).filter(t=>t!==A).map(t=>Object.keys(Et[t])).flat();function $a(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:s={},config:o={}}=t,i=n===mt,c=e.includes("fa-duotone")||e.includes("fad"),f=o.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";if(!i&&(c||f||u)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Ua.includes(n)&&(Object.keys(s).find(m=>Wa.includes(m))||o.autoFetchSvg)){const m=Gn.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=W(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=D()||"fas"),a}class Ya{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]=l(l({},this.definitions[s]||{}),r[s]),Lt(s,r[s]);const o=qt[A][s];o&&Lt(o,r[s]),un()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:s,iconName:o,icon:i}=a[r],c=i[2];e[s]||(e[s]={}),c.length>0&&c.forEach(f=>{typeof f=="string"&&(e[s][f]=i)}),e[s][o]=i}),e}}let ge=[],B={};const X={},Ha=Object.keys(X);function Ba(t,e){let{mixoutsTo:n}=e;return ge=t,B={},Object.keys(X).forEach(a=>{Ha.indexOf(a)===-1&&delete X[a]}),ge.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=r[s][o]})}),a.hooks){const s=a.hooks();Object.keys(s).forEach(o=>{B[o]||(B[o]=[]),B[o].push(s[o])})}a.provides&&a.provides(X)}),n}function Rt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(B[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function Y(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(B[t]||[]).forEach(s=>{s.apply(null,n)})}function z(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return X[t]?X[t].apply(null,e):void 0}function Mt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||D();if(e)return e=W(n,e)||e,de(pn.definitions,n,e)||de(N.styles,n,e)}const pn=new Ya,Ga=()=>{d.autoReplaceSvg=!1,d.observeMutations=!1,Y("noAuto")},Xa={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(Y("beforeI2svg",t),z("pseudoElements2svg",t),z("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Ta(()=>{qa({autoReplaceSvgRoot:e}),Y("watch",t)})}},Va={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:W(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=gt(t[0]);return{prefix:n,iconName:W(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(d.cssPrefix,"-"))>-1||t.match(ma))){const e=ht(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||D(),iconName:W(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=D();return{prefix:e,iconName:W(e,t)||t}}}},S={noAuto:Ga,config:d,dom:Xa,parse:Va,library:pn,findIconDefinition:Mt,toHtml:rt},qa=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=h}=t;(Object.keys(N.styles).length>0||d.autoFetchSvg)&&j&&d.autoReplaceSvg&&S.dom.i2svg({node:e})};function bt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>rt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!j)return;const n=h.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Ka(t){let{children:e,main:n,mask:a,attributes:r,styles:s,transform:o}=t;if(Jt(o)&&n.found&&!a.found){const{width:i,height:c}=n,f={x:i/c/2,y:.5};r.style=pt(l(l({},s),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ja(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:o}),children:a}]}]}function te(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:s,symbol:o,title:i,maskId:c,titleId:f,extra:u,watchable:p=!1}=t,{width:m,height:b}=n.found?n:e,O=Jn.includes(a),k=[d.replacementClass,r?"".concat(d.cssPrefix,"-").concat(r):""].filter(E=>u.classes.indexOf(E)===-1).filter(E=>E!==""||!!E).concat(u.classes).join(" ");let y={children:[],attributes:l(l({},u.attributes),{},{"data-prefix":a,"data-icon":r,class:k,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(b)})};const x=O&&!~u.classes.indexOf("fa-fw")?{width:"".concat(m/b*16*.0625,"em")}:{};p&&(y.attributes[$]=""),i&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(f||et())},children:[i]}),delete y.attributes.title);const v=l(l({},y),{},{prefix:a,iconName:r,main:e,mask:n,maskId:c,transform:s,symbol:o,styles:l(l({},x),u.styles)}),{children:w,attributes:C}=n.found&&e.found?z("generateAbstractMask",v)||{children:[],attributes:{}}:z("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=w,v.attributes=C,o?Ja(v):Ka(v)}function he(t){const{content:e,width:n,height:a,transform:r,title:s,extra:o,watchable:i=!1}=t,c=l(l(l({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});i&&(c[$]="");const f=l({},o.styles);Jt(r)&&(f.transform=Pa({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const u=pt(f);u.length>0&&(c.style=u);const p=[];return p.push({tag:"span",attributes:c,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function Qa(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),s=pt(a.styles);s.length>0&&(r.style=s);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:wt}=N;function Dt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(vt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(vt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(vt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Za={found:!1,width:512,height:512};function tr(t,e){!Ke&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function zt(t,e){let n=e;return e==="fa"&&d.styleDefault!==null&&(e=D()),new Promise((a,r)=>{if(n==="fa"){const s=dn(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&wt[e]&&wt[e][t]){const s=wt[e][t];return a(Dt(s))}tr(t,e),a(l(l({},Za),{},{icon:d.showMissingIcons&&t?z("missingIconAbstract")||{}:{}}))})}const be=()=>{},Ut=d.measurePerformance&&ot&&ot.mark&&ot.measure?ot:{mark:be,measure:be},K='FA "6.7.1"',er=t=>(Ut.mark("".concat(K," ").concat(t," begins")),()=>gn(t)),gn=t=>{Ut.mark("".concat(K," ").concat(t," ends")),Ut.measure("".concat(K," ").concat(t),"".concat(K," ").concat(t," begins"),"".concat(K," ").concat(t," ends"))};var ee={begin:er,end:gn};const lt=()=>{};function ye(t){return typeof(t.getAttribute?t.getAttribute($):null)=="string"}function nr(t){const e=t.getAttribute?t.getAttribute(Xt):null,n=t.getAttribute?t.getAttribute(Vt):null;return e&&n}function ar(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function rr(){return d.autoReplaceSvg===!0?ft.replace:ft[d.autoReplaceSvg]||ft.replace}function sr(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function or(t){return h.createElement(t)}function hn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?sr:or}=e;if(typeof t=="string")return h.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){a.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){a.appendChild(hn(s,{ceFn:n}))}),a}function ir(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ft={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(hn(n),e)}),e.getAttribute($)===null&&d.keepOriginalSource){let n=h.createComment(ir(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Kt(e).indexOf(d.replacementClass))return ft.replace(t);const a=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,i)=>(i===d.replacementClass||i.match(a)?o.toSvg.push(i):o.toNode.push(i),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>rt(s)).join(`
`);e.setAttribute($,""),e.innerHTML=r}};function ve(t){t()}function bn(t,e){const n=typeof e=="function"?e:lt;if(t.length===0)n();else{let a=ve;d.mutateApproach===ca&&(a=M.requestAnimationFrame||ve),a(()=>{const r=rr(),s=ee.begin("mutate");t.map(r),s(),n()})}}let ne=!1;function yn(){ne=!0}function Wt(){ne=!1}let ut=null;function xe(t){if(!oe||!d.observeMutations)return;const{treeCallback:e=lt,nodeCallback:n=lt,pseudoElementsCallback:a=lt,observeMutationsRoot:r=h}=t;ut=new oe(s=>{if(ne)return;const o=D();q(s).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!ye(i.addedNodes[0])&&(d.searchPseudoElements&&a(i.target),e(i.target)),i.type==="attributes"&&i.target.parentNode&&d.searchPseudoElements&&a(i.target.parentNode),i.type==="attributes"&&ye(i.target)&&~ha.indexOf(i.attributeName))if(i.attributeName==="class"&&nr(i.target)){const{prefix:c,iconName:f}=ht(Kt(i.target));i.target.setAttribute(Xt,c||o),f&&i.target.setAttribute(Vt,f)}else ar(i.target)&&n(i.target)})}),j&&ut.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function lr(){ut&&ut.disconnect()}function fr(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const s=r.split(":"),o=s[0],i=s.slice(1);return o&&i.length>0&&(a[o]=i.join(":").trim()),a},{})),n}function cr(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=ht(Kt(t));return r.prefix||(r.prefix=D()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=La(r.prefix,t.innerText)||Zt(r.prefix,jt(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function ur(t){const e=q(t.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?e["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||et()):(e["aria-hidden"]="true",e.focusable="false")),e}function dr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ae(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=cr(t),s=ur(t),o=Rt("parseNodeAttributes",{},t);let i=e.styleParser?fr(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:i,attributes:s}},o)}const{styles:mr}=N;function vn(t){const e=d.autoReplaceSvg==="nest"?Ae(t,{styleParser:!1}):Ae(t);return~e.extra.classes.indexOf(Qe)?z("generateLayersText",t,e):z("generateSvgReplacementMutation",t,e)}function pr(){return[...Vn,...Tt]}function we(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();const n=h.documentElement.classList,a=u=>n.add("".concat(fe,"-").concat(u)),r=u=>n.remove("".concat(fe,"-").concat(u)),s=d.autoFetchSvg?pr():Be.concat(Object.keys(mr));s.includes("fa")||s.push("fa");const o=[".".concat(Qe,":not([").concat($,"])")].concat(s.map(u=>".".concat(u,":not([").concat($,"])"))).join(", ");if(o.length===0)return Promise.resolve();let i=[];try{i=q(t.querySelectorAll(o))}catch{}if(i.length>0)a("pending"),r("complete");else return Promise.resolve();const c=ee.begin("onTree"),f=i.reduce((u,p)=>{try{const m=vn(p);m&&u.push(m)}catch(m){Ke||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise((u,p)=>{Promise.all(f).then(m=>{bn(m,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),c(),u()})}).catch(m=>{c(),p(m)})})}function gr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;vn(t).then(n=>{n&&bn([n],e)})}function hr(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Mt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Mt(r||{})),t(a,l(l({},n),{},{mask:r}))}}const br=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,symbol:a=!1,mask:r=null,maskId:s=null,title:o=null,titleId:i=null,classes:c=[],attributes:f={},styles:u={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:b}=t;return bt(l({type:"icon"},t),()=>(Y("beforeDOMElementCreation",{iconDefinition:t,params:e}),d.autoA11y&&(o?f["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(i||et()):(f["aria-hidden"]="true",f.focusable="false")),te({icons:{main:Dt(b),mask:r?Dt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:l(l({},I),n),symbol:a,title:o,maskId:s,titleId:i,extra:{attributes:f,styles:u,classes:c}})))};var yr={mixout(){return{icon:hr(br)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=we,t.nodeCallback=gr,t}}},provides(t){t.i2svg=function(e){const{node:n=h,callback:a=()=>{}}=e;return we(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:s,prefix:o,transform:i,symbol:c,mask:f,maskId:u,extra:p}=n;return new Promise((m,b)=>{Promise.all([zt(a,o),f.iconName?zt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(O=>{let[k,y]=O;m([e,te({icons:{main:k,mask:y},prefix:o,iconName:a,transform:i,symbol:c,maskId:u,title:r,titleId:s,extra:p,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:s,styles:o}=e;const i=pt(o);i.length>0&&(a.style=i);let c;return Jt(s)&&(c=z("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},vr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return bt({type:"layer"},()=>{Y("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(s=>{a=a.concat(s.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},xr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:s={}}=e;return bt({type:"counter",content:t},()=>(Y("beforeDOMElementCreation",{content:t,params:e}),Qa({content:t.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(d.cssPrefix,"-layers-counter"),...a]}})))}}}},Ar={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,title:a=null,classes:r=[],attributes:s={},styles:o={}}=e;return bt({type:"text",content:t},()=>(Y("beforeDOMElementCreation",{content:t,params:e}),he({content:t,transform:l(l({},I),n),title:a,extra:{attributes:s,styles:o,classes:["".concat(d.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:s}=n;let o=null,i=null;if(Ye){const c=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/c,i=f.height/c}return d.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,he({content:e.innerHTML,width:o,height:i,transform:r,title:a,extra:s,watchable:!0})])}}};const wr=new RegExp('"',"ug"),Oe=[1105920,1112319],Se=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),Bn),la),ea),$t=Object.keys(Se).reduce((t,e)=>(t[e.toLowerCase()]=Se[e],t),{}),Or=Object.keys($t).reduce((t,e)=>{const n=$t[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Sr(t){const e=t.replace(wr,""),n=Na(e,0),a=n>=Oe[0]&&n<=Oe[1],r=e.length===2?e[0]===e[1]:!1;return{value:jt(r?e[0]:e),isSecondary:a||r}}function Pr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return($t[n]||{})[r]||Or[n]}function Pe(t,e){const n="".concat(fa).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const o=q(t.children).filter(m=>m.getAttribute(Nt)===e)[0],i=M.getComputedStyle(t,e),c=i.getPropertyValue("font-family"),f=c.match(pa),u=i.getPropertyValue("font-weight"),p=i.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&p!=="none"&&p!==""){const m=i.getPropertyValue("content");let b=Pr(c,u);const{value:O,isSecondary:k}=Sr(m),y=f[0].startsWith("FontAwesome");let x=Zt(b,O),v=x;if(y){const w=Ra(O);w.iconName&&w.prefix&&(x=w.iconName,b=w.prefix)}if(x&&!k&&(!o||o.getAttribute(Xt)!==b||o.getAttribute(Vt)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);const w=dr(),{extra:C}=w;C.attributes[Nt]=e,zt(x,b).then(E=>{const Cn=te(l(l({},w),{},{icons:{main:E,mask:mn()},prefix:b,iconName:v,extra:C,watchable:!0})),yt=h.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(yt,t.firstChild):t.appendChild(yt),yt.outerHTML=Cn.map(_n=>rt(_n)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function kr(t){return Promise.all([Pe(t,"::before"),Pe(t,"::after")])}function Er(t){return t.parentNode!==document.head&&!~ua.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Nt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ke(t){if(j)return new Promise((e,n)=>{const a=q(t.querySelectorAll("*")).filter(Er).map(kr),r=ee.begin("searchPseudoElements");yn(),Promise.all(a).then(()=>{r(),Wt(),e()}).catch(()=>{r(),Wt(),n()})})}var Tr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=ke,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=h}=e;d.searchPseudoElements&&ke(n)}}};let Ee=!1;var Ir={mixout(){return{dom:{unwatch(){yn(),Ee=!0}}}},hooks(){return{bootstrap(){xe(Rt("mutationObserverCallbacks",{}))},noAuto(){lr()},watch(t){const{observeMutationsRoot:e}=t;Ee?Wt():xe(Rt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Te=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),s=r[0];let o=r.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var Nr={mixout(){return{parse:{transform:t=>Te(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Te(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:s}=e;const o={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(i," ").concat(c," ").concat(f)},p={transform:"translate(".concat(s/2*-1," -256)")},m={outer:o,inner:u,path:p};return{tag:"g",attributes:l({},m.outer),children:[{tag:"g",attributes:l({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),m.path)}]}]}}}};const Ot={x:0,y:0,width:"100%",height:"100%"};function Ie(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Cr(t){return t.tag==="g"?t.children:[t]}var _r={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?ht(n.split(" ").map(r=>r.trim())):mn();return a.prefix||(a.prefix=D()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:s,maskId:o,transform:i}=e;const{width:c,icon:f}=r,{width:u,icon:p}=s,m=Sa({transform:i,containerWidth:u,iconWidth:c}),b={tag:"rect",attributes:l(l({},Ot),{},{fill:"white"})},O=f.children?{children:f.children.map(Ie)}:{},k={tag:"g",attributes:l({},m.inner),children:[Ie(l({tag:f.tag,attributes:l(l({},f.attributes),m.path)},O))]},y={tag:"g",attributes:l({},m.outer),children:[k]},x="mask-".concat(o||et()),v="clip-".concat(o||et()),w={tag:"mask",attributes:l(l({},Ot),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,y]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:Cr(p)},w]};return n.push(C,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(x,")")},Ot)}),{children:n,attributes:a}}}},Fr={provides(t){let e=!1;M.matchMedia&&(e=M.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=l(l({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},jr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Lr=[Ea,yr,vr,xr,Ar,Tr,Ir,Nr,_r,Fr,jr];Ba(Lr,{mixoutsTo:S});S.noAuto;S.config;S.library;S.dom;const Yt=S.parse;S.findIconDefinition;S.toHtml;const Rr=S.icon;S.layer;S.text;S.counter;var xn={exports:{}},St,Ne;function Mr(){if(Ne)return St;Ne=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return St=t,St}var Pt,Ce;function Dr(){if(Ce)return Pt;Ce=1;var t=Mr();function e(){}function n(){}return n.resetWarningCache=e,Pt=function(){function a(o,i,c,f,u,p){if(p!==t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}a.isRequired=a;function r(){return a}var s={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:r,element:a,elementType:a,instanceOf:r,node:a,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:e};return s.PropTypes=s,s},Pt}xn.exports=Dr()();var zr=xn.exports;const g=Fn(zr);function _e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_e(Object(n),!0).forEach(function(a){G(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_e(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function dt(t){"@babel/helpers - typeof";return dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dt(t)}function G(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ur(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,s;for(s=0;s<a.length;s++)r=a[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Wr(t,e){if(t==null)return{};var n=Ur(t,e),a,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)a=s[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Ht(t){return $r(t)||Yr(t)||Hr(t)||Br()}function $r(t){if(Array.isArray(t))return Bt(t)}function Yr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Hr(t,e){if(t){if(typeof t=="string")return Bt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bt(t,e)}}function Bt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Br(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,s=t.bounce,o=t.shake,i=t.flash,c=t.spin,f=t.spinPulse,u=t.spinReverse,p=t.pulse,m=t.fixedWidth,b=t.inverse,O=t.border,k=t.listItem,y=t.flip,x=t.size,v=t.rotation,w=t.pull,C=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":s,"fa-shake":o,"fa-flash":i,"fa-spin":c,"fa-spin-reverse":u,"fa-spin-pulse":f,"fa-pulse":p,"fa-fw":m,"fa-inverse":b,"fa-border":O,"fa-li":k,"fa-flip":y===!0,"fa-flip-horizontal":y==="horizontal"||y==="both","fa-flip-vertical":y==="vertical"||y==="both"},G(e,"fa-".concat(x),typeof x<"u"&&x!==null),G(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),G(e,"fa-pull-".concat(w),typeof w<"u"&&w!==null),G(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(C).map(function(E){return C[E]?E:null}).filter(function(E){return E})}function Xr(t){return t=t-0,t===t}function An(t){return Xr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Vr=["style"];function qr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Kr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=An(n.slice(0,a)),s=n.slice(a+1).trim();return r.startsWith("webkit")?e[qr(r)]=s:e[r]=s,e},{})}function wn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(c){return wn(t,c)}),r=Object.keys(e.attributes||{}).reduce(function(c,f){var u=e.attributes[f];switch(f){case"class":c.attrs.className=u,delete e.attributes.class;break;case"style":c.attrs.style=Kr(u);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?c.attrs[f.toLowerCase()]=u:c.attrs[An(f)]=u}return c},{attrs:{}}),s=n.style,o=s===void 0?{}:s,i=Wr(n,Vr);return r.attrs.style=T(T({},r.attrs.style),o),t.apply(void 0,[e.tag,T(T({},r.attrs),i)].concat(Ht(a)))}var On=!1;try{On=!0}catch{}function Jr(){if(!On&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Fe(t){if(t&&dt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Yt.icon)return Yt.icon(t);if(t===null)return null;if(t&&dt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function kt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?G({},t,e):{}}var je={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Sn=ze.forwardRef(function(t,e){var n=T(T({},je),t),a=n.icon,r=n.mask,s=n.symbol,o=n.className,i=n.title,c=n.titleId,f=n.maskId,u=Fe(a),p=kt("classes",[].concat(Ht(Gr(n)),Ht((o||"").split(" ")))),m=kt("transform",typeof n.transform=="string"?Yt.transform(n.transform):n.transform),b=kt("mask",Fe(r)),O=Rr(u,T(T(T(T({},p),m),b),{},{symbol:s,title:i,titleId:c,maskId:f}));if(!O)return Jr("Could not find icon",u),null;var k=O.abstract,y={ref:e};return Object.keys(n).forEach(function(x){je.hasOwnProperty(x)||(y[x]=n[x])}),Qr(k[0],y)});Sn.displayName="FontAwesomeIcon";Sn.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool};var Qr=wn.bind(null,ze.createElement);/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Ls={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},Rs={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]};function Pn(t,e){const n=new Error(t);return n.stack=Zr(n.stack,e),n}function Zr(t,e){if(!t)return t;const n=es(t);let a=0;return n.filter(s=>s.includes(" (internal/")||s.includes(" (node:internal")?!1:a<e&&ts(s)?(a++,!1):!0).join(`
`)}function ts(t){return t.startsWith("    at ")}function es(t){return t.split(/\r?\n/)}function ns(t,e){const n=globalThis[Le]=globalThis[Le]||{};return n[t]=n[t]||e}const Le="_telefunc",as="0.1.82",rs={projectName:"Telefunc",projectVersion:as},kn=`[telefunc@${rs.projectVersion}]`,ss=`${kn}[Bug]`,os=`${kn}[Wrong Usage]`,En=2;function U(t,e){if(t)return;throw Pn([ss,"You stumbled upon a Telefunc bug. Go to https://github.com/brillout/telefunc/issues/new and copy-paste this error. A maintainer will fix the bug (usually under 24 hours).",""].join(" "),En)}function P(t,e){if(t)return;const n=e.startsWith("[")?"":" ";throw Pn(`${os}${n}${e}`,En)}ns("assert.ts",{alreadyLogged:new Set});function is(){const t=fs();return U(t===!ls()),t}function ls(){return!!(typeof process<"u"&&process&&process.versions&&process.versions.node)}function fs(){return typeof window<"u"}function cs(t){return typeof t=="object"&&t!==null}function tt(t,e){Object.assign(t,e)}function us(t){return t.charAt(0).toLowerCase()+t.slice(1)}function ds(t){return t instanceof Function||typeof t=="function"}function ms(t,e,n="unknown"){if(!(typeof t=="object"&&t!==null&&e in t))return!1;if(n==="unknown")return!0;const r=t[e];return n==="array"?Array.isArray(r):n==="string[]"?Array.isArray(r)&&r.every(s=>typeof s=="string"):n==="function"?ds(r):Array.isArray(n)?typeof r=="string"&&n.includes(r):n==="null"?r===null:n==="true"?r===!0:typeof r===n}const Re=new Proxy({},{set:gs});function ps(){var t;return{httpHeaders:(t=Re.httpHeaders)!==null&&t!==void 0?t:null,telefuncUrl:Re.telefuncUrl||"/_telefunc"}}function gs(t,e,n){if(e==="telefuncUrl"){P(typeof n=="string","config.telefuncUrl should be a string");const a=r=>/^\d/.test(r);P(n.startsWith("/")||n.startsWith("http")||a(n),`config.telefuncUrl (client-side) is '${n}' but it should be one of the following: a URL pathname (such as '/_telefunc'), a URL with origin (such as 'https://example.org/_telefunc'), or an IP address (such as '192.158.1.38') — see https://telefunc.com/telefuncUrl`),t[e]=n}else e==="httpHeaders"?(P(typeof n=="object"&&n!==null&&Object.values(n).every(a=>typeof a=="string"),"`config.httpHeaders` should be an object of strings"),t[e]=n):P(!1,`Unknown config.${e}`);return!0}function hs(t){(window.__telefunc_errorListeners||[]).forEach(e=>{e(t)})}const H="POST",bs=200,Tn=403,ys=500,vs=400;async function xs(t){let e;try{e=await fetch(t.telefuncUrl,{method:H,body:t.httpRequestBody,credentials:"same-origin",headers:{...t.httpHeaders,"Content-Type":"text/plain"}})}catch{const r=new Error("No Server Connection");throw tt(r,{isConnectionError:!0}),r}const n=e.status;if(n===bs){const{ret:a}=await Me(e,t);return{telefunctionReturn:a}}else if(n===Tn){const{ret:a}=await Me(e,t),r=a,s=new Error(`Aborted telefunction call ${t.telefunctionName}() (${t.telefuncFilePath}).`);throw tt(s,{isAbort:!0,abortValue:r}),hs(s),s}else if(n===ys){const a=await e.text(),r="Internal Server Error";throw P(a===r,J({reason:"an HTTP response body that Telefunc never generates",method:H,callContext:t})),new Error(r)}else if(n===vs){const a=await e.text();P(a==="Invalid Telefunc Request",J({reason:"an HTTP response body that Telefunc never generates",method:H,callContext:t})),P(!1,"Try again. You may need to reload the page. (The client and server are/was out-of-sync.)")}else P(n!==404,J({reason:"a 404 HTTP response",method:H,isNotInstalled:!0,callContext:t})),P(!1,J({reason:`a status code \`${n}\` which Telefunc never uses`,method:H,callContext:t}))}async function Me(t,e){const n=await t.text(),a=jn(n);P(cs(a)&&"ret"in a,J({reason:"an HTTP response body that Telefunc never generates",method:H,callContext:e})),U(t.status!==Tn||"abort"in a);const{ret:r}=a;return{ret:r}}function J({reason:t,callContext:e,method:n,isNotInstalled:a}){let r=["Telefunc doesn't seem to be "];return a||r.push("(properly) "),r.push("installed on your server"),t&&r.push(`: the HTTP ${n} \`${e.telefuncUrl}\` request returned `,t),r.push(", see https://telefunc.com/install"),r.join("")}function As(t){return typeof t=="object"&&t!==null&&String(t.$$typeof)==="Symbol(react.element)"}function ws(t){return t instanceof Function||typeof t=="function"}function Os(t){return!(typeof t!="object"||t===null||Array.isArray(t))}function Ss(t){const e=new WeakMap;return function(n,a){const s=[...e.get(this)??[]];if(n!==""){const o=Array.isArray(this)?parseInt(n,10):n;s.push(o)}return Ps(a)&&e.set(a,s),t.call(this,n,a,s)}}function Ps(t){return t===Object(t)}function ks(t,{forbidReactElements:e,space:n,valueName:a,sortObjectKeys:r,replacer:s}={}){const o=c=>JSON.stringify(c,Ss(i),n);return o(t);function i(c,f,u){{const m=s==null?void 0:s.call(this,c,f);if(m)return m.replacement}if(e&&As(f))throw De({value:f,valueType:"React element",path:u,rootValueName:a});if(ws(f)){const m=f.name;throw De({value:f,valueType:"function",path:u,rootValueName:a,problematicValueName:u.length===0?m:void 0})}const p=this[c];for(const{is:m,serialize:b}of Ln.slice().reverse())if(m(p))return b(p,o);if(r&&Os(f)){const m={};Object.keys(f).sort().forEach(b=>{m[b]=f[b]}),f=m}return f}}function De({value:t,valueType:e,path:n,rootValueName:a,problematicValueName:r}){const s=Ts({path:n,rootValueName:a,problematicValueName:r}),o=`cannot serialize ${s} because it's a ${e}`,i=new Error(`[@brillout/json-serializer](https://github.com/brillout/json-serializer) ${o}.`),c=In(n,!0),f={[Es]:!0,messageCore:o,value:t,path:n,pathString:c,subjectName:s};return Object.assign(i,f),i}const Es="_isJsonSerializerError";function Ts({path:t,rootValueName:e,problematicValueName:n}){const a=In(t,!e);let r;return a?(n?r=n+" at ":r="",r=r+(e||"")+a):r=e||n||"value",r}function In(t,e){return t.map((a,r)=>typeof a=="number"?`[${a}]`:r===0&&e&&Nn(a)?a:Is(a)).join("")}function Is(t){return typeof t=="string"&&Nn(t)?`.${t}`:`[${JSON.stringify(t)}]`}function Nn(t){return/^[a-z0-9\$_]+$/i.test(t)}function Ns(t){const e={file:t.telefuncFilePath,name:t.telefunctionName,args:t.telefunctionArgs};U(typeof t.telefuncFilePath=="string"),U(typeof t.telefunctionName=="string"),U(Array.isArray(t.telefunctionArgs));let n;try{n=ks(e,{forbidReactElements:!0})}catch(a){U(ms(a,"message","string")),P(!1,[`Cannot serialize arguments for telefunction ${t.telefunctionName}() (${t.telefuncFilePath}).`,"Make sure that the arguments pass to telefunction calls are always serializable.",`Serialization error: ${us(a.message)}`].join(" "))}return U(n),n}async function Ms(t,e,n){P(is(),"The Telefunc Client is meant to be run only in the browser.");const a={};tt(a,{telefuncFilePath:t,telefunctionName:e,telefunctionArgs:n}),tt(a,ps());{const s=Ns(a);tt(a,{httpRequestBody:s})}const{telefunctionReturn:r}=await xs(a);return r}export{Sn as F,js as P,Ls as a,Rs as f,Ms as r};
