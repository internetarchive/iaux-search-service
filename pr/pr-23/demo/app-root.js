const Lt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}};Lt();/**
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
 */const It=new WeakMap,re=s=>typeof s=="function"&&It.has(s);/**
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
 */const qe=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,yt=(s,e,t=null)=>{for(;e!==t;){const i=e.nextSibling;s.removeChild(e),e=i}};/**
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
 */const x={},We={};/**
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
 */const O=`{{lit-${String(Math.random()).slice(2)}}}`,wt=`<!--${O}-->`,Ge=new RegExp(`${O}|${wt}`),te="$lit$";class Vt{constructor(e,t){this.parts=[],this.element=t;const i=[],n=[],r=document.createTreeWalker(t.content,133,null,!1);let o=0,a=-1,l=0;const{strings:u,values:{length:g}}=e;for(;l<g;){const d=r.nextNode();if(d===null){r.currentNode=n.pop();continue}if(a++,d.nodeType===1){if(d.hasAttributes()){const c=d.attributes,{length:f}=c;let S=0;for(let w=0;w<f;w++)Je(c[w].name,te)&&S++;for(;S-- >0;){const w=u[l],D=Pe.exec(w)[2],j=D.toLowerCase()+te,H=d.getAttribute(j);d.removeAttribute(j);const k=H.split(Ge);this.parts.push({type:"attribute",index:a,name:D,strings:k}),l+=k.length-1}}d.tagName==="TEMPLATE"&&(n.push(d),r.currentNode=d.content)}else if(d.nodeType===3){const c=d.data;if(c.indexOf(O)>=0){const f=d.parentNode,S=c.split(Ge),w=S.length-1;for(let D=0;D<w;D++){let j,H=S[D];if(H==="")j=C();else{const k=Pe.exec(H);k!==null&&Je(k[2],te)&&(H=H.slice(0,k.index)+k[1]+k[2].slice(0,-te.length)+k[3]),j=document.createTextNode(H)}f.insertBefore(j,d),this.parts.push({type:"node",index:++a})}S[w]===""?(f.insertBefore(C(),d),i.push(d)):d.data=S[w],l+=w}}else if(d.nodeType===8)if(d.data===O){const c=d.parentNode;(d.previousSibling===null||a===o)&&(a++,c.insertBefore(C(),d)),o=a,this.parts.push({type:"node",index:a}),d.nextSibling===null?d.data="":(i.push(d),a--),l++}else{let c=-1;for(;(c=d.data.indexOf(O,c+1))!==-1;)this.parts.push({type:"node",index:-1}),l++}}for(const d of i)d.parentNode.removeChild(d)}}const Je=(s,e)=>{const t=s.length-e.length;return t>=0&&s.slice(t)===e},Dt=s=>s.index!==-1,C=()=>document.createComment(""),Pe=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
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
 */class Ke{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)i!==void 0&&i.setValue(e[t]),t++;for(const i of this.__parts)i!==void 0&&i.commit()}_clone(){const e=qe?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let r=0,o=0,a,l=n.nextNode();for(;r<i.length;){if(a=i[r],!Dt(a)){this.__parts.push(void 0),r++;continue}for(;o<a.index;)o++,l.nodeName==="TEMPLATE"&&(t.push(l),n.currentNode=l.content),(l=n.nextNode())===null&&(n.currentNode=t.pop(),l=n.nextNode());if(a.type==="node"){const u=this.processor.handleTextExpression(this.options);u.insertAfterNode(l.previousSibling),this.__parts.push(u)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,a.name,a.strings,this.options));r++}return qe&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
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
 */const Ze=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:s=>s}),jt=` ${O} `;class bt{constructor(e,t,i,n){this.strings=e,this.values=t,this.type=i,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let n=0;n<e;n++){const r=this.strings[n],o=r.lastIndexOf("<!--");i=(o>-1||i)&&r.indexOf("-->",o+1)===-1;const a=Pe.exec(r);a===null?t+=r+(i?jt:wt):t+=r.substr(0,a.index)+a[1]+a[2]+te+a[3]+O}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return Ze!==void 0&&(t=Ze.createHTML(t)),e.innerHTML=t,e}}/**
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
 */const je=s=>s===null||!(typeof s=="object"||typeof s=="function"),Oe=s=>Array.isArray(s)||!!(s&&s[Symbol.iterator]);class At{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let n=0;n<i.length-1;n++)this.parts[n]=this._createPart()}_createPart(){return new St(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(t===1&&e[0]===""&&e[1]===""){const r=i[0].value;if(typeof r=="symbol")return String(r);if(typeof r=="string"||!Oe(r))return r}let n="";for(let r=0;r<t;r++){n+=e[r];const o=i[r];if(o!==void 0){const a=o.value;if(je(a)||!Oe(a))n+=typeof a=="string"?a:String(a);else for(const l of a)n+=typeof l=="string"?l:String(l)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class St{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==x&&(!je(e)||e!==this.value)&&(this.value=e,re(e)||(this.committer.dirty=!0))}commit(){for(;re(this.value);){const e=this.value;this.value=x,e(this)}this.value!==x&&this.committer.commit()}}class we{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(C()),this.endNode=e.appendChild(C())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=C()),e.__insert(this.endNode=C())}insertAfterPart(e){e.__insert(this.startNode=C()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;re(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=x,t(this)}const e=this.__pendingValue;e!==x&&(je(e)?e!==this.value&&this.__commitText(e):e instanceof bt?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Oe(e)?this.__commitIterable(e):e===We?(this.value=We,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=e==null?"":e;const i=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof Ke&&this.value.template===t)this.value.update(e.values);else{const i=new Ke(t,e.processor,this.options),n=i._clone();i.update(e.values),this.__commitNode(n),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i=0,n;for(const r of e)n=t[i],n===void 0&&(n=new we(this.options),t.push(n),i===0?n.appendIntoPart(this):n.insertAfterPart(t[i-1])),n.setValue(r),n.commit(),i++;i<t.length&&(t.length=i,this.clear(n&&n.endNode))}clear(e=this.startNode){yt(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Bt{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,i.length!==2||i[0]!==""||i[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;re(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=x,t(this)}if(this.__pendingValue===x)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=x}}class Ft extends At{constructor(e,t,i){super(e,t,i),this.single=i.length===2&&i[0]===""&&i[1]===""}_createPart(){return new zt(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class zt extends St{}let Mt=!1;(()=>{try{const s={get capture(){return Mt=!0,!1}};window.addEventListener("test",s,s),window.removeEventListener("test",s,s)}catch{}})();class qt{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=n=>this.handleEvent(n)}setValue(e){this.__pendingValue=e}commit(){for(;re(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=x,r(this)}if(this.__pendingValue===x)return;const e=this.__pendingValue,t=this.value,i=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=e!=null&&(t==null||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=Wt(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=x}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Wt=s=>s&&(Mt?{capture:s.capture,passive:s.passive,once:s.once}:s.capture);/**
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
 */class Gt{handleAttributeExpressions(e,t,i,n){const r=t[0];return r==="."?new Ft(e,t.slice(1),i).parts:r==="@"?[new qt(e,t.slice(1),n.eventContext)]:r==="?"?[new Bt(e,t.slice(1),i)]:new At(e,t,i).parts}handleTextExpression(e){return new we(e)}}const Jt=new Gt;/**
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
 */function Kt(s){let e=Xe.get(s.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},Xe.set(s.type,e));let t=e.stringsArray.get(s.strings);if(t!==void 0)return t;const i=s.strings.join(O);return t=e.keyString.get(i),t===void 0&&(t=new Vt(s,s.getTemplateElement()),e.keyString.set(i,t)),e.stringsArray.set(s.strings,t),t}const Xe=new Map;/**
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
 */const Ye=new WeakMap,Zt=(s,e,t)=>{let i=Ye.get(e);i===void 0&&(yt(e,e.firstChild),Ye.set(e,i=new we(Object.assign({templateFactory:Kt},t))),i.appendInto(e)),i.setValue(s),i.commit()};/**
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
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const Xt=(s,...e)=>new bt(s,e,"html",Jt);/*! *****************************************************************************
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
***************************************************************************** */function h(s,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(e,t,r):o(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=window,Be=pe.ShadowRoot&&(pe.ShadyCSS===void 0||pe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fe=Symbol(),Qe=new WeakMap;class xt{constructor(e,t,i){if(this._$cssResult$=!0,i!==Fe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Be&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Qe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Qe.set(t,e))}return e}toString(){return this.cssText}}const Yt=s=>new xt(typeof s=="string"?s:s+"",void 0,Fe),Qt=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,n,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[r+1],s[0]);return new xt(t,s,Fe)},ei=(s,e)=>{Be?s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),n=pe.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,s.appendChild(i)})},et=Be?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Yt(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Me;const ve=window,tt=ve.trustedTypes,ti=tt?tt.emptyScript:"",it=ve.reactiveElementPolyfillSupport,Ue={toAttribute(s,e){switch(e){case Boolean:s=s?ti:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Et=(s,e)=>e!==s&&(e==e||s==s),xe={attribute:!0,type:String,converter:Ue,reflect:!1,hasChanged:Et};class B extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const n=this._$Ep(i,t);n!==void 0&&(this._$Ev.set(n,i),e.push(n))}),e}static createProperty(e,t=xe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const r=this[e];this[t]=n,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||xe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of i)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(et(n))}else e!==void 0&&t.push(et(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ei(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=xe){var n;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Ue).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const n=this.constructor,r=n._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=n.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:Ue;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let n=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Et)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,r)=>this[r]=n),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(i)):this._$Ek()}catch(n){throw t=!1,this._$Ek(),n}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}B.finalized=!0,B.elementProperties=new Map,B.elementStyles=[],B.shadowRootOptions={mode:"open"},it==null||it({ReactiveElement:B}),((Me=ve.reactiveElementVersions)!==null&&Me!==void 0?Me:ve.reactiveElementVersions=[]).push("1.4.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ee;const fe=window,q=fe.trustedTypes,nt=q?q.createPolicy("lit-html",{createHTML:s=>s}):void 0,R=`lit$${(Math.random()+"").slice(9)}$`,kt="?"+R,ii=`<${kt}>`,W=document,ge=(s="")=>W.createComment(s),oe=s=>s===null||typeof s!="object"&&typeof s!="function",Tt=Array.isArray,ni=s=>Tt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,st=/-->/g,rt=/>/g,L=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,lt=/"/g,Nt=/^(?:script|style|textarea|title)$/i,le=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),at=new WeakMap,F=W.createTreeWalker(W,129,null,!1),si=(s,e)=>{const t=s.length-1,i=[];let n,r=e===2?"<svg>":"",o=Q;for(let l=0;l<t;l++){const u=s[l];let g,d,c=-1,f=0;for(;f<u.length&&(o.lastIndex=f,d=o.exec(u),d!==null);)f=o.lastIndex,o===Q?d[1]==="!--"?o=st:d[1]!==void 0?o=rt:d[2]!==void 0?(Nt.test(d[2])&&(n=RegExp("</"+d[2],"g")),o=L):d[3]!==void 0&&(o=L):o===L?d[0]===">"?(o=n!=null?n:Q,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,g=d[1],o=d[3]===void 0?L:d[3]==='"'?lt:ot):o===lt||o===ot?o=L:o===st||o===rt?o=Q:(o=L,n=void 0);const S=o===L&&s[l+1].startsWith("/>")?" ":"";r+=o===Q?u+ii:c>=0?(i.push(g),u.slice(0,c)+"$lit$"+u.slice(c)+R+S):u+R+(c===-2?(i.push(void 0),l):S)}const a=r+(s[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[nt!==void 0?nt.createHTML(a):a,i]};class ae{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[u,g]=si(e,t);if(this.el=ae.createElement(u,i),F.currentNode=this.el.content,t===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(n=F.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes()){const d=[];for(const c of n.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(R)){const f=g[o++];if(d.push(c),f!==void 0){const S=n.getAttribute(f.toLowerCase()+"$lit$").split(R),w=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:w[2],strings:S,ctor:w[1]==="."?oi:w[1]==="?"?ai:w[1]==="@"?di:Ae})}else l.push({type:6,index:r})}for(const c of d)n.removeAttribute(c)}if(Nt.test(n.tagName)){const d=n.textContent.split(R),c=d.length-1;if(c>0){n.textContent=q?q.emptyScript:"";for(let f=0;f<c;f++)n.append(d[f],ge()),F.nextNode(),l.push({type:2,index:++r});n.append(d[c],ge())}}}else if(n.nodeType===8)if(n.data===kt)l.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(R,d+1))!==-1;)l.push({type:7,index:r}),d+=R.length-1}r++}}static createElement(e,t){const i=W.createElement("template");return i.innerHTML=e,i}}function G(s,e,t=s,i){var n,r,o,a;if(e===le)return e;let l=i!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[i]:t._$Cl;const u=oe(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==u&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),u===void 0?l=void 0:(l=new u(s),l._$AT(s,t,i)),i!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=G(s,l._$AS(s,e.values),l,i)),e}class ri{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:n}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:W).importNode(i,!0);F.currentNode=r;let o=F.nextNode(),a=0,l=0,u=n[0];for(;u!==void 0;){if(a===u.index){let g;u.type===2?g=new be(o,o.nextSibling,this,e):u.type===1?g=new u.ctor(o,u.name,u.strings,this,e):u.type===6&&(g=new ui(o,this,e)),this.u.push(g),u=n[++l]}a!==(u==null?void 0:u.index)&&(o=F.nextNode(),a++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class be{constructor(e,t,i,n){var r;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cm=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),oe(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==le&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ni(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==A&&oe(this._$AH)?this._$AA.nextSibling.data=e:this.T(W.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ae.createElement(n.h,this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const o=new ri(r,this),a=o.v(this.options);o.p(i),this.T(a),this._$AH=o}}_$AC(e){let t=at.get(e.strings);return t===void 0&&at.set(e.strings,t=new ae(e)),t}k(e){Tt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new be(this.O(ge()),this.O(ge()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Ae{constructor(e,t,i,n,r){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const r=this.strings;let o=!1;if(r===void 0)e=G(this,e,t,0),o=!oe(e)||e!==this._$AH&&e!==le,o&&(this._$AH=e);else{const a=e;let l,u;for(e=r[0],l=0;l<r.length-1;l++)u=G(this,a[i+l],t,l),u===le&&(u=this._$AH[l]),o||(o=!oe(u)||u!==this._$AH[l]),u===A?e=A:e!==A&&(e+=(u!=null?u:"")+r[l+1]),this._$AH[l]=u}o&&!n&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class oi extends Ae{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}const li=q?q.emptyScript:"";class ai extends Ae{constructor(){super(...arguments),this.type=4}j(e){e&&e!==A?this.element.setAttribute(this.name,li):this.element.removeAttribute(this.name)}}class di extends Ae{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=G(this,e,t,0))!==null&&i!==void 0?i:A)===le)return;const n=this._$AH,r=e===A&&n!==A||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==A&&(n===A||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class ui{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const dt=fe.litHtmlPolyfillSupport;dt==null||dt(ae,be),((Ee=fe.litHtmlVersions)!==null&&Ee!==void 0?Ee:fe.litHtmlVersions=[]).push("2.4.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ke;const _e=window,J=_e.trustedTypes,ut=J?J.createPolicy("lit-html",{createHTML:s=>s}):void 0,P=`lit$${(Math.random()+"").slice(9)}$`,Ct="?"+P,hi=`<${Ct}>`,K=document,de=(s="")=>K.createComment(s),ue=s=>s===null||typeof s!="object"&&typeof s!="function",Rt=Array.isArray,ci=s=>Rt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ht=/-->/g,ct=/>/g,I=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pt=/'/g,vt=/"/g,Pt=/^(?:script|style|textarea|title)$/i,pi=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),b=pi(1),Z=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),ft=new WeakMap,z=K.createTreeWalker(K,129,null,!1),vi=(s,e)=>{const t=s.length-1,i=[];let n,r=e===2?"<svg>":"",o=ee;for(let l=0;l<t;l++){const u=s[l];let g,d,c=-1,f=0;for(;f<u.length&&(o.lastIndex=f,d=o.exec(u),d!==null);)f=o.lastIndex,o===ee?d[1]==="!--"?o=ht:d[1]!==void 0?o=ct:d[2]!==void 0?(Pt.test(d[2])&&(n=RegExp("</"+d[2],"g")),o=I):d[3]!==void 0&&(o=I):o===I?d[0]===">"?(o=n!=null?n:ee,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,g=d[1],o=d[3]===void 0?I:d[3]==='"'?vt:pt):o===vt||o===pt?o=I:o===ht||o===ct?o=ee:(o=I,n=void 0);const S=o===I&&s[l+1].startsWith("/>")?" ":"";r+=o===ee?u+hi:c>=0?(i.push(g),u.slice(0,c)+"$lit$"+u.slice(c)+P+S):u+P+(c===-2?(i.push(void 0),l):S)}const a=r+(s[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ut!==void 0?ut.createHTML(a):a,i]};class he{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[u,g]=vi(e,t);if(this.el=he.createElement(u,i),z.currentNode=this.el.content,t===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(n=z.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes()){const d=[];for(const c of n.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(P)){const f=g[o++];if(d.push(c),f!==void 0){const S=n.getAttribute(f.toLowerCase()+"$lit$").split(P),w=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:w[2],strings:S,ctor:w[1]==="."?gi:w[1]==="?"?mi:w[1]==="@"?$i:Se})}else l.push({type:6,index:r})}for(const c of d)n.removeAttribute(c)}if(Pt.test(n.tagName)){const d=n.textContent.split(P),c=d.length-1;if(c>0){n.textContent=J?J.emptyScript:"";for(let f=0;f<c;f++)n.append(d[f],de()),z.nextNode(),l.push({type:2,index:++r});n.append(d[c],de())}}}else if(n.nodeType===8)if(n.data===Ct)l.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(P,d+1))!==-1;)l.push({type:7,index:r}),d+=P.length-1}r++}}static createElement(e,t){const i=K.createElement("template");return i.innerHTML=e,i}}function X(s,e,t=s,i){var n,r,o,a;if(e===Z)return e;let l=i!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[i]:t._$Cl;const u=ue(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==u&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),u===void 0?l=void 0:(l=new u(s),l._$AT(s,t,i)),i!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=X(s,l._$AS(s,e.values),l,i)),e}class fi{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:n}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:K).importNode(i,!0);z.currentNode=r;let o=z.nextNode(),a=0,l=0,u=n[0];for(;u!==void 0;){if(a===u.index){let g;u.type===2?g=new ce(o,o.nextSibling,this,e):u.type===1?g=new u.ctor(o,u.name,u.strings,this,e):u.type===6&&(g=new yi(o,this,e)),this.u.push(g),u=n[++l]}a!==(u==null?void 0:u.index)&&(o=z.nextNode(),a++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ce{constructor(e,t,i,n){var r;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cm=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),ue(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==Z&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ci(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==$&&ue(this._$AH)?this._$AA.nextSibling.data=e:this.T(K.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=he.createElement(n.h,this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const o=new fi(r,this),a=o.v(this.options);o.p(i),this.T(a),this._$AH=o}}_$AC(e){let t=ft.get(e.strings);return t===void 0&&ft.set(e.strings,t=new he(e)),t}k(e){Rt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new ce(this.O(de()),this.O(de()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Se{constructor(e,t,i,n,r){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const r=this.strings;let o=!1;if(r===void 0)e=X(this,e,t,0),o=!ue(e)||e!==this._$AH&&e!==Z,o&&(this._$AH=e);else{const a=e;let l,u;for(e=r[0],l=0;l<r.length-1;l++)u=X(this,a[i+l],t,l),u===Z&&(u=this._$AH[l]),o||(o=!ue(u)||u!==this._$AH[l]),u===$?e=$:e!==$&&(e+=(u!=null?u:"")+r[l+1]),this._$AH[l]=u}o&&!n&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class gi extends Se{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}}const _i=J?J.emptyScript:"";class mi extends Se{constructor(){super(...arguments),this.type=4}j(e){e&&e!==$?this.element.setAttribute(this.name,_i):this.element.removeAttribute(this.name)}}class $i extends Se{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=X(this,e,t,0))!==null&&i!==void 0?i:$)===Z)return;const n=this._$AH,r=e===$&&n!==$||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==$&&(n===$||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class yi{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const gt=_e.litHtmlPolyfillSupport;gt==null||gt(he,ce),((ke=_e.litHtmlVersions)!==null&&ke!==void 0?ke:_e.litHtmlVersions=[]).push("2.4.0");const wi=(s,e,t)=>{var i,n;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=o=new ce(e.insertBefore(de(),a),a,void 0,t!=null?t:{})}return o._$AI(s),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Te,Ne;class ne extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=wi(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Z}}ne.finalized=!0,ne._$litElement$=!0,(Te=globalThis.litElementHydrateSupport)===null||Te===void 0||Te.call(globalThis,{LitElement:ne});const _t=globalThis.litElementPolyfillSupport;_t==null||_t({LitElement:ne});((Ne=globalThis.litElementVersions)!==null&&Ne!==void 0?Ne:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bi=s=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(s,e):((t,i)=>{const{kind:n,elements:r}=i;return{kind:n,elements:r,finisher(o){customElements.define(t,o)}}})(s,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ai=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,s)}};function Si(s){return(e,t)=>t!==void 0?((i,n,r)=>{n.constructor.createProperty(r,i)})(s,e,t):Ai(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function E(s){return Si({...s,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mi=({finisher:s,descriptor:e})=>(t,i)=>{var n;if(i===void 0){const r=(n=t.originalKey)!==null&&n!==void 0?n:t.key,o=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(t.key)}:{...t,key:r};return s!=null&&(o.finisher=function(a){s(a,r)}),o}{const r=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),s==null||s(r,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function T(s,e){return Mi({descriptor:t=>{const i={get(){var n,r;return(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(s))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const n=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var r,o;return this[n]===void 0&&(this[n]=(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(s))!==null&&o!==void 0?o:null),this[n]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ce;((Ce=window.HTMLSlotElement)===null||Ce===void 0?void 0:Ce.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*xi(s,e){if(s!==void 0){let t=0;for(const i of s)yield e(i,t++)}}function p(s){let e,t,i;return typeof s=="object"?(e=s.hashFunction,t=s.expiring,i=s.tags):e=s,(n,r,o)=>{if(o.value!=null)o.value=mt(o.value,e,t,i);else if(o.get!=null)o.get=mt(o.get,e,t,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Re=new Map;function mt(s,e,t=0,i){const n=Symbol("__memoized_map__");return function(...r){let o;this.hasOwnProperty(n)||Object.defineProperty(this,n,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let a=this[n];if(Array.isArray(i))for(const l of i)Re.has(l)?Re.get(l).push(a):Re.set(l,[a]);if(e||r.length>0||t>0){let l;e===!0?l=r.map(d=>d.toString()).join("!"):e?l=e.apply(this,r):l=r[0];const u=`${l}__timestamp`;let g=!1;if(t>0)if(!a.has(u))g=!0;else{let d=a.get(u);g=Date.now()-d>t}a.has(l)&&!g?o=a.get(l):(o=s.apply(this,r),a.set(l,o),t>0&&a.set(u,Date.now()))}else{const l=this;a.has(l)?o=a.get(l):(o=s.apply(this,r),a.set(l,o))}return o}}var me;(function(s){s[s.COUNT=0]="COUNT",s[s.ALPHABETICAL=1]="ALPHABETICAL"})(me||(me={}));class Ot{constructor(e){this.buckets=e.buckets,this.doc_count_error_upper_bound=e.doc_count_error_upper_bound,this.sum_other_doc_count=e.sum_other_doc_count,this.first_bucket_key=e.first_bucket_key,this.last_bucket_key=e.last_bucket_key,this.number_buckets=e.number_buckets,this.interval=e.interval}getSortedBuckets(e){if(typeof this.buckets[0]=="number")return[...this.buckets];const t=new Intl.Collator;switch(e){case me.ALPHABETICAL:return[...this.buckets].sort((i,n)=>t.compare(i.key.toString(),n.key.toString()));case me.COUNT:default:return[...this.buckets]}}}h([p()],Ot.prototype,"getSortedBuckets",null);class He{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:Boolean(e)}}He.shared=new He;class $e{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}$e.shared=new $e;class Le{parseValue(e){return $e.shared.parseValue(e)}}Le.shared=new Le;class Ie{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const i=Date.parse(t);if(Number.isNaN(i))return;let n=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(n=new Date(n.getTime()+n.getTimezoneOffset()*1e3*60)),n}}Ie.shared=new Ie;class Ve{parseValue(e){if(typeof e=="string")return e}}Ve.shared=new Ve;class De{parseValue(e){return String(e)}}De.shared=new De;class U{constructor(e,t){this.parser=e,this.rawValue=t}get values(){return this.parseRawValue()}get value(){return this.values[0]}parseRawValue(){if(this.rawValue===void 0)return[];const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(i=>{const n=this.parser.parseValue(i);Array.isArray(n)?t.push(...n):n!==void 0&&t.push(n)}),t}}h([p()],U.prototype,"values",null);h([p()],U.prototype,"value",null);class ie extends U{constructor(e){super(He.shared,e)}}class $t extends U{constructor(e){super(Le.shared,e)}}class N extends U{constructor(e){super(Ie.shared,e)}}class Ut extends U{constructor(e){super(Ve.shared,e)}}class M extends U{constructor(e){super($e.shared,e)}}class _ extends U{constructor(e){super(De.shared,e)}}class v{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.identifier}get addeddate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.addeddate?new N(this.rawMetadata.fields.addeddate):void 0}get avg_rating(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.avg_rating)!=null?new M(this.rawMetadata.fields.avg_rating):void 0}get collection(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection?new _(this.rawMetadata.fields.collection):void 0}get collection_files_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.collection_files_count)!=null?new M(this.rawMetadata.fields.collection_files_count):void 0}get collection_size(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.collection_size)!=null?new $t(this.rawMetadata.fields.collection_size):void 0}get creator(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.creator?new _(this.rawMetadata.fields.creator):void 0}get date(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date?new N(this.rawMetadata.fields.date):void 0}get description(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.description?new _(this.rawMetadata.fields.description):void 0}get downloads(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.downloads)!=null?new M(this.rawMetadata.fields.downloads):void 0}get files_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.files_count)!=null?new M(this.rawMetadata.fields.files_count):void 0}get genre(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.genre?new _(this.rawMetadata.fields.genre):void 0}get indexflag(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.indexflag?new _(this.rawMetadata.fields.indexflag):void 0}get issue(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.issue?new _(this.rawMetadata.fields.issue):void 0}get item_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.item_count)!=null?new M(this.rawMetadata.fields.item_count):void 0}get item_size(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.item_size)!=null?new $t(this.rawMetadata.fields.item_size):void 0}get language(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.language?new _(this.rawMetadata.fields.language):void 0}get lending___available_to_borrow(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_borrow)!=null?new ie(this.rawMetadata.fields.lending___available_to_borrow):void 0}get lending___available_to_browse(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_browse)!=null?new ie(this.rawMetadata.fields.lending___available_to_browse):void 0}get lending___available_to_waitlist(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_waitlist)!=null?new ie(this.rawMetadata.fields.lending___available_to_waitlist):void 0}get lending___status(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.lending___status?new _(this.rawMetadata.fields.lending___status):void 0}get licenseurl(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.licenseurl?new _(this.rawMetadata.fields.licenseurl):void 0}get mediatype(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.mediatype?new Ut(this.rawMetadata.fields.mediatype):void 0}get month(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.month)!=null?new M(this.rawMetadata.fields.month):void 0}get noindex(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.noindex)!=null?new ie(this.rawMetadata.fields.noindex):void 0}get num_favorites(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.num_favorites)!=null?new M(this.rawMetadata.fields.num_favorites):void 0}get num_reviews(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.num_reviews)!=null?new M(this.rawMetadata.fields.num_reviews):void 0}get source(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.source?new _(this.rawMetadata.fields.source):void 0}get subject(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.subject?new _(this.rawMetadata.fields.subject):void 0}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new _(this.rawMetadata.fields.title):void 0}get type(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.type?new _(this.rawMetadata.fields.type):void 0}get volume(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.volume?new _(this.rawMetadata.fields.volume):void 0}get week(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.week)!=null?new M(this.rawMetadata.fields.week):void 0}get year(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.year)!=null?new M(this.rawMetadata.fields.year):void 0}}h([p()],v.prototype,"addeddate",null);h([p()],v.prototype,"avg_rating",null);h([p()],v.prototype,"collection",null);h([p()],v.prototype,"collection_files_count",null);h([p()],v.prototype,"collection_size",null);h([p()],v.prototype,"creator",null);h([p()],v.prototype,"date",null);h([p()],v.prototype,"description",null);h([p()],v.prototype,"downloads",null);h([p()],v.prototype,"files_count",null);h([p()],v.prototype,"genre",null);h([p()],v.prototype,"indexflag",null);h([p()],v.prototype,"issue",null);h([p()],v.prototype,"item_count",null);h([p()],v.prototype,"item_size",null);h([p()],v.prototype,"language",null);h([p()],v.prototype,"lending___available_to_borrow",null);h([p()],v.prototype,"lending___available_to_browse",null);h([p()],v.prototype,"lending___available_to_waitlist",null);h([p()],v.prototype,"lending___status",null);h([p()],v.prototype,"licenseurl",null);h([p()],v.prototype,"mediatype",null);h([p()],v.prototype,"month",null);h([p()],v.prototype,"noindex",null);h([p()],v.prototype,"num_favorites",null);h([p()],v.prototype,"num_reviews",null);h([p()],v.prototype,"source",null);h([p()],v.prototype,"subject",null);h([p()],v.prototype,"title",null);h([p()],v.prototype,"type",null);h([p()],v.prototype,"volume",null);h([p()],v.prototype,"week",null);h([p()],v.prototype,"year",null);class m{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.identifier}get highlight(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.highlight)===null||t===void 0)&&t.text?new _(this.rawMetadata.highlight.text):void 0}get addeddate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.addeddate?new N(this.rawMetadata.fields.addeddate):void 0}get avg_rating(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.avg_rating)!=null?new M(this.rawMetadata.fields.avg_rating):void 0}get collection(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection?new _(this.rawMetadata.fields.collection):void 0}get created_on(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.created_on?new N(this.rawMetadata.fields.created_on):void 0}get creator(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.creator?new _(this.rawMetadata.fields.creator):void 0}get date(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date?new N(this.rawMetadata.fields.date):void 0}get description(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.description?new _(this.rawMetadata.fields.description):void 0}get downloads(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.downloads)!=null?new M(this.rawMetadata.fields.downloads):void 0}get filename(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.filename?new _(this.rawMetadata.fields.filename):void 0}get file_basename(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.file_basename?new _(this.rawMetadata.fields.file_basename):void 0}get file_creation_mtime(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.file_creation_mtime)!=null?new M(this.rawMetadata.fields.file_creation_mtime):void 0}get issue(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.issue?new _(this.rawMetadata.fields.issue):void 0}get mediatype(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.mediatype?new Ut(this.rawMetadata.fields.mediatype):void 0}get page_num(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.page_num)!=null?new M(this.rawMetadata.fields.page_num):void 0}get publicdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.publicdate?new N(this.rawMetadata.fields.publicdate):void 0}get result_in_subfile(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.result_in_subfile)!=null?new ie(this.rawMetadata.fields.result_in_subfile):void 0}get reviewdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.reviewdate?new N(this.rawMetadata.fields.reviewdate):void 0}get source(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.source?new _(this.rawMetadata.fields.source):void 0}get subject(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.subject?new _(this.rawMetadata.fields.subject):void 0}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new _(this.rawMetadata.fields.title):void 0}get updated_on(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.updated_on?new N(this.rawMetadata.fields.updated_on):void 0}get year(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.year)!=null?new M(this.rawMetadata.fields.year):void 0}get __href__(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new _(this.rawMetadata.fields.__href__):void 0}}h([p()],m.prototype,"highlight",null);h([p()],m.prototype,"addeddate",null);h([p()],m.prototype,"avg_rating",null);h([p()],m.prototype,"collection",null);h([p()],m.prototype,"created_on",null);h([p()],m.prototype,"creator",null);h([p()],m.prototype,"date",null);h([p()],m.prototype,"description",null);h([p()],m.prototype,"downloads",null);h([p()],m.prototype,"filename",null);h([p()],m.prototype,"file_basename",null);h([p()],m.prototype,"file_creation_mtime",null);h([p()],m.prototype,"issue",null);h([p()],m.prototype,"mediatype",null);h([p()],m.prototype,"page_num",null);h([p()],m.prototype,"publicdate",null);h([p()],m.prototype,"result_in_subfile",null);h([p()],m.prototype,"reviewdate",null);h([p()],m.prototype,"source",null);h([p()],m.prototype,"subject",null);h([p()],m.prototype,"title",null);h([p()],m.prototype,"updated_on",null);h([p()],m.prototype,"year",null);h([p()],m.prototype,"__href__",null);class ze{constructor(e,t){var i,n,r,o,a,l,u;this.schema=t;const g=t==null?void 0:t.hit_type;this.totalResults=(n=(i=e==null?void 0:e.hits)===null||i===void 0?void 0:i.total)!==null&&n!==void 0?n:0,this.returnedCount=(o=(r=e==null?void 0:e.hits)===null||r===void 0?void 0:r.returned)!==null&&o!==void 0?o:0,this.results=(u=(l=(a=e==null?void 0:e.hits)===null||a===void 0?void 0:a.hits)===null||l===void 0?void 0:l.map(d=>ze.createResult(g,d)))!==null&&u!==void 0?u:[],e!=null&&e.aggregations&&(this.aggregations=Object.entries(e.aggregations).reduce((d,[c,f])=>(d[c]=new Ot(f),d),{}))}static createResult(e,t){switch(e){case"item":return new v(t);case"text":return new m(t);default:return t}}}class Ei{constructor(e){this.clientParameters=e.client_parameters,this.finalizedParameters=e.finalized_parameters}}class ki{constructor(e){var t,i,n;this.rawResponse=e,this.request=new Ei(e.request),this.responseHeader=(t=e.response)===null||t===void 0?void 0:t.header,this.response=new ze((i=e.response)===null||i===void 0?void 0:i.body,(n=e.response)===null||n===void 0?void 0:n.hit_schema)}}var V;(function(s){s[s.METADATA=0]="METADATA",s[s.FULLTEXT=1]="FULLTEXT"})(V||(V={}));class ye{static aggregateSearchParamsAsString(e){if(e.omit)return"false";if(e.advancedParams){const t=e.advancedParams.map(n=>({terms:n}));return JSON.stringify(t)}if(e.simpleParams)return e.simpleParams.join(",")}static sortParamsAsString(e){return`${e.field}:${e.direction}`}static filterParamsAsString(e){return JSON.stringify(e)}static generateURLSearchParams(e){const t=new URLSearchParams;if(t.append("user_query",e.query),e.pageType&&t.append("page_type",String(e.pageType)),e.pageTarget&&t.append("page_target",String(e.pageTarget)),e.rows!=null&&t.append("hits_per_page",String(e.rows)),e.page!=null&&t.append("page",String(e.page)),e.fields&&e.fields.length>0&&t.append("fields",e.fields.join(",")),e.filters&&Object.keys(e.filters).length>0){const n=this.filterParamsAsString(e.filters);n&&n!=="{}"&&t.append("filter_map",n)}if(e.sort&&e.sort.length>0){const n=e.sort.map(r=>this.sortParamsAsString(r));t.append("sort",n.join(","))}const i=e.aggregations;if(i){const n=this.aggregateSearchParamsAsString(i);n&&t.append("aggregations",n)}return e.aggregationsSize!=null&&t.append("aggregations_size",String(e.aggregationsSize)),e.debugging&&t.append("debugging","true"),e.uid&&t.append("uid",e.uid),e.includeClientUrl!==!1&&t.append("client_url",window.location.href),t}}var se;(function(s){s.networkError="SearchService.NetworkError",s.itemNotFound="SearchService.ItemNotFound",s.decodingError="SearchService.DecodingError",s.searchEngineError="SearchService.SearchEngineError"})(se||(se={}));class Ti extends Error{constructor(e,t,i){super(t),this.name=e,this.type=e,this.details=i}}class Ht{constructor(e){var t,i;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",this.debuggingEnabled=(i=e==null?void 0:e.debuggingEnabled)!==null&&i!==void 0?i:!1,(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const r=new URL(window.location.href).searchParams.get("scope");r&&(this.requestScope=r)}}async fetchUrl(e,t){var i;const n=new URL(e);this.requestScope&&n.searchParams.set("scope",this.requestScope);let r;try{const o=(i=t==null?void 0:t.requestOptions)!==null&&i!==void 0?i:{credentials:this.includeCredentials?"include":"same-origin"};r=await fetch(n.href,o)}catch(o){const a=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(se.networkError,a)}try{const o=await r.json();o.debugging&&this.printDebuggingInfo(o);const a=o.error;if(a){const l=o.forensics;return this.getErrorResult(se.searchEngineError,a,l)}else return{success:o}}catch(o){const a=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(se.decodingError,a)}}getErrorResult(e,t,i){return{error:new Ti(e,t,i)}}printDebuggingInfo(e){var t,i;const n=e.debugging,r=(t=n.messages)!==null&&t!==void 0?t:[],o=(i=n.data)!==null&&i!==void 0?i:{};console.log("***** BEGIN DEBUGGING *****"),console.log("Full response:"),console.log(JSON.stringify(e,null,2)),console.group("Debug messages");for(const a of r)console.log(a);console.groupEnd(),console.group("Debug data");for(const[a,l]of Object.entries(o))console.log(a,l);console.groupEnd(),console.log("***** END DEBUGGING *****")}}class Ni extends Ht{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=ye.generateURLSearchParams(e).toString(),n=`https://${this.baseUrl}${this.servicePath}/?service_backend=fts&${i}`;return this.fetchUrl(n)}}class Ci extends Ht{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=ye.generateURLSearchParams(e).toString(),n=`https://${this.baseUrl}${this.servicePath}/?service_backend=metadata&${i}`;return this.fetchUrl(n)}}class Y{constructor(e={}){this.backendOptions=e}async search(e,t=V.METADATA){const n=await Y.getBackendForSearchType(t,this.backendOptions).performSearch(e);return n.error?n:{success:new ki(n.success)}}static getBackendForSearchType(e,t={}){switch(e){case V.FULLTEXT:return new Ni(t);case V.METADATA:default:return new Ci(t)}}}Y.default=new Y;h([p((s,e={})=>{const{includeCredentials:t="",scope:i="",baseUrl:n=""}=e;return`${s};${t};${i};${n}`})],Y,"getBackendForSearchType",null);class Ri{constructor(){this.filterMap={}}addFilter(e,t,i){return this.filterMap[e]||(this.filterMap[e]={}),this.filterMap[e][t]=i,this}removeFilter(e,t){return this.filterMap[e]&&(delete this.filterMap[e][t],Object.keys(this.filterMap[e]).length===0&&delete this.filterMap[e]),this}setFilterMap(e){return this.filterMap={...e},this}mergeFilterMap(e){for(const[t,i]of Object.entries(e))for(const[n,r]of Object.entries(i))this.addFilter(t,n,r);return this}build(){return this.filterMap}}let y=class extends ne{constructor(){super(...arguments),this.searchServiceUrlOptions=this.initSearchServiceUrlOptions(),this.filterMap={},this.loadingSearchResults=!1,this.loadingAggregations=!1,this.defaultAggregationsChecked=!0,this.fullSearchResultsShown=!1,this.searchService=new Y(this.searchServiceUrlOptions)}get searchResults(){var e;return(e=this.searchResponse)===null||e===void 0?void 0:e.response.results}get searchAggregations(){var e;return(e=this.aggregationsResponse)===null||e===void 0?void 0:e.response.aggregations}initSearchServiceUrlOptions(){var e,t,i;const n=new URL(window.location.href).searchParams;return{baseUrl:(e=n.get("search_base_url"))!==null&&e!==void 0?e:void 0,servicePath:(t=n.get("search_service_path"))!==null&&t!==void 0?t:void 0,debuggingEnabled:(i=!!n.get("debugging"))!==null&&i!==void 0?i:void 0}}render(){var e;return b`
      <fieldset>
        <legend>Search options</legend>
        <form>
          <label for="search-input">Query: </label>
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
    `}filterFieldChanged(e){var t,i;const r=!!e.target.selectedOptions[0].dataset.numeric,o=(i=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelectorAll("#filter-constraint option"))!==null&&i!==void 0?i:[];for(const a of o)a.toggleAttribute("hidden",!r&&!!a.dataset.numeric)}addFilterClicked(){const e=this.filterFieldInput.selectedOptions[0].value,t=this.filterValueInput.value,i=this.filterConstraintInput.selectedOptions[0].value;!e||!i||!t||(this.filterMap=new Ri().setFilterMap(this.filterMap).addFilter(e,t,i).build(),this.filterValueInput.value="")}removeFilterClicked(e){const t=e.target,{field:i,value:n}=t.dataset;i&&n&&(this.filterMap={...this.filterMap},delete this.filterMap[i][n],Object.keys(this.filterMap[i]).length===0&&delete this.filterMap[i])}get appliedFiltersTemplate(){const e=[];for(const[i,n]of Object.entries(this.filterMap))for(const[r,o]of Object.entries(n))e.push({field:i,value:r,constraint:o});if(e.length===0)return b`<span>(no filters applied)</span>`;const t={inc:"includes",exc:"excludes",gt:">",gte:">=",lt:"<",lte:"<="};return xi(e,({field:i,value:n,constraint:r})=>b`
        <span class="filter">
          <span class="filter-text"
            >'${i}' ${t[r]} '${n}'</span
          ><!--
       --><button
            type="button"
            class="remove-filter"
            data-field=${i}
            data-value=${n}
            @click=${this.removeFilterClicked}
          >
            x
          </button>
        </span>
      `)}aggregationCheckboxTemplate(e,t){const i=`aggs-${e}`;return b`
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
    `}get resultsTemplate(){return b`
      <details>
        <summary>PPS URL params</summary>
        ${this.lastSearchParams?b`<div>
              Last search params:
              <pre>${this.lastSearchParams}</pre>
            </div>`:$}
        ${this.lastAggregationParams?b`<div>
              Last aggregation params:
              <pre>${this.lastAggregationParams}</pre>
            </div>`:$}
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
          ${(e=this.searchResults)===null||e===void 0?void 0:e.map(t=>{var i,n;return b`
              <tr>
                <td>${t.identifier}</td>
                <td>${(n=(i=t.title)===null||i===void 0?void 0:i.value)!==null&&n!==void 0?n:"(Untitled)"}</td>
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
          >`:$}
    `}get aggregationsTemplate(){var e;return b`
      <div>
        <h2>Aggregations</h2>
        ${Object.entries((e=this.searchAggregations)!==null&&e!==void 0?e:{}).map(([t,i])=>b`
            <h3>${t}</h3>
            <p>
              ${i.buckets.map(n=>typeof n=="number"?n:`${n.key} (${n.doc_count})`).join(", ")}
            </p>
          `)}
      </div>
    `}get snippetsHeaderTemplate(){var e;return!((e=this.searchResults)===null||e===void 0)&&e.some(t=>t.highlight)?b`<th>Snippets</th>`:b`${$}`}snippetTemplate(e){return e.highlight?b`<td>${e.highlight.value}</td>`:b`${$}`}toggleDefaultAggregations(){var e;this.defaultAggregationsChecked=(e=this.defaultAggregationsCheckbox)===null||e===void 0?void 0:e.checked}toggleFullSearchResults(){this.fullSearchResultsShown=!this.fullSearchResultsShown}async search(e){var t;e.preventDefault();const i=this.searchInput.value,n=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector("input[name='search-type']:checked"),r=(n==null?void 0:n.value)==="fts"?V.FULLTEXT:V.METADATA;this.fetchSearchResults(i,r),this.fetchAggregations(i,r)}async fetchSearchResults(e,t){var i,n,r,o,a;const l=((i=this.checkedSort)===null||i===void 0?void 0:i.value)==="none"?void 0:[{field:"title",direction:(n=this.checkedSort)===null||n===void 0?void 0:n.value}],u=Number((r=this.rowsInput)===null||r===void 0?void 0:r.value),g=(o=this.debugCheck)===null||o===void 0?void 0:o.checked,d={query:e,rows:u,sort:l,filters:this.filterMap,aggregations:{omit:!0},debugging:g,uid:"demo"};this.lastSearchParams=decodeURIComponent(ye.generateURLSearchParams(d).toString()),this.loadingSearchResults=!0;const c=await this.searchService.search(d,t);this.loadingSearchResults=!1,c!=null&&c.success?this.searchResponse=c==null?void 0:c.success:(alert(`Oh noes: ${(a=c==null?void 0:c.error)===null||a===void 0?void 0:a.message}`),console.error("Error searching",c==null?void 0:c.error))}async fetchAggregations(e,t){var i,n,r,o;const a=(i=this.shadowRoot)===null||i===void 0?void 0:i.querySelectorAll("input[name='aggs']:checked"),l={simpleParams:a?[...a].map(f=>f.value):void 0},u=Number((n=this.numAggsInput)===null||n===void 0?void 0:n.value),g=(r=this.debugCheck)===null||r===void 0?void 0:r.checked,d={query:e,rows:0,filters:this.filterMap,aggregationsSize:u,debugging:g,uid:"demo"};this.defaultAggregationsChecked||(d.aggregations=l),this.lastAggregationParams=decodeURIComponent(ye.generateURLSearchParams(d).toString()),this.loadingAggregations=!0;const c=await this.searchService.search(d,t);this.loadingAggregations=!1,c!=null&&c.success?this.aggregationsResponse=c==null?void 0:c.success:(alert(`Oh noes: ${(o=c==null?void 0:c.error)===null||o===void 0?void 0:o.message}`),console.error("Error searching",c==null?void 0:c.error))}static get styles(){return Qt`
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
    `}};h([T("#search-input")],y.prototype,"searchInput",void 0);h([T("#debug-info-check")],y.prototype,"debugCheck",void 0);h([T("#num-rows")],y.prototype,"rowsInput",void 0);h([T("#num-aggs")],y.prototype,"numAggsInput",void 0);h([T("input[name='sort']:checked")],y.prototype,"checkedSort",void 0);h([T("#filter-field")],y.prototype,"filterFieldInput",void 0);h([T("#filter-constraint")],y.prototype,"filterConstraintInput",void 0);h([T("#filter-value")],y.prototype,"filterValueInput",void 0);h([T("#aggs-default")],y.prototype,"defaultAggregationsCheckbox",void 0);h([E()],y.prototype,"searchServiceUrlOptions",void 0);h([E()],y.prototype,"filterMap",void 0);h([E()],y.prototype,"searchResponse",void 0);h([E()],y.prototype,"aggregationsResponse",void 0);h([E()],y.prototype,"loadingSearchResults",void 0);h([E()],y.prototype,"loadingAggregations",void 0);h([E()],y.prototype,"lastSearchParams",void 0);h([E()],y.prototype,"lastAggregationParams",void 0);h([E()],y.prototype,"defaultAggregationsChecked",void 0);h([E()],y.prototype,"fullSearchResultsShown",void 0);y=h([bi("app-root")],y);Zt(Xt`
        <app-root></app-root>
      `,document.querySelector("#demo"));
