"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[14],{10014:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,featureData:()=>l});var s=a(46377),r=a(99834),n=a(66885),i=a(99546),o=a(32598),c=a(7706);function l(e,t,a,s){const r=e.split("\t"),n=r[a?3:0],o=+r[a?4:1],c=+r[a?5:2],l=r[a?0:3],d=+r[a?1:4],h=+r[a?2:5],f=r[6],p=+r[7],m=u(r[8]),g=u(r[9]),w=r.slice(10),b=s?Object.fromEntries(s.slice(10).map(((e,t)=>[e,w[t]]))):w,T=["DUP","TRA","INV","CNV","DEL"].includes(w[0])?`<${w[0]}>`:void 0;return new i.SimpleFeature({start:o,end:c,refName:n,...T?{ALT:[T]}:{},strand:m,name:f,...b,score:p,uniqueId:t,mate:{refName:l,start:d,end:h,strand:g}})}function u(e){return"+"===e?1:"-"===e?-1:"."===e?0:void 0}class d extends s.BaseFeatureDataAdapter{intervalTrees={};static capabilities=["getFeatures","getRefNames"];async loadDataP(e={}){const t=this.pluginManager,a=this.getConf("bedpeLocation"),s=await(0,r.openLocation)(a,t).readFile(e),n=(0,i.isGzip)(s)?await(0,c.unzip)(s):s;if(n.length>536870888)throw new Error("Data exceeds maximum string length (512MB)");const o=new TextDecoder("utf8",{fatal:!0}).decode(n).split(/\n|\r\n|\r/).filter((e=>!!e)),l=[];let u=0;for(;u<o.length&&o[u].startsWith("#");u++)l.push(o[u]);const d=l.join("\n"),h={},f={};for(;u<o.length;u++){const e=o[u],t=e.split("\t"),a=t[0],s=t[3];h[a]||(h[a]=[]),f[s]||(f[s]=[]),h[a].push(e),f[s].push(e)}return{header:d,feats1:h,feats2:f,columnNames:this.getConf("columnNames")}}async loadData(e={}){return this.bedpeFeatures||(this.bedpeFeatures=this.loadDataP(e).catch((e=>{throw this.bedpeFeatures=void 0,e}))),this.bedpeFeatures}async getRefNames(e={}){const{feats1:t,feats2:a}=await this.loadData(e);return[...new Set([...Object.keys(t),...Object.keys(a)])]}async getHeader(e={}){const{header:t}=await this.loadData(e);return t}async getNames(){const{header:e,columnNames:t}=await this.loadData();if(t.length)return t;const a=e.split(/\n|\r\n|\r/).filter((e=>!!e)).at(-1);return a?.includes("\t")?a.slice(1).split("\t").map((e=>e.trim())):void 0}async loadFeatureTreeP(e){const{feats1:t,feats2:a}=await this.loadData(),s=await this.getNames(),r=new o.Ay,n=t[e]?.map(((t,a)=>l(t,`${this.id}-${e}-${a}-r1`,!1,s)))??[],i=a[e]?.map(((t,a)=>l(t,`${this.id}-${e}-${a}-r2`,!0,s)))??[];for(const e of[...n,...i])r.insert([e.get("start"),e.get("end")],e);return r}async loadFeatureTree(e){return this.intervalTrees[e]||(this.intervalTrees[e]=this.loadFeatureTreeP(e).catch((t=>{throw this.intervalTrees[e]=void 0,t}))),this.intervalTrees[e]}getFeatures(e,t={}){return(0,n.ObservableCreate)((async t=>{const{start:a,end:s,refName:r}=e,n=await this.loadFeatureTree(r);n?.search([a,s]).forEach((e=>{t.next(e)})),t.complete()}),t.signal)}freeResources(){}}}}]);
//# sourceMappingURL=14.c35a1881.chunk.js.map