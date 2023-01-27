const Lt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};Lt();/**
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
 */const Vt=new WeakMap,oe=n=>typeof n=="function"&&Vt.has(n);/**
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
 */const qe=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,bt=(n,e,t=null)=>{for(;e!==t;){const i=e.nextSibling;n.removeChild(e),e=i}};/**
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
 */const O=`{{lit-${String(Math.random()).slice(2)}}}`,wt=`<!--${O}-->`,Je=new RegExp(`${O}|${wt}`),te="$lit$";class Ft{constructor(e,t){this.parts=[],this.element=t;const i=[],s=[],r=document.createTreeWalker(t.content,133,null,!1);let o=0,l=-1,a=0;const{strings:u,values:{length:v}}=e;for(;a<v;){const d=r.nextNode();if(d===null){r.currentNode=s.pop();continue}if(l++,d.nodeType===1){if(d.hasAttributes()){const c=d.attributes,{length:f}=c;let b=0;for(let y=0;y<f;y++)Ge(c[y].name,te)&&b++;for(;b-- >0;){const y=u[a],F=Pe.exec(y)[2],B=F.toLowerCase()+te,H=d.getAttribute(B);d.removeAttribute(B);const N=H.split(Je);this.parts.push({type:"attribute",index:l,name:F,strings:N}),a+=N.length-1}}d.tagName==="TEMPLATE"&&(s.push(d),r.currentNode=d.content)}else if(d.nodeType===3){const c=d.data;if(c.indexOf(O)>=0){const f=d.parentNode,b=c.split(Je),y=b.length-1;for(let F=0;F<y;F++){let B,H=b[F];if(H==="")B=T();else{const N=Pe.exec(H);N!==null&&Ge(N[2],te)&&(H=H.slice(0,N.index)+N[1]+N[2].slice(0,-te.length)+N[3]),B=document.createTextNode(H)}f.insertBefore(B,d),this.parts.push({type:"node",index:++l})}b[y]===""?(f.insertBefore(T(),d),i.push(d)):d.data=b[y],a+=y}}else if(d.nodeType===8)if(d.data===O){const c=d.parentNode;(d.previousSibling===null||l===o)&&(l++,c.insertBefore(T(),d)),o=l,this.parts.push({type:"node",index:l}),d.nextSibling===null?d.data="":(i.push(d),l--),a++}else{let c=-1;for(;(c=d.data.indexOf(O,c+1))!==-1;)this.parts.push({type:"node",index:-1}),a++}}for(const d of i)d.parentNode.removeChild(d)}}const Ge=(n,e)=>{const t=n.length-e.length;return t>=0&&n.slice(t)===e},Bt=n=>n.index!==-1,T=()=>document.createComment(""),Pe=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
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
 */class Ke{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)i!==void 0&&i.setValue(e[t]),t++;for(const i of this.__parts)i!==void 0&&i.commit()}_clone(){const e=qe?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let r=0,o=0,l,a=s.nextNode();for(;r<i.length;){if(l=i[r],!Bt(l)){this.__parts.push(void 0),r++;continue}for(;o<l.index;)o++,a.nodeName==="TEMPLATE"&&(t.push(a),s.currentNode=a.content),(a=s.nextNode())===null&&(s.currentNode=t.pop(),a=s.nextNode());if(l.type==="node"){const u=this.processor.handleTextExpression(this.options);u.insertAfterNode(a.previousSibling),this.__parts.push(u)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,l.name,l.strings,this.options));r++}return qe&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
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
 */const Ze=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:n=>n}),Dt=` ${O} `;class At{constructor(e,t,i,s){this.strings=e,this.values=t,this.type=i,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let s=0;s<e;s++){const r=this.strings[s],o=r.lastIndexOf("<!--");i=(o>-1||i)&&r.indexOf("-->",o+1)===-1;const l=Pe.exec(r);l===null?t+=r+(i?Dt:wt):t+=r.substr(0,l.index)+l[1]+l[2]+te+l[3]+O}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return Ze!==void 0&&(t=Ze.createHTML(t)),e.innerHTML=t,e}}/**
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
 */const Be=n=>n===null||!(typeof n=="object"||typeof n=="function"),Oe=n=>Array.isArray(n)||!!(n&&n[Symbol.iterator]);class St{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let s=0;s<i.length-1;s++)this.parts[s]=this._createPart()}_createPart(){return new Mt(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(t===1&&e[0]===""&&e[1]===""){const r=i[0].value;if(typeof r=="symbol")return String(r);if(typeof r=="string"||!Oe(r))return r}let s="";for(let r=0;r<t;r++){s+=e[r];const o=i[r];if(o!==void 0){const l=o.value;if(Be(l)||!Oe(l))s+=typeof l=="string"?l:String(l);else for(const a of l)s+=typeof a=="string"?a:String(a)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Mt{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==x&&(!Be(e)||e!==this.value)&&(this.value=e,oe(e)||(this.committer.dirty=!0))}commit(){for(;oe(this.value);){const e=this.value;this.value=x,e(this)}this.value!==x&&this.committer.commit()}}class be{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(T()),this.endNode=e.appendChild(T())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=T()),e.__insert(this.endNode=T())}insertAfterPart(e){e.__insert(this.startNode=T()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;oe(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=x,t(this)}const e=this.__pendingValue;e!==x&&(Be(e)?e!==this.value&&this.__commitText(e):e instanceof At?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Oe(e)?this.__commitIterable(e):e===We?(this.value=We,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=e==null?"":e;const i=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof Ke&&this.value.template===t)this.value.update(e.values);else{const i=new Ke(t,e.processor,this.options),s=i._clone();i.update(e.values),this.__commitNode(s),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i=0,s;for(const r of e)s=t[i],s===void 0&&(s=new be(this.options),t.push(s),i===0?s.appendIntoPart(this):s.insertAfterPart(t[i-1])),s.setValue(r),s.commit(),i++;i<t.length&&(t.length=i,this.clear(s&&s.endNode))}clear(e=this.startNode){bt(this.startNode.parentNode,e.nextSibling,this.endNode)}}class jt{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,i.length!==2||i[0]!==""||i[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;oe(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=x,t(this)}if(this.__pendingValue===x)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=x}}class zt extends St{constructor(e,t,i){super(e,t,i),this.single=i.length===2&&i[0]===""&&i[1]===""}_createPart(){return new qt(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class qt extends Mt{}let xt=!1;(()=>{try{const n={get capture(){return xt=!0,!1}};window.addEventListener("test",n,n),window.removeEventListener("test",n,n)}catch{}})();class Wt{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=s=>this.handleEvent(s)}setValue(e){this.__pendingValue=e}commit(){for(;oe(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=x,r(this)}if(this.__pendingValue===x)return;const e=this.__pendingValue,t=this.value,i=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=e!=null&&(t==null||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=Jt(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=x}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Jt=n=>n&&(xt?{capture:n.capture,passive:n.passive,once:n.once}:n.capture);/**
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
 */class Gt{handleAttributeExpressions(e,t,i,s){const r=t[0];return r==="."?new zt(e,t.slice(1),i).parts:r==="@"?[new Wt(e,t.slice(1),s.eventContext)]:r==="?"?[new jt(e,t.slice(1),i)]:new St(e,t,i).parts}handleTextExpression(e){return new be(e)}}const Kt=new Gt;/**
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
 */function Zt(n){let e=Xe.get(n.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},Xe.set(n.type,e));let t=e.stringsArray.get(n.strings);if(t!==void 0)return t;const i=n.strings.join(O);return t=e.keyString.get(i),t===void 0&&(t=new Ft(n,n.getTemplateElement()),e.keyString.set(i,t)),e.stringsArray.set(n.strings,t),t}const Xe=new Map;/**
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
 */const Ye=new WeakMap,Xt=(n,e,t)=>{let i=Ye.get(e);i===void 0&&(bt(e,e.firstChild),Ye.set(e,i=new be(Object.assign({templateFactory:Zt},t))),i.appendInto(e)),i.setValue(n),i.commit()};/**
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
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const Yt=(n,...e)=>new At(n,e,"html",Kt);/*! *****************************************************************************
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
***************************************************************************** */function h(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=window,De=ve.ShadowRoot&&(ve.ShadyCSS===void 0||ve.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,je=Symbol(),Qe=new WeakMap;class Et{constructor(e,t,i){if(this._$cssResult$=!0,i!==je)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(De&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Qe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Qe.set(t,e))}return e}toString(){return this.cssText}}const Qt=n=>new Et(typeof n=="string"?n:n+"",void 0,je),ei=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new Et(t,n,je)},ti=(n,e)=>{De?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=ve.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},et=De?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Qt(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Me;const fe=window,tt=fe.trustedTypes,ii=tt?tt.emptyScript:"",it=fe.reactiveElementPolyfillSupport,Ue={toAttribute(n,e){switch(e){case Boolean:n=n?ii:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},kt=(n,e)=>e!==n&&(e==e||n==n),xe={attribute:!0,type:String,converter:Ue,reflect:!1,hasChanged:kt};class D extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=xe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||xe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(et(s))}else e!==void 0&&t.push(et(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ti(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=xe){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Ue).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:Ue;this._$El=r,this[r]=l.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||kt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}D.finalized=!0,D.elementProperties=new Map,D.elementStyles=[],D.shadowRootOptions={mode:"open"},it==null||it({ReactiveElement:D}),((Me=fe.reactiveElementVersions)!==null&&Me!==void 0?Me:fe.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ee;const ge=window,q=ge.trustedTypes,st=q?q.createPolicy("lit-html",{createHTML:n=>n}):void 0,R=`lit$${(Math.random()+"").slice(9)}$`,Nt="?"+R,si=`<${Nt}>`,W=document,_e=(n="")=>W.createComment(n),le=n=>n===null||typeof n!="object"&&typeof n!="function",Ct=Array.isArray,ni=n=>Ct(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,rt=/>/g,I=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,lt=/"/g,Tt=/^(?:script|style|textarea|title)$/i,ae=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),at=new WeakMap,j=W.createTreeWalker(W,129,null,!1),ri=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=Q;for(let a=0;a<t;a++){const u=n[a];let v,d,c=-1,f=0;for(;f<u.length&&(o.lastIndex=f,d=o.exec(u),d!==null);)f=o.lastIndex,o===Q?d[1]==="!--"?o=nt:d[1]!==void 0?o=rt:d[2]!==void 0?(Tt.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=I):d[3]!==void 0&&(o=I):o===I?d[0]===">"?(o=s!=null?s:Q,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,v=d[1],o=d[3]===void 0?I:d[3]==='"'?lt:ot):o===lt||o===ot?o=I:o===nt||o===rt?o=Q:(o=I,s=void 0);const b=o===I&&n[a+1].startsWith("/>")?" ":"";r+=o===Q?u+si:c>=0?(i.push(v),u.slice(0,c)+"$lit$"+u.slice(c)+R+b):u+R+(c===-2?(i.push(void 0),a):b)}const l=r+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[st!==void 0?st.createHTML(l):l,i]};class de{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const l=e.length-1,a=this.parts,[u,v]=ri(e,t);if(this.el=de.createElement(u,i),j.currentNode=this.el.content,t===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(s=j.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(R)){const f=v[o++];if(d.push(c),f!==void 0){const b=s.getAttribute(f.toLowerCase()+"$lit$").split(R),y=/([.?@])?(.*)/.exec(f);a.push({type:1,index:r,name:y[2],strings:b,ctor:y[1]==="."?li:y[1]==="?"?di:y[1]==="@"?ui:Ae})}else a.push({type:6,index:r})}for(const c of d)s.removeAttribute(c)}if(Tt.test(s.tagName)){const d=s.textContent.split(R),c=d.length-1;if(c>0){s.textContent=q?q.emptyScript:"";for(let f=0;f<c;f++)s.append(d[f],_e()),j.nextNode(),a.push({type:2,index:++r});s.append(d[c],_e())}}}else if(s.nodeType===8)if(s.data===Nt)a.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf(R,d+1))!==-1;)a.push({type:7,index:r}),d+=R.length-1}r++}}static createElement(e,t){const i=W.createElement("template");return i.innerHTML=e,i}}function J(n,e,t=n,i){var s,r,o,l;if(e===ae)return e;let a=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const u=le(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),u===void 0?a=void 0:(a=new u(n),a._$AT(n,t,i)),i!==void 0?((o=(l=t)._$Co)!==null&&o!==void 0?o:l._$Co=[])[i]=a:t._$Cl=a),a!==void 0&&(e=J(n,a._$AS(n,e.values),a,i)),e}class oi{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:W).importNode(i,!0);j.currentNode=r;let o=j.nextNode(),l=0,a=0,u=s[0];for(;u!==void 0;){if(l===u.index){let v;u.type===2?v=new we(o,o.nextSibling,this,e):u.type===1?v=new u.ctor(o,u.name,u.strings,this,e):u.type===6&&(v=new ci(o,this,e)),this.u.push(v),u=s[++a]}l!==(u==null?void 0:u.index)&&(o=j.nextNode(),l++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class we{constructor(e,t,i,s){var r;this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),le(e)?e===S||e==null||e===""?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==ae&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ni(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==S&&le(this._$AH)?this._$AA.nextSibling.data=e:this.T(W.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=de.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const o=new oi(r,this),l=o.v(this.options);o.p(i),this.T(l),this._$AH=o}}_$AC(e){let t=at.get(e.strings);return t===void 0&&at.set(e.strings,t=new de(e)),t}k(e){Ct(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new we(this.O(_e()),this.O(_e()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Ae{constructor(e,t,i,s,r){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=S}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=J(this,e,t,0),o=!le(e)||e!==this._$AH&&e!==ae,o&&(this._$AH=e);else{const l=e;let a,u;for(e=r[0],a=0;a<r.length-1;a++)u=J(this,l[i+a],t,a),u===ae&&(u=this._$AH[a]),o||(o=!le(u)||u!==this._$AH[a]),u===S?e=S:e!==S&&(e+=(u!=null?u:"")+r[a+1]),this._$AH[a]=u}o&&!s&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class li extends Ae{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}}const ai=q?q.emptyScript:"";class di extends Ae{constructor(){super(...arguments),this.type=4}j(e){e&&e!==S?this.element.setAttribute(this.name,ai):this.element.removeAttribute(this.name)}}class ui extends Ae{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=J(this,e,t,0))!==null&&i!==void 0?i:S)===ae)return;const s=this._$AH,r=e===S&&s!==S||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==S&&(s===S||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class ci{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const dt=ge.litHtmlPolyfillSupport;dt==null||dt(de,we),((Ee=ge.litHtmlVersions)!==null&&Ee!==void 0?Ee:ge.litHtmlVersions=[]).push("2.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ke;const me=window,G=me.trustedTypes,ut=G?G.createPolicy("lit-html",{createHTML:n=>n}):void 0,P=`lit$${(Math.random()+"").slice(9)}$`,Rt="?"+P,hi=`<${Rt}>`,K=document,ue=(n="")=>K.createComment(n),ce=n=>n===null||typeof n!="object"&&typeof n!="function",Pt=Array.isArray,pi=n=>Pt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ct=/-->/g,ht=/>/g,L=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pt=/'/g,vt=/"/g,Ot=/^(?:script|style|textarea|title)$/i,vi=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),A=vi(1),Z=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),ft=new WeakMap,z=K.createTreeWalker(K,129,null,!1),fi=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=ee;for(let a=0;a<t;a++){const u=n[a];let v,d,c=-1,f=0;for(;f<u.length&&(o.lastIndex=f,d=o.exec(u),d!==null);)f=o.lastIndex,o===ee?d[1]==="!--"?o=ct:d[1]!==void 0?o=ht:d[2]!==void 0?(Ot.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=L):d[3]!==void 0&&(o=L):o===L?d[0]===">"?(o=s!=null?s:ee,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,v=d[1],o=d[3]===void 0?L:d[3]==='"'?vt:pt):o===vt||o===pt?o=L:o===ct||o===ht?o=ee:(o=L,s=void 0);const b=o===L&&n[a+1].startsWith("/>")?" ":"";r+=o===ee?u+hi:c>=0?(i.push(v),u.slice(0,c)+"$lit$"+u.slice(c)+P+b):u+P+(c===-2?(i.push(void 0),a):b)}const l=r+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ut!==void 0?ut.createHTML(l):l,i]};class he{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const l=e.length-1,a=this.parts,[u,v]=fi(e,t);if(this.el=he.createElement(u,i),z.currentNode=this.el.content,t===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(s=z.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(P)){const f=v[o++];if(d.push(c),f!==void 0){const b=s.getAttribute(f.toLowerCase()+"$lit$").split(P),y=/([.?@])?(.*)/.exec(f);a.push({type:1,index:r,name:y[2],strings:b,ctor:y[1]==="."?_i:y[1]==="?"?yi:y[1]==="@"?$i:Se})}else a.push({type:6,index:r})}for(const c of d)s.removeAttribute(c)}if(Ot.test(s.tagName)){const d=s.textContent.split(P),c=d.length-1;if(c>0){s.textContent=G?G.emptyScript:"";for(let f=0;f<c;f++)s.append(d[f],ue()),z.nextNode(),a.push({type:2,index:++r});s.append(d[c],ue())}}}else if(s.nodeType===8)if(s.data===Rt)a.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf(P,d+1))!==-1;)a.push({type:7,index:r}),d+=P.length-1}r++}}static createElement(e,t){const i=K.createElement("template");return i.innerHTML=e,i}}function X(n,e,t=n,i){var s,r,o,l;if(e===Z)return e;let a=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const u=ce(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),u===void 0?a=void 0:(a=new u(n),a._$AT(n,t,i)),i!==void 0?((o=(l=t)._$Co)!==null&&o!==void 0?o:l._$Co=[])[i]=a:t._$Cl=a),a!==void 0&&(e=X(n,a._$AS(n,e.values),a,i)),e}class gi{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:K).importNode(i,!0);z.currentNode=r;let o=z.nextNode(),l=0,a=0,u=s[0];for(;u!==void 0;){if(l===u.index){let v;u.type===2?v=new pe(o,o.nextSibling,this,e):u.type===1?v=new u.ctor(o,u.name,u.strings,this,e):u.type===6&&(v=new bi(o,this,e)),this.u.push(v),u=s[++a]}l!==(u==null?void 0:u.index)&&(o=z.nextNode(),l++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class pe{constructor(e,t,i,s){var r;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),ce(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==Z&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):pi(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==$&&ce(this._$AH)?this._$AA.nextSibling.data=e:this.T(K.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=he.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const o=new gi(r,this),l=o.v(this.options);o.p(i),this.T(l),this._$AH=o}}_$AC(e){let t=ft.get(e.strings);return t===void 0&&ft.set(e.strings,t=new he(e)),t}k(e){Pt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new pe(this.O(ue()),this.O(ue()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Se{constructor(e,t,i,s,r){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=X(this,e,t,0),o=!ce(e)||e!==this._$AH&&e!==Z,o&&(this._$AH=e);else{const l=e;let a,u;for(e=r[0],a=0;a<r.length-1;a++)u=X(this,l[i+a],t,a),u===Z&&(u=this._$AH[a]),o||(o=!ce(u)||u!==this._$AH[a]),u===$?e=$:e!==$&&(e+=(u!=null?u:"")+r[a+1]),this._$AH[a]=u}o&&!s&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class _i extends Se{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}}const mi=G?G.emptyScript:"";class yi extends Se{constructor(){super(...arguments),this.type=4}j(e){e&&e!==$?this.element.setAttribute(this.name,mi):this.element.removeAttribute(this.name)}}class $i extends Se{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=X(this,e,t,0))!==null&&i!==void 0?i:$)===Z)return;const s=this._$AH,r=e===$&&s!==$||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==$&&(s===$||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class bi{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const gt=me.litHtmlPolyfillSupport;gt==null||gt(he,pe),((ke=me.litHtmlVersions)!==null&&ke!==void 0?ke:me.litHtmlVersions=[]).push("2.6.1");const wi=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const l=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new pe(e.insertBefore(ue(),l),l,void 0,t!=null?t:{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ne,Ce;class se extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=wi(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Z}}se.finalized=!0,se._$litElement$=!0,(Ne=globalThis.litElementHydrateSupport)===null||Ne===void 0||Ne.call(globalThis,{LitElement:se});const _t=globalThis.litElementPolyfillSupport;_t==null||_t({LitElement:se});((Ce=globalThis.litElementVersions)!==null&&Ce!==void 0?Ce:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ai=n=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(n,e):((t,i)=>{const{kind:s,elements:r}=i;return{kind:s,elements:r,finisher(o){customElements.define(t,o)}}})(n,e);/**
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
 */const xi=({finisher:n,descriptor:e})=>(t,i)=>{var s;if(i===void 0){const r=(s=t.originalKey)!==null&&s!==void 0?s:t.key,o=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(t.key)}:{...t,key:r};return n!=null&&(o.finisher=function(l){n(l,r)}),o}{const r=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),n==null||n(r,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function C(n,e){return xi({descriptor:t=>{const i={get(){var s,r;return(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const s=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var r,o;return this[s]===void 0&&(this[s]=(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(n))!==null&&o!==void 0?o:null),this[s]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Te;((Te=window.HTMLSlotElement)===null||Te===void 0?void 0:Te.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Ei(n,e){if(n!==void 0){let t=0;for(const i of n)yield e(i,t++)}}function p(n){let e,t,i;return typeof n=="object"?(e=n.hashFunction,t=n.expiring,i=n.tags):e=n,(s,r,o)=>{if(o.value!=null)o.value=mt(o.value,e,t,i);else if(o.get!=null)o.get=mt(o.get,e,t,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Re=new Map;function mt(n,e,t=0,i){const s=Symbol("__memoized_map__");return function(...r){let o;this.hasOwnProperty(s)||Object.defineProperty(this,s,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let l=this[s];if(Array.isArray(i))for(const a of i)Re.has(a)?Re.get(a).push(l):Re.set(a,[l]);if(e||r.length>0||t>0){let a;e===!0?a=r.map(d=>d.toString()).join("!"):e?a=e.apply(this,r):a=r[0];const u=`${a}__timestamp`;let v=!1;if(t>0)if(!l.has(u))v=!0;else{let d=l.get(u);v=Date.now()-d>t}l.has(a)&&!v?o=l.get(a):(o=n.apply(this,r),l.set(a,o),t>0&&l.set(u,Date.now()))}else{const a=this;l.has(a)?o=l.get(a):(o=n.apply(this,r),l.set(a,o))}return o}}var ne;(function(n){n[n.COUNT=0]="COUNT",n[n.ALPHABETICAL=1]="ALPHABETICAL",n[n.NUMERIC=2]="NUMERIC"})(ne||(ne={}));class Ut{constructor(e){this.buckets=e.buckets,this.doc_count_error_upper_bound=e.doc_count_error_upper_bound,this.sum_other_doc_count=e.sum_other_doc_count,this.first_bucket_key=e.first_bucket_key,this.last_bucket_key=e.last_bucket_key,this.number_buckets=e.number_buckets,this.interval=e.interval}getSortedBuckets(e){const t=[...this.buckets];if(this.isRawNumberBuckets(t))return t;const i=new Intl.Collator;switch(e){case ne.ALPHABETICAL:return t.sort((s,r)=>i.compare(s.key.toString(),r.key.toString()));case ne.NUMERIC:return t.sort((s,r)=>Number(r.key)-Number(s.key));case ne.COUNT:default:return t}}isRawNumberBuckets(e){return typeof this.buckets[0]=="number"}}h([p()],Ut.prototype,"getSortedBuckets",null);class He{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:Boolean(e)}}He.shared=new He;class ye{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}ye.shared=new ye;class Ie{parseValue(e){return ye.shared.parseValue(e)}}Ie.shared=new Ie;class Le{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const i=Date.parse(t);if(Number.isNaN(i))return;let s=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(s=new Date(s.getTime()+s.getTimezoneOffset()*1e3*60)),s}}Le.shared=new Le;class Ve{parseValue(e){if(typeof e=="string")return e}}Ve.shared=new Ve;class Fe{parseValue(e){return String(e)}}Fe.shared=new Fe;class U{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){if(this.rawValue===void 0)return[];const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(i=>{const s=this.parser.parseValue(i);Array.isArray(s)?t.push(...s):s!==void 0&&t.push(s)}),t}}h([p()],U.prototype,"values",null);h([p()],U.prototype,"value",null);class ie extends U{constructor(e){super(He.shared,e)}}class yt extends U{constructor(e){super(Ie.shared,e)}}class E extends U{constructor(e){super(Le.shared,e)}}class Ht extends U{constructor(e){super(Ve.shared,e)}}class M extends U{constructor(e){super(ye.shared,e)}}class _ extends U{constructor(e){super(Fe.shared,e)}}class g{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.identifier}get addeddate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.addeddate?new E(this.rawMetadata.fields.addeddate):void 0}get avg_rating(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.avg_rating)!=null?new M(this.rawMetadata.fields.avg_rating):void 0}get collection(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection?new _(this.rawMetadata.fields.collection):void 0}get collection_files_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.collection_files_count)!=null?new M(this.rawMetadata.fields.collection_files_count):void 0}get collection_size(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.collection_size)!=null?new yt(this.rawMetadata.fields.collection_size):void 0}get creator(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.creator?new _(this.rawMetadata.fields.creator):void 0}get date(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date?new E(this.rawMetadata.fields.date):void 0}get description(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.description?new _(this.rawMetadata.fields.description):void 0}get downloads(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.downloads)!=null?new M(this.rawMetadata.fields.downloads):void 0}get files_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.files_count)!=null?new M(this.rawMetadata.fields.files_count):void 0}get genre(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.genre?new _(this.rawMetadata.fields.genre):void 0}get indexflag(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.indexflag?new _(this.rawMetadata.fields.indexflag):void 0}get issue(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.issue?new _(this.rawMetadata.fields.issue):void 0}get item_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.item_count)!=null?new M(this.rawMetadata.fields.item_count):void 0}get item_size(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.item_size)!=null?new yt(this.rawMetadata.fields.item_size):void 0}get language(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.language?new _(this.rawMetadata.fields.language):void 0}get lending___available_to_borrow(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_borrow)!=null?new ie(this.rawMetadata.fields.lending___available_to_borrow):void 0}get lending___available_to_browse(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_browse)!=null?new ie(this.rawMetadata.fields.lending___available_to_browse):void 0}get lending___available_to_waitlist(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_waitlist)!=null?new ie(this.rawMetadata.fields.lending___available_to_waitlist):void 0}get lending___status(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.lending___status?new _(this.rawMetadata.fields.lending___status):void 0}get licenseurl(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.licenseurl?new _(this.rawMetadata.fields.licenseurl):void 0}get mediatype(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.mediatype?new Ht(this.rawMetadata.fields.mediatype):void 0}get month(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.month)!=null?new M(this.rawMetadata.fields.month):void 0}get noindex(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.noindex)!=null?new ie(this.rawMetadata.fields.noindex):void 0}get num_favorites(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.num_favorites)!=null?new M(this.rawMetadata.fields.num_favorites):void 0}get num_reviews(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.num_reviews)!=null?new M(this.rawMetadata.fields.num_reviews):void 0}get publicdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.publicdate?new E(this.rawMetadata.fields.publicdate):void 0}get reviewdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.reviewdate?new E(this.rawMetadata.fields.reviewdate):void 0}get source(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.source?new _(this.rawMetadata.fields.source):void 0}get subject(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.subject?new _(this.rawMetadata.fields.subject):void 0}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new _(this.rawMetadata.fields.title):void 0}get type(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.type?new _(this.rawMetadata.fields.type):void 0}get volume(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.volume?new _(this.rawMetadata.fields.volume):void 0}get week(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.week)!=null?new M(this.rawMetadata.fields.week):void 0}get year(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.year)!=null?new M(this.rawMetadata.fields.year):void 0}}h([p()],g.prototype,"addeddate",null);h([p()],g.prototype,"avg_rating",null);h([p()],g.prototype,"collection",null);h([p()],g.prototype,"collection_files_count",null);h([p()],g.prototype,"collection_size",null);h([p()],g.prototype,"creator",null);h([p()],g.prototype,"date",null);h([p()],g.prototype,"description",null);h([p()],g.prototype,"downloads",null);h([p()],g.prototype,"files_count",null);h([p()],g.prototype,"genre",null);h([p()],g.prototype,"indexflag",null);h([p()],g.prototype,"issue",null);h([p()],g.prototype,"item_count",null);h([p()],g.prototype,"item_size",null);h([p()],g.prototype,"language",null);h([p()],g.prototype,"lending___available_to_borrow",null);h([p()],g.prototype,"lending___available_to_browse",null);h([p()],g.prototype,"lending___available_to_waitlist",null);h([p()],g.prototype,"lending___status",null);h([p()],g.prototype,"licenseurl",null);h([p()],g.prototype,"mediatype",null);h([p()],g.prototype,"month",null);h([p()],g.prototype,"noindex",null);h([p()],g.prototype,"num_favorites",null);h([p()],g.prototype,"num_reviews",null);h([p()],g.prototype,"publicdate",null);h([p()],g.prototype,"reviewdate",null);h([p()],g.prototype,"source",null);h([p()],g.prototype,"subject",null);h([p()],g.prototype,"title",null);h([p()],g.prototype,"type",null);h([p()],g.prototype,"volume",null);h([p()],g.prototype,"week",null);h([p()],g.prototype,"year",null);class m{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.identifier}get highlight(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.highlight)===null||t===void 0)&&t.text?new _(this.rawMetadata.highlight.text):void 0}get addeddate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.addeddate?new E(this.rawMetadata.fields.addeddate):void 0}get avg_rating(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.avg_rating)!=null?new M(this.rawMetadata.fields.avg_rating):void 0}get collection(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection?new _(this.rawMetadata.fields.collection):void 0}get created_on(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.created_on?new E(this.rawMetadata.fields.created_on):void 0}get creator(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.creator?new _(this.rawMetadata.fields.creator):void 0}get date(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date?new E(this.rawMetadata.fields.date):void 0}get description(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.description?new _(this.rawMetadata.fields.description):void 0}get downloads(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.downloads)!=null?new M(this.rawMetadata.fields.downloads):void 0}get filename(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.filename?new _(this.rawMetadata.fields.filename):void 0}get file_basename(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.file_basename?new _(this.rawMetadata.fields.file_basename):void 0}get file_creation_mtime(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.file_creation_mtime)!=null?new M(this.rawMetadata.fields.file_creation_mtime):void 0}get issue(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.issue?new _(this.rawMetadata.fields.issue):void 0}get mediatype(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.mediatype?new Ht(this.rawMetadata.fields.mediatype):void 0}get page_num(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.page_num)!=null?new M(this.rawMetadata.fields.page_num):void 0}get publicdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.publicdate?new E(this.rawMetadata.fields.publicdate):void 0}get result_in_subfile(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.result_in_subfile)!=null?new ie(this.rawMetadata.fields.result_in_subfile):void 0}get reviewdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.reviewdate?new E(this.rawMetadata.fields.reviewdate):void 0}get source(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.source?new _(this.rawMetadata.fields.source):void 0}get subject(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.subject?new _(this.rawMetadata.fields.subject):void 0}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new _(this.rawMetadata.fields.title):void 0}get updated_on(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.updated_on?new E(this.rawMetadata.fields.updated_on):void 0}get year(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.year)!=null?new M(this.rawMetadata.fields.year):void 0}get __href__(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new _(this.rawMetadata.fields.__href__):void 0}}h([p()],m.prototype,"highlight",null);h([p()],m.prototype,"addeddate",null);h([p()],m.prototype,"avg_rating",null);h([p()],m.prototype,"collection",null);h([p()],m.prototype,"created_on",null);h([p()],m.prototype,"creator",null);h([p()],m.prototype,"date",null);h([p()],m.prototype,"description",null);h([p()],m.prototype,"downloads",null);h([p()],m.prototype,"filename",null);h([p()],m.prototype,"file_basename",null);h([p()],m.prototype,"file_creation_mtime",null);h([p()],m.prototype,"issue",null);h([p()],m.prototype,"mediatype",null);h([p()],m.prototype,"page_num",null);h([p()],m.prototype,"publicdate",null);h([p()],m.prototype,"result_in_subfile",null);h([p()],m.prototype,"reviewdate",null);h([p()],m.prototype,"source",null);h([p()],m.prototype,"subject",null);h([p()],m.prototype,"title",null);h([p()],m.prototype,"updated_on",null);h([p()],m.prototype,"year",null);h([p()],m.prototype,"__href__",null);class ze{constructor(e,t){var i,s,r,o,l,a,u;this.schema=t;const v=t==null?void 0:t.hit_type;this.totalResults=(s=(i=e==null?void 0:e.hits)===null||i===void 0?void 0:i.total)!==null&&s!==void 0?s:0,this.returnedCount=(o=(r=e==null?void 0:e.hits)===null||r===void 0?void 0:r.returned)!==null&&o!==void 0?o:0,this.results=(u=(a=(l=e==null?void 0:e.hits)===null||l===void 0?void 0:l.hits)===null||a===void 0?void 0:a.map(d=>ze.createResult(v,d)))!==null&&u!==void 0?u:[],e!=null&&e.aggregations&&(this.aggregations=Object.entries(e.aggregations).reduce((d,[c,f])=>(d[c]=new Ut(f),d),{}))}static createResult(e,t){switch(e){case"item":return new g(t);case"text":return new m(t);default:return t}}}class ki{constructor(e){this.clientParameters=e.client_parameters,this.finalizedParameters=e.finalized_parameters}}class Ni{constructor(e){var t,i,s;this.rawResponse=e,this.request=new ki(e.request),this.responseHeader=(t=e.response)===null||t===void 0?void 0:t.header,this.response=new ze((i=e.response)===null||i===void 0?void 0:i.body,(s=e.response)===null||s===void 0?void 0:s.hit_schema)}}var V;(function(n){n[n.METADATA=0]="METADATA",n[n.FULLTEXT=1]="FULLTEXT"})(V||(V={}));class $e{static aggregateSearchParamsAsString(e){if(e.omit)return"false";if(e.advancedParams){const t=e.advancedParams.map(s=>({terms:s}));return JSON.stringify(t)}if(e.simpleParams)return e.simpleParams.join(",")}static sortParamsAsString(e){return`${e.field}:${e.direction}`}static filterParamsAsString(e){return JSON.stringify(e)}static generateURLSearchParams(e){const t=new URLSearchParams;if(t.append("user_query",e.query),e.pageType&&t.append("page_type",String(e.pageType)),e.pageTarget&&t.append("page_target",String(e.pageTarget)),e.rows!=null&&t.append("hits_per_page",String(e.rows)),e.page!=null&&t.append("page",String(e.page)),e.fields&&e.fields.length>0&&t.append("fields",e.fields.join(",")),e.filters&&Object.keys(e.filters).length>0){const s=this.filterParamsAsString(e.filters);s&&s!=="{}"&&t.append("filter_map",s)}if(e.sort&&e.sort.length>0){const s=e.sort.map(r=>this.sortParamsAsString(r));t.append("sort",s.join(","))}const i=e.aggregations;if(i){const s=this.aggregateSearchParamsAsString(i);s&&t.append("aggregations",s)}return e.aggregationsSize!=null&&t.append("aggregations_size",String(e.aggregationsSize)),e.debugging&&t.append("debugging","true"),e.uid&&t.append("uid",e.uid),e.includeClientUrl!==!1&&t.append("client_url",window.location.href),t}}var re;(function(n){n.networkError="SearchService.NetworkError",n.itemNotFound="SearchService.ItemNotFound",n.decodingError="SearchService.DecodingError",n.searchEngineError="SearchService.SearchEngineError"})(re||(re={}));class Ci extends Error{constructor(e,t,i){super(t),this.name=e,this.type=e,this.details=i}}class It{constructor(e){var t,i;this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",this.debuggingEnabled=(i=e==null?void 0:e.debuggingEnabled)!==null&&i!==void 0?i:!1,(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null;const s=new URL(window.location.href),r=s.searchParams.get("scope"),o=s.searchParams.get("caching"),l=s.searchParams.get("verbose");(e==null?void 0:e.scope)!==void 0?this.requestScope=e.scope:r&&(this.requestScope=r),(e==null?void 0:e.caching)!==void 0?this.cachingFlags=e.caching:o&&(this.cachingFlags=o),(e==null?void 0:e.verbose)!==void 0?this.verbose=e.verbose:l&&(this.verbose=!!l)}async fetchUrl(e,t){var i,s;const r=new URL(e);this.requestScope&&r.searchParams.set("scope",this.requestScope),this.cachingFlags&&r.searchParams.set("caching",this.cachingFlags);let o;try{const l=(i=t==null?void 0:t.requestOptions)!==null&&i!==void 0?i:{credentials:this.includeCredentials?"include":"same-origin"};o=await fetch(r.href,l)}catch(l){const a=l instanceof Error?l.message:typeof l=="string"?l:"Unknown error";return this.getErrorResult(re.networkError,a)}try{const l=await o.json();this.verbose&&this.printResponse(l),l.debugging&&this.printDebuggingInfo(l);const a=(s=l.response)===null||s===void 0?void 0:s.error;return a?this.getErrorResult(re.searchEngineError,a.message,a.forensics):{success:l}}catch(l){const a=l instanceof Error?l.message:typeof l=="string"?l:"Unknown error";return this.getErrorResult(re.decodingError,a)}}getErrorResult(e,t,i){return{error:new Ci(e,t,i)}}printResponse(e){var t,i,s,r,o;try{const l=JSON.parse(JSON.stringify(e)),a=(s=(i=(t=l==null?void 0:l.response)===null||t===void 0?void 0:t.body)===null||i===void 0?void 0:i.hits)===null||s===void 0?void 0:s.hits;if(Array.isArray(a)&&a.length>1){const v=[];v.push(a[0]),v.push(`*** ${a.length-1} hits omitted ***`),l.response.body.hits.hits=v}const u=(o=(r=l==null?void 0:l.response)===null||r===void 0?void 0:r.body)===null||o===void 0?void 0:o.aggregations;u&&Object.entries(u).forEach(([v,d])=>{var c,f,b;if(((c=d==null?void 0:d.buckets)===null||c===void 0?void 0:c.length)>0){const y=JSON.parse(JSON.stringify(d));y.buckets=`*** ${(b=(f=y.buckets)===null||f===void 0?void 0:f.length)!==null&&b!==void 0?b:0} buckets omitted ***`,l.response.body.aggregations[v]=y}}),console.log("***** RESPONSE RECEIVED *****"),console.groupCollapsed("Response"),console.log(JSON.stringify(l,null,2)),console.groupEnd()}catch(l){console.error("Error printing search response:",l)}}printDebuggingInfo(e){var t,i;const s=e.debugging,r=(t=s.messages)!==null&&t!==void 0?t:[],o=(i=s.data)!==null&&i!==void 0?i:{};console.log("***** BEGIN DEBUGGING *****"),console.log("Full response:"),console.log(JSON.stringify(e,null,2)),console.group("Debug messages");for(const l of r)console.log(l);console.groupEnd(),console.group("Debug data");for(const[l,a]of Object.entries(o))console.log(l,a);console.groupEnd(),console.log("***** END DEBUGGING *****")}}class Ti extends It{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=$e.generateURLSearchParams(e).toString(),s=`https://${this.baseUrl}${this.servicePath}/?service_backend=fts&${i}`;return this.fetchUrl(s)}}class Ri extends It{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=$e.generateURLSearchParams(e).toString(),s=`https://${this.baseUrl}${this.servicePath}/?service_backend=metadata&${i}`;return this.fetchUrl(s)}}class Y{constructor(e={}){this.backendOptions=e}async search(e,t=V.METADATA){const s=await Y.getBackendForSearchType(t,this.backendOptions).performSearch(e);return s.error?s:{success:new Ni(s.success)}}static getBackendForSearchType(e,t={}){switch(e){case V.FULLTEXT:return new Ti(t);case V.METADATA:default:return new Ri(t)}}}Y.default=new Y;h([p((n,e={})=>{const{includeCredentials:t=!1,verbose:i=!1,scope:s="",baseUrl:r=""}=e;return`${n};${t};${i};${s};${r}`})],Y,"getBackendForSearchType",null);class $t{constructor(){this.filterMap={}}addFilter(e,t,i){if(this.filterMap[e]||(this.filterMap[e]={}),this.filterMap[e][t]){const s=[].concat(this.filterMap[e][t],i);this.filterMap[e][t]=Array.from(new Set(s))}else this.filterMap[e][t]=i;return this}removeSingleFilter(e,t,i){var s;if(!(!((s=this.filterMap[e])===null||s===void 0)&&s[t]))return this;const r=[].concat(this.filterMap[e][t]),o=r.indexOf(i);return o>=0&&r.splice(o,1),this.filterMap[e][t]=r.length===1?r[0]:r,r.length===0&&delete this.filterMap[e][t],this.deleteFieldIfEmpty(e),this}removeFilters(e,t){return this.filterMap[e]?(delete this.filterMap[e][t],this.deleteFieldIfEmpty(e),this):this}deleteFieldIfEmpty(e){const t=this.filterMap[e];t&&Object.keys(t).length===0&&delete this.filterMap[e]}setFilterMap(e){return this.filterMap={...e},this}mergeFilterMap(e){for(const[t,i]of Object.entries(e))for(const[s,r]of Object.entries(i))if(Array.isArray(r))for(const o of r)this.addFilter(t,s,o);else this.addFilter(t,s,r);return this}build(){return this.filterMap}}let w=class extends se{constructor(){super(...arguments),this.searchServiceUrlOptions=this.initSearchServiceUrlOptions(),this.filterMap={},this.loadingSearchResults=!1,this.loadingAggregations=!1,this.defaultAggregationsChecked=!0,this.fullSearchResultsShown=!1,this.searchService=new Y(this.searchServiceUrlOptions)}get searchResults(){var e;return(e=this.searchResponse)===null||e===void 0?void 0:e.response.results}get searchAggregations(){var e;return(e=this.aggregationsResponse)===null||e===void 0?void 0:e.response.aggregations}initSearchServiceUrlOptions(){var e,t,i;const s=new URL(window.location.href).searchParams;return{baseUrl:(e=s.get("search_base_url"))!==null&&e!==void 0?e:void 0,servicePath:(t=s.get("search_service_path"))!==null&&t!==void 0?t:void 0,debuggingEnabled:(i=!!s.get("debugging"))!==null&&i!==void 0?i:void 0}}render(){var e;return A`
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
    `}filterFieldChanged(e){var t,i;const r=!!e.target.selectedOptions[0].dataset.numeric,o=(i=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelectorAll("#filter-constraint option"))!==null&&i!==void 0?i:[];for(const l of o)l.toggleAttribute("hidden",!r&&!!l.dataset.numeric)}addFilterClicked(){const e=this.filterFieldInput.selectedOptions[0].value,t=this.filterValueInput.value,i=this.filterConstraintInput.selectedOptions[0].value;!e||!i||!t||(this.filterMap=new $t().setFilterMap(this.filterMap).addFilter(e,t,i).build(),this.filterValueInput.value="")}removeFilterClicked(e){const t=e.target,{field:i,value:s,constraint:r}=t.dataset;i&&s&&r&&(this.filterMap=new $t().setFilterMap(this.filterMap).removeSingleFilter(i,s,r).build())}get appliedFiltersTemplate(){const e=[];for(const[i,s]of Object.entries(this.filterMap))for(const[r,o]of Object.entries(s))if(Array.isArray(o))for(const l of o)e.push({field:i,value:r,constraint:l});else e.push({field:i,value:r,constraint:o});if(e.length===0)return A`<span>(no filters applied)</span>`;const t={inc:"includes",exc:"excludes",gt:">",gte:">=",lt:"<",lte:"<="};return Ei(e,({field:i,value:s,constraint:r})=>A`
        <span class="filter">
          <span class="filter-text"
            >'${i}' ${t[r]} '${s}'</span
          ><!--
       --><button
            type="button"
            class="remove-filter"
            data-field=${i}
            data-value=${s}
            data-constraint=${r}
            @click=${this.removeFilterClicked}
          >
            x
          </button>
        </span>
      `)}aggregationCheckboxTemplate(e,t){const i=`aggs-${e}`;return A`
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
    `}get resultsTemplate(){return A`
      <details>
        <summary>PPS URL params</summary>
        ${this.lastSearchParams?A`<div>
              Last search params:
              <pre>${this.lastSearchParams}</pre>
            </div>`:$}
        ${this.lastAggregationParams?A`<div>
              Last aggregation params:
              <pre>${this.lastAggregationParams}</pre>
            </div>`:$}
      </details>
      ${this.loadingSearchResults?A`<h3>Loading search results...</h3>`:[this.minimalSearchResultsTemplate,this.fullSearchResultsTemplate]}
      ${this.loadingAggregations?A`<h3>Loading aggregations...</h3>`:this.aggregationsTemplate}
    `}get minimalSearchResultsTemplate(){var e;return A`
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
          ${(e=this.searchResults)===null||e===void 0?void 0:e.map(t=>{var i,s;return A`
              <tr>
                <td>${t.identifier}</td>
                <td>${(s=(i=t.title)===null||i===void 0?void 0:i.value)!==null&&s!==void 0?s:"(Untitled)"}</td>
                ${this.snippetTemplate(t)}
              </tr>
            `})}
        </tbody>
      </table>
    `}get fullSearchResultsTemplate(){return A`
      <button @click=${this.toggleFullSearchResults}>
        ${this.fullSearchResultsShown?"Hide":"Show"} all search results
      </button>
      ${this.fullSearchResultsShown?A`<pre>
          ${JSON.stringify(this.searchResults,null,2)}
        </pre
          >`:$}
    `}get aggregationsTemplate(){var e;return A`
      <div>
        <h2>Aggregations</h2>
        ${Object.entries((e=this.searchAggregations)!==null&&e!==void 0?e:{}).map(([t,i])=>A`
            <h3>${t}</h3>
            <p>
              ${i.buckets.map(s=>typeof s=="number"?s:`${s.key} (${s.doc_count})`).join(", ")}
            </p>
          `)}
      </div>
    `}get snippetsHeaderTemplate(){var e;return!((e=this.searchResults)===null||e===void 0)&&e.some(t=>t.highlight)?A`<th>Snippets</th>`:A`${$}`}snippetTemplate(e){return e.highlight?A`<td>${e.highlight.value}</td>`:A`${$}`}toggleDefaultAggregations(){var e;this.defaultAggregationsChecked=(e=this.defaultAggregationsCheckbox)===null||e===void 0?void 0:e.checked}toggleFullSearchResults(){this.fullSearchResultsShown=!this.fullSearchResultsShown}async search(e){var t;e.preventDefault();const i=this.searchInput.value,s=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector("input[name='search-type']:checked"),r=(s==null?void 0:s.value)==="fts"?V.FULLTEXT:V.METADATA;this.fetchSearchResults(i,r),this.fetchAggregations(i,r)}async fetchSearchResults(e,t){var i,s,r,o,l;const a=((i=this.checkedSort)===null||i===void 0?void 0:i.value)==="none"?void 0:[{field:"title",direction:(s=this.checkedSort)===null||s===void 0?void 0:s.value}],u=Number((r=this.rowsInput)===null||r===void 0?void 0:r.value),v=(o=this.debugCheck)===null||o===void 0?void 0:o.checked,d={query:e,rows:u,sort:a,filters:this.filterMap,aggregations:{omit:!0},debugging:v,uid:"demo"};this.lastSearchParams=decodeURIComponent($e.generateURLSearchParams(d).toString()),this.loadingSearchResults=!0;const c=await this.searchService.search(d,t);this.loadingSearchResults=!1,c!=null&&c.success?this.searchResponse=c==null?void 0:c.success:(alert(`Oh noes: ${(l=c==null?void 0:c.error)===null||l===void 0?void 0:l.message}`),console.error("Error searching",c==null?void 0:c.error))}async fetchAggregations(e,t){var i,s,r,o;const l=(i=this.shadowRoot)===null||i===void 0?void 0:i.querySelectorAll("input[name='aggs']:checked"),a={simpleParams:l?[...l].map(f=>f.value):void 0},u=Number((s=this.numAggsInput)===null||s===void 0?void 0:s.value),v=(r=this.debugCheck)===null||r===void 0?void 0:r.checked,d={query:e,rows:0,filters:this.filterMap,aggregationsSize:u,debugging:v,uid:"demo"};this.defaultAggregationsChecked||(d.aggregations=a),this.lastAggregationParams=decodeURIComponent($e.generateURLSearchParams(d).toString()),this.loadingAggregations=!0;const c=await this.searchService.search(d,t);this.loadingAggregations=!1,c!=null&&c.success?this.aggregationsResponse=c==null?void 0:c.success:(alert(`Oh noes: ${(o=c==null?void 0:c.error)===null||o===void 0?void 0:o.message}`),console.error("Error searching",c==null?void 0:c.error))}static get styles(){return ei`
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
    `}};h([C("#search-input")],w.prototype,"searchInput",void 0);h([C("#debug-info-check")],w.prototype,"debugCheck",void 0);h([C("#num-rows")],w.prototype,"rowsInput",void 0);h([C("#num-aggs")],w.prototype,"numAggsInput",void 0);h([C("input[name='sort']:checked")],w.prototype,"checkedSort",void 0);h([C("#filter-field")],w.prototype,"filterFieldInput",void 0);h([C("#filter-constraint")],w.prototype,"filterConstraintInput",void 0);h([C("#filter-value")],w.prototype,"filterValueInput",void 0);h([C("#aggs-default")],w.prototype,"defaultAggregationsCheckbox",void 0);h([k()],w.prototype,"searchServiceUrlOptions",void 0);h([k()],w.prototype,"filterMap",void 0);h([k()],w.prototype,"searchResponse",void 0);h([k()],w.prototype,"aggregationsResponse",void 0);h([k()],w.prototype,"loadingSearchResults",void 0);h([k()],w.prototype,"loadingAggregations",void 0);h([k()],w.prototype,"lastSearchParams",void 0);h([k()],w.prototype,"lastAggregationParams",void 0);h([k()],w.prototype,"defaultAggregationsChecked",void 0);h([k()],w.prototype,"fullSearchResultsShown",void 0);w=h([Ai("app-root")],w);Xt(Yt`
        <app-root></app-root>
      `,document.querySelector("#demo"));
