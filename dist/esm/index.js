import e,{createContext as s,useContext as t}from"react";const i=s(null),r=e.forwardRef(((s,r)=>{var{as:l,children:n}=s,a=function(e,s){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&s.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)s.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(t[i[r]]=e[i[r]])}return t}(s,["as","children"]);const o=t(i),c=l||"div",d=Object.assign({},a),u=Object.keys(d).filter((e=>o[e])).map((e=>{const s=o[e](d[e],!0);return delete d[e],Object.keys(s).join(" ")})).join(" "),f=a.className?a.className+" "+u:u;return e.createElement(c,Object.assign({ref:r},d,{className:f||void 0}),n)}));"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var l={exports:{}},n=l.exports=function(){const e=(e,s)=>{const t={};return"width"===s?Object.keys(e).map((s=>({alias:s,width:e[s].width}))).sort(((e,s)=>e.width>s.width?1:s.width>e.width?-1:0)).forEach(((i,r)=>{t[i.alias]=r?e[i.alias][s]:0})):Object.keys(e).forEach((i=>{t[i]=e[i][s]})),t},s=({bridge:e,bp:s,insertionType:t,node:i,context:r})=>{let l,n=r.document.getElementById("layouter-"+s);if(!n){n=r.document.createElement("style"),n.appendChild(r.document.createTextNode(""));const e=i.parentNode;switch(t){case"before":e.insertBefore(n,i);break;case"after":i.nextSibling?e.insertBefore(n,i.nextSibling):e.appendChild(n);break;case"append":i.appendChild(n)}n.id="layouter-"+s}return l=e?{method:n.sheet,node:n}:{method:{insertRule:e=>{n.appendChild(r.document.createTextNode(e))},rules:[]},node:n},l},t=({breakpoints:e,bridge:t,scope:i,context:r})=>{const l=i||{};return Object.keys(e).forEach((e=>{l[e]||(l[e]=s({bridge:t,bp:e,insertionType:"append",node:r.document.body,context:r}))})),l},i=(e,s)=>{const t={};return Object.keys(s).forEach((s=>t[s]=e[s])),t},r="1.9.0";let l,n={prefix:"",breakpoints:{xs:{width:360,cols:15},sm:{width:600,cols:25},md:{width:900,cols:31},lg:{width:1200,cols:41},xlg:{width:1536,cols:51}},bridge:!0,debug:!0,searchOnInit:!0,observer:!0};const a=({bps:s,bridge:r,scope:l,context:n})=>{const a=e(s,"width"),o=i(s,a);return{sizes:a,cols:e(s,"cols"),scope:t({breakpoints:o,bridge:r,scope:l,context:n}),breakpoints:o}},o=(e,s={})=>{const t=e.layouterConfig||{};return n={...n,...s,...t},l={context:e,...n,...a({bps:n.breakpoints,bridge:n.bridge,context:e}),styles:{},version:r},l},c=()=>l,d=(e,s)=>{l.styles[e]=s},u=e=>(l={...l,...e},e.breakpoints&&(l={...l,...a({bps:l.breakpoints,bridge:l.bridge,scope:l.scope,context:l.context})}),l),f=e=>{let s,t=e,i=!1;const r=t.includes("@");if(r){const e=t.split("@");t=e[0],s=e[1]}else{const e=c();s=Object.keys(e.breakpoints)[0]}return e.includes("!")&&(i=!0,s=s.replace(/!/g,""),t=t.replace(/!/g,"")),{widthBp:r,numbers:t,breakPoints:s,important:i}},p=(e,s,t)=>{const i=new Error;return i.name=e,i.message=s,c().debug&&(console.error(i),t&&console.log(t)),i},b=(e,s)=>{const t=100*e/s;return(t-Math.floor(t)!=0?t.toFixed(3):t)+"%"},m=e=>{const t=e.replace(/!/g,""),i=t.indexOf("@"),r=c(),l=r.scope,n=r.bridge,a=r.context;if(-1===i)return l[Object.keys(r.breakpoints)[0]];const o=t.substring(i+1);if(!o.includes("-"))return l[o];if("-"===o.substring(0,1)){if(l[o])return l[o];const e=o.substring(1);return l[o]=s({bridge:n,bp:o,insertionType:"before",node:l[e].node,context:a}),l[o]}if(l[o])return l[o];const d=o.split("-")[0];return l[o]=s({bridge:n,bp:o,insertionType:"after",node:l[d].node,context:a}),l[o]},h=e=>{const s=c();for(const t in e)if(!s.styles[t]){const s=m(t),i=e[t],r=s.method.rules;s.method.insertRule(i,r?r.length:0),d(t,i)}},x={jc:{ruleCss:"justify-content",classPrefix:"jc"},ai:{ruleCss:"align-items",classPrefix:"ai"},ce:{ruleCss:"center",classPrefix:"ce"},fs:{ruleCss:"flex-start",classPrefix:"fs"},fe:{ruleCss:"flex-end",classPrefix:"fe"},sb:{ruleCss:"space-between",classPrefix:"sb"},sa:{ruleCss:"space-around",classPrefix:"sa"},fw:{ruleCss:"flex-wrap",classPrefix:"fw"},nw:{ruleCss:"nowrap",classPrefix:"nw"},w:{ruleCss:"wrap",classPrefix:"w"},wr:{ruleCss:"wrap-reverse",classPrefix:"wr"},fd:{ruleCss:"flex-direction",classPrefix:"fd"},r:{ruleCss:"row",classPrefix:"r"},rr:{ruleCss:"row-reverse",classPrefix:"rr"},co:{ruleCss:"column",classPrefix:"co"},cor:{ruleCss:"column-reverse",classPrefix:"co"},au:{ruleCss:"auto",classPrefix:"au"},st:{ruleCss:"stretch",classPrefix:"st"},bl:{ruleCss:"baseline",classPrefix:"bl"},in:{ruleCss:"initial",classPrefix:"in"},ih:{ruleCss:"inherit",classPrefix:"ih"}},g={fg:{ruleCss:"flex-grow",classPrefix:"fg"},fh:{ruleCss:"flex-shrink",classPrefix:"fh"},as:{ruleCss:"align-self",classPrefix:"as"},or:{ruleCss:"order",classPrefix:"or"}},y={...g,"flex-grow":g.fg,"flex-shrink":g.fh,"align-self":g.as,order:g.or},P={...x,...y,"justify-content":x.jc,"align-items":x.ai,center:x.ce,"flex-start":x.fs,"flex-end":x.fe,"space-between":x.sb,"space-around":x.fs,"flex-wrap":x.fw,nowrap:x.nw,w:x.w,"wrap-reverse":x.wr,"flex-direction":x.fd,row:x.r,"row-reverse":x.rr,column:x.co,"column-reverse":x.cor,auto:x.au,stretch:x.st,baseline:x.bl,initial:x.in,inherit:x.ih},w=Object.keys(y),v=e=>"0¯"+e.replace("%",""),C=(e,s)=>{const t=c(),i=t.sizes,r=t.prefix,l=ce[e].ruleCss,n={};return Object.keys(s).forEach((a=>{const o=s[a].name;let c=o;if(o.includes("%")&&(c=o.replace(o,v(o))),c=(r?r+"-":"")+ce[e].classPrefix+"-"+c.replace(/\//g,"\\/").replace(/:/g,"\\:").replace("@","\\@").split(".").join("_"),t.styles[c])n[c]=t.styles[c];else{let t;if("flex"===e){t=s[a].value;const e=o.includes("!")?";display:flex !important;":";display:flex;",i=w.filter((e=>o.includes(e+":")));i.length?i.length+1!==o.split(":").length&&(t+=e):t+=e}else t=l+":"+s[a].value;let r="@media screen and ",d=!1;if(a.includes("-")){const e=a.split("-"),s=e[0];s&&(r+="(min-width: "+i[s]+"px) and ");const t=e[1];r+="(max-width: "+(i[t]-1)+"px)"}else i[a]?r+="(min-width: "+i[a]+"px)":(r="."+c.replace(/!/g,"\\!")+"{"+t+"}",d=!0);d||(r+="{."+c.replace(/!/g,"\\!")+"{"+t+"}}"),n[c]=r}})),n},k=[["/",""],["\\","/"],["/:",":"],["\\:",":"],["\\@","@"],["/@","@"]],j=e=>{const s={};for(const t in e){let i=t;k.forEach((e=>{i=i.split(e[0]).join(e[1])})),s[i]=e[t]}return s},O=e=>{const s=C(e.type,e.bps);return e.deep&&h(s),j(s)},M=(e,s=!1)=>{let t,i;const r={},l=c();let n,a,o;const d=Object.keys(l.breakpoints)[0];let u=!1;for(const s of e.split(" ")){let c=s;if(n=c,o=f(c),i=o.breakPoints,c=o.numbers,c.includes("/")){const e=c.split("/");t=[Number(e[0]),Number(e[1])]}else if(o.widthBp){if(i.includes("-")){u=p("SyntaxError","You can't determine a 'until breakpoint' when use the explicit columns max: "+e);break}t=[Number(c),l.cols[i]]}else t=[Number(c),l.cols[d]];a=b(t[0],t[1]),o.important&&(a+=" !important"),r[i]={name:n,value:a}}return u||O({type:"cols",bps:r,deep:s})},E=(e,s=!1)=>{const t={};let i=!1;const r=c(),l=Object.keys(r.breakpoints)[0];for(const s of e.split(" ")){let e;const r=f(s),n=r.breakPoints,a=r.numbers.split(":"),o=a[0],c=a[1];let d;if(w.includes(o))e=P[o].ruleCss+":"+c,d=c;else{if(!P[o]){i=p("Non-existent Alias","Don't exists the alias '"+o+"' in Flex vault.");break}if(!P[c]){i=p("Non-existent Alias","Don't exists the alias '"+c+"' in Flex vault.");break}e=P[o].ruleCss+":"+P[c].ruleCss,d=P[c].classPrefix}let u=n===l?"":"@"+n;r.important&&(e+=" !important",u+="!");let b=P[o].classPrefix+":"+d+u;if(t[n]){b.includes("@")&&(b=b.split("@")[0]);let s=t[n].name.split("@")[0];t[n].name.includes("!")&&!s.includes("!")&&(s+="!"),t[n].name=s+"-"+b+u,t[n].value+=";"+e}else t[n]={name:b,value:e}}return i||O({type:"flex",bps:t,deep:s})},N=["%","rem","em","ex","vw","vh","pt","cm","pc"],T=e=>{let s;return e.includes("/")?(s=e.split("/"),s=b(parseFloat(s[0]),parseFloat(s[1]))):s="auto"===e?"auto":N.filter((s=>e.includes(s))).length||"0"===e?e:e+"px",s},A=(e,s,t=!1)=>{const i={};return e.split(" ").forEach((e=>{const s=f(e),t=s.breakPoints;let r=s.numbers.split("-").map((e=>T(e))).join(" ");s.important&&(r+=" !important"),i[t]={name:e,value:r}})),O({type:s,bps:i,deep:t})},B=(e,s=!1)=>A(e,"pad",s),L=(e,s=!1)=>A(e,"padt",s),S=(e,s=!1)=>A(e,"padr",s),F=(e,s=!1)=>A(e,"padb",s),D=(e,s=!1)=>A(e,"padl",s),R=(e,s=!1)=>A(e,"mar",s),H=(e,s=!1)=>A(e,"mart",s),I=(e,s=!1)=>A(e,"marr",s),W=(e,s=!1)=>A(e,"marb",s),Y=(e,s=!1)=>A(e,"marl",s),G=(e,s=!1)=>A(e,"mxw",s),X=(e,s=!1)=>A(e,"mxh",s),z=(e,s=!1)=>A(e,"miw",s),q=(e,s=!1)=>A(e,"mih",s),U=(e,s=!1)=>A(e,"hgt",s),$=(e,s=!1)=>A(e,"wdh",s),_={st:{ruleCss:"static",classPrefix:"st"},ab:{ruleCss:"absolute",classPrefix:"ab"},fi:{ruleCss:"fixed",classPrefix:"fi"},re:{ruleCss:"relative",classPrefix:"re"},si:{ruleCss:"sticky",classPrefix:"si"},in:{ruleCss:"initial",classPrefix:"in"},ih:{ruleCss:"inherit",classPrefix:"ih"}},J={..._,static:_.st,absolute:_.ab,fixed:_.fi,relative:_.re,sticky:_.si,initial:_.in,inherit:_.ih},K=(e,s=!1)=>{const t={};let i=!1;const r=c(),l=Object.keys(r.breakpoints)[0];for(const s of e.split(" ")){let e;const r=f(s),n=r.breakPoints,a=r.numbers;if(!J[a]){i=p("Non-existent Alias","Don't exists the alias '"+a+"' in Position vault.");break}e=J[a].ruleCss;const o=J[a].classPrefix;let c=n===l?"":"@"+n;r.important&&(e+=" !important",c+="!"),t[n]={name:o+c,value:e}}return i||O({type:"pos",bps:t,deep:s})},Q=(e,s=!1)=>A(e,"t",s),V=(e,s=!1)=>A(e,"r",s),Z=(e,s=!1)=>A(e,"b",s),ee=(e,s=!1)=>A(e,"l",s),se={bl:{ruleCss:"block",classPrefix:"bl"},il:{ruleCss:"inline",classPrefix:"il"},ib:{ruleCss:"inline-block",classPrefix:"ib"},fx:{ruleCss:"flex",classPrefix:"fx"},if:{ruleCss:"inline-flex",classPrefix:"if"},no:{ruleCss:"none",classPrefix:"no"},in:{ruleCss:"initial",classPrefix:"in"},ih:{ruleCss:"inherit",classPrefix:"ih"}},te={...se,block:se.bl,inline:se.il,"inline-block":se.ib,flex:se.fx,"inline-flex":se.if,none:se.no,initial:se.in,inherit:se.ih},ie=e=>{const s=e.builderA(e.values,e.insertStyles),t=e.builderB(e.values,e.insertStyles),i={};for(const e in s)i[e]=s[e];for(const e in t)i[e]=t[e];return i},re=(e,s=!1)=>ie({values:e,builderA:S,builderB:D,insertStyles:s}),le=(e,s=!1)=>ie({values:e,builderA:L,builderB:F,insertStyles:s}),ne=(e,s=!1)=>ie({values:e,builderA:I,builderB:Y,insertStyles:s}),ae=(e,s=!1)=>ie({values:e,builderA:H,builderB:W,insertStyles:s}),oe={cols:{build:M,ruleCss:"width",classPrefix:"c"},pad:{build:B,ruleCss:"padding",classPrefix:"p"},padt:{build:L,ruleCss:"padding-top",classPrefix:"pt"},padr:{build:S,ruleCss:"padding-right",classPrefix:"pr"},padb:{build:F,ruleCss:"padding-bottom",classPrefix:"pb"},padl:{build:D,ruleCss:"padding-left",classPrefix:"pl"},padx:{build:re,ruleCss:["padding-left","padding-right"],classPrefix:"px"},pady:{build:le,ruleCss:["padding-top","padding-bottom"],classPrefix:"py"},mar:{build:R,ruleCss:"margin",classPrefix:"m"},mart:{build:H,ruleCss:"margin-top",classPrefix:"mt"},marr:{build:I,ruleCss:"margin-right",classPrefix:"mr"},marb:{build:W,ruleCss:"margin-bottom",classPrefix:"mb"},marl:{build:Y,ruleCss:"margin-left",classPrefix:"ml"},marx:{build:ne,ruleCss:["margin-left","margin-right"],classPrefix:"px"},mary:{build:ae,ruleCss:["margin-top","margin-bottom"],classPrefix:"py"},flex:{build:E,ruleCss:"display: flex",classPrefix:"fx"},mxw:{build:G,ruleCss:"max-width",classPrefix:"mxw"},mxh:{build:X,ruleCss:"max-height",classPrefix:"mxh"},miw:{build:z,ruleCss:"min-width",classPrefix:"miw"},mih:{build:q,ruleCss:"min-height",classPrefix:"mih"},wdh:{build:$,ruleCss:"width",classPrefix:"w"},hgt:{build:U,ruleCss:"height",classPrefix:"h"},pos:{build:K,ruleCss:"position",classPrefix:"pos"},t:{build:Q,ruleCss:"top",classPrefix:"t"},r:{build:V,ruleCss:"right",classPrefix:"r"},b:{build:Z,ruleCss:"bottom",classPrefix:"b"},l:{build:ee,ruleCss:"left",classPrefix:"l"},d:{build:(e,s=!1)=>{const t={};let i=!1;const r=c(),l=Object.keys(r.breakpoints)[0];for(const s of e.split(" ")){let e;const r=f(s),n=r.breakPoints,a=r.numbers;if(!te[a]){i=p("Non-existent Alias","Don't exists the alias '"+a+"' in display vault.");break}e=te[a].ruleCss;const o=te[a].classPrefix;let c=n===l?"":"@"+n;r.important&&(e+=" !important",c+="!"),t[n]={name:o+c,value:e}}return i||O({type:"d",bps:t,deep:s})},ruleCss:"display",classPrefix:"d"}},ce={...oe,c:oe.cols,fx:oe.flex,p:oe.pad,padding:oe.pad,pt:oe.padt,"padding-top":oe.padt,pr:oe.padr,"padding-right":oe.padr,pb:oe.padb,"padding-bottom":oe.padb,pl:oe.padl,"padding-left":oe.padl,py:oe.pady,"padding-y":oe.pady,px:oe.padx,"padding-x":oe.padx,m:oe.mar,margin:oe.mar,mt:oe.mart,"margin-top":oe.mart,mr:oe.marr,"margin-right":oe.marr,mb:oe.marb,"margin-bottom":oe.marb,ml:oe.marl,"margin-left":oe.marl,my:oe.mary,"margin-y":oe.mary,mx:oe.marx,"margin-x":oe.marx,w:oe.wdh,width:oe.wdh,h:oe.hgt,height:oe.hgt,"max-width":oe.mxw,"max-height":oe.mxh,"min-width":oe.miw,"min-height":oe.mih,position:oe.pos,top:oe.t,right:oe.r,bottom:oe.b,left:oe.l,display:oe.d},de=e=>{const s={},t=e.attributes,i=Object.keys(ce);return Array.prototype.forEach.call(t,(e=>{i.includes(e.name)&&""!==e.value&&(s[e.name]=e.value.trim().split(" ").filter((e=>e)).join(" "))})),s},ue=(e,s=!1)=>{const t={};let i=!1;for(const r in e){const l=ce[r].build(e[r],s);if(l instanceof Error){i=l;break}t[r]=l}return i||t},fe=(e,s,t)=>new Promise((i=>{const r=c(),l=s.split(" ");let n=l;if(!t&&(n=l.filter((s=>!e.classList.contains(s))),!n.length))return void i();const a=new r.context.MutationObserver((e=>{const s=e[0].target.className.split(" ");l.every((e=>s.includes(e)))&&(a.disconnect(),i())}));if(a.observe(e,{childList:!1,subtree:!1,attributes:!0,attributeFilter:["class"],characterData:!1}),t)e.className=s;else{const s=e.hasAttribute("class")?" ":"";e.className+=s+n.join(" ")}})),pe=(e,s,t)=>new Promise((i=>{if(!e.hasAttribute(s))return void i();const r=new t.MutationObserver((()=>{r.disconnect(),i()}));r.observe(e,{childList:!1,subtree:!1,attributes:!0,attributeFilter:[s],characterData:!1}),e.removeAttribute(s)})),be=(e,s,t)=>new Promise((i=>{const r=s.map((s=>pe(e,s,t)));Promise.all(r).then((()=>i()))})),me=(e,s)=>new Promise((t=>{const i=c();Array.isArray(s)?be(e,s,i.context).then(t):pe(e,s,i.context).then(t)})),he=({node:e,directive:s,classes:t,resolve:i})=>{const r=c();me(e,s).then((()=>fe(e,t))).then((()=>{i();const s=new r.context.CustomEvent("layout:ready");e.dispatchEvent(s)}))},xe=(e,s)=>new Promise(((t,i)=>{const r=s||de(e),l=Object.keys(r);if(!l.length)return void i(p("Parameter Missing","don't exists any parameter to process",e));const n={};for(const e in r)n[e]=r[e];const a=ue(n,!0);if(a instanceof Error)return void i(a);const o=a,c=Object.keys(o).map((e=>Object.keys(o[e]))).flat().join(" ");he({node:e,directive:l,classes:c,resolve:t})})),ge=(e,s)=>s.map((s=>e.getAttribute(s))).filter((e=>e)).join(" ")||p("Empty",'The value of the directives "'+s.join(", ")+'" are empty',e),ye=(e,s)=>new Promise(((t,i)=>{const r=s||ge(e,["flex","fx"]);if(!r)return i(r);const l=E(r,!0);l instanceof Error?i(l):he({node:e,directive:"flex",classes:Object.keys(l).join(" "),resolve:t})})),Pe=(e,s)=>new Promise(((t,i)=>{const r=s||ge(e,["c","cols"]);if(!r)return i(r);const l=M(r,!0);if(l instanceof Error)return void i(l);const n=Object.keys(l).join(" ");he({node:e,directive:"cols",classes:n,resolve:t})})),we=(e,s,t)=>new Promise(((i,r)=>{const l=t||ge(e,s);if(!l)return r(l);const n=s[0],a=A(l,n,!0),o=Object.keys(a).join(" ");he({node:e,directive:n,classes:o,resolve:i})})),ve=(e,s)=>we(e,["hgt","h"],s),Ce=(e,s)=>we(e,["marb","mb","margin-bottom"],s),ke=(e,s)=>we(e,["marl","ml","margin-left"],s),je=(e,s)=>we(e,["marr","mr","margin-right"],s),Oe=(e,s)=>we(e,["mar","m","margin"],s),Me=(e,s)=>we(e,["mart","mt","margin-top"],s),Ee=(e,s)=>we(e,["mxw","max-width"],s),Ne=(e,s)=>we(e,["mih","min-height"],s),Te=(e,s)=>we(e,["miw","min-width"],s),Ae=(e,s)=>we(e,["padb","pb","padding-bottom"],s),Be=(e,s)=>we(e,["padl","pl","padding-left"],s),Le=(e,s)=>we(e,["padr","pr","padding-right"],s),Se=(e,s)=>we(e,["pad","p","padding"],s),Fe=(e,s)=>we(e,["padt","pt","padding-top"],s),De=(e,s)=>we(e,["wdh","width"],s),Re=(e,s)=>we(e,["mxh","max-height"],s),He=(e,s)=>we(e,["pos","position"],s),Ie=(e,s)=>we(e,["t","top"],s),We=(e,s)=>we(e,["r","right"],s),Ye=(e,s)=>we(e,["b","bottom"],s),Ge=(e,s)=>we(e,["l","left"],s),Xe=e=>new Promise(((s,t)=>{const i=e.vals||ge(e.Node,e.directives);if(!i)return t(i);const r=e.builder(i,!0),l=Object.keys(r).join(" ");he({node:e.Node,directive:e.directives,classes:l,resolve:s})})),ze=(e,s)=>Xe({Node:e,directives:["padx","px","padding-x"],builder:re,vals:s}),qe=(e,s)=>Xe({Node:e,directives:["pady","py","padding-y"],builder:le,vals:s}),Ue=(e,s)=>Xe({Node:e,directives:["marx","px","margin-x"],builder:ne,vals:s}),$e=(e,s)=>Xe({Node:e,directives:["mary","py","margin-y"],builder:ae,vals:s}),_e=e=>new Promise((s=>{const t=[...new Set(Object.keys(ce).map((e=>ce[e].classPrefix)))],i=e.className.split(" ").filter((e=>!e.includes("-")||!t.find((s=>{const t=s.length;return e.substring(0,t+1)===s+"-"}))));if(i.length){const t=i.join(" ");fe(e,t,!0).then((()=>{s()}))}else me(e,"class").then((()=>{s()}))})),Je=["animate","animateMotion","animateTransform","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","hatch","hatchpath","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","use","view"],Ke=(e,s)=>new Promise((t=>{const i=Object.keys(ce).map((e=>`[${e}]`)).join(", "),r=s.querySelectorAll(i);if(!r.length)return void t(e);const l=new Set;Array.prototype.filter.call(r,(e=>!Je.includes(e.nodeName.toLowerCase()))).forEach((e=>l.add(e)));const n=[];l.forEach((s=>{n.push(e.set(s))})),Promise.all(n).then(t)})),Qe=e=>{const s=c(),t={childList:!0,subtree:!0,attributes:!0,attributeFilter:Object.keys(ce),characterData:!1};new e.context.MutationObserver((s=>{for(const t of s)if("childList"===t.type){if(!t.addedNodes.length)continue;t.addedNodes.forEach((s=>{if(s instanceof HTMLElement){const t=e.getParameters(s);Object.keys(t).length&&e.set(s,t),Ke(e,s)}}))}else if("attributes"===t.type){const s=t.target;if(s instanceof HTMLElement){const t=e.getParameters(s);Object.keys(t).length&&e.set(s,t)}}})).observe(s.context.document.body,t)},Ve=(e,s={})=>{const t=o(e,s),i={...t,getParameters:de,updateConfig:u,insertRules:h,build:ue,buildCols:M,buildFlex:E,buildPad:B,buildPadTop:L,buildPadRight:S,buildPadBottom:F,buildPadLeft:D,buildPadX:re,buildPadY:le,buildMar:R,buildMarTop:H,buildMarRight:I,buildMarBottom:W,buildMarLeft:Y,buildMarX:ne,buildMarY:ae,buildMaxWidth:G,buildMaxHeight:X,buildMinWidth:z,buildMinHeight:q,buildHeight:U,buildWidth:$,set:xe,setCols:Pe,setFlex:ye,setMar:Oe,setMarTop:Me,setMarRight:je,setMarBottom:Ce,setMarLeft:ke,setMarX:Ue,setMarY:$e,setPad:Se,setPadTop:Fe,setPadRight:Le,setPadBottom:Ae,setPadLeft:Be,setPadX:ze,setPadY:qe,setWidth:De,setMinWidth:Te,setMaxWidth:Ee,setHeight:ve,setMinHeight:Ne,setMaxHeight:Re,buildPosition:K,buildTop:Q,buildRight:V,buildBottom:Z,buildLeft:ee,setPosition:He,setTop:Ie,setRight:We,setBottom:Ye,setLeft:Ge,reset:_e,processors:ce};return t.searchOnInit?Ke(i,e.document).then((()=>{i.ready&&i.ready(i),t.observer&&Qe(i)})):(t.observer&&Qe(i),i.ready&&i.ready(i)),i};return Ve}();const a=({config:s={},children:t})=>{const r=n(window,Object.assign(Object.assign({},s),{searchOnInit:!1,observer:!1})),l={};return Object.keys(r.processors).forEach((e=>{let s;if(e.includes("-")){const t=e.split("-");s=t[0]+t[1].substring(0,1).toUpperCase()+t[1].substring(1)}else s=e;l[s]=r.processors[e].build})),e.createElement(i.Provider,{value:l},t)};export{r as Box,a as Provider};
//# sourceMappingURL=index.js.map
