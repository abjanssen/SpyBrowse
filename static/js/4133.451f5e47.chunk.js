"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4133,7706],{47046:(t,e,r)=>{r.d(e,{A:()=>a});class n{}class s{constructor(){this.signals=new Set,this.abortController=new AbortController}addSignal(t=new n){if(this.signal.aborted)throw new Error("cannot add a signal, already aborted!");this.signals.add(t),t.aborted?this.handleAborted(t):"function"==typeof t.addEventListener&&t.addEventListener("abort",(()=>{this.handleAborted(t)}))}handleAborted(t){this.signals.delete(t),0===this.signals.size&&this.abortController.abort()}get signal(){return this.abortController.signal}abort(){this.abortController.abort()}}class i{constructor(){this.callbacks=new Set}addCallback(t=()=>{}){this.callbacks.add(t),t(this.currentMessage)}callback(t){this.currentMessage=t;for(const e of this.callbacks)e(t)}}class a{constructor({fill:t,cache:e}){if("function"!=typeof t)throw new TypeError("must pass a fill function");if("object"!=typeof e)throw new TypeError("must pass a cache object");if("function"!=typeof e.get||"function"!=typeof e.set||"function"!=typeof e.delete)throw new TypeError("cache must implement get(key), set(key, val), and and delete(key)");this.cache=e,this.fillCallback=t}static isAbortException(t){return"AbortError"===t.name||"ERR_ABORTED"===t.code||"AbortError: aborted"===t.message||"Error: aborted"===t.message}evict(t,e){this.cache.get(t)===e&&this.cache.delete(t)}fill(t,e,r,n){const a=new s,o=new i;o.addCallback(n);const h={aborter:a,promise:this.fillCallback(e,a.signal,(t=>{o.callback(t)})),settled:!1,statusReporter:o,get aborted(){return this.aborter.signal.aborted}};h.aborter.addSignal(r),h.aborter.signal.addEventListener("abort",(()=>{h.settled||this.evict(t,h)})),h.promise.then((()=>{h.settled=!0}),(()=>{h.settled=!0,this.evict(t,h)})).catch((t=>{throw console.error(t),t})),this.cache.set(t,h)}static checkSinglePromise(t,e){function r(){if(null==e?void 0:e.aborted)throw Object.assign(new Error("aborted"),{code:"ERR_ABORTED"})}return t.then((t=>(r(),t)),(t=>{throw r(),t}))}has(t){return this.cache.has(t)}get(t,e,r,n){if(!r&&e instanceof AbortSignal)throw new TypeError("second get argument appears to be an AbortSignal, perhaps you meant to pass `null` for the fill data?");const s=this.cache.get(t);return s?s.aborted&&!s.settled?(this.evict(t,s),this.get(t,e,r,n)):s.settled?s.promise:(s.aborter.addSignal(r),s.statusReporter.addCallback(n),a.checkSinglePromise(s.promise,r)):(this.fill(t,e,r,n),a.checkSinglePromise(this.cache.get(t).promise,r))}delete(t){const e=this.cache.get(t);e&&(e.settled||e.aborter.abort(),this.cache.delete(t))}clear(){const t=this.cache.keys();let e=0;for(let r=t.next();!r.done;r=t.next())this.delete(r.value),e+=1;return e}}},34133:(t,e,r)=>{r.d(e,{j9:()=>C,Wg:()=>A});class n{constructor(t,e){this.blockPosition=t,this.dataPosition=e}toString(){return`${this.blockPosition}:${this.dataPosition}`}compareTo(t){return this.blockPosition-t.blockPosition||this.dataPosition-t.dataPosition}static min(...t){let e,r=0;for(;!e;r+=1)e=t[r];for(;r<t.length;r+=1)e.compareTo(t[r])>0&&(e=t[r]);return e}}function s(t,e=0,r=!1){if(r)throw new Error("big-endian virtual file offsets not implemented");return new n(1099511627776*t[e+7]+4294967296*t[e+6]+16777216*t[e+5]+65536*t[e+4]+256*t[e+3]+t[e+2],t[e+1]<<8|t[e])}class i{constructor(t,e,r,n){this.minv=t,this.maxv=e,this.bin=r,this._fetchedSize=n}toUniqueString(){return`${this.minv.toString()}..${this.maxv.toString()} (bin ${this.bin}, fetchedSize ${this.fetchedSize()})`}toString(){return this.toUniqueString()}compareTo(t){return this.minv.compareTo(t.minv)||this.maxv.compareTo(t.maxv)||this.bin-t.bin}fetchedSize(){return void 0!==this._fetchedSize?this._fetchedSize:this.maxv.blockPosition+65536-this.minv.blockPosition}}var a=r(59086),o=r.n(a);function h(t){return new Promise((e=>setTimeout(e,t)))}function l(t,e){const r=[];let n;if(0===t.length)return t;t.sort(((t,e)=>{const r=t.minv.blockPosition-e.minv.blockPosition;return 0===r?t.minv.dataPosition-e.minv.dataPosition:r}));for(const a of t)(!e||a.maxv.compareTo(e)>0)&&(void 0===n?(r.push(a),n=a):(s=n,(i=a).minv.blockPosition-s.maxv.blockPosition<65e3&&i.maxv.blockPosition-s.minv.blockPosition<5e6?a.maxv.compareTo(n.maxv)>0&&(n.maxv=a.maxv):(r.push(a),n=a)));var s,i;return r}function c(t,e){return{lineCount:function(t){if(t.greaterThan(Number.MAX_SAFE_INTEGER)||t.lessThan(Number.MIN_SAFE_INTEGER))throw new Error("integer overflow");return t.toNumber()}(o().fromBytesLE(Array.prototype.slice.call(t,e,e+8),!0))}}function d(t,e){return t?t.compareTo(e)>0?e:t:e}function f(t,e=t=>t){let r=0,n=0;const s=[],i={};for(let a=0;a<t.length;a+=1)if(!t[a]){if(n<a){let o=t.toString("utf8",n,a);o=e(o),s[r]=o,i[o]=r}n=a+1,r+=1}return{refNameToId:i,refIdToName:s}}class u{constructor({filehandle:t,renameRefSeq:e=t=>t}){this.filehandle=t,this.renameRefSeq=e}}class g extends u{async lineCount(t,e){var r,n;return(null===(n=null===(r=(await this.parse(e)).indices[t])||void 0===r?void 0:r.stats)||void 0===n?void 0:n.lineCount)||0}async _parse(t){const e=await this.filehandle.readFile(t);if(21578050!==e.readUInt32LE(0))throw new Error("Not a BAI file");const r=e.readInt32LE(4);let n,a=8;const o=new Array(r);for(let t=0;t<r;t++){const r=e.readInt32LE(a);let h;a+=4;const l={};for(let t=0;t<r;t+=1){const t=e.readUInt32LE(a);if(a+=4,37450===t)a+=4,h=c(e,a+16),a+=32;else{if(t>37450)throw new Error("bai index contains too many bins, please use CSI");{const r=e.readInt32LE(a);a+=4;const o=new Array(r);for(let h=0;h<r;h++){const r=s(e,a);a+=8;const l=s(e,a);a+=8,n=d(n,r),o[h]=new i(r,l,t)}l[t]=o}}}const f=e.readInt32LE(a);a+=4;const u=new Array(f);for(let t=0;t<f;t++){const r=s(e,a);a+=8,n=d(n,r),u[t]=r}o[t]={binIndex:l,linearIndex:u,stats:h}}return{bai:!0,firstDataLine:n,maxBlockSize:65536,indices:o,refCount:r}}async indexCov(t,e,r,n={}){const s=16384,i=void 0!==e,a=(await this.parse(n)).indices[t];if(!a)return[];const{linearIndex:o=[],stats:h}=a;if(0===o.length)return[];const l=void 0===r?(o.length-1)*s:(c=r)-c%s+16384;var c;const d=void 0===e?0:function(t){return t-t%16384}(e),f=new Array(i?(l-d)/s:o.length-1),u=o[o.length-1].blockPosition;if(l>(o.length-1)*s)throw new Error("query outside of range of linear index");let g=o[d/s].blockPosition;for(let t=d/s,e=0;t<l/s;t++,e++)f[e]={score:o[t+1].blockPosition-g,start:t*s,end:t*s+s},g=o[t+1].blockPosition;return f.map((t=>({...t,score:t.score*((null==h?void 0:h.lineCount)||0)/u})))}async blocksForRange(t,e,r,n={}){e<0&&(e=0);const s=await this.parse(n);if(!s)return[];const i=s.indices[t];if(!i)return[];const a=(h=r,[[0,0],[1+((o=e)>>26),1+((h-=1)>>26)],[9+(o>>23),9+(h>>23)],[73+(o>>20),73+(h>>20)],[585+(o>>17),585+(h>>17)],[4681+(o>>14),4681+(h>>14)]]);var o,h;const c=[];for(const[t,e]of a)for(let r=t;r<=e;r++)if(i.binIndex[r]){const t=i.binIndex[r];for(const e of t)c.push(e)}const d=i.linearIndex.length;let f;const u=Math.min(e>>14,d-1),g=Math.min(r>>14,d-1);for(let t=u;t<=g;++t){const e=i.linearIndex[t];e&&(!f||e.compareTo(f)<0)&&(f=e)}return l(c,f)}async parse(t={}){return this.setupP||(this.setupP=this._parse(t).catch((t=>{throw this.setupP=void 0,t}))),this.setupP}async hasRefSeq(t,e={}){var r;return!!(null===(r=(await this.parse(e)).indices[t])||void 0===r?void 0:r.binIndex)}}var b=r(35451),m=r(91454),p=r(7706),w=r(45834),_=r(47046),y=r(16308),v=r.n(y);function E(t,e){return Math.floor(t/2**e)}class x extends u{constructor(){super(...arguments),this.maxBinNumber=0,this.depth=0,this.minShift=0}async lineCount(t,e){var r,n;return(null===(n=null===(r=(await this.parse(e)).indices[t])||void 0===r?void 0:r.stats)||void 0===n?void 0:n.lineCount)||0}async indexCov(){return[]}parseAuxData(t,e){const r=t.readInt32LE(e),n=65536&r?"zero-based-half-open":"1-based-closed",s={0:"generic",1:"SAM",2:"VCF"}[15&r];if(!s)throw new Error(`invalid Tabix preset format flags ${r}`);const i={ref:t.readInt32LE(e+4),start:t.readInt32LE(e+8),end:t.readInt32LE(e+12)},a=t.readInt32LE(e+16),o=a?String.fromCharCode(a):"",h=t.readInt32LE(e+20),l=t.readInt32LE(e+24);return{columnNumbers:i,coordinateType:n,metaValue:a,metaChar:o,skipLines:h,format:s,formatFlags:r,...f(t.subarray(e+28,e+28+l),this.renameRefSeq)}}async _parse(t){const e=await this.filehandle.readFile(t),r=await(0,p.unzip)(e);let n;if(21582659===r.readUInt32LE(0))n=1;else{if(38359875!==r.readUInt32LE(0))throw new Error("Not a CSI file");n=2}this.minShift=r.readInt32LE(4),this.depth=r.readInt32LE(8),this.maxBinNumber=((1<<3*(this.depth+1))-1)/7;const a=r.readInt32LE(12),o=a>=30?this.parseAuxData(r,16):void 0,h=r.readInt32LE(16+a);let l,f=16+a+4;const u=new Array(h);for(let t=0;t<h;t++){const e=r.readInt32LE(f);f+=4;const n={};let a;for(let t=0;t<e;t++){const t=r.readUInt32LE(f);if(f+=4,t>this.maxBinNumber)a=c(r,f+28),f+=44;else{l=d(l,s(r,f)),f+=8;const e=r.readInt32LE(f);f+=4;const a=new Array(e);for(let n=0;n<e;n+=1){const e=s(r,f);f+=8;const o=s(r,f);f+=8,l=d(l,e),a[n]=new i(e,o,t)}n[t]=a}}u[t]={binIndex:n,stats:a}}return{csiVersion:n,firstDataLine:l,indices:u,refCount:h,csi:!0,maxBlockSize:65536,...o}}async blocksForRange(t,e,r,s={}){e<0&&(e=0);const i=await this.parse(s),a=null==i?void 0:i.indices[t];if(!a)return[];const o=this.reg2bins(e,r);if(0===o.length)return[];const h=[];for(const[t,e]of o)for(let r=t;r<=e;r++)if(a.binIndex[r]){const t=a.binIndex[r];for(const e of t)h.push(e)}return l(h,new n(0,0))}reg2bins(t,e){(t-=1)<1&&(t=1),e>2**50&&(e=2**34),e-=1;let r=0,n=0,s=this.minShift+3*this.depth;const i=[];for(;r<=this.depth;s-=3,n+=1*2**(3*r),r+=1){const r=n+E(t,s),a=n+E(e,s);if(a-r+i.length>this.maxBinNumber)throw new Error(`query ${t}-${e} is too large for current binning scheme (shift ${this.minShift}, depth ${this.depth}), try a smaller query or a coarser index binning scheme`);i.push([r,a])}return i}async parse(t={}){return this.setupP||(this.setupP=this._parse(t).catch((t=>{throw this.setupP=void 0,t}))),this.setupP}async hasRefSeq(t,e={}){var r;return!!(null===(r=(await this.parse(e)).indices[t])||void 0===r?void 0:r.binIndex)}}const I="=ACMGRSVTWYHKDBN".split(""),k="MIDNSHP=X???????".split("");class S{constructor(t){this.data={},this._tagList=[],this._allTagsParsed=!1;const{bytes:e,fileOffset:r}=t,{byteArray:n,start:s}=e;this.data={start:n.readInt32LE(s+8)},this.bytes=e,this._id=r,this._refID=n.readInt32LE(s+4),this.flags=(4294901760&n.readInt32LE(s+16))>>16}get(t){return this[t]?(this.data[t]||(this.data[t]=this[t]()),this.data[t]):this._get(t.toLowerCase())}end(){return this.get("start")+this.get("length_on_ref")}seq_id(){return this._refID}_get(t){return t in this.data||(this.data[t]=this._parseTag(t)),this.data[t]}_tags(){this._parseAllTags();let t=["seq"];this.isSegmentUnmapped()||t.push("start","end","strand","score","qual","MQ","CIGAR","length_on_ref","template_length"),this.isPaired()&&t.push("next_segment_position","pair_orientation"),t=t.concat(this._tagList||[]);for(const e of Object.keys(this.data))e.startsWith("_")||"next_seq_id"===e||t.push(e);const e={};return t.filter((t=>{if(t in this.data&&void 0===this.data[t]||"CG"===t||"cg"===t)return!1;const r=t.toLowerCase(),n=e[r];return e[r]=!0,!n}))}parent(){}children(){return this.get("subfeatures")}id(){return this._id}mq(){const t=(65280&this.get("_bin_mq_nl"))>>8;return 255===t?void 0:t}score(){return this.get("mq")}qual(){var t;return null===(t=this.qualRaw())||void 0===t?void 0:t.join(" ")}qualRaw(){if(this.isSegmentUnmapped())return;const{start:t,byteArray:e}=this.bytes,r=t+36+this.get("_l_read_name")+4*this.get("_n_cigar_op")+this.get("_seq_bytes"),n=this.get("seq_length");return e.subarray(r,r+n)}strand(){return this.isReverseComplemented()?-1:1}multi_segment_next_segment_strand(){if(!this.isMateUnmapped())return this.isMateReverseComplemented()?-1:1}name(){return this.get("_read_name")}_read_name(){const t=this.get("_l_read_name"),{byteArray:e,start:r}=this.bytes;return e.toString("ascii",r+36,r+36+t-1)}_parseTag(t){if(this._allTagsParsed)return;const{byteArray:e,start:r}=this.bytes;let n=this._tagOffset||r+36+this.get("_l_read_name")+4*this.get("_n_cigar_op")+this.get("_seq_bytes")+this.get("seq_length");const s=this.bytes.end;let i;for(;n<s&&i!==t;){const r=String.fromCharCode(e[n],e[n+1]);i=r.toLowerCase();const a=String.fromCharCode(e[n+2]);let o;switch(n+=3,a){case"A":o=String.fromCharCode(e[n]),n+=1;break;case"i":o=e.readInt32LE(n),n+=4;break;case"I":o=e.readUInt32LE(n),n+=4;break;case"c":o=e.readInt8(n),n+=1;break;case"C":o=e.readUInt8(n),n+=1;break;case"s":o=e.readInt16LE(n),n+=2;break;case"S":o=e.readUInt16LE(n),n+=2;break;case"f":o=e.readFloatLE(n),n+=4;break;case"Z":case"H":for(o="";n<=s;){const t=e[n++];if(0===t)break;o+=String.fromCharCode(t)}break;case"B":{o="";const t=e[n++],s=String.fromCharCode(t),i=e.readInt32LE(n);if(n+=4,"i"===s)if("CG"===r)for(let t=0;t<i;t++){const t=e.readInt32LE(n);o+=(t>>4)+k[15&t],n+=4}else for(let t=0;t<i;t++)o+=e.readInt32LE(n),t+1<i&&(o+=","),n+=4;if("I"===s)if("CG"===r)for(let t=0;t<i;t++){const t=e.readUInt32LE(n);o+=(t>>4)+k[15&t],n+=4}else for(let t=0;t<i;t++)o+=e.readUInt32LE(n),t+1<i&&(o+=","),n+=4;if("s"===s)for(let t=0;t<i;t++)o+=e.readInt16LE(n),t+1<i&&(o+=","),n+=2;if("S"===s)for(let t=0;t<i;t++)o+=e.readUInt16LE(n),t+1<i&&(o+=","),n+=2;if("c"===s)for(let t=0;t<i;t++)o+=e.readInt8(n),t+1<i&&(o+=","),n+=1;if("C"===s)for(let t=0;t<i;t++)o+=e.readUInt8(n),t+1<i&&(o+=","),n+=1;if("f"===s)for(let t=0;t<i;t++)o+=e.readFloatLE(n),t+1<i&&(o+=","),n+=4;break}default:console.warn(`Unknown BAM tag type '${a}', tags may be incomplete`),o=void 0,n=s}if(this._tagOffset=n,this._tagList.push(r),i===t)return o;this.data[i]=o}this._allTagsParsed=!0}_parseAllTags(){this._parseTag("")}_parseCigar(t){return t.match(/\d+\D/g).map((t=>[/\D/.exec(t)[0].toUpperCase(),Number.parseInt(t,10)]))}isPaired(){return!!(1&this.flags)}isProperlyPaired(){return!!(2&this.flags)}isSegmentUnmapped(){return!!(4&this.flags)}isMateUnmapped(){return!!(8&this.flags)}isReverseComplemented(){return!!(16&this.flags)}isMateReverseComplemented(){return!!(32&this.flags)}isRead1(){return!!(64&this.flags)}isRead2(){return!!(128&this.flags)}isSecondary(){return!!(256&this.flags)}isFailedQc(){return!!(512&this.flags)}isDuplicate(){return!!(1024&this.flags)}isSupplementary(){return!!(2048&this.flags)}cigar(){if(this.isSegmentUnmapped())return;const{byteArray:t,start:e}=this.bytes,r=this.get("_n_cigar_op");let n=e+36+this.get("_l_read_name");const s=this.get("seq_length");let i="",a=0,o=t.readInt32LE(n),h=o>>4,l=k[15&o];if("S"===l&&h===s)return n+=4,o=t.readInt32LE(n),h=o>>4,l=k[15&o],"N"!==l&&console.warn("CG tag with no N tag"),this.data.length_on_ref=h,this.get("CG");for(let e=0;e<r;++e)o=t.readInt32LE(n),h=o>>4,l=k[15&o],i+=h+l,"H"!==l&&"S"!==l&&"I"!==l&&(a+=h),n+=4;return this.data.length_on_ref=a,i}length_on_ref(){return this.data.length_on_ref||this.get("cigar"),this.data.length_on_ref}_n_cigar_op(){return 65535&this.get("_flag_nc")}_l_read_name(){return 255&this.get("_bin_mq_nl")}_seq_bytes(){return this.get("seq_length")+1>>1}getReadBases(){return this.seq()}seq(){const{byteArray:t,start:e}=this.bytes,r=e+36+this.get("_l_read_name")+4*this.get("_n_cigar_op"),n=this.get("_seq_bytes"),s=this.get("seq_length");let i="",a=0;for(let e=0;e<n;++e){const n=t[r+e];i+=I[(240&n)>>4],a++,a<s&&(i+=I[15&n],a++)}return i}getPairOrientation(){if(!this.isSegmentUnmapped()&&!this.isMateUnmapped()&&this._refID===this._next_refid()){const t=this.isReverseComplemented()?"R":"F",e=this.isMateReverseComplemented()?"R":"F";let r=" ",n=" ";this.isRead1()?(r="1",n="2"):this.isRead2()&&(r="2",n="1");const s=[];return this.template_length()>0?(s[0]=t,s[1]=r,s[2]=e,s[3]=n):(s[2]=t,s[3]=r,s[0]=e,s[1]=n),s.join("")}return""}_bin_mq_nl(){return this.bytes.byteArray.readInt32LE(this.bytes.start+12)}_flag_nc(){return this.bytes.byteArray.readInt32LE(this.bytes.start+16)}seq_length(){return this.bytes.byteArray.readInt32LE(this.bytes.start+20)}_next_refid(){return this.bytes.byteArray.readInt32LE(this.bytes.start+24)}_next_pos(){return this.bytes.byteArray.readInt32LE(this.bytes.start+28)}template_length(){return this.bytes.byteArray.readInt32LE(this.bytes.start+32)}toJSON(){const t={};for(const e of Object.keys(this))e.startsWith("_")||"bytes"===e||(t[e]=this[e]);return t}}function P(t){const e=t.split(/\r?\n/),r=[];for(const t of e){const[e,...n]=t.split(/\t/);e&&r.push({tag:e.slice(1),data:n.map((t=>{const e=t.indexOf(":");return{tag:t.slice(0,e),value:t.slice(e+1)}}))})}return r}const T=21840194;class L{read(){throw new Error("never called")}stat(){throw new Error("never called")}readFile(){throw new Error("never called")}close(){throw new Error("never called")}}class C{constructor({bamFilehandle:t,bamPath:e,bamUrl:r,baiPath:n,baiFilehandle:s,baiUrl:i,csiPath:a,csiFilehandle:o,csiUrl:h,htsget:l,yieldThreadTime:c=100,renameRefSeqs:d=t=>t}){if(this.htsget=!1,this.featureCache=new _.A({cache:new(v())({maxSize:50}),fill:async(t,e)=>{const{chunk:r,opts:n}=t,{data:s,cpositions:i,dpositions:a}=await this._readChunk({chunk:r,opts:{...n,signal:e}});return this.readBamFeatures(s,i,a,r)}}),this.renameRefSeq=d,t)this.bam=t;else if(e)this.bam=new w.EY(e);else if(r)this.bam=new w.Tx(r);else{if(!l)throw new Error("unable to initialize bam");this.htsget=!0,this.bam=new L}if(o)this.index=new x({filehandle:o});else if(a)this.index=new x({filehandle:new w.EY(a)});else if(h)this.index=new x({filehandle:new w.Tx(h)});else if(s)this.index=new g({filehandle:s});else if(n)this.index=new g({filehandle:new w.EY(n)});else if(i)this.index=new g({filehandle:new w.Tx(i)});else if(e)this.index=new g({filehandle:new w.EY(`${e}.bai`)});else if(r)this.index=new g({filehandle:new w.Tx(`${r}.bai`)});else{if(!l)throw new Error("unable to infer index format");this.htsget=!0}this.yieldThreadTime=c}async getHeaderPre(t){const e=function(t={}){return"aborted"in t?{signal:t}:t}(t);if(!this.index)return;const r=await this.index.parse(e),n=r.firstDataLine?r.firstDataLine.blockPosition+65535:void 0;let s;if(n){const t=n+65536,r=await this.bam.read(b.hp.alloc(t),0,t,0,e);if(!r.bytesRead)throw new Error("Error reading header");s=r.buffer.subarray(0,Math.min(r.bytesRead,n))}else s=await this.bam.readFile(e);const i=await(0,p.unzip)(s);if(i.readInt32LE(0)!==T)throw new Error("Not a BAM file");const a=i.readInt32LE(4);this.header=i.toString("utf8",8,8+a);const{chrToIndex:o,indexToChr:h}=await this._readRefSeqs(a+8,65535,e);return this.chrToIndex=o,this.indexToChr=h,P(this.header)}getHeader(t){return this.headerP||(this.headerP=this.getHeaderPre(t).catch((t=>{throw this.headerP=void 0,t}))),this.headerP}async getHeaderText(t={}){return await this.getHeader(t),this.header}async _readRefSeqs(t,e,r){if(t>e)return this._readRefSeqs(t,2*e,r);const n=e+65536,{bytesRead:s,buffer:i}=await this.bam.read(b.hp.alloc(n),0,e,0,r);if(!s)throw new Error("Error reading refseqs from header");const a=await(0,p.unzip)(i.subarray(0,Math.min(s,e))),o=a.readInt32LE(t);let h=t+4;const l={},c=[];for(let n=0;n<o;n+=1){const s=a.readInt32LE(h),i=this.renameRefSeq(a.toString("utf8",h+4,h+4+s-1)),o=a.readInt32LE(h+s+4);if(l[i]=n,c.push({refName:i,length:o}),h=h+8+s,h>a.length)return console.warn(`BAM header is very big.  Re-fetching ${e} bytes.`),this._readRefSeqs(t,2*e,r)}return{chrToIndex:l,indexToChr:c}}async getRecordsForRange(t,e,r,n){return async function(t){let e=[];for await(const r of t)e=e.concat(r);return e}(this.streamRecordsForRange(t,e,r,n))}async*streamRecordsForRange(t,e,r,n){var s;await this.getHeader(n);const i=null===(s=this.chrToIndex)||void 0===s?void 0:s[t];if(void 0!==i&&this.index){const t=await this.index.blocksForRange(i,e-1,r,n);yield*this._fetchChunkFeatures(t,i,e,r,n)}else yield[]}async*_fetchChunkFeatures(t,e,r,n,s={}){const{viewAsPairs:i}=s,a=[];let o=!1;for(const i of t){const t=await this.featureCache.get(i.toString(),{chunk:i,opts:s},s.signal),h=[];for(const s of t)if(s.seq_id()===e){if(s.get("start")>=n){o=!0;break}s.get("end")>=r&&h.push(s)}if(a.push(h),yield h,o)break}(function(t){if(t&&t.aborted){if("undefined"==typeof DOMException){const t=new Error("aborted");throw t.code="ERR_ABORTED",t}throw new DOMException("aborted","AbortError")}})(s.signal),i&&(yield this.fetchPairs(e,a,s))}async fetchPairs(t,e,r){const{pairAcrossChr:n,maxInsertSize:s=2e5}=r,i={},a={};e.map((t=>{const e={};for(const r of t){const t=r.name(),n=r.id();e[t]||(e[t]=0),e[t]++,a[n]=1}for(const[t,r]of Object.entries(e))1===r&&(i[t]=!0)}));const o=[];e.map((e=>{for(const a of e){const e=a.name(),h=a.get("start"),l=a._next_pos(),c=a._next_refid();this.index&&i[e]&&(n||c===t&&Math.abs(h-l)<s)&&o.push(this.index.blocksForRange(c,l,l+1,r))}}));const h=new Map,l=await Promise.all(o);for(const t of l.flat())h.has(t.toString())||h.set(t.toString(),t);return(await Promise.all([...h.values()].map((async t=>{const{data:e,cpositions:n,dpositions:s,chunk:o}=await this._readChunk({chunk:t,opts:r}),h=[];for(const t of await this.readBamFeatures(e,n,s,o))i[t.get("name")]&&!a[t.id()]&&h.push(t);return h})))).flat()}async _readRegion(t,e,r={}){const{bytesRead:n,buffer:s}=await this.bam.read(b.hp.alloc(e),0,e,t,r);return s.subarray(0,Math.min(n,e))}async _readChunk({chunk:t,opts:e}){const r=await this._readRegion(t.minv.blockPosition,t.fetchedSize(),e),{buffer:n,cpositions:s,dpositions:i}=await(0,p.i2)(r,t);return{data:n,cpositions:s,dpositions:i,chunk:t}}async readBamFeatures(t,e,r,n){let s=0;const i=[];let a=0,o=+Date.now();for(;s+4<t.length;){const l=s+4+t.readInt32LE(s)-1;if(r){for(;s+n.minv.dataPosition>=r[a++];);a--}if(l<t.length){const c=new S({bytes:{byteArray:t,start:s,end:l},fileOffset:e.length>0?256*e[a]+(s-r[a])+n.minv.dataPosition+1:m.A.signed(t.slice(s,l))});i.push(c),this.yieldThreadTime&&+Date.now()-o>this.yieldThreadTime&&(await h(1),o=+Date.now())}s=l+1}return i}async hasRefSeq(t){var e,r;const n=null===(e=this.chrToIndex)||void 0===e?void 0:e[t];return void 0!==n&&(null===(r=this.index)||void 0===r?void 0:r.hasRefSeq(n))}async lineCount(t){var e;const r=null===(e=this.chrToIndex)||void 0===e?void 0:e[t];return void 0!==r&&this.index?this.index.lineCount(r):0}async indexCov(t,e,r){var n;if(!this.index)return[];await this.index.parse();const s=null===(n=this.chrToIndex)||void 0===n?void 0:n[t];return void 0===s?[]:this.index.indexCov(s,e,r)}async blocksForRange(t,e,r,n){var s;if(!this.index)return[];await this.index.parse();const i=null===(s=this.chrToIndex)||void 0===s?void 0:s[t];return void 0===i?[]:this.index.blocksForRange(i,e,r,n)}}async function R(t,e){const r=await Promise.all(t.map((async t=>{const{url:r,headers:n}=t;if(r.startsWith("data:"))return b.hp.from(r.split(",")[1],"base64");{const{referer:t,...s}=n,i=await fetch(r,{...e,headers:{...null==e?void 0:e.headers,...s}});if(!i.ok)throw new Error(`HTTP ${i.status} fetching ${r}: ${await i.text()}`);return b.hp.from(await i.arrayBuffer())}})));return b.hp.concat(await Promise.all(r.map((t=>(0,p.unzip)(t)))))}class A extends C{constructor(t){super({htsget:!0}),this.baseUrl=t.baseUrl,this.trackId=t.trackId}async*streamRecordsForRange(t,e,r,n){var s;const i=`${this.baseUrl}/${this.trackId}?referenceName=${t}&start=${e}&end=${r}&format=BAM`,a=null===(s=this.chrToIndex)||void 0===s?void 0:s[t];if(void 0===a)yield[];else{const s=await fetch(i,{...n});if(!s.ok)throw new Error(`HTTP ${s.status} fetching ${i}: ${await s.text()}`);const o=await s.json(),h=await R(o.htsget.urls.slice(1),n);yield*this._fetchChunkFeatures([{buffer:h,_fetchedSize:void 0,bin:0,compareTo:()=>0,toUniqueString:()=>`${t}_${e}_${r}`,fetchedSize:()=>0,minv:{dataPosition:0,blockPosition:0,compareTo:()=>0},maxv:{dataPosition:Number.MAX_SAFE_INTEGER,blockPosition:0,compareTo:()=>0},toString:()=>`${t}_${e}_${r}`}],a,e,r,n)}}async _readChunk({chunk:t}){if(!t.buffer)throw new Error("expected chunk.buffer in htsget");return{data:t.buffer,cpositions:[],dpositions:[],chunk:t}}async getHeader(t={}){const e=`${this.baseUrl}/${this.trackId}?referenceName=na&class=header`,r=await fetch(e,t);if(!r.ok)throw new Error(`HTTP ${r.status} fetching ${e}: ${await r.text()}`);const n=await r.json(),s=await R(n.htsget.urls,t);if(s.readInt32LE(0)!==T)throw new Error("Not a BAM file");const i=s.readInt32LE(4),a=P(s.toString("utf8",8,8+i)),o=[],h={},l=a.filter((t=>"SQ"===t.tag));for(const[t,e]of l.entries()){let r="",n=0;for(const t of e.data)"SN"===t.tag?r=t.value:"LN"===t.tag&&(n=+t.value);h[r]=t,o[t]={refName:r,length:n}}return this.chrToIndex=h,this.indexToChr=o,a}}},7706:(t,e,r)=>{r.d(e,{sG:()=>d,unzip:()=>a,i2:()=>o});var n=r(35451),s=r(45834),i=r(57864);async function a(t){try{let e,r=0,s=0;const a=[];let o,h=0;do{const n=t.subarray(r);if(o=new i.Inflate,({strm:e}=o),o.push(n,i.Z_SYNC_FLUSH),o.err)throw new Error(o.msg);r+=e.next_in,a[s]=o.result,h+=a[s].length,s+=1}while(e.avail_in);const l=new Uint8Array(h);for(let t=0,e=0;t<a.length;t++)l.set(a[t],e),e+=a[t].length;return n.hp.from(l)}catch(t){if(`${t}`.match(/incorrect header check/))throw new Error("problem decompressing block: incorrect gzip header check");throw t}}async function o(t,e){try{let r;const{minv:s,maxv:a}=e;let o=s.blockPosition,h=s.dataPosition;const l=[],c=[],d=[];let f=0,u=0;do{const e=t.subarray(o-s.blockPosition),n=new i.Inflate;if(({strm:r}=n),n.push(e,i.Z_SYNC_FLUSH),n.err)throw new Error(n.msg);const g=n.result;l.push(g);let b=g.length;c.push(o),d.push(h),1===l.length&&s.dataPosition&&(l[0]=l[0].subarray(s.dataPosition),b=l[0].length);const m=o;if(o+=r.next_in,h+=b,m>=a.blockPosition){l[u]=l[u].subarray(0,a.blockPosition===s.blockPosition?a.dataPosition-s.dataPosition+1:a.dataPosition+1),c.push(o),d.push(h),f+=l[u].length;break}f+=l[u].length,u++}while(r.avail_in);const g=new Uint8Array(f);for(let t=0,e=0;t<l.length;t++)g.set(l[t],e),e+=l[t].length;return{buffer:n.hp.from(g),cpositions:c,dpositions:d}}catch(t){if(`${t}`.match(/incorrect header check/))throw new Error("problem decompressing block: incorrect gzip header check");throw t}}var h=r(59086),l=r.n(h);class c{constructor({filehandle:t,path:e}){if(t)this.filehandle=t;else{if(!e)throw new TypeError("either filehandle or path must be defined");this.filehandle=new s.EY(e)}}_readLongWithOverflow(t,e=0,r=!0){const n=l().fromBytesLE(t.slice(e,e+8),r);if(n.greaterThan(Number.MAX_SAFE_INTEGER)||n.lessThan(Number.MIN_SAFE_INTEGER))throw new TypeError("integer overflow");return n.toNumber()}_getIndex(){return this.index||(this.index=this._readIndex()),this.index}async _readIndex(){let t=n.hp.allocUnsafe(8);await this.filehandle.read(t,0,8,0);const e=this._readLongWithOverflow(t,0,!0);if(!e)return[[0,0]];const r=new Array(e+1);r[0]=[0,0];const s=16*e;if(s>Number.MAX_SAFE_INTEGER)throw new TypeError("integer overflow");t=n.hp.allocUnsafe(s),await this.filehandle.read(t,0,s,8);for(let n=0;n<e;n+=1){const e=this._readLongWithOverflow(t,16*n),s=this._readLongWithOverflow(t,16*n+8);r[n+1]=[e,s]}return r}async getLastBlock(){const t=await this._getIndex();if(t.length)return t[t.length-1]}async getRelevantBlocksForRead(t,e){const r=e+t;if(0===t)return[];const n=await this._getIndex(),s=[],i=(t,r)=>{const n=t[1],s=r?r[1]:1/0;return n<=e&&s>e?0:n<e?-1:1};let a=0,o=n.length-1,h=Math.floor(n.length/2),l=i(n[h],n[h+1]);for(;0!==l;)l>0?o=h-1:l<0&&(a=h+1),h=Math.ceil((o-a)/2)+a,l=i(n[h],n[h+1]);s.push(n[h]);let c=h+1;for(;c<n.length&&(s.push(n[c]),!(n[c][1]>=r));c+=1);return s[s.length-1][1]<r&&s.push([]),s}}class d{constructor({filehandle:t,path:e,gziFilehandle:r,gziPath:n}){if(t)this.filehandle=t;else{if(!e)throw new TypeError("either filehandle or path must be defined");this.filehandle=new s.EY(e)}if(!r&&!n&&!e)throw new TypeError("either gziFilehandle or gziPath must be defined");this.gzi=new c({filehandle:r,path:r||n||!e?`${e}.gzi`:n})}async stat(){const t=await this.filehandle.stat();return Object.assign(t,{size:await this.getUncompressedFileSize(),blocks:void 0,blksize:void 0})}async getUncompressedFileSize(){const[,t]=await this.gzi.getLastBlock(),{size:e}=await this.filehandle.stat(),r=n.hp.allocUnsafe(4),{bytesRead:s}=await this.filehandle.read(r,0,4,e-28-4);if(4!==s)throw new Error("read error");return t+r.readUInt32LE(0)}async _readAndUncompressBlock(t,[e],[r]){let n=r;n||(n=(await this.filehandle.stat()).size);const s=n-e;return await this.filehandle.read(t,0,s,e),await a(t.slice(0,s))}async read(t,e,r,s){const i=await this.gzi.getRelevantBlocksForRead(r,s),a=n.hp.allocUnsafe(65536);let o=e,h=0;for(let e=0;e<i.length-1;e+=1){const n=await this._readAndUncompressBlock(a,i[e],i[e+1]),[,l]=i[e],c=l>=s?0:s-l,d=Math.min(s+r,l+n.length)-l;c>=0&&c<n.length&&(n.copy(t,o,c,d),o+=d-c,h+=d-c)}return{bytesRead:h,buffer:t}}}},91454:(t,e,r)=>{r.d(e,{A:()=>a});let n=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];"undefined"!=typeof Int32Array&&(n=new Int32Array(n));var s=r(35451);const i=(t,e)=>s.hp.from(t,e),a=function(t,e){const r=(t,r)=>e(i(t),r)>>>0;return r.signed=(t,r)=>e(i(t),r),r.unsigned=r,r.model="crc-32",r}(0,((t,e)=>{let r=0===e?0:~e;for(let e=0;e<t.length;e++)r=n[255&(r^t[e])]^r>>>8;return~r}))}}]);
//# sourceMappingURL=4133.451f5e47.chunk.js.map