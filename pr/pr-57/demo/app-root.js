const Xt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}};Xt();/**
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
 */const Yt=new WeakMap,oe=s=>typeof s=="function"&&Yt.has(s);/**
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
 */const it=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,Pt=(s,e,t=null)=>{for(;e!==t;){const i=e.nextSibling;s.removeChild(e),e=i}};/**
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
 */const N={},nt={};/**
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
 */const I=`{{lit-${String(Math.random()).slice(2)}}}`,Ot=`<!--${I}-->`,st=new RegExp(`${I}|${Ot}`),te="$lit$";class Qt{constructor(e,t){this.parts=[],this.element=t;const i=[],n=[],r=document.createTreeWalker(t.content,133,null,!1);let o=0,l=-1,a=0;const{strings:u,values:{length:v}}=e;for(;a<v;){const c=r.nextNode();if(c===null){r.currentNode=n.pop();continue}if(l++,c.nodeType===1){if(c.hasAttributes()){const p=c.attributes,{length:f}=p;let $=0;for(let m=0;m<f;m++)rt(p[m].name,te)&&$++;for(;$-- >0;){const m=u[a],C=Fe.exec(m)[2],P=C.toLowerCase()+te,A=c.getAttribute(P);c.removeAttribute(P);const S=A.split(st);this.parts.push({type:"attribute",index:l,name:C,strings:S}),a+=S.length-1}}c.tagName==="TEMPLATE"&&(n.push(c),r.currentNode=c.content)}else if(c.nodeType===3){const p=c.data;if(p.indexOf(I)>=0){const f=c.parentNode,$=p.split(st),m=$.length-1;for(let C=0;C<m;C++){let P,A=$[C];if(A==="")P=O();else{const S=Fe.exec(A);S!==null&&rt(S[2],te)&&(A=A.slice(0,S.index)+S[1]+S[2].slice(0,-te.length)+S[3]),P=document.createTextNode(A)}f.insertBefore(P,c),this.parts.push({type:"node",index:++l})}$[m]===""?(f.insertBefore(O(),c),i.push(c)):c.data=$[m],a+=m}}else if(c.nodeType===8)if(c.data===I){const p=c.parentNode;(c.previousSibling===null||l===o)&&(l++,p.insertBefore(O(),c)),o=l,this.parts.push({type:"node",index:l}),c.nextSibling===null?c.data="":(i.push(c),l--),a++}else{let p=-1;for(;(p=c.data.indexOf(I,p+1))!==-1;)this.parts.push({type:"node",index:-1}),a++}}for(const c of i)c.parentNode.removeChild(c)}}const rt=(s,e)=>{const t=s.length-e.length;return t>=0&&s.slice(t)===e},ei=s=>s.index!==-1,O=()=>document.createComment(""),Fe=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
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
 */class ot{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)i!==void 0&&i.setValue(e[t]),t++;for(const i of this.__parts)i!==void 0&&i.commit()}_clone(){const e=it?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let r=0,o=0,l,a=n.nextNode();for(;r<i.length;){if(l=i[r],!ei(l)){this.__parts.push(void 0),r++;continue}for(;o<l.index;)o++,a.nodeName==="TEMPLATE"&&(t.push(a),n.currentNode=a.content),(a=n.nextNode())===null&&(n.currentNode=t.pop(),a=n.nextNode());if(l.type==="node"){const u=this.processor.handleTextExpression(this.options);u.insertAfterNode(a.previousSibling),this.__parts.push(u)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,l.name,l.strings,this.options));r++}return it&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
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
 */const lt=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:s=>s}),ti=` ${I} `;class Ht{constructor(e,t,i,n){this.strings=e,this.values=t,this.type=i,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let n=0;n<e;n++){const r=this.strings[n],o=r.lastIndexOf("<!--");i=(o>-1||i)&&r.indexOf("-->",o+1)===-1;const l=Fe.exec(r);l===null?t+=r+(i?ti:Ot):t+=r.substr(0,l.index)+l[1]+l[2]+te+l[3]+I}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return lt!==void 0&&(t=lt.createHTML(t)),e.innerHTML=t,e}}/**
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
 */const Xe=s=>s===null||!(typeof s=="object"||typeof s=="function"),De=s=>Array.isArray(s)||!!(s&&s[Symbol.iterator]);class Ut{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let n=0;n<i.length-1;n++)this.parts[n]=this._createPart()}_createPart(){return new It(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(t===1&&e[0]===""&&e[1]===""){const r=i[0].value;if(typeof r=="symbol")return String(r);if(typeof r=="string"||!De(r))return r}let n="";for(let r=0;r<t;r++){n+=e[r];const o=i[r];if(o!==void 0){const l=o.value;if(Xe(l)||!De(l))n+=typeof l=="string"?l:String(l);else for(const a of l)n+=typeof a=="string"?a:String(a)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class It{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==N&&(!Xe(e)||e!==this.value)&&(this.value=e,oe(e)||(this.committer.dirty=!0))}commit(){for(;oe(this.value);){const e=this.value;this.value=N,e(this)}this.value!==N&&this.committer.commit()}}class Ae{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(O()),this.endNode=e.appendChild(O())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=O()),e.__insert(this.endNode=O())}insertAfterPart(e){e.__insert(this.startNode=O()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;oe(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=N,t(this)}const e=this.__pendingValue;e!==N&&(Xe(e)?e!==this.value&&this.__commitText(e):e instanceof Ht?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):De(e)?this.__commitIterable(e):e===nt?(this.value=nt,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=e==null?"":e;const i=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof ot&&this.value.template===t)this.value.update(e.values);else{const i=new ot(t,e.processor,this.options),n=i._clone();i.update(e.values),this.__commitNode(n),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i=0,n;for(const r of e)n=t[i],n===void 0&&(n=new Ae(this.options),t.push(n),i===0?n.appendIntoPart(this):n.insertAfterPart(t[i-1])),n.setValue(r),n.commit(),i++;i<t.length&&(t.length=i,this.clear(n&&n.endNode))}clear(e=this.startNode){Pt(this.startNode.parentNode,e.nextSibling,this.endNode)}}class ii{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,i.length!==2||i[0]!==""||i[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;oe(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=N,t(this)}if(this.__pendingValue===N)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=N}}class ni extends Ut{constructor(e,t,i){super(e,t,i),this.single=i.length===2&&i[0]===""&&i[1]===""}_createPart(){return new si(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class si extends It{}let Lt=!1;(()=>{try{const s={get capture(){return Lt=!0,!1}};window.addEventListener("test",s,s),window.removeEventListener("test",s,s)}catch{}})();class ri{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=n=>this.handleEvent(n)}setValue(e){this.__pendingValue=e}commit(){for(;oe(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=N,r(this)}if(this.__pendingValue===N)return;const e=this.__pendingValue,t=this.value,i=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=e!=null&&(t==null||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=oi(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=N}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const oi=s=>s&&(Lt?{capture:s.capture,passive:s.passive,once:s.once}:s.capture);/**
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
 */class li{handleAttributeExpressions(e,t,i,n){const r=t[0];return r==="."?new ni(e,t.slice(1),i).parts:r==="@"?[new ri(e,t.slice(1),n.eventContext)]:r==="?"?[new ii(e,t.slice(1),i)]:new Ut(e,t,i).parts}handleTextExpression(e){return new Ae(e)}}const ai=new li;/**
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
 */function di(s){let e=at.get(s.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},at.set(s.type,e));let t=e.stringsArray.get(s.strings);if(t!==void 0)return t;const i=s.strings.join(I);return t=e.keyString.get(i),t===void 0&&(t=new Qt(s,s.getTemplateElement()),e.keyString.set(i,t)),e.stringsArray.set(s.strings,t),t}const at=new Map;/**
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
 */const dt=new WeakMap,ui=(s,e,t)=>{let i=dt.get(e);i===void 0&&(Pt(e,e.firstChild),dt.set(e,i=new Ae(Object.assign({templateFactory:di},t))),i.appendInto(e)),i.setValue(s),i.commit()};/**
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
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const ci=(s,...e)=>new Ht(s,e,"html",ai);/*! *****************************************************************************
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
***************************************************************************** */function d(s,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var l=s.length-1;l>=0;l--)(o=s[l])&&(r=(n<3?o(r):n>3?o(e,t,r):o(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=window,Ye=fe.ShadowRoot&&(fe.ShadyCSS===void 0||fe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qe=Symbol(),ut=new WeakMap;class Vt{constructor(e,t,i){if(this._$cssResult$=!0,i!==Qe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ye&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ut.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ut.set(t,e))}return e}toString(){return this.cssText}}const hi=s=>new Vt(typeof s=="string"?s:s+"",void 0,Qe),pi=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,n,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[r+1],s[0]);return new Vt(t,s,Qe)},vi=(s,e)=>{Ye?s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),n=fe.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,s.appendChild(i)})},ct=Ye?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return hi(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ce;const ge=window,ht=ge.trustedTypes,fi=ht?ht.emptyScript:"",pt=ge.reactiveElementPolyfillSupport,Be={toAttribute(s,e){switch(e){case Boolean:s=s?fi:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Ft=(s,e)=>e!==s&&(e==e||s==s),Te={attribute:!0,type:String,converter:Be,reflect:!1,hasChanged:Ft},je="finalized";class W extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const n=this._$Ep(i,t);n!==void 0&&(this._$Ev.set(n,i),e.push(n))}),e}static createProperty(e,t=Te){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const r=this[e];this[t]=n,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Te}static finalize(){if(this.hasOwnProperty(je))return!1;this[je]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of i)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(ct(n))}else e!==void 0&&t.push(ct(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return vi(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Te){var n;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Be).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const n=this.constructor,r=n._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=n.getPropertyOptions(r),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:Be;this._$El=r,this[r]=l.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let n=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Ft)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,r)=>this[r]=n),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(i)):this._$Ek()}catch(n){throw t=!1,this._$Ek(),n}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}W[je]=!0,W.elementProperties=new Map,W.elementStyles=[],W.shadowRootOptions={mode:"open"},pt==null||pt({ReactiveElement:W}),((Ce=ge.reactiveElementVersions)!==null&&Ce!==void 0?Ce:ge.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Re;const _e=window,J=_e.trustedTypes,vt=J?J.createPolicy("lit-html",{createHTML:s=>s}):void 0,ze="$lit$",H=`lit$${(Math.random()+"").slice(9)}$`,Dt="?"+H,gi=`<${Dt}>`,z=document,me=()=>z.createComment(""),le=s=>s===null||typeof s!="object"&&typeof s!="function",Bt=Array.isArray,_i=s=>Bt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Pe=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,gt=/>/g,V=RegExp(`>|${Pe}(?:([^\\s"'>=/]+)(${Pe}*=${Pe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_t=/'/g,mt=/"/g,jt=/^(?:script|style|textarea|title)$/i,ae=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),wt=new WeakMap,D=z.createTreeWalker(z,129,null,!1);function zt(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return vt!==void 0?vt.createHTML(e):e}const mi=(s,e)=>{const t=s.length-1,i=[];let n,r=e===2?"<svg>":"",o=Q;for(let l=0;l<t;l++){const a=s[l];let u,v,c=-1,p=0;for(;p<a.length&&(o.lastIndex=p,v=o.exec(a),v!==null);)p=o.lastIndex,o===Q?v[1]==="!--"?o=ft:v[1]!==void 0?o=gt:v[2]!==void 0?(jt.test(v[2])&&(n=RegExp("</"+v[2],"g")),o=V):v[3]!==void 0&&(o=V):o===V?v[0]===">"?(o=n!=null?n:Q,c=-1):v[1]===void 0?c=-2:(c=o.lastIndex-v[2].length,u=v[1],o=v[3]===void 0?V:v[3]==='"'?mt:_t):o===mt||o===_t?o=V:o===ft||o===gt?o=Q:(o=V,n=void 0);const f=o===V&&s[l+1].startsWith("/>")?" ":"";r+=o===Q?a+gi:c>=0?(i.push(u),a.slice(0,c)+ze+a.slice(c)+H+f):a+H+(c===-2?(i.push(void 0),l):f)}return[zt(s,r+(s[t]||"<?>")+(e===2?"</svg>":"")),i]};class de{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,o=0;const l=e.length-1,a=this.parts,[u,v]=mi(e,t);if(this.el=de.createElement(u,i),D.currentNode=this.el.content,t===2){const c=this.el.content,p=c.firstChild;p.remove(),c.append(...p.childNodes)}for(;(n=D.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const p of n.getAttributeNames())if(p.endsWith(ze)||p.startsWith(H)){const f=v[o++];if(c.push(p),f!==void 0){const $=n.getAttribute(f.toLowerCase()+ze).split(H),m=/([.?@])?(.*)/.exec(f);a.push({type:1,index:r,name:m[2],strings:$,ctor:m[1]==="."?bi:m[1]==="?"?$i:m[1]==="@"?Ai:Me})}else a.push({type:6,index:r})}for(const p of c)n.removeAttribute(p)}if(jt.test(n.tagName)){const c=n.textContent.split(H),p=c.length-1;if(p>0){n.textContent=J?J.emptyScript:"";for(let f=0;f<p;f++)n.append(c[f],me()),D.nextNode(),a.push({type:2,index:++r});n.append(c[p],me())}}}else if(n.nodeType===8)if(n.data===Dt)a.push({type:2,index:r});else{let c=-1;for(;(c=n.data.indexOf(H,c+1))!==-1;)a.push({type:7,index:r}),c+=H.length-1}r++}}static createElement(e,t){const i=z.createElement("template");return i.innerHTML=e,i}}function G(s,e,t=s,i){var n,r,o,l;if(e===ae)return e;let a=i!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[i]:t._$Cl;const u=le(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),u===void 0?a=void 0:(a=new u(s),a._$AT(s,t,i)),i!==void 0?((o=(l=t)._$Co)!==null&&o!==void 0?o:l._$Co=[])[i]=a:t._$Cl=a),a!==void 0&&(e=G(s,a._$AS(s,e.values),a,i)),e}class wi{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:n}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:z).importNode(i,!0);D.currentNode=r;let o=D.nextNode(),l=0,a=0,u=n[0];for(;u!==void 0;){if(l===u.index){let v;u.type===2?v=new Se(o,o.nextSibling,this,e):u.type===1?v=new u.ctor(o,u.name,u.strings,this,e):u.type===6&&(v=new Si(o,this,e)),this._$AV.push(v),u=n[++a]}l!==(u==null?void 0:u.index)&&(o=D.nextNode(),l++)}return D.currentNode=z,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Se{constructor(e,t,i,n){var r;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cp=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),le(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==ae&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):_i(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==x&&le(this._$AH)?this._$AA.nextSibling.data=e:this.$(z.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=de.createElement(zt(n.h,n.h[0]),this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new wi(r,this),l=o.u(this.options);o.v(i),this.$(l),this._$AH=o}}_$AC(e){let t=wt.get(e.strings);return t===void 0&&wt.set(e.strings,t=new de(e)),t}T(e){Bt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new Se(this.k(me()),this.k(me()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Me{constructor(e,t,i,n,r){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const r=this.strings;let o=!1;if(r===void 0)e=G(this,e,t,0),o=!le(e)||e!==this._$AH&&e!==ae,o&&(this._$AH=e);else{const l=e;let a,u;for(e=r[0],a=0;a<r.length-1;a++)u=G(this,l[i+a],t,a),u===ae&&(u=this._$AH[a]),o||(o=!le(u)||u!==this._$AH[a]),u===x?e=x:e!==x&&(e+=(u!=null?u:"")+r[a+1]),this._$AH[a]=u}o&&!n&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class bi extends Me{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}}const yi=J?J.emptyScript:"";class $i extends Me{constructor(){super(...arguments),this.type=4}j(e){e&&e!==x?this.element.setAttribute(this.name,yi):this.element.removeAttribute(this.name)}}class Ai extends Me{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=G(this,e,t,0))!==null&&i!==void 0?i:x)===ae)return;const n=this._$AH,r=e===x&&n!==x||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==x&&(n===x||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Si{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const bt=_e.litHtmlPolyfillSupport;bt==null||bt(de,Se),((Re=_e.litHtmlVersions)!==null&&Re!==void 0?Re:_e.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Oe;const we=window,Z=we.trustedTypes,yt=Z?Z.createPolicy("lit-html",{createHTML:s=>s}):void 0,qe="$lit$",U=`lit$${(Math.random()+"").slice(9)}$`,qt="?"+U,Mi=`<${qt}>`,q=document,ue=()=>q.createComment(""),ce=s=>s===null||typeof s!="object"&&typeof s!="function",Wt=Array.isArray,xi=s=>Wt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",He=`[ 	
\f\r]`,ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$t=/-->/g,At=/>/g,F=RegExp(`>|${He}(?:([^\\s"'>=/]+)(${He}*=${He}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),St=/'/g,Mt=/"/g,Jt=/^(?:script|style|textarea|title)$/i,Ei=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),M=Ei(1),K=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),xt=new WeakMap,B=q.createTreeWalker(q,129,null,!1);function Gt(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return yt!==void 0?yt.createHTML(e):e}const ki=(s,e)=>{const t=s.length-1,i=[];let n,r=e===2?"<svg>":"",o=ee;for(let l=0;l<t;l++){const a=s[l];let u,v,c=-1,p=0;for(;p<a.length&&(o.lastIndex=p,v=o.exec(a),v!==null);)p=o.lastIndex,o===ee?v[1]==="!--"?o=$t:v[1]!==void 0?o=At:v[2]!==void 0?(Jt.test(v[2])&&(n=RegExp("</"+v[2],"g")),o=F):v[3]!==void 0&&(o=F):o===F?v[0]===">"?(o=n!=null?n:ee,c=-1):v[1]===void 0?c=-2:(c=o.lastIndex-v[2].length,u=v[1],o=v[3]===void 0?F:v[3]==='"'?Mt:St):o===Mt||o===St?o=F:o===$t||o===At?o=ee:(o=F,n=void 0);const f=o===F&&s[l+1].startsWith("/>")?" ":"";r+=o===ee?a+Mi:c>=0?(i.push(u),a.slice(0,c)+qe+a.slice(c)+U+f):a+U+(c===-2?(i.push(void 0),l):f)}return[Gt(s,r+(s[t]||"<?>")+(e===2?"</svg>":"")),i]};class he{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,o=0;const l=e.length-1,a=this.parts,[u,v]=ki(e,t);if(this.el=he.createElement(u,i),B.currentNode=this.el.content,t===2){const c=this.el.content,p=c.firstChild;p.remove(),c.append(...p.childNodes)}for(;(n=B.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const p of n.getAttributeNames())if(p.endsWith(qe)||p.startsWith(U)){const f=v[o++];if(c.push(p),f!==void 0){const $=n.getAttribute(f.toLowerCase()+qe).split(U),m=/([.?@])?(.*)/.exec(f);a.push({type:1,index:r,name:m[2],strings:$,ctor:m[1]==="."?Ci:m[1]==="?"?Ri:m[1]==="@"?Pi:xe})}else a.push({type:6,index:r})}for(const p of c)n.removeAttribute(p)}if(Jt.test(n.tagName)){const c=n.textContent.split(U),p=c.length-1;if(p>0){n.textContent=Z?Z.emptyScript:"";for(let f=0;f<p;f++)n.append(c[f],ue()),B.nextNode(),a.push({type:2,index:++r});n.append(c[p],ue())}}}else if(n.nodeType===8)if(n.data===qt)a.push({type:2,index:r});else{let c=-1;for(;(c=n.data.indexOf(U,c+1))!==-1;)a.push({type:7,index:r}),c+=U.length-1}r++}}static createElement(e,t){const i=q.createElement("template");return i.innerHTML=e,i}}function X(s,e,t=s,i){var n,r,o,l;if(e===K)return e;let a=i!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[i]:t._$Cl;const u=ce(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),u===void 0?a=void 0:(a=new u(s),a._$AT(s,t,i)),i!==void 0?((o=(l=t)._$Co)!==null&&o!==void 0?o:l._$Co=[])[i]=a:t._$Cl=a),a!==void 0&&(e=X(s,a._$AS(s,e.values),a,i)),e}class Ni{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:n}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:q).importNode(i,!0);B.currentNode=r;let o=B.nextNode(),l=0,a=0,u=n[0];for(;u!==void 0;){if(l===u.index){let v;u.type===2?v=new pe(o,o.nextSibling,this,e):u.type===1?v=new u.ctor(o,u.name,u.strings,this,e):u.type===6&&(v=new Oi(o,this,e)),this._$AV.push(v),u=n[++a]}l!==(u==null?void 0:u.index)&&(o=B.nextNode(),l++)}return B.currentNode=q,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class pe{constructor(e,t,i,n){var r;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cp=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),ce(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==K&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):xi(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==b&&ce(this._$AH)?this._$AA.nextSibling.data=e:this.$(q.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=he.createElement(Gt(n.h,n.h[0]),this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new Ni(r,this),l=o.u(this.options);o.v(i),this.$(l),this._$AH=o}}_$AC(e){let t=xt.get(e.strings);return t===void 0&&xt.set(e.strings,t=new he(e)),t}T(e){Wt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new pe(this.k(ue()),this.k(ue()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class xe{constructor(e,t,i,n,r){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const r=this.strings;let o=!1;if(r===void 0)e=X(this,e,t,0),o=!ce(e)||e!==this._$AH&&e!==K,o&&(this._$AH=e);else{const l=e;let a,u;for(e=r[0],a=0;a<r.length-1;a++)u=X(this,l[i+a],t,a),u===K&&(u=this._$AH[a]),o||(o=!ce(u)||u!==this._$AH[a]),u===b?e=b:e!==b&&(e+=(u!=null?u:"")+r[a+1]),this._$AH[a]=u}o&&!n&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Ci extends xe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}}const Ti=Z?Z.emptyScript:"";class Ri extends xe{constructor(){super(...arguments),this.type=4}j(e){e&&e!==b?this.element.setAttribute(this.name,Ti):this.element.removeAttribute(this.name)}}class Pi extends xe{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=X(this,e,t,0))!==null&&i!==void 0?i:b)===K)return;const n=this._$AH,r=e===b&&n!==b||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==b&&(n===b||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Oi{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const Et=we.litHtmlPolyfillSupport;Et==null||Et(he,pe),((Oe=we.litHtmlVersions)!==null&&Oe!==void 0?Oe:we.litHtmlVersions=[]).push("2.8.0");const Hi=(s,e,t)=>{var i,n;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const l=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=o=new pe(e.insertBefore(ue(),l),l,void 0,t!=null?t:{})}return o._$AI(s),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ue,Ie;class ne extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Hi(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return K}}ne.finalized=!0,ne._$litElement$=!0,(Ue=globalThis.litElementHydrateSupport)===null||Ue===void 0||Ue.call(globalThis,{LitElement:ne});const kt=globalThis.litElementPolyfillSupport;kt==null||kt({LitElement:ne});((Ie=globalThis.litElementVersions)!==null&&Ie!==void 0?Ie:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ui=s=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(s,e):((t,i)=>{const{kind:n,elements:r}=i;return{kind:n,elements:r,finisher(o){customElements.define(t,o)}}})(s,e);/**
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
 */const Fi=({finisher:s,descriptor:e})=>(t,i)=>{var n;if(i===void 0){const r=(n=t.originalKey)!==null&&n!==void 0?n:t.key,o=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(t.key)}:{...t,key:r};return s!=null&&(o.finisher=function(l){s(l,r)}),o}{const r=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),s==null||s(r,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function R(s,e){return Fi({descriptor:t=>{const i={get(){var n,r;return(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(s))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const n=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var r,o;return this[n]===void 0&&(this[n]=(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(s))!==null&&o!==void 0?o:null),this[n]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Le;((Le=window.HTMLSlotElement)===null||Le===void 0?void 0:Le.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Di(s,e){if(s!==void 0){let t=0;for(const i of s)yield e(i,t++)}}function h(s){let e,t,i;return typeof s=="object"?(e=s.hashFunction,t=s.expiring,i=s.tags):e=s,(n,r,o)=>{if(o.value!=null)o.value=Nt(o.value,e,t,i);else if(o.get!=null)o.get=Nt(o.get,e,t,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Ve=new Map;function Nt(s,e,t=0,i){const n=Symbol("__memoized_map__");return function(...r){let o;this.hasOwnProperty(n)||Object.defineProperty(this,n,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let l=this[n];if(Array.isArray(i))for(const a of i)Ve.has(a)?Ve.get(a).push(l):Ve.set(a,[l]);if(e||r.length>0||t>0){let a;e===!0?a=r.map(c=>c.toString()).join("!"):e?a=e.apply(this,r):a=r[0];const u=`${a}__timestamp`;let v=!1;if(t>0)if(!l.has(u))v=!0;else{let c=l.get(u);v=Date.now()-c>t}l.has(a)&&!v?o=l.get(a):(o=s.apply(this,r),l.set(a,o),t>0&&l.set(u,Date.now()))}else{const a=this;l.has(a)?o=l.get(a):(o=s.apply(this,r),l.set(a,o))}return o}}var se;(function(s){s[s.COUNT=0]="COUNT",s[s.ALPHABETICAL=1]="ALPHABETICAL",s[s.NUMERIC=2]="NUMERIC"})(se||(se={}));class Zt{constructor(e){this.buckets=e.buckets,this.doc_count_error_upper_bound=e.doc_count_error_upper_bound,this.sum_other_doc_count=e.sum_other_doc_count,this.first_bucket_key=e.first_bucket_key,this.last_bucket_key=e.last_bucket_key,this.number_buckets=e.number_buckets,this.interval=e.interval}getSortedBuckets(e){const t=[...this.buckets];if(this.isRawNumberBuckets(t))return t;const i=new Intl.Collator;switch(e){case se.ALPHABETICAL:return t.sort((n,r)=>i.compare(n.key.toString(),r.key.toString()));case se.NUMERIC:return t.sort((n,r)=>Number(r.key)-Number(n.key));case se.COUNT:default:return t}}isRawNumberBuckets(e){return typeof this.buckets[0]=="number"}}d([h()],Zt.prototype,"getSortedBuckets",null);class We{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:Boolean(e)}}We.shared=new We;class be{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}be.shared=new be;class Je{parseValue(e){return be.shared.parseValue(e)}}Je.shared=new Je;class Ge{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const i=Date.parse(t);if(Number.isNaN(i))return;let n=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(n=new Date(n.getTime()+n.getTimezoneOffset()*1e3*60)),n}}Ge.shared=new Ge;class Ze{parseValue(e){if(typeof e=="string")return e}}Ze.shared=new Ze;class Ke{parseValue(e){return String(e)}}Ke.shared=new Ke;class L{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){if(this.rawValue===void 0)return[];const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(i=>{const n=this.parser.parseValue(i);Array.isArray(n)?t.push(...n):n!==void 0&&t.push(n)}),t}}d([h()],L.prototype,"values",null);d([h()],L.prototype,"value",null);class ie extends L{constructor(e){super(We.shared,e)}}class Ct extends L{constructor(e){super(Je.shared,e)}}class k extends L{constructor(e){super(Ge.shared,e)}}class et extends L{constructor(e){super(Ze.shared,e)}}class E extends L{constructor(e){super(be.shared,e)}}class _ extends L{constructor(e){super(Ke.shared,e)}}class g{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.identifier}get addeddate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.addeddate?new k(this.rawMetadata.fields.addeddate):void 0}get avg_rating(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.avg_rating)!=null?new E(this.rawMetadata.fields.avg_rating):void 0}get collection(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection?new _(this.rawMetadata.fields.collection):void 0}get collection_files_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.collection_files_count)!=null?new E(this.rawMetadata.fields.collection_files_count):void 0}get collection_size(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.collection_size)!=null?new Ct(this.rawMetadata.fields.collection_size):void 0}get creator(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.creator?new _(this.rawMetadata.fields.creator):void 0}get date(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date?new k(this.rawMetadata.fields.date):void 0}get description(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.description?new _(this.rawMetadata.fields.description):void 0}get downloads(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.downloads)!=null?new E(this.rawMetadata.fields.downloads):void 0}get files_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.files_count)!=null?new E(this.rawMetadata.fields.files_count):void 0}get genre(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.genre?new _(this.rawMetadata.fields.genre):void 0}get indexflag(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.indexflag?new _(this.rawMetadata.fields.indexflag):void 0}get issue(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.issue?new _(this.rawMetadata.fields.issue):void 0}get item_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.item_count)!=null?new E(this.rawMetadata.fields.item_count):void 0}get item_size(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.item_size)!=null?new Ct(this.rawMetadata.fields.item_size):void 0}get language(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.language?new _(this.rawMetadata.fields.language):void 0}get lending___available_to_borrow(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_borrow)!=null?new ie(this.rawMetadata.fields.lending___available_to_borrow):void 0}get lending___available_to_browse(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_browse)!=null?new ie(this.rawMetadata.fields.lending___available_to_browse):void 0}get lending___available_to_waitlist(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_waitlist)!=null?new ie(this.rawMetadata.fields.lending___available_to_waitlist):void 0}get lending___status(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.lending___status?new _(this.rawMetadata.fields.lending___status):void 0}get licenseurl(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.licenseurl?new _(this.rawMetadata.fields.licenseurl):void 0}get mediatype(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.mediatype?new et(this.rawMetadata.fields.mediatype):void 0}get month(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.month)!=null?new E(this.rawMetadata.fields.month):void 0}get noindex(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.noindex)!=null?new ie(this.rawMetadata.fields.noindex):void 0}get num_favorites(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.num_favorites)!=null?new E(this.rawMetadata.fields.num_favorites):void 0}get num_reviews(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.num_reviews)!=null?new E(this.rawMetadata.fields.num_reviews):void 0}get publicdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.publicdate?new k(this.rawMetadata.fields.publicdate):void 0}get reviewdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.reviewdate?new k(this.rawMetadata.fields.reviewdate):void 0}get review(){var e;const t=(e=this.rawMetadata)===null||e===void 0?void 0:e.review;return t?{body:t.reviewbody,title:t.reviewtitle,author:t.reviewer,authorItem:t.reviewer_itemname,updatedate:new Date(t.reviewdate),createdate:new Date(t.createdate),stars:Number(t.stars)||0,__href__:t.__href__}:void 0}get source(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.source?new _(this.rawMetadata.fields.source):void 0}get subject(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.subject?new _(this.rawMetadata.fields.subject):void 0}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new _(this.rawMetadata.fields.title):void 0}get type(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.type?new _(this.rawMetadata.fields.type):void 0}get volume(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.volume?new _(this.rawMetadata.fields.volume):void 0}get week(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.week)!=null?new E(this.rawMetadata.fields.week):void 0}get year(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.year)!=null?new E(this.rawMetadata.fields.year):void 0}}d([h()],g.prototype,"addeddate",null);d([h()],g.prototype,"avg_rating",null);d([h()],g.prototype,"collection",null);d([h()],g.prototype,"collection_files_count",null);d([h()],g.prototype,"collection_size",null);d([h()],g.prototype,"creator",null);d([h()],g.prototype,"date",null);d([h()],g.prototype,"description",null);d([h()],g.prototype,"downloads",null);d([h()],g.prototype,"files_count",null);d([h()],g.prototype,"genre",null);d([h()],g.prototype,"indexflag",null);d([h()],g.prototype,"issue",null);d([h()],g.prototype,"item_count",null);d([h()],g.prototype,"item_size",null);d([h()],g.prototype,"language",null);d([h()],g.prototype,"lending___available_to_borrow",null);d([h()],g.prototype,"lending___available_to_browse",null);d([h()],g.prototype,"lending___available_to_waitlist",null);d([h()],g.prototype,"lending___status",null);d([h()],g.prototype,"licenseurl",null);d([h()],g.prototype,"mediatype",null);d([h()],g.prototype,"month",null);d([h()],g.prototype,"noindex",null);d([h()],g.prototype,"num_favorites",null);d([h()],g.prototype,"num_reviews",null);d([h()],g.prototype,"publicdate",null);d([h()],g.prototype,"reviewdate",null);d([h()],g.prototype,"review",null);d([h()],g.prototype,"source",null);d([h()],g.prototype,"subject",null);d([h()],g.prototype,"title",null);d([h()],g.prototype,"type",null);d([h()],g.prototype,"volume",null);d([h()],g.prototype,"week",null);d([h()],g.prototype,"year",null);class w{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.identifier}get highlight(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.highlight)===null||t===void 0)&&t.text?new _(this.rawMetadata.highlight.text):void 0}get addeddate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.addeddate?new k(this.rawMetadata.fields.addeddate):void 0}get avg_rating(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.avg_rating)!=null?new E(this.rawMetadata.fields.avg_rating):void 0}get collection(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection?new _(this.rawMetadata.fields.collection):void 0}get created_on(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.created_on?new k(this.rawMetadata.fields.created_on):void 0}get creator(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.creator?new _(this.rawMetadata.fields.creator):void 0}get date(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date?new k(this.rawMetadata.fields.date):void 0}get description(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.description?new _(this.rawMetadata.fields.description):void 0}get downloads(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.downloads)!=null?new E(this.rawMetadata.fields.downloads):void 0}get filename(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.filename?new _(this.rawMetadata.fields.filename):void 0}get file_basename(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.file_basename?new _(this.rawMetadata.fields.file_basename):void 0}get file_creation_mtime(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.file_creation_mtime)!=null?new E(this.rawMetadata.fields.file_creation_mtime):void 0}get issue(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.issue?new _(this.rawMetadata.fields.issue):void 0}get mediatype(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.mediatype?new et(this.rawMetadata.fields.mediatype):void 0}get page_num(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.page_num)!=null?new E(this.rawMetadata.fields.page_num):void 0}get publicdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.publicdate?new k(this.rawMetadata.fields.publicdate):void 0}get result_in_subfile(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.result_in_subfile)!=null?new ie(this.rawMetadata.fields.result_in_subfile):void 0}get reviewdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.reviewdate?new k(this.rawMetadata.fields.reviewdate):void 0}get source(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.source?new _(this.rawMetadata.fields.source):void 0}get subject(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.subject?new _(this.rawMetadata.fields.subject):void 0}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new _(this.rawMetadata.fields.title):void 0}get updated_on(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.updated_on?new k(this.rawMetadata.fields.updated_on):void 0}get year(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.year)!=null?new E(this.rawMetadata.fields.year):void 0}get __href__(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new _(this.rawMetadata.fields.__href__):void 0}}d([h()],w.prototype,"highlight",null);d([h()],w.prototype,"addeddate",null);d([h()],w.prototype,"avg_rating",null);d([h()],w.prototype,"collection",null);d([h()],w.prototype,"created_on",null);d([h()],w.prototype,"creator",null);d([h()],w.prototype,"date",null);d([h()],w.prototype,"description",null);d([h()],w.prototype,"downloads",null);d([h()],w.prototype,"filename",null);d([h()],w.prototype,"file_basename",null);d([h()],w.prototype,"file_creation_mtime",null);d([h()],w.prototype,"issue",null);d([h()],w.prototype,"mediatype",null);d([h()],w.prototype,"page_num",null);d([h()],w.prototype,"publicdate",null);d([h()],w.prototype,"result_in_subfile",null);d([h()],w.prototype,"reviewdate",null);d([h()],w.prototype,"source",null);d([h()],w.prototype,"subject",null);d([h()],w.prototype,"title",null);d([h()],w.prototype,"updated_on",null);d([h()],w.prototype,"year",null);d([h()],w.prototype,"__href__",null);class ve{constructor(e){this.rawMetadata=e}get identifier(){var e;return(e=this.rawMetadata)===null||e===void 0?void 0:e.fields.query}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new _(this.rawMetadata.fields.title):void 0}get query(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.query?new _(this.rawMetadata.fields.query):void 0}get date_favorited(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date_favorited?new k(this.rawMetadata.fields.date_favorited):void 0}get __href__(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new _(this.rawMetadata.fields.__href__):void 0}}d([h()],ve.prototype,"title",null);d([h()],ve.prototype,"query",null);d([h()],ve.prototype,"date_favorited",null);d([h()],ve.prototype,"__href__",null);class Ee{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.url}get mediatype(){return new et("web")}get title(){var e,t,i;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.url?new _((i=this.rawMetadata.fields)===null||i===void 0?void 0:i.url):void 0}get capture_dates(){var e,t,i;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.capture_dates?new k((i=this.rawMetadata.fields)===null||i===void 0?void 0:i.capture_dates):void 0}get __href__(){var e,t,i;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new _((i=this.rawMetadata.fields)===null||i===void 0?void 0:i.__href__):void 0}}d([h()],Ee.prototype,"title",null);d([h()],Ee.prototype,"capture_dates",null);d([h()],Ee.prototype,"__href__",null);const Bi=["loans","waitlist","loan_history"];function ji(s){const e=s.slice(0,4),t=s.slice(4,6),i=s.slice(6,8),n=s.slice(8,10),r=s.slice(10,12),o=s.slice(12,14);return`${e}-${t}-${i}T${n}:${r}:${o}Z`}function zi(s){var e;const t=[];for(const i of s){if(!(!((e=i.captures)===null||e===void 0)&&e.length))continue;const n=encodeURIComponent(i.url),r=`https://web.archive.org/web/${i.captures[0]}/${n}`;t.push({hit_type:"web_archive",fields:{url:i.url,capture_dates:i.captures.map(o=>ji(o)),__href__:r}})}return t}class ye{constructor(e,t){var i,n,r,o,l,a,u,v,c,p,f,$,m,C;this.schema=t;const P=t==null?void 0:t.hit_type;let A;e!=null&&e.page_elements&&(this.pageElements=e.page_elements,A=Object.values(this.pageElements)[0]);let S=(i=e==null?void 0:e.hits)===null||i===void 0?void 0:i.hits;this.totalResults=(r=(n=e==null?void 0:e.hits)===null||n===void 0?void 0:n.total)!==null&&r!==void 0?r:0,this.returnedCount=(l=(o=e==null?void 0:e.hits)===null||o===void 0?void 0:o.returned)!==null&&l!==void 0?l:0,!(S!=null&&S.length)&&((a=A==null?void 0:A.hits)===null||a===void 0?void 0:a.hits)?(S=A.hits.hits,this.totalResults=(u=A.hits.total)!==null&&u!==void 0?u:0,this.returnedCount=(v=A.hits.returned)!==null&&v!==void 0?v:0):!((c=this.pageElements)===null||c===void 0)&&c.lending?S=this.handleLendingPageElement(P):!((p=this.pageElements)===null||p===void 0)&&p.web_archives&&(S=this.handleWebArchivesPageElement()),this.results=(f=S==null?void 0:S.map(tt=>{var Ne;return ye.createResult((Ne=tt.hit_type)!==null&&Ne!==void 0?Ne:P,tt)}))!==null&&f!==void 0?f:[];let ke=e==null?void 0:e.aggregations;!(this.aggregations&&Object.keys(this.aggregations).length>0)&&(A==null?void 0:A.aggregations)&&(ke=A.aggregations),ke&&this.buildAggregations(ke),e!=null&&e.collection_titles&&(this.collectionTitles=($=e.collection_titles)!==null&&$!==void 0?$:{}),e!=null&&e.collection_extra_info&&(this.collectionExtraInfo=(m=e.collection_extra_info)!==null&&m!==void 0?m:null),e!=null&&e.account_extra_info&&(this.accountExtraInfo=(C=e.account_extra_info)!==null&&C!==void 0?C:null)}buildAggregations(e){this.aggregations=Object.entries(e).reduce((t,[i,n])=>(t[i]=new Zt(n),t),{})}handleLendingPageElement(e){var t,i,n;const r=(t=this.pageElements)===null||t===void 0?void 0:t.lending,o=(i=r.loans)!==null&&i!==void 0?i:[];this.totalResults=o.length,this.returnedCount=this.totalResults;for(const l of Bi)r[l]=(n=r[l].map(a=>{var u;return ye.createResult((u=a.hit_type)!==null&&u!==void 0?u:e,a)}))!==null&&n!==void 0?n:[];return o}handleWebArchivesPageElement(){var e;const t=zi((e=this.pageElements)===null||e===void 0?void 0:e.web_archives);return this.totalResults=t.length,this.returnedCount=this.totalResults,t}static createResult(e,t){switch(e){case"item":return new g(t);case"text":return new w(t);case"favorited_search":return new ve(t);case"web_archive":return new Ee(t);default:return new g(t)}}}class qi{constructor(e){this.clientParameters=e.client_parameters,this.backendRequests=e.backend_requests,this.kind=e.kind}}class Wi{constructor(e){var t,i,n;this.rawResponse=e,this.request=new qi(e.request),this.responseHeader=(t=e.response)===null||t===void 0?void 0:t.header,this.sessionContext=e.session_context,this.response=new ye((i=e.response)===null||i===void 0?void 0:i.body,(n=e.response)===null||n===void 0?void 0:n.hit_schema)}}var j;(function(s){s[s.METADATA=0]="METADATA",s[s.FULLTEXT=1]="FULLTEXT"})(j||(j={}));class $e{static aggregateSearchParamsAsString(e){if(e.omit)return"false";if(e.advancedParams){const t=e.advancedParams.map(n=>({terms:n}));return JSON.stringify(t)}if(e.simpleParams)return e.simpleParams.join(",")}static sortParamsAsString(e){return`${e.field}:${e.direction}`}static filterParamsAsString(e){return JSON.stringify(e)}static generateURLSearchParams(e){const t=new URLSearchParams;if(t.append("user_query",e.query),e.pageType&&t.append("page_type",String(e.pageType)),e.pageTarget&&t.append("page_target",String(e.pageTarget)),e.pageElements&&e.pageElements.length>0){const r=`[${e.pageElements.map(o=>`"${o}"`).join(",")}]`;t.append("page_elements",r)}if(e.rows!=null&&t.append("hits_per_page",String(e.rows)),e.page!=null&&t.append("page",String(e.page)),e.fields&&e.fields.length>0&&t.append("fields",e.fields.join(",")),e.filters&&Object.keys(e.filters).length>0){const n=this.filterParamsAsString(e.filters);n&&n!=="{}"&&t.append("filter_map",n)}if(e.sort&&e.sort.length>0){const n=e.sort.map(r=>this.sortParamsAsString(r));t.append("sort",n.join(","))}const i=e.aggregations;if(i){const n=this.aggregateSearchParamsAsString(i);n&&t.append("aggregations",n)}if(e.aggregationsSize!=null&&t.append("aggregations_size",String(e.aggregationsSize)),e.debugging&&t.append("debugging","true"),e.uid&&t.append("uid",e.uid),e.includeClientUrl!==!1){const n=window.location.href.slice(0,400);e.query.length<=1e3&&t.append("client_url",n)}return t}}var re;(function(s){s.networkError="SearchService.NetworkError",s.itemNotFound="SearchService.ItemNotFound",s.decodingError="SearchService.DecodingError",s.searchEngineError="SearchService.SearchEngineError"})(re||(re={}));class Ji extends Error{constructor(e,t,i){super(t),this.name=e,this.type=e,this.details=i}}const Tt={reCache:JSON.stringify({recompute:!0}),noCache:JSON.stringify({bypass:!0}),dontCache:JSON.stringify({no_compute:!0})};class Kt{constructor(e){var t,i;this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null;const n=new URL(window.location.href).searchParams,r=n.get("scope"),o=n.get("verbose"),l=n.get("debugging"),a=n.get("cacheDebug");let u="";for(const v of Object.keys(Tt))if(n.get(v)){u=Tt[v];break}u=(i=n.get("caching"))!==null&&i!==void 0?i:u,(e==null?void 0:e.caching)!==void 0?this.cachingFlags=e.caching:u&&(this.cachingFlags=u),(e==null?void 0:e.debuggingEnabled)!==void 0?this.debuggingEnabled=e.debuggingEnabled:(l||a)&&(this.debuggingEnabled=!0),(e==null?void 0:e.scope)!==void 0?this.requestScope=e.scope:r&&(this.requestScope=r),(e==null?void 0:e.verbose)!==void 0?this.verbose=e.verbose:o&&(this.verbose=!!o)}async fetchUrl(e,t){var i,n;const r=new URL(e);this.requestScope&&r.searchParams.set("scope",this.requestScope),this.cachingFlags&&r.searchParams.set("caching",this.cachingFlags);let o;try{const l=(i=t==null?void 0:t.requestOptions)!==null&&i!==void 0?i:{credentials:this.includeCredentials?"include":"same-origin"};o=await fetch(r.href,l)}catch(l){const a=l instanceof Error?l.message:typeof l=="string"?l:"Unknown error";return this.getErrorResult(re.networkError,a)}try{const l=await o.json();this.verbose&&this.printResponse(l),l.debugging&&this.printDebuggingInfo(l);const a=(n=l.response)===null||n===void 0?void 0:n.error;return a?this.getErrorResult(re.searchEngineError,a.message,a.forensics):{success:l}}catch(l){const a=l instanceof Error?l.message:typeof l=="string"?l:"Unknown error";return this.getErrorResult(re.decodingError,a)}}getErrorResult(e,t,i){return{error:new Ji(e,t,i)}}printResponse(e){var t,i,n,r,o;try{const l=JSON.parse(JSON.stringify(e)),a=(n=(i=(t=l==null?void 0:l.response)===null||t===void 0?void 0:t.body)===null||i===void 0?void 0:i.hits)===null||n===void 0?void 0:n.hits;if(Array.isArray(a)&&a.length>1){const v=[];v.push(a[0]),v.push(`*** ${a.length-1} hits omitted ***`),l.response.body.hits.hits=v}const u=(o=(r=l==null?void 0:l.response)===null||r===void 0?void 0:r.body)===null||o===void 0?void 0:o.aggregations;u&&Object.entries(u).forEach(([v,c])=>{var p,f,$;if(((p=c==null?void 0:c.buckets)===null||p===void 0?void 0:p.length)>0){const m=JSON.parse(JSON.stringify(c));m.buckets=`*** ${($=(f=m.buckets)===null||f===void 0?void 0:f.length)!==null&&$!==void 0?$:0} buckets omitted ***`,l.response.body.aggregations[v]=m}}),console.log("***** RESPONSE RECEIVED *****"),console.groupCollapsed("Response"),console.log(JSON.stringify(l,null,2)),console.groupEnd()}catch(l){console.error("Error printing search response:",l)}}printDebuggingInfo(e){var t,i;const n=e.debugging,r=(t=n.messages)!==null&&t!==void 0?t:[],o=(i=n.data)!==null&&i!==void 0?i:{};console.log("***** BEGIN DEBUGGING *****"),console.log("Full response:"),console.log(JSON.stringify(e,null,2)),console.group("Debug messages");for(const l of r)console.log(l);console.groupEnd(),console.group("Debug data");for(const[l,a]of Object.entries(o))console.log(l,a);console.groupEnd(),console.log("***** END DEBUGGING *****")}}class Gi extends Kt{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=$e.generateURLSearchParams(e).toString(),n=`https://${this.baseUrl}${this.servicePath}/?service_backend=fts&${i}`;return this.fetchUrl(n)}}class Zi extends Kt{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=$e.generateURLSearchParams(e).toString(),n=`https://${this.baseUrl}${this.servicePath}/?${i}`;return this.fetchUrl(n)}}class Y{constructor(e={}){this.backendOptions=e}async search(e,t=j.METADATA){const n=await Y.getBackendForSearchType(t,this.backendOptions).performSearch(e);return n.error?n:{success:new Wi(n.success)}}static getBackendForSearchType(e,t={}){switch(e){case j.FULLTEXT:return new Gi(t);case j.METADATA:default:return new Zi(t)}}}Y.default=new Y;d([h((s,e={})=>{const{includeCredentials:t=!1,verbose:i=!1,scope:n="",baseUrl:r=""}=e;return`${s};${t};${i};${n};${r}`})],Y,"getBackendForSearchType",null);class Rt{constructor(){this.filterMap={}}addFilter(e,t,i){if(this.filterMap[e]||(this.filterMap[e]={}),this.filterMap[e][t]){const n=[].concat(this.filterMap[e][t],i);this.filterMap[e][t]=Array.from(new Set(n))}else this.filterMap[e][t]=i;return this}removeSingleFilter(e,t,i){var n;if(!(!((n=this.filterMap[e])===null||n===void 0)&&n[t]))return this;const r=[].concat(this.filterMap[e][t]),o=r.indexOf(i);return o>=0&&r.splice(o,1),this.filterMap[e][t]=r.length===1?r[0]:r,r.length===0&&delete this.filterMap[e][t],this.deleteFieldIfEmpty(e),this}removeFilters(e,t){return this.filterMap[e]?(delete this.filterMap[e][t],this.deleteFieldIfEmpty(e),this):this}deleteFieldIfEmpty(e){const t=this.filterMap[e];t&&Object.keys(t).length===0&&delete this.filterMap[e]}setFilterMap(e){return this.filterMap={...e},this}mergeFilterMap(e){for(const[t,i]of Object.entries(e))for(const[n,r]of Object.entries(i))if(Array.isArray(r))for(const o of r)this.addFilter(t,n,o);else this.addFilter(t,n,r);return this}build(){return this.filterMap}}let y=class extends ne{constructor(){super(...arguments),this.searchServiceUrlOptions=this.initSearchServiceUrlOptions(),this.filterMap={},this.loadingSearchResults=!1,this.loadingAggregations=!1,this.defaultAggregationsChecked=!0,this.fullSearchResultsShown=!1,this.searchService=new Y(this.searchServiceUrlOptions)}get searchResults(){var e;return(e=this.searchResponse)===null||e===void 0?void 0:e.response.results}get searchAggregations(){var e;return(e=this.aggregationsResponse)===null||e===void 0?void 0:e.response.aggregations}initSearchServiceUrlOptions(){var e,t,i;const n=new URL(window.location.href).searchParams;return{baseUrl:(e=n.get("search_base_url"))!==null&&e!==void 0?e:"ia-petabox-ximm-pps-feature-include-favorited-searches.archive.org",servicePath:(t=n.get("search_service_path"))!==null&&t!==void 0?t:void 0,debuggingEnabled:(i=!!n.get("debugging"))!==null&&i!==void 0?i:void 0}}render(){var e;return M`
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
    `}filterFieldChanged(e){var t,i;const r=!!e.target.selectedOptions[0].dataset.numeric,o=(i=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelectorAll("#filter-constraint option"))!==null&&i!==void 0?i:[];for(const l of o)l.toggleAttribute("hidden",!r&&!!l.dataset.numeric)}addFilterClicked(){const e=this.filterFieldInput.selectedOptions[0].value,t=this.filterValueInput.value,i=this.filterConstraintInput.selectedOptions[0].value;!e||!i||!t||(this.filterMap=new Rt().setFilterMap(this.filterMap).addFilter(e,t,i).build(),this.filterValueInput.value="")}removeFilterClicked(e){const t=e.target,{field:i,value:n,constraint:r}=t.dataset;i&&n&&r&&(this.filterMap=new Rt().setFilterMap(this.filterMap).removeSingleFilter(i,n,r).build())}get appliedFiltersTemplate(){const e=[];for(const[i,n]of Object.entries(this.filterMap))for(const[r,o]of Object.entries(n))if(Array.isArray(o))for(const l of o)e.push({field:i,value:r,constraint:l});else e.push({field:i,value:r,constraint:o});if(e.length===0)return M`<span>(no filters applied)</span>`;const t={inc:"includes",exc:"excludes",gt:">",gte:">=",lt:"<",lte:"<="};return Di(e,({field:i,value:n,constraint:r})=>M`
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
    `}get snippetsHeaderTemplate(){var e;return!((e=this.searchResults)===null||e===void 0)&&e.some(t=>t.highlight)?M`<th>Snippets</th>`:M`${b}`}snippetTemplate(e){return e.highlight?M`<td>${e.highlight.value}</td>`:M`${b}`}toggleDefaultAggregations(){var e;this.defaultAggregationsChecked=(e=this.defaultAggregationsCheckbox)===null||e===void 0?void 0:e.checked}toggleFullSearchResults(){this.fullSearchResultsShown=!this.fullSearchResultsShown}async search(e){var t;e.preventDefault();const i=this.searchInput.value,n=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector("input[name='search-type']:checked"),r=(n==null?void 0:n.value)==="fts"?j.FULLTEXT:j.METADATA;this.fetchSearchResults(i,r),this.fetchAggregations(i,r)}async fetchSearchResults(e,t){var i,n,r,o,l,a;const u=((i=this.checkedSort)===null||i===void 0?void 0:i.value)==="none"?void 0:[{field:"title",direction:(n=this.checkedSort)===null||n===void 0?void 0:n.value}],v=Number((r=this.rowsInput)===null||r===void 0?void 0:r.value),c=(o=this.debugCheck)===null||o===void 0?void 0:o.checked,p={query:e,rows:v,sort:u,filters:this.filterMap,aggregations:{omit:!0},debugging:c,uid:"demo"};!((l=this.searchWithinCheck)===null||l===void 0)&&l.checked&&(p.pageTarget=e,p.pageType="collection_details"),this.lastSearchParams=decodeURIComponent($e.generateURLSearchParams(p).toString()),this.loadingSearchResults=!0;const f=await this.searchService.search(p,t);this.loadingSearchResults=!1,f!=null&&f.success?this.searchResponse=f==null?void 0:f.success:(alert(`Oh noes: ${(a=f==null?void 0:f.error)===null||a===void 0?void 0:a.message}`),console.error("Error searching",f==null?void 0:f.error))}async fetchAggregations(e,t){var i,n,r,o;const l=(i=this.shadowRoot)===null||i===void 0?void 0:i.querySelectorAll("input[name='aggs']:checked"),a={simpleParams:l?[...l].map(f=>f.value):void 0},u=Number((n=this.numAggsInput)===null||n===void 0?void 0:n.value),v=(r=this.debugCheck)===null||r===void 0?void 0:r.checked,c={query:e,rows:0,filters:this.filterMap,aggregationsSize:u,debugging:v,uid:"demo"};this.defaultAggregationsChecked||(c.aggregations=a),this.lastAggregationParams=decodeURIComponent($e.generateURLSearchParams(c).toString()),this.loadingAggregations=!0;const p=await this.searchService.search(c,t);this.loadingAggregations=!1,p!=null&&p.success?this.aggregationsResponse=p==null?void 0:p.success:(alert(`Oh noes: ${(o=p==null?void 0:p.error)===null||o===void 0?void 0:o.message}`),console.error("Error searching",p==null?void 0:p.error))}static get styles(){return pi`
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
    `}};d([R("#search-input")],y.prototype,"searchInput",void 0);d([R("#search-within-check")],y.prototype,"searchWithinCheck",void 0);d([R("#debug-info-check")],y.prototype,"debugCheck",void 0);d([R("#num-rows")],y.prototype,"rowsInput",void 0);d([R("#num-aggs")],y.prototype,"numAggsInput",void 0);d([R("input[name='sort']:checked")],y.prototype,"checkedSort",void 0);d([R("#filter-field")],y.prototype,"filterFieldInput",void 0);d([R("#filter-constraint")],y.prototype,"filterConstraintInput",void 0);d([R("#filter-value")],y.prototype,"filterValueInput",void 0);d([R("#aggs-default")],y.prototype,"defaultAggregationsCheckbox",void 0);d([T()],y.prototype,"searchServiceUrlOptions",void 0);d([T()],y.prototype,"filterMap",void 0);d([T()],y.prototype,"searchResponse",void 0);d([T()],y.prototype,"aggregationsResponse",void 0);d([T()],y.prototype,"loadingSearchResults",void 0);d([T()],y.prototype,"loadingAggregations",void 0);d([T()],y.prototype,"lastSearchParams",void 0);d([T()],y.prototype,"lastAggregationParams",void 0);d([T()],y.prototype,"defaultAggregationsChecked",void 0);d([T()],y.prototype,"fullSearchResultsShown",void 0);y=d([Ui("app-root")],y);ui(ci`
        <app-root></app-root>
      `,document.querySelector("#demo"));
