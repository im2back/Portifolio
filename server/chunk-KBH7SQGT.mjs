import './polyfills.server.mjs';
import{A as U,B,E as k,I as W,L as z,a as h,b as p,c as C,d as w,e as P,f as y,g as F,h as v,i as O,j as L,k as l,l as r,m as d,n as R,o as M,p as m,q as u,x as H,z as E}from"./chunk-AHV72AIX.mjs";import{a as A}from"./chunk-VVCT4QZE.mjs";var G=(()=>{let t=class t{constructor(){this.title="portifolio"}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=p({type:t,selectors:[["app-root"]],standalone:!0,features:[u],decls:1,vars:0,template:function(a,s){a&1&&d(0,"router-outlet")},dependencies:[W]});let n=t;return n})();var N=class n{static isArray(t,e=!0){return Array.isArray(t)&&(e||t.length!==0)}static isObject(t,e=!0){return typeof t=="object"&&!Array.isArray(t)&&t!=null&&(e||Object.keys(t).length!==0)}static equals(t,e,i){return i?this.resolveFieldData(t,i)===this.resolveFieldData(e,i):this.equalsByValue(t,e)}static equalsByValue(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var i=Array.isArray(t),a=Array.isArray(e),s,o,c;if(i&&a){if(o=t.length,o!=e.length)return!1;for(s=o;s--!==0;)if(!this.equalsByValue(t[s],e[s]))return!1;return!0}if(i!=a)return!1;var g=this.isDate(t),T=this.isDate(e);if(g!=T)return!1;if(g&&T)return t.getTime()==e.getTime();var I=t instanceof RegExp,S=e instanceof RegExp;if(I!=S)return!1;if(I&&S)return t.toString()==e.toString();var _=Object.keys(t);if(o=_.length,o!==Object.keys(e).length)return!1;for(s=o;s--!==0;)if(!Object.prototype.hasOwnProperty.call(e,_[s]))return!1;for(s=o;s--!==0;)if(c=_[s],!this.equalsByValue(t[c],e[c]))return!1;return!0}return t!==t&&e!==e}static resolveFieldData(t,e){if(t&&e){if(this.isFunction(e))return e(t);if(e.indexOf(".")==-1)return t[e];{let i=e.split("."),a=t;for(let s=0,o=i.length;s<o;++s){if(a==null)return null;a=a[i[s]]}return a}}else return null}static isFunction(t){return!!(t&&t.constructor&&t.call&&t.apply)}static reorderArray(t,e,i){let a;t&&e!==i&&(i>=t.length&&(i%=t.length,e%=t.length),t.splice(i,0,t.splice(e,1)[0]))}static insertIntoOrderedArray(t,e,i,a){if(i.length>0){let s=!1;for(let o=0;o<i.length;o++)if(this.findIndexInList(i[o],a)>e){i.splice(o,0,t),s=!0;break}s||i.push(t)}else i.push(t)}static findIndexInList(t,e){let i=-1;if(e){for(let a=0;a<e.length;a++)if(e[a]==t){i=a;break}}return i}static contains(t,e){if(t!=null&&e&&e.length){for(let i of e)if(this.equals(t,i))return!0}return!1}static removeAccents(t){return t&&(t=t.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),t}static isDate(t){return Object.prototype.toString.call(t)==="[object Date]"}static isEmpty(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!this.isDate(t)&&typeof t=="object"&&Object.keys(t).length===0}static isNotEmpty(t){return!this.isEmpty(t)}static compare(t,e,i,a=1){let s=-1,o=this.isEmpty(t),c=this.isEmpty(e);return o&&c?s=0:o?s=a:c?s=-a:typeof t=="string"&&typeof e=="string"?s=t.localeCompare(e,i,{numeric:!0}):s=t<e?-1:t>e?1:0,s}static sort(t,e,i=1,a,s=1){let o=n.compare(t,e,a,i),c=i;return(n.isEmpty(t)||n.isEmpty(e))&&(c=s===1?i:s),c*o}static merge(t,e){if(!(t==null&&e==null)){{if((t==null||typeof t=="object")&&(e==null||typeof e=="object"))return A(A({},t||{}),e||{});if((t==null||typeof t=="string")&&(e==null||typeof e=="string"))return[t||"",e||""].join(" ")}return e||t}}static isPrintableCharacter(t=""){return this.isNotEmpty(t)&&t.length===1&&t.match(/\S| /)}static getItemValue(t,...e){return this.isFunction(t)?t(...e):t}static findLastIndex(t,e){let i=-1;if(this.isNotEmpty(t))try{i=t.findLastIndex(e)}catch{i=t.lastIndexOf([...t].reverse().find(e))}return i}static findLast(t,e){let i;if(this.isNotEmpty(t))try{i=t.findLast(e)}catch{i=[...t].reverse().find(e)}return i}static deepEquals(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var i=Array.isArray(t),a=Array.isArray(e),s,o,c;if(i&&a){if(o=t.length,o!=e.length)return!1;for(s=o;s--!==0;)if(!this.deepEquals(t[s],e[s]))return!1;return!0}if(i!=a)return!1;var g=t instanceof Date,T=e instanceof Date;if(g!=T)return!1;if(g&&T)return t.getTime()==e.getTime();var I=t instanceof RegExp,S=e instanceof RegExp;if(I!=S)return!1;if(I&&S)return t.toString()==e.toString();var _=Object.keys(t);if(o=_.length,o!==Object.keys(e).length)return!1;for(s=o;s--!==0;)if(!Object.prototype.hasOwnProperty.call(e,_[s]))return!1;for(s=o;s--!==0;)if(c=_[s],!this.deepEquals(t[c],e[c]))return!1;return!0}return t!==t&&e!==e}},V=0;function K(n="pn_id_"){return V++,`${n}${V}`}function rt(){let n=[],t=(s,o)=>{let c=n.length>0?n[n.length-1]:{key:s,value:o},g=c.value+(c.key===s?0:o)+2;return n.push({key:s,value:g}),g},e=s=>{n=n.filter(o=>o.value!==s)},i=()=>n.length>0?n[n.length-1].value:0,a=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:a,set:(s,o,c)=>{o&&(o.style.zIndex=String(t(s,c)))},clear:s=>{s&&(e(a(s)),s.style.zIndex="")},getCurrent:()=>i()}}var Et=rt();var b=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=C({type:n});static \u0275inj=h({imports:[E]})}return n})();var Y=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=C({type:n});static \u0275inj=h({imports:[E,b]})}return n})();var mt=["*"],Q=(()=>{class n{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){this.getAttributes()}getAttributes(){let e=N.isEmpty(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=p({type:n,selectors:[["ng-component"]],hostAttrs:[1,"p-element","p-icon-wrapper"],inputs:{label:"label",spin:"spin",styleClass:"styleClass"},standalone:!0,features:[u],ngContentSelectors:mt,decls:1,vars:0,template:function(i,a){i&1&&(R(),M(0))},encapsulation:2,changeDetection:0})}return n})();var J=(()=>{class n extends Q{pathId;ngOnInit(){this.pathId="url(#"+K()+")"}static \u0275fac=(()=>{let e;return function(a){return(e||(e=P(n)))(a||n)}})();static \u0275cmp=p({type:n,selectors:[["SpinnerIcon"]],standalone:!0,features:[F,u],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,a){i&1&&(w(),l(0,"svg",0)(1,"g"),d(2,"path",1),r(),l(3,"defs")(4,"clipPath",2),d(5,"rect",3),r()()()),i&2&&(L(a.getClassNames()),v("aria-label",a.ariaLabel)("aria-hidden",a.ariaHidden)("role",a.role),y(),v("clip-path",a.pathId),y(3),O("id",a.pathId))},encapsulation:2})}return n})();var Z=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=C({type:n});static \u0275inj=h({imports:[E]})}return n})();var $=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=C({type:n});static \u0275inj=h({imports:[E,Z,b,J,b]})}return n})();var X=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=p({type:t,selectors:[["app-footer"]],standalone:!0,features:[u],decls:19,vars:0,consts:[[1,"container"],[1,"grid"],[1,"col-12",2,"align-items","center","justify-content","center","display","flex","flex-direction","column","padding","5px","margin","0"],[2,"display","flex"],[2,"font-size","12px"],["href","https://www.linkedin.com/in/jefferson-richards-sena-de-souza-4110a3222/","target","_blank"],["loading","lazy","src","https://img.shields.io/badge/-LinkedIn-%230077B5?style=flat&logo=linkedin&logoColor=white","target","_blank"],["href","https://github.com/im2back","target","_blank"],["loading","lazy","src","https://img.shields.io/badge/GitHub-white.svg?style=flat&logo=github&logoColor=black","target","_blank"],["href","mailto:jeff.trabalho@outlook.com","target","_blank"],["loading","lazy","src","https://img.shields.io/badge/Outlook-blue.svg?style=flat&logo=microsoftoutlook&logoColor=white","target","_blank"],["href","https://api.whatsapp.com/send?phone=5591992415042","target","_blank"],["loading","lazy","src","https://img.shields.io/badge/WhatsApp-black.svg?style=flat&logo=whatsapp&logoColor=green","target","_blank"]],template:function(a,s){a&1&&(l(0,"footer")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"p",4),m(6,"Entre em contato comigo"),r()(),l(7,"div")(8,"a",5),d(9,"img",6),r(),l(10,"a",7),d(11,"img",8),r(),l(12,"a",9),d(13,"img",10),r(),l(14,"a",11),d(15,"img",12),r()(),l(16,"div",3)(17,"p",4),m(18,"Copyright \xA9 2024 Designed by Jefferson"),r()()()()()())},styles:["footer[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;width:100%;height:150px;background-color:#060419fa;text-align:center;line-height:50px}a[_ngcontent-%COMP%]{color:#f0f8ff;text-decoration:none;margin-right:10px;margin-left:5px}p[_ngcontent-%COMP%]{text-align:center;color:#f0f8ff;text-indent:20px;font-size:18px;overflow-wrap:break-word;line-height:15px;font-family:Open Sans,sans-serif}@media (max-width :1199px){footer[_ngcontent-%COMP%]{position:fixed;height:100px;background-color:#060419fa;text-align:center;line-height:1px}}"]});let n=t;return n})();var tt=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=p({type:t,selectors:[["app-cabecalho"]],standalone:!0,features:[u],decls:6,vars:0,consts:[[1,"col-12",2,"border-bottom","1px solid white"]],template:function(a,s){a&1&&(l(0,"header")(1,"h1")(2,"strong"),m(3," Dev Java Full Stack "),r(),m(4," - Jefferson Richards Sena de Souza"),r()(),d(5,"div",0))},styles:["strong[_ngcontent-%COMP%]{color:#a93a3ac0}h1[_ngcontent-%COMP%]{color:#f0f8ff;text-align:center;font-family:Montserrat,sans-serif}@media (max-width:1199px){h1[_ngcontent-%COMP%]{font-size:15px}}"]});let n=t;return n})();var et=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=p({type:t,selectors:[["app-menu"]],standalone:!0,features:[u],decls:4,vars:0,consts:[["href",""]],template:function(a,s){a&1&&(l(0,"a"),m(1,"Projetos"),r(),l(2,"a",0),m(3,"Certificados"),r())},styles:['a[_ngcontent-%COMP%]{color:#f0f8ff;text-decoration:none;margin-right:10px;margin-left:5px;cursor:pointer;font-size:18px}a[_ngcontent-%COMP%]:before{content:"";color:#000}a[_ngcontent-%COMP%]:hover{color:#bef300;border-color:#9acd32;font-size:20px}']});let n=t;return n})();var it=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=p({type:t,selectors:[["app-descricao"]],standalone:!0,features:[u],decls:3,vars:0,consts:[[1,"col-12","xl:col-9","texto"]],template:function(a,s){a&1&&(l(0,"div",0)(1,"p"),m(2,"Curso de An\xE1lise e Desenvolvimento de Sistemas, com enfoque em Java e Spring Boot. Al\xE9m do curso superior, estou em constante aprimoramento das minhas habilidades atrav\xE9s de cursos extracurriculares em plataformas digitais e projetos que complementam minha forma\xE7\xE3o acad\xEAmica. Meu portf\xF3lio conta com um projeto autoral dispon\xEDvel em meu reposit\xF3rio no GitHub, bem como diversos outros projetos elaborados ao longo de minha jornada educacional. Especializei-me em desenvolvimento back-end, utilizando principalmente Spring Boot e Java. Ademais, possuo conhecimentos em Docker e tenho familiaridade com ferramentas de automa\xE7\xE3o de integra\xE7\xE3o e entrega cont\xEDnua (CI/CD), como Jenkins. Utilizo tamb\xE9m o SonarQube para a verifica\xE7\xE3o da qualidade do c\xF3digo. Contudo, tamb\xE9m detenho conhecimentos de front-end, incluindo HTML, CSS e JavaScript e Angular."),r()())},styles:["p[_ngcontent-%COMP%]{text-align:center;color:#f0f8ff;text-indent:20px;font-size:18px;overflow-wrap:break-word;line-height:25px;font-family:Open Sans,sans-serif}@media (max-width :1199px){p[_ngcontent-%COMP%]{font-size:12px;line-height:25px}}@media (min-width: 1200px) and (max-width: 1348px){p[_ngcontent-%COMP%]{font-size:14px}}"]});let n=t;return n})();var nt=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=p({type:t,selectors:[["app-home-component"]],standalone:!0,features:[u],decls:11,vars:0,consts:[[1,"container"],[1,"grid",2,"padding","10px"],[1,"col-12"],[1,"col-12","containerMenu"],[1,"col-12","xl:col-3",2,"text-align","center","justify-content","center"],["src","../../../assets/Foto.png","width","333px","height","333px",1,"circle"],[1,"col-12","xl:col-9","containerTexto"]],template:function(a,s){a&1&&(l(0,"div",0)(1,"div",1)(2,"div",2),d(3,"app-cabecalho"),r(),l(4,"div",3),d(5,"app-menu"),r(),l(6,"div",4),d(7,"img",5),r(),l(8,"div",6),d(9,"app-descricao"),r(),d(10,"app-footer"),r()())},dependencies:[Y,$,X,tt,et,it],styles:[".containerMenu[_ngcontent-%COMP%]{margin-bottom:100px;margin-top:10px;align-items:center;justify-content:center;display:flex}.containerTexto[_ngcontent-%COMP%]{padding-top:50px}@media (max-width :1199px){.containerTexto[_ngcontent-%COMP%]{padding-top:0}.containerMenu[_ngcontent-%COMP%]{margin-bottom:0;margin-top:10px;font-size:10px}img[_ngcontent-%COMP%]{width:200px;height:200px}}@media (min-width: 1200px) and (max-width: 1348px){.containerMenu[_ngcontent-%COMP%]{margin-bottom:100px;margin-top:10px}img[_ngcontent-%COMP%]{width:300px;height:300px}}"]});let n=t;return n})();var at=[{path:"home",component:nt}];var st={providers:[z(at),B()]};var ft={providers:[k()]},ot=H(st,ft);var gt=()=>U(G,ot),Se=gt;export{Se as a};
