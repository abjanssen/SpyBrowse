"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8965],{28965:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var n=s(46377),a=s(99834),r=s(99546),o=s(66885),i=s(78054);class c extends n.BaseFeatureDataAdapter{static capabilities=["getFeatures","getRefNames"];async setup(e){return this.setupP||(this.setupP=this.setupPre(e).catch((e=>{throw this.setupP=void 0,e}))),this.setupP}async setupPre(e){const t=this.getConf("assemblyNames"),s=this.pluginManager,n=(0,a.openLocation)(this.getConf("bed1Location"),s),r=(0,a.openLocation)(this.getConf("bed2Location"),s),o=(0,a.openLocation)(this.getConf("mcscanAnchorsLocation"),s),[c,u,l]=await Promise.all([n,r,o].map((t=>(0,i.TA)(t,e)))),f=(0,i.fY)(c),p=(0,i.fY)(u);return{assemblyNames:t,feats:l.split(/\n|\r\n|\r/).filter((e=>!!e&&"###"!==e)).map(((e,t)=>{const[s,n,a]=e.split("\t"),r=f.get(s),o=p.get(n);if(!r||!o)throw new Error(`feature not found, ${s} ${n} ${r} ${o}`);return[r,o,+a,t]}))}}async hasDataForRefName(){return!0}async getRefNames(){return[]}getFeatures(e,t={}){return(0,o.ObservableCreate)((async s=>{const{assemblyNames:n,feats:a}=await this.setup(t),o=n.indexOf(e.assemblyName);if(-1!==o){const t=0===o;a.forEach((a=>{const[i,c,u,l]=a,[f,p]=t?[i,c]:[c,i];f.refName===e.refName&&(0,r.doesIntersect2)(e.start,e.end,f.start,f.end)&&s.next(new r.SimpleFeature({...f,uniqueId:`${o}-${l}`,syntenyId:l,strand:f.strand*p.strand,assemblyName:n[+!t],score:u,mate:{...p,assemblyName:n[+t]}}))}))}s.complete()}))}freeResources(){}}},78054:(e,t,s)=>{s.d(t,{PX:()=>u,TA:()=>o,fY:()=>r,gJ:()=>p,qm:()=>f,xI:()=>l,yU:()=>i});var n=s(7706),a=s(99546);function r(e){return new Map(e.split(/\n|\r\n|\r/).filter((e=>!!e||e.startsWith("#"))).map((e=>{const[t,s,n,a,r,o]=e.split("\t");return[a,{refName:t,start:+s,end:+n,score:+r,name:a,strand:"-"===o?-1:1}]})))}async function o(e,t){const s=await e.readFile(t);return new TextDecoder("utf8",{fatal:!0}).decode((0,a.isGzip)(s)?await(0,n.unzip)(s):s)}function i(e,t){return e.map(((e,s)=>[e,t[s]]))}const c="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function u(e,t){let s=0;const n=[];for(;s<e.length;){const a=e.indexOf("\n",s);if(-1===a)break;const r=e.subarray(s,a),o=(c?.decode(r)||r.toString()).trim();o&&n.push(t(o)),s=a+1}return n}function l(e){const[t,,s,n,a,r,,o,i,c,u,l,...f]=e.split("\t");return{tname:r,tstart:+o,tend:+i,qname:t,qstart:+s,qend:+n,strand:"-"===a?-1:1,extra:{numMatches:+c,blockLen:+u,mappingQual:+l,...Object.fromEntries(f.map((e=>{const t=e.indexOf(":");return[e.slice(0,t),e.slice(t+3)]})))}}}function f(e){const t=[];for(let s=e.length-2;s>=0;s-=2){t.push(e[s]);const n=e[s+1];"D"===n?t.push("I"):"I"===n?t.push("D"):t.push(n)}return t}function p(e){return e.replaceAll("D","K").replaceAll("I","D").replaceAll("K","I")}}}]);
//# sourceMappingURL=8965.67b2a6eb.chunk.js.map