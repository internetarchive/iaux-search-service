const Dt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}};Dt();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function o(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var d=s.length-1;d>=0;d--)(a=s[d])&&(n=(r<3?a(n):r>3?a(e,t,n):a(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ce=window,Qe=ce.ShadowRoot&&(ce.ShadyCSS===void 0||ce.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ke=Symbol(),it=new WeakMap;class St{constructor(e,t,i){if(this._$cssResult$=!0,i!==Ke)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Qe&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=it.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&it.set(t,e))}return e}toString(){return this.cssText}}const Lt=s=>new St(typeof s=="string"?s:s+"",void 0,Ke),Et=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,r,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[n+1],s[0]);return new St(t,s,Ke)},Ft=(s,e)=>{Qe?s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),r=ce.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)})},rt=Qe?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Lt(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xe;const pe=window,st=pe.trustedTypes,Bt=st?st.emptyScript:"",nt=pe.reactiveElementPolyfillSupport,De={toAttribute(s,e){switch(e){case Boolean:s=s?Bt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},xt=(s,e)=>e!==s&&(e==e||s==s),ke={attribute:!0,type:String,converter:De,reflect:!1,hasChanged:xt},Le="finalized";class V extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Ep(i,t);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,t=ke){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const n=this[e];this[t]=r,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ke}static finalize(){if(this.hasOwnProperty(Le))return!1;this[Le]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(rt(r))}else e!==void 0&&t.push(rt(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ft(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=ke){var r;const n=this.constructor._$Ep(e,i);if(n!==void 0&&i.reflect===!0){const a=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:De).toAttribute(t,i.type);this._$El=e,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$El=null}}_$AK(e,t){var i;const r=this.constructor,n=r._$Ev.get(e);if(n!==void 0&&this._$El!==n){const a=r.getPropertyOptions(n),d=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?a.converter:De;this._$El=n,this[n]=d.fromAttribute(t,a.type),this._$El=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||xt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,n)=>this[n]=r),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdate)===null||n===void 0?void 0:n.call(r)}),this.update(i)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}V[Le]=!0,V.elementProperties=new Map,V.elementStyles=[],V.shadowRootOptions={mode:"open"},nt==null||nt({ReactiveElement:V}),((xe=pe.reactiveElementVersions)!==null&&xe!==void 0?xe:pe.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Re;const ge=window,J=ge.trustedTypes,at=J?J.createPolicy("lit-html",{createHTML:s=>s}):void 0,Fe="$lit$",U=`lit$${(Math.random()+"").slice(9)}$`,kt="?"+U,qt=`<${kt}>`,j=document,fe=()=>j.createComment(""),re=s=>s===null||typeof s!="object"&&typeof s!="function",Rt=Array.isArray,jt=s=>Rt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Ce=`[ 	
\f\r]`,Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lt=/-->/g,ot=/>/g,I=RegExp(`>|${Ce}(?:([^\\s"'>=/]+)(${Ce}*=${Ce}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dt=/'/g,ut=/"/g,Ct=/^(?:script|style|textarea|title)$/i,se=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),ht=new WeakMap,L=j.createTreeWalker(j,129,null,!1);function Tt(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return at!==void 0?at.createHTML(e):e}const zt=(s,e)=>{const t=s.length-1,i=[];let r,n=e===2?"<svg>":"",a=Y;for(let d=0;d<t;d++){const l=s[d];let h,p,g=-1,_=0;for(;_<l.length&&(a.lastIndex=_,p=a.exec(l),p!==null);)_=a.lastIndex,a===Y?p[1]==="!--"?a=lt:p[1]!==void 0?a=ot:p[2]!==void 0?(Ct.test(p[2])&&(r=RegExp("</"+p[2],"g")),a=I):p[3]!==void 0&&(a=I):a===I?p[0]===">"?(a=r!=null?r:Y,g=-1):p[1]===void 0?g=-2:(g=a.lastIndex-p[2].length,h=p[1],a=p[3]===void 0?I:p[3]==='"'?ut:dt):a===ut||a===dt?a=I:a===lt||a===ot?a=Y:(a=I,r=void 0);const v=a===I&&s[d+1].startsWith("/>")?" ":"";n+=a===Y?l+qt:g>=0?(i.push(h),l.slice(0,g)+Fe+l.slice(g)+U+v):l+U+(g===-2?(i.push(void 0),d):v)}return[Tt(s,n+(s[t]||"<?>")+(e===2?"</svg>":"")),i]};class ne{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,a=0;const d=e.length-1,l=this.parts,[h,p]=zt(e,t);if(this.el=ne.createElement(h,i),L.currentNode=this.el.content,t===2){const g=this.el.content,_=g.firstChild;_.remove(),g.append(..._.childNodes)}for(;(r=L.nextNode())!==null&&l.length<d;){if(r.nodeType===1){if(r.hasAttributes()){const g=[];for(const _ of r.getAttributeNames())if(_.endsWith(Fe)||_.startsWith(U)){const v=p[a++];if(g.push(_),v!==void 0){const m=r.getAttribute(v.toLowerCase()+Fe).split(U),M=/([.?@])?(.*)/.exec(v);l.push({type:1,index:n,name:M[2],strings:m,ctor:M[1]==="."?Jt:M[1]==="?"?Gt:M[1]==="@"?Qt:ye})}else l.push({type:6,index:n})}for(const _ of g)r.removeAttribute(_)}if(Ct.test(r.tagName)){const g=r.textContent.split(U),_=g.length-1;if(_>0){r.textContent=J?J.emptyScript:"";for(let v=0;v<_;v++)r.append(g[v],fe()),L.nextNode(),l.push({type:2,index:++n});r.append(g[_],fe())}}}else if(r.nodeType===8)if(r.data===kt)l.push({type:2,index:n});else{let g=-1;for(;(g=r.data.indexOf(U,g+1))!==-1;)l.push({type:7,index:n}),g+=U.length-1}n++}}static createElement(e,t){const i=j.createElement("template");return i.innerHTML=e,i}}function W(s,e,t=s,i){var r,n,a,d;if(e===se)return e;let l=i!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[i]:t._$Cl;const h=re(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),h===void 0?l=void 0:(l=new h(s),l._$AT(s,t,i)),i!==void 0?((a=(d=t)._$Co)!==null&&a!==void 0?a:d._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=W(s,l._$AS(s,e.values),l,i)),e}class Vt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:r}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:j).importNode(i,!0);L.currentNode=n;let a=L.nextNode(),d=0,l=0,h=r[0];for(;h!==void 0;){if(d===h.index){let p;h.type===2?p=new we(a,a.nextSibling,this,e):h.type===1?p=new h.ctor(a,h.name,h.strings,this,e):h.type===6&&(p=new Kt(a,this,e)),this._$AV.push(p),h=r[++l]}d!==(h==null?void 0:h.index)&&(a=L.nextNode(),d++)}return L.currentNode=j,n}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class we{constructor(e,t,i,r){var n;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cp=(n=r==null?void 0:r.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=W(this,e,t),re(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==se&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):jt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==A&&re(this._$AH)?this._$AA.nextSibling.data=e:this.$(j.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ne.createElement(Tt(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(i);else{const a=new Vt(n,this),d=a.u(this.options);a.v(i),this.$(d),this._$AH=a}}_$AC(e){let t=ht.get(e.strings);return t===void 0&&ht.set(e.strings,t=new ne(e)),t}T(e){Rt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new we(this.k(fe()),this.k(fe()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class ye{constructor(e,t,i,r,n){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const n=this.strings;let a=!1;if(n===void 0)e=W(this,e,t,0),a=!re(e)||e!==this._$AH&&e!==se,a&&(this._$AH=e);else{const d=e;let l,h;for(e=n[0],l=0;l<n.length-1;l++)h=W(this,d[i+l],t,l),h===se&&(h=this._$AH[l]),a||(a=!re(h)||h!==this._$AH[l]),h===A?e=A:e!==A&&(e+=(h!=null?h:"")+n[l+1]),this._$AH[l]=h}a&&!r&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Jt extends ye{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}const Wt=J?J.emptyScript:"";class Gt extends ye{constructor(){super(...arguments),this.type=4}j(e){e&&e!==A?this.element.setAttribute(this.name,Wt):this.element.removeAttribute(this.name)}}class Qt extends ye{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){var i;if((e=(i=W(this,e,t,0))!==null&&i!==void 0?i:A)===se)return;const r=this._$AH,n=e===A&&r!==A||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==A&&(r===A||n);n&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Kt{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}}const ct=ge.litHtmlPolyfillSupport;ct==null||ct(ne,we),((Re=ge.litHtmlVersions)!==null&&Re!==void 0?Re:ge.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Te;const _e=window,G=_e.trustedTypes,pt=G?G.createPolicy("lit-html",{createHTML:s=>s}):void 0,Be="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,Pt="?"+O,Zt=`<${Pt}>`,z=document,ae=()=>z.createComment(""),le=s=>s===null||typeof s!="object"&&typeof s!="function",Nt=Array.isArray,Xt=s=>Nt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Pe=`[ 	
\f\r]`,ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gt=/-->/g,ft=/>/g,D=RegExp(`>|${Pe}(?:([^\\s"'>=/]+)(${Pe}*=${Pe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_t=/'/g,vt=/"/g,Ut=/^(?:script|style|textarea|title)$/i,Yt=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),y=Yt(1),Q=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),mt=new WeakMap,F=z.createTreeWalker(z,129,null,!1);function Ot(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return pt!==void 0?pt.createHTML(e):e}const ei=(s,e)=>{const t=s.length-1,i=[];let r,n=e===2?"<svg>":"",a=ee;for(let d=0;d<t;d++){const l=s[d];let h,p,g=-1,_=0;for(;_<l.length&&(a.lastIndex=_,p=a.exec(l),p!==null);)_=a.lastIndex,a===ee?p[1]==="!--"?a=gt:p[1]!==void 0?a=ft:p[2]!==void 0?(Ut.test(p[2])&&(r=RegExp("</"+p[2],"g")),a=D):p[3]!==void 0&&(a=D):a===D?p[0]===">"?(a=r!=null?r:ee,g=-1):p[1]===void 0?g=-2:(g=a.lastIndex-p[2].length,h=p[1],a=p[3]===void 0?D:p[3]==='"'?vt:_t):a===vt||a===_t?a=D:a===gt||a===ft?a=ee:(a=D,r=void 0);const v=a===D&&s[d+1].startsWith("/>")?" ":"";n+=a===ee?l+Zt:g>=0?(i.push(h),l.slice(0,g)+Be+l.slice(g)+O+v):l+O+(g===-2?(i.push(void 0),d):v)}return[Ot(s,n+(s[t]||"<?>")+(e===2?"</svg>":"")),i]};class oe{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,a=0;const d=e.length-1,l=this.parts,[h,p]=ei(e,t);if(this.el=oe.createElement(h,i),F.currentNode=this.el.content,t===2){const g=this.el.content,_=g.firstChild;_.remove(),g.append(..._.childNodes)}for(;(r=F.nextNode())!==null&&l.length<d;){if(r.nodeType===1){if(r.hasAttributes()){const g=[];for(const _ of r.getAttributeNames())if(_.endsWith(Be)||_.startsWith(O)){const v=p[a++];if(g.push(_),v!==void 0){const m=r.getAttribute(v.toLowerCase()+Be).split(O),M=/([.?@])?(.*)/.exec(v);l.push({type:1,index:n,name:M[2],strings:m,ctor:M[1]==="."?ii:M[1]==="?"?si:M[1]==="@"?ni:$e})}else l.push({type:6,index:n})}for(const _ of g)r.removeAttribute(_)}if(Ut.test(r.tagName)){const g=r.textContent.split(O),_=g.length-1;if(_>0){r.textContent=G?G.emptyScript:"";for(let v=0;v<_;v++)r.append(g[v],ae()),F.nextNode(),l.push({type:2,index:++n});r.append(g[_],ae())}}}else if(r.nodeType===8)if(r.data===Pt)l.push({type:2,index:n});else{let g=-1;for(;(g=r.data.indexOf(O,g+1))!==-1;)l.push({type:7,index:n}),g+=O.length-1}n++}}static createElement(e,t){const i=z.createElement("template");return i.innerHTML=e,i}}function K(s,e,t=s,i){var r,n,a,d;if(e===Q)return e;let l=i!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[i]:t._$Cl;const h=le(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),h===void 0?l=void 0:(l=new h(s),l._$AT(s,t,i)),i!==void 0?((a=(d=t)._$Co)!==null&&a!==void 0?a:d._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=K(s,l._$AS(s,e.values),l,i)),e}class ti{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:r}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:z).importNode(i,!0);F.currentNode=n;let a=F.nextNode(),d=0,l=0,h=r[0];for(;h!==void 0;){if(d===h.index){let p;h.type===2?p=new he(a,a.nextSibling,this,e):h.type===1?p=new h.ctor(a,h.name,h.strings,this,e):h.type===6&&(p=new ai(a,this,e)),this._$AV.push(p),h=r[++l]}d!==(h==null?void 0:h.index)&&(a=F.nextNode(),d++)}return F.currentNode=z,n}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class he{constructor(e,t,i,r){var n;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cp=(n=r==null?void 0:r.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),le(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==Q&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Xt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==w&&le(this._$AH)?this._$AA.nextSibling.data=e:this.$(z.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=oe.createElement(Ot(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(i);else{const a=new ti(n,this),d=a.u(this.options);a.v(i),this.$(d),this._$AH=a}}_$AC(e){let t=mt.get(e.strings);return t===void 0&&mt.set(e.strings,t=new oe(e)),t}T(e){Nt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new he(this.k(ae()),this.k(ae()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class $e{constructor(e,t,i,r,n){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const n=this.strings;let a=!1;if(n===void 0)e=K(this,e,t,0),a=!le(e)||e!==this._$AH&&e!==Q,a&&(this._$AH=e);else{const d=e;let l,h;for(e=n[0],l=0;l<n.length-1;l++)h=K(this,d[i+l],t,l),h===Q&&(h=this._$AH[l]),a||(a=!le(h)||h!==this._$AH[l]),h===w?e=w:e!==w&&(e+=(h!=null?h:"")+n[l+1]),this._$AH[l]=h}a&&!r&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class ii extends $e{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}}const ri=G?G.emptyScript:"";class si extends $e{constructor(){super(...arguments),this.type=4}j(e){e&&e!==w?this.element.setAttribute(this.name,ri):this.element.removeAttribute(this.name)}}class ni extends $e{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){var i;if((e=(i=K(this,e,t,0))!==null&&i!==void 0?i:w)===Q)return;const r=this._$AH,n=e===w&&r!==w||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==w&&(r===w||n);n&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class ai{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const wt=_e.litHtmlPolyfillSupport;wt==null||wt(oe,he),((Te=_e.litHtmlVersions)!==null&&Te!==void 0?Te:_e.litHtmlVersions=[]).push("2.8.0");const li=(s,e,t)=>{var i,r;const n=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let a=n._$litPart$;if(a===void 0){const d=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;n._$litPart$=a=new he(e.insertBefore(ae(),d),d,void 0,t!=null?t:{})}return a._$AI(s),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ne,Ue;class B extends V{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=li(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Q}}B.finalized=!0,B._$litElement$=!0,(Ne=globalThis.litElementHydrateSupport)===null||Ne===void 0||Ne.call(globalThis,{LitElement:B});const yt=globalThis.litElementPolyfillSupport;yt==null||yt({LitElement:B});((Ue=globalThis.litElementVersions)!==null&&Ue!==void 0?Ue:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ze=s=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(s,e):((t,i)=>{const{kind:r,elements:n}=i;return{kind:r,elements:n,finisher(a){customElements.define(t,a)}}})(s,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oi=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,s)}},di=(s,e,t)=>{e.constructor.createProperty(t,s)};function be(s){return(e,t)=>t!==void 0?di(s,e,t):oi(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function E(s){return be({...s,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ui=({finisher:s,descriptor:e})=>(t,i)=>{var r;if(i===void 0){const n=(r=t.originalKey)!==null&&r!==void 0?r:t.key,a=e!=null?{kind:"method",placement:"prototype",key:n,descriptor:e(t.key)}:{...t,key:n};return s!=null&&(a.finisher=function(d){s(d,n)}),a}{const n=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),s==null||s(n,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function N(s,e){return ui({descriptor:t=>{const i={get(){var r,n;return(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(s))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(e){const r=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var n,a;return this[r]===void 0&&(this[r]=(a=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(s))!==null&&a!==void 0?a:null),this[r]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Oe;((Oe=window.HTMLSlotElement)===null||Oe===void 0?void 0:Oe.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hi=(s,e,t)=>{for(const i of e)if(i[0]===s)return(0,i[1])();return t==null?void 0:t()};function u(s){let e,t,i;return typeof s=="object"?(e=s.hashFunction,t=s.expiring,i=s.tags):e=s,(r,n,a)=>{if(a.value!=null)a.value=$t(a.value,e,t,i);else if(a.get!=null)a.get=$t(a.get,e,t,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const He=new Map;function $t(s,e,t=0,i){const r=Symbol("__memoized_map__");return function(...n){let a;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let d=this[r];if(Array.isArray(i))for(const l of i)He.has(l)?He.get(l).push(d):He.set(l,[d]);if(e||n.length>0||t>0){let l;e===!0?l=n.map(g=>g.toString()).join("!"):e?l=e.apply(this,n):l=n[0];const h=`${l}__timestamp`;let p=!1;if(t>0)if(!d.has(h))p=!0;else{let g=d.get(h);p=Date.now()-g>t}d.has(l)&&!p?a=d.get(l):(a=s.apply(this,n),d.set(l,a),t>0&&d.set(h,Date.now()))}else{const l=this;d.has(l)?a=d.get(l):(a=s.apply(this,n),d.set(l,a))}return a}}var te;(function(s){s[s.COUNT=0]="COUNT",s[s.ALPHABETICAL=1]="ALPHABETICAL",s[s.NUMERIC=2]="NUMERIC"})(te||(te={}));class Ht{constructor(e){this.buckets=e.buckets,this.first_bucket_key=e.first_bucket_key,this.last_bucket_key=e.last_bucket_key,this.number_buckets=e.number_buckets,this.interval=e.interval,this.first_bucket_year=e.first_bucket_year,this.first_bucket_month=e.first_bucket_month,this.last_bucket_year=e.last_bucket_year,this.last_bucket_month=e.last_bucket_month,this.interval_in_months=e.interval_in_months}getSortedBuckets(e){const t=[...this.buckets];if(this.isRawNumberBuckets(t))return t;const i=new Intl.Collator;switch(e){case te.ALPHABETICAL:return t.sort((r,n)=>i.compare(r.key.toString(),n.key.toString()));case te.NUMERIC:return t.sort((r,n)=>Number(n.key)-Number(r.key));case te.COUNT:default:return t}}isRawNumberBuckets(e){return typeof e[0]=="number"}}o([u()],Ht.prototype,"getSortedBuckets",null);class qe{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:Boolean(e)}}qe.shared=new qe;class ve{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}ve.shared=new ve;class je{parseValue(e){return ve.shared.parseValue(e)}}je.shared=new je;class ze{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const i=Date.parse(t);if(Number.isNaN(i))return;let r=new Date(t);return(t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}ze.shared=new ze;class Ve{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let i;return t.length===1?i=this.parseNumberFormat(t[0]):i=this.parseColonSeparatedFormat(t),i}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const i=e.map((r,n)=>{const a=parseFloat(r);if(Number.isNaN(a))return t=!0,0;const d=e.length-1-n,l=60**d;return a*Math.floor(l)}).reduce((r,n)=>r+n,0);return t?void 0:i}}Ve.shared=new Ve;class Je{parseValue(e){if(typeof e=="string")return e}}Je.shared=new Je;class ci{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let i=[];for(const r of this.separators)if(i=t.split(r),i.length>1)break;return this.parseListValues(i)}parseListValues(e){const i=e.map(n=>n.trim()).map(n=>this.parser.parseValue(n)),r=[];return i.forEach(n=>{n!==void 0&&r.push(n)}),r}}class We{parseValue(e){if(typeof e=="string")return e}}We.shared=new We;class me{parseValue(e){return String(e)}}me.shared=new me;class T{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(i=>{const r=this.parser.parseValue(i);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}o([u()],T.prototype,"values",null);o([u()],T.prototype,"value",null);class q extends T{constructor(e){super(qe.shared,e)}}class x extends T{constructor(e){super(ze.shared,e)}}class Ie extends T{constructor(e){super(Ve.shared,e)}}class S extends T{constructor(e){super(ve.shared,e)}}class f extends T{constructor(e){super(me.shared,e)}}class pi extends T{constructor(e){super(We.shared,e)}}class bt extends T{constructor(e){super(je.shared,e)}}class It extends T{constructor(e){super(Je.shared,e)}}class gi extends T{constructor(e,t){super(t,e)}}class fi extends gi{constructor(e){const t=new ci(me.shared);super(e,t)}}class c{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new x(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new f(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new S(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new S(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new f(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new f(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new bt(this.rawMetadata.collection_size):void 0}get contact(){return this.rawMetadata.contact!=null?new f(this.rawMetadata.contact):void 0}get contributor(){return this.rawMetadata.contributor!=null?new f(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new f(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new f(this.rawMetadata.creator):void 0}get creator_alt_script(){return this.rawMetadata["creator-alt-script"]!=null?new f(this.rawMetadata["creator-alt-script"]):void 0}get credits(){return this.rawMetadata.credits!=null?new f(this.rawMetadata.credits):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new f(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new x(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new f(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new S(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new Ie(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new f(this.rawMetadata["external-identifier"]):void 0}get external_link(){return this.rawMetadata["external-link"]!=null?new f(this.rawMetadata["external-link"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new S(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new x(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new f(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new f(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new S(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new bt(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new f(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new Ie(this.rawMetadata.length):void 0}get licenseurl(){return this.rawMetadata.licenseurl!=null?new f(this.rawMetadata.licenseurl):void 0}get lineage(){return this.rawMetadata.lineage!=null?new f(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new S(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new It(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new q(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new f(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new S(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new S(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new f(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new f(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new pi(this.rawMetadata.page_progression):void 0}get paginated(){return this.rawMetadata.paginated!=null?new q(this.rawMetadata.paginated):void 0}get partner(){return this.rawMetadata.partner!=null?new f(this.rawMetadata.partner):void 0}get post_text(){return this.rawMetadata.post_text!=null?new f(this.rawMetadata.post_text):void 0}get ppi(){return this.rawMetadata.ppi!=null?new S(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new x(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new f(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new x(this.rawMetadata.reviewdate):void 0}get rights(){return this.rawMetadata.rights!=null?new f(this.rawMetadata.rights):void 0}get rights_holder(){var e;const t=(e=this.rawMetadata["rights-holder"])!==null&&e!==void 0?e:this.rawMetadata.rights_holder;return t!=null?new f(t):void 0}get runtime(){return this.rawMetadata.runtime!=null?new Ie(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new f(this.rawMetadata.scanner):void 0}get segments(){return this.rawMetadata.segments!=null?new f(this.rawMetadata.segments):void 0}get shotlist(){return this.rawMetadata.shotlist!=null?new f(this.rawMetadata.shotlist):void 0}get source(){return this.rawMetadata.source!=null?new f(this.rawMetadata.source):void 0}get sponsor(){return this.rawMetadata.sponsor!=null?new f(this.rawMetadata.sponsor):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new x(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new x(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new x(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new fi(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new f(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new f(this.rawMetadata.title):void 0}get title_alt_script(){return this.rawMetadata["title-alt-script"]!=null?new f(this.rawMetadata["title-alt-script"]):void 0}get transferer(){return this.rawMetadata.transferer!=null?new f(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new S(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new f(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new f(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new S(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new f(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new f(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new S(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new S(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}o([u()],c.prototype,"addeddate",null);o([u()],c.prototype,"audio_codec",null);o([u()],c.prototype,"audio_sample_rate",null);o([u()],c.prototype,"avg_rating",null);o([u()],c.prototype,"collection",null);o([u()],c.prototype,"collections_raw",null);o([u()],c.prototype,"collection_size",null);o([u()],c.prototype,"contact",null);o([u()],c.prototype,"contributor",null);o([u()],c.prototype,"coverage",null);o([u()],c.prototype,"creator",null);o([u()],c.prototype,"creator_alt_script",null);o([u()],c.prototype,"credits",null);o([u()],c.prototype,"collection_layout",null);o([u()],c.prototype,"date",null);o([u()],c.prototype,"description",null);o([u()],c.prototype,"downloads",null);o([u()],c.prototype,"duration",null);o([u()],c.prototype,"external_identifier",null);o([u()],c.prototype,"external_link",null);o([u()],c.prototype,"files_count",null);o([u()],c.prototype,"indexdate",null);o([u()],c.prototype,"isbn",null);o([u()],c.prototype,"issue",null);o([u()],c.prototype,"item_count",null);o([u()],c.prototype,"item_size",null);o([u()],c.prototype,"language",null);o([u()],c.prototype,"length",null);o([u()],c.prototype,"licenseurl",null);o([u()],c.prototype,"lineage",null);o([u()],c.prototype,"month",null);o([u()],c.prototype,"mediatype",null);o([u()],c.prototype,"noindex",null);o([u()],c.prototype,"notes",null);o([u()],c.prototype,"num_favorites",null);o([u()],c.prototype,"num_reviews",null);o([u()],c.prototype,"openlibrary_edition",null);o([u()],c.prototype,"openlibrary_work",null);o([u()],c.prototype,"page_progression",null);o([u()],c.prototype,"paginated",null);o([u()],c.prototype,"partner",null);o([u()],c.prototype,"post_text",null);o([u()],c.prototype,"ppi",null);o([u()],c.prototype,"publicdate",null);o([u()],c.prototype,"publisher",null);o([u()],c.prototype,"reviewdate",null);o([u()],c.prototype,"rights",null);o([u()],c.prototype,"rights_holder",null);o([u()],c.prototype,"runtime",null);o([u()],c.prototype,"scanner",null);o([u()],c.prototype,"segments",null);o([u()],c.prototype,"shotlist",null);o([u()],c.prototype,"source",null);o([u()],c.prototype,"sponsor",null);o([u()],c.prototype,"start_localtime",null);o([u()],c.prototype,"start_time",null);o([u()],c.prototype,"stop_time",null);o([u()],c.prototype,"subject",null);o([u()],c.prototype,"taper",null);o([u()],c.prototype,"title",null);o([u()],c.prototype,"title_alt_script",null);o([u()],c.prototype,"transferer",null);o([u()],c.prototype,"track",null);o([u()],c.prototype,"type",null);o([u()],c.prototype,"uploader",null);o([u()],c.prototype,"utc_offset",null);o([u()],c.prototype,"venue",null);o([u()],c.prototype,"volume",null);o([u()],c.prototype,"week",null);o([u()],c.prototype,"year",null);class b extends c{get created_on(){return this.rawMetadata.created_on!=null?new x(this.rawMetadata.created_on):void 0}get file_creation_mtime(){return this.rawMetadata.file_creation_mtime!=null?new S(this.rawMetadata.file_creation_mtime):void 0}get filename(){return this.rawMetadata.filename!=null?new f(this.rawMetadata.filename):void 0}get file_basename(){return this.rawMetadata.file_basename!=null?new f(this.rawMetadata.file_basename):void 0}get result_in_subfile(){return this.rawMetadata.result_in_subfile!=null?new q(this.rawMetadata.result_in_subfile):void 0}get query(){return this.rawMetadata.query!=null?new f(this.rawMetadata.query):void 0}get date_favorited(){return this.rawMetadata.date_favorited!=null?new x(this.rawMetadata.date_favorited):void 0}get updated_on(){return this.rawMetadata.updated_on!=null?new x(this.rawMetadata.updated_on):void 0}get ad_id(){return this.rawMetadata.ad_id!=null?new f(this.rawMetadata.ad_id):void 0}get factcheck(){return this.rawMetadata.factcheck!=null?new f(this.rawMetadata.factcheck):void 0}get is_clip(){return this.rawMetadata.clip!=null?new q(this.rawMetadata.clip):void 0}get num_clips(){return this.rawMetadata.nclips!=null?new S(this.rawMetadata.nclips):void 0}get __href__(){return this.rawMetadata.__href__!=null?new f(this.rawMetadata.__href__):void 0}get __img__(){return this.rawMetadata.__img__!=null?new f(this.rawMetadata.__img__):void 0}}o([u()],b.prototype,"created_on",null);o([u()],b.prototype,"file_creation_mtime",null);o([u()],b.prototype,"filename",null);o([u()],b.prototype,"file_basename",null);o([u()],b.prototype,"result_in_subfile",null);o([u()],b.prototype,"query",null);o([u()],b.prototype,"date_favorited",null);o([u()],b.prototype,"updated_on",null);o([u()],b.prototype,"ad_id",null);o([u()],b.prototype,"factcheck",null);o([u()],b.prototype,"is_clip",null);o([u()],b.prototype,"num_clips",null);o([u()],b.prototype,"__href__",null);o([u()],b.prototype,"__img__",null);function Ge(s){return{body:s.reviewbody,title:s.reviewtitle,author:s.reviewer,authorItem:s.reviewer_itemname,updatedate:new Date(s.reviewdate),createdate:new Date(s.createdate),stars:Number(s.stars)||0,__href__:s.__href__}}class C{constructor(e){var t;this.rawMetadata=e,this.fields=new b((t=e.fields)!==null&&t!==void 0?t:{})}get identifier(){return this.fields.identifier}get addeddate(){return this.fields.addeddate}get avg_rating(){return this.fields.avg_rating}get collection(){return this.fields.collection}get collection_files_count(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.collection_files_count)!=null?new S(this.rawMetadata.fields.collection_files_count):void 0}get collection_size(){return this.fields.collection_size}get creator(){return this.fields.creator}get date(){return this.fields.date}get description(){return this.fields.description}get downloads(){return this.fields.downloads}get files_count(){return this.fields.files_count}get genre(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.genre)!=null?new f(this.rawMetadata.fields.genre):void 0}get indexflag(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.indexflag)!=null?new f(this.rawMetadata.fields.indexflag):void 0}get issue(){return this.fields.issue}get item_count(){return this.fields.item_count}get item_size(){return this.fields.item_size}get language(){return this.fields.language}get lending___available_to_borrow(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.lending___available_to_borrow)!=null?new q(this.rawMetadata.fields.lending___available_to_borrow):void 0}get lending___available_to_browse(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.lending___available_to_browse)!=null?new q(this.rawMetadata.fields.lending___available_to_browse):void 0}get lending___available_to_waitlist(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.lending___available_to_waitlist)!=null?new q(this.rawMetadata.fields.lending___available_to_waitlist):void 0}get lending___status(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.lending___status)!=null?new f(this.rawMetadata.fields.lending___status):void 0}get licenseurl(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.licenseurl)!=null?new f(this.rawMetadata.fields.licenseurl):void 0}get mediatype(){return this.fields.mediatype}get month(){return this.fields.month}get noindex(){return this.fields.noindex}get num_favorites(){return this.fields.num_favorites}get num_reviews(){return this.fields.num_reviews}get publicdate(){return this.fields.publicdate}get reviewdate(){return this.fields.reviewdate}get review(){const e=this.rawMetadata.review;return e?Ge(e):void 0}get source(){return this.fields.source}get subject(){return this.fields.subject}get title(){return this.fields.title}get type(){return this.fields.type}get volume(){return this.fields.volume}get week(){return this.fields.week}get year(){return this.fields.year}}o([u()],C.prototype,"collection_files_count",null);o([u()],C.prototype,"genre",null);o([u()],C.prototype,"indexflag",null);o([u()],C.prototype,"lending___available_to_borrow",null);o([u()],C.prototype,"lending___available_to_browse",null);o([u()],C.prototype,"lending___available_to_waitlist",null);o([u()],C.prototype,"lending___status",null);o([u()],C.prototype,"licenseurl",null);o([u()],C.prototype,"review",null);class Xe{constructor(e){var t;this.rawMetadata=e,this.fields=new b((t=e.fields)!==null&&t!==void 0?t:{})}get identifier(){return this.fields.identifier}get highlight(){var e;return!((e=this.rawMetadata.highlight)===null||e===void 0)&&e.text?new f(this.rawMetadata.highlight.text):void 0}get addeddate(){return this.fields.addeddate}get avg_rating(){return this.fields.avg_rating}get collection(){return this.fields.collection}get created_on(){return this.fields.created_on}get creator(){return this.fields.creator}get date(){return this.fields.date}get description(){return this.fields.description}get downloads(){return this.fields.downloads}get filename(){return this.fields.filename}get file_basename(){return this.fields.file_basename}get file_creation_mtime(){return this.fields.file_creation_mtime}get issue(){return this.fields.issue}get mediatype(){return this.fields.mediatype}get page_num(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.page_num)!=null?new S(this.rawMetadata.fields.page_num):void 0}get publicdate(){return this.fields.publicdate}get result_in_subfile(){return this.fields.result_in_subfile}get reviewdate(){return this.fields.reviewdate}get source(){return this.fields.source}get subject(){return this.fields.subject}get title(){return this.fields.title}get updated_on(){return this.fields.updated_on}get year(){return this.fields.year}get __href__(){return this.fields.__href__}}o([u()],Xe.prototype,"highlight",null);o([u()],Xe.prototype,"page_num",null);class _i{constructor(e){var t;this.rawMetadata=e,this.fields=new b((t=e.fields)!==null&&t!==void 0?t:{})}get identifier(){var e;return(e=this.fields.query)===null||e===void 0?void 0:e.value}get title(){return this.fields.title}get query(){return this.fields.query}get date_favorited(){return this.fields.date_favorited}get __href__(){return this.fields.__href__}}class Ye{constructor(e){var t;this.rawMetadata=e,this.fields=new b((t=e.fields)!==null&&t!==void 0?t:{})}get identifier(){var e;return(e=this.rawMetadata.fields)===null||e===void 0?void 0:e.url}get mediatype(){return new It("web")}get title(){var e,t;return!((e=this.rawMetadata.fields)===null||e===void 0)&&e.url?new f((t=this.rawMetadata.fields)===null||t===void 0?void 0:t.url):void 0}get capture_dates(){var e,t;return!((e=this.rawMetadata.fields)===null||e===void 0)&&e.capture_dates?new x((t=this.rawMetadata.fields)===null||t===void 0?void 0:t.capture_dates):void 0}get __href__(){return this.fields.__href__}}o([u()],Ye.prototype,"title",null);o([u()],Ye.prototype,"capture_dates",null);class et{constructor(e){var t;this.rawMetadata=e,this.fields=new b((t=e.fields)!==null&&t!==void 0?t:{})}get identifier(){return this.fields.identifier}get highlight(){var e;return!((e=this.rawMetadata.highlight)===null||e===void 0)&&e.text?new f(this.rawMetadata.highlight.text):void 0}get addeddate(){return this.fields.addeddate}get ad_id(){return this.fields.ad_id}get avg_rating(){return this.fields.avg_rating}get collection(){return this.fields.collection}get created_on(){return this.fields.created_on}get creator(){return this.fields.creator}get date(){return this.fields.date}get description(){return this.fields.description}get downloads(){return this.fields.downloads}get factcheck(){return this.fields.factcheck}get filename(){return this.fields.filename}get file_basename(){return this.fields.file_basename}get file_creation_mtime(){return this.fields.file_creation_mtime}get files_count(){return this.fields.files_count}get is_clip(){return this.fields.is_clip}get issue(){return this.fields.issue}get item_count(){return this.fields.item_count}get item_size(){return this.fields.item_size}get language(){return this.fields.language}get mediatype(){return this.fields.mediatype}get num_clips(){return this.fields.num_clips}get num_favorites(){return this.fields.num_favorites}get publicdate(){return this.fields.publicdate}get result_in_subfile(){return this.fields.result_in_subfile}get reviewdate(){return this.fields.reviewdate}get source(){return this.fields.source}get subject(){return this.fields.subject}get title(){return this.fields.title}get updated_on(){return this.fields.updated_on}get week(){return this.fields.week}get year(){return this.fields.year}get start(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.start)!=null?new f(this.rawMetadata.fields.start):void 0}get __href__(){return this.fields.__href__}get __img__(){return this.fields.__img__}}o([u()],et.prototype,"highlight",null);o([u()],et.prototype,"start",null);const vi=["loans","waitlist","loan_history"];function mi(s){const e=s.slice(0,4),t=s.slice(4,6),i=s.slice(6,8),r=s.slice(8,10),n=s.slice(10,12),a=s.slice(12,14);return`${e}-${t}-${i}T${r}:${n}:${a}Z`}function wi(s){var e;const t=[];for(const i of s){if(!(!((e=i.captures)===null||e===void 0)&&e.length))continue;const r=encodeURIComponent(i.url),n=`https://web.archive.org/web/${i.captures[0]}/${r}`;t.push({hit_type:"web_archive",fields:{url:i.url,capture_dates:i.captures.map(a=>mi(a)),__href__:n}})}return t}class Ae{constructor(e){this.rawResponse=e}get item_size(){return this.rawResponse.item_size}get files_count(){return this.rawResponse.files_count}get month(){return this.rawResponse.month}get week(){return this.rawResponse.week}get downloads(){return this.rawResponse.downloads}get num_favorites(){return this.rawResponse.num_favorites}get title_message(){return this.rawResponse.title_message}get primary_collection(){return this.rawResponse.primary_collection}get reviews_data(){return this.rawResponse.reviews_data.map(Ge)}get thumbnail_url(){return this.rawResponse.thumbnail_url}get review_count(){return this.rawResponse.review_count}get uploader_details(){return this.rawResponse.uploader_details}get public_metadata(){var e;return new c((e=this.rawResponse.public_metadata)!==null&&e!==void 0?e:{})}get part_of(){return this.rawResponse.part_of}get reviews_metadata(){return this.rawResponse.reviews_metadata.map(Ge)}}o([u()],Ae.prototype,"reviews_data",null);o([u()],Ae.prototype,"public_metadata",null);o([u()],Ae.prototype,"reviews_metadata",null);class tt{constructor(e,t){var i,r,n,a,d,l,h,p,g,_,v,m,M,Me,Se;this.itemExtraInfo=null,this.schema=t,this.schemaHitType=t==null?void 0:t.hit_type;let k;e!=null&&e.page_elements&&(this.pageElements=e.page_elements,k=Object.values(this.pageElements)[0]);let P=(i=e==null?void 0:e.hits)===null||i===void 0?void 0:i.hits;this.totalResults=(n=(r=e==null?void 0:e.hits)===null||r===void 0?void 0:r.total)!==null&&n!==void 0?n:0,this.returnedCount=(d=(a=e==null?void 0:e.hits)===null||a===void 0?void 0:a.returned)!==null&&d!==void 0?d:0,!(P!=null&&P.length)&&((l=this.pageElements)===null||l===void 0?void 0:l.service___fts)?(this.totalResults=0,this.returnedCount=0,this.handleFederatedPageElements()):!(P!=null&&P.length)&&((h=k==null?void 0:k.hits)===null||h===void 0?void 0:h.hits)?(P=k.hits.hits,this.totalResults=(p=k.hits.total)!==null&&p!==void 0?p:0,this.returnedCount=(g=k.hits.returned)!==null&&g!==void 0?g:0):!((_=this.pageElements)===null||_===void 0)&&_.lending?P=this.handleLendingPageElement():!((v=this.pageElements)===null||v===void 0)&&v.web_archives&&(P=this.handleWebArchivesPageElement()),this.results=this.formatHits(P);let Ee=e==null?void 0:e.aggregations;!(this.aggregations&&Object.keys(this.aggregations).length>0)&&(k==null?void 0:k.aggregations)&&(Ee=k.aggregations),Ee&&this.buildAggregations(Ee),e!=null&&e.collection_titles&&(this.collectionTitles=(m=e.collection_titles)!==null&&m!==void 0?m:{}),e!=null&&e.tv_channel_aliases&&(this.tvChannelAliases=(M=e.tv_channel_aliases)!==null&&M!==void 0?M:{}),e!=null&&e.collection_extra_info&&(this.collectionExtraInfo=(Me=e.collection_extra_info)!==null&&Me!==void 0?Me:null),e!=null&&e.account_extra_info&&(this.accountExtraInfo=(Se=e.account_extra_info)!==null&&Se!==void 0?Se:null),e!=null&&e.extra_info&&(this.itemExtraInfo=new Ae(e.extra_info))}formatHits(e){var t;return(t=e==null?void 0:e.map(i=>{var r;return tt.createResult((r=i.hit_type)!==null&&r!==void 0?r:this.schemaHitType,i)}))!==null&&t!==void 0?t:[]}buildAggregations(e){this.aggregations=Object.entries(e).reduce((t,[i,r])=>(t[i]=new Ht(r),t),{})}handleLendingPageElement(){var e,t;const i=(e=this.pageElements)===null||e===void 0?void 0:e.lending,r=(t=i.loans)!==null&&t!==void 0?t:[];this.totalResults=r.length,this.returnedCount=this.totalResults;for(const n of vi)i[n]=this.formatHits(i[n]);return r}handleWebArchivesPageElement(){var e;const t=wi((e=this.pageElements)===null||e===void 0?void 0:e.web_archives);return this.totalResults=t.length,this.returnedCount=this.totalResults,t}handleFederatedPageElements(){var e,t,i,r;const n=["service___fts","service___tvs","service___rcs","service___whisper","metadata___mediatype___texts","metadata___mediatype___movies","metadata___mediatype___audio","metadata___mediatype___software","metadata___mediatype___image","metadata___mediatype___etree"];for(const a of n){const d=this.removePageElementPrefix(a);this.federatedResults?this.federatedResults[a]=[]:this.federatedResults={[d]:[]};const l=(t=(e=this.pageElements)===null||e===void 0?void 0:e[a])===null||t===void 0?void 0:t.hits;l!=null&&l.hits&&(this.federatedResults[d]=this.formatHits(l==null?void 0:l.hits)),this.totalResults+=(i=l==null?void 0:l.total)!==null&&i!==void 0?i:0,this.returnedCount+=(r=l==null?void 0:l.returned)!==null&&r!==void 0?r:0}}removePageElementPrefix(e){return e.split("___").pop()}static createResult(e,t){switch(e){case"item":return new C(t);case"text":case"asr_text":return new Xe(t);case"favorited_search":return new _i(t);case"web_archive":return new Ye(t);case"tv_clip":return new et(t);default:return new C(t)}}}class yi{constructor(e){this.clientParameters=e.client_parameters,this.backendRequests=e.backend_requests,this.kind=e.kind}}class $i{constructor(e){var t,i,r;this.rawResponse=e,this.request=new yi(e.request),this.responseHeader=(t=e.response)===null||t===void 0?void 0:t.header,this.sessionContext=e.session_context,this.response=new tt((i=e.response)===null||i===void 0?void 0:i.body,(r=e.response)===null||r===void 0?void 0:r.hit_schema)}}var R;(function(s){s[s.DEFAULT=0]="DEFAULT",s[s.METADATA=1]="METADATA",s[s.FULLTEXT=2]="FULLTEXT",s[s.TV=3]="TV",s[s.RADIO=4]="RADIO",s[s.FEDERATED=5]="FEDERATED"})(R||(R={}));class H{static aggregateSearchParamsAsString(e){if(e.omit)return"false";if(e.advancedParams){const t=e.advancedParams.map(r=>({terms:r}));return JSON.stringify(t)}if(e.simpleParams)return e.simpleParams.join(",")}static sortParamsAsString(e){return`${e.field}:${e.direction}`}static filterParamsAsString(e){return JSON.stringify(e)}static generateURLSearchParams(e){const t=new URLSearchParams;if(t.append("user_query",e.query),e.pageType&&t.append("page_type",String(e.pageType)),e.pageTarget&&t.append("page_target",String(e.pageTarget)),e.pageElements&&e.pageElements.length>0){const n=`[${e.pageElements.map(a=>`"${a}"`).join(",")}]`;t.append("page_elements",n)}if(e.rows!=null&&t.append("hits_per_page",String(e.rows)),e.page!=null&&t.append("page",String(e.page)),e.fields&&e.fields.length>0&&t.append("fields",e.fields.join(",")),e.filters&&Object.keys(e.filters).length>0){const r=this.filterParamsAsString(e.filters);r&&r!=="{}"&&t.append("filter_map",r)}if(e.sort&&e.sort.length>0){const r=e.sort.map(n=>this.sortParamsAsString(n));t.append("sort",r.join(","))}const i=e.aggregations;if(i){const r=this.aggregateSearchParamsAsString(i);r&&t.append("aggregations",r)}if(e.aggregationsSize!=null&&t.append("aggregations_size",String(e.aggregationsSize)),e.debugging&&t.append("debugging","true"),e.uid&&t.append("uid",e.uid),e.includeClientUrl!==!1){const r=window.location.href.slice(0,400);e.query.length<=1e3&&t.append("client_url",r)}return t}}var ie;(function(s){s.networkError="SearchService.NetworkError",s.itemNotFound="SearchService.ItemNotFound",s.decodingError="SearchService.DecodingError",s.searchEngineError="SearchService.SearchEngineError"})(ie||(ie={}));class bi extends Error{constructor(e,t,i){super(t),this.name=e,this.type=e,this.details=i}}const At={reCache:JSON.stringify({recompute:!0}),noCache:JSON.stringify({bypass:!0}),dontCache:JSON.stringify({no_compute:!0})};class X{constructor(e){var t,i;this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null;const r=new URL(window.location.href).searchParams,n=r.get("scope"),a=r.get("verbose"),d=r.get("debugging"),l=r.get("cacheDebug");let h="";for(const p of Object.keys(At))if(r.get(p)){h=At[p];break}h=(i=r.get("caching"))!==null&&i!==void 0?i:h,(e==null?void 0:e.caching)!==void 0?this.cachingFlags=e.caching:h&&(this.cachingFlags=h),(e==null?void 0:e.debuggingEnabled)!==void 0?this.debuggingEnabled=e.debuggingEnabled:(d||l)&&(this.debuggingEnabled=!0),(e==null?void 0:e.scope)!==void 0?this.requestScope=e.scope:n&&(this.requestScope=n),(e==null?void 0:e.verbose)!==void 0?this.verbose=e.verbose:a&&(this.verbose=!!a)}async fetchUrl(e,t){var i,r;const n=new URL(e);this.requestScope&&n.searchParams.set("scope",this.requestScope),this.cachingFlags&&n.searchParams.set("caching",this.cachingFlags);let a;try{const d=(i=t==null?void 0:t.requestOptions)!==null&&i!==void 0?i:{credentials:this.includeCredentials?"include":"same-origin"};a=await fetch(n.href,d)}catch(d){const l=d instanceof Error?d.message:typeof d=="string"?d:"Unknown error";return this.getErrorResult(ie.networkError,l)}try{const d=await a.json();this.verbose&&this.printResponse(d),d.debugging&&this.printDebuggingInfo(d);const l=(r=d.response)===null||r===void 0?void 0:r.error;return l?this.getErrorResult(ie.searchEngineError,l.message,l.forensics):{success:d}}catch(d){const l=d instanceof Error?d.message:typeof d=="string"?d:"Unknown error";return this.getErrorResult(ie.decodingError,l)}}getErrorResult(e,t,i){return{error:new bi(e,t,i)}}printResponse(e){var t,i,r,n,a;try{const d=JSON.parse(JSON.stringify(e)),l=(r=(i=(t=d==null?void 0:d.response)===null||t===void 0?void 0:t.body)===null||i===void 0?void 0:i.hits)===null||r===void 0?void 0:r.hits;if(Array.isArray(l)&&l.length>1){const p=[];p.push(l[0]),p.push(`*** ${l.length-1} hits omitted ***`),d.response.body.hits.hits=p}const h=(a=(n=d==null?void 0:d.response)===null||n===void 0?void 0:n.body)===null||a===void 0?void 0:a.aggregations;h&&Object.entries(h).forEach(([p,g])=>{var _,v,m;if(((_=g==null?void 0:g.buckets)===null||_===void 0?void 0:_.length)>0){const M=JSON.parse(JSON.stringify(g));M.buckets=`*** ${(m=(v=M.buckets)===null||v===void 0?void 0:v.length)!==null&&m!==void 0?m:0} buckets omitted ***`,d.response.body.aggregations[p]=M}}),console.log("***** RESPONSE RECEIVED *****"),console.groupCollapsed("Response"),console.log(JSON.stringify(d,null,2)),console.groupEnd()}catch(d){console.error("Error printing search response:",d)}}printDebuggingInfo(e){var t,i;const r=e.debugging,n=(t=r.messages)!==null&&t!==void 0?t:[],a=(i=r.data)!==null&&i!==void 0?i:{};console.log("***** BEGIN DEBUGGING *****"),console.log("Full response:"),console.log(JSON.stringify(e,null,2)),console.group("Debug messages");for(const d of n)console.log(d);console.groupEnd(),console.group("Debug data");for(const[d,l]of Object.entries(a))console.log(d,l);console.groupEnd(),console.log("***** END DEBUGGING *****")}}class Ai extends X{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=H.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?service_backend=fts&${i}`;return this.fetchUrl(r)}}class Mi extends X{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=H.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?service_backend=metadata&${i}`;return this.fetchUrl(r)}}class Si extends X{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=H.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?service_backend=tvs&${i}`;return this.fetchUrl(r)}}class Ei extends X{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=H.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?service_backend=rcs&${i}`;return this.fetchUrl(r)}}class xi extends X{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=H.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?page_type=simple_federation&${i}`;return this.fetchUrl(r)}}class ki extends X{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=H.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?${i}`;return this.fetchUrl(r)}}class Z{constructor(e={}){this.backendOptions=e}async search(e,t=R.METADATA){const r=await Z.getBackendForSearchType(t,this.backendOptions).performSearch(e);return r.error?r:{success:new $i(r.success)}}static getBackendForSearchType(e,t={}){switch(e){case R.METADATA:return new Mi(t);case R.FULLTEXT:return new Ai(t);case R.RADIO:return new Ei(t);case R.TV:return new Si(t);case R.FEDERATED:return new xi(t);default:return new ki(t)}}}Z.default=new Z;o([u((s,e={})=>{const{includeCredentials:t=!1,verbose:i=!1,scope:r="",baseUrl:n=""}=e;return`${s};${t};${i};${r};${n}`})],Z,"getBackendForSearchType",null);let de=class extends B{constructor(){super(...arguments),this.isSearching=!1}get itemResults(){var e;return(e=this.response)===null||e===void 0?void 0:e.response.itemExtraInfo}render(){return y`
      <fieldset>
        <legend>Item Query</legend>
        <form>
          <label for="item-input">Item ID: </label>
          <input type="text" id="item-input" placeholder="Enter Item ID" />
          <input type="submit" value="Go" @click=${this.search} />
        </form>
      </fieldset>

      ${this.isSearching?y`<p>Searching...</p>`:w}
      ${this.itemResults?y`
            <h3>Item Details:</h3>
            <pre>${JSON.stringify(this.itemResults,null,2)}</pre>
          `:w}
    `}async search(e){var t,i,r;e.preventDefault();const n=(i=(t=this.shadowRoot)===null||t===void 0?void 0:t.getElementById("item-input"))===null||i===void 0?void 0:i.value,a={query:"",pageType:"item_details",pageTarget:n,uid:"demo"};this.isSearching=!0;const d=await((r=this.searchService)===null||r===void 0?void 0:r.search(a,R.DEFAULT));this.response=d==null?void 0:d.success,this.isSearching=!1}};o([be({type:Object})],de.prototype,"searchService",void 0);o([E()],de.prototype,"isSearching",void 0);o([E()],de.prototype,"response",void 0);de=o([Ze("item-detail-query")],de);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Ri(s,e){if(s!==void 0){let t=0;for(const i of s)yield e(i,t++)}}class Mt{constructor(){this.filterMap={}}addFilter(e,t,i){if(this.filterMap[e]||(this.filterMap[e]={}),this.filterMap[e][t]){const r=[].concat(this.filterMap[e][t],i);this.filterMap[e][t]=Array.from(new Set(r))}else this.filterMap[e][t]=i;return this}removeSingleFilter(e,t,i){var r;if(!(!((r=this.filterMap[e])===null||r===void 0)&&r[t]))return this;const n=[].concat(this.filterMap[e][t]),a=n.indexOf(i);return a>=0&&n.splice(a,1),this.filterMap[e][t]=n.length===1?n[0]:n,n.length===0&&delete this.filterMap[e][t],this.deleteFieldIfEmpty(e),this}removeFilters(e,t){return this.filterMap[e]?(delete this.filterMap[e][t],this.deleteFieldIfEmpty(e),this):this}deleteFieldIfEmpty(e){const t=this.filterMap[e];t&&Object.keys(t).length===0&&delete this.filterMap[e]}setFilterMap(e){return this.filterMap={...e},this}mergeFilterMap(e){for(const[t,i]of Object.entries(e))for(const[r,n]of Object.entries(i))if(Array.isArray(n))for(const a of n)this.addFilter(t,r,a);else this.addFilter(t,r,n);return this}build(){return this.filterMap}}let $=class extends B{constructor(){super(...arguments),this.debuggingEnabled=!1,this.filterMap={},this.loadingSearchResults=!1,this.loadingAggregations=!1,this.defaultAggregationsChecked=!0,this.fullSearchResultsShown=!1}get searchResults(){var e;return(e=this.searchResponse)===null||e===void 0?void 0:e.response.results}get searchAggregations(){var e;return(e=this.aggregationsResponse)===null||e===void 0?void 0:e.response.aggregations}render(){return y`
      <fieldset>
        <legend>Search options</legend>
        <form>
          <label for="search-input">Query: </label>
          <input
            type="text"
            id="search-input"
            placeholder="Search Term or identifier"
          />
          <input type="submit" value="Go" @click=${this.search} />

          <span class="input-with-label">
            <input type="checkbox" id="search-within-check" />
            <label for="search-input-check">Search within collection</label>
          </span>

          <span class="input-with-label">
            <input
              type="checkbox"
              id="debug-info-check"
              ?checked=${this.debuggingEnabled}
            />
            <label for="debug-info-check">Include debugging info</label>
          </span>

          <fieldset class="search-options">
            <legend>Search type:</legend>
            <span class="input-with-label">
              <input
                type="radio"
                id="mds"
                name="search-type"
                value="mds"
                checked
              />
              <label for="mds"> &nbsp;Metadata </label>
            </span>
            <span class="input-with-label">
              <input type="radio" id="fts" name="search-type" value="fts" />
              <label for="fts"> &nbsp;Full text </label>
            </span>
          </fieldset>

          <fieldset class="search-options">
            <legend>Search size:</legend>
            <div class="field-row">
              <label for="num-rows">Number of result rows:</label>
              <input type="number" id="num-rows" value="10" min="0" max="999" />
            </div>
            <div class="field-row">
              <label for="num-aggs">Number of aggregation buckets:</label>
              <input type="number" id="num-aggs" value="6" min="0" max="999" />
            </div>
          </fieldset>

          <fieldset class="search-options">
            <legend>Sort by title:</legend>
            <span class="input-with-label">
              <input
                type="radio"
                id="sort-none"
                name="sort"
                value="none"
                checked
              />
              <label for="sort-none"> &nbsp;None </label>
            </span>
            <span class="input-with-label">
              <input type="radio" id="sort-asc" name="sort" value="asc" />
              <label for="sort-asc"> &nbsp;Ascending </label>
            </span>
            <span class="input-with-label">
              <input type="radio" id="sort-desc" name="sort" value="desc" />
              <label for="sort-desc"> &nbsp;Descending </label>
            </span>
          </fieldset>

          <fieldset class="search-options">
            <legend>Filters:</legend>
            <select id="filter-field" @change=${this.filterFieldChanged}>
              <option value="mediatype">Mediatype</option>
              <option value="year" data-numeric="true">Year</option>
              <option value="subject">Subject</option>
              <option value="language">Language</option>
              <option value="creator">Creator</option>
              <option value="collection">Collection</option>
              <option value="lending___status">Lending status</option>
            </select>
            <select id="filter-constraint">
              <option value="inc">includes</option>
              <option value="exc">excludes</option>
              <option value="gt" data-numeric="true" hidden>&gt;</option>
              <option value="gte" data-numeric="true" hidden>&gt;=</option>
              <option value="lt" data-numeric="true" hidden>&lt;</option>
              <option value="lte" data-numeric="true" hidden>&lt;=</option>
            </select>
            <input type="text" id="filter-value" />
            <button type="button" @click=${this.addFilterClicked}>
              Add filter
            </button>
            <div id="applied-filters">${this.appliedFiltersTemplate}</div>
          </fieldset>

          <fieldset class="search-options">
            <legend>Include aggregations for:</legend>
            <span class="input-with-label">
              <input
                type="checkbox"
                id="aggs-default"
                checked
                @change=${this.toggleDefaultAggregations}
              />
              <label for="aggs-default">Default (all) </label>
            </span>
            ${this.aggregationCheckboxTemplate("mediatype","Mediatype")}
            ${this.aggregationCheckboxTemplate("year","Year")}
            ${this.aggregationCheckboxTemplate("subject","Subject")}
            ${this.aggregationCheckboxTemplate("language","Language")}
            ${this.aggregationCheckboxTemplate("creator","Creator")}
            ${this.aggregationCheckboxTemplate("collection","Collection")}
            ${this.aggregationCheckboxTemplate("lending___status","Lending")}
          </fieldset>
        </form>
      </fieldset>

      ${this.searchResults||this.loadingSearchResults?this.resultsTemplate:w}
    `}filterFieldChanged(e){var t,i;const n=!!e.target.selectedOptions[0].dataset.numeric,a=(i=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelectorAll("#filter-constraint option"))!==null&&i!==void 0?i:[];for(const d of a)d.toggleAttribute("hidden",!n&&!!d.dataset.numeric)}addFilterClicked(){const e=this.filterFieldInput.selectedOptions[0].value,t=this.filterValueInput.value,i=this.filterConstraintInput.selectedOptions[0].value;!e||!i||!t||(this.filterMap=new Mt().setFilterMap(this.filterMap).addFilter(e,t,i).build(),this.filterValueInput.value="")}removeFilterClicked(e){const t=e.target,{field:i,value:r,constraint:n}=t.dataset;i&&r&&n&&(this.filterMap=new Mt().setFilterMap(this.filterMap).removeSingleFilter(i,r,n).build())}get appliedFiltersTemplate(){const e=[];for(const[i,r]of Object.entries(this.filterMap))for(const[n,a]of Object.entries(r))if(Array.isArray(a))for(const d of a)e.push({field:i,value:n,constraint:d});else e.push({field:i,value:n,constraint:a});if(e.length===0)return y`<span>(no filters applied)</span>`;const t={inc:"includes",exc:"excludes",gt:">",gte:">=",lt:"<",lte:"<="};return Ri(e,({field:i,value:r,constraint:n})=>y`
        <span class="filter">
          <span class="filter-text"
            >'${i}' ${t[n]} '${r}'</span
          >
          <button
            type="button"
            class="remove-filter"
            data-field=${i}
            data-value=${r}
            data-constraint=${n}
            @click=${this.removeFilterClicked}
          >
            x
          </button>
        </span>
      `)}aggregationCheckboxTemplate(e,t){const i=`aggs-${e}`;return y`
      <span class="input-with-label">
        <input
          type="checkbox"
          id=${i}
          name="aggs"
          value=${e}
          checked
          ?disabled=${this.defaultAggregationsChecked}
        />
        <label for=${i}>${t} </label>
      </span>
    `}get resultsTemplate(){return y`
      <details>
        <summary>PPS URL params</summary>
        ${this.lastSearchParams?y`<div>
              Last search params:
              <pre class="params">${this.lastSearchParams}</pre>
            </div>`:w}
        ${this.lastAggregationParams?y`<div>
              Last aggregation params:
              <pre class="params">${this.lastAggregationParams}</pre>
            </div>`:w}
      </details>
      ${this.loadingSearchResults?y`<h3>Loading search results...</h3>`:[this.minimalSearchResultsTemplate,this.fullSearchResultsTemplate]}
      ${this.loadingAggregations?y`<h3>Loading aggregations...</h3>`:this.aggregationsTemplate}
    `}get minimalSearchResultsTemplate(){var e;return y`
      <h2>Search Results</h2>
      <table>
        <thead>
          <tr>
            <th>Identifier</th>
            <th>Title</th>
            ${this.snippetsHeaderTemplate}
          </tr>
        </thead>
        <tbody>
          ${(e=this.searchResults)===null||e===void 0?void 0:e.map(t=>{var i,r;return y`
              <tr>
                <td>${t.identifier}</td>
                <td>${(r=(i=t.title)===null||i===void 0?void 0:i.value)!==null&&r!==void 0?r:"(Untitled)"}</td>
                ${this.snippetTemplate(t)}
              </tr>
            `})}
        </tbody>
      </table>
    `}get fullSearchResultsTemplate(){return y`
      <button @click=${this.toggleFullSearchResults}>
        ${this.fullSearchResultsShown?"Hide":"Show"} all search results
      </button>
      ${this.fullSearchResultsShown?y`<pre>
            ${JSON.stringify(this.searchResults,null,2)}
          </pre
          >`:w}
    `}get aggregationsTemplate(){var e;return y`
      <div>
        <h2>Aggregations</h2>
        ${Object.entries((e=this.searchAggregations)!==null&&e!==void 0?e:{}).map(([t,i])=>y`
            <h3>${t}</h3>
            <p>
              ${i.buckets.map(r=>typeof r=="number"?r:`${r.key} (${r.doc_count})`).join(", ")}
            </p>
          `)}
      </div>
    `}get snippetsHeaderTemplate(){var e;return!((e=this.searchResults)===null||e===void 0)&&e.some(t=>t.highlight)?y`<th>Snippets</th>`:y`${w}`}snippetTemplate(e){return e.highlight?y`<td>${e.highlight.value}</td>`:y`${w}`}toggleDefaultAggregations(){var e;this.defaultAggregationsChecked=(e=this.defaultAggregationsCheckbox)===null||e===void 0?void 0:e.checked}toggleFullSearchResults(){this.fullSearchResultsShown=!this.fullSearchResultsShown}async search(e){var t;e.preventDefault();const i=this.searchInput.value,r=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector("input[name='search-type']:checked"),n=(r==null?void 0:r.value)==="fts"?R.FULLTEXT:R.METADATA;this.fetchSearchResults(i,n),this.fetchAggregations(i,n)}async fetchSearchResults(e,t){var i,r,n,a,d,l,h;const p=((i=this.checkedSort)===null||i===void 0?void 0:i.value)==="none"?void 0:[{field:"title",direction:(r=this.checkedSort)===null||r===void 0?void 0:r.value}],g=Number((n=this.rowsInput)===null||n===void 0?void 0:n.value),_=(a=this.debugCheck)===null||a===void 0?void 0:a.checked,v={query:e,rows:g,sort:p,filters:this.filterMap,aggregations:{omit:!0},debugging:_,uid:"demo"};!((d=this.searchWithinCheck)===null||d===void 0)&&d.checked&&(v.pageTarget=e,v.pageType="collection_details"),this.lastSearchParams=decodeURIComponent(H.generateURLSearchParams(v).toString()),this.loadingSearchResults=!0;const m=await((l=this.searchService)===null||l===void 0?void 0:l.search(v,t));this.loadingSearchResults=!1,m!=null&&m.success?this.searchResponse=m==null?void 0:m.success:(alert(`Oh noes: ${(h=m==null?void 0:m.error)===null||h===void 0?void 0:h.message}`),console.error("Error searching",m==null?void 0:m.error))}async fetchAggregations(e,t){var i,r,n,a,d;const l=(i=this.shadowRoot)===null||i===void 0?void 0:i.querySelectorAll("input[name='aggs']:checked"),h={simpleParams:l?[...l].map(m=>m.value):void 0},p=Number((r=this.numAggsInput)===null||r===void 0?void 0:r.value),g=(n=this.debugCheck)===null||n===void 0?void 0:n.checked,_={query:e,rows:0,filters:this.filterMap,aggregationsSize:p,debugging:g,uid:"demo"};this.defaultAggregationsChecked||(_.aggregations=h),this.lastAggregationParams=decodeURIComponent(H.generateURLSearchParams(_).toString()),this.loadingAggregations=!0;const v=await((a=this.searchService)===null||a===void 0?void 0:a.search(_,t));this.loadingAggregations=!1,v!=null&&v.success?this.aggregationsResponse=v==null?void 0:v.success:(alert(`Oh noes: ${(d=v==null?void 0:v.error)===null||d===void 0?void 0:d.message}`),console.error("Error searching",v==null?void 0:v.error))}static get styles(){return Et`
      :host {
        font-size: 1.3rem;
      }

      .search-options {
        margin-top: 0.6rem;
      }

      .field-row {
        margin: 0.3rem 0;
      }

      fieldset {
        margin-bottom: 0.5rem;
      }

      #search-input {
        min-width: 220px;
      }

      #applied-filters {
        margin-top: 6px;
      }

      .filter {
        display: inline-block;
        margin-bottom: 3px;
        font-size: 1.1rem;
        font-family: sans-serif;
      }

      .filter-text {
        padding: 3px 3px 3px 6px;
        border-radius: 3px 0 0 3px;
        background: #ccc;
      }

      .remove-filter {
        all: unset;
        padding: 3px 6px;
        border-radius: 0 3px 3px 0;
        background: #ccc;
        cursor: pointer;
      }
      .remove-filter:hover {
        background: #999;
      }
      .remove-filter:active {
        background: #888;
      }

      .input-with-label {
        display: inline-flex;
        align-items: center;
        margin-right: 8px;
      }

      .params {
        white-space: pre-wrap;
      }
    `}};o([be({type:Object})],$.prototype,"searchService",void 0);o([be({type:Boolean})],$.prototype,"debuggingEnabled",void 0);o([N("#search-input")],$.prototype,"searchInput",void 0);o([N("#search-within-check")],$.prototype,"searchWithinCheck",void 0);o([N("#debug-info-check")],$.prototype,"debugCheck",void 0);o([N("#num-rows")],$.prototype,"rowsInput",void 0);o([N("#num-aggs")],$.prototype,"numAggsInput",void 0);o([N("input[name='sort']:checked")],$.prototype,"checkedSort",void 0);o([N("#filter-field")],$.prototype,"filterFieldInput",void 0);o([N("#filter-constraint")],$.prototype,"filterConstraintInput",void 0);o([N("#filter-value")],$.prototype,"filterValueInput",void 0);o([N("#aggs-default")],$.prototype,"defaultAggregationsCheckbox",void 0);o([E()],$.prototype,"filterMap",void 0);o([E()],$.prototype,"loadingSearchResults",void 0);o([E()],$.prototype,"loadingAggregations",void 0);o([E()],$.prototype,"lastSearchParams",void 0);o([E()],$.prototype,"lastAggregationParams",void 0);o([E()],$.prototype,"defaultAggregationsChecked",void 0);o([E()],$.prototype,"fullSearchResultsShown",void 0);o([E()],$.prototype,"searchResponse",void 0);o([E()],$.prototype,"aggregationsResponse",void 0);$=o([Ze("search-query")],$);let ue=class extends B{constructor(){super(...arguments),this.searchServiceUrlOptions=this.initSearchServiceUrlOptions(),this.queryType="search",this.searchService=new Z(this.searchServiceUrlOptions)}initSearchServiceUrlOptions(){var e,t,i;const r=new URL(window.location.href).searchParams;return{baseUrl:(e=r.get("search_base_url"))!==null&&e!==void 0?e:"archive.org",servicePath:(t=r.get("search_service_path"))!==null&&t!==void 0?t:void 0,debuggingEnabled:(i=!!r.get("debugging"))!==null&&i!==void 0?i:void 0}}render(){return y`
      <fieldset>
        <legend>Query Option</legend>
        <input
          type="radio"
          id="search"
          name="query-type"
          value="search"
          ?checked=${this.queryType==="search"}
          @change=${this.onQueryTypeChange}
        />
        <label for="search">Search</label>
        <input
          type="radio"
          id="item"
          name="query-type"
          value="item"
          ?checked=${this.queryType==="item"}
          @change=${this.onQueryTypeChange}
        />
        <label for="item">Item</label>
      </fieldset>
      ${hi(this.queryType,[["search",()=>this.searchTemplate],["item",()=>this.itemTemplate]])}
    `}onQueryTypeChange(e){const t=e.target;this.queryType=t.value}get itemTemplate(){return y`
      <item-detail-query
        .searchService=${this.searchService}
      ></item-detail-query>
    `}get searchTemplate(){var e;return y` <search-query
      .searchService=${this.searchService}
      ?debuggingEnabled=${(e=this.searchServiceUrlOptions)===null||e===void 0?void 0:e.debuggingEnabled}
    ></search-query>`}static get styles(){return Et`
      :host {
        font-size: 1.3rem;
      }

      .search-options {
        margin-top: 0.6rem;
      }

      .field-row {
        margin: 0.3rem 0;
      }

      fieldset {
        margin-bottom: 0.5rem;
      }

      #search-input {
        min-width: 220px;
      }

      #applied-filters {
        margin-top: 6px;
      }

      .filter {
        display: inline-block;
        margin-bottom: 3px;
        font-size: 1.1rem;
        font-family: sans-serif;
      }

      .filter-text {
        padding: 3px 3px 3px 6px;
        border-radius: 3px 0 0 3px;
        background: #ccc;
      }

      .remove-filter {
        all: unset;
        padding: 3px 6px;
        border-radius: 0 3px 3px 0;
        background: #ccc;
        cursor: pointer;
      }
      .remove-filter:hover {
        background: #999;
      }
      .remove-filter:active {
        background: #888;
      }

      .input-with-label {
        display: inline-flex;
        align-items: center;
        margin-right: 8px;
      }

      .params {
        white-space: pre-wrap;
      }
    `}};o([E()],ue.prototype,"searchServiceUrlOptions",void 0);o([E()],ue.prototype,"queryType",void 0);o([E()],ue.prototype,"searchService",void 0);ue=o([Ze("app-root")],ue);
