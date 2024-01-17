const Qt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}};Qt();/**
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
 */const ei=new WeakMap,de=s=>typeof s=="function"&&ei.has(s);/**
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
 */const C={},nt={};/**
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
 */const I=`{{lit-${String(Math.random()).slice(2)}}}`,Ot=`<!--${I}-->`,st=new RegExp(`${I}|${Ot}`),se="$lit$";class ti{constructor(e,t){this.parts=[],this.element=t;const i=[],n=[],r=document.createTreeWalker(t.content,133,null,!1);let o=0,l=-1,a=0;const{strings:c,values:{length:v}}=e;for(;a<v;){const d=r.nextNode();if(d===null){r.currentNode=n.pop();continue}if(l++,d.nodeType===1){if(d.hasAttributes()){const h=d.attributes,{length:f}=h;let S=0;for(let m=0;m<f;m++)rt(h[m].name,se)&&S++;for(;S-- >0;){const m=c[a],N=Fe.exec(m)[2],P=N.toLowerCase()+se,A=d.getAttribute(P);d.removeAttribute(P);const y=A.split(st);this.parts.push({type:"attribute",index:l,name:N,strings:y}),a+=y.length-1}}d.tagName==="TEMPLATE"&&(n.push(d),r.currentNode=d.content)}else if(d.nodeType===3){const h=d.data;if(h.indexOf(I)>=0){const f=d.parentNode,S=h.split(st),m=S.length-1;for(let N=0;N<m;N++){let P,A=S[N];if(A==="")P=O();else{const y=Fe.exec(A);y!==null&&rt(y[2],se)&&(A=A.slice(0,y.index)+y[1]+y[2].slice(0,-se.length)+y[3]),P=document.createTextNode(A)}f.insertBefore(P,d),this.parts.push({type:"node",index:++l})}S[m]===""?(f.insertBefore(O(),d),i.push(d)):d.data=S[m],a+=m}}else if(d.nodeType===8)if(d.data===I){const h=d.parentNode;(d.previousSibling===null||l===o)&&(l++,h.insertBefore(O(),d)),o=l,this.parts.push({type:"node",index:l}),d.nextSibling===null?d.data="":(i.push(d),l--),a++}else{let h=-1;for(;(h=d.data.indexOf(I,h+1))!==-1;)this.parts.push({type:"node",index:-1}),a++}}for(const d of i)d.parentNode.removeChild(d)}}const rt=(s,e)=>{const t=s.length-e.length;return t>=0&&s.slice(t)===e},ii=s=>s.index!==-1,O=()=>document.createComment(""),Fe=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
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
 */class ot{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)i!==void 0&&i.setValue(e[t]),t++;for(const i of this.__parts)i!==void 0&&i.commit()}_clone(){const e=it?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let r=0,o=0,l,a=n.nextNode();for(;r<i.length;){if(l=i[r],!ii(l)){this.__parts.push(void 0),r++;continue}for(;o<l.index;)o++,a.nodeName==="TEMPLATE"&&(t.push(a),n.currentNode=a.content),(a=n.nextNode())===null&&(n.currentNode=t.pop(),a=n.nextNode());if(l.type==="node"){const c=this.processor.handleTextExpression(this.options);c.insertAfterNode(a.previousSibling),this.__parts.push(c)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,l.name,l.strings,this.options));r++}return it&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
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
 */const lt=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:s=>s}),ni=` ${I} `;class Ht{constructor(e,t,i,n){this.strings=e,this.values=t,this.type=i,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let n=0;n<e;n++){const r=this.strings[n],o=r.lastIndexOf("<!--");i=(o>-1||i)&&r.indexOf("-->",o+1)===-1;const l=Fe.exec(r);l===null?t+=r+(i?ni:Ot):t+=r.substr(0,l.index)+l[1]+l[2]+se+l[3]+I}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return lt!==void 0&&(t=lt.createHTML(t)),e.innerHTML=t,e}}/**
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
 */const Xe=s=>s===null||!(typeof s=="object"||typeof s=="function"),De=s=>Array.isArray(s)||!!(s&&s[Symbol.iterator]);class Ut{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let n=0;n<i.length-1;n++)this.parts[n]=this._createPart()}_createPart(){return new It(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(t===1&&e[0]===""&&e[1]===""){const r=i[0].value;if(typeof r=="symbol")return String(r);if(typeof r=="string"||!De(r))return r}let n="";for(let r=0;r<t;r++){n+=e[r];const o=i[r];if(o!==void 0){const l=o.value;if(Xe(l)||!De(l))n+=typeof l=="string"?l:String(l);else for(const a of l)n+=typeof a=="string"?a:String(a)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class It{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==C&&(!Xe(e)||e!==this.value)&&(this.value=e,de(e)||(this.committer.dirty=!0))}commit(){for(;de(this.value);){const e=this.value;this.value=C,e(this)}this.value!==C&&this.committer.commit()}}class Me{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(O()),this.endNode=e.appendChild(O())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=O()),e.__insert(this.endNode=O())}insertAfterPart(e){e.__insert(this.startNode=O()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;de(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=C,t(this)}const e=this.__pendingValue;e!==C&&(Xe(e)?e!==this.value&&this.__commitText(e):e instanceof Ht?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):De(e)?this.__commitIterable(e):e===nt?(this.value=nt,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=e==null?"":e;const i=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof ot&&this.value.template===t)this.value.update(e.values);else{const i=new ot(t,e.processor,this.options),n=i._clone();i.update(e.values),this.__commitNode(n),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i=0,n;for(const r of e)n=t[i],n===void 0&&(n=new Me(this.options),t.push(n),i===0?n.appendIntoPart(this):n.insertAfterPart(t[i-1])),n.setValue(r),n.commit(),i++;i<t.length&&(t.length=i,this.clear(n&&n.endNode))}clear(e=this.startNode){Pt(this.startNode.parentNode,e.nextSibling,this.endNode)}}class si{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,i.length!==2||i[0]!==""||i[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;de(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=C,t(this)}if(this.__pendingValue===C)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=C}}class ri extends Ut{constructor(e,t,i){super(e,t,i),this.single=i.length===2&&i[0]===""&&i[1]===""}_createPart(){return new oi(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class oi extends It{}let Lt=!1;(()=>{try{const s={get capture(){return Lt=!0,!1}};window.addEventListener("test",s,s),window.removeEventListener("test",s,s)}catch{}})();class li{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=n=>this.handleEvent(n)}setValue(e){this.__pendingValue=e}commit(){for(;de(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=C,r(this)}if(this.__pendingValue===C)return;const e=this.__pendingValue,t=this.value,i=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=e!=null&&(t==null||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=ai(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=C}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const ai=s=>s&&(Lt?{capture:s.capture,passive:s.passive,once:s.once}:s.capture);/**
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
 */class di{handleAttributeExpressions(e,t,i,n){const r=t[0];return r==="."?new ri(e,t.slice(1),i).parts:r==="@"?[new li(e,t.slice(1),n.eventContext)]:r==="?"?[new si(e,t.slice(1),i)]:new Ut(e,t,i).parts}handleTextExpression(e){return new Me(e)}}const ui=new di;/**
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
 */function ci(s){let e=at.get(s.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},at.set(s.type,e));let t=e.stringsArray.get(s.strings);if(t!==void 0)return t;const i=s.strings.join(I);return t=e.keyString.get(i),t===void 0&&(t=new ti(s,s.getTemplateElement()),e.keyString.set(i,t)),e.stringsArray.set(s.strings,t),t}const at=new Map;/**
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
 */const dt=new WeakMap,hi=(s,e,t)=>{let i=dt.get(e);i===void 0&&(Pt(e,e.firstChild),dt.set(e,i=new Me(Object.assign({templateFactory:ci},t))),i.appendInto(e)),i.setValue(s),i.commit()};/**
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
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const pi=(s,...e)=>new Ht(s,e,"html",ui);/*! *****************************************************************************
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
***************************************************************************** */function u(s,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var l=s.length-1;l>=0;l--)(o=s[l])&&(r=(n<3?o(r):n>3?o(e,t,r):o(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=window,Ye=me.ShadowRoot&&(me.ShadyCSS===void 0||me.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qe=Symbol(),ut=new WeakMap;class Vt{constructor(e,t,i){if(this._$cssResult$=!0,i!==Qe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ye&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ut.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ut.set(t,e))}return e}toString(){return this.cssText}}const vi=s=>new Vt(typeof s=="string"?s:s+"",void 0,Qe),fi=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,n,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[r+1],s[0]);return new Vt(t,s,Qe)},gi=(s,e)=>{Ye?s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),n=me.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,s.appendChild(i)})},ct=Ye?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return vi(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ne;const we=window,ht=we.trustedTypes,_i=ht?ht.emptyScript:"",pt=we.reactiveElementPolyfillSupport,Be={toAttribute(s,e){switch(e){case Boolean:s=s?_i:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Ft=(s,e)=>e!==s&&(e==e||s==s),Te={attribute:!0,type:String,converter:Be,reflect:!1,hasChanged:Ft},je="finalized";class W extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const n=this._$Ep(i,t);n!==void 0&&(this._$Ev.set(n,i),e.push(n))}),e}static createProperty(e,t=Te){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const r=this[e];this[t]=n,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Te}static finalize(){if(this.hasOwnProperty(je))return!1;this[je]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of i)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(ct(n))}else e!==void 0&&t.push(ct(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return gi(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Te){var n;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Be).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const n=this.constructor,r=n._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=n.getPropertyOptions(r),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:Be;this._$El=r,this[r]=l.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let n=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Ft)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,r)=>this[r]=n),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(i)):this._$Ek()}catch(n){throw t=!1,this._$Ek(),n}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}W[je]=!0,W.elementProperties=new Map,W.elementStyles=[],W.shadowRootOptions={mode:"open"},pt==null||pt({ReactiveElement:W}),((Ne=we.reactiveElementVersions)!==null&&Ne!==void 0?Ne:we.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Re;const $e=window,J=$e.trustedTypes,vt=J?J.createPolicy("lit-html",{createHTML:s=>s}):void 0,ze="$lit$",H=`lit$${(Math.random()+"").slice(9)}$`,Dt="?"+H,mi=`<${Dt}>`,z=document,be=()=>z.createComment(""),ue=s=>s===null||typeof s!="object"&&typeof s!="function",Bt=Array.isArray,wi=s=>Bt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Pe=`[ 	
\f\r]`,ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,gt=/>/g,V=RegExp(`>|${Pe}(?:([^\\s"'>=/]+)(${Pe}*=${Pe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_t=/'/g,mt=/"/g,jt=/^(?:script|style|textarea|title)$/i,ce=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),wt=new WeakMap,D=z.createTreeWalker(z,129,null,!1);function zt(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return vt!==void 0?vt.createHTML(e):e}const $i=(s,e)=>{const t=s.length-1,i=[];let n,r=e===2?"<svg>":"",o=ie;for(let l=0;l<t;l++){const a=s[l];let c,v,d=-1,h=0;for(;h<a.length&&(o.lastIndex=h,v=o.exec(a),v!==null);)h=o.lastIndex,o===ie?v[1]==="!--"?o=ft:v[1]!==void 0?o=gt:v[2]!==void 0?(jt.test(v[2])&&(n=RegExp("</"+v[2],"g")),o=V):v[3]!==void 0&&(o=V):o===V?v[0]===">"?(o=n!=null?n:ie,d=-1):v[1]===void 0?d=-2:(d=o.lastIndex-v[2].length,c=v[1],o=v[3]===void 0?V:v[3]==='"'?mt:_t):o===mt||o===_t?o=V:o===ft||o===gt?o=ie:(o=V,n=void 0);const f=o===V&&s[l+1].startsWith("/>")?" ":"";r+=o===ie?a+mi:d>=0?(i.push(c),a.slice(0,d)+ze+a.slice(d)+H+f):a+H+(d===-2?(i.push(void 0),l):f)}return[zt(s,r+(s[t]||"<?>")+(e===2?"</svg>":"")),i]};class he{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,o=0;const l=e.length-1,a=this.parts,[c,v]=$i(e,t);if(this.el=he.createElement(c,i),D.currentNode=this.el.content,t===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(n=D.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes()){const d=[];for(const h of n.getAttributeNames())if(h.endsWith(ze)||h.startsWith(H)){const f=v[o++];if(d.push(h),f!==void 0){const S=n.getAttribute(f.toLowerCase()+ze).split(H),m=/([.?@])?(.*)/.exec(f);a.push({type:1,index:r,name:m[2],strings:S,ctor:m[1]==="."?yi:m[1]==="?"?Si:m[1]==="@"?Mi:Ee})}else a.push({type:6,index:r})}for(const h of d)n.removeAttribute(h)}if(jt.test(n.tagName)){const d=n.textContent.split(H),h=d.length-1;if(h>0){n.textContent=J?J.emptyScript:"";for(let f=0;f<h;f++)n.append(d[f],be()),D.nextNode(),a.push({type:2,index:++r});n.append(d[h],be())}}}else if(n.nodeType===8)if(n.data===Dt)a.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(H,d+1))!==-1;)a.push({type:7,index:r}),d+=H.length-1}r++}}static createElement(e,t){const i=z.createElement("template");return i.innerHTML=e,i}}function G(s,e,t=s,i){var n,r,o,l;if(e===ce)return e;let a=i!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[i]:t._$Cl;const c=ue(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),c===void 0?a=void 0:(a=new c(s),a._$AT(s,t,i)),i!==void 0?((o=(l=t)._$Co)!==null&&o!==void 0?o:l._$Co=[])[i]=a:t._$Cl=a),a!==void 0&&(e=G(s,a._$AS(s,e.values),a,i)),e}class bi{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:n}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:z).importNode(i,!0);D.currentNode=r;let o=D.nextNode(),l=0,a=0,c=n[0];for(;c!==void 0;){if(l===c.index){let v;c.type===2?v=new xe(o,o.nextSibling,this,e):c.type===1?v=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(v=new xi(o,this,e)),this._$AV.push(v),c=n[++a]}l!==(c==null?void 0:c.index)&&(o=D.nextNode(),l++)}return D.currentNode=z,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class xe{constructor(e,t,i,n){var r;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cp=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),ue(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==ce&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):wi(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==x&&ue(this._$AH)?this._$AA.nextSibling.data=e:this.$(z.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=he.createElement(zt(n.h,n.h[0]),this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new bi(r,this),l=o.u(this.options);o.v(i),this.$(l),this._$AH=o}}_$AC(e){let t=wt.get(e.strings);return t===void 0&&wt.set(e.strings,t=new he(e)),t}T(e){Bt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new xe(this.k(be()),this.k(be()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Ee{constructor(e,t,i,n,r){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const r=this.strings;let o=!1;if(r===void 0)e=G(this,e,t,0),o=!ue(e)||e!==this._$AH&&e!==ce,o&&(this._$AH=e);else{const l=e;let a,c;for(e=r[0],a=0;a<r.length-1;a++)c=G(this,l[i+a],t,a),c===ce&&(c=this._$AH[a]),o||(o=!ue(c)||c!==this._$AH[a]),c===x?e=x:e!==x&&(e+=(c!=null?c:"")+r[a+1]),this._$AH[a]=c}o&&!n&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class yi extends Ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}}const Ai=J?J.emptyScript:"";class Si extends Ee{constructor(){super(...arguments),this.type=4}j(e){e&&e!==x?this.element.setAttribute(this.name,Ai):this.element.removeAttribute(this.name)}}class Mi extends Ee{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=G(this,e,t,0))!==null&&i!==void 0?i:x)===ce)return;const n=this._$AH,r=e===x&&n!==x||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==x&&(n===x||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class xi{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const $t=$e.litHtmlPolyfillSupport;$t==null||$t(he,xe),((Re=$e.litHtmlVersions)!==null&&Re!==void 0?Re:$e.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Oe;const ye=window,Z=ye.trustedTypes,bt=Z?Z.createPolicy("lit-html",{createHTML:s=>s}):void 0,qe="$lit$",U=`lit$${(Math.random()+"").slice(9)}$`,qt="?"+U,Ei=`<${qt}>`,q=document,pe=()=>q.createComment(""),ve=s=>s===null||typeof s!="object"&&typeof s!="function",Wt=Array.isArray,ki=s=>Wt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",He=`[ 	
\f\r]`,ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yt=/-->/g,At=/>/g,F=RegExp(`>|${He}(?:([^\\s"'>=/]+)(${He}*=${He}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),St=/'/g,Mt=/"/g,Jt=/^(?:script|style|textarea|title)$/i,Ci=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),M=Ci(1),K=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),xt=new WeakMap,B=q.createTreeWalker(q,129,null,!1);function Gt(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return bt!==void 0?bt.createHTML(e):e}const Ni=(s,e)=>{const t=s.length-1,i=[];let n,r=e===2?"<svg>":"",o=ne;for(let l=0;l<t;l++){const a=s[l];let c,v,d=-1,h=0;for(;h<a.length&&(o.lastIndex=h,v=o.exec(a),v!==null);)h=o.lastIndex,o===ne?v[1]==="!--"?o=yt:v[1]!==void 0?o=At:v[2]!==void 0?(Jt.test(v[2])&&(n=RegExp("</"+v[2],"g")),o=F):v[3]!==void 0&&(o=F):o===F?v[0]===">"?(o=n!=null?n:ne,d=-1):v[1]===void 0?d=-2:(d=o.lastIndex-v[2].length,c=v[1],o=v[3]===void 0?F:v[3]==='"'?Mt:St):o===Mt||o===St?o=F:o===yt||o===At?o=ne:(o=F,n=void 0);const f=o===F&&s[l+1].startsWith("/>")?" ":"";r+=o===ne?a+Ei:d>=0?(i.push(c),a.slice(0,d)+qe+a.slice(d)+U+f):a+U+(d===-2?(i.push(void 0),l):f)}return[Gt(s,r+(s[t]||"<?>")+(e===2?"</svg>":"")),i]};class fe{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,o=0;const l=e.length-1,a=this.parts,[c,v]=Ni(e,t);if(this.el=fe.createElement(c,i),B.currentNode=this.el.content,t===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(n=B.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes()){const d=[];for(const h of n.getAttributeNames())if(h.endsWith(qe)||h.startsWith(U)){const f=v[o++];if(d.push(h),f!==void 0){const S=n.getAttribute(f.toLowerCase()+qe).split(U),m=/([.?@])?(.*)/.exec(f);a.push({type:1,index:r,name:m[2],strings:S,ctor:m[1]==="."?Ri:m[1]==="?"?Oi:m[1]==="@"?Hi:ke})}else a.push({type:6,index:r})}for(const h of d)n.removeAttribute(h)}if(Jt.test(n.tagName)){const d=n.textContent.split(U),h=d.length-1;if(h>0){n.textContent=Z?Z.emptyScript:"";for(let f=0;f<h;f++)n.append(d[f],pe()),B.nextNode(),a.push({type:2,index:++r});n.append(d[h],pe())}}}else if(n.nodeType===8)if(n.data===qt)a.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(U,d+1))!==-1;)a.push({type:7,index:r}),d+=U.length-1}r++}}static createElement(e,t){const i=q.createElement("template");return i.innerHTML=e,i}}function X(s,e,t=s,i){var n,r,o,l;if(e===K)return e;let a=i!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[i]:t._$Cl;const c=ve(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),c===void 0?a=void 0:(a=new c(s),a._$AT(s,t,i)),i!==void 0?((o=(l=t)._$Co)!==null&&o!==void 0?o:l._$Co=[])[i]=a:t._$Cl=a),a!==void 0&&(e=X(s,a._$AS(s,e.values),a,i)),e}class Ti{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:n}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:q).importNode(i,!0);B.currentNode=r;let o=B.nextNode(),l=0,a=0,c=n[0];for(;c!==void 0;){if(l===c.index){let v;c.type===2?v=new ge(o,o.nextSibling,this,e):c.type===1?v=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(v=new Ui(o,this,e)),this._$AV.push(v),c=n[++a]}l!==(c==null?void 0:c.index)&&(o=B.nextNode(),l++)}return B.currentNode=q,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ge{constructor(e,t,i,n){var r;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cp=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),ve(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==K&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ki(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==$&&ve(this._$AH)?this._$AA.nextSibling.data=e:this.$(q.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=fe.createElement(Gt(n.h,n.h[0]),this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new Ti(r,this),l=o.u(this.options);o.v(i),this.$(l),this._$AH=o}}_$AC(e){let t=xt.get(e.strings);return t===void 0&&xt.set(e.strings,t=new fe(e)),t}T(e){Wt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new ge(this.k(pe()),this.k(pe()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class ke{constructor(e,t,i,n,r){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const r=this.strings;let o=!1;if(r===void 0)e=X(this,e,t,0),o=!ve(e)||e!==this._$AH&&e!==K,o&&(this._$AH=e);else{const l=e;let a,c;for(e=r[0],a=0;a<r.length-1;a++)c=X(this,l[i+a],t,a),c===K&&(c=this._$AH[a]),o||(o=!ve(c)||c!==this._$AH[a]),c===$?e=$:e!==$&&(e+=(c!=null?c:"")+r[a+1]),this._$AH[a]=c}o&&!n&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Ri extends ke{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}}const Pi=Z?Z.emptyScript:"";class Oi extends ke{constructor(){super(...arguments),this.type=4}j(e){e&&e!==$?this.element.setAttribute(this.name,Pi):this.element.removeAttribute(this.name)}}class Hi extends ke{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=X(this,e,t,0))!==null&&i!==void 0?i:$)===K)return;const n=this._$AH,r=e===$&&n!==$||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==$&&(n===$||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Ui{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const Et=ye.litHtmlPolyfillSupport;Et==null||Et(fe,ge),((Oe=ye.litHtmlVersions)!==null&&Oe!==void 0?Oe:ye.litHtmlVersions=[]).push("2.8.0");const Ii=(s,e,t)=>{var i,n;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const l=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=o=new ge(e.insertBefore(pe(),l),l,void 0,t!=null?t:{})}return o._$AI(s),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ue,Ie;class oe extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ii(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return K}}oe.finalized=!0,oe._$litElement$=!0,(Ue=globalThis.litElementHydrateSupport)===null||Ue===void 0||Ue.call(globalThis,{LitElement:oe});const kt=globalThis.litElementPolyfillSupport;kt==null||kt({LitElement:oe});((Ie=globalThis.litElementVersions)!==null&&Ie!==void 0?Ie:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Li=s=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(s,e):((t,i)=>{const{kind:n,elements:r}=i;return{kind:n,elements:r,finisher(o){customElements.define(t,o)}}})(s,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vi=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,s)}},Fi=(s,e,t)=>{e.constructor.createProperty(t,s)};function Di(s){return(e,t)=>t!==void 0?Fi(s,e,t):Vi(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function T(s){return Di({...s,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bi=({finisher:s,descriptor:e})=>(t,i)=>{var n;if(i===void 0){const r=(n=t.originalKey)!==null&&n!==void 0?n:t.key,o=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(t.key)}:{...t,key:r};return s!=null&&(o.finisher=function(l){s(l,r)}),o}{const r=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),s==null||s(r,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function R(s,e){return Bi({descriptor:t=>{const i={get(){var n,r;return(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(s))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const n=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var r,o;return this[n]===void 0&&(this[n]=(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(s))!==null&&o!==void 0?o:null),this[n]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Le;((Le=window.HTMLSlotElement)===null||Le===void 0?void 0:Le.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ji(s,e){if(s!==void 0){let t=0;for(const i of s)yield e(i,t++)}}function p(s){let e,t,i;return typeof s=="object"?(e=s.hashFunction,t=s.expiring,i=s.tags):e=s,(n,r,o)=>{if(o.value!=null)o.value=Ct(o.value,e,t,i);else if(o.get!=null)o.get=Ct(o.get,e,t,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Ve=new Map;function Ct(s,e,t=0,i){const n=Symbol("__memoized_map__");return function(...r){let o;this.hasOwnProperty(n)||Object.defineProperty(this,n,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let l=this[n];if(Array.isArray(i))for(const a of i)Ve.has(a)?Ve.get(a).push(l):Ve.set(a,[l]);if(e||r.length>0||t>0){let a;e===!0?a=r.map(d=>d.toString()).join("!"):e?a=e.apply(this,r):a=r[0];const c=`${a}__timestamp`;let v=!1;if(t>0)if(!l.has(c))v=!0;else{let d=l.get(c);v=Date.now()-d>t}l.has(a)&&!v?o=l.get(a):(o=s.apply(this,r),l.set(a,o),t>0&&l.set(c,Date.now()))}else{const a=this;l.has(a)?o=l.get(a):(o=s.apply(this,r),l.set(a,o))}return o}}var le;(function(s){s[s.COUNT=0]="COUNT",s[s.ALPHABETICAL=1]="ALPHABETICAL",s[s.NUMERIC=2]="NUMERIC"})(le||(le={}));class Zt{constructor(e){this.buckets=e.buckets,this.doc_count_error_upper_bound=e.doc_count_error_upper_bound,this.sum_other_doc_count=e.sum_other_doc_count,this.first_bucket_key=e.first_bucket_key,this.last_bucket_key=e.last_bucket_key,this.number_buckets=e.number_buckets,this.interval=e.interval}getSortedBuckets(e){const t=[...this.buckets];if(this.isRawNumberBuckets(t))return t;const i=new Intl.Collator;switch(e){case le.ALPHABETICAL:return t.sort((n,r)=>i.compare(n.key.toString(),r.key.toString()));case le.NUMERIC:return t.sort((n,r)=>Number(r.key)-Number(n.key));case le.COUNT:default:return t}}isRawNumberBuckets(e){return typeof this.buckets[0]=="number"}}u([p()],Zt.prototype,"getSortedBuckets",null);class We{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:Boolean(e)}}We.shared=new We;class Ae{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}Ae.shared=new Ae;class Je{parseValue(e){return Ae.shared.parseValue(e)}}Je.shared=new Je;class Ge{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const i=Date.parse(t);if(Number.isNaN(i))return;let n=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(n=new Date(n.getTime()+n.getTimezoneOffset()*1e3*60)),n}}Ge.shared=new Ge;class Ze{parseValue(e){if(typeof e=="string")return e}}Ze.shared=new Ze;class Ke{parseValue(e){return String(e)}}Ke.shared=new Ke;class L{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){if(this.rawValue===void 0)return[];const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(i=>{const n=this.parser.parseValue(i);Array.isArray(n)?t.push(...n):n!==void 0&&t.push(n)}),t}}u([p()],L.prototype,"values",null);u([p()],L.prototype,"value",null);class re extends L{constructor(e){super(We.shared,e)}}class Nt extends L{constructor(e){super(Je.shared,e)}}class k extends L{constructor(e){super(Ge.shared,e)}}class Kt extends L{constructor(e){super(Ze.shared,e)}}class E extends L{constructor(e){super(Ae.shared,e)}}class _ extends L{constructor(e){super(Ke.shared,e)}}class g{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.identifier}get addeddate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.addeddate?new k(this.rawMetadata.fields.addeddate):void 0}get avg_rating(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.avg_rating)!=null?new E(this.rawMetadata.fields.avg_rating):void 0}get collection(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection?new _(this.rawMetadata.fields.collection):void 0}get collection_files_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.collection_files_count)!=null?new E(this.rawMetadata.fields.collection_files_count):void 0}get collection_size(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.collection_size)!=null?new Nt(this.rawMetadata.fields.collection_size):void 0}get creator(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.creator?new _(this.rawMetadata.fields.creator):void 0}get date(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date?new k(this.rawMetadata.fields.date):void 0}get description(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.description?new _(this.rawMetadata.fields.description):void 0}get downloads(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.downloads)!=null?new E(this.rawMetadata.fields.downloads):void 0}get files_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.files_count)!=null?new E(this.rawMetadata.fields.files_count):void 0}get genre(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.genre?new _(this.rawMetadata.fields.genre):void 0}get indexflag(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.indexflag?new _(this.rawMetadata.fields.indexflag):void 0}get issue(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.issue?new _(this.rawMetadata.fields.issue):void 0}get item_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.item_count)!=null?new E(this.rawMetadata.fields.item_count):void 0}get item_size(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.item_size)!=null?new Nt(this.rawMetadata.fields.item_size):void 0}get language(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.language?new _(this.rawMetadata.fields.language):void 0}get lending___available_to_borrow(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_borrow)!=null?new re(this.rawMetadata.fields.lending___available_to_borrow):void 0}get lending___available_to_browse(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_browse)!=null?new re(this.rawMetadata.fields.lending___available_to_browse):void 0}get lending___available_to_waitlist(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_waitlist)!=null?new re(this.rawMetadata.fields.lending___available_to_waitlist):void 0}get lending___status(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.lending___status?new _(this.rawMetadata.fields.lending___status):void 0}get licenseurl(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.licenseurl?new _(this.rawMetadata.fields.licenseurl):void 0}get mediatype(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.mediatype?new Kt(this.rawMetadata.fields.mediatype):void 0}get month(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.month)!=null?new E(this.rawMetadata.fields.month):void 0}get noindex(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.noindex)!=null?new re(this.rawMetadata.fields.noindex):void 0}get num_favorites(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.num_favorites)!=null?new E(this.rawMetadata.fields.num_favorites):void 0}get num_reviews(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.num_reviews)!=null?new E(this.rawMetadata.fields.num_reviews):void 0}get publicdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.publicdate?new k(this.rawMetadata.fields.publicdate):void 0}get reviewdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.reviewdate?new k(this.rawMetadata.fields.reviewdate):void 0}get source(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.source?new _(this.rawMetadata.fields.source):void 0}get subject(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.subject?new _(this.rawMetadata.fields.subject):void 0}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new _(this.rawMetadata.fields.title):void 0}get type(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.type?new _(this.rawMetadata.fields.type):void 0}get volume(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.volume?new _(this.rawMetadata.fields.volume):void 0}get week(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.week)!=null?new E(this.rawMetadata.fields.week):void 0}get year(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.year)!=null?new E(this.rawMetadata.fields.year):void 0}}u([p()],g.prototype,"addeddate",null);u([p()],g.prototype,"avg_rating",null);u([p()],g.prototype,"collection",null);u([p()],g.prototype,"collection_files_count",null);u([p()],g.prototype,"collection_size",null);u([p()],g.prototype,"creator",null);u([p()],g.prototype,"date",null);u([p()],g.prototype,"description",null);u([p()],g.prototype,"downloads",null);u([p()],g.prototype,"files_count",null);u([p()],g.prototype,"genre",null);u([p()],g.prototype,"indexflag",null);u([p()],g.prototype,"issue",null);u([p()],g.prototype,"item_count",null);u([p()],g.prototype,"item_size",null);u([p()],g.prototype,"language",null);u([p()],g.prototype,"lending___available_to_borrow",null);u([p()],g.prototype,"lending___available_to_browse",null);u([p()],g.prototype,"lending___available_to_waitlist",null);u([p()],g.prototype,"lending___status",null);u([p()],g.prototype,"licenseurl",null);u([p()],g.prototype,"mediatype",null);u([p()],g.prototype,"month",null);u([p()],g.prototype,"noindex",null);u([p()],g.prototype,"num_favorites",null);u([p()],g.prototype,"num_reviews",null);u([p()],g.prototype,"publicdate",null);u([p()],g.prototype,"reviewdate",null);u([p()],g.prototype,"source",null);u([p()],g.prototype,"subject",null);u([p()],g.prototype,"title",null);u([p()],g.prototype,"type",null);u([p()],g.prototype,"volume",null);u([p()],g.prototype,"week",null);u([p()],g.prototype,"year",null);class w{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.identifier}get highlight(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.highlight)===null||t===void 0)&&t.text?new _(this.rawMetadata.highlight.text):void 0}get addeddate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.addeddate?new k(this.rawMetadata.fields.addeddate):void 0}get avg_rating(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.avg_rating)!=null?new E(this.rawMetadata.fields.avg_rating):void 0}get collection(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection?new _(this.rawMetadata.fields.collection):void 0}get created_on(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.created_on?new k(this.rawMetadata.fields.created_on):void 0}get creator(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.creator?new _(this.rawMetadata.fields.creator):void 0}get date(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date?new k(this.rawMetadata.fields.date):void 0}get description(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.description?new _(this.rawMetadata.fields.description):void 0}get downloads(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.downloads)!=null?new E(this.rawMetadata.fields.downloads):void 0}get filename(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.filename?new _(this.rawMetadata.fields.filename):void 0}get file_basename(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.file_basename?new _(this.rawMetadata.fields.file_basename):void 0}get file_creation_mtime(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.file_creation_mtime)!=null?new E(this.rawMetadata.fields.file_creation_mtime):void 0}get issue(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.issue?new _(this.rawMetadata.fields.issue):void 0}get mediatype(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.mediatype?new Kt(this.rawMetadata.fields.mediatype):void 0}get page_num(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.page_num)!=null?new E(this.rawMetadata.fields.page_num):void 0}get publicdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.publicdate?new k(this.rawMetadata.fields.publicdate):void 0}get result_in_subfile(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.result_in_subfile)!=null?new re(this.rawMetadata.fields.result_in_subfile):void 0}get reviewdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.reviewdate?new k(this.rawMetadata.fields.reviewdate):void 0}get source(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.source?new _(this.rawMetadata.fields.source):void 0}get subject(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.subject?new _(this.rawMetadata.fields.subject):void 0}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new _(this.rawMetadata.fields.title):void 0}get updated_on(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.updated_on?new k(this.rawMetadata.fields.updated_on):void 0}get year(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.year)!=null?new E(this.rawMetadata.fields.year):void 0}get __href__(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new _(this.rawMetadata.fields.__href__):void 0}}u([p()],w.prototype,"highlight",null);u([p()],w.prototype,"addeddate",null);u([p()],w.prototype,"avg_rating",null);u([p()],w.prototype,"collection",null);u([p()],w.prototype,"created_on",null);u([p()],w.prototype,"creator",null);u([p()],w.prototype,"date",null);u([p()],w.prototype,"description",null);u([p()],w.prototype,"downloads",null);u([p()],w.prototype,"filename",null);u([p()],w.prototype,"file_basename",null);u([p()],w.prototype,"file_creation_mtime",null);u([p()],w.prototype,"issue",null);u([p()],w.prototype,"mediatype",null);u([p()],w.prototype,"page_num",null);u([p()],w.prototype,"publicdate",null);u([p()],w.prototype,"result_in_subfile",null);u([p()],w.prototype,"reviewdate",null);u([p()],w.prototype,"source",null);u([p()],w.prototype,"subject",null);u([p()],w.prototype,"title",null);u([p()],w.prototype,"updated_on",null);u([p()],w.prototype,"year",null);u([p()],w.prototype,"__href__",null);class _e{constructor(e){this.rawMetadata=e}get identifier(){var e;return(e=this.rawMetadata)===null||e===void 0?void 0:e.fields.query}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new _(this.rawMetadata.fields.title):void 0}get query(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.query?new _(this.rawMetadata.fields.query):void 0}get date_favorited(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date_favorited?new k(this.rawMetadata.fields.date_favorited):void 0}get __href__(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new _(this.rawMetadata.fields.__href__):void 0}}u([p()],_e.prototype,"title",null);u([p()],_e.prototype,"query",null);u([p()],_e.prototype,"date_favorited",null);u([p()],_e.prototype,"__href__",null);function zi(s){return`${s.slice(0,4)}-${s.slice(4,6)}-${s.slice(6,8)}T${s.slice(8,10)}:${s.slice(10,12)}:${s.slice(12,14)}Z`}function qi(s){var e;const t=[];for(const i of s)!(!((e=i.captures)===null||e===void 0)&&e.length)||t.push({hit_type:"web_archive",fields:{url:i.url,capture_dates:i.captures.map(n=>zi(n)),__href__:`https://web.archive.org/web/${i.captures[0]}/${encodeURIComponent(i.url)}`}});return t}class Ce{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.url}get title(){var e,t,i;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.url?new _((i=this.rawMetadata.fields)===null||i===void 0?void 0:i.url):void 0}get capture_dates(){var e,t,i;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.capture_dates?new k((i=this.rawMetadata.fields)===null||i===void 0?void 0:i.capture_dates):void 0}get __href__(){var e,t,i;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new _((i=this.rawMetadata.fields)===null||i===void 0?void 0:i.__href__):void 0}}u([p()],Ce.prototype,"title",null);u([p()],Ce.prototype,"capture_dates",null);u([p()],Ce.prototype,"__href__",null);class et{constructor(e,t){var i,n,r,o,l,a,c,v,d,h,f,S,m,N;this.schema=t;const P=t==null?void 0:t.hit_type;let A;console.log("has page elements?",!!(e!=null&&e.page_elements)),e!=null&&e.page_elements&&(this.pageElements=e.page_elements,A=Object.values(this.pageElements)[0],console.log("first page element is",A));let y=(i=e==null?void 0:e.hits)===null||i===void 0?void 0:i.hits;this.totalResults=(r=(n=e==null?void 0:e.hits)===null||n===void 0?void 0:n.total)!==null&&r!==void 0?r:0,this.returnedCount=(l=(o=e==null?void 0:e.hits)===null||o===void 0?void 0:o.returned)!==null&&l!==void 0?l:0,console.log("hits from body",y),!(y!=null&&y.length)&&((a=A==null?void 0:A.hits)===null||a===void 0?void 0:a.hits)?(y=A.hits.hits,this.totalResults=(c=A.hits.total)!==null&&c!==void 0?c:0,this.returnedCount=(v=A.hits.returned)!==null&&v!==void 0?v:0,console.log("hits from page element",y)):!((d=this.pageElements)===null||d===void 0)&&d.web_archives&&(y=qi(this.pageElements.web_archives),this.totalResults=(h=this.pageElements.web_archives.length)!==null&&h!==void 0?h:0,this.returnedCount=this.totalResults,console.log("hits from web archives",y)),console.log("total/returned:",this.totalResults,this.returnedCount),this.results=(f=y==null?void 0:y.map(ee=>{var te;return et.createResult((te=ee.hit_type)!==null&&te!==void 0?te:P,ee)}))!==null&&f!==void 0?f:[],console.log("results",this.results);let Q=e==null?void 0:e.aggregations;const tt=this.aggregations&&Object.keys(this.aggregations).length>0;console.log("aggs from body",tt,Q),!tt&&(A==null?void 0:A.aggregations)&&(Q=A.aggregations,console.log("aggs from page element",Q)),Q&&(this.aggregations=Object.entries(Q).reduce((ee,[te,Yt])=>(ee[te]=new Zt(Yt),ee),{}),console.log(this.aggregations)),e!=null&&e.collection_titles&&(this.collectionTitles=(S=e.collection_titles)!==null&&S!==void 0?S:{}),e!=null&&e.collection_extra_info&&(this.collectionExtraInfo=(m=e.collection_extra_info)!==null&&m!==void 0?m:null),e!=null&&e.account_extra_info&&(this.accountExtraInfo=(N=e.account_extra_info)!==null&&N!==void 0?N:null,console.log("acct extra info (search service)",this.accountExtraInfo))}static createResult(e,t){switch(e){case"item":return new g(t);case"text":return new w(t);case"favorited_search":return new _e(t);case"web_archive":return new Ce(t);default:return new g(t)}}}class Wi{constructor(e){this.clientParameters=e.client_parameters,this.backendRequests=e.backend_requests,this.kind=e.kind}}class Ji{constructor(e){var t,i,n;this.rawResponse=e,this.request=new Wi(e.request),this.responseHeader=(t=e.response)===null||t===void 0?void 0:t.header,this.response=new et((i=e.response)===null||i===void 0?void 0:i.body,(n=e.response)===null||n===void 0?void 0:n.hit_schema)}}var j;(function(s){s[s.METADATA=0]="METADATA",s[s.FULLTEXT=1]="FULLTEXT"})(j||(j={}));class Se{static aggregateSearchParamsAsString(e){if(e.omit)return"false";if(e.advancedParams){const t=e.advancedParams.map(n=>({terms:n}));return JSON.stringify(t)}if(e.simpleParams)return e.simpleParams.join(",")}static sortParamsAsString(e){return`${e.field}:${e.direction}`}static filterParamsAsString(e){return JSON.stringify(e)}static generateURLSearchParams(e){const t=new URLSearchParams;if(t.append("user_query",e.query),e.pageType&&t.append("page_type",String(e.pageType)),e.pageTarget&&t.append("page_target",String(e.pageTarget)),e.pageElements&&e.pageElements.length>0){const r=`[${e.pageElements.map(o=>`"${o}"`).join(",")}]`;t.append("page_elements",r)}if(e.rows!=null&&t.append("hits_per_page",String(e.rows)),e.page!=null&&t.append("page",String(e.page)),e.fields&&e.fields.length>0&&t.append("fields",e.fields.join(",")),e.filters&&Object.keys(e.filters).length>0){const n=this.filterParamsAsString(e.filters);n&&n!=="{}"&&t.append("filter_map",n)}if(e.sort&&e.sort.length>0){const n=e.sort.map(r=>this.sortParamsAsString(r));t.append("sort",n.join(","))}const i=e.aggregations;if(i){const n=this.aggregateSearchParamsAsString(i);n&&t.append("aggregations",n)}if(e.aggregationsSize!=null&&t.append("aggregations_size",String(e.aggregationsSize)),e.debugging&&t.append("debugging","true"),e.uid&&t.append("uid",e.uid),e.includeClientUrl!==!1){const n=window.location.href.slice(0,400);e.query.length<=1e3&&t.append("client_url",n)}return t}}var ae;(function(s){s.networkError="SearchService.NetworkError",s.itemNotFound="SearchService.ItemNotFound",s.decodingError="SearchService.DecodingError",s.searchEngineError="SearchService.SearchEngineError"})(ae||(ae={}));class Gi extends Error{constructor(e,t,i){super(t),this.name=e,this.type=e,this.details=i}}const Tt={reCache:JSON.stringify({recompute:!0}),noCache:JSON.stringify({bypass:!0}),dontCache:JSON.stringify({no_compute:!0})};class Xt{constructor(e){var t,i;this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null;const n=new URL(window.location.href).searchParams,r=n.get("scope"),o=n.get("verbose"),l=n.get("debugging"),a=n.get("cacheDebug");let c="";for(const v of Object.keys(Tt))if(n.get(v)){c=Tt[v];break}c=(i=n.get("caching"))!==null&&i!==void 0?i:c,(e==null?void 0:e.caching)!==void 0?this.cachingFlags=e.caching:c&&(this.cachingFlags=c),(e==null?void 0:e.debuggingEnabled)!==void 0?this.debuggingEnabled=e.debuggingEnabled:(l||a)&&(this.debuggingEnabled=!0),(e==null?void 0:e.scope)!==void 0?this.requestScope=e.scope:r&&(this.requestScope=r),(e==null?void 0:e.verbose)!==void 0?this.verbose=e.verbose:o&&(this.verbose=!!o)}async fetchUrl(e,t){var i,n;const r=new URL(e);this.requestScope&&r.searchParams.set("scope",this.requestScope),this.cachingFlags&&r.searchParams.set("caching",this.cachingFlags);let o;try{const l=(i=t==null?void 0:t.requestOptions)!==null&&i!==void 0?i:{credentials:this.includeCredentials?"include":"same-origin"};o=await fetch(r.href,l)}catch(l){const a=l instanceof Error?l.message:typeof l=="string"?l:"Unknown error";return this.getErrorResult(ae.networkError,a)}try{const l=await o.json();this.verbose&&this.printResponse(l),l.debugging&&this.printDebuggingInfo(l);const a=(n=l.response)===null||n===void 0?void 0:n.error;return a?this.getErrorResult(ae.searchEngineError,a.message,a.forensics):{success:l}}catch(l){const a=l instanceof Error?l.message:typeof l=="string"?l:"Unknown error";return this.getErrorResult(ae.decodingError,a)}}getErrorResult(e,t,i){return{error:new Gi(e,t,i)}}printResponse(e){var t,i,n,r,o;try{const l=JSON.parse(JSON.stringify(e)),a=(n=(i=(t=l==null?void 0:l.response)===null||t===void 0?void 0:t.body)===null||i===void 0?void 0:i.hits)===null||n===void 0?void 0:n.hits;if(Array.isArray(a)&&a.length>1){const v=[];v.push(a[0]),v.push(`*** ${a.length-1} hits omitted ***`),l.response.body.hits.hits=v}const c=(o=(r=l==null?void 0:l.response)===null||r===void 0?void 0:r.body)===null||o===void 0?void 0:o.aggregations;c&&Object.entries(c).forEach(([v,d])=>{var h,f,S;if(((h=d==null?void 0:d.buckets)===null||h===void 0?void 0:h.length)>0){const m=JSON.parse(JSON.stringify(d));m.buckets=`*** ${(S=(f=m.buckets)===null||f===void 0?void 0:f.length)!==null&&S!==void 0?S:0} buckets omitted ***`,l.response.body.aggregations[v]=m}}),console.log("***** RESPONSE RECEIVED *****"),console.groupCollapsed("Response"),console.log(JSON.stringify(l,null,2)),console.groupEnd()}catch(l){console.error("Error printing search response:",l)}}printDebuggingInfo(e){var t,i;const n=e.debugging,r=(t=n.messages)!==null&&t!==void 0?t:[],o=(i=n.data)!==null&&i!==void 0?i:{};console.log("***** BEGIN DEBUGGING *****"),console.log("Full response:"),console.log(JSON.stringify(e,null,2)),console.group("Debug messages");for(const l of r)console.log(l);console.groupEnd(),console.group("Debug data");for(const[l,a]of Object.entries(o))console.log(l,a);console.groupEnd(),console.log("***** END DEBUGGING *****")}}class Zi extends Xt{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=Se.generateURLSearchParams(e).toString(),n=`https://${this.baseUrl}${this.servicePath}/?service_backend=fts&${i}`;return this.fetchUrl(n)}}class Ki extends Xt{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=Se.generateURLSearchParams(e).toString(),n=`https://${this.baseUrl}${this.servicePath}/?${i}`;return this.fetchUrl(n)}}class Y{constructor(e={}){this.backendOptions=e}async search(e,t=j.METADATA){const n=await Y.getBackendForSearchType(t,this.backendOptions).performSearch(e);return n.error?n:{success:new Ji(n.success)}}static getBackendForSearchType(e,t={}){switch(e){case j.FULLTEXT:return new Zi(t);case j.METADATA:default:return new Ki(t)}}}Y.default=new Y;u([p((s,e={})=>{const{includeCredentials:t=!1,verbose:i=!1,scope:n="",baseUrl:r=""}=e;return`${s};${t};${i};${n};${r}`})],Y,"getBackendForSearchType",null);class Rt{constructor(){this.filterMap={}}addFilter(e,t,i){if(this.filterMap[e]||(this.filterMap[e]={}),this.filterMap[e][t]){const n=[].concat(this.filterMap[e][t],i);this.filterMap[e][t]=Array.from(new Set(n))}else this.filterMap[e][t]=i;return this}removeSingleFilter(e,t,i){var n;if(!(!((n=this.filterMap[e])===null||n===void 0)&&n[t]))return this;const r=[].concat(this.filterMap[e][t]),o=r.indexOf(i);return o>=0&&r.splice(o,1),this.filterMap[e][t]=r.length===1?r[0]:r,r.length===0&&delete this.filterMap[e][t],this.deleteFieldIfEmpty(e),this}removeFilters(e,t){return this.filterMap[e]?(delete this.filterMap[e][t],this.deleteFieldIfEmpty(e),this):this}deleteFieldIfEmpty(e){const t=this.filterMap[e];t&&Object.keys(t).length===0&&delete this.filterMap[e]}setFilterMap(e){return this.filterMap={...e},this}mergeFilterMap(e){for(const[t,i]of Object.entries(e))for(const[n,r]of Object.entries(i))if(Array.isArray(r))for(const o of r)this.addFilter(t,n,o);else this.addFilter(t,n,r);return this}build(){return this.filterMap}}let b=class extends oe{constructor(){super(...arguments),this.searchServiceUrlOptions=this.initSearchServiceUrlOptions(),this.filterMap={},this.loadingSearchResults=!1,this.loadingAggregations=!1,this.defaultAggregationsChecked=!0,this.fullSearchResultsShown=!1,this.searchService=new Y(this.searchServiceUrlOptions)}get searchResults(){var e;return(e=this.searchResponse)===null||e===void 0?void 0:e.response.results}get searchAggregations(){var e;return(e=this.aggregationsResponse)===null||e===void 0?void 0:e.response.aggregations}initSearchServiceUrlOptions(){var e,t,i;const n=new URL(window.location.href).searchParams;return{baseUrl:(e=n.get("search_base_url"))!==null&&e!==void 0?e:"ia-petabox-ximm-pps-feature-include-favorited-searches.archive.org",servicePath:(t=n.get("search_service_path"))!==null&&t!==void 0?t:void 0,debuggingEnabled:(i=!!n.get("debugging"))!==null&&i!==void 0?i:void 0}}render(){var e;return M`
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

      ${this.searchResults||this.loadingSearchResults?this.resultsTemplate:$}
    `}filterFieldChanged(e){var t,i;const r=!!e.target.selectedOptions[0].dataset.numeric,o=(i=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelectorAll("#filter-constraint option"))!==null&&i!==void 0?i:[];for(const l of o)l.toggleAttribute("hidden",!r&&!!l.dataset.numeric)}addFilterClicked(){const e=this.filterFieldInput.selectedOptions[0].value,t=this.filterValueInput.value,i=this.filterConstraintInput.selectedOptions[0].value;!e||!i||!t||(this.filterMap=new Rt().setFilterMap(this.filterMap).addFilter(e,t,i).build(),this.filterValueInput.value="")}removeFilterClicked(e){const t=e.target,{field:i,value:n,constraint:r}=t.dataset;i&&n&&r&&(this.filterMap=new Rt().setFilterMap(this.filterMap).removeSingleFilter(i,n,r).build())}get appliedFiltersTemplate(){const e=[];for(const[i,n]of Object.entries(this.filterMap))for(const[r,o]of Object.entries(n))if(Array.isArray(o))for(const l of o)e.push({field:i,value:r,constraint:l});else e.push({field:i,value:r,constraint:o});if(e.length===0)return M`<span>(no filters applied)</span>`;const t={inc:"includes",exc:"excludes",gt:">",gte:">=",lt:"<",lte:"<="};return ji(e,({field:i,value:n,constraint:r})=>M`
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
            </div>`:$}
        ${this.lastAggregationParams?M`<div>
              Last aggregation params:
              <pre class="params">${this.lastAggregationParams}</pre>
            </div>`:$}
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
          >`:$}
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
    `}get snippetsHeaderTemplate(){var e;return!((e=this.searchResults)===null||e===void 0)&&e.some(t=>t.highlight)?M`<th>Snippets</th>`:M`${$}`}snippetTemplate(e){return e.highlight?M`<td>${e.highlight.value}</td>`:M`${$}`}toggleDefaultAggregations(){var e;this.defaultAggregationsChecked=(e=this.defaultAggregationsCheckbox)===null||e===void 0?void 0:e.checked}toggleFullSearchResults(){this.fullSearchResultsShown=!this.fullSearchResultsShown}async search(e){var t;e.preventDefault();const i=this.searchInput.value,n=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector("input[name='search-type']:checked"),r=(n==null?void 0:n.value)==="fts"?j.FULLTEXT:j.METADATA;this.fetchSearchResults(i,r),this.fetchAggregations(i,r)}async fetchSearchResults(e,t){var i,n,r,o,l,a;const c=((i=this.checkedSort)===null||i===void 0?void 0:i.value)==="none"?void 0:[{field:"title",direction:(n=this.checkedSort)===null||n===void 0?void 0:n.value}],v=Number((r=this.rowsInput)===null||r===void 0?void 0:r.value),d=(o=this.debugCheck)===null||o===void 0?void 0:o.checked,h={query:e,rows:v,sort:c,filters:this.filterMap,aggregations:{omit:!0},debugging:d,uid:"demo"};!((l=this.searchWithinCheck)===null||l===void 0)&&l.checked&&(h.pageTarget=e,h.pageType="collection_details"),this.lastSearchParams=decodeURIComponent(Se.generateURLSearchParams(h).toString()),this.loadingSearchResults=!0;const f=await this.searchService.search(h,t);this.loadingSearchResults=!1,f!=null&&f.success?this.searchResponse=f==null?void 0:f.success:(alert(`Oh noes: ${(a=f==null?void 0:f.error)===null||a===void 0?void 0:a.message}`),console.error("Error searching",f==null?void 0:f.error))}async fetchAggregations(e,t){var i,n,r,o;const l=(i=this.shadowRoot)===null||i===void 0?void 0:i.querySelectorAll("input[name='aggs']:checked"),a={simpleParams:l?[...l].map(f=>f.value):void 0},c=Number((n=this.numAggsInput)===null||n===void 0?void 0:n.value),v=(r=this.debugCheck)===null||r===void 0?void 0:r.checked,d={query:e,rows:0,filters:this.filterMap,aggregationsSize:c,debugging:v,uid:"demo"};this.defaultAggregationsChecked||(d.aggregations=a),this.lastAggregationParams=decodeURIComponent(Se.generateURLSearchParams(d).toString()),this.loadingAggregations=!0;const h=await this.searchService.search(d,t);this.loadingAggregations=!1,h!=null&&h.success?this.aggregationsResponse=h==null?void 0:h.success:(alert(`Oh noes: ${(o=h==null?void 0:h.error)===null||o===void 0?void 0:o.message}`),console.error("Error searching",h==null?void 0:h.error))}static get styles(){return fi`
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
    `}};u([R("#search-input")],b.prototype,"searchInput",void 0);u([R("#search-within-check")],b.prototype,"searchWithinCheck",void 0);u([R("#debug-info-check")],b.prototype,"debugCheck",void 0);u([R("#num-rows")],b.prototype,"rowsInput",void 0);u([R("#num-aggs")],b.prototype,"numAggsInput",void 0);u([R("input[name='sort']:checked")],b.prototype,"checkedSort",void 0);u([R("#filter-field")],b.prototype,"filterFieldInput",void 0);u([R("#filter-constraint")],b.prototype,"filterConstraintInput",void 0);u([R("#filter-value")],b.prototype,"filterValueInput",void 0);u([R("#aggs-default")],b.prototype,"defaultAggregationsCheckbox",void 0);u([T()],b.prototype,"searchServiceUrlOptions",void 0);u([T()],b.prototype,"filterMap",void 0);u([T()],b.prototype,"searchResponse",void 0);u([T()],b.prototype,"aggregationsResponse",void 0);u([T()],b.prototype,"loadingSearchResults",void 0);u([T()],b.prototype,"loadingAggregations",void 0);u([T()],b.prototype,"lastSearchParams",void 0);u([T()],b.prototype,"lastAggregationParams",void 0);u([T()],b.prototype,"defaultAggregationsChecked",void 0);u([T()],b.prototype,"fullSearchResultsShown",void 0);b=u([Li("app-root")],b);hi(pi`
        <app-root></app-root>
      `,document.querySelector("#demo"));
