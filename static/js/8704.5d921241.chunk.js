"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8704],{58704:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ee});var n=a(7552),r=a(68446),o=a(48171),s=a(98360),l=a(29629),c=a(25467),i=a(99546),d=a(36715),u=a(85059),m=a(27897),p=a(96403),g=a(22133),A=a(5401),f=a(9937),h=a(75785),y=a(36422),k=a(68584),b=a(87731),E=a(1343),v=a(33371),w=a(32808),x=a(91468),N=a(48735),S=a(943),C=a(17125),T=a(1773),M=a(25355),D=a(58181),I=a(45331),W=a(93117),P=a(61723),R=a(78126),j=a(57610);const B=(0,h.n9)()((e=>({paper:{display:"flex",flexDirection:"column",padding:e.spacing(1)},card:{marginTop:e.spacing(1)}}))),O=(0,r.observer)((function({model:e}){const{classes:t}=B(),[a,r]=(0,n.useState)(""),[o,s]=(0,n.useState)(""),[l,c]=(0,n.useState)(["Name","ID"]),[i,d]=(0,n.useState)(["CDS","exon"]),u=[{label:"Indexing attributes",values:l},{label:"Feature types to exclude",values:i}];return(0,n.useEffect)((()=>{e.setTextIndexingConf({attributes:l,exclude:i})}),[e,l,i]),n.createElement(S.A,{className:t.paper},n.createElement(C.A,null,"Indexing configuration"),u.map(((e,u)=>n.createElement(T.A,{raised:!0,key:e.label,className:t.card},n.createElement(M.A,null,n.createElement(C.A,null,e.label),n.createElement(D.A,{disablePadding:!0},e.values.map(((t,a)=>n.createElement(I.Ay,{key:a,disableGutters:!0},n.createElement(E.A,{value:t,InputProps:{endAdornment:n.createElement(W.A,{position:"end"},n.createElement(P.A,{onClick:()=>{const t=e.values.filter(((e,t)=>t!==a));0===u?c(t):d(t)}},n.createElement(R.A,null)))}})))),n.createElement(I.Ay,{disableGutters:!0},n.createElement(E.A,{value:0===u?a:o,placeholder:"add new",onChange:e=>{0===u?r(e.target.value):s(e.target.value)},InputProps:{endAdornment:n.createElement(W.A,{position:"end"},n.createElement(P.A,{onClick:()=>{0===u?(c([...l,a]),r("")):(d([...i,o]),s(""))},disabled:0===u?""===a:""===o,"data-testid":"stringArrayAdd-Feat"},n.createElement(j.A,null)))}}))))))))})),F=(0,h.n9)()((e=>({spacing:{marginBottom:e.spacing(3)}}))),U=(0,r.observer)((({model:e})=>{const{classes:t}=F(),{pluginManager:a}=(0,i.getEnv)(e),{trackType:r}=e,o=a.getTrackElements();return n.createElement(E.A,{className:t.spacing,value:r,variant:"outlined",label:"Track type",helperText:"Select track type",select:!0,fullWidth:!0,onChange:t=>e.setTrackType(t.target.value),SelectProps:{SelectDisplayProps:{"data-testid":"trackTypeSelect"}}},o.map((({name:e,displayName:t})=>n.createElement(l.A,{key:e,value:e},t))))}));var $=a(55851);const J=(0,h.n9)()((e=>({spacing:{marginBottom:e.spacing(3)}}))),L=(0,r.observer)((({model:e})=>{const{classes:t}=J(),{trackAdapter:a}=e,{pluginManager:r}=(0,i.getEnv)(e);return n.createElement(E.A,{className:t.spacing,value:"UNKNOWN"!==a?.type?a?.type:"",label:"Adapter type",variant:"outlined",helperText:"Select an adapter type",select:!0,fullWidth:!0,onChange:t=>e.setAdapterHint(t.target.value),SelectProps:{SelectDisplayProps:{"data-testid":"adapterTypeSelect"}}},Object.entries(function(e){const t={};return e.forEach((e=>{const a=e.adapterMetadata?.category||"Default";t[a]||(t[a]=[]),t[a].push(e)})),t}(r.getAdapterElements().filter((e=>!e.adapterMetadata?.hiddenFromGUI)))).map((([e,t])=>[n.createElement($.A,{key:e},e),t.map((e=>n.createElement(l.A,{key:e.name,value:e.name},e.displayName)))])))})),_=(0,h.n9)()((e=>({spacing:{marginBottom:e.spacing(3)}})));function G({trackAdapter:e,trackType:t}){const{classes:a}=_(),{type:r,subadapter:o}=e;return"SNPCoverageAdapter"===r?n.createElement(d.A,{className:a.spacing},"Selected ",n.createElement("code",null,t),". Using adapter ",n.createElement("code",null,r)," with subadapter ",n.createElement("code",null,o?.type),". Please enter a track name and, if necessary, update the track type."):n.createElement(d.A,{className:a.spacing},"Using adapter ",n.createElement("code",null,r)," and guessing track type"," ",n.createElement("code",null,t),". Please enter a track name and, if necessary, update the track type.")}function H({model:e}){const{classes:t}=_();return n.createElement(n.Fragment,null,n.createElement(d.A,{className:t.spacing},"JBrowse was not able to guess the adapter type for this data, but it may be in the list below. If not, you can"," ",n.createElement(b.A,{href:"https://github.com/GMOD/jbrowse-components/releases",target:"_blank",rel:"noopener noreferrer"},"check for new releases")," ","of JBrowse to see if they support this data type or"," ",n.createElement(b.A,{href:"https://github.com/GMOD/jbrowse-components/issues/new",target:"_blank",rel:"noopener noreferrer"},"file an issue")," ","and add a feature request for this data type."),n.createElement(L,{model:e}))}const V=(0,r.observer)((function({model:e}){const{classes:t}=_(),[a,r]=(0,n.useState)(!0),s=(0,i.getSession)(e),{trackName:l,trackAdapter:c,trackType:u,warningMessage:m,adapterHint:p}=e;if((0,n.useEffect)((()=>{""===p&&c&&e.setAdapterHint(c.type)}),[p,c,c?.type,e]),e.unsupported)return n.createElement(d.A,{className:t.spacing},"This version of JBrowse cannot display data of this type. It is possible, however, that there is a newer version that can display them. You can"," ",n.createElement(b.A,{href:"https://github.com/GMOD/jbrowse-components/releases",target:"_blank",rel:"noopener noreferrer"},"check for new releases")," ","of JBrowse or"," ",n.createElement(b.A,{href:"https://github.com/GMOD/jbrowse-components/issues/new",target:"_blank",rel:"noopener noreferrer"},"file an issue")," ","and add a feature request for this data type.");if(c?.type===x.UNKNOWN)return n.createElement(H,{model:e});if(!c?.type)return n.createElement(d.A,null,"Could not recognize this data type.");const g=(0,i.isSupportedIndexingAdapter)(c?.type);return n.createElement("div",null,c?n.createElement(G,{trackAdapter:c,trackType:u}):null,m?n.createElement(d.A,{style:{color:"orange"}},m):null,n.createElement(E.A,{className:t.spacing,label:"trackName",helperText:"A name for this track",fullWidth:!0,value:l,onChange:t=>e.setTrackName(t.target.value),inputProps:{"data-testid":"trackNameInput"}}),n.createElement(L,{model:e}),n.createElement(U,{model:e}),n.createElement(N.AssemblySelector,{session:s,helperText:"Select assembly to add track to",selected:e.assembly,onChange:t=>e.setAssembly(t),TextFieldProps:{fullWidth:!0,SelectProps:{SelectDisplayProps:{"data-testid":"assemblyNameSelect"}}}}),i.isElectron&&g&&n.createElement(o.A,null,n.createElement(v.A,{label:"Index track for text searching?",control:n.createElement(w.A,{checked:a,onChange:t=>{r(t.target.checked),e.setTextIndexTrack(t.target.checked)}})})),i.isElectron&&a&&g?n.createElement(O,{model:e}):null)})),q=(0,h.n9)()((e=>({paper:{padding:e.spacing(2)},spacer:{height:e.spacing(8)}}))),z=(0,r.observer)((function({model:e}){const{classes:t}=q(),a=(0,y.getRoot)(e);return n.createElement(S.A,{className:t.paper},n.createElement(N.FileSelector,{name:"Main file",description:"",location:e.trackData,setLocation:e.setTrackData,setName:e.setTrackName,rootModel:a}),n.createElement("div",{className:t.spacer}),n.createElement(N.FileSelector,{name:"Index file",description:"(Optional) The URL of the index file is automatically inferred from the URL of the main file if it is not supplied.",location:e.indexTrackData,setLocation:e.setIndexTrackData,setName:e.setTrackName,rootModel:a}))})),K=(0,h.n9)()((e=>({root:{marginTop:e.spacing(1)},stepper:{backgroundColor:e.palette.background.default},button:{marginRight:e.spacing(1)},actionsContainer:{marginTop:e.spacing(10),marginBottom:e.spacing(2)},alertContainer:{padding:`${e.spacing(2)}px 0px ${e.spacing(2)}px 0px`}}))),Y=["Enter track data","Confirm track type"],X=(0,r.observer)((function({model:e}){const[t,a]=(0,n.useState)(0),{classes:r}=K(),{jobsManager:o}=(0,y.getRoot)(e),s=(0,i.getSession)(e),{assembly:l,trackAdapter:c,trackData:h,trackName:b,trackType:E,textIndexTrack:v,textIndexingConf:w}=e,[x,N]=(0,n.useState)();async function S(){if(t!==Y.length-1)return void a(t+1);const n=[`${b.toLowerCase().replaceAll(" ","_")}-${Date.now()}`,s.adminMode?"":"-sessionTrack"].join(""),r=s.assemblyManager.get(l);if((0,i.isSessionWithAddTracks)(s))if(r&&c&&"UNKNOWN"!==c.type){if(s.addTrackConf({trackId:n,type:E,name:b,assemblyNames:[l],adapter:{...c,sequenceAdapter:(0,k.getConf)(r,["sequence","adapter"])}}),e.view.showTrack?.(n),i.isElectron&&v&&(0,i.isSupportedIndexingAdapter)(c.type)){const e=b+"-index",t={indexingParams:{...w||{attributes:["Name","ID"],exclude:["CDS","exon"]},assemblies:[l],tracks:[n],indexType:"perTrack",name:e,timestamp:(new Date).toISOString()},name:e,cancelCallback:()=>o.abortJob()};o.queueJob(t)}e.clearData(),(0,i.isSessionModelWithWidgets)(s)&&s.hideWidget(e)}else N("Failed to add track.\nThe configuration of this file is not currently supported.");else N("Unable to add tracks to this model")}function C(){switch(t){case 0:return!h;case 1:return!(b&&E&&c?.type&&l);default:return!0}}return n.createElement("div",{className:r.root},n.createElement(u.A,{className:r.stepper,activeStep:t,orientation:"vertical"},Y.map(((o,s)=>n.createElement(m.A,{key:o},n.createElement(p.A,null,o),n.createElement(g.A,null,function(t){switch(t){case 0:return n.createElement(z,{model:e});case 1:return n.createElement(V,{model:e});default:return n.createElement(d.A,null,"Unknown step")}}(s),n.createElement("div",{className:r.actionsContainer},n.createElement(A.A,{disabled:0===t,onClick:()=>{N(void 0),a(t-1)},className:r.button},"Back"),n.createElement(A.A,{disabled:C(),variant:"contained",color:"primary",onClick:S,className:r.button,"data-testid":"addTrackNextButton"},t===Y.length-1?"Add":"Next")),x?n.createElement("div",{className:r.alertContainer},n.createElement(f.A,{severity:"error"},x)):null))))))})),Q=(0,h.n9)()({textbox:{width:"100%"},submit:{marginTop:25,marginBottom:100,display:"block"}}),Z=(0,r.observer)((function({model:e}){const{classes:t}=Q(),[a,r]=(0,n.useState)(""),[o,s]=(0,n.useState)();return n.createElement("div",null,o?n.createElement(N.ErrorMessage,{error:o}):null,n.createElement(E.A,{multiline:!0,rows:10,value:a,onChange:e=>r(e.target.value),placeholder:"Paste track config or array of track configs in JSON format",variant:"outlined",className:t.textbox}),n.createElement(A.A,{variant:"contained",className:t.submit,onClick:()=>{try{s(void 0);const t=(0,i.getSession)(e),n=JSON.parse(a),r=Array.isArray(n)?n:[n];(0,i.isSessionWithAddTracks)(t)&&(0,i.isSessionModelWithWidgets)(t)&&(r.forEach((e=>t.addTrackConf(e))),r.forEach((t=>e.view.showTrack(t.trackId))),e.clearData(),t.hideWidget(e))}catch(e){console.error(e),s(e)}}},"Submit"))})),ee=(0,r.observer)((function({model:e}){const[t,a]=(0,n.useState)("Default add track workflow"),{pluginManager:r}=(0,i.getEnv)(e),d=r.getAddTrackWorkflowElements(),u={"Default add track workflow":X,"Add track JSON":Z,...Object.fromEntries(d.map((e=>[e.name,e.ReactComponent])))},m=u[t]?t:"Default add track workflow",p=u[m];return n.createElement(n.Fragment,null,n.createElement(o.A,null,n.createElement(s.A,{value:m,onChange:e=>a(e.target.value)},Object.keys(u).map((e=>n.createElement(l.A,{key:e,value:e},e)))),n.createElement(c.A,null,"Type of add track workflow")),n.createElement("br",null),n.createElement(p,{model:e}))}))},78126:(e,t,a)=>{var n=a(92120);t.A=void 0;var r=n(a(33380)),o=a(69500);t.A=(0,r.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},1773:(e,t,a)=>{a.d(t,{A:()=>A});var n=a(6614),r=a(83673),o=a(7552),s=a(93878),l=a(60827),c=a(51148),i=a(31049),d=a(943),u=a(50885),m=a(69500);const p=["className","raised"],g=(0,c.Ay)(d.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),A=o.forwardRef((function(e,t){const a=(0,i.A)({props:e,name:"MuiCard"}),{className:o,raised:c=!1}=a,d=(0,r.A)(a,p),A=(0,n.A)({},a,{raised:c}),f=(e=>{const{classes:t}=e;return(0,l.A)({root:["root"]},u.T,t)})(A);return(0,m.jsx)(g,(0,n.A)({className:(0,s.A)(f.root,o),elevation:c?8:void 0,ref:t,ownerState:A},d))}))},50885:(e,t,a)=>{a.d(t,{A:()=>s,T:()=>o});var n=a(55549),r=a(9577);function o(e){return(0,r.Ay)("MuiCard",e)}const s=(0,n.A)("MuiCard",["root"])},25355:(e,t,a)=>{a.d(t,{A:()=>g});var n=a(6614),r=a(83673),o=a(7552),s=a(93878),l=a(60827),c=a(51148),i=a(31049),d=a(61823),u=a(69500);const m=["className","component"],p=(0,c.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),g=o.forwardRef((function(e,t){const a=(0,i.A)({props:e,name:"MuiCardContent"}),{className:o,component:c="div"}=a,g=(0,r.A)(a,m),A=(0,n.A)({},a,{component:c}),f=(e=>{const{classes:t}=e;return(0,l.A)({root:["root"]},d.h,t)})(A);return(0,u.jsx)(p,(0,n.A)({as:c,className:(0,s.A)(f.root,o),ownerState:A,ref:t},g))}))},61823:(e,t,a)=>{a.d(t,{A:()=>s,h:()=>o});var n=a(55549),r=a(9577);function o(e){return(0,r.Ay)("MuiCardContent",e)}const s=(0,n.A)("MuiCardContent",["root"])},87731:(e,t,a)=>{a.d(t,{A:()=>v});var n=a(83673),r=a(6614),o=a(7552),s=a(93878),l=a(60827),c=a(15622),i=a(51148),d=a(31049),u=a(9527),m=a(51584),p=a(36715),g=a(58161),A=a(20605),f=a(22991);const h={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=({theme:e,ownerState:t})=>{const a=(e=>h[e]||e)(t.color),n=(0,A.Yn)(e,`palette.${a}`,!1)||t.color,r=(0,A.Yn)(e,`palette.${a}Channel`);return"vars"in e&&r?`rgba(${r} / 0.4)`:(0,f.X4)(n,.4)};var k=a(69500);const b=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],E=(0,i.Ay)(p.A,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`underline${(0,c.A)(a.underline)}`],"button"===a.component&&t.button]}})((({theme:e,ownerState:t})=>(0,r.A)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,r.A)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:y({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${g.A.focusVisible}`]:{outline:"auto"}}))),v=o.forwardRef((function(e,t){const a=(0,d.A)({props:e,name:"MuiLink"}),{className:i,color:p="primary",component:A="a",onBlur:f,onFocus:y,TypographyClasses:v,underline:w="always",variant:x="inherit",sx:N}=a,S=(0,n.A)(a,b),{isFocusVisibleRef:C,onBlur:T,onFocus:M,ref:D}=(0,u.A)(),[I,W]=o.useState(!1),P=(0,m.A)(t,D),R=(0,r.A)({},a,{color:p,component:A,focusVisible:I,underline:w,variant:x}),j=(e=>{const{classes:t,component:a,focusVisible:n,underline:r}=e,o={root:["root",`underline${(0,c.A)(r)}`,"button"===a&&"button",n&&"focusVisible"]};return(0,l.A)(o,g.t,t)})(R);return(0,k.jsx)(E,(0,r.A)({color:p,className:(0,s.A)(j.root,i),classes:v,component:A,onBlur:e=>{T(e),!1===C.current&&W(!1),f&&f(e)},onFocus:e=>{M(e),!0===C.current&&W(!0),y&&y(e)},ref:P,ownerState:R,variant:x,sx:[...Object.keys(h).includes(p)?[]:[{color:p}],...Array.isArray(N)?N:[N]]},S))}))},58161:(e,t,a)=>{a.d(t,{A:()=>s,t:()=>o});var n=a(55549),r=a(9577);function o(e){return(0,r.Ay)("MuiLink",e)}const s=(0,n.A)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"])}}]);
//# sourceMappingURL=8704.5d921241.chunk.js.map