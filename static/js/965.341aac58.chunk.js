"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[965],{35300:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var a=n(7552),r=n(503),i=n.n(r),o=n(75785),l=n(28055),s=n(36441);const c=(0,o.n9)()((e=>({field:{display:"flex",flexWrap:"wrap"},fieldSubvalue:{wordBreak:"break-word",maxHeight:300,padding:e.spacing(.5),border:`1px solid ${e.palette.action.selected}`,boxSizing:"border-box",overflow:"auto"}})));function d({name:e,value:t,description:n,prefix:r=[]}){const{classes:o}=c();return 1===t.length?i()(t[0])?a.createElement(N,{attributes:t[0],prefix:[...r,e]}):a.createElement("div",{className:o.field},a.createElement(s.A,{prefix:r,description:n,name:e}),a.createElement(l.A,{value:t[0]})):t.every((e=>i()(e)))?a.createElement(a.Fragment,null,t.map(((t,n)=>a.createElement(N,{key:`${JSON.stringify(t)}-${n}`,attributes:t,prefix:[...r,`${e}-${n}`]})))):a.createElement("div",{className:o.field},a.createElement(s.A,{prefix:r,description:n,name:e}),t.map(((e,t)=>a.createElement("div",{key:`${JSON.stringify(e)}-${t}`,className:o.fieldSubvalue},a.createElement(l.A,{value:e})))))}var m=n(33371),f=n(32808),u=n(36715),p=n(28237),g=n(76157),b=n(49823),E=n(99546);const v=(0,o.n9)()((e=>({margin:{marginBottom:e.spacing(4)},cell:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}})));function h({value:e,prefix:t,name:n}){const{classes:r}=v(),[i,o]=(0,a.useState)(!1),l=Object.keys(e[0]).sort(),c=new Set(l),d=Object.entries(e).map((([e,t])=>{const{id:n,...a}=t;return{id:e,identifier:n,...a}}));for(const t of e)for(const e of Object.keys(t))c.add(e);let h;c.has("id")?(c.delete("id"),h=["identifier",...c]):h=[...c];const x=h.map((e=>(0,E.measureGridWidth)(d.map((t=>t[e])))));return c.size<l.length+5?a.createElement("div",{className:r.margin},a.createElement(s.A,{prefix:t,name:n}),a.createElement(m.A,{control:a.createElement(f.A,{checked:i,onChange:e=>{o(e.target.checked)}}),label:a.createElement(u.A,{variant:"body2"},"Show options")}),a.createElement("div",{style:{display:"flex",flexDirection:"column"}},a.createElement(p.z,{disableRowSelectionOnClick:!0,rows:d,rowHeight:20,columnHeaderHeight:35,hideFooter:d.length<25,slots:{toolbar:i?g.O:null},slotProps:{toolbar:{printOptions:{disableToolbarButton:!0}}},columns:h.map(((e,t)=>({field:e,renderCell:e=>{const t=e.value;return a.createElement("div",{className:r.cell},a.createElement(b.SanitizedHTML,{html:(0,E.getStr)(t||"")}))},width:x[t]})))}))):null}var x=n(32106);const y=(0,o.n9)()({field:{display:"flex",flexWrap:"wrap"}});function w({value:e,prefix:t,name:n}){const{classes:r}=y(),{uri:i,baseUri:o=""}=e;let c;try{c=new URL(i,o).href}catch(e){c=i}return a.createElement("div",{className:r.field},a.createElement(s.A,{prefix:t,name:n}),a.createElement(l.A,{value:c}))}var k=n(1178);function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},A.apply(null,arguments)}const S=170,C=["__jbrowsefmt","length","position","subfeatures","uniqueId","exonFrames","parentId","thickStart","thickEnd"];function N(e){const{attributes:t,omit:n=[],omitSingleLevel:r=[],descriptions:o,formatter:l=e=>e,hideUris:s,prefix:c=[]}=e,m=new Set([...n,...C,...r]),{__jbrowsefmt:f,...u}=t,p={...u,...f},g=(0,k.kb)(Object.entries(p).filter((([e,t])=>void 0!==t&&!m.has(e))),c);return a.createElement(a.Fragment,null,Object.entries(p).filter((([e,t])=>void 0!==t&&!m.has(e))).map((([t,n])=>{const r=(0,k.wh)([...c,t],o);if(Array.isArray(n))return n.length>1&&n.every((e=>i()(e)))?a.createElement(h,{key:t,name:t,prefix:c,value:n}):a.createElement(d,{key:t,name:t,value:n,description:r,prefix:c});if(i()(n)){const{omitSingleLevel:r,...i}=e;return(0,E.isUriLocation)(n)?s?null:a.createElement(w,{key:t,name:t,prefix:c,value:n}):a.createElement(N,A({key:t},i,{attributes:n,descriptions:o,prefix:[...c,t]}))}return a.createElement(x.A,{key:t,name:t,value:l(n,t),description:r,prefix:c,width:Math.min(g,S)})})))}},87083:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(7552),r=n(7720),i=n(63011),o=n(41578),l=n(36715),s=n(63165);const c=(0,n(75785).n9)()((e=>({expansionPanelDetails:{display:"block",padding:e.spacing(1)},icon:{color:e.palette.tertiary.contrastText||"#fff"}})));function d({children:e,title:t,defaultExpanded:n=!0}){const{classes:d}=c();return a.createElement(i.A,{defaultExpanded:n},a.createElement(o.A,{expandIcon:a.createElement(r.A,{className:d.icon})},a.createElement(l.A,{variant:"button"},t)),a.createElement(s.A,{className:d.expansionPanelDetails},e))}},28055:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(7552),r=n(87731),i=n(503),o=n.n(i),l=n(75785),s=n(49823);const c=(0,l.n9)()((e=>({fieldValue:{wordBreak:"break-word",maxHeight:300,fontSize:12,padding:e.spacing(.5),overflow:"auto"}})));function d({value:e}){const{classes:t}=c(),n=/^https?:\/\//.exec(`${e}`);return a.createElement("div",{className:t.fieldValue},a.isValidElement(e)?e:n?a.createElement(r.A,{href:`${e}`},`${e}`):a.createElement(s.SanitizedHTML,{html:o()(e)?JSON.stringify(e):String(e)}))}},36441:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(7552),r=n(89003);const i=(0,n(75785).n9)()((e=>({fieldDescription:{"&:hover":{background:"dark"===e.palette.mode?"#e65100":"yellow"}},fieldName:{wordBreak:"break-all",minWidth:90,borderBottom:"1px solid #0003",fontSize:12,background:e.palette.action.disabledBackground,marginRight:e.spacing(1),padding:e.spacing(.5)}})));function o({description:e,name:t,width:n,prefix:o=[]}){const{classes:l,cx:s}=i(),c=[...o,t].join(".");return e?a.createElement(r.A,{title:e,placement:"left"},a.createElement("div",{className:s(l.fieldDescription,l.fieldName)},c)):a.createElement("div",{className:l.fieldName,style:{width:n}},c)}},32106:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(7552),r=n(75785),i=n(28055),o=n(36441);const l=(0,r.n9)()({field:{display:"flex",flexWrap:"wrap"}});function s({name:e,value:t,description:n,prefix:r,width:s}){const{classes:c}=l();return null!=t?a.createElement("div",{className:c.field},a.createElement(o.A,{prefix:r,description:n,name:e,width:s}),a.createElement(i.A,{value:t})):null}},1178:(e,t,n)=>{n.d(t,{Im:()=>l,KS:()=>s,kb:()=>c,wh:()=>d});var a=n(503),r=n.n(a),i=n(99546),o=n(373);function l(e){return 0===Object.keys(e).length}function s(e,t,n){return[(0,o.SX)(`${e||t||""}`),`${n}`].filter((e=>!!e)).join(" - ")}function c(e,t){return Math.ceil((0,i.max)(e.map((e=>(0,i.measureText)([...t,e[0]].join("."),12)))))+10}function d(e,t={}){let n=t;return e.forEach((e=>{r()(n)&&(n=n[e])})),"string"==typeof n?n:r()(n)&&"string"==typeof n.Description?n.Description:void 0}},40965:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var a=n(7552),r=n(92562),i=n(99546),o=n(91468),l=n(35300),s=n(87083),c=n(68584),d=n(5401),m=n(31409),f=n.n(m),u=n(68446),p=n(75785),g=n(49823);function b({config:e}){const[t,n]=(0,a.useState)(),[r,o]=(0,a.useState)(),d=(0,i.getSession)(e),{rpcManager:m}=d;(0,a.useEffect)((()=>{(async()=>{try{const t=(0,c.readConfObject)(e,"adapter"),n=await m.call(e.trackId,"CoreGetInfo",{adapterConfig:t});o(n)}catch(e){console.error(e),n(e)}})()}),[e,m]);const f="string"==typeof r?{header:`<pre>${r.replaceAll("<","&lt;").replaceAll(">","&gt;")}</pre>`}:r||{};return a.createElement(s.default,{title:"File info"},t?a.createElement(g.ErrorMessage,{error:t}):void 0===r?a.createElement(g.LoadingEllipses,{message:"Loading file data"}):a.createElement(l.default,{attributes:f}))}var E=n(29499);const v=(0,p.n9)()((e=>({container:{minWidth:800},refNames:{maxHeight:300,overflow:"auto",flexGrow:1,background:e.palette.background.default}}))),h=(0,u.observer)((function({config:e,onClose:t}){const{classes:n}=v(),[r,l]=(0,a.useState)(),[s,m]=(0,a.useState)(),[u,p]=(0,a.useState)(!1),{rpcManager:b}=(0,i.getSession)(e);(0,a.useEffect)((()=>{(async()=>{try{const t=await Promise.all([...new Set((0,o.getConfAssemblyNames)(e))].map((async t=>{const n=(0,c.readConfObject)(e,"adapter");return[t,await b.call(e.trackId,"CoreGetRefNames",{adapterConfig:n,regions:[{assemblyName:t}]})]})));m(Object.fromEntries(t))}catch(e){console.error(e),l(e)}})()}),[e,b]);const h=s?Object.entries(s):[],x=h.flatMap((([e,t])=>[`--- ${e} ---`,...t.slice(0,1e4),t.length>1e4?`\nToo many refNames to show in browser for ${e}, use "Copy ref names" button to copy to clipboard`:""])).filter((e=>!!e)).join("\n");return a.createElement(g.Dialog,{open:!0,title:"Reference sequence names used in track",onClose:t,maxWidth:"xl"},a.createElement(E.A,{className:n.container},r?a.createElement(g.ErrorMessage,{error:r}):void 0===s?a.createElement(g.LoadingEllipses,{message:"Loading refNames"}):a.createElement(a.Fragment,null,a.createElement(d.A,{variant:"contained",onClick:()=>{f()(h.flatMap((([e,t])=>[`--- ${e} ---`,...t])).filter((e=>!!e)).join("\n")),p(!0),setTimeout((()=>{p(!1)}),1e3)}},u?"Copied to clipboard!":"Copy ref names"),a.createElement("pre",{className:n.refNames},x))))})),x=(0,p.n9)()({content:{minWidth:800},button:{float:"right"}});function y(e,t){for(const n in e)n===t?delete e[n]:"object"==typeof e[n]&&y(e[n],t);return e}const w=(0,u.observer)((function({config:e}){const[t,n]=(0,a.useState)(!1),r=(0,c.readConfObject)(e),o=(0,i.getSession)(e),{classes:m}=x(),[u,p]=(0,a.useState)(!1),g=(0,c.getConf)(o,["formatAbout","hideUris"])||(0,c.readConfObject)(e,["formatAbout","hideUris"]),{pluginManager:E}=(0,i.getEnv)(o),v=E.evaluateExtensionPoint("Core-customizeAbout",{config:{...r,...(0,c.getConf)(o,["formatAbout","config"],{config:r}),...(0,c.readConfObject)(e,["formatAbout","config"],{config:r})}},{session:o,config:e}),w=E.evaluateExtensionPoint("Core-extraAboutPanel",null,{session:o,config:e});return a.createElement("div",{className:m.content},a.createElement(s.default,{title:"Configuration"},g?null:a.createElement("span",{className:m.button},a.createElement(d.A,{variant:"contained",color:"secondary",onClick:()=>{p(!0)}},"Show ref names"),a.createElement(d.A,{variant:"contained",onClick:()=>{const e=y(structuredClone(r),"baseUri");f()(JSON.stringify(e,null,2)),n(!0),setTimeout((()=>{n(!1)}),1e3)}},t?"Copied to clipboard!":"Copy config")),a.createElement(l.default,{attributes:v,omit:["displays","baseUri","refNames","formatAbout"],hideUris:g})),w?a.createElement(s.default,{title:w.name},a.createElement(w.Component,{config:e})):null,a.createElement(b,{config:e}),u?a.createElement(h,{config:e,onClose:()=>{p(!1)}}):null)}));function k({config:e,handleClose:t}){const n=(0,i.getSession)(e),l=(0,o.getTrackName)(e,n),{pluginManager:s}=(0,i.getEnv)(n),c=s.evaluateExtensionPoint("Core-replaceAbout",w,{session:n,config:e});return a.createElement(r.A,{open:!0,onClose:t,title:l,maxWidth:"xl"},a.createElement(c,{config:e}))}}}]);
//# sourceMappingURL=965.341aac58.chunk.js.map