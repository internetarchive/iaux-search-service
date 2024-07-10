const Xt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}};Xt();/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Yt=new WeakMap,ae=s=>typeof s=="function"&&Yt.has(s);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const nt=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,Ot=(s,e,t=null)=>{for(;e!==t;){const i=e.nextSibling;s.removeChild(e),e=i}};/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const N={},st={};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const L=`{{lit-${String(Math.random()).slice(2)}}}`,Ut=`<!--${L}-->`,rt=new RegExp(`${L}|${Ut}`),te="$lit$";class Qt{constructor(e,t){this.parts=[],this.element=t;const i=[],n=[],r=document.createTreeWalker(t.content,133,null,!1);let a=0,o=-1,l=0;const{strings:u,values:{length:v}}=e;for(;l<v;){const c=r.nextNode();if(c===null){r.currentNode=n.pop();continue}if(o++,c.nodeType===1){if(c.hasAttributes()){const p=c.attributes,{length:f}=p;let y=0;for(let m=0;m<f;m++)at(p[m].name,te)&&y++;for(;y-- >0;){const m=u[l],C=De.exec(m)[2],P=C.toLowerCase()+te,A=c.getAttribute(P);c.removeAttribute(P);const S=A.split(rt);this.parts.push({type:"attribute",index:o,name:C,strings:S}),l+=S.length-1}}c.tagName==="TEMPLATE"&&(n.push(c),r.currentNode=c.content)}else if(c.nodeType===3){const p=c.data;if(p.indexOf(L)>=0){const f=c.parentNode,y=p.split(rt),m=y.length-1;for(let C=0;C<m;C++){let P,A=y[C];if(A==="")P=O();else{const S=De.exec(A);S!==null&&at(S[2],te)&&(A=A.slice(0,S.index)+S[1]+S[2].slice(0,-te.length)+S[3]),P=document.createTextNode(A)}f.insertBefore(P,c),this.parts.push({type:"node",index:++o})}y[m]===""?(f.insertBefore(O(),c),i.push(c)):c.data=y[m],l+=m}}else if(c.nodeType===8)if(c.data===L){const p=c.parentNode;(c.previousSibling===null||o===a)&&(o++,p.insertBefore(O(),c)),a=o,this.parts.push({type:"node",index:o}),c.nextSibling===null?c.data="":(i.push(c),o--),l++}else{let p=-1;for(;(p=c.data.indexOf(L,p+1))!==-1;)this.parts.push({type:"node",index:-1}),l++}}for(const c of i)c.parentNode.removeChild(c)}}const at=(s,e)=>{const t=s.length-e.length;return t>=0&&s.slice(t)===e},ei=s=>s.index!==-1,O=()=>document.createComment(""),De=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class ot{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)i!==void 0&&i.setValue(e[t]),t++;for(const i of this.__parts)i!==void 0&&i.commit()}_clone(){const e=nt?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let r=0,a=0,o,l=n.nextNode();for(;r<i.length;){if(o=i[r],!ei(o)){this.__parts.push(void 0),r++;continue}for(;a<o.index;)a++,l.nodeName==="TEMPLATE"&&(t.push(l),n.currentNode=l.content),(l=n.nextNode())===null&&(n.currentNode=t.pop(),l=n.nextNode());if(o.type==="node"){const u=this.processor.handleTextExpression(this.options);u.insertAfterNode(l.previousSibling),this.__parts.push(u)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));r++}return nt&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const lt=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:s=>s}),ti=` ${L} `;class Ht{constructor(e,t,i,n){this.strings=e,this.values=t,this.type=i,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let n=0;n<e;n++){const r=this.strings[n],a=r.lastIndexOf("<!--");i=(a>-1||i)&&r.indexOf("-->",a+1)===-1;const o=De.exec(r);o===null?t+=r+(i?ti:Ut):t+=r.substr(0,o.index)+o[1]+o[2]+te+o[3]+L}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return lt!==void 0&&(t=lt.createHTML(t)),e.innerHTML=t,e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Xe=s=>s===null||!(typeof s=="object"||typeof s=="function"),Fe=s=>Array.isArray(s)||!!(s&&s[Symbol.iterator]);class It{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let n=0;n<i.length-1;n++)this.parts[n]=this._createPart()}_createPart(){return new Lt(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(t===1&&e[0]===""&&e[1]===""){const r=i[0].value;if(typeof r=="symbol")return String(r);if(typeof r=="string"||!Fe(r))return r}let n="";for(let r=0;r<t;r++){n+=e[r];const a=i[r];if(a!==void 0){const o=a.value;if(Xe(o)||!Fe(o))n+=typeof o=="string"?o:String(o);else for(const l of o)n+=typeof l=="string"?l:String(l)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Lt{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==N&&(!Xe(e)||e!==this.value)&&(this.value=e,ae(e)||(this.committer.dirty=!0))}commit(){for(;ae(this.value);){const e=this.value;this.value=N,e(this)}this.value!==N&&this.committer.commit()}}class Ae{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(O()),this.endNode=e.appendChild(O())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=O()),e.__insert(this.endNode=O())}insertAfterPart(e){e.__insert(this.startNode=O()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;ae(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=N,t(this)}const e=this.__pendingValue;e!==N&&(Xe(e)?e!==this.value&&this.__commitText(e):e instanceof Ht?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Fe(e)?this.__commitIterable(e):e===st?(this.value=st,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=e==null?"":e;const i=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof ot&&this.value.template===t)this.value.update(e.values);else{const i=new ot(t,e.processor,this.options),n=i._clone();i.update(e.values),this.__commitNode(n),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i=0,n;for(const r of e)n=t[i],n===void 0&&(n=new Ae(this.options),t.push(n),i===0?n.appendIntoPart(this):n.insertAfterPart(t[i-1])),n.setValue(r),n.commit(),i++;i<t.length&&(t.length=i,this.clear(n&&n.endNode))}clear(e=this.startNode){Ot(this.startNode.parentNode,e.nextSibling,this.endNode)}}class ii{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,i.length!==2||i[0]!==""||i[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;ae(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=N,t(this)}if(this.__pendingValue===N)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=N}}class ni extends It{constructor(e,t,i){super(e,t,i),this.single=i.length===2&&i[0]===""&&i[1]===""}_createPart(){return new si(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class si extends Lt{}let Vt=!1;(()=>{try{const s={get capture(){return Vt=!0,!1}};window.addEventListener("test",s,s),window.removeEventListener("test",s,s)}catch{}})();class ri{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=n=>this.handleEvent(n)}setValue(e){this.__pendingValue=e}commit(){for(;ae(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=N,r(this)}if(this.__pendingValue===N)return;const e=this.__pendingValue,t=this.value,i=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=e!=null&&(t==null||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=ai(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=N}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const ai=s=>s&&(Vt?{capture:s.capture,passive:s.passive,once:s.once}:s.capture);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class oi{handleAttributeExpressions(e,t,i,n){const r=t[0];return r==="."?new ni(e,t.slice(1),i).parts:r==="@"?[new ri(e,t.slice(1),n.eventContext)]:r==="?"?[new ii(e,t.slice(1),i)]:new It(e,t,i).parts}handleTextExpression(e){return new Ae(e)}}const li=new oi;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function di(s){let e=dt.get(s.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},dt.set(s.type,e));let t=e.stringsArray.get(s.strings);if(t!==void 0)return t;const i=s.strings.join(L);return t=e.keyString.get(i),t===void 0&&(t=new Qt(s,s.getTemplateElement()),e.keyString.set(i,t)),e.stringsArray.set(s.strings,t),t}const dt=new Map;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ut=new WeakMap,ui=(s,e,t)=>{let i=ut.get(e);i===void 0&&(Ot(e,e.firstChild),ut.set(e,i=new Ae(Object.assign({templateFactory:di},t))),i.appendInto(e)),i.setValue(s),i.commit()};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const ci=(s,...e)=>new Ht(s,e,"html",li);/*! *****************************************************************************
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
***************************************************************************** */function d(s,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var o=s.length-1;o>=0;o--)(a=s[o])&&(r=(n<3?a(r):n>3?a(e,t,r):a(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=window,Ye=ge.ShadowRoot&&(ge.ShadyCSS===void 0||ge.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qe=Symbol(),ct=new WeakMap;class Dt{constructor(e,t,i){if(this._$cssResult$=!0,i!==Qe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ye&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ct.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ct.set(t,e))}return e}toString(){return this.cssText}}const hi=s=>new Dt(typeof s=="string"?s:s+"",void 0,Qe),pi=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,n,r)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[r+1],s[0]);return new Dt(t,s,Qe)},vi=(s,e)=>{Ye?s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),n=ge.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,s.appendChild(i)})},ht=Ye?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return hi(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ce;const _e=window,pt=_e.trustedTypes,fi=pt?pt.emptyScript:"",vt=_e.reactiveElementPolyfillSupport,Be={toAttribute(s,e){switch(e){case Boolean:s=s?fi:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Ft=(s,e)=>e!==s&&(e==e||s==s),Te={attribute:!0,type:String,converter:Be,reflect:!1,hasChanged:Ft},je="finalized";class W extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const n=this._$Ep(i,t);n!==void 0&&(this._$Ev.set(n,i),e.push(n))}),e}static createProperty(e,t=Te){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const r=this[e];this[t]=n,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Te}static finalize(){if(this.hasOwnProperty(je))return!1;this[je]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of i)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(ht(n))}else e!==void 0&&t.push(ht(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return vi(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Te){var n;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const a=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Be).toAttribute(t,i.type);this._$El=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$El=null}}_$AK(e,t){var i;const n=this.constructor,r=n._$Ev.get(e);if(r!==void 0&&this._$El!==r){const a=n.getPropertyOptions(r),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?a.converter:Be;this._$El=r,this[r]=o.fromAttribute(t,a.type),this._$El=null}}requestUpdate(e,t,i){let n=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Ft)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,r)=>this[r]=n),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(i)):this._$Ek()}catch(n){throw t=!1,this._$Ek(),n}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}W[je]=!0,W.elementProperties=new Map,W.elementStyles=[],W.shadowRootOptions={mode:"open"},vt==null||vt({ReactiveElement:W}),((Ce=_e.reactiveElementVersions)!==null&&Ce!==void 0?Ce:_e.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Re;const me=window,J=me.trustedTypes,ft=J?J.createPolicy("lit-html",{createHTML:s=>s}):void 0,ze="$lit$",U=`lit$${(Math.random()+"").slice(9)}$`,Bt="?"+U,gi=`<${Bt}>`,z=document,we=()=>z.createComment(""),oe=s=>s===null||typeof s!="object"&&typeof s!="function",jt=Array.isArray,_i=s=>jt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Pe=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gt=/-->/g,_t=/>/g,D=RegExp(`>|${Pe}(?:([^\\s"'>=/]+)(${Pe}*=${Pe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mt=/'/g,wt=/"/g,zt=/^(?:script|style|textarea|title)$/i,le=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),bt=new WeakMap,B=z.createTreeWalker(z,129,null,!1);function qt(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ft!==void 0?ft.createHTML(e):e}const mi=(s,e)=>{const t=s.length-1,i=[];let n,r=e===2?"<svg>":"",a=Q;for(let o=0;o<t;o++){const l=s[o];let u,v,c=-1,p=0;for(;p<l.length&&(a.lastIndex=p,v=a.exec(l),v!==null);)p=a.lastIndex,a===Q?v[1]==="!--"?a=gt:v[1]!==void 0?a=_t:v[2]!==void 0?(zt.test(v[2])&&(n=RegExp("</"+v[2],"g")),a=D):v[3]!==void 0&&(a=D):a===D?v[0]===">"?(a=n!=null?n:Q,c=-1):v[1]===void 0?c=-2:(c=a.lastIndex-v[2].length,u=v[1],a=v[3]===void 0?D:v[3]==='"'?wt:mt):a===wt||a===mt?a=D:a===gt||a===_t?a=Q:(a=D,n=void 0);const f=a===D&&s[o+1].startsWith("/>")?" ":"";r+=a===Q?l+gi:c>=0?(i.push(u),l.slice(0,c)+ze+l.slice(c)+U+f):l+U+(c===-2?(i.push(void 0),o):f)}return[qt(s,r+(s[t]||"<?>")+(e===2?"</svg>":"")),i]};class de{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,a=0;const o=e.length-1,l=this.parts,[u,v]=mi(e,t);if(this.el=de.createElement(u,i),B.currentNode=this.el.content,t===2){const c=this.el.content,p=c.firstChild;p.remove(),c.append(...p.childNodes)}for(;(n=B.nextNode())!==null&&l.length<o;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const p of n.getAttributeNames())if(p.endsWith(ze)||p.startsWith(U)){const f=v[a++];if(c.push(p),f!==void 0){const y=n.getAttribute(f.toLowerCase()+ze).split(U),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:m[2],strings:y,ctor:m[1]==="."?bi:m[1]==="?"?yi:m[1]==="@"?Ai:Me})}else l.push({type:6,index:r})}for(const p of c)n.removeAttribute(p)}if(zt.test(n.tagName)){const c=n.textContent.split(U),p=c.length-1;if(p>0){n.textContent=J?J.emptyScript:"";for(let f=0;f<p;f++)n.append(c[f],we()),B.nextNode(),l.push({type:2,index:++r});n.append(c[p],we())}}}else if(n.nodeType===8)if(n.data===Bt)l.push({type:2,index:r});else{let c=-1;for(;(c=n.data.indexOf(U,c+1))!==-1;)l.push({type:7,index:r}),c+=U.length-1}r++}}static createElement(e,t){const i=z.createElement("template");return i.innerHTML=e,i}}function G(s,e,t=s,i){var n,r,a,o;if(e===le)return e;let l=i!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[i]:t._$Cl;const u=oe(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==u&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),u===void 0?l=void 0:(l=new u(s),l._$AT(s,t,i)),i!==void 0?((a=(o=t)._$Co)!==null&&a!==void 0?a:o._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=G(s,l._$AS(s,e.values),l,i)),e}class wi{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:n}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:z).importNode(i,!0);B.currentNode=r;let a=B.nextNode(),o=0,l=0,u=n[0];for(;u!==void 0;){if(o===u.index){let v;u.type===2?v=new Se(a,a.nextSibling,this,e):u.type===1?v=new u.ctor(a,u.name,u.strings,this,e):u.type===6&&(v=new Si(a,this,e)),this._$AV.push(v),u=n[++l]}o!==(u==null?void 0:u.index)&&(a=B.nextNode(),o++)}return B.currentNode=z,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Se{constructor(e,t,i,n){var r;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cp=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),oe(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==le&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):_i(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==x&&oe(this._$AH)?this._$AA.nextSibling.data=e:this.$(z.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=de.createElement(qt(n.h,n.h[0]),this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const a=new wi(r,this),o=a.u(this.options);a.v(i),this.$(o),this._$AH=a}}_$AC(e){let t=bt.get(e.strings);return t===void 0&&bt.set(e.strings,t=new de(e)),t}T(e){jt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new Se(this.k(we()),this.k(we()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Me{constructor(e,t,i,n,r){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const r=this.strings;let a=!1;if(r===void 0)e=G(this,e,t,0),a=!oe(e)||e!==this._$AH&&e!==le,a&&(this._$AH=e);else{const o=e;let l,u;for(e=r[0],l=0;l<r.length-1;l++)u=G(this,o[i+l],t,l),u===le&&(u=this._$AH[l]),a||(a=!oe(u)||u!==this._$AH[l]),u===x?e=x:e!==x&&(e+=(u!=null?u:"")+r[l+1]),this._$AH[l]=u}a&&!n&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class bi extends Me{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}}const $i=J?J.emptyScript:"";class yi extends Me{constructor(){super(...arguments),this.type=4}j(e){e&&e!==x?this.element.setAttribute(this.name,$i):this.element.removeAttribute(this.name)}}class Ai extends Me{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=G(this,e,t,0))!==null&&i!==void 0?i:x)===le)return;const n=this._$AH,r=e===x&&n!==x||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==x&&(n===x||r);r&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Si{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const $t=me.litHtmlPolyfillSupport;$t==null||$t(de,Se),((Re=me.litHtmlVersions)!==null&&Re!==void 0?Re:me.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Oe;const be=window,Z=be.trustedTypes,yt=Z?Z.createPolicy("lit-html",{createHTML:s=>s}):void 0,qe="$lit$",H=`lit$${(Math.random()+"").slice(9)}$`,Wt="?"+H,Mi=`<${Wt}>`,q=document,ue=()=>q.createComment(""),ce=s=>s===null||typeof s!="object"&&typeof s!="function",Jt=Array.isArray,xi=s=>Jt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Ue=`[ 	
\f\r]`,ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,At=/-->/g,St=/>/g,F=RegExp(`>|${Ue}(?:([^\\s"'>=/]+)(${Ue}*=${Ue}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mt=/'/g,xt=/"/g,Gt=/^(?:script|style|textarea|title)$/i,Ei=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),M=Ei(1),K=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Et=new WeakMap,j=q.createTreeWalker(q,129,null,!1);function Zt(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return yt!==void 0?yt.createHTML(e):e}const ki=(s,e)=>{const t=s.length-1,i=[];let n,r=e===2?"<svg>":"",a=ee;for(let o=0;o<t;o++){const l=s[o];let u,v,c=-1,p=0;for(;p<l.length&&(a.lastIndex=p,v=a.exec(l),v!==null);)p=a.lastIndex,a===ee?v[1]==="!--"?a=At:v[1]!==void 0?a=St:v[2]!==void 0?(Gt.test(v[2])&&(n=RegExp("</"+v[2],"g")),a=F):v[3]!==void 0&&(a=F):a===F?v[0]===">"?(a=n!=null?n:ee,c=-1):v[1]===void 0?c=-2:(c=a.lastIndex-v[2].length,u=v[1],a=v[3]===void 0?F:v[3]==='"'?xt:Mt):a===xt||a===Mt?a=F:a===At||a===St?a=ee:(a=F,n=void 0);const f=a===F&&s[o+1].startsWith("/>")?" ":"";r+=a===ee?l+Mi:c>=0?(i.push(u),l.slice(0,c)+qe+l.slice(c)+H+f):l+H+(c===-2?(i.push(void 0),o):f)}return[Zt(s,r+(s[t]||"<?>")+(e===2?"</svg>":"")),i]};class he{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,a=0;const o=e.length-1,l=this.parts,[u,v]=ki(e,t);if(this.el=he.createElement(u,i),j.currentNode=this.el.content,t===2){const c=this.el.content,p=c.firstChild;p.remove(),c.append(...p.childNodes)}for(;(n=j.nextNode())!==null&&l.length<o;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const p of n.getAttributeNames())if(p.endsWith(qe)||p.startsWith(H)){const f=v[a++];if(c.push(p),f!==void 0){const y=n.getAttribute(f.toLowerCase()+qe).split(H),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:m[2],strings:y,ctor:m[1]==="."?Ci:m[1]==="?"?Ri:m[1]==="@"?Pi:xe})}else l.push({type:6,index:r})}for(const p of c)n.removeAttribute(p)}if(Gt.test(n.tagName)){const c=n.textContent.split(H),p=c.length-1;if(p>0){n.textContent=Z?Z.emptyScript:"";for(let f=0;f<p;f++)n.append(c[f],ue()),j.nextNode(),l.push({type:2,index:++r});n.append(c[p],ue())}}}else if(n.nodeType===8)if(n.data===Wt)l.push({type:2,index:r});else{let c=-1;for(;(c=n.data.indexOf(H,c+1))!==-1;)l.push({type:7,index:r}),c+=H.length-1}r++}}static createElement(e,t){const i=q.createElement("template");return i.innerHTML=e,i}}function X(s,e,t=s,i){var n,r,a,o;if(e===K)return e;let l=i!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[i]:t._$Cl;const u=ce(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==u&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),u===void 0?l=void 0:(l=new u(s),l._$AT(s,t,i)),i!==void 0?((a=(o=t)._$Co)!==null&&a!==void 0?a:o._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=X(s,l._$AS(s,e.values),l,i)),e}class Ni{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:n}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:q).importNode(i,!0);j.currentNode=r;let a=j.nextNode(),o=0,l=0,u=n[0];for(;u!==void 0;){if(o===u.index){let v;u.type===2?v=new ve(a,a.nextSibling,this,e):u.type===1?v=new u.ctor(a,u.name,u.strings,this,e):u.type===6&&(v=new Oi(a,this,e)),this._$AV.push(v),u=n[++l]}o!==(u==null?void 0:u.index)&&(a=j.nextNode(),o++)}return j.currentNode=q,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ve{constructor(e,t,i,n){var r;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cp=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),ce(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==K&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):xi(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==b&&ce(this._$AH)?this._$AA.nextSibling.data=e:this.$(q.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=he.createElement(Zt(n.h,n.h[0]),this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const a=new Ni(r,this),o=a.u(this.options);a.v(i),this.$(o),this._$AH=a}}_$AC(e){let t=Et.get(e.strings);return t===void 0&&Et.set(e.strings,t=new he(e)),t}T(e){Jt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new ve(this.k(ue()),this.k(ue()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class xe{constructor(e,t,i,n,r){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const r=this.strings;let a=!1;if(r===void 0)e=X(this,e,t,0),a=!ce(e)||e!==this._$AH&&e!==K,a&&(this._$AH=e);else{const o=e;let l,u;for(e=r[0],l=0;l<r.length-1;l++)u=X(this,o[i+l],t,l),u===K&&(u=this._$AH[l]),a||(a=!ce(u)||u!==this._$AH[l]),u===b?e=b:e!==b&&(e+=(u!=null?u:"")+r[l+1]),this._$AH[l]=u}a&&!n&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Ci extends xe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}}const Ti=Z?Z.emptyScript:"";class Ri extends xe{constructor(){super(...arguments),this.type=4}j(e){e&&e!==b?this.element.setAttribute(this.name,Ti):this.element.removeAttribute(this.name)}}class Pi extends xe{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=X(this,e,t,0))!==null&&i!==void 0?i:b)===K)return;const n=this._$AH,r=e===b&&n!==b||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==b&&(n===b||r);r&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Oi{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const kt=be.litHtmlPolyfillSupport;kt==null||kt(he,ve),((Oe=be.litHtmlVersions)!==null&&Oe!==void 0?Oe:be.litHtmlVersions=[]).push("2.8.0");const Ui=(s,e,t)=>{var i,n;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let a=r._$litPart$;if(a===void 0){const o=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=a=new ve(e.insertBefore(ue(),o),o,void 0,t!=null?t:{})}return a._$AI(s),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var He,Ie;class ne extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ui(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return K}}ne.finalized=!0,ne._$litElement$=!0,(He=globalThis.litElementHydrateSupport)===null||He===void 0||He.call(globalThis,{LitElement:ne});const Nt=globalThis.litElementPolyfillSupport;Nt==null||Nt({LitElement:ne});((Ie=globalThis.litElementVersions)!==null&&Ie!==void 0?Ie:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hi=s=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(s,e):((t,i)=>{const{kind:n,elements:r}=i;return{kind:n,elements:r,finisher(a){customElements.define(t,a)}}})(s,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ii=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,s)}},Li=(s,e,t)=>{e.constructor.createProperty(t,s)};function Vi(s){return(e,t)=>t!==void 0?Li(s,e,t):Ii(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function T(s){return Vi({...s,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Di=({finisher:s,descriptor:e})=>(t,i)=>{var n;if(i===void 0){const r=(n=t.originalKey)!==null&&n!==void 0?n:t.key,a=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(t.key)}:{...t,key:r};return s!=null&&(a.finisher=function(o){s(o,r)}),a}{const r=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),s==null||s(r,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function R(s,e){return Di({descriptor:t=>{const i={get(){var n,r;return(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(s))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const n=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var r,a;return this[n]===void 0&&(this[n]=(a=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(s))!==null&&a!==void 0?a:null),this[n]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Le;((Le=window.HTMLSlotElement)===null||Le===void 0?void 0:Le.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Fi(s,e){if(s!==void 0){let t=0;for(const i of s)yield e(i,t++)}}function h(s){let e,t,i;return typeof s=="object"?(e=s.hashFunction,t=s.expiring,i=s.tags):e=s,(n,r,a)=>{if(a.value!=null)a.value=Ct(a.value,e,t,i);else if(a.get!=null)a.get=Ct(a.get,e,t,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Ve=new Map;function Ct(s,e,t=0,i){const n=Symbol("__memoized_map__");return function(...r){let a;this.hasOwnProperty(n)||Object.defineProperty(this,n,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let o=this[n];if(Array.isArray(i))for(const l of i)Ve.has(l)?Ve.get(l).push(o):Ve.set(l,[o]);if(e||r.length>0||t>0){let l;e===!0?l=r.map(c=>c.toString()).join("!"):e?l=e.apply(this,r):l=r[0];const u=`${l}__timestamp`;let v=!1;if(t>0)if(!o.has(u))v=!0;else{let c=o.get(u);v=Date.now()-c>t}o.has(l)&&!v?a=o.get(l):(a=s.apply(this,r),o.set(l,a),t>0&&o.set(u,Date.now()))}else{const l=this;o.has(l)?a=o.get(l):(a=s.apply(this,r),o.set(l,a))}return a}}var se;(function(s){s[s.COUNT=0]="COUNT",s[s.ALPHABETICAL=1]="ALPHABETICAL",s[s.NUMERIC=2]="NUMERIC"})(se||(se={}));class Kt{constructor(e){this.buckets=e.buckets,this.doc_count_error_upper_bound=e.doc_count_error_upper_bound,this.sum_other_doc_count=e.sum_other_doc_count,this.first_bucket_key=e.first_bucket_key,this.last_bucket_key=e.last_bucket_key,this.number_buckets=e.number_buckets,this.interval=e.interval}getSortedBuckets(e){const t=[...this.buckets];if(this.isRawNumberBuckets(t))return t;const i=new Intl.Collator;switch(e){case se.ALPHABETICAL:return t.sort((n,r)=>i.compare(n.key.toString(),r.key.toString()));case se.NUMERIC:return t.sort((n,r)=>Number(r.key)-Number(n.key));case se.COUNT:default:return t}}isRawNumberBuckets(e){return typeof this.buckets[0]=="number"}}d([h()],Kt.prototype,"getSortedBuckets",null);class We{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:Boolean(e)}}We.shared=new We;class $e{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}$e.shared=new $e;class Je{parseValue(e){return $e.shared.parseValue(e)}}Je.shared=new Je;class Ge{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const i=Date.parse(t);if(Number.isNaN(i))return;let n=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(n=new Date(n.getTime()+n.getTimezoneOffset()*1e3*60)),n}}Ge.shared=new Ge;class Ze{parseValue(e){if(typeof e=="string")return e}}Ze.shared=new Ze;class Ke{parseValue(e){return String(e)}}Ke.shared=new Ke;class V{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){if(this.rawValue===void 0)return[];const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(i=>{const n=this.parser.parseValue(i);Array.isArray(n)?t.push(...n):n!==void 0&&t.push(n)}),t}}d([h()],V.prototype,"values",null);d([h()],V.prototype,"value",null);class ie extends V{constructor(e){super(We.shared,e)}}class Tt extends V{constructor(e){super(Je.shared,e)}}class k extends V{constructor(e){super(Ge.shared,e)}}class et extends V{constructor(e){super(Ze.shared,e)}}class E extends V{constructor(e){super($e.shared,e)}}class _ extends V{constructor(e){super(Ke.shared,e)}}class g{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.identifier}get addeddate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.addeddate?new k(this.rawMetadata.fields.addeddate):void 0}get avg_rating(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.avg_rating)!=null?new E(this.rawMetadata.fields.avg_rating):void 0}get collection(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection?new _(this.rawMetadata.fields.collection):void 0}get collection_files_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.collection_files_count)!=null?new E(this.rawMetadata.fields.collection_files_count):void 0}get collection_size(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.collection_size)!=null?new Tt(this.rawMetadata.fields.collection_size):void 0}get creator(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.creator?new _(this.rawMetadata.fields.creator):void 0}get date(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date?new k(this.rawMetadata.fields.date):void 0}get description(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.description?new _(this.rawMetadata.fields.description):void 0}get downloads(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.downloads)!=null?new E(this.rawMetadata.fields.downloads):void 0}get files_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.files_count)!=null?new E(this.rawMetadata.fields.files_count):void 0}get genre(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.genre?new _(this.rawMetadata.fields.genre):void 0}get indexflag(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.indexflag?new _(this.rawMetadata.fields.indexflag):void 0}get issue(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.issue?new _(this.rawMetadata.fields.issue):void 0}get item_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.item_count)!=null?new E(this.rawMetadata.fields.item_count):void 0}get item_size(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.item_size)!=null?new Tt(this.rawMetadata.fields.item_size):void 0}get language(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.language?new _(this.rawMetadata.fields.language):void 0}get lending___available_to_borrow(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_borrow)!=null?new ie(this.rawMetadata.fields.lending___available_to_borrow):void 0}get lending___available_to_browse(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_browse)!=null?new ie(this.rawMetadata.fields.lending___available_to_browse):void 0}get lending___available_to_waitlist(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_waitlist)!=null?new ie(this.rawMetadata.fields.lending___available_to_waitlist):void 0}get lending___status(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.lending___status?new _(this.rawMetadata.fields.lending___status):void 0}get licenseurl(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.licenseurl?new _(this.rawMetadata.fields.licenseurl):void 0}get mediatype(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.mediatype?new et(this.rawMetadata.fields.mediatype):void 0}get month(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.month)!=null?new E(this.rawMetadata.fields.month):void 0}get noindex(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.noindex)!=null?new ie(this.rawMetadata.fields.noindex):void 0}get num_favorites(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.num_favorites)!=null?new E(this.rawMetadata.fields.num_favorites):void 0}get num_reviews(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.num_reviews)!=null?new E(this.rawMetadata.fields.num_reviews):void 0}get publicdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.publicdate?new k(this.rawMetadata.fields.publicdate):void 0}get reviewdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.reviewdate?new k(this.rawMetadata.fields.reviewdate):void 0}get review(){var e;const t=(e=this.rawMetadata)===null||e===void 0?void 0:e.review;return t?{body:t.reviewbody,title:t.reviewtitle,author:t.reviewer,authorItem:t.reviewer_itemname,updatedate:new Date(t.reviewdate),createdate:new Date(t.createdate),stars:Number(t.stars)||0,__href__:t.__href__}:void 0}get source(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.source?new _(this.rawMetadata.fields.source):void 0}get subject(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.subject?new _(this.rawMetadata.fields.subject):void 0}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new _(this.rawMetadata.fields.title):void 0}get type(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.type?new _(this.rawMetadata.fields.type):void 0}get volume(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.volume?new _(this.rawMetadata.fields.volume):void 0}get week(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.week)!=null?new E(this.rawMetadata.fields.week):void 0}get year(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.year)!=null?new E(this.rawMetadata.fields.year):void 0}}d([h()],g.prototype,"addeddate",null);d([h()],g.prototype,"avg_rating",null);d([h()],g.prototype,"collection",null);d([h()],g.prototype,"collection_files_count",null);d([h()],g.prototype,"collection_size",null);d([h()],g.prototype,"creator",null);d([h()],g.prototype,"date",null);d([h()],g.prototype,"description",null);d([h()],g.prototype,"downloads",null);d([h()],g.prototype,"files_count",null);d([h()],g.prototype,"genre",null);d([h()],g.prototype,"indexflag",null);d([h()],g.prototype,"issue",null);d([h()],g.prototype,"item_count",null);d([h()],g.prototype,"item_size",null);d([h()],g.prototype,"language",null);d([h()],g.prototype,"lending___available_to_borrow",null);d([h()],g.prototype,"lending___available_to_browse",null);d([h()],g.prototype,"lending___available_to_waitlist",null);d([h()],g.prototype,"lending___status",null);d([h()],g.prototype,"licenseurl",null);d([h()],g.prototype,"mediatype",null);d([h()],g.prototype,"month",null);d([h()],g.prototype,"noindex",null);d([h()],g.prototype,"num_favorites",null);d([h()],g.prototype,"num_reviews",null);d([h()],g.prototype,"publicdate",null);d([h()],g.prototype,"reviewdate",null);d([h()],g.prototype,"review",null);d([h()],g.prototype,"source",null);d([h()],g.prototype,"subject",null);d([h()],g.prototype,"title",null);d([h()],g.prototype,"type",null);d([h()],g.prototype,"volume",null);d([h()],g.prototype,"week",null);d([h()],g.prototype,"year",null);class w{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.identifier}get highlight(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.highlight)===null||t===void 0)&&t.text?new _(this.rawMetadata.highlight.text):void 0}get addeddate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.addeddate?new k(this.rawMetadata.fields.addeddate):void 0}get avg_rating(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.avg_rating)!=null?new E(this.rawMetadata.fields.avg_rating):void 0}get collection(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection?new _(this.rawMetadata.fields.collection):void 0}get created_on(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.created_on?new k(this.rawMetadata.fields.created_on):void 0}get creator(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.creator?new _(this.rawMetadata.fields.creator):void 0}get date(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date?new k(this.rawMetadata.fields.date):void 0}get description(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.description?new _(this.rawMetadata.fields.description):void 0}get downloads(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.downloads)!=null?new E(this.rawMetadata.fields.downloads):void 0}get filename(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.filename?new _(this.rawMetadata.fields.filename):void 0}get file_basename(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.file_basename?new _(this.rawMetadata.fields.file_basename):void 0}get file_creation_mtime(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.file_creation_mtime)!=null?new E(this.rawMetadata.fields.file_creation_mtime):void 0}get issue(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.issue?new _(this.rawMetadata.fields.issue):void 0}get mediatype(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.mediatype?new et(this.rawMetadata.fields.mediatype):void 0}get page_num(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.page_num)!=null?new E(this.rawMetadata.fields.page_num):void 0}get publicdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.publicdate?new k(this.rawMetadata.fields.publicdate):void 0}get result_in_subfile(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.result_in_subfile)!=null?new ie(this.rawMetadata.fields.result_in_subfile):void 0}get reviewdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.reviewdate?new k(this.rawMetadata.fields.reviewdate):void 0}get source(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.source?new _(this.rawMetadata.fields.source):void 0}get subject(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.subject?new _(this.rawMetadata.fields.subject):void 0}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new _(this.rawMetadata.fields.title):void 0}get updated_on(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.updated_on?new k(this.rawMetadata.fields.updated_on):void 0}get year(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.year)!=null?new E(this.rawMetadata.fields.year):void 0}get __href__(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new _(this.rawMetadata.fields.__href__):void 0}}d([h()],w.prototype,"highlight",null);d([h()],w.prototype,"addeddate",null);d([h()],w.prototype,"avg_rating",null);d([h()],w.prototype,"collection",null);d([h()],w.prototype,"created_on",null);d([h()],w.prototype,"creator",null);d([h()],w.prototype,"date",null);d([h()],w.prototype,"description",null);d([h()],w.prototype,"downloads",null);d([h()],w.prototype,"filename",null);d([h()],w.prototype,"file_basename",null);d([h()],w.prototype,"file_creation_mtime",null);d([h()],w.prototype,"issue",null);d([h()],w.prototype,"mediatype",null);d([h()],w.prototype,"page_num",null);d([h()],w.prototype,"publicdate",null);d([h()],w.prototype,"result_in_subfile",null);d([h()],w.prototype,"reviewdate",null);d([h()],w.prototype,"source",null);d([h()],w.prototype,"subject",null);d([h()],w.prototype,"title",null);d([h()],w.prototype,"updated_on",null);d([h()],w.prototype,"year",null);d([h()],w.prototype,"__href__",null);class fe{constructor(e){this.rawMetadata=e}get identifier(){var e;return(e=this.rawMetadata)===null||e===void 0?void 0:e.fields.query}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new _(this.rawMetadata.fields.title):void 0}get query(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.query?new _(this.rawMetadata.fields.query):void 0}get date_favorited(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date_favorited?new k(this.rawMetadata.fields.date_favorited):void 0}get __href__(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new _(this.rawMetadata.fields.__href__):void 0}}d([h()],fe.prototype,"title",null);d([h()],fe.prototype,"query",null);d([h()],fe.prototype,"date_favorited",null);d([h()],fe.prototype,"__href__",null);class Ee{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.url}get mediatype(){return new et("web")}get title(){var e,t,i;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.url?new _((i=this.rawMetadata.fields)===null||i===void 0?void 0:i.url):void 0}get capture_dates(){var e,t,i;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.capture_dates?new k((i=this.rawMetadata.fields)===null||i===void 0?void 0:i.capture_dates):void 0}get __href__(){var e,t,i;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new _((i=this.rawMetadata.fields)===null||i===void 0?void 0:i.__href__):void 0}}d([h()],Ee.prototype,"title",null);d([h()],Ee.prototype,"capture_dates",null);d([h()],Ee.prototype,"__href__",null);const Bi=["loans","waitlist","loan_history"];function ji(s){const e=s.slice(0,4),t=s.slice(4,6),i=s.slice(6,8),n=s.slice(8,10),r=s.slice(10,12),a=s.slice(12,14);return`${e}-${t}-${i}T${n}:${r}:${a}Z`}function zi(s){var e;const t=[];for(const i of s){if(!(!((e=i.captures)===null||e===void 0)&&e.length))continue;const n=encodeURIComponent(i.url),r=`https://web.archive.org/web/${i.captures[0]}/${n}`;t.push({hit_type:"web_archive",fields:{url:i.url,capture_dates:i.captures.map(a=>ji(a)),__href__:r}})}return t}class ye{constructor(e,t){var i,n,r,a,o,l,u,v,c,p,f,y,m,C;this.schema=t;const P=t==null?void 0:t.hit_type;let A;e!=null&&e.page_elements&&(this.pageElements=e.page_elements,A=Object.values(this.pageElements)[0]);let S=(i=e==null?void 0:e.hits)===null||i===void 0?void 0:i.hits;this.totalResults=(r=(n=e==null?void 0:e.hits)===null||n===void 0?void 0:n.total)!==null&&r!==void 0?r:0,this.returnedCount=(o=(a=e==null?void 0:e.hits)===null||a===void 0?void 0:a.returned)!==null&&o!==void 0?o:0,!(S!=null&&S.length)&&((l=A==null?void 0:A.hits)===null||l===void 0?void 0:l.hits)?(S=A.hits.hits,this.totalResults=(u=A.hits.total)!==null&&u!==void 0?u:0,this.returnedCount=(v=A.hits.returned)!==null&&v!==void 0?v:0):!((c=this.pageElements)===null||c===void 0)&&c.lending?S=this.handleLendingPageElement(P):!((p=this.pageElements)===null||p===void 0)&&p.web_archives&&(S=this.handleWebArchivesPageElement()),this.results=(f=S==null?void 0:S.map(it=>{var Ne;return ye.createResult((Ne=it.hit_type)!==null&&Ne!==void 0?Ne:P,it)}))!==null&&f!==void 0?f:[];let ke=e==null?void 0:e.aggregations;!(this.aggregations&&Object.keys(this.aggregations).length>0)&&(A==null?void 0:A.aggregations)&&(ke=A.aggregations),ke&&this.buildAggregations(ke),e!=null&&e.collection_titles&&(this.collectionTitles=(y=e.collection_titles)!==null&&y!==void 0?y:{}),e!=null&&e.collection_extra_info&&(this.collectionExtraInfo=(m=e.collection_extra_info)!==null&&m!==void 0?m:null),e!=null&&e.account_extra_info&&(this.accountExtraInfo=(C=e.account_extra_info)!==null&&C!==void 0?C:null)}buildAggregations(e){this.aggregations=Object.entries(e).reduce((t,[i,n])=>(t[i]=new Kt(n),t),{})}handleLendingPageElement(e){var t,i,n;const r=(t=this.pageElements)===null||t===void 0?void 0:t.lending,a=(i=r.loans)!==null&&i!==void 0?i:[];this.totalResults=a.length,this.returnedCount=this.totalResults;for(const o of Bi)r[o]=(n=r[o].map(l=>{var u;return ye.createResult((u=l.hit_type)!==null&&u!==void 0?u:e,l)}))!==null&&n!==void 0?n:[];return a}handleWebArchivesPageElement(){var e;const t=zi((e=this.pageElements)===null||e===void 0?void 0:e.web_archives);return this.totalResults=t.length,this.returnedCount=this.totalResults,t}static createResult(e,t){switch(e){case"item":return new g(t);case"text":case"asr_text":return new w(t);case"favorited_search":return new fe(t);case"web_archive":return new Ee(t);default:return new g(t)}}}class qi{constructor(e){this.clientParameters=e.client_parameters,this.backendRequests=e.backend_requests,this.kind=e.kind}}class Wi{constructor(e){var t,i,n;this.rawResponse=e,this.request=new qi(e.request),this.responseHeader=(t=e.response)===null||t===void 0?void 0:t.header,this.sessionContext=e.session_context,this.response=new ye((i=e.response)===null||i===void 0?void 0:i.body,(n=e.response)===null||n===void 0?void 0:n.hit_schema)}}var I;(function(s){s[s.METADATA=0]="METADATA",s[s.FULLTEXT=1]="FULLTEXT",s[s.RADIO=3]="RADIO"})(I||(I={}));class pe{static aggregateSearchParamsAsString(e){if(e.omit)return"false";if(e.advancedParams){const t=e.advancedParams.map(n=>({terms:n}));return JSON.stringify(t)}if(e.simpleParams)return e.simpleParams.join(",")}static sortParamsAsString(e){return`${e.field}:${e.direction}`}static filterParamsAsString(e){return JSON.stringify(e)}static generateURLSearchParams(e){const t=new URLSearchParams;if(t.append("user_query",e.query),e.pageType&&t.append("page_type",String(e.pageType)),e.pageTarget&&t.append("page_target",String(e.pageTarget)),e.pageElements&&e.pageElements.length>0){const r=`[${e.pageElements.map(a=>`"${a}"`).join(",")}]`;t.append("page_elements",r)}if(e.rows!=null&&t.append("hits_per_page",String(e.rows)),e.page!=null&&t.append("page",String(e.page)),e.fields&&e.fields.length>0&&t.append("fields",e.fields.join(",")),e.filters&&Object.keys(e.filters).length>0){const n=this.filterParamsAsString(e.filters);n&&n!=="{}"&&t.append("filter_map",n)}if(e.sort&&e.sort.length>0){const n=e.sort.map(r=>this.sortParamsAsString(r));t.append("sort",n.join(","))}const i=e.aggregations;if(i){const n=this.aggregateSearchParamsAsString(i);n&&t.append("aggregations",n)}if(e.aggregationsSize!=null&&t.append("aggregations_size",String(e.aggregationsSize)),e.debugging&&t.append("debugging","true"),e.uid&&t.append("uid",e.uid),e.includeClientUrl!==!1){const n=window.location.href.slice(0,400);e.query.length<=1e3&&t.append("client_url",n)}return t}}var re;(function(s){s.networkError="SearchService.NetworkError",s.itemNotFound="SearchService.ItemNotFound",s.decodingError="SearchService.DecodingError",s.searchEngineError="SearchService.SearchEngineError"})(re||(re={}));class Ji extends Error{constructor(e,t,i){super(t),this.name=e,this.type=e,this.details=i}}const Rt={reCache:JSON.stringify({recompute:!0}),noCache:JSON.stringify({bypass:!0}),dontCache:JSON.stringify({no_compute:!0})};class tt{constructor(e){var t,i;this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null;const n=new URL(window.location.href).searchParams,r=n.get("scope"),a=n.get("verbose"),o=n.get("debugging"),l=n.get("cacheDebug");let u="";for(const v of Object.keys(Rt))if(n.get(v)){u=Rt[v];break}u=(i=n.get("caching"))!==null&&i!==void 0?i:u,(e==null?void 0:e.caching)!==void 0?this.cachingFlags=e.caching:u&&(this.cachingFlags=u),(e==null?void 0:e.debuggingEnabled)!==void 0?this.debuggingEnabled=e.debuggingEnabled:(o||l)&&(this.debuggingEnabled=!0),(e==null?void 0:e.scope)!==void 0?this.requestScope=e.scope:r&&(this.requestScope=r),(e==null?void 0:e.verbose)!==void 0?this.verbose=e.verbose:a&&(this.verbose=!!a)}async fetchUrl(e,t){var i,n;const r=new URL(e);this.requestScope&&r.searchParams.set("scope",this.requestScope),this.cachingFlags&&r.searchParams.set("caching",this.cachingFlags);let a;try{const o=(i=t==null?void 0:t.requestOptions)!==null&&i!==void 0?i:{credentials:this.includeCredentials?"include":"same-origin"};a=await fetch(r.href,o)}catch(o){const l=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(re.networkError,l)}try{const o=await a.json();this.verbose&&this.printResponse(o),o.debugging&&this.printDebuggingInfo(o);const l=(n=o.response)===null||n===void 0?void 0:n.error;return l?this.getErrorResult(re.searchEngineError,l.message,l.forensics):{success:o}}catch(o){const l=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(re.decodingError,l)}}getErrorResult(e,t,i){return{error:new Ji(e,t,i)}}printResponse(e){var t,i,n,r,a;try{const o=JSON.parse(JSON.stringify(e)),l=(n=(i=(t=o==null?void 0:o.response)===null||t===void 0?void 0:t.body)===null||i===void 0?void 0:i.hits)===null||n===void 0?void 0:n.hits;if(Array.isArray(l)&&l.length>1){const v=[];v.push(l[0]),v.push(`*** ${l.length-1} hits omitted ***`),o.response.body.hits.hits=v}const u=(a=(r=o==null?void 0:o.response)===null||r===void 0?void 0:r.body)===null||a===void 0?void 0:a.aggregations;u&&Object.entries(u).forEach(([v,c])=>{var p,f,y;if(((p=c==null?void 0:c.buckets)===null||p===void 0?void 0:p.length)>0){const m=JSON.parse(JSON.stringify(c));m.buckets=`*** ${(y=(f=m.buckets)===null||f===void 0?void 0:f.length)!==null&&y!==void 0?y:0} buckets omitted ***`,o.response.body.aggregations[v]=m}}),console.log("***** RESPONSE RECEIVED *****"),console.groupCollapsed("Response"),console.log(JSON.stringify(o,null,2)),console.groupEnd()}catch(o){console.error("Error printing search response:",o)}}printDebuggingInfo(e){var t,i;const n=e.debugging,r=(t=n.messages)!==null&&t!==void 0?t:[],a=(i=n.data)!==null&&i!==void 0?i:{};console.log("***** BEGIN DEBUGGING *****"),console.log("Full response:"),console.log(JSON.stringify(e,null,2)),console.group("Debug messages");for(const o of r)console.log(o);console.groupEnd(),console.group("Debug data");for(const[o,l]of Object.entries(a))console.log(o,l);console.groupEnd(),console.log("***** END DEBUGGING *****")}}class Gi extends tt{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=pe.generateURLSearchParams(e).toString(),n=`https://${this.baseUrl}${this.servicePath}/?service_backend=fts&${i}`;return this.fetchUrl(n)}}class Zi extends tt{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=pe.generateURLSearchParams(e).toString(),n=`https://${this.baseUrl}${this.servicePath}/?${i}`;return this.fetchUrl(n)}}class Ki extends tt{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=pe.generateURLSearchParams(e).toString(),n=`https://${this.baseUrl}${this.servicePath}/?service_backend=rcs&${i}`;return this.fetchUrl(n)}}class Y{constructor(e={}){this.backendOptions=e}async search(e,t=I.METADATA){const n=await Y.getBackendForSearchType(t,this.backendOptions).performSearch(e);return n.error?n:{success:new Wi(n.success)}}static getBackendForSearchType(e,t={}){switch(e){case I.FULLTEXT:return new Gi(t);case I.RADIO:return new Ki(t);case I.METADATA:default:return new Zi(t)}}}Y.default=new Y;d([h((s,e={})=>{const{includeCredentials:t=!1,verbose:i=!1,scope:n="",baseUrl:r=""}=e;return`${s};${t};${i};${n};${r}`})],Y,"getBackendForSearchType",null);class Pt{constructor(){this.filterMap={}}addFilter(e,t,i){if(this.filterMap[e]||(this.filterMap[e]={}),this.filterMap[e][t]){const n=[].concat(this.filterMap[e][t],i);this.filterMap[e][t]=Array.from(new Set(n))}else this.filterMap[e][t]=i;return this}removeSingleFilter(e,t,i){var n;if(!(!((n=this.filterMap[e])===null||n===void 0)&&n[t]))return this;const r=[].concat(this.filterMap[e][t]),a=r.indexOf(i);return a>=0&&r.splice(a,1),this.filterMap[e][t]=r.length===1?r[0]:r,r.length===0&&delete this.filterMap[e][t],this.deleteFieldIfEmpty(e),this}removeFilters(e,t){return this.filterMap[e]?(delete this.filterMap[e][t],this.deleteFieldIfEmpty(e),this):this}deleteFieldIfEmpty(e){const t=this.filterMap[e];t&&Object.keys(t).length===0&&delete this.filterMap[e]}setFilterMap(e){return this.filterMap={...e},this}mergeFilterMap(e){for(const[t,i]of Object.entries(e))for(const[n,r]of Object.entries(i))if(Array.isArray(r))for(const a of r)this.addFilter(t,n,a);else this.addFilter(t,n,r);return this}build(){return this.filterMap}}let $=class extends ne{constructor(){super(...arguments),this.searchServiceUrlOptions=this.initSearchServiceUrlOptions(),this.filterMap={},this.loadingSearchResults=!1,this.loadingAggregations=!1,this.defaultAggregationsChecked=!0,this.fullSearchResultsShown=!1,this.searchService=new Y(this.searchServiceUrlOptions)}get searchResults(){var e;return(e=this.searchResponse)===null||e===void 0?void 0:e.response.results}get searchAggregations(){var e;return(e=this.aggregationsResponse)===null||e===void 0?void 0:e.response.aggregations}initSearchServiceUrlOptions(){var e,t,i;const n=new URL(window.location.href).searchParams;return{baseUrl:(e=n.get("search_base_url"))!==null&&e!==void 0?e:"ia-petabox-ximm-pps-feature-include-favorited-searches.archive.org",servicePath:(t=n.get("search_service_path"))!==null&&t!==void 0?t:void 0,debuggingEnabled:(i=!!n.get("debugging"))!==null&&i!==void 0?i:void 0}}render(){var e;return M`
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
              ?checked=${(e=this.searchServiceUrlOptions)===null||e===void 0?void 0:e.debuggingEnabled}
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

      ${this.searchResults||this.loadingSearchResults?this.resultsTemplate:b}
    `}filterFieldChanged(e){var t,i;const r=!!e.target.selectedOptions[0].dataset.numeric,a=(i=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelectorAll("#filter-constraint option"))!==null&&i!==void 0?i:[];for(const o of a)o.toggleAttribute("hidden",!r&&!!o.dataset.numeric)}addFilterClicked(){const e=this.filterFieldInput.selectedOptions[0].value,t=this.filterValueInput.value,i=this.filterConstraintInput.selectedOptions[0].value;!e||!i||!t||(this.filterMap=new Pt().setFilterMap(this.filterMap).addFilter(e,t,i).build(),this.filterValueInput.value="")}removeFilterClicked(e){const t=e.target,{field:i,value:n,constraint:r}=t.dataset;i&&n&&r&&(this.filterMap=new Pt().setFilterMap(this.filterMap).removeSingleFilter(i,n,r).build())}get appliedFiltersTemplate(){const e=[];for(const[i,n]of Object.entries(this.filterMap))for(const[r,a]of Object.entries(n))if(Array.isArray(a))for(const o of a)e.push({field:i,value:r,constraint:o});else e.push({field:i,value:r,constraint:a});if(e.length===0)return M`<span>(no filters applied)</span>`;const t={inc:"includes",exc:"excludes",gt:">",gte:">=",lt:"<",lte:"<="};return Fi(e,({field:i,value:n,constraint:r})=>M`
        <span class="filter">
          <span class="filter-text"
            >'${i}' ${t[r]} '${n}'</span
          ><!--
       --><button
            type="button"
            class="remove-filter"
            data-field=${i}
            data-value=${n}
            data-constraint=${r}
            @click=${this.removeFilterClicked}
          >
            x
          </button>
        </span>
      `)}aggregationCheckboxTemplate(e,t){const i=`aggs-${e}`;return M`
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
    `}get resultsTemplate(){return M`
      <details>
        <summary>PPS URL params</summary>
        ${this.lastSearchParams?M`<div>
              Last search params:
              <pre class="params">${this.lastSearchParams}</pre>
            </div>`:b}
        ${this.lastAggregationParams?M`<div>
              Last aggregation params:
              <pre class="params">${this.lastAggregationParams}</pre>
            </div>`:b}
      </details>
      ${this.loadingSearchResults?M`<h3>Loading search results...</h3>`:[this.minimalSearchResultsTemplate,this.fullSearchResultsTemplate]}
      ${this.loadingAggregations?M`<h3>Loading aggregations...</h3>`:this.aggregationsTemplate}
    `}get minimalSearchResultsTemplate(){var e;return M`
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
          ${(e=this.searchResults)===null||e===void 0?void 0:e.map(t=>{var i,n;return M`
              <tr>
                <td>${t.identifier}</td>
                <td>${(n=(i=t.title)===null||i===void 0?void 0:i.value)!==null&&n!==void 0?n:"(Untitled)"}</td>
                ${this.snippetTemplate(t)}
              </tr>
            `})}
        </tbody>
      </table>
    `}get fullSearchResultsTemplate(){return M`
      <button @click=${this.toggleFullSearchResults}>
        ${this.fullSearchResultsShown?"Hide":"Show"} all search results
      </button>
      ${this.fullSearchResultsShown?M`<pre>
          ${JSON.stringify(this.searchResults,null,2)}
        </pre
          >`:b}
    `}get aggregationsTemplate(){var e;return M`
      <div>
        <h2>Aggregations</h2>
        ${Object.entries((e=this.searchAggregations)!==null&&e!==void 0?e:{}).map(([t,i])=>M`
            <h3>${t}</h3>
            <p>
              ${i.buckets.map(n=>typeof n=="number"?n:`${n.key} (${n.doc_count})`).join(", ")}
            </p>
          `)}
      </div>
    `}get snippetsHeaderTemplate(){var e;return!((e=this.searchResults)===null||e===void 0)&&e.some(t=>t.highlight)?M`<th>Snippets</th>`:M`${b}`}snippetTemplate(e){return e.highlight?M`<td>${e.highlight.value}</td>`:M`${b}`}toggleDefaultAggregations(){var e;this.defaultAggregationsChecked=(e=this.defaultAggregationsCheckbox)===null||e===void 0?void 0:e.checked}toggleFullSearchResults(){this.fullSearchResultsShown=!this.fullSearchResultsShown}async search(e){var t;e.preventDefault();const i=this.searchInput.value,n=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector("input[name='search-type']:checked"),r=(n==null?void 0:n.value)==="fts"?I.FULLTEXT:I.METADATA;this.fetchSearchResults(i,r),this.fetchAggregations(i,r)}async fetchSearchResults(e,t){var i,n,r,a,o,l;const u=((i=this.checkedSort)===null||i===void 0?void 0:i.value)==="none"?void 0:[{field:"title",direction:(n=this.checkedSort)===null||n===void 0?void 0:n.value}],v=Number((r=this.rowsInput)===null||r===void 0?void 0:r.value),c=(a=this.debugCheck)===null||a===void 0?void 0:a.checked,p={query:e,rows:v,sort:u,filters:this.filterMap,aggregations:{omit:!0},debugging:c,uid:"demo"};!((o=this.searchWithinCheck)===null||o===void 0)&&o.checked&&(p.pageTarget=e,p.pageType="collection_details"),this.lastSearchParams=decodeURIComponent(pe.generateURLSearchParams(p).toString()),this.loadingSearchResults=!0;const f=await this.searchService.search(p,t);this.loadingSearchResults=!1,f!=null&&f.success?this.searchResponse=f==null?void 0:f.success:(alert(`Oh noes: ${(l=f==null?void 0:f.error)===null||l===void 0?void 0:l.message}`),console.error("Error searching",f==null?void 0:f.error))}async fetchAggregations(e,t){var i,n,r,a;const o=(i=this.shadowRoot)===null||i===void 0?void 0:i.querySelectorAll("input[name='aggs']:checked"),l={simpleParams:o?[...o].map(f=>f.value):void 0},u=Number((n=this.numAggsInput)===null||n===void 0?void 0:n.value),v=(r=this.debugCheck)===null||r===void 0?void 0:r.checked,c={query:e,rows:0,filters:this.filterMap,aggregationsSize:u,debugging:v,uid:"demo"};this.defaultAggregationsChecked||(c.aggregations=l),this.lastAggregationParams=decodeURIComponent(pe.generateURLSearchParams(c).toString()),this.loadingAggregations=!0;const p=await this.searchService.search(c,t);this.loadingAggregations=!1,p!=null&&p.success?this.aggregationsResponse=p==null?void 0:p.success:(alert(`Oh noes: ${(a=p==null?void 0:p.error)===null||a===void 0?void 0:a.message}`),console.error("Error searching",p==null?void 0:p.error))}static get styles(){return pi`
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
    `}};d([R("#search-input")],$.prototype,"searchInput",void 0);d([R("#search-within-check")],$.prototype,"searchWithinCheck",void 0);d([R("#debug-info-check")],$.prototype,"debugCheck",void 0);d([R("#num-rows")],$.prototype,"rowsInput",void 0);d([R("#num-aggs")],$.prototype,"numAggsInput",void 0);d([R("input[name='sort']:checked")],$.prototype,"checkedSort",void 0);d([R("#filter-field")],$.prototype,"filterFieldInput",void 0);d([R("#filter-constraint")],$.prototype,"filterConstraintInput",void 0);d([R("#filter-value")],$.prototype,"filterValueInput",void 0);d([R("#aggs-default")],$.prototype,"defaultAggregationsCheckbox",void 0);d([T()],$.prototype,"searchServiceUrlOptions",void 0);d([T()],$.prototype,"filterMap",void 0);d([T()],$.prototype,"searchResponse",void 0);d([T()],$.prototype,"aggregationsResponse",void 0);d([T()],$.prototype,"loadingSearchResults",void 0);d([T()],$.prototype,"loadingAggregations",void 0);d([T()],$.prototype,"lastSearchParams",void 0);d([T()],$.prototype,"lastAggregationParams",void 0);d([T()],$.prototype,"defaultAggregationsChecked",void 0);d([T()],$.prototype,"fullSearchResultsShown",void 0);$=d([Hi("app-root")],$);ui(ci`
        <app-root></app-root>
      `,document.querySelector("#demo"));
