const nt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}};nt();/*! *****************************************************************************
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
***************************************************************************** */function l(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var o=s.length-1;o>=0;o--)(a=s[o])&&(n=(r<3?a(n):r>3?a(e,t,n):a(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=window,xe=ie.ShadowRoot&&(ie.ShadyCSS===void 0||ie.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Re=Symbol(),Oe=new WeakMap;class Ze{constructor(e,t,i){if(this._$cssResult$=!0,i!==Re)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(xe&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Oe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Oe.set(t,e))}return e}toString(){return this.cssText}}const at=s=>new Ze(typeof s=="string"?s:s+"",void 0,Re),Xe=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,r,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[n+1],s[0]);return new Ze(t,s,Re)},lt=(s,e)=>{xe?s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),r=ie.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)})},Ie=xe?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return at(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var he;const re=window,De=re.trustedTypes,ot=De?De.emptyScript:"",Fe=re.reactiveElementPolyfillSupport,ye={toAttribute(s,e){switch(e){case Boolean:s=s?ot:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Ye=(s,e)=>e!==s&&(e==e||s==s),pe={attribute:!0,type:String,converter:ye,reflect:!1,hasChanged:Ye};class F extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;(t=this.h)!==null&&t!==void 0||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Ep(i,t);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,t=pe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const n=this[e];this[t]=r,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||pe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(Ie(r))}else e!==void 0&&t.push(Ie(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return lt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=pe){var r;const n=this.constructor._$Ep(e,i);if(n!==void 0&&i.reflect===!0){const a=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:ye).toAttribute(t,i.type);this._$El=e,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$El=null}}_$AK(e,t){var i;const r=this.constructor,n=r._$Ev.get(e);if(n!==void 0&&this._$El!==n){const a=r.getPropertyOptions(n),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?a.converter:ye;this._$El=n,this[n]=o.fromAttribute(t,a.type),this._$El=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Ye)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,n)=>this[n]=r),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdate)===null||n===void 0?void 0:n.call(r)}),this.update(i)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}F.finalized=!0,F.elementProperties=new Map,F.elementStyles=[],F.shadowRootOptions={mode:"open"},Fe==null||Fe({ReactiveElement:F}),((he=re.reactiveElementVersions)!==null&&he!==void 0?he:re.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ge;const se=window,q=se.trustedTypes,Le=q?q.createPolicy("lit-html",{createHTML:s=>s}):void 0,U=`lit$${(Math.random()+"").slice(9)}$`,et="?"+U,dt=`<${et}>`,B=document,Z=(s="")=>B.createComment(s),X=s=>s===null||typeof s!="object"&&typeof s!="function",tt=Array.isArray,ut=s=>tt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,He=/-->/g,qe=/>/g,I=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Be=/'/g,ze=/"/g,it=/^(?:script|style|textarea|title)$/i,ct=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),y=ct(1),z=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),je=new WeakMap,ht=(s,e,t)=>{var i,r;const n=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let a=n._$litPart$;if(a===void 0){const o=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;n._$litPart$=a=new te(e.insertBefore(Z(),o),o,void 0,t!=null?t:{})}return a._$AI(s),a},L=B.createTreeWalker(B,129,null,!1),pt=(s,e)=>{const t=s.length-1,i=[];let r,n=e===2?"<svg>":"",a=W;for(let d=0;d<t;d++){const h=s[d];let _,p,v=-1,f=0;for(;f<h.length&&(a.lastIndex=f,p=a.exec(h),p!==null);)f=a.lastIndex,a===W?p[1]==="!--"?a=He:p[1]!==void 0?a=qe:p[2]!==void 0?(it.test(p[2])&&(r=RegExp("</"+p[2],"g")),a=I):p[3]!==void 0&&(a=I):a===I?p[0]===">"?(a=r!=null?r:W,v=-1):p[1]===void 0?v=-2:(v=a.lastIndex-p[2].length,_=p[1],a=p[3]===void 0?I:p[3]==='"'?ze:Be):a===ze||a===Be?a=I:a===He||a===qe?a=W:(a=I,r=void 0);const m=a===I&&s[d+1].startsWith("/>")?" ":"";n+=a===W?h+dt:v>=0?(i.push(_),h.slice(0,v)+"$lit$"+h.slice(v)+U+m):h+U+(v===-2?(i.push(void 0),d):m)}const o=n+(s[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Le!==void 0?Le.createHTML(o):o,i]};class Y{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,a=0;const o=e.length-1,d=this.parts,[h,_]=pt(e,t);if(this.el=Y.createElement(h,i),L.currentNode=this.el.content,t===2){const p=this.el.content,v=p.firstChild;v.remove(),p.append(...v.childNodes)}for(;(r=L.nextNode())!==null&&d.length<o;){if(r.nodeType===1){if(r.hasAttributes()){const p=[];for(const v of r.getAttributeNames())if(v.endsWith("$lit$")||v.startsWith(U)){const f=_[a++];if(p.push(v),f!==void 0){const m=r.getAttribute(f.toLowerCase()+"$lit$").split(U),A=/([.?@])?(.*)/.exec(f);d.push({type:1,index:n,name:A[2],strings:m,ctor:A[1]==="."?ft:A[1]==="?"?_t:A[1]==="@"?mt:le})}else d.push({type:6,index:n})}for(const v of p)r.removeAttribute(v)}if(it.test(r.tagName)){const p=r.textContent.split(U),v=p.length-1;if(v>0){r.textContent=q?q.emptyScript:"";for(let f=0;f<v;f++)r.append(p[f],Z()),L.nextNode(),d.push({type:2,index:++n});r.append(p[v],Z())}}}else if(r.nodeType===8)if(r.data===et)d.push({type:2,index:n});else{let p=-1;for(;(p=r.data.indexOf(U,p+1))!==-1;)d.push({type:7,index:n}),p+=U.length-1}n++}}static createElement(e,t){const i=B.createElement("template");return i.innerHTML=e,i}}function j(s,e,t=s,i){var r,n,a,o;if(e===z)return e;let d=i!==void 0?(r=t._$Cl)===null||r===void 0?void 0:r[i]:t._$Cu;const h=X(e)?void 0:e._$litDirective$;return(d==null?void 0:d.constructor)!==h&&((n=d==null?void 0:d._$AO)===null||n===void 0||n.call(d,!1),h===void 0?d=void 0:(d=new h(s),d._$AT(s,t,i)),i!==void 0?((a=(o=t)._$Cl)!==null&&a!==void 0?a:o._$Cl=[])[i]=d:t._$Cu=d),d!==void 0&&(e=j(s,d._$AS(s,e.values),d,i)),e}class gt{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:r}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:B).importNode(i,!0);L.currentNode=n;let a=L.nextNode(),o=0,d=0,h=r[0];for(;h!==void 0;){if(o===h.index){let _;h.type===2?_=new te(a,a.nextSibling,this,e):h.type===1?_=new h.ctor(a,h.name,h.strings,this,e):h.type===6&&(_=new wt(a,this,e)),this.v.push(_),h=r[++d]}o!==(h==null?void 0:h.index)&&(a=L.nextNode(),o++)}return n}m(e){let t=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class te{constructor(e,t,i,r){var n;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$C_=(n=r==null?void 0:r.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$C_}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=j(this,e,t),X(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==z&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):ut(e)?this.O(e):this.$(e)}S(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}$(e){this._$AH!==w&&X(this._$AH)?this._$AA.nextSibling.data=e:this.k(B.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Y.createElement(r.h,this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.m(i);else{const a=new gt(n,this),o=a.p(this.options);a.m(i),this.k(o),this._$AH=a}}_$AC(e){let t=je.get(e.strings);return t===void 0&&je.set(e.strings,t=new Y(e)),t}O(e){tt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new te(this.S(Z()),this.S(Z()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$C_=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class le{constructor(e,t,i,r,n){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const n=this.strings;let a=!1;if(n===void 0)e=j(this,e,t,0),a=!X(e)||e!==this._$AH&&e!==z,a&&(this._$AH=e);else{const o=e;let d,h;for(e=n[0],d=0;d<n.length-1;d++)h=j(this,o[i+d],t,d),h===z&&(h=this._$AH[d]),a||(a=!X(h)||h!==this._$AH[d]),h===w?e=w:e!==w&&(e+=(h!=null?h:"")+n[d+1]),this._$AH[d]=h}a&&!r&&this.P(e)}P(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class ft extends le{constructor(){super(...arguments),this.type=3}P(e){this.element[this.name]=e===w?void 0:e}}const vt=q?q.emptyScript:"";class _t extends le{constructor(){super(...arguments),this.type=4}P(e){e&&e!==w?this.element.setAttribute(this.name,vt):this.element.removeAttribute(this.name)}}class mt extends le{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){var i;if((e=(i=j(this,e,t,0))!==null&&i!==void 0?i:w)===z)return;const r=this._$AH,n=e===w&&r!==w||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==w&&(r===w||n);n&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class wt{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){j(this,e)}}const Ve=se.litHtmlPolyfillSupport;Ve==null||Ve(Y,te),((ge=se.litHtmlVersions)!==null&&ge!==void 0?ge:se.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fe,ve;class D extends F{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ht(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return z}}D.finalized=!0,D._$litElement$=!0,(fe=globalThis.litElementHydrateSupport)===null||fe===void 0||fe.call(globalThis,{LitElement:D});const Je=globalThis.litElementPolyfillSupport;Je==null||Je({LitElement:D});((ve=globalThis.litElementVersions)!==null&&ve!==void 0?ve:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=s=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(s,e):((t,i)=>{const{kind:r,elements:n}=i;return{kind:r,elements:n,finisher(a){customElements.define(t,a)}}})(s,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,s)}};function oe(s){return(e,t)=>t!==void 0?((i,r,n)=>{r.constructor.createProperty(n,i)})(s,e,t):yt(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function M(s){return oe({...s,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=({finisher:s,descriptor:e})=>(t,i)=>{var r;if(i===void 0){const n=(r=t.originalKey)!==null&&r!==void 0?r:t.key,a=e!=null?{kind:"method",placement:"prototype",key:n,descriptor:e(t.key)}:{...t,key:n};return s!=null&&(a.finisher=function(o){s(o,n)}),a}{const n=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),s==null||s(n,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function T(s,e){return bt({descriptor:t=>{const i={get(){var r,n;return(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(s))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(e){const r=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var n,a;return this[r]===void 0&&(this[r]=(a=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(s))!==null&&a!==void 0?a:null),this[r]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _e;((_e=window.HTMLSlotElement)===null||_e===void 0?void 0:_e.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=(s,e,t)=>{for(const i of e)if(i[0]===s)return(0,i[1])();return t==null?void 0:t()};function u(s){let e,t,i;return typeof s=="object"?(e=s.hashFunction,t=s.expiring,i=s.tags):e=s,(r,n,a)=>{if(a.value!=null)a.value=Ge(a.value,e,t,i);else if(a.get!=null)a.get=Ge(a.get,e,t,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const me=new Map;function Ge(s,e,t=0,i){const r=Symbol("__memoized_map__");return function(...n){let a;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let o=this[r];if(Array.isArray(i))for(const d of i)me.has(d)?me.get(d).push(o):me.set(d,[o]);if(e||n.length>0||t>0){let d;e===!0?d=n.map(p=>p.toString()).join("!"):e?d=e.apply(this,n):d=n[0];const h=`${d}__timestamp`;let _=!1;if(t>0)if(!o.has(h))_=!0;else{let p=o.get(h);_=Date.now()-p>t}o.has(d)&&!_?a=o.get(d):(a=s.apply(this,n),o.set(d,a),t>0&&o.set(h,Date.now()))}else{const d=this;o.has(d)?a=o.get(d):(a=s.apply(this,n),o.set(d,a))}return a}}var Q;(function(s){s[s.COUNT=0]="COUNT",s[s.ALPHABETICAL=1]="ALPHABETICAL",s[s.NUMERIC=2]="NUMERIC"})(Q||(Q={}));class rt{constructor(e){this.buckets=e.buckets,this.first_bucket_key=e.first_bucket_key,this.last_bucket_key=e.last_bucket_key,this.number_buckets=e.number_buckets,this.interval=e.interval,this.first_bucket_year=e.first_bucket_year,this.first_bucket_month=e.first_bucket_month,this.last_bucket_year=e.last_bucket_year,this.last_bucket_month=e.last_bucket_month,this.interval_in_months=e.interval_in_months}getSortedBuckets(e){const t=[...this.buckets];if(this.isRawNumberBuckets(t))return t;const i=new Intl.Collator;switch(e){case Q.ALPHABETICAL:return t.sort((r,n)=>i.compare(r.key.toString(),n.key.toString()));case Q.NUMERIC:return t.sort((r,n)=>Number(n.key)-Number(r.key));case Q.COUNT:default:return t}}isRawNumberBuckets(e){return typeof e[0]=="number"}}l([u()],rt.prototype,"getSortedBuckets",null);class be{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:Boolean(e)}}be.shared=new be;class ne{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}ne.shared=new ne;class $e{parseValue(e){return ne.shared.parseValue(e)}}$e.shared=new $e;class Se{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const i=Date.parse(t);if(Number.isNaN(i))return;let r=new Date(t);return(t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}Se.shared=new Se;class Me{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let i;return t.length===1?i=this.parseNumberFormat(t[0]):i=this.parseColonSeparatedFormat(t),i}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const i=e.map((r,n)=>{const a=parseFloat(r);if(Number.isNaN(a))return t=!0,0;const o=e.length-1-n,d=60**o;return a*Math.floor(d)}).reduce((r,n)=>r+n,0);return t?void 0:i}}Me.shared=new Me;class Ae{parseValue(e){if(typeof e=="string")return e}}Ae.shared=new Ae;class St{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let i=[];for(const r of this.separators)if(i=t.split(r),i.length>1)break;return this.parseListValues(i)}parseListValues(e){const i=e.map(n=>n.trim()).map(n=>this.parser.parseValue(n)),r=[];return i.forEach(n=>{n!==void 0&&r.push(n)}),r}}class Ee{parseValue(e){if(typeof e=="string")return e}}Ee.shared=new Ee;class ae{parseValue(e){return String(e)}}ae.shared=new ae;class C{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(i=>{const r=this.parser.parseValue(i);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}l([u()],C.prototype,"values",null);l([u()],C.prototype,"value",null);class H extends C{constructor(e){super(be.shared,e)}}class E extends C{constructor(e){super(Se.shared,e)}}class we extends C{constructor(e){super(Me.shared,e)}}class S extends C{constructor(e){super(ne.shared,e)}}class g extends C{constructor(e){super(ae.shared,e)}}class Mt extends C{constructor(e){super(Ee.shared,e)}}class We extends C{constructor(e){super($e.shared,e)}}class st extends C{constructor(e){super(Ae.shared,e)}}class At extends C{constructor(e,t){super(t,e)}}class Et extends At{constructor(e){const t=new St(ae.shared);super(e,t)}}class c{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new E(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new g(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new S(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new S(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new g(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new g(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new We(this.rawMetadata.collection_size):void 0}get contributor(){return this.rawMetadata.contributor!=null?new g(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new g(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new g(this.rawMetadata.creator):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new g(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new E(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new g(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new S(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new we(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new g(this.rawMetadata["external-identifier"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new S(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new E(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new g(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new g(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new S(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new We(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new g(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new we(this.rawMetadata.length):void 0}get lineage(){return this.rawMetadata.lineage!=null?new g(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new S(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new st(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new H(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new g(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new S(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new S(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new g(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new g(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new Mt(this.rawMetadata.page_progression):void 0}get partner(){return this.rawMetadata.partner!=null?new g(this.rawMetadata.partner):void 0}get ppi(){return this.rawMetadata.ppi!=null?new S(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new E(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new g(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new E(this.rawMetadata.reviewdate):void 0}get runtime(){return this.rawMetadata.runtime!=null?new we(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new g(this.rawMetadata.scanner):void 0}get source(){return this.rawMetadata.source!=null?new g(this.rawMetadata.source):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new E(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new E(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new E(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new Et(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new g(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new g(this.rawMetadata.title):void 0}get transferer(){return this.rawMetadata.transferer!=null?new g(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new S(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new g(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new g(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new S(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new g(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new g(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new S(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new S(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}l([u()],c.prototype,"addeddate",null);l([u()],c.prototype,"audio_codec",null);l([u()],c.prototype,"audio_sample_rate",null);l([u()],c.prototype,"avg_rating",null);l([u()],c.prototype,"collection",null);l([u()],c.prototype,"collections_raw",null);l([u()],c.prototype,"collection_size",null);l([u()],c.prototype,"contributor",null);l([u()],c.prototype,"coverage",null);l([u()],c.prototype,"creator",null);l([u()],c.prototype,"collection_layout",null);l([u()],c.prototype,"date",null);l([u()],c.prototype,"description",null);l([u()],c.prototype,"downloads",null);l([u()],c.prototype,"duration",null);l([u()],c.prototype,"external_identifier",null);l([u()],c.prototype,"files_count",null);l([u()],c.prototype,"indexdate",null);l([u()],c.prototype,"isbn",null);l([u()],c.prototype,"issue",null);l([u()],c.prototype,"item_count",null);l([u()],c.prototype,"item_size",null);l([u()],c.prototype,"language",null);l([u()],c.prototype,"length",null);l([u()],c.prototype,"lineage",null);l([u()],c.prototype,"month",null);l([u()],c.prototype,"mediatype",null);l([u()],c.prototype,"noindex",null);l([u()],c.prototype,"notes",null);l([u()],c.prototype,"num_favorites",null);l([u()],c.prototype,"num_reviews",null);l([u()],c.prototype,"openlibrary_edition",null);l([u()],c.prototype,"openlibrary_work",null);l([u()],c.prototype,"page_progression",null);l([u()],c.prototype,"partner",null);l([u()],c.prototype,"ppi",null);l([u()],c.prototype,"publicdate",null);l([u()],c.prototype,"publisher",null);l([u()],c.prototype,"reviewdate",null);l([u()],c.prototype,"runtime",null);l([u()],c.prototype,"scanner",null);l([u()],c.prototype,"source",null);l([u()],c.prototype,"start_localtime",null);l([u()],c.prototype,"start_time",null);l([u()],c.prototype,"stop_time",null);l([u()],c.prototype,"subject",null);l([u()],c.prototype,"taper",null);l([u()],c.prototype,"title",null);l([u()],c.prototype,"transferer",null);l([u()],c.prototype,"track",null);l([u()],c.prototype,"type",null);l([u()],c.prototype,"uploader",null);l([u()],c.prototype,"utc_offset",null);l([u()],c.prototype,"venue",null);l([u()],c.prototype,"volume",null);l([u()],c.prototype,"week",null);l([u()],c.prototype,"year",null);class $ extends c{get created_on(){return this.rawMetadata.created_on!=null?new E(this.rawMetadata.created_on):void 0}get file_creation_mtime(){return this.rawMetadata.file_creation_mtime!=null?new S(this.rawMetadata.file_creation_mtime):void 0}get filename(){return this.rawMetadata.filename!=null?new g(this.rawMetadata.filename):void 0}get file_basename(){return this.rawMetadata.file_basename!=null?new g(this.rawMetadata.file_basename):void 0}get result_in_subfile(){return this.rawMetadata.result_in_subfile!=null?new H(this.rawMetadata.result_in_subfile):void 0}get query(){return this.rawMetadata.query!=null?new g(this.rawMetadata.query):void 0}get date_favorited(){return this.rawMetadata.date_favorited!=null?new E(this.rawMetadata.date_favorited):void 0}get updated_on(){return this.rawMetadata.updated_on!=null?new E(this.rawMetadata.updated_on):void 0}get ad_id(){return this.rawMetadata.ad_id!=null?new g(this.rawMetadata.ad_id):void 0}get factcheck(){return this.rawMetadata.factcheck!=null?new g(this.rawMetadata.factcheck):void 0}get is_clip(){return this.rawMetadata.clip!=null?new H(this.rawMetadata.clip):void 0}get num_clips(){return this.rawMetadata.nclips!=null?new S(this.rawMetadata.nclips):void 0}get __href__(){return this.rawMetadata.__href__!=null?new g(this.rawMetadata.__href__):void 0}get __img__(){return this.rawMetadata.__img__!=null?new g(this.rawMetadata.__img__):void 0}}l([u()],$.prototype,"created_on",null);l([u()],$.prototype,"file_creation_mtime",null);l([u()],$.prototype,"filename",null);l([u()],$.prototype,"file_basename",null);l([u()],$.prototype,"result_in_subfile",null);l([u()],$.prototype,"query",null);l([u()],$.prototype,"date_favorited",null);l([u()],$.prototype,"updated_on",null);l([u()],$.prototype,"ad_id",null);l([u()],$.prototype,"factcheck",null);l([u()],$.prototype,"is_clip",null);l([u()],$.prototype,"num_clips",null);l([u()],$.prototype,"__href__",null);l([u()],$.prototype,"__img__",null);function ke(s){return{body:s.reviewbody,title:s.reviewtitle,author:s.reviewer,authorItem:s.reviewer_itemname,updatedate:new Date(s.reviewdate),createdate:new Date(s.createdate),stars:Number(s.stars)||0,__href__:s.__href__}}class R{constructor(e){var t;this.rawMetadata=e,this.fields=new $((t=e.fields)!==null&&t!==void 0?t:{})}get identifier(){return this.fields.identifier}get addeddate(){return this.fields.addeddate}get avg_rating(){return this.fields.avg_rating}get collection(){return this.fields.collection}get collection_files_count(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.collection_files_count)!=null?new S(this.rawMetadata.fields.collection_files_count):void 0}get collection_size(){return this.fields.collection_size}get creator(){return this.fields.creator}get date(){return this.fields.date}get description(){return this.fields.description}get downloads(){return this.fields.downloads}get files_count(){return this.fields.files_count}get genre(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.genre)!=null?new g(this.rawMetadata.fields.genre):void 0}get indexflag(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.indexflag)!=null?new g(this.rawMetadata.fields.indexflag):void 0}get issue(){return this.fields.issue}get item_count(){return this.fields.item_count}get item_size(){return this.fields.item_size}get language(){return this.fields.language}get lending___available_to_borrow(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.lending___available_to_borrow)!=null?new H(this.rawMetadata.fields.lending___available_to_borrow):void 0}get lending___available_to_browse(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.lending___available_to_browse)!=null?new H(this.rawMetadata.fields.lending___available_to_browse):void 0}get lending___available_to_waitlist(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.lending___available_to_waitlist)!=null?new H(this.rawMetadata.fields.lending___available_to_waitlist):void 0}get lending___status(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.lending___status)!=null?new g(this.rawMetadata.fields.lending___status):void 0}get licenseurl(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.licenseurl)!=null?new g(this.rawMetadata.fields.licenseurl):void 0}get mediatype(){return this.fields.mediatype}get month(){return this.fields.month}get noindex(){return this.fields.noindex}get num_favorites(){return this.fields.num_favorites}get num_reviews(){return this.fields.num_reviews}get publicdate(){return this.fields.publicdate}get reviewdate(){return this.fields.reviewdate}get review(){const e=this.rawMetadata.review;return e?ke(e):void 0}get source(){return this.fields.source}get subject(){return this.fields.subject}get title(){return this.fields.title}get type(){return this.fields.type}get volume(){return this.fields.volume}get week(){return this.fields.week}get year(){return this.fields.year}}l([u()],R.prototype,"collection_files_count",null);l([u()],R.prototype,"genre",null);l([u()],R.prototype,"indexflag",null);l([u()],R.prototype,"lending___available_to_borrow",null);l([u()],R.prototype,"lending___available_to_browse",null);l([u()],R.prototype,"lending___available_to_waitlist",null);l([u()],R.prototype,"lending___status",null);l([u()],R.prototype,"licenseurl",null);l([u()],R.prototype,"review",null);class Pe{constructor(e){var t;this.rawMetadata=e,this.fields=new $((t=e.fields)!==null&&t!==void 0?t:{})}get identifier(){return this.fields.identifier}get highlight(){var e;return!((e=this.rawMetadata.highlight)===null||e===void 0)&&e.text?new g(this.rawMetadata.highlight.text):void 0}get addeddate(){return this.fields.addeddate}get avg_rating(){return this.fields.avg_rating}get collection(){return this.fields.collection}get created_on(){return this.fields.created_on}get creator(){return this.fields.creator}get date(){return this.fields.date}get description(){return this.fields.description}get downloads(){return this.fields.downloads}get filename(){return this.fields.filename}get file_basename(){return this.fields.file_basename}get file_creation_mtime(){return this.fields.file_creation_mtime}get issue(){return this.fields.issue}get mediatype(){return this.fields.mediatype}get page_num(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.page_num)!=null?new S(this.rawMetadata.fields.page_num):void 0}get publicdate(){return this.fields.publicdate}get result_in_subfile(){return this.fields.result_in_subfile}get reviewdate(){return this.fields.reviewdate}get source(){return this.fields.source}get subject(){return this.fields.subject}get title(){return this.fields.title}get updated_on(){return this.fields.updated_on}get year(){return this.fields.year}get __href__(){return this.fields.__href__}}l([u()],Pe.prototype,"highlight",null);l([u()],Pe.prototype,"page_num",null);class kt{constructor(e){var t;this.rawMetadata=e,this.fields=new $((t=e.fields)!==null&&t!==void 0?t:{})}get identifier(){var e;return(e=this.fields.query)===null||e===void 0?void 0:e.value}get title(){return this.fields.title}get query(){return this.fields.query}get date_favorited(){return this.fields.date_favorited}get __href__(){return this.fields.__href__}}class Te{constructor(e){var t;this.rawMetadata=e,this.fields=new $((t=e.fields)!==null&&t!==void 0?t:{})}get identifier(){var e;return(e=this.rawMetadata.fields)===null||e===void 0?void 0:e.url}get mediatype(){return new st("web")}get title(){var e,t;return!((e=this.rawMetadata.fields)===null||e===void 0)&&e.url?new g((t=this.rawMetadata.fields)===null||t===void 0?void 0:t.url):void 0}get capture_dates(){var e,t;return!((e=this.rawMetadata.fields)===null||e===void 0)&&e.capture_dates?new E((t=this.rawMetadata.fields)===null||t===void 0?void 0:t.capture_dates):void 0}get __href__(){return this.fields.__href__}}l([u()],Te.prototype,"title",null);l([u()],Te.prototype,"capture_dates",null);class Ue{constructor(e){var t;this.rawMetadata=e,this.fields=new $((t=e.fields)!==null&&t!==void 0?t:{})}get identifier(){return this.fields.identifier}get highlight(){var e;return!((e=this.rawMetadata.highlight)===null||e===void 0)&&e.text?new g(this.rawMetadata.highlight.text):void 0}get addeddate(){return this.fields.addeddate}get ad_id(){return this.fields.ad_id}get avg_rating(){return this.fields.avg_rating}get collection(){return this.fields.collection}get created_on(){return this.fields.created_on}get creator(){return this.fields.creator}get date(){return this.fields.date}get description(){return this.fields.description}get downloads(){return this.fields.downloads}get factcheck(){return this.fields.factcheck}get filename(){return this.fields.filename}get file_basename(){return this.fields.file_basename}get file_creation_mtime(){return this.fields.file_creation_mtime}get files_count(){return this.fields.files_count}get is_clip(){return this.fields.is_clip}get issue(){return this.fields.issue}get item_count(){return this.fields.item_count}get item_size(){return this.fields.item_size}get language(){return this.fields.language}get mediatype(){return this.fields.mediatype}get num_clips(){return this.fields.num_clips}get num_favorites(){return this.fields.num_favorites}get publicdate(){return this.fields.publicdate}get result_in_subfile(){return this.fields.result_in_subfile}get reviewdate(){return this.fields.reviewdate}get source(){return this.fields.source}get subject(){return this.fields.subject}get title(){return this.fields.title}get updated_on(){return this.fields.updated_on}get week(){return this.fields.week}get year(){return this.fields.year}get start(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.start)!=null?new g(this.rawMetadata.fields.start):void 0}get __href__(){return this.fields.__href__}get __img__(){return this.fields.__img__}}l([u()],Ue.prototype,"highlight",null);l([u()],Ue.prototype,"start",null);const xt=["loans","waitlist","loan_history"];function Rt(s){const e=s.slice(0,4),t=s.slice(4,6),i=s.slice(6,8),r=s.slice(8,10),n=s.slice(10,12),a=s.slice(12,14);return`${e}-${t}-${i}T${r}:${n}:${a}Z`}function Ct(s){var e;const t=[];for(const i of s){if(!(!((e=i.captures)===null||e===void 0)&&e.length))continue;const r=encodeURIComponent(i.url),n=`https://web.archive.org/web/${i.captures[0]}/${r}`;t.push({hit_type:"web_archive",fields:{url:i.url,capture_dates:i.captures.map(a=>Rt(a)),__href__:n}})}return t}class de{constructor(e){this.rawResponse=e}get item_size(){return this.rawResponse.item_size}get files_count(){return this.rawResponse.files_count}get month(){return this.rawResponse.month}get week(){return this.rawResponse.week}get downloads(){return this.rawResponse.downloads}get num_favorites(){return this.rawResponse.num_favorites}get title_message(){return this.rawResponse.title_message}get primary_collection(){return this.rawResponse.primary_collection}get reviews_data(){var e;return((e=this.rawResponse.reviews_data)!==null&&e!==void 0?e:[]).map(ke)}get thumbnail_url(){return this.rawResponse.thumbnail_url}get review_count(){return this.rawResponse.review_count}get uploader_details(){return this.rawResponse.uploader_details}get public_metadata(){if(!!this.rawResponse.public_metadata)return new c(this.rawResponse.public_metadata)}get part_of(){return this.rawResponse.part_of}get reviews_metadata(){var e;return((e=this.rawResponse.reviews_metadata)!==null&&e!==void 0?e:[]).map(ke)}}l([u()],de.prototype,"reviews_data",null);l([u()],de.prototype,"public_metadata",null);l([u()],de.prototype,"reviews_metadata",null);class Ne{constructor(e,t){var i,r,n,a,o,d,h,_,p,v,f,m,A,O,ue;this.itemExtraInfo=null,this.schema=t,this.schemaHitType=t==null?void 0:t.hit_type;let k;e!=null&&e.page_elements&&(this.pageElements=e.page_elements,k=Object.values(this.pageElements)[0]);let P=(i=e==null?void 0:e.hits)===null||i===void 0?void 0:i.hits;this.totalResults=(n=(r=e==null?void 0:e.hits)===null||r===void 0?void 0:r.total)!==null&&n!==void 0?n:0,this.returnedCount=(o=(a=e==null?void 0:e.hits)===null||a===void 0?void 0:a.returned)!==null&&o!==void 0?o:0,!(P!=null&&P.length)&&((d=this.pageElements)===null||d===void 0?void 0:d.service___fts)?(this.totalResults=0,this.returnedCount=0,this.handleFederatedPageElements()):!(P!=null&&P.length)&&((h=k==null?void 0:k.hits)===null||h===void 0?void 0:h.hits)?(P=k.hits.hits,this.totalResults=(_=k.hits.total)!==null&&_!==void 0?_:0,this.returnedCount=(p=k.hits.returned)!==null&&p!==void 0?p:0):!((v=this.pageElements)===null||v===void 0)&&v.lending?P=this.handleLendingPageElement():!((f=this.pageElements)===null||f===void 0)&&f.web_archives&&(P=this.handleWebArchivesPageElement()),this.results=this.formatHits(P);let ce=e==null?void 0:e.aggregations;!(this.aggregations&&Object.keys(this.aggregations).length>0)&&(k==null?void 0:k.aggregations)&&(ce=k.aggregations),ce&&this.buildAggregations(ce),e!=null&&e.collection_titles&&(this.collectionTitles=(m=e.collection_titles)!==null&&m!==void 0?m:{}),e!=null&&e.tv_channel_aliases&&(this.tvChannelAliases=(A=e.tv_channel_aliases)!==null&&A!==void 0?A:{}),e!=null&&e.collection_extra_info&&(this.collectionExtraInfo=(O=e.collection_extra_info)!==null&&O!==void 0?O:null),e!=null&&e.account_extra_info&&(this.accountExtraInfo=(ue=e.account_extra_info)!==null&&ue!==void 0?ue:null),e!=null&&e.extra_info&&(this.itemExtraInfo=new de(e.extra_info))}formatHits(e){var t;return(t=e==null?void 0:e.map(i=>{var r;return Ne.createResult((r=i.hit_type)!==null&&r!==void 0?r:this.schemaHitType,i)}))!==null&&t!==void 0?t:[]}buildAggregations(e){this.aggregations=Object.entries(e).reduce((t,[i,r])=>(t[i]=new rt(r),t),{})}handleLendingPageElement(){var e,t;const i=(e=this.pageElements)===null||e===void 0?void 0:e.lending,r=(t=i.loans)!==null&&t!==void 0?t:[];this.totalResults=r.length,this.returnedCount=this.totalResults;for(const n of xt)i[n]=this.formatHits(i[n]);return r}handleWebArchivesPageElement(){var e;const t=Ct((e=this.pageElements)===null||e===void 0?void 0:e.web_archives);return this.totalResults=t.length,this.returnedCount=this.totalResults,t}handleFederatedPageElements(){var e,t,i,r;const n=["service___fts","service___tvs","service___rcs","service___whisper","metadata___mediatype___texts","metadata___mediatype___movies","metadata___mediatype___audio","metadata___mediatype___software","metadata___mediatype___image","metadata___mediatype___etree"];for(const a of n){const o=this.removePageElementPrefix(a);this.federatedResults?this.federatedResults[a]=[]:this.federatedResults={[o]:[]};const d=(t=(e=this.pageElements)===null||e===void 0?void 0:e[a])===null||t===void 0?void 0:t.hits;d!=null&&d.hits&&(this.federatedResults[o]=this.formatHits(d==null?void 0:d.hits)),this.totalResults+=(i=d==null?void 0:d.total)!==null&&i!==void 0?i:0,this.returnedCount+=(r=d==null?void 0:d.returned)!==null&&r!==void 0?r:0}}removePageElementPrefix(e){return e.split("___").pop()}static createResult(e,t){switch(e){case"item":return new R(t);case"text":case"asr_text":return new Pe(t);case"favorited_search":return new kt(t);case"web_archive":return new Te(t);case"tv_clip":return new Ue(t);default:return new R(t)}}}class Pt{constructor(e){this.clientParameters=e.client_parameters,this.backendRequests=e.backend_requests,this.kind=e.kind}}class Tt{constructor(e){var t,i,r;this.rawResponse=e,this.request=new Pt(e.request),this.responseHeader=(t=e.response)===null||t===void 0?void 0:t.header,this.sessionContext=e.session_context,this.response=new Ne((i=e.response)===null||i===void 0?void 0:i.body,(r=e.response)===null||r===void 0?void 0:r.hit_schema)}}var x;(function(s){s[s.DEFAULT=0]="DEFAULT",s[s.METADATA=1]="METADATA",s[s.FULLTEXT=2]="FULLTEXT",s[s.TV=3]="TV",s[s.RADIO=4]="RADIO",s[s.FEDERATED=5]="FEDERATED"})(x||(x={}));class N{static aggregateSearchParamsAsString(e){if(e.omit)return"false";if(e.advancedParams){const t=e.advancedParams.map(r=>({terms:r}));return JSON.stringify(t)}if(e.simpleParams)return e.simpleParams.join(",")}static sortParamsAsString(e){return`${e.field}:${e.direction}`}static filterParamsAsString(e){return JSON.stringify(e)}static generateURLSearchParams(e){const t=new URLSearchParams;if(t.append("user_query",e.query),e.pageType&&t.append("page_type",String(e.pageType)),e.pageTarget&&t.append("page_target",String(e.pageTarget)),e.pageElements&&e.pageElements.length>0){const n=`[${e.pageElements.map(a=>`"${a}"`).join(",")}]`;t.append("page_elements",n)}if(e.rows!=null&&t.append("hits_per_page",String(e.rows)),e.page!=null&&t.append("page",String(e.page)),e.fields&&e.fields.length>0&&t.append("fields",e.fields.join(",")),e.filters&&Object.keys(e.filters).length>0){const r=this.filterParamsAsString(e.filters);r&&r!=="{}"&&t.append("filter_map",r)}if(e.sort&&e.sort.length>0){const r=e.sort.map(n=>this.sortParamsAsString(n));t.append("sort",r.join(","))}const i=e.aggregations;if(i){const r=this.aggregateSearchParamsAsString(i);r&&t.append("aggregations",r)}if(e.aggregationsSize!=null&&t.append("aggregations_size",String(e.aggregationsSize)),e.debugging&&t.append("debugging","true"),e.uid&&t.append("uid",e.uid),e.includeClientUrl!==!1){const r=window.location.href.slice(0,400);e.query.length<=1e3&&t.append("client_url",r)}return t}}var K;(function(s){s.networkError="SearchService.NetworkError",s.itemNotFound="SearchService.ItemNotFound",s.decodingError="SearchService.DecodingError",s.searchEngineError="SearchService.SearchEngineError"})(K||(K={}));class Ut extends Error{constructor(e,t,i){super(t),this.name=e,this.type=e,this.details=i}}const Qe={reCache:JSON.stringify({recompute:!0}),noCache:JSON.stringify({bypass:!0}),dontCache:JSON.stringify({no_compute:!0})};class G{constructor(e){var t,i;this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null;const r=new URL(window.location.href).searchParams,n=r.get("scope"),a=r.get("verbose"),o=r.get("debugging"),d=r.get("cacheDebug");let h="";for(const _ of Object.keys(Qe))if(r.get(_)){h=Qe[_];break}h=(i=r.get("caching"))!==null&&i!==void 0?i:h,(e==null?void 0:e.caching)!==void 0?this.cachingFlags=e.caching:h&&(this.cachingFlags=h),(e==null?void 0:e.debuggingEnabled)!==void 0?this.debuggingEnabled=e.debuggingEnabled:(o||d)&&(this.debuggingEnabled=!0),(e==null?void 0:e.scope)!==void 0?this.requestScope=e.scope:n&&(this.requestScope=n),(e==null?void 0:e.verbose)!==void 0?this.verbose=e.verbose:a&&(this.verbose=!!a)}async fetchUrl(e,t){var i,r;const n=new URL(e);this.requestScope&&n.searchParams.set("scope",this.requestScope),this.cachingFlags&&n.searchParams.set("caching",this.cachingFlags);let a;try{const o=(i=t==null?void 0:t.requestOptions)!==null&&i!==void 0?i:{credentials:this.includeCredentials?"include":"same-origin"};a=await fetch(n.href,o)}catch(o){const d=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(K.networkError,d)}try{const o=await a.json();this.verbose&&this.printResponse(o),o.debugging&&this.printDebuggingInfo(o);const d=(r=o.response)===null||r===void 0?void 0:r.error;return d?this.getErrorResult(K.searchEngineError,d.message,d.forensics):{success:o}}catch(o){const d=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(K.decodingError,d)}}getErrorResult(e,t,i){return{error:new Ut(e,t,i)}}printResponse(e){var t,i,r,n,a;try{const o=JSON.parse(JSON.stringify(e)),d=(r=(i=(t=o==null?void 0:o.response)===null||t===void 0?void 0:t.body)===null||i===void 0?void 0:i.hits)===null||r===void 0?void 0:r.hits;if(Array.isArray(d)&&d.length>1){const _=[];_.push(d[0]),_.push(`*** ${d.length-1} hits omitted ***`),o.response.body.hits.hits=_}const h=(a=(n=o==null?void 0:o.response)===null||n===void 0?void 0:n.body)===null||a===void 0?void 0:a.aggregations;h&&Object.entries(h).forEach(([_,p])=>{var v,f,m,A;if(((f=(v=p)===null||v===void 0?void 0:v.buckets)===null||f===void 0?void 0:f.length)>0){const O=JSON.parse(JSON.stringify(p));O.buckets=`*** ${(A=(m=O.buckets)===null||m===void 0?void 0:m.length)!==null&&A!==void 0?A:0} buckets omitted ***`,o.response.body.aggregations[_]=O}}),console.log("***** RESPONSE RECEIVED *****"),console.groupCollapsed("Response"),console.log(JSON.stringify(o,null,2)),console.groupEnd()}catch(o){console.error("Error printing search response:",o)}}printDebuggingInfo(e){var t,i;const r=e.debugging,n=(t=r.messages)!==null&&t!==void 0?t:[],a=(i=r.data)!==null&&i!==void 0?i:{};console.log("***** BEGIN DEBUGGING *****"),console.log("Full response:"),console.log(JSON.stringify(e,null,2)),console.group("Debug messages");for(const o of n)console.log(o);console.groupEnd(),console.group("Debug data");for(const[o,d]of Object.entries(a))console.log(o,d);console.groupEnd(),console.log("***** END DEBUGGING *****")}}class Nt extends G{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=N.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?service_backend=fts&${i}`;return this.fetchUrl(r)}}class Ot extends G{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=N.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?service_backend=metadata&${i}`;return this.fetchUrl(r)}}class It extends G{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=N.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?service_backend=tvs&${i}`;return this.fetchUrl(r)}}class Dt extends G{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=N.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?service_backend=rcs&${i}`;return this.fetchUrl(r)}}class Ft extends G{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=N.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?page_type=simple_federation&${i}`;return this.fetchUrl(r)}}class Lt extends G{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=N.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?${i}`;return this.fetchUrl(r)}}class V{constructor(e={}){this.backendOptions=e}async search(e,t=x.METADATA){const r=await V.getBackendForSearchType(t,this.backendOptions).performSearch(e);return r.error?r:{success:new Tt(r.success)}}static getBackendForSearchType(e,t={}){switch(e){case x.METADATA:return new Ot(t);case x.FULLTEXT:return new Nt(t);case x.RADIO:return new Dt(t);case x.TV:return new It(t);case x.FEDERATED:return new Ft(t);default:return new Lt(t)}}}V.default=new V;l([u((s,e={})=>{const{includeCredentials:t=!1,verbose:i=!1,scope:r="",baseUrl:n=""}=e;return`${s};${t};${i};${r};${n}`})],V,"getBackendForSearchType",null);let J=class extends D{constructor(){super(...arguments),this.isSearching=!1}get itemResults(){var e;return(e=this.response)===null||e===void 0?void 0:e.response.itemExtraInfo}render(){return y`
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
      ${this.error?y`
            <h3>Error:</h3>
            <pre>${this.error}</pre>
          `:w}
    `}async search(e){var t,i,r;e.preventDefault();const n=(i=(t=this.shadowRoot)===null||t===void 0?void 0:t.getElementById("item-input"))===null||i===void 0?void 0:i.value,a={query:"",pageType:"item_details",pageTarget:n,uid:"demo"};this.error=void 0,this.response=void 0,this.isSearching=!0;const o=await((r=this.searchService)===null||r===void 0?void 0:r.search(a,x.DEFAULT));this.response=o==null?void 0:o.success,this.error=o==null?void 0:o.error,this.isSearching=!1}};l([oe({type:Object})],J.prototype,"searchService",void 0);l([M()],J.prototype,"isSearching",void 0);l([M()],J.prototype,"response",void 0);l([M()],J.prototype,"error",void 0);J=l([Ce("item-detail-query")],J);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Ht(s,e){if(s!==void 0){let t=0;for(const i of s)yield e(i,t++)}}class Ke{constructor(){this.filterMap={}}addFilter(e,t,i){if(this.filterMap[e]||(this.filterMap[e]={}),this.filterMap[e][t]){const r=[].concat(this.filterMap[e][t],i);this.filterMap[e][t]=Array.from(new Set(r))}else this.filterMap[e][t]=i;return this}removeSingleFilter(e,t,i){var r;if(!(!((r=this.filterMap[e])===null||r===void 0)&&r[t]))return this;const n=[].concat(this.filterMap[e][t]),a=n.indexOf(i);return a>=0&&n.splice(a,1),this.filterMap[e][t]=n.length===1?n[0]:n,n.length===0&&delete this.filterMap[e][t],this.deleteFieldIfEmpty(e),this}removeFilters(e,t){return this.filterMap[e]?(delete this.filterMap[e][t],this.deleteFieldIfEmpty(e),this):this}deleteFieldIfEmpty(e){const t=this.filterMap[e];t&&Object.keys(t).length===0&&delete this.filterMap[e]}setFilterMap(e){return this.filterMap={...e},this}mergeFilterMap(e){for(const[t,i]of Object.entries(e))for(const[r,n]of Object.entries(i))if(Array.isArray(n))for(const a of n)this.addFilter(t,r,a);else this.addFilter(t,r,n);return this}build(){return this.filterMap}}let b=class extends D{constructor(){super(...arguments),this.debuggingEnabled=!1,this.filterMap={},this.loadingSearchResults=!1,this.loadingAggregations=!1,this.defaultAggregationsChecked=!0,this.fullSearchResultsShown=!1}get searchResults(){var e;return(e=this.searchResponse)===null||e===void 0?void 0:e.response.results}get searchAggregations(){var e;return(e=this.aggregationsResponse)===null||e===void 0?void 0:e.response.aggregations}render(){return y`
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
    `}filterFieldChanged(e){var t,i;const n=!!e.target.selectedOptions[0].dataset.numeric,a=(i=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelectorAll("#filter-constraint option"))!==null&&i!==void 0?i:[];for(const o of a)o.toggleAttribute("hidden",!n&&!!o.dataset.numeric)}addFilterClicked(){const e=this.filterFieldInput.selectedOptions[0].value,t=this.filterValueInput.value,i=this.filterConstraintInput.selectedOptions[0].value;!e||!i||!t||(this.filterMap=new Ke().setFilterMap(this.filterMap).addFilter(e,t,i).build(),this.filterValueInput.value="")}removeFilterClicked(e){const t=e.target,{field:i,value:r,constraint:n}=t.dataset;i&&r&&n&&(this.filterMap=new Ke().setFilterMap(this.filterMap).removeSingleFilter(i,r,n).build())}get appliedFiltersTemplate(){const e=[];for(const[i,r]of Object.entries(this.filterMap))for(const[n,a]of Object.entries(r))if(Array.isArray(a))for(const o of a)e.push({field:i,value:n,constraint:o});else e.push({field:i,value:n,constraint:a});if(e.length===0)return y`<span>(no filters applied)</span>`;const t={inc:"includes",exc:"excludes",gt:">",gte:">=",lt:"<",lte:"<="};return Ht(e,({field:i,value:r,constraint:n})=>y`
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
    `}get snippetsHeaderTemplate(){var e;return!((e=this.searchResults)===null||e===void 0)&&e.some(t=>t.highlight)?y`<th>Snippets</th>`:y`${w}`}snippetTemplate(e){return e.highlight?y`<td>${e.highlight.value}</td>`:y`${w}`}toggleDefaultAggregations(){var e;this.defaultAggregationsChecked=(e=this.defaultAggregationsCheckbox)===null||e===void 0?void 0:e.checked}toggleFullSearchResults(){this.fullSearchResultsShown=!this.fullSearchResultsShown}async search(e){var t;e.preventDefault();const i=this.searchInput.value,r=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector("input[name='search-type']:checked"),n=(r==null?void 0:r.value)==="fts"?x.FULLTEXT:x.METADATA;this.fetchSearchResults(i,n),this.fetchAggregations(i,n)}async fetchSearchResults(e,t){var i,r,n,a,o,d,h;const _=((i=this.checkedSort)===null||i===void 0?void 0:i.value)==="none"?void 0:[{field:"title",direction:(r=this.checkedSort)===null||r===void 0?void 0:r.value}],p=Number((n=this.rowsInput)===null||n===void 0?void 0:n.value),v=(a=this.debugCheck)===null||a===void 0?void 0:a.checked,f={query:e,rows:p,sort:_,filters:this.filterMap,aggregations:{omit:!0},debugging:v,uid:"demo"};!((o=this.searchWithinCheck)===null||o===void 0)&&o.checked&&(f.pageTarget=e,f.pageType="collection_details"),this.lastSearchParams=decodeURIComponent(N.generateURLSearchParams(f).toString()),this.loadingSearchResults=!0;const m=await((d=this.searchService)===null||d===void 0?void 0:d.search(f,t));this.loadingSearchResults=!1,m!=null&&m.success?this.searchResponse=m==null?void 0:m.success:(alert(`Oh noes: ${(h=m==null?void 0:m.error)===null||h===void 0?void 0:h.message}`),console.error("Error searching",m==null?void 0:m.error))}async fetchAggregations(e,t){var i,r,n,a,o;const d=(i=this.shadowRoot)===null||i===void 0?void 0:i.querySelectorAll("input[name='aggs']:checked"),h={simpleParams:d?[...d].map(m=>m.value):void 0},_=Number((r=this.numAggsInput)===null||r===void 0?void 0:r.value),p=(n=this.debugCheck)===null||n===void 0?void 0:n.checked,v={query:e,rows:0,filters:this.filterMap,aggregationsSize:_,debugging:p,uid:"demo"};this.defaultAggregationsChecked||(v.aggregations=h),this.lastAggregationParams=decodeURIComponent(N.generateURLSearchParams(v).toString()),this.loadingAggregations=!0;const f=await((a=this.searchService)===null||a===void 0?void 0:a.search(v,t));this.loadingAggregations=!1,f!=null&&f.success?this.aggregationsResponse=f==null?void 0:f.success:(alert(`Oh noes: ${(o=f==null?void 0:f.error)===null||o===void 0?void 0:o.message}`),console.error("Error searching",f==null?void 0:f.error))}static get styles(){return Xe`
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
    `}};l([oe({type:Object})],b.prototype,"searchService",void 0);l([oe({type:Boolean})],b.prototype,"debuggingEnabled",void 0);l([T("#search-input")],b.prototype,"searchInput",void 0);l([T("#search-within-check")],b.prototype,"searchWithinCheck",void 0);l([T("#debug-info-check")],b.prototype,"debugCheck",void 0);l([T("#num-rows")],b.prototype,"rowsInput",void 0);l([T("#num-aggs")],b.prototype,"numAggsInput",void 0);l([T("input[name='sort']:checked")],b.prototype,"checkedSort",void 0);l([T("#filter-field")],b.prototype,"filterFieldInput",void 0);l([T("#filter-constraint")],b.prototype,"filterConstraintInput",void 0);l([T("#filter-value")],b.prototype,"filterValueInput",void 0);l([T("#aggs-default")],b.prototype,"defaultAggregationsCheckbox",void 0);l([M()],b.prototype,"filterMap",void 0);l([M()],b.prototype,"loadingSearchResults",void 0);l([M()],b.prototype,"loadingAggregations",void 0);l([M()],b.prototype,"lastSearchParams",void 0);l([M()],b.prototype,"lastAggregationParams",void 0);l([M()],b.prototype,"defaultAggregationsChecked",void 0);l([M()],b.prototype,"fullSearchResultsShown",void 0);l([M()],b.prototype,"searchResponse",void 0);l([M()],b.prototype,"aggregationsResponse",void 0);b=l([Ce("search-query")],b);let ee=class extends D{constructor(){super(...arguments),this.searchServiceUrlOptions=this.initSearchServiceUrlOptions(),this.queryType="search",this.searchService=new V(this.searchServiceUrlOptions)}initSearchServiceUrlOptions(){var e,t;const i=new URL(window.location.href).searchParams;return{baseUrl:(e=i.get("search_base_url"))!==null&&e!==void 0?e:"archive.org",servicePath:(t=i.get("search_service_path"))!==null&&t!==void 0?t:void 0,debuggingEnabled:!!i.get("debugging")}}render(){return y`
      <fieldset>
        <legend>Query Type</legend>
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
      ${$t(this.queryType,[["search",()=>this.searchTemplate],["item",()=>this.itemTemplate]])}
    `}onQueryTypeChange(e){const t=e.target;this.queryType=t.value}get itemTemplate(){return y`
      <item-detail-query
        .searchService=${this.searchService}
      ></item-detail-query>
    `}get searchTemplate(){var e;return y` <search-query
      .searchService=${this.searchService}
      ?debuggingEnabled=${(e=this.searchServiceUrlOptions)===null||e===void 0?void 0:e.debuggingEnabled}
    ></search-query>`}static get styles(){return Xe`
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
    `}};l([M()],ee.prototype,"searchServiceUrlOptions",void 0);l([M()],ee.prototype,"queryType",void 0);l([M()],ee.prototype,"searchService",void 0);ee=l([Ce("app-root")],ee);
