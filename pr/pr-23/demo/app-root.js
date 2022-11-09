const It=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};It();/**
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
 */const Vt=new WeakMap,le=n=>typeof n=="function"&&Vt.has(n);/**
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
 */const We=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,bt=(n,e,t=null)=>{for(;e!==t;){const i=e.nextSibling;n.removeChild(e),e=i}};/**
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
 */const x={},Ge={};/**
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
 */const U=`{{lit-${String(Math.random()).slice(2)}}}`,wt=`<!--${U}-->`,Je=new RegExp(`${U}|${wt}`),ie="$lit$";class Dt{constructor(e,t){this.parts=[],this.element=t;const i=[],s=[],r=document.createTreeWalker(t.content,133,null,!1);let l=0,a=-1,o=0;const{strings:u,values:{length:v}}=e;for(;o<v;){const d=r.nextNode();if(d===null){r.currentNode=s.pop();continue}if(a++,d.nodeType===1){if(d.hasAttributes()){const c=d.attributes,{length:g}=c;let S=0;for(let $=0;$<g;$++)Ke(c[$].name,ie)&&S++;for(;S-- >0;){const $=u[o],D=Ue.exec($)[2],B=D.toLowerCase()+ie,H=d.getAttribute(B);d.removeAttribute(B);const N=H.split(Je);this.parts.push({type:"attribute",index:a,name:D,strings:N}),o+=N.length-1}}d.tagName==="TEMPLATE"&&(s.push(d),r.currentNode=d.content)}else if(d.nodeType===3){const c=d.data;if(c.indexOf(U)>=0){const g=d.parentNode,S=c.split(Je),$=S.length-1;for(let D=0;D<$;D++){let B,H=S[D];if(H==="")B=C();else{const N=Ue.exec(H);N!==null&&Ke(N[2],ie)&&(H=H.slice(0,N.index)+N[1]+N[2].slice(0,-ie.length)+N[3]),B=document.createTextNode(H)}g.insertBefore(B,d),this.parts.push({type:"node",index:++a})}S[$]===""?(g.insertBefore(C(),d),i.push(d)):d.data=S[$],o+=$}}else if(d.nodeType===8)if(d.data===U){const c=d.parentNode;(d.previousSibling===null||a===l)&&(a++,c.insertBefore(C(),d)),l=a,this.parts.push({type:"node",index:a}),d.nextSibling===null?d.data="":(i.push(d),a--),o++}else{let c=-1;for(;(c=d.data.indexOf(U,c+1))!==-1;)this.parts.push({type:"node",index:-1}),o++}}for(const d of i)d.parentNode.removeChild(d)}}const Ke=(n,e)=>{const t=n.length-e.length;return t>=0&&n.slice(t)===e},Bt=n=>n.index!==-1,C=()=>document.createComment(""),Ue=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
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
 */class Ze{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)i!==void 0&&i.setValue(e[t]),t++;for(const i of this.__parts)i!==void 0&&i.commit()}_clone(){const e=We?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let r=0,l=0,a,o=s.nextNode();for(;r<i.length;){if(a=i[r],!Bt(a)){this.__parts.push(void 0),r++;continue}for(;l<a.index;)l++,o.nodeName==="TEMPLATE"&&(t.push(o),s.currentNode=o.content),(o=s.nextNode())===null&&(s.currentNode=t.pop(),o=s.nextNode());if(a.type==="node"){const u=this.processor.handleTextExpression(this.options);u.insertAfterNode(o.previousSibling),this.__parts.push(u)}else this.__parts.push(...this.processor.handleAttributeExpressions(o,a.name,a.strings,this.options));r++}return We&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
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
 */const Qe=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:n=>n}),jt=` ${U} `;class At{constructor(e,t,i,s){this.strings=e,this.values=t,this.type=i,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let s=0;s<e;s++){const r=this.strings[s],l=r.lastIndexOf("<!--");i=(l>-1||i)&&r.indexOf("-->",l+1)===-1;const a=Ue.exec(r);a===null?t+=r+(i?jt:wt):t+=r.substr(0,a.index)+a[1]+a[2]+ie+a[3]+U}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return Qe!==void 0&&(t=Qe.createHTML(t)),e.innerHTML=t,e}}/**
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
 */const je=n=>n===null||!(typeof n=="object"||typeof n=="function"),Oe=n=>Array.isArray(n)||!!(n&&n[Symbol.iterator]);class St{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let s=0;s<i.length-1;s++)this.parts[s]=this._createPart()}_createPart(){return new Mt(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(t===1&&e[0]===""&&e[1]===""){const r=i[0].value;if(typeof r=="symbol")return String(r);if(typeof r=="string"||!Oe(r))return r}let s="";for(let r=0;r<t;r++){s+=e[r];const l=i[r];if(l!==void 0){const a=l.value;if(je(a)||!Oe(a))s+=typeof a=="string"?a:String(a);else for(const o of a)s+=typeof o=="string"?o:String(o)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Mt{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==x&&(!je(e)||e!==this.value)&&(this.value=e,le(e)||(this.committer.dirty=!0))}commit(){for(;le(this.value);){const e=this.value;this.value=x,e(this)}this.value!==x&&this.committer.commit()}}class we{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(C()),this.endNode=e.appendChild(C())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=C()),e.__insert(this.endNode=C())}insertAfterPart(e){e.__insert(this.startNode=C()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;le(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=x,t(this)}const e=this.__pendingValue;e!==x&&(je(e)?e!==this.value&&this.__commitText(e):e instanceof At?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Oe(e)?this.__commitIterable(e):e===Ge?(this.value=Ge,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=e==null?"":e;const i=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof Ze&&this.value.template===t)this.value.update(e.values);else{const i=new Ze(t,e.processor,this.options),s=i._clone();i.update(e.values),this.__commitNode(s),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i=0,s;for(const r of e)s=t[i],s===void 0&&(s=new we(this.options),t.push(s),i===0?s.appendIntoPart(this):s.insertAfterPart(t[i-1])),s.setValue(r),s.commit(),i++;i<t.length&&(t.length=i,this.clear(s&&s.endNode))}clear(e=this.startNode){bt(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Ft{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,i.length!==2||i[0]!==""||i[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;le(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=x,t(this)}if(this.__pendingValue===x)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=x}}class zt extends St{constructor(e,t,i){super(e,t,i),this.single=i.length===2&&i[0]===""&&i[1]===""}_createPart(){return new qt(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class qt extends Mt{}let Et=!1;(()=>{try{const n={get capture(){return Et=!0,!1}};window.addEventListener("test",n,n),window.removeEventListener("test",n,n)}catch{}})();class Wt{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=s=>this.handleEvent(s)}setValue(e){this.__pendingValue=e}commit(){for(;le(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=x,r(this)}if(this.__pendingValue===x)return;const e=this.__pendingValue,t=this.value,i=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=e!=null&&(t==null||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=Gt(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=x}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Gt=n=>n&&(Et?{capture:n.capture,passive:n.passive,once:n.once}:n.capture);/**
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
 */class Jt{handleAttributeExpressions(e,t,i,s){const r=t[0];return r==="."?new zt(e,t.slice(1),i).parts:r==="@"?[new Wt(e,t.slice(1),s.eventContext)]:r==="?"?[new Ft(e,t.slice(1),i)]:new St(e,t,i).parts}handleTextExpression(e){return new we(e)}}const Kt=new Jt;/**
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
 */function Zt(n){let e=Xe.get(n.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},Xe.set(n.type,e));let t=e.stringsArray.get(n.strings);if(t!==void 0)return t;const i=n.strings.join(U);return t=e.keyString.get(i),t===void 0&&(t=new Dt(n,n.getTemplateElement()),e.keyString.set(i,t)),e.stringsArray.set(n.strings,t),t}const Xe=new Map;/**
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
 */const Ye=new WeakMap,Qt=(n,e,t)=>{let i=Ye.get(e);i===void 0&&(bt(e,e.firstChild),Ye.set(e,i=new we(Object.assign({templateFactory:Zt},t))),i.appendInto(e)),i.setValue(n),i.commit()};/**
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
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const Xt=(n,...e)=>new At(n,e,"html",Kt);/*! *****************************************************************************
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
***************************************************************************** */function h(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(l=n[a])&&(r=(s<3?l(r):s>3?l(e,t,r):l(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=window,Fe=ve.ShadowRoot&&(ve.ShadyCSS===void 0||ve.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ze=Symbol(),et=new WeakMap;class xt{constructor(e,t,i){if(this._$cssResult$=!0,i!==ze)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Fe&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=et.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&et.set(t,e))}return e}toString(){return this.cssText}}const Yt=n=>new xt(typeof n=="string"?n:n+"",void 0,ze),ei=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new xt(t,n,ze)},ti=(n,e)=>{Fe?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=ve.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},tt=Fe?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Yt(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ee;const fe=window,it=fe.trustedTypes,ii=it?it.emptyScript:"",st=fe.reactiveElementPolyfillSupport,He={toAttribute(n,e){switch(e){case Boolean:n=n?ii:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},kt=(n,e)=>e!==n&&(e==e||n==n),xe={attribute:!0,type:String,converter:He,reflect:!1,hasChanged:kt};class j extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=xe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||xe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(tt(s))}else e!==void 0&&t.push(tt(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ti(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=xe){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const l=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:He).toAttribute(t,i.type);this._$El=e,l==null?this.removeAttribute(r):this.setAttribute(r,l),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const l=s.getPropertyOptions(r),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((i=l.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?l.converter:He;this._$El=r,this[r]=a.fromAttribute(t,l.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||kt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}j.finalized=!0,j.elementProperties=new Map,j.elementStyles=[],j.shadowRootOptions={mode:"open"},st==null||st({ReactiveElement:j}),((Ee=fe.reactiveElementVersions)!==null&&Ee!==void 0?Ee:fe.reactiveElementVersions=[]).push("1.4.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ke;const ge=window,q=ge.trustedTypes,nt=q?q.createPolicy("lit-html",{createHTML:n=>n}):void 0,R=`lit$${(Math.random()+"").slice(9)}$`,Nt="?"+R,si=`<${Nt}>`,W=document,_e=(n="")=>W.createComment(n),oe=n=>n===null||typeof n!="object"&&typeof n!="function",Tt=Array.isArray,ni=n=>Tt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rt=/-->/g,lt=/>/g,L=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,at=/"/g,Ct=/^(?:script|style|textarea|title)$/i,ae=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),dt=new WeakMap,F=W.createTreeWalker(W,129,null,!1),ri=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",l=ee;for(let o=0;o<t;o++){const u=n[o];let v,d,c=-1,g=0;for(;g<u.length&&(l.lastIndex=g,d=l.exec(u),d!==null);)g=l.lastIndex,l===ee?d[1]==="!--"?l=rt:d[1]!==void 0?l=lt:d[2]!==void 0?(Ct.test(d[2])&&(s=RegExp("</"+d[2],"g")),l=L):d[3]!==void 0&&(l=L):l===L?d[0]===">"?(l=s!=null?s:ee,c=-1):d[1]===void 0?c=-2:(c=l.lastIndex-d[2].length,v=d[1],l=d[3]===void 0?L:d[3]==='"'?at:ot):l===at||l===ot?l=L:l===rt||l===lt?l=ee:(l=L,s=void 0);const S=l===L&&n[o+1].startsWith("/>")?" ":"";r+=l===ee?u+si:c>=0?(i.push(v),u.slice(0,c)+"$lit$"+u.slice(c)+R+S):u+R+(c===-2?(i.push(void 0),o):S)}const a=r+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[nt!==void 0?nt.createHTML(a):a,i]};class de{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,l=0;const a=e.length-1,o=this.parts,[u,v]=ri(e,t);if(this.el=de.createElement(u,i),F.currentNode=this.el.content,t===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(s=F.nextNode())!==null&&o.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(R)){const g=v[l++];if(d.push(c),g!==void 0){const S=s.getAttribute(g.toLowerCase()+"$lit$").split(R),$=/([.?@])?(.*)/.exec(g);o.push({type:1,index:r,name:$[2],strings:S,ctor:$[1]==="."?oi:$[1]==="?"?di:$[1]==="@"?ui:Se})}else o.push({type:6,index:r})}for(const c of d)s.removeAttribute(c)}if(Ct.test(s.tagName)){const d=s.textContent.split(R),c=d.length-1;if(c>0){s.textContent=q?q.emptyScript:"";for(let g=0;g<c;g++)s.append(d[g],_e()),F.nextNode(),o.push({type:2,index:++r});s.append(d[c],_e())}}}else if(s.nodeType===8)if(s.data===Nt)o.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf(R,d+1))!==-1;)o.push({type:7,index:r}),d+=R.length-1}r++}}static createElement(e,t){const i=W.createElement("template");return i.innerHTML=e,i}}function G(n,e,t=n,i){var s,r,l,a;if(e===ae)return e;let o=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const u=oe(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==u&&((r=o==null?void 0:o._$AO)===null||r===void 0||r.call(o,!1),u===void 0?o=void 0:(o=new u(n),o._$AT(n,t,i)),i!==void 0?((l=(a=t)._$Co)!==null&&l!==void 0?l:a._$Co=[])[i]=o:t._$Cl=o),o!==void 0&&(e=G(n,o._$AS(n,e.values),o,i)),e}class li{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:W).importNode(i,!0);F.currentNode=r;let l=F.nextNode(),a=0,o=0,u=s[0];for(;u!==void 0;){if(a===u.index){let v;u.type===2?v=new Ae(l,l.nextSibling,this,e):u.type===1?v=new u.ctor(l,u.name,u.strings,this,e):u.type===6&&(v=new ci(l,this,e)),this.u.push(v),u=s[++o]}a!==(u==null?void 0:u.index)&&(l=F.nextNode(),a++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Ae{constructor(e,t,i,s){var r;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),oe(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==ae&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ni(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==w&&oe(this._$AH)?this._$AA.nextSibling.data=e:this.T(W.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=de.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const l=new li(r,this),a=l.v(this.options);l.p(i),this.T(a),this._$AH=l}}_$AC(e){let t=dt.get(e.strings);return t===void 0&&dt.set(e.strings,t=new de(e)),t}k(e){Tt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new Ae(this.O(_e()),this.O(_e()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Se{constructor(e,t,i,s,r){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let l=!1;if(r===void 0)e=G(this,e,t,0),l=!oe(e)||e!==this._$AH&&e!==ae,l&&(this._$AH=e);else{const a=e;let o,u;for(e=r[0],o=0;o<r.length-1;o++)u=G(this,a[i+o],t,o),u===ae&&(u=this._$AH[o]),l||(l=!oe(u)||u!==this._$AH[o]),u===w?e=w:e!==w&&(e+=(u!=null?u:"")+r[o+1]),this._$AH[o]=u}l&&!s&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class oi extends Se{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}}const ai=q?q.emptyScript:"";class di extends Se{constructor(){super(...arguments),this.type=4}j(e){e&&e!==w?this.element.setAttribute(this.name,ai):this.element.removeAttribute(this.name)}}class ui extends Se{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=G(this,e,t,0))!==null&&i!==void 0?i:w)===ae)return;const s=this._$AH,r=e===w&&s!==w||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,l=e!==w&&(s===w||r);r&&this.element.removeEventListener(this.name,this,s),l&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class ci{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const ut=ge.litHtmlPolyfillSupport;ut==null||ut(de,Ae),((ke=ge.litHtmlVersions)!==null&&ke!==void 0?ke:ge.litHtmlVersions=[]).push("2.4.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ne;const me=window,J=me.trustedTypes,ct=J?J.createPolicy("lit-html",{createHTML:n=>n}):void 0,P=`lit$${(Math.random()+"").slice(9)}$`,Rt="?"+P,hi=`<${Rt}>`,K=document,ue=(n="")=>K.createComment(n),ce=n=>n===null||typeof n!="object"&&typeof n!="function",Pt=Array.isArray,pi=n=>Pt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ht=/-->/g,pt=/>/g,I=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vt=/'/g,ft=/"/g,Ut=/^(?:script|style|textarea|title)$/i,vi=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),b=vi(1),Z=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),gt=new WeakMap,z=K.createTreeWalker(K,129,null,!1),fi=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",l=te;for(let o=0;o<t;o++){const u=n[o];let v,d,c=-1,g=0;for(;g<u.length&&(l.lastIndex=g,d=l.exec(u),d!==null);)g=l.lastIndex,l===te?d[1]==="!--"?l=ht:d[1]!==void 0?l=pt:d[2]!==void 0?(Ut.test(d[2])&&(s=RegExp("</"+d[2],"g")),l=I):d[3]!==void 0&&(l=I):l===I?d[0]===">"?(l=s!=null?s:te,c=-1):d[1]===void 0?c=-2:(c=l.lastIndex-d[2].length,v=d[1],l=d[3]===void 0?I:d[3]==='"'?ft:vt):l===ft||l===vt?l=I:l===ht||l===pt?l=te:(l=I,s=void 0);const S=l===I&&n[o+1].startsWith("/>")?" ":"";r+=l===te?u+hi:c>=0?(i.push(v),u.slice(0,c)+"$lit$"+u.slice(c)+P+S):u+P+(c===-2?(i.push(void 0),o):S)}const a=r+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ct!==void 0?ct.createHTML(a):a,i]};class he{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,l=0;const a=e.length-1,o=this.parts,[u,v]=fi(e,t);if(this.el=he.createElement(u,i),z.currentNode=this.el.content,t===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(s=z.nextNode())!==null&&o.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(P)){const g=v[l++];if(d.push(c),g!==void 0){const S=s.getAttribute(g.toLowerCase()+"$lit$").split(P),$=/([.?@])?(.*)/.exec(g);o.push({type:1,index:r,name:$[2],strings:S,ctor:$[1]==="."?_i:$[1]==="?"?yi:$[1]==="@"?$i:Me})}else o.push({type:6,index:r})}for(const c of d)s.removeAttribute(c)}if(Ut.test(s.tagName)){const d=s.textContent.split(P),c=d.length-1;if(c>0){s.textContent=J?J.emptyScript:"";for(let g=0;g<c;g++)s.append(d[g],ue()),z.nextNode(),o.push({type:2,index:++r});s.append(d[c],ue())}}}else if(s.nodeType===8)if(s.data===Rt)o.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf(P,d+1))!==-1;)o.push({type:7,index:r}),d+=P.length-1}r++}}static createElement(e,t){const i=K.createElement("template");return i.innerHTML=e,i}}function Q(n,e,t=n,i){var s,r,l,a;if(e===Z)return e;let o=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const u=ce(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==u&&((r=o==null?void 0:o._$AO)===null||r===void 0||r.call(o,!1),u===void 0?o=void 0:(o=new u(n),o._$AT(n,t,i)),i!==void 0?((l=(a=t)._$Co)!==null&&l!==void 0?l:a._$Co=[])[i]=o:t._$Cl=o),o!==void 0&&(e=Q(n,o._$AS(n,e.values),o,i)),e}class gi{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:K).importNode(i,!0);z.currentNode=r;let l=z.nextNode(),a=0,o=0,u=s[0];for(;u!==void 0;){if(a===u.index){let v;u.type===2?v=new pe(l,l.nextSibling,this,e):u.type===1?v=new u.ctor(l,u.name,u.strings,this,e):u.type===6&&(v=new bi(l,this,e)),this.u.push(v),u=s[++o]}a!==(u==null?void 0:u.index)&&(l=z.nextNode(),a++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class pe{constructor(e,t,i,s){var r;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Q(this,e,t),ce(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==Z&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):pi(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==y&&ce(this._$AH)?this._$AA.nextSibling.data=e:this.T(K.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=he.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const l=new gi(r,this),a=l.v(this.options);l.p(i),this.T(a),this._$AH=l}}_$AC(e){let t=gt.get(e.strings);return t===void 0&&gt.set(e.strings,t=new he(e)),t}k(e){Pt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new pe(this.O(ue()),this.O(ue()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Me{constructor(e,t,i,s,r){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let l=!1;if(r===void 0)e=Q(this,e,t,0),l=!ce(e)||e!==this._$AH&&e!==Z,l&&(this._$AH=e);else{const a=e;let o,u;for(e=r[0],o=0;o<r.length-1;o++)u=Q(this,a[i+o],t,o),u===Z&&(u=this._$AH[o]),l||(l=!ce(u)||u!==this._$AH[o]),u===y?e=y:e!==y&&(e+=(u!=null?u:"")+r[o+1]),this._$AH[o]=u}l&&!s&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class _i extends Me{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}}const mi=J?J.emptyScript:"";class yi extends Me{constructor(){super(...arguments),this.type=4}j(e){e&&e!==y?this.element.setAttribute(this.name,mi):this.element.removeAttribute(this.name)}}class $i extends Me{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Q(this,e,t,0))!==null&&i!==void 0?i:y)===Z)return;const s=this._$AH,r=e===y&&s!==y||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,l=e!==y&&(s===y||r);r&&this.element.removeEventListener(this.name,this,s),l&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class bi{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}}const _t=me.litHtmlPolyfillSupport;_t==null||_t(he,pe),((Ne=me.litHtmlVersions)!==null&&Ne!==void 0?Ne:me.litHtmlVersions=[]).push("2.4.0");const wi=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let l=r._$litPart$;if(l===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=l=new pe(e.insertBefore(ue(),a),a,void 0,t!=null?t:{})}return l._$AI(n),l};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Te,Ce;class ne extends j{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=wi(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Z}}ne.finalized=!0,ne._$litElement$=!0,(Te=globalThis.litElementHydrateSupport)===null||Te===void 0||Te.call(globalThis,{LitElement:ne});const mt=globalThis.litElementPolyfillSupport;mt==null||mt({LitElement:ne});((Ce=globalThis.litElementVersions)!==null&&Ce!==void 0?Ce:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ai=n=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(n,e):((t,i)=>{const{kind:s,elements:r}=i;return{kind:s,elements:r,finisher(l){customElements.define(t,l)}}})(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Si=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}};function Mi(n){return(e,t)=>t!==void 0?((i,s,r)=>{s.constructor.createProperty(r,i)})(n,e,t):Si(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function k(n){return Mi({...n,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ei=({finisher:n,descriptor:e})=>(t,i)=>{var s;if(i===void 0){const r=(s=t.originalKey)!==null&&s!==void 0?s:t.key,l=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(t.key)}:{...t,key:r};return n!=null&&(l.finisher=function(a){n(a,r)}),l}{const r=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),n==null||n(r,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Y(n,e){return Ei({descriptor:t=>{const i={get(){var s,r;return(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const s=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var r,l;return this[s]===void 0&&(this[s]=(l=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(n))!==null&&l!==void 0?l:null),this[s]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Re;((Re=window.HTMLSlotElement)===null||Re===void 0?void 0:Re.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*xi(n,e){if(n!==void 0){let t=0;for(const i of n)yield e(i,t++)}}function p(n){let e,t,i;return typeof n=="object"?(e=n.hashFunction,t=n.expiring,i=n.tags):e=n,(s,r,l)=>{if(l.value!=null)l.value=yt(l.value,e,t,i);else if(l.get!=null)l.get=yt(l.get,e,t,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Pe=new Map;function yt(n,e,t=0,i){const s=Symbol("__memoized_map__");return function(...r){let l;this.hasOwnProperty(s)||Object.defineProperty(this,s,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let a=this[s];if(Array.isArray(i))for(const o of i)Pe.has(o)?Pe.get(o).push(a):Pe.set(o,[a]);if(e||r.length>0||t>0){let o;e===!0?o=r.map(d=>d.toString()).join("!"):e?o=e.apply(this,r):o=r[0];const u=`${o}__timestamp`;let v=!1;if(t>0)if(!a.has(u))v=!0;else{let d=a.get(u);v=Date.now()-d>t}a.has(o)&&!v?l=a.get(o):(l=n.apply(this,r),a.set(o,l),t>0&&a.set(u,Date.now()))}else{const o=this;a.has(o)?l=a.get(o):(l=n.apply(this,r),a.set(o,l))}return l}}var ye;(function(n){n[n.COUNT=0]="COUNT",n[n.ALPHABETICAL=1]="ALPHABETICAL"})(ye||(ye={}));class Ot{constructor(e){this.buckets=e.buckets,this.doc_count_error_upper_bound=e.doc_count_error_upper_bound,this.sum_other_doc_count=e.sum_other_doc_count,this.first_bucket_key=e.first_bucket_key,this.last_bucket_key=e.last_bucket_key,this.number_buckets=e.number_buckets,this.interval=e.interval}getSortedBuckets(e){if(typeof this.buckets[0]=="number")return[...this.buckets];const t=new Intl.Collator;switch(e){case ye.ALPHABETICAL:return[...this.buckets].sort((i,s)=>t.compare(i.key.toString(),s.key.toString()));case ye.COUNT:default:return[...this.buckets]}}}h([p()],Ot.prototype,"getSortedBuckets",null);class Le{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:Boolean(e)}}Le.shared=new Le;class $e{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}$e.shared=new $e;class Ie{parseValue(e){return $e.shared.parseValue(e)}}Ie.shared=new Ie;class Ve{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const i=Date.parse(t);if(Number.isNaN(i))return;let s=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(s=new Date(s.getTime()+s.getTimezoneOffset()*1e3*60)),s}}Ve.shared=new Ve;class De{parseValue(e){if(typeof e=="string")return e}}De.shared=new De;class Be{parseValue(e){return String(e)}}Be.shared=new Be;class O{constructor(e,t){this.parser=e,this.rawValue=t}get values(){return this.parseRawValue()}get value(){return this.values[0]}parseRawValue(){if(this.rawValue===void 0)return[];const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(i=>{const s=this.parser.parseValue(i);Array.isArray(s)?t.push(...s):s!==void 0&&t.push(s)}),t}}h([p()],O.prototype,"values",null);h([p()],O.prototype,"value",null);class se extends O{constructor(e){super(Le.shared,e)}}class $t extends O{constructor(e){super(Ie.shared,e)}}class T extends O{constructor(e){super(Ve.shared,e)}}class Ht extends O{constructor(e){super(De.shared,e)}}class M extends O{constructor(e){super($e.shared,e)}}class _ extends O{constructor(e){super(Be.shared,e)}}class f{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.identifier}get addeddate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.addeddate?new T(this.rawMetadata.fields.addeddate):void 0}get avg_rating(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.avg_rating)!=null?new M(this.rawMetadata.fields.avg_rating):void 0}get collection(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection?new _(this.rawMetadata.fields.collection):void 0}get collection_files_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.collection_files_count)!=null?new M(this.rawMetadata.fields.collection_files_count):void 0}get collection_size(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.collection_size)!=null?new $t(this.rawMetadata.fields.collection_size):void 0}get creator(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.creator?new _(this.rawMetadata.fields.creator):void 0}get date(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date?new T(this.rawMetadata.fields.date):void 0}get description(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.description?new _(this.rawMetadata.fields.description):void 0}get downloads(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.downloads)!=null?new M(this.rawMetadata.fields.downloads):void 0}get files_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.files_count)!=null?new M(this.rawMetadata.fields.files_count):void 0}get genre(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.genre?new _(this.rawMetadata.fields.genre):void 0}get indexflag(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.indexflag?new _(this.rawMetadata.fields.indexflag):void 0}get issue(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.issue?new _(this.rawMetadata.fields.issue):void 0}get item_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.item_count)!=null?new M(this.rawMetadata.fields.item_count):void 0}get item_size(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.item_size)!=null?new $t(this.rawMetadata.fields.item_size):void 0}get language(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.language?new _(this.rawMetadata.fields.language):void 0}get lending___available_to_borrow(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_borrow)!=null?new se(this.rawMetadata.fields.lending___available_to_borrow):void 0}get lending___available_to_browse(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_browse)!=null?new se(this.rawMetadata.fields.lending___available_to_browse):void 0}get lending___available_to_waitlist(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_waitlist)!=null?new se(this.rawMetadata.fields.lending___available_to_waitlist):void 0}get lending___status(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.lending___status?new _(this.rawMetadata.fields.lending___status):void 0}get licenseurl(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.licenseurl?new _(this.rawMetadata.fields.licenseurl):void 0}get mediatype(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.mediatype?new Ht(this.rawMetadata.fields.mediatype):void 0}get month(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.month)!=null?new M(this.rawMetadata.fields.month):void 0}get noindex(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.noindex)!=null?new se(this.rawMetadata.fields.noindex):void 0}get num_favorites(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.num_favorites)!=null?new M(this.rawMetadata.fields.num_favorites):void 0}get num_reviews(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.num_reviews)!=null?new M(this.rawMetadata.fields.num_reviews):void 0}get source(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.source?new _(this.rawMetadata.fields.source):void 0}get subject(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.subject?new _(this.rawMetadata.fields.subject):void 0}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new _(this.rawMetadata.fields.title):void 0}get type(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.type?new _(this.rawMetadata.fields.type):void 0}get volume(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.volume?new _(this.rawMetadata.fields.volume):void 0}get week(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.week)!=null?new M(this.rawMetadata.fields.week):void 0}get year(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.year)!=null?new M(this.rawMetadata.fields.year):void 0}}h([p()],f.prototype,"addeddate",null);h([p()],f.prototype,"avg_rating",null);h([p()],f.prototype,"collection",null);h([p()],f.prototype,"collection_files_count",null);h([p()],f.prototype,"collection_size",null);h([p()],f.prototype,"creator",null);h([p()],f.prototype,"date",null);h([p()],f.prototype,"description",null);h([p()],f.prototype,"downloads",null);h([p()],f.prototype,"files_count",null);h([p()],f.prototype,"genre",null);h([p()],f.prototype,"indexflag",null);h([p()],f.prototype,"issue",null);h([p()],f.prototype,"item_count",null);h([p()],f.prototype,"item_size",null);h([p()],f.prototype,"language",null);h([p()],f.prototype,"lending___available_to_borrow",null);h([p()],f.prototype,"lending___available_to_browse",null);h([p()],f.prototype,"lending___available_to_waitlist",null);h([p()],f.prototype,"lending___status",null);h([p()],f.prototype,"licenseurl",null);h([p()],f.prototype,"mediatype",null);h([p()],f.prototype,"month",null);h([p()],f.prototype,"noindex",null);h([p()],f.prototype,"num_favorites",null);h([p()],f.prototype,"num_reviews",null);h([p()],f.prototype,"source",null);h([p()],f.prototype,"subject",null);h([p()],f.prototype,"title",null);h([p()],f.prototype,"type",null);h([p()],f.prototype,"volume",null);h([p()],f.prototype,"week",null);h([p()],f.prototype,"year",null);class m{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.identifier}get highlight(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.highlight)===null||t===void 0)&&t.text?new _(this.rawMetadata.highlight.text):void 0}get addeddate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.addeddate?new T(this.rawMetadata.fields.addeddate):void 0}get avg_rating(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.avg_rating)!=null?new M(this.rawMetadata.fields.avg_rating):void 0}get collection(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection?new _(this.rawMetadata.fields.collection):void 0}get created_on(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.created_on?new T(this.rawMetadata.fields.created_on):void 0}get creator(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.creator?new _(this.rawMetadata.fields.creator):void 0}get date(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date?new T(this.rawMetadata.fields.date):void 0}get description(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.description?new _(this.rawMetadata.fields.description):void 0}get downloads(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.downloads)!=null?new M(this.rawMetadata.fields.downloads):void 0}get filename(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.filename?new _(this.rawMetadata.fields.filename):void 0}get file_basename(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.file_basename?new _(this.rawMetadata.fields.file_basename):void 0}get file_creation_mtime(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.file_creation_mtime)!=null?new M(this.rawMetadata.fields.file_creation_mtime):void 0}get issue(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.issue?new _(this.rawMetadata.fields.issue):void 0}get mediatype(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.mediatype?new Ht(this.rawMetadata.fields.mediatype):void 0}get page_num(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.page_num)!=null?new M(this.rawMetadata.fields.page_num):void 0}get publicdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.publicdate?new T(this.rawMetadata.fields.publicdate):void 0}get result_in_subfile(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.result_in_subfile)!=null?new se(this.rawMetadata.fields.result_in_subfile):void 0}get reviewdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.reviewdate?new T(this.rawMetadata.fields.reviewdate):void 0}get source(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.source?new _(this.rawMetadata.fields.source):void 0}get subject(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.subject?new _(this.rawMetadata.fields.subject):void 0}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new _(this.rawMetadata.fields.title):void 0}get updated_on(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.updated_on?new T(this.rawMetadata.fields.updated_on):void 0}get year(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.year)!=null?new M(this.rawMetadata.fields.year):void 0}get __href__(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new _(this.rawMetadata.fields.__href__):void 0}}h([p()],m.prototype,"highlight",null);h([p()],m.prototype,"addeddate",null);h([p()],m.prototype,"avg_rating",null);h([p()],m.prototype,"collection",null);h([p()],m.prototype,"created_on",null);h([p()],m.prototype,"creator",null);h([p()],m.prototype,"date",null);h([p()],m.prototype,"description",null);h([p()],m.prototype,"downloads",null);h([p()],m.prototype,"filename",null);h([p()],m.prototype,"file_basename",null);h([p()],m.prototype,"file_creation_mtime",null);h([p()],m.prototype,"issue",null);h([p()],m.prototype,"mediatype",null);h([p()],m.prototype,"page_num",null);h([p()],m.prototype,"publicdate",null);h([p()],m.prototype,"result_in_subfile",null);h([p()],m.prototype,"reviewdate",null);h([p()],m.prototype,"source",null);h([p()],m.prototype,"subject",null);h([p()],m.prototype,"title",null);h([p()],m.prototype,"updated_on",null);h([p()],m.prototype,"year",null);h([p()],m.prototype,"__href__",null);class qe{constructor(e,t){var i,s,r,l,a,o,u;this.schema=t;const v=t==null?void 0:t.hit_type;this.totalResults=(s=(i=e==null?void 0:e.hits)===null||i===void 0?void 0:i.total)!==null&&s!==void 0?s:0,this.returnedCount=(l=(r=e==null?void 0:e.hits)===null||r===void 0?void 0:r.returned)!==null&&l!==void 0?l:0,this.results=(u=(o=(a=e==null?void 0:e.hits)===null||a===void 0?void 0:a.hits)===null||o===void 0?void 0:o.map(d=>qe.createResult(v,d)))!==null&&u!==void 0?u:[],e!=null&&e.aggregations&&(this.aggregations=Object.entries(e.aggregations).reduce((d,[c,g])=>(d[c]=new Ot(g),d),{}))}static createResult(e,t){switch(e){case"item":return new f(t);case"text":return new m(t);default:return t}}}class ki{constructor(e){this.clientParameters=e.client_parameters,this.finalizedParameters=e.finalized_parameters}}class Ni{constructor(e){var t,i,s;this.rawResponse=e,this.request=new ki(e.request),this.responseHeader=(t=e.response)===null||t===void 0?void 0:t.header,this.response=new qe((i=e.response)===null||i===void 0?void 0:i.body,(s=e.response)===null||s===void 0?void 0:s.hit_schema)}}var V;(function(n){n[n.METADATA=0]="METADATA",n[n.FULLTEXT=1]="FULLTEXT"})(V||(V={}));class be{static aggregateSearchParamsAsString(e){if(e.omit)return"false";if(e.advancedParams){const t=e.advancedParams.map(s=>({terms:s}));return JSON.stringify(t)}if(e.simpleParams)return e.simpleParams.join(",")}static sortParamsAsString(e){return`${e.field}:${e.direction}`}static filterParamsAsString(e){return JSON.stringify(e)}static generateURLSearchParams(e){const t=new URLSearchParams;if(t.append("user_query",e.query),e.pageType&&t.append("page_type",String(e.pageType)),e.pageTarget&&t.append("page_target",String(e.pageTarget)),e.rows!=null&&t.append("hits_per_page",String(e.rows)),e.page!=null&&t.append("page",String(e.page)),e.fields&&e.fields.length>0&&t.append("fields",e.fields.join(",")),e.filters&&Object.keys(e.filters).length>0){const s=this.filterParamsAsString(e.filters);s&&s!=="{}"&&t.append("filter_map",s)}if(e.sort&&e.sort.length>0){const s=e.sort.map(r=>this.sortParamsAsString(r));t.append("sort",s.join(","))}const i=e.aggregations;if(i){const s=this.aggregateSearchParamsAsString(i);s&&t.append("aggregations",s)}return e.aggregationsSize!=null&&t.append("aggregations_size",String(e.aggregationsSize)),e.debugging&&t.append("debugging","true"),e.uid&&t.append("uid",e.uid),e.includeClientUrl!==!1&&t.append("client_url",window.location.href),t}}var re;(function(n){n.networkError="SearchService.NetworkError",n.itemNotFound="SearchService.ItemNotFound",n.decodingError="SearchService.DecodingError",n.searchEngineError="SearchService.SearchEngineError"})(re||(re={}));class Ti extends Error{constructor(e,t,i){super(t),this.name=e,this.type=e,this.details=i}}class Lt{constructor(e){var t,i;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",this.debuggingEnabled=(i=e==null?void 0:e.debuggingEnabled)!==null&&i!==void 0?i:!1,(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const r=new URL(window.location.href).searchParams.get("scope");r&&(this.requestScope=r)}}async fetchUrl(e,t){var i;const s=new URL(e);this.requestScope&&s.searchParams.set("scope",this.requestScope);let r;try{const l=(i=t==null?void 0:t.requestOptions)!==null&&i!==void 0?i:{credentials:this.includeCredentials?"include":"same-origin"};r=await fetch(s.href,l)}catch(l){const a=l instanceof Error?l.message:typeof l=="string"?l:"Unknown error";return this.getErrorResult(re.networkError,a)}try{const l=await r.json();l.debugging&&this.printDebuggingInfo(l);const a=l.error;if(a){const o=l.forensics;return this.getErrorResult(re.searchEngineError,a,o)}else return{success:l}}catch(l){const a=l instanceof Error?l.message:typeof l=="string"?l:"Unknown error";return this.getErrorResult(re.decodingError,a)}}getErrorResult(e,t,i){return{error:new Ti(e,t,i)}}printDebuggingInfo(e){var t,i;const s=e.debugging,r=(t=s.messages)!==null&&t!==void 0?t:[],l=(i=s.data)!==null&&i!==void 0?i:{};console.log("***** BEGIN DEBUGGING *****"),console.log("Full response:"),console.log(JSON.stringify(e,null,2)),console.group("Debug messages");for(const a of r)console.log(a);console.groupEnd(),console.group("Debug data");for(const[a,o]of Object.entries(l))console.log(a,o);console.groupEnd(),console.log("***** END DEBUGGING *****")}}class Ci extends Lt{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=be.generateURLSearchParams(e).toString(),s=`https://${this.baseUrl}${this.servicePath}/?service_backend=fts&${i}`;return this.fetchUrl(s)}}class Ri extends Lt{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=be.generateURLSearchParams(e).toString(),s=`https://${this.baseUrl}${this.servicePath}/?service_backend=metadata&${i}`;return this.fetchUrl(s)}}class X{constructor(e={}){this.backendOptions=e}async search(e,t=V.METADATA){const s=await X.getBackendForSearchType(t,this.backendOptions).performSearch(e);return s.error?s:{success:new Ni(s.success)}}static getBackendForSearchType(e,t={}){switch(e){case V.FULLTEXT:return new Ci(t);case V.METADATA:default:return new Ri(t)}}}X.default=new X;h([p((n,e={})=>{const{includeCredentials:t="",scope:i="",baseUrl:s=""}=e;return`${n};${t};${i};${s}`})],X,"getBackendForSearchType",null);var E;(function(n){n.INCLUDE="inc",n.EXCLUDE="exc",n.GREATER_THAN="gt",n.GREATER_OR_EQUAL="gte",n.LESS_THAN="lt",n.LESS_OR_EQUAL="lte"})(E||(E={}));const Pi=[E.GREATER_OR_EQUAL,E.GREATER_THAN,E.LESS_OR_EQUAL,E.LESS_THAN];class Ui{constructor(){this.filterMap={}}addFilter(e,t,i){this.filterMap[e]||(this.filterMap[e]={});const s=this.filterMap[e][t];if(s&&i===E.EXCLUDE){if(s===E.GREATER_OR_EQUAL)return this.filterMap[e][t]=E.GREATER_THAN,this;if(s===E.LESS_OR_EQUAL)return this.filterMap[e][t]=E.LESS_THAN,this;if(s===E.GREATER_THAN||s===E.LESS_THAN)return this}return s===E.INCLUDE&&Pi.includes(i)?this:(this.filterMap[e][t]=i,this)}removeFilter(e,t){return this.filterMap[e]&&(delete this.filterMap[e][t],Object.keys(this.filterMap[e]).length===0&&delete this.filterMap[e]),this}setFilterMap(e){return this.filterMap={...e},this}mergeFilterMap(e){for(const[t,i]of Object.entries(e))for(const[s,r]of Object.entries(i))this.addFilter(t,s,r);return this}build(){return this.filterMap}}let A=class extends ne{constructor(){super(...arguments),this.searchServiceUrlOptions=this.initSearchServiceUrlOptions(),this.filterMap={},this.loadingSearchResults=!1,this.loadingAggregations=!1,this.defaultAggregationsChecked=!0,this.fullSearchResultsShown=!1,this.searchService=new X(this.searchServiceUrlOptions)}get searchResults(){var e;return(e=this.searchResponse)===null||e===void 0?void 0:e.response.results}get searchAggregations(){var e;return(e=this.aggregationsResponse)===null||e===void 0?void 0:e.response.aggregations}initSearchServiceUrlOptions(){var e,t,i;const s=new URL(window.location.href).searchParams;return{baseUrl:(e=s.get("search_base_url"))!==null&&e!==void 0?e:void 0,servicePath:(t=s.get("search_service_path"))!==null&&t!==void 0?t:void 0,debuggingEnabled:(i=!!s.get("debugging"))!==null&&i!==void 0?i:void 0}}render(){var e;return b`
      <fieldset>
        <legend>Search</legend>
        <form>
          <label for="search-input">Search: </label>
          <input type="text" id="search-input" placeholder="Search Term" />
          <input type="submit" value="Go" @click=${this.search} />

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
            <input
              type="checkbox"
              id="aggs-default"
              checked
              @change=${this.toggleDefaultAggregations}
            />
            <label for="aggs-default">Default (all) </label>
            <input
              type="checkbox"
              id="aggs-mediatype"
              name="aggs"
              value="mediatype"
              checked
              ?disabled=${this.defaultAggregationsChecked}
            />
            <label for="aggs-mediatype">Mediatype </label>
            <input
              type="checkbox"
              id="aggs-year"
              name="aggs"
              value="year"
              checked
              ?disabled=${this.defaultAggregationsChecked}
            />
            <label for="aggs-year">Year </label>
            <input
              type="checkbox"
              id="aggs-subject"
              name="aggs"
              value="subject"
              checked
              ?disabled=${this.defaultAggregationsChecked}
            />
            <label for="aggs-subject">Subject </label>
            <input
              type="checkbox"
              id="aggs-language"
              name="aggs"
              value="language"
              checked
              ?disabled=${this.defaultAggregationsChecked}
            />
            <label for="aggs-language">Language </label>
            <input
              type="checkbox"
              id="aggs-creator"
              name="aggs"
              value="creator"
              checked
              ?disabled=${this.defaultAggregationsChecked}
            />
            <label for="aggs-creator">Creator </label>
            <input
              type="checkbox"
              id="aggs-collection"
              name="aggs"
              value="collection"
              checked
              ?disabled=${this.defaultAggregationsChecked}
            />
            <label for="aggs-collection">Collection </label>
            <input
              type="checkbox"
              id="aggs-lending"
              name="aggs"
              value="lending___status"
              checked
              ?disabled=${this.defaultAggregationsChecked}
            />
            <label for="aggs-lending">Lending </label>
          </fieldset>
        </form>
      </fieldset>

      ${this.searchResults||this.loadingSearchResults?this.resultsTemplate:y}
    `}filterFieldChanged(e){var t,i;const r=!!e.target.selectedOptions[0].dataset.numeric,l=(i=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelectorAll("#filter-constraint option"))!==null&&i!==void 0?i:[];for(const a of l)a.toggleAttribute("hidden",!r&&!!a.dataset.numeric)}addFilterClicked(){var e,t,i,s,r;const l=(e=this.shadowRoot)===null||e===void 0?void 0:e.getElementById("filter-field"),a=(t=l==null?void 0:l.selectedOptions[0])===null||t===void 0?void 0:t.value,o=(i=this.shadowRoot)===null||i===void 0?void 0:i.getElementById("filter-constraint"),u=(s=o==null?void 0:o.selectedOptions[0])===null||s===void 0?void 0:s.value,v=(r=this.shadowRoot)===null||r===void 0?void 0:r.getElementById("filter-value"),d=v==null?void 0:v.value;!a||!u||!d||(this.filterMap=new Ui().setFilterMap(this.filterMap).addFilter(a,d,u).build(),v&&(v.value=""))}removeFilterClicked(e){const t=e.target,{field:i,value:s}=t.dataset;i&&s&&(this.filterMap={...this.filterMap},delete this.filterMap[i][s],Object.keys(this.filterMap[i]).length===0&&delete this.filterMap[i])}get appliedFiltersTemplate(){const e=[];for(const[i,s]of Object.entries(this.filterMap))for(const[r,l]of Object.entries(s))e.push({field:i,value:r,constraint:l});if(e.length===0)return b`<span>(no filters applied)</span>`;const t={inc:"includes",exc:"excludes",gt:">",gte:">=",lt:"<",lte:"<="};return xi(e,({field:i,value:s,constraint:r})=>b`
        <span class="filter">
          <span class="filter-text"
            >'${i}' ${t[r]} '${s}'</span
          ><!--
       --><button
            type="button"
            class="remove-filter"
            data-field=${i}
            data-value=${s}
            @click=${this.removeFilterClicked}
          >
            x
          </button>
        </span>
      `)}get resultsTemplate(){return b`
      <details>
        <summary>PPS URL params</summary>
        ${this.lastSearchParams?b`<div>
              Last search params:
              <pre>${this.lastSearchParams}</pre>
            </div>`:y}
        ${this.lastAggregationParams?b`<div>
              Last aggregation params:
              <pre>${this.lastAggregationParams}</pre>
            </div>`:y}
      </details>
      ${this.loadingSearchResults?b`<h3>Loading search results...</h3>`:[this.minimalSearchResultsTemplate,this.fullSearchResultsTemplate]}
      ${this.loadingAggregations?b`<h3>Loading aggregations...</h3>`:this.aggregationsTemplate}
    `}get minimalSearchResultsTemplate(){var e;return b`
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
          ${(e=this.searchResults)===null||e===void 0?void 0:e.map(t=>{var i,s;return b`
              <tr>
                <td>${t.identifier}</td>
                <td>${(s=(i=t.title)===null||i===void 0?void 0:i.value)!==null&&s!==void 0?s:"(Untitled)"}</td>
                ${this.snippetTemplate(t)}
              </tr>
            `})}
        </tbody>
      </table>
    `}get fullSearchResultsTemplate(){return b`
      <button @click=${this.toggleFullSearchResults}>
        ${this.fullSearchResultsShown?"Hide":"Show"} all search results
      </button>
      ${this.fullSearchResultsShown?b`<pre>
          ${JSON.stringify(this.searchResults,null,2)}
        </pre
          >`:y}
    `}get aggregationsTemplate(){var e;return b`
      <div>
        <h2>Aggregations</h2>
        ${Object.entries((e=this.searchAggregations)!==null&&e!==void 0?e:{}).map(([t,i])=>b`
            <h3>${t}</h3>
            <p>
              ${i.buckets.map(s=>typeof s=="number"?s:`${s.key} (${s.doc_count})`).join(", ")}
            </p>
          `)}
      </div>
    `}get snippetsHeaderTemplate(){var e;return!((e=this.searchResults)===null||e===void 0)&&e.some(t=>t.highlight)?b`<th>Snippets</th>`:b`${y}`}snippetTemplate(e){return e.highlight?b`<td>${e.highlight.value}</td>`:b`${y}`}toggleDefaultAggregations(){var e;this.defaultAggregationsChecked=(e=this.defaultAggregationsCheckbox)===null||e===void 0?void 0:e.checked}toggleFullSearchResults(){this.fullSearchResultsShown=!this.fullSearchResultsShown}async search(e){var t;e.preventDefault();const i=this.searchInput.value,s=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector("input[name='search-type']:checked"),r=(s==null?void 0:s.value)==="fts"?V.FULLTEXT:V.METADATA;this.fetchSearchResults(i,r),this.fetchAggregations(i,r)}async fetchSearchResults(e,t){var i,s,r,l,a;const o=((i=this.checkedSort)===null||i===void 0?void 0:i.value)==="none"?void 0:[{field:"title",direction:(s=this.checkedSort)===null||s===void 0?void 0:s.value}],u=Number((r=this.rowsInput)===null||r===void 0?void 0:r.value),v=(l=this.debugCheck)===null||l===void 0?void 0:l.checked,d={query:e,rows:u,sort:o,filters:this.filterMap,aggregations:{omit:!0},debugging:v,uid:"demo"};this.lastSearchParams=decodeURIComponent(be.generateURLSearchParams(d).toString()),this.loadingSearchResults=!0;const c=await this.searchService.search(d,t);this.loadingSearchResults=!1,c!=null&&c.success?this.searchResponse=c==null?void 0:c.success:(alert(`Oh noes: ${(a=c==null?void 0:c.error)===null||a===void 0?void 0:a.message}`),console.error("Error searching",c==null?void 0:c.error))}async fetchAggregations(e,t){var i,s,r,l;const a=(i=this.shadowRoot)===null||i===void 0?void 0:i.querySelectorAll("input[name='aggs']:checked"),o={simpleParams:a?[...a].map(g=>g.value):void 0},u=Number((s=this.numAggsInput)===null||s===void 0?void 0:s.value),v=(r=this.debugCheck)===null||r===void 0?void 0:r.checked,d={query:e,rows:0,filters:this.filterMap,aggregationsSize:u,debugging:v,uid:"demo"};this.defaultAggregationsChecked||(d.aggregations=o),this.lastAggregationParams=decodeURIComponent(be.generateURLSearchParams(d).toString()),this.loadingAggregations=!0;const c=await this.searchService.search(d,t);this.loadingAggregations=!1,c!=null&&c.success?this.aggregationsResponse=c==null?void 0:c.success:(alert(`Oh noes: ${(l=c==null?void 0:c.error)===null||l===void 0?void 0:l.message}`),console.error("Error searching",c==null?void 0:c.error))}static get styles(){return ei`
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
    `}};h([Y("#search-input")],A.prototype,"searchInput",void 0);h([Y("#debug-info-check")],A.prototype,"debugCheck",void 0);h([Y("#num-rows")],A.prototype,"rowsInput",void 0);h([Y("#num-aggs")],A.prototype,"numAggsInput",void 0);h([Y("input[name='sort']:checked")],A.prototype,"checkedSort",void 0);h([Y("#aggs-default")],A.prototype,"defaultAggregationsCheckbox",void 0);h([k()],A.prototype,"searchServiceUrlOptions",void 0);h([k()],A.prototype,"filterMap",void 0);h([k()],A.prototype,"searchResponse",void 0);h([k()],A.prototype,"aggregationsResponse",void 0);h([k()],A.prototype,"loadingSearchResults",void 0);h([k()],A.prototype,"loadingAggregations",void 0);h([k()],A.prototype,"lastSearchParams",void 0);h([k()],A.prototype,"lastAggregationParams",void 0);h([k()],A.prototype,"defaultAggregationsChecked",void 0);h([k()],A.prototype,"fullSearchResultsShown",void 0);A=h([Ai("app-root")],A);Qt(Xt`
        <app-root></app-root>
      `,document.querySelector("#demo"));
