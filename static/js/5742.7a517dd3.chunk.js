"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5742],{12401:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(53472),i=o(r(58607)),a=o(r(56086));class l{constructor({fill:e,cache:t}){if("function"!=typeof e)throw new TypeError("must pass a fill function");if("object"!=typeof t)throw new TypeError("must pass a cache object");if("function"!=typeof t.get||"function"!=typeof t.set||"function"!=typeof t.delete)throw new TypeError("cache must implement get(key), set(key, val), and and delete(key)");this.cache=t,this.fillCallback=e}static isAbortException(e){return"AbortError"===e.name||"ERR_ABORTED"===e.code||"AbortError: aborted"===e.message||"Error: aborted"===e.message}evict(e,t){this.cache.get(e)===t&&this.cache.delete(e)}fill(e,t,r,o){const n=new i.default,l=new a.default;l.addCallback(o);const s={aborter:n,promise:this.fillCallback(t,n.signal,(e=>{l.callback(e)})),settled:!1,statusReporter:l,get aborted(){return this.aborter.signal.aborted}};s.aborter.addSignal(r),s.aborter.signal.addEventListener("abort",(()=>{s.settled||this.evict(e,s)})),s.promise.then((()=>{s.settled=!0}),(()=>{s.settled=!0,this.evict(e,s)})).catch((e=>{throw console.error(e),e})),this.cache.set(e,s)}static checkSinglePromise(e,t){function r(){if(t&&t.aborted)throw Object.assign(new Error("aborted"),{code:"ERR_ABORTED"})}return e.then((e=>(r(),e)),(e=>{throw r(),e}))}has(e){return this.cache.has(e)}get(e,t,r,o){if(!r&&t instanceof n.AbortSignal)throw new TypeError("second get argument appears to be an AbortSignal, perhaps you meant to pass `null` for the fill data?");const i=this.cache.get(e);return i?i.aborted&&!i.settled?(this.evict(e,i),this.get(e,t,r,o)):i.settled?i.promise:(i.aborter.addSignal(r),i.statusReporter.addCallback(o),l.checkSinglePromise(i.promise,r)):(this.fill(e,t,r,o),l.checkSinglePromise(this.cache.get(e).promise,r))}delete(e){const t=this.cache.get(e);t&&(t.settled||t.aborter.abort(),this.cache.delete(e))}clear(){const e=this.cache.keys();let t=0;for(let r=e.next();!r.done;r=e.next())this.delete(r.value),t+=1;return t}}t.default=l},58607:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=r(53472);class n{}t.default=class{constructor(){this.signals=new Set,this.abortController=new o.AbortController}addSignal(e=new n){if(this.signal.aborted)throw new Error("cannot add a signal, already aborted!");this.signals.add(e),e.aborted?this.handleAborted(e):"function"==typeof e.addEventListener&&e.addEventListener("abort",(()=>{this.handleAborted(e)}))}handleAborted(e){this.signals.delete(e),0===this.signals.size&&this.abortController.abort()}get signal(){return this.abortController.signal}abort(){this.abortController.abort()}}},56086:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(){this.callbacks=new Set}addCallback(e=(()=>{})){this.callbacks.add(e),e(this.currentMessage)}callback(e){this.currentMessage=e,this.callbacks.forEach((t=>{t(e)}))}}},53472:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AbortSignal=t.AbortController=void 0;const o=r(16006);var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw new Error("unable to locate global object")};let i=void 0===n().AbortController?o.AbortController:n().AbortController;t.AbortController=i;let a=void 0===n().AbortController?o.AbortSignal:n().AbortSignal;t.AbortSignal=a},5742:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=o(r(12401));t.default=n.default},16006:(e,t)=>{function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=i(e)););return e}(e,t);if(o){var n=Object.getOwnPropertyDescriptor(o,t);return n.get?n.get.call(arguments.length<3?e:r):n.value}},s.apply(this,arguments)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(){r(this,e),Object.defineProperty(this,"listeners",{value:{},writable:!0,configurable:!0})}return n(e,[{key:"addEventListener",value:function(e,t,r){e in this.listeners||(this.listeners[e]=[]),this.listeners[e].push({callback:t,options:r})}},{key:"removeEventListener",value:function(e,t){if(e in this.listeners)for(var r=this.listeners[e],o=0,n=r.length;o<n;o++)if(r[o].callback===t)return void r.splice(o,1)}},{key:"dispatchEvent",value:function(e){if(e.type in this.listeners){for(var t=this.listeners[e.type].slice(),r=0,o=t.length;r<o;r++){var n=t[r];try{n.callback.call(this,e)}catch(e){Promise.resolve().then((function(){throw e}))}n.options&&n.options.once&&this.removeEventListener(e.type,n.callback)}return!e.defaultPrevented}}}]),e}(),u=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(f,e);var t,o,u=(t=f,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=i(t);if(o){var n=i(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return l(e)}(this,e)});function f(){var e;return r(this,f),(e=u.call(this)).listeners||c.call(l(e)),Object.defineProperty(l(e),"aborted",{value:!1,writable:!0,configurable:!0}),Object.defineProperty(l(e),"onabort",{value:null,writable:!0,configurable:!0}),Object.defineProperty(l(e),"reason",{value:void 0,writable:!0,configurable:!0}),e}return n(f,[{key:"toString",value:function(){return"[object AbortSignal]"}},{key:"dispatchEvent",value:function(e){"abort"===e.type&&(this.aborted=!0,"function"==typeof this.onabort&&this.onabort.call(this,e)),s(i(f.prototype),"dispatchEvent",this).call(this,e)}}]),f}(c),f=function(){function e(){r(this,e),Object.defineProperty(this,"signal",{value:new u,writable:!0,configurable:!0})}return n(e,[{key:"abort",value:function(e){var t;try{t=new Event("abort")}catch(e){"undefined"!=typeof document?document.createEvent?(t=document.createEvent("Event")).initEvent("abort",!1,!1):(t=document.createEventObject()).type="abort":t={type:"abort",bubbles:!1,cancelable:!1}}var r=e;if(void 0===r)if("undefined"==typeof document)(r=new Error("This operation was aborted")).name="AbortError";else try{r=new DOMException("signal is aborted without reason")}catch(e){(r=new Error("This operation was aborted")).name="AbortError"}this.signal.reason=r,this.signal.dispatchEvent(t)}},{key:"toString",value:function(){return"[object AbortController]"}}]),e}();"undefined"!=typeof Symbol&&Symbol.toStringTag&&(f.prototype[Symbol.toStringTag]="AbortController",u.prototype[Symbol.toStringTag]="AbortSignal"),t.AbortController=f,t.AbortSignal=u,t.abortableFetch=function(e){"function"==typeof e&&(e={fetch:e});var t=e,r=t.fetch,o=t.Request,n=void 0===o?r.Request:o,i=t.AbortController,a=t.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL,l=void 0!==a&&a;if(!function(e){return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL?(console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"),!0):"function"==typeof e.Request&&!e.Request.prototype.hasOwnProperty("signal")||!e.AbortController}({fetch:r,Request:n,AbortController:i,__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL:l}))return{fetch:r,Request:s};var s=n;(s&&!s.prototype.hasOwnProperty("signal")||l)&&((s=function(e,t){var r;t&&t.signal&&(r=t.signal,delete t.signal);var o=new n(e,t);return r&&Object.defineProperty(o,"signal",{writable:!1,enumerable:!1,configurable:!0,value:r}),o}).prototype=n.prototype);var c=r;return{fetch:function(e,t){var r=s&&s.prototype.isPrototypeOf(e)?e.signal:t?t.signal:void 0;if(r){var o;try{o=new DOMException("Aborted","AbortError")}catch(e){(o=new Error("Aborted")).name="AbortError"}if(r.aborted)return Promise.reject(o);var n=new Promise((function(e,t){r.addEventListener("abort",(function(){return t(o)}),{once:!0})}));return t&&t.signal&&delete t.signal,Promise.race([n,c(e,t)])}return c(e,t)},Request:s}}}}]);
//# sourceMappingURL=5742.7a517dd3.chunk.js.map