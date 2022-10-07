const Ut=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};Ut();/**
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
 */const Ot=new WeakMap,re=n=>typeof n=="function"&&Ot.has(n);/**
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
 */const ze=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,_t=(n,e,t=null)=>{for(;e!==t;){const i=e.nextSibling;n.removeChild(e),e=i}};/**
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
 */const M={},Fe={};/**
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
 */const C=`{{lit-${String(Math.random()).slice(2)}}}`,mt=`<!--${C}-->`,qe=new RegExp(`${C}|${mt}`),te="$lit$";class Lt{constructor(e,t){this.parts=[],this.element=t;const i=[],s=[],r=document.createTreeWalker(t.content,133,null,!1);let o=0,a=-1,l=0;const{strings:u,values:{length:g}}=e;for(;l<g;){const d=r.nextNode();if(d===null){r.currentNode=s.pop();continue}if(a++,d.nodeType===1){if(d.hasAttributes()){const h=d.attributes,{length:v}=h;let w=0;for(let y=0;y<v;y++)We(h[y].name,te)&&w++;for(;w-- >0;){const y=u[l],L=Ce.exec(y)[2],I=L.toLowerCase()+te,P=d.getAttribute(I);d.removeAttribute(I);const E=P.split(qe);this.parts.push({type:"attribute",index:a,name:L,strings:E}),l+=E.length-1}}d.tagName==="TEMPLATE"&&(s.push(d),r.currentNode=d.content)}else if(d.nodeType===3){const h=d.data;if(h.indexOf(C)>=0){const v=d.parentNode,w=h.split(qe),y=w.length-1;for(let L=0;L<y;L++){let I,P=w[L];if(P==="")I=k();else{const E=Ce.exec(P);E!==null&&We(E[2],te)&&(P=P.slice(0,E.index)+E[1]+E[2].slice(0,-te.length)+E[3]),I=document.createTextNode(P)}v.insertBefore(I,d),this.parts.push({type:"node",index:++a})}w[y]===""?(v.insertBefore(k(),d),i.push(d)):d.data=w[y],l+=y}}else if(d.nodeType===8)if(d.data===C){const h=d.parentNode;(d.previousSibling===null||a===o)&&(a++,h.insertBefore(k(),d)),o=a,this.parts.push({type:"node",index:a}),d.nextSibling===null?d.data="":(i.push(d),a--),l++}else{let h=-1;for(;(h=d.data.indexOf(C,h+1))!==-1;)this.parts.push({type:"node",index:-1}),l++}}for(const d of i)d.parentNode.removeChild(d)}}const We=(n,e)=>{const t=n.length-e.length;return t>=0&&n.slice(t)===e},It=n=>n.index!==-1,k=()=>document.createComment(""),Ce=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
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
 */class Ke{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)i!==void 0&&i.setValue(e[t]),t++;for(const i of this.__parts)i!==void 0&&i.commit()}_clone(){const e=ze?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let r=0,o=0,a,l=s.nextNode();for(;r<i.length;){if(a=i[r],!It(a)){this.__parts.push(void 0),r++;continue}for(;o<a.index;)o++,l.nodeName==="TEMPLATE"&&(t.push(l),s.currentNode=l.content),(l=s.nextNode())===null&&(s.currentNode=t.pop(),l=s.nextNode());if(a.type==="node"){const u=this.processor.handleTextExpression(this.options);u.insertAfterNode(l.previousSibling),this.__parts.push(u)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,a.name,a.strings,this.options));r++}return ze&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
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
 */const Ze=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:n=>n}),Vt=` ${C} `;class $t{constructor(e,t,i,s){this.strings=e,this.values=t,this.type=i,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let s=0;s<e;s++){const r=this.strings[s],o=r.lastIndexOf("<!--");i=(o>-1||i)&&r.indexOf("-->",o+1)===-1;const a=Ce.exec(r);a===null?t+=r+(i?Vt:mt):t+=r.substr(0,a.index)+a[1]+a[2]+te+a[3]+C}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return Ze!==void 0&&(t=Ze.createHTML(t)),e.innerHTML=t,e}}/**
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
 */const Ve=n=>n===null||!(typeof n=="object"||typeof n=="function"),Pe=n=>Array.isArray(n)||!!(n&&n[Symbol.iterator]);class yt{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let s=0;s<i.length-1;s++)this.parts[s]=this._createPart()}_createPart(){return new bt(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(t===1&&e[0]===""&&e[1]===""){const r=i[0].value;if(typeof r=="symbol")return String(r);if(typeof r=="string"||!Pe(r))return r}let s="";for(let r=0;r<t;r++){s+=e[r];const o=i[r];if(o!==void 0){const a=o.value;if(Ve(a)||!Pe(a))s+=typeof a=="string"?a:String(a);else for(const l of a)s+=typeof l=="string"?l:String(l)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class bt{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==M&&(!Ve(e)||e!==this.value)&&(this.value=e,re(e)||(this.committer.dirty=!0))}commit(){for(;re(this.value);){const e=this.value;this.value=M,e(this)}this.value!==M&&this.committer.commit()}}class $e{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(k()),this.endNode=e.appendChild(k())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=k()),e.__insert(this.endNode=k())}insertAfterPart(e){e.__insert(this.startNode=k()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;re(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=M,t(this)}const e=this.__pendingValue;e!==M&&(Ve(e)?e!==this.value&&this.__commitText(e):e instanceof $t?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Pe(e)?this.__commitIterable(e):e===Fe?(this.value=Fe,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=e==null?"":e;const i=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof Ke&&this.value.template===t)this.value.update(e.values);else{const i=new Ke(t,e.processor,this.options),s=i._clone();i.update(e.values),this.__commitNode(s),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i=0,s;for(const r of e)s=t[i],s===void 0&&(s=new $e(this.options),t.push(s),i===0?s.appendIntoPart(this):s.insertAfterPart(t[i-1])),s.setValue(r),s.commit(),i++;i<t.length&&(t.length=i,this.clear(s&&s.endNode))}clear(e=this.startNode){_t(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Dt{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,i.length!==2||i[0]!==""||i[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;re(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=M,t(this)}if(this.__pendingValue===M)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=M}}class jt extends yt{constructor(e,t,i){super(e,t,i),this.single=i.length===2&&i[0]===""&&i[1]===""}_createPart(){return new Bt(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Bt extends bt{}let wt=!1;(()=>{try{const n={get capture(){return wt=!0,!1}};window.addEventListener("test",n,n),window.removeEventListener("test",n,n)}catch{}})();class zt{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=s=>this.handleEvent(s)}setValue(e){this.__pendingValue=e}commit(){for(;re(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=M,r(this)}if(this.__pendingValue===M)return;const e=this.__pendingValue,t=this.value,i=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=e!=null&&(t==null||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=Ft(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=M}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Ft=n=>n&&(wt?{capture:n.capture,passive:n.passive,once:n.once}:n.capture);/**
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
 */class qt{handleAttributeExpressions(e,t,i,s){const r=t[0];return r==="."?new jt(e,t.slice(1),i).parts:r==="@"?[new zt(e,t.slice(1),s.eventContext)]:r==="?"?[new Dt(e,t.slice(1),i)]:new yt(e,t,i).parts}handleTextExpression(e){return new $e(e)}}const Wt=new qt;/**
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
 */function Kt(n){let e=Je.get(n.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},Je.set(n.type,e));let t=e.stringsArray.get(n.strings);if(t!==void 0)return t;const i=n.strings.join(C);return t=e.keyString.get(i),t===void 0&&(t=new Lt(n,n.getTemplateElement()),e.keyString.set(i,t)),e.stringsArray.set(n.strings,t),t}const Je=new Map;/**
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
 */const Xe=new WeakMap,Zt=(n,e,t)=>{let i=Xe.get(e);i===void 0&&(_t(e,e.firstChild),Xe.set(e,i=new $e(Object.assign({templateFactory:Kt},t))),i.appendInto(e)),i.setValue(n),i.commit()};/**
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
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const Jt=(n,...e)=>new $t(n,e,"html",Wt);/*! *****************************************************************************
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
***************************************************************************** */function c(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=window,De=pe.ShadowRoot&&(pe.ShadyCSS===void 0||pe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,je=Symbol(),Ge=new WeakMap;class At{constructor(e,t,i){if(this._$cssResult$=!0,i!==je)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(De&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Ge.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ge.set(t,e))}return e}toString(){return this.cssText}}const Xt=n=>new At(typeof n=="string"?n:n+"",void 0,je),Gt=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new At(t,n,je)},Yt=(n,e)=>{De?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=pe.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},Ye=De?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Xt(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ae;const ve=window,Qe=ve.trustedTypes,Qt=Qe?Qe.emptyScript:"",et=ve.reactiveElementPolyfillSupport,Re={toAttribute(n,e){switch(e){case Boolean:n=n?Qt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},St=(n,e)=>e!==n&&(e==e||n==n),Se={attribute:!0,type:String,converter:Re,reflect:!1,hasChanged:St};class V extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;(t=this.h)!==null&&t!==void 0||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=Se){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Se}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Ye(s))}else e!==void 0&&t.push(Ye(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Yt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Se){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Re).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:Re;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||St)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}V.finalized=!0,V.elementProperties=new Map,V.elementStyles=[],V.shadowRootOptions={mode:"open"},et==null||et({ReactiveElement:V}),((Ae=ve.reactiveElementVersions)!==null&&Ae!==void 0?Ae:ve.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xe;const ge=window,z=ge.trustedTypes,tt=z?z.createPolicy("lit-html",{createHTML:n=>n}):void 0,N=`lit$${(Math.random()+"").slice(9)}$`,xt="?"+N,ei=`<${xt}>`,F=document,fe=(n="")=>F.createComment(n),oe=n=>n===null||typeof n!="object"&&typeof n!="function",Mt=Array.isArray,ti=n=>Mt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,it=/-->/g,st=/>/g,R=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,rt=/"/g,Et=/^(?:script|style|textarea|title)$/i,le=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),ot=new WeakMap,j=F.createTreeWalker(F,129,null,!1),ii=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=Q;for(let l=0;l<t;l++){const u=n[l];let g,d,h=-1,v=0;for(;v<u.length&&(o.lastIndex=v,d=o.exec(u),d!==null);)v=o.lastIndex,o===Q?d[1]==="!--"?o=it:d[1]!==void 0?o=st:d[2]!==void 0?(Et.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=R):d[3]!==void 0&&(o=R):o===R?d[0]===">"?(o=s!=null?s:Q,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,g=d[1],o=d[3]===void 0?R:d[3]==='"'?rt:nt):o===rt||o===nt?o=R:o===it||o===st?o=Q:(o=R,s=void 0);const w=o===R&&n[l+1].startsWith("/>")?" ":"";r+=o===Q?u+ei:h>=0?(i.push(g),u.slice(0,h)+"$lit$"+u.slice(h)+N+w):u+N+(h===-2?(i.push(void 0),l):w)}const a=r+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[tt!==void 0?tt.createHTML(a):a,i]};class ae{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[u,g]=ii(e,t);if(this.el=ae.createElement(u,i),j.currentNode=this.el.content,t===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(s=j.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const h of s.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(N)){const v=g[o++];if(d.push(h),v!==void 0){const w=s.getAttribute(v.toLowerCase()+"$lit$").split(N),y=/([.?@])?(.*)/.exec(v);l.push({type:1,index:r,name:y[2],strings:w,ctor:y[1]==="."?ni:y[1]==="?"?oi:y[1]==="@"?li:be})}else l.push({type:6,index:r})}for(const h of d)s.removeAttribute(h)}if(Et.test(s.tagName)){const d=s.textContent.split(N),h=d.length-1;if(h>0){s.textContent=z?z.emptyScript:"";for(let v=0;v<h;v++)s.append(d[v],fe()),j.nextNode(),l.push({type:2,index:++r});s.append(d[h],fe())}}}else if(s.nodeType===8)if(s.data===xt)l.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf(N,d+1))!==-1;)l.push({type:7,index:r}),d+=N.length-1}r++}}static createElement(e,t){const i=F.createElement("template");return i.innerHTML=e,i}}function q(n,e,t=n,i){var s,r,o,a;if(e===le)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const u=oe(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==u&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),u===void 0?l=void 0:(l=new u(n),l._$AT(n,t,i)),i!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=q(n,l._$AS(n,e.values),l,i)),e}class si{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:F).importNode(i,!0);j.currentNode=r;let o=j.nextNode(),a=0,l=0,u=s[0];for(;u!==void 0;){if(a===u.index){let g;u.type===2?g=new ye(o,o.nextSibling,this,e):u.type===1?g=new u.ctor(o,u.name,u.strings,this,e):u.type===6&&(g=new ai(o,this,e)),this.u.push(g),u=s[++l]}a!==(u==null?void 0:u.index)&&(o=j.nextNode(),a++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ye{constructor(e,t,i,s){var r;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),oe(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==le&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ti(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==b&&oe(this._$AH)?this._$AA.nextSibling.data=e:this.T(F.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=ae.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const o=new si(r,this),a=o.v(this.options);o.p(i),this.T(a),this._$AH=o}}_$AC(e){let t=ot.get(e.strings);return t===void 0&&ot.set(e.strings,t=new ae(e)),t}k(e){Mt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new ye(this.O(fe()),this.O(fe()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class be{constructor(e,t,i,s,r){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=q(this,e,t,0),o=!oe(e)||e!==this._$AH&&e!==le,o&&(this._$AH=e);else{const a=e;let l,u;for(e=r[0],l=0;l<r.length-1;l++)u=q(this,a[i+l],t,l),u===le&&(u=this._$AH[l]),o||(o=!oe(u)||u!==this._$AH[l]),u===b?e=b:e!==b&&(e+=(u!=null?u:"")+r[l+1]),this._$AH[l]=u}o&&!s&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class ni extends be{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}}const ri=z?z.emptyScript:"";class oi extends be{constructor(){super(...arguments),this.type=4}j(e){e&&e!==b?this.element.setAttribute(this.name,ri):this.element.removeAttribute(this.name)}}class li extends be{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=q(this,e,t,0))!==null&&i!==void 0?i:b)===le)return;const s=this._$AH,r=e===b&&s!==b||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==b&&(s===b||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class ai{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}}const lt=ge.litHtmlPolyfillSupport;lt==null||lt(ae,ye),((xe=ge.litHtmlVersions)!==null&&xe!==void 0?xe:ge.litHtmlVersions=[]).push("2.4.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Me;const _e=window,W=_e.trustedTypes,at=W?W.createPolicy("lit-html",{createHTML:n=>n}):void 0,T=`lit$${(Math.random()+"").slice(9)}$`,kt="?"+T,di=`<${kt}>`,K=document,de=(n="")=>K.createComment(n),ue=n=>n===null||typeof n!="object"&&typeof n!="function",Nt=Array.isArray,ui=n=>Nt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dt=/-->/g,ut=/>/g,H=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ht=/'/g,ct=/"/g,Tt=/^(?:script|style|textarea|title)$/i,hi=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),x=hi(1),Z=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),pt=new WeakMap,B=K.createTreeWalker(K,129,null,!1),ci=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=ee;for(let l=0;l<t;l++){const u=n[l];let g,d,h=-1,v=0;for(;v<u.length&&(o.lastIndex=v,d=o.exec(u),d!==null);)v=o.lastIndex,o===ee?d[1]==="!--"?o=dt:d[1]!==void 0?o=ut:d[2]!==void 0?(Tt.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=H):d[3]!==void 0&&(o=H):o===H?d[0]===">"?(o=s!=null?s:ee,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,g=d[1],o=d[3]===void 0?H:d[3]==='"'?ct:ht):o===ct||o===ht?o=H:o===dt||o===ut?o=ee:(o=H,s=void 0);const w=o===H&&n[l+1].startsWith("/>")?" ":"";r+=o===ee?u+di:h>=0?(i.push(g),u.slice(0,h)+"$lit$"+u.slice(h)+T+w):u+T+(h===-2?(i.push(void 0),l):w)}const a=r+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[at!==void 0?at.createHTML(a):a,i]};class he{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[u,g]=ci(e,t);if(this.el=he.createElement(u,i),B.currentNode=this.el.content,t===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(s=B.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const h of s.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(T)){const v=g[o++];if(d.push(h),v!==void 0){const w=s.getAttribute(v.toLowerCase()+"$lit$").split(T),y=/([.?@])?(.*)/.exec(v);l.push({type:1,index:r,name:y[2],strings:w,ctor:y[1]==="."?vi:y[1]==="?"?fi:y[1]==="@"?_i:we})}else l.push({type:6,index:r})}for(const h of d)s.removeAttribute(h)}if(Tt.test(s.tagName)){const d=s.textContent.split(T),h=d.length-1;if(h>0){s.textContent=W?W.emptyScript:"";for(let v=0;v<h;v++)s.append(d[v],de()),B.nextNode(),l.push({type:2,index:++r});s.append(d[h],de())}}}else if(s.nodeType===8)if(s.data===kt)l.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf(T,d+1))!==-1;)l.push({type:7,index:r}),d+=T.length-1}r++}}static createElement(e,t){const i=K.createElement("template");return i.innerHTML=e,i}}function J(n,e,t=n,i){var s,r,o,a;if(e===Z)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const u=ue(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==u&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),u===void 0?l=void 0:(l=new u(n),l._$AT(n,t,i)),i!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=J(n,l._$AS(n,e.values),l,i)),e}class pi{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:K).importNode(i,!0);B.currentNode=r;let o=B.nextNode(),a=0,l=0,u=s[0];for(;u!==void 0;){if(a===u.index){let g;u.type===2?g=new ce(o,o.nextSibling,this,e):u.type===1?g=new u.ctor(o,u.name,u.strings,this,e):u.type===6&&(g=new mi(o,this,e)),this.u.push(g),u=s[++l]}a!==(u==null?void 0:u.index)&&(o=B.nextNode(),a++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ce{constructor(e,t,i,s){var r;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),ue(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==Z&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ui(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==m&&ue(this._$AH)?this._$AA.nextSibling.data=e:this.T(K.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=he.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const o=new pi(r,this),a=o.v(this.options);o.p(i),this.T(a),this._$AH=o}}_$AC(e){let t=pt.get(e.strings);return t===void 0&&pt.set(e.strings,t=new he(e)),t}k(e){Nt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new ce(this.O(de()),this.O(de()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class we{constructor(e,t,i,s,r){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=J(this,e,t,0),o=!ue(e)||e!==this._$AH&&e!==Z,o&&(this._$AH=e);else{const a=e;let l,u;for(e=r[0],l=0;l<r.length-1;l++)u=J(this,a[i+l],t,l),u===Z&&(u=this._$AH[l]),o||(o=!ue(u)||u!==this._$AH[l]),u===m?e=m:e!==m&&(e+=(u!=null?u:"")+r[l+1]),this._$AH[l]=u}o&&!s&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class vi extends we{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}const gi=W?W.emptyScript:"";class fi extends we{constructor(){super(...arguments),this.type=4}j(e){e&&e!==m?this.element.setAttribute(this.name,gi):this.element.removeAttribute(this.name)}}class _i extends we{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=J(this,e,t,0))!==null&&i!==void 0?i:m)===Z)return;const s=this._$AH,r=e===m&&s!==m||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==m&&(s===m||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class mi{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const vt=_e.litHtmlPolyfillSupport;vt==null||vt(he,ce),((Me=_e.litHtmlVersions)!==null&&Me!==void 0?Me:_e.litHtmlVersions=[]).push("2.4.0");const $i=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new ce(e.insertBefore(de(),a),a,void 0,t!=null?t:{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ee,ke;class se extends V{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=$i(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Z}}se.finalized=!0,se._$litElement$=!0,(Ee=globalThis.litElementHydrateSupport)===null||Ee===void 0||Ee.call(globalThis,{LitElement:se});const gt=globalThis.litElementPolyfillSupport;gt==null||gt({LitElement:se});((ke=globalThis.litElementVersions)!==null&&ke!==void 0?ke:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi=n=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(n,e):((t,i)=>{const{kind:s,elements:r}=i;return{kind:s,elements:r,finisher(o){customElements.define(t,o)}}})(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bi=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}};function wi(n){return(e,t)=>t!==void 0?((i,s,r)=>{s.constructor.createProperty(r,i)})(n,e,t):bi(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function G(n){return wi({...n,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ai=({finisher:n,descriptor:e})=>(t,i)=>{var s;if(i===void 0){const r=(s=t.originalKey)!==null&&s!==void 0?s:t.key,o=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(t.key)}:{...t,key:r};return n!=null&&(o.finisher=function(a){n(a,r)}),o}{const r=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),n==null||n(r,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Y(n,e){return Ai({descriptor:t=>{const i={get(){var s,r;return(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const s=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var r,o;return this[s]===void 0&&(this[s]=(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(n))!==null&&o!==void 0?o:null),this[s]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ne;((Ne=window.HTMLSlotElement)===null||Ne===void 0?void 0:Ne.prototype.assignedElements)!=null;function p(n){let e,t,i;return typeof n=="object"?(e=n.hashFunction,t=n.expiring,i=n.tags):e=n,(s,r,o)=>{if(o.value!=null)o.value=ft(o.value,e,t,i);else if(o.get!=null)o.get=ft(o.get,e,t,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Te=new Map;function ft(n,e,t=0,i){const s=Symbol("__memoized_map__");return function(...r){let o;this.hasOwnProperty(s)||Object.defineProperty(this,s,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let a=this[s];if(Array.isArray(i))for(const l of i)Te.has(l)?Te.get(l).push(a):Te.set(l,[a]);if(e||r.length>0||t>0){let l;e===!0?l=r.map(d=>d.toString()).join("!"):e?l=e.apply(this,r):l=r[0];const u=`${l}__timestamp`;let g=!1;if(t>0)if(!a.has(u))g=!0;else{let d=a.get(u);g=Date.now()-d>t}a.has(l)&&!g?o=a.get(l):(o=n.apply(this,r),a.set(l,o),t>0&&a.set(u,Date.now()))}else{const l=this;a.has(l)?o=a.get(l):(o=n.apply(this,r),a.set(l,o))}return o}}var me;(function(n){n[n.COUNT=0]="COUNT",n[n.ALPHABETICAL=1]="ALPHABETICAL"})(me||(me={}));class Ct{constructor(e){this.buckets=e.buckets,this.doc_count_error_upper_bound=e.doc_count_error_upper_bound,this.sum_other_doc_count=e.sum_other_doc_count,this.first_bucket_key=e.first_bucket_key,this.last_bucket_key=e.last_bucket_key,this.number_buckets=e.number_buckets,this.interval=e.interval}getSortedBuckets(e){if(typeof this.buckets[0]=="number")return[...this.buckets];const t=new Intl.Collator;switch(e){case me.ALPHABETICAL:return[...this.buckets].sort((i,s)=>t.compare(i.key.toString(),s.key.toString()));case me.COUNT:default:return[...this.buckets]}}}c([p()],Ct.prototype,"getSortedBuckets",null);class He{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:Boolean(e)}}He.shared=new He;class Ue{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}Ue.shared=new Ue;class Oe{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const i=Date.parse(t);if(Number.isNaN(i))return;let s=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(s=new Date(s.getTime()+s.getTimezoneOffset()*1e3*60)),s}}Oe.shared=new Oe;class Le{parseValue(e){if(typeof e=="string")return e}}Le.shared=new Le;class Ie{parseValue(e){return String(e)}}Ie.shared=new Ie;class O{constructor(e,t){this.parser=e,this.rawValue=t}get values(){return this.parseRawValue()}get value(){return this.values[0]}parseRawValue(){if(this.rawValue===void 0)return[];const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(i=>{const s=this.parser.parseValue(i);Array.isArray(s)?t.push(...s):s!==void 0&&t.push(s)}),t}}c([p()],O.prototype,"values",null);c([p()],O.prototype,"value",null);class ie extends O{constructor(e){super(He.shared,e)}}class D extends O{constructor(e){super(Oe.shared,e)}}class Pt extends O{constructor(e){super(Le.shared,e)}}class A extends O{constructor(e){super(Ue.shared,e)}}class _ extends O{constructor(e){super(Ie.shared,e)}}class f{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.identifier}get collection(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection?new _(this.rawMetadata.fields.collection):void 0}get collection_files_count(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection_files_count?new A(this.rawMetadata.fields.collection_files_count):void 0}get collection_size(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection_size?new A(this.rawMetadata.fields.collection_size):void 0}get creator(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.creator?new _(this.rawMetadata.fields.creator):void 0}get date(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date?new D(this.rawMetadata.fields.date):void 0}get description(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.description?new _(this.rawMetadata.fields.description):void 0}get downloads(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.downloads?new A(this.rawMetadata.fields.downloads):void 0}get files_count(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.files_count?new A(this.rawMetadata.fields.files_count):void 0}get genre(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.genre?new _(this.rawMetadata.fields.genre):void 0}get indexflag(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.indexflag?new _(this.rawMetadata.fields.indexflag):void 0}get item_size(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.item_size?new A(this.rawMetadata.fields.item_size):void 0}get language(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.language?new _(this.rawMetadata.fields.language):void 0}get lending___available_to_borrow(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_borrow)!=null?new ie(this.rawMetadata.fields.lending___available_to_borrow):void 0}get lending___available_to_browse(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_browse)!=null?new ie(this.rawMetadata.fields.lending___available_to_browse):void 0}get lending___available_to_waitlist(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_waitlist)!=null?new ie(this.rawMetadata.fields.lending___available_to_waitlist):void 0}get lending___status(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.lending___status?new _(this.rawMetadata.fields.lending___status):void 0}get licenseurl(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.licenseurl?new _(this.rawMetadata.fields.licenseurl):void 0}get mediatype(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.mediatype?new Pt(this.rawMetadata.fields.mediatype):void 0}get month(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.month?new A(this.rawMetadata.fields.month):void 0}get noindex(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.noindex)!=null?new ie(this.rawMetadata.fields.noindex):void 0}get num_favorites(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.num_favorites?new A(this.rawMetadata.fields.num_favorites):void 0}get num_reviews(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.num_reviews?new A(this.rawMetadata.fields.num_reviews):void 0}get subject(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.subject?new _(this.rawMetadata.fields.subject):void 0}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new _(this.rawMetadata.fields.title):void 0}get type(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.type?new _(this.rawMetadata.fields.type):void 0}get volume(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.volume?new _(this.rawMetadata.fields.volume):void 0}get week(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.week?new A(this.rawMetadata.fields.week):void 0}get year(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.year?new A(this.rawMetadata.fields.year):void 0}}c([p()],f.prototype,"collection",null);c([p()],f.prototype,"collection_files_count",null);c([p()],f.prototype,"collection_size",null);c([p()],f.prototype,"creator",null);c([p()],f.prototype,"date",null);c([p()],f.prototype,"description",null);c([p()],f.prototype,"downloads",null);c([p()],f.prototype,"files_count",null);c([p()],f.prototype,"genre",null);c([p()],f.prototype,"indexflag",null);c([p()],f.prototype,"item_size",null);c([p()],f.prototype,"language",null);c([p()],f.prototype,"lending___available_to_borrow",null);c([p()],f.prototype,"lending___available_to_browse",null);c([p()],f.prototype,"lending___available_to_waitlist",null);c([p()],f.prototype,"lending___status",null);c([p()],f.prototype,"licenseurl",null);c([p()],f.prototype,"mediatype",null);c([p()],f.prototype,"month",null);c([p()],f.prototype,"noindex",null);c([p()],f.prototype,"num_favorites",null);c([p()],f.prototype,"num_reviews",null);c([p()],f.prototype,"subject",null);c([p()],f.prototype,"title",null);c([p()],f.prototype,"type",null);c([p()],f.prototype,"volume",null);c([p()],f.prototype,"week",null);c([p()],f.prototype,"year",null);class ${constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.identifier}get highlight(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.highlight)===null||t===void 0)&&t.text?new _(this.rawMetadata.highlight.text):void 0}get collection(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection?new _(this.rawMetadata.fields.collection):void 0}get created_on(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.created_on?new D(this.rawMetadata.fields.created_on):void 0}get creator(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.creator?new _(this.rawMetadata.fields.creator):void 0}get date(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date?new D(this.rawMetadata.fields.date):void 0}get description(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.description?new _(this.rawMetadata.fields.description):void 0}get downloads(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.downloads?new A(this.rawMetadata.fields.downloads):void 0}get filename(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.filename?new _(this.rawMetadata.fields.filename):void 0}get file_basename(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.file_basename?new _(this.rawMetadata.fields.file_basename):void 0}get file_creation_mtime(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.file_creation_mtime?new A(this.rawMetadata.fields.file_creation_mtime):void 0}get mediatype(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.mediatype?new Pt(this.rawMetadata.fields.mediatype):void 0}get page_num(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.page_num?new A(this.rawMetadata.fields.page_num):void 0}get publicdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.publicdate?new D(this.rawMetadata.fields.publicdate):void 0}get result_in_subfile(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.result_in_subfile)!=null?new ie(this.rawMetadata.fields.result_in_subfile):void 0}get reviewdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.reviewdate?new D(this.rawMetadata.fields.reviewdate):void 0}get subject(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.subject?new _(this.rawMetadata.fields.subject):void 0}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new _(this.rawMetadata.fields.title):void 0}get updated_on(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.updated_on?new D(this.rawMetadata.fields.updated_on):void 0}get year(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.year?new A(this.rawMetadata.fields.year):void 0}get __href__(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new _(this.rawMetadata.fields.__href__):void 0}}c([p()],$.prototype,"highlight",null);c([p()],$.prototype,"collection",null);c([p()],$.prototype,"created_on",null);c([p()],$.prototype,"creator",null);c([p()],$.prototype,"date",null);c([p()],$.prototype,"description",null);c([p()],$.prototype,"downloads",null);c([p()],$.prototype,"filename",null);c([p()],$.prototype,"file_basename",null);c([p()],$.prototype,"file_creation_mtime",null);c([p()],$.prototype,"mediatype",null);c([p()],$.prototype,"page_num",null);c([p()],$.prototype,"publicdate",null);c([p()],$.prototype,"result_in_subfile",null);c([p()],$.prototype,"reviewdate",null);c([p()],$.prototype,"subject",null);c([p()],$.prototype,"title",null);c([p()],$.prototype,"updated_on",null);c([p()],$.prototype,"year",null);c([p()],$.prototype,"__href__",null);class Be{constructor(e,t){var i,s,r,o,a,l,u;this.schema=t;const g=t==null?void 0:t.hit_type;this.totalResults=(s=(i=e==null?void 0:e.hits)===null||i===void 0?void 0:i.total)!==null&&s!==void 0?s:0,this.returnedCount=(o=(r=e==null?void 0:e.hits)===null||r===void 0?void 0:r.returned)!==null&&o!==void 0?o:0,this.results=(u=(l=(a=e==null?void 0:e.hits)===null||a===void 0?void 0:a.hits)===null||l===void 0?void 0:l.map(d=>Be.createResult(g,d)))!==null&&u!==void 0?u:[],e!=null&&e.aggregations&&(this.aggregations=Object.entries(e.aggregations).reduce((d,[h,v])=>(d[h]=new Ct(v),d),{}))}static createResult(e,t){switch(e){case"item":return new f(t);case"text":return new $(t);default:return t}}}class Si{constructor(e){this.clientParameters=e.client_parameters,this.finalizedParameters=e.finalized_parameters}}class xi{constructor(e){var t,i,s;this.rawResponse=e,this.request=new Si(e.request),this.responseHeader=(t=e.response)===null||t===void 0?void 0:t.header,this.response=new Be((i=e.response)===null||i===void 0?void 0:i.body,(s=e.response)===null||s===void 0?void 0:s.hit_schema)}}var U;(function(n){n[n.METADATA=0]="METADATA",n[n.FULLTEXT=1]="FULLTEXT"})(U||(U={}));class Rt{static aggregateSearchParamsAsString(e){if(e.omit)return"false";if(e.advancedParams){const t=e.advancedParams.map(s=>({terms:s}));return JSON.stringify(t)}if(e.simpleParams)return e.simpleParams.join(",")}static sortParamsAsString(e){return`${e.field}:${e.direction}`}static generateURLSearchParams(e){const t=new URLSearchParams;if(t.append("user_query",e.query),e.pageType&&t.append("page_type",String(e.pageType)),e.pageTarget&&t.append("page_target",String(e.pageTarget)),e.rows!=null&&t.append("hits_per_page",String(e.rows)),e.page!=null&&t.append("page",String(e.page)),e.fields&&t.append("fields",e.fields.join(",")),e.sort){const s=e.sort.map(r=>this.sortParamsAsString(r));t.append("sort",s.join(","))}const i=e.aggregations;if(i){const s=this.aggregateSearchParamsAsString(i);s&&t.append("aggregations",s)}return e.aggregationsSize!=null&&t.append("aggregations_size",String(e.aggregationsSize)),e.debugging&&t.append("debugging","true"),t}}var ne;(function(n){n.networkError="SearchService.NetworkError",n.itemNotFound="SearchService.ItemNotFound",n.decodingError="SearchService.DecodingError",n.searchEngineError="SearchService.SearchEngineError"})(ne||(ne={}));class Mi extends Error{constructor(e,t,i){super(t),this.name=e,this.type=e,this.details=i}}class Ht{constructor(e){var t,i;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",this.debuggingEnabled=(i=e==null?void 0:e.debuggingEnabled)!==null&&i!==void 0?i:!1,(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const r=new URL(window.location.href).searchParams.get("scope");r&&(this.requestScope=r)}}async fetchUrl(e,t){var i;const s=new URL(e);this.requestScope&&s.searchParams.set("scope",this.requestScope);let r;try{const o=(i=t==null?void 0:t.requestOptions)!==null&&i!==void 0?i:{credentials:this.includeCredentials?"include":"same-origin"};r=await fetch(s.href,o)}catch(o){const a=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(ne.networkError,a)}try{const o=await r.json();o.debugging&&this.printDebuggingInfo(o);const a=o.error;if(a){const l=o.forensics;return this.getErrorResult(ne.searchEngineError,a,l)}else return{success:o}}catch(o){const a=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(ne.decodingError,a)}}getErrorResult(e,t,i){return{error:new Mi(e,t,i)}}printDebuggingInfo(e){var t,i;const s=e.debugging,r=(t=s.messages)!==null&&t!==void 0?t:[],o=(i=s.data)!==null&&i!==void 0?i:{};console.group("Debug messages");for(const a of r)console.log(a);console.groupEnd(),console.group("Debug data");for(const[a,l]of Object.entries(o))console.log(a,l);console.groupEnd()}}class Ei extends Ht{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging==null&&(e.debugging=!0);const i=Rt.generateURLSearchParams(e).toString(),s=`https://${this.baseUrl}${this.servicePath}/?service_backend=fts&${i}`;return this.fetchUrl(s)}}class ki extends Ht{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging==null&&(e.debugging=!0);const i=Rt.generateURLSearchParams(e).toString(),s=`https://${this.baseUrl}${this.servicePath}/?service_backend=metadata&${i}`;return this.fetchUrl(s)}}class X{constructor(e={}){this.backendOptions=e}async search(e,t=U.METADATA){const s=await X.getBackendForSearchType(t,this.backendOptions).performSearch(e);return s.error?s:{success:new xi(s.success)}}static getBackendForSearchType(e,t={}){switch(e){case U.FULLTEXT:return new Ei(t);case U.METADATA:default:return new ki(t)}}}X.default=new X;c([p((n,e={})=>{const{includeCredentials:t="",scope:i="",baseUrl:s=""}=e;return`${n};${t};${i};${s}`})],X,"getBackendForSearchType",null);let S=class extends se{constructor(){super(...arguments),this.searchServiceUrlOptions=this.initSearchServiceUrlOptions(),this.loadingSearchResults=!1,this.loadingAggregations=!1,this.defaultAggregationsChecked=!0,this.searchService=new X(this.searchServiceUrlOptions)}get searchResults(){var e;return(e=this.searchResponse)===null||e===void 0?void 0:e.response.results}get searchAggregations(){var e;return(e=this.aggregationsResponse)===null||e===void 0?void 0:e.response.aggregations}initSearchServiceUrlOptions(){var e,t,i;const s=new URL(window.location.href).searchParams;return{baseUrl:(e=s.get("search_base_url"))!==null&&e!==void 0?e:void 0,servicePath:(t=s.get("search_service_path"))!==null&&t!==void 0?t:void 0,debuggingEnabled:(i=!!s.get("debugging"))!==null&&i!==void 0?i:void 0}}render(){var e;return x`
      <fieldset>
        <legend>Search</legend>
        <form>
          <label for="search-input">Search: </label>
          <input type="text" id="search-input" placeholder="Search Term" />
          <input type="submit" value="Go" @click=${this.search} />

          <input
            type="checkbox"
            id="debug-info-check"
            ?checked=${(e=this.searchServiceUrlOptions)===null||e===void 0?void 0:e.debuggingEnabled}
          />
          <label for="debug-info-check">Include debugging info</label>

          <fieldset class="search-options">
            <legend>Search type:</legend>
            <input
              type="radio"
              id="mds"
              name="search-type"
              value="mds"
              checked
            />
            <label for="mds"> &nbsp;Metadata </label>
            <input type="radio" id="fts" name="search-type" value="fts" />
            <label for="fts"> &nbsp;Full text </label>
          </fieldset>

          <fieldset class="search-options">
            <legend>Search size:</legend>
            <div class="field-row">
              <label for="num-rows">Number of result rows:</label>
              <input type="number" id="num-rows" value="10" min="0" max="99" />
            </div>
            <div class="field-row">
              <label for="num-aggs">Number of aggregation rows:</label>
              <input type="number" id="num-aggs" value="6" min="0" max="50" />
            </div>
          </fieldset>

          <fieldset class="search-options">
            <legend>Sort by title:</legend>
            <input
              type="radio"
              id="sort-none"
              name="sort"
              value="none"
              checked
            />
            <label for="sort-none"> &nbsp;None </label>
            <input type="radio" id="sort-asc" name="sort" value="asc" />
            <label for="sort-asc"> &nbsp;Ascending </label>
            <input type="radio" id="sort-desc" name="sort" value="desc" />
            <label for="sort-desc"> &nbsp;Descending </label>
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

      ${this.searchResults?this.resultsTemplate:m}
    `}get resultsTemplate(){return x`
      ${this.loadingSearchResults?x`<h3>Loading search results...</h3>`:this.searchResultsTemplate}
      ${this.loadingAggregations?x`<h3>Loading aggregations...</h3>`:this.aggregationsTemplate}
    `}get searchResultsTemplate(){var e;return x`
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
          ${(e=this.searchResults)===null||e===void 0?void 0:e.map(t=>{var i,s;return x`
              <tr>
                <td>${t.identifier}</td>
                <td>${(s=(i=t.title)===null||i===void 0?void 0:i.value)!==null&&s!==void 0?s:"(Untitled)"}</td>
                ${this.snippetTemplate(t)}
              </tr>
            `})}
        </tbody>
      </table>
    `}get aggregationsTemplate(){var e;return x`
      <div>
        <h2>Aggregations</h2>
        ${Object.entries((e=this.searchAggregations)!==null&&e!==void 0?e:{}).map(([t,i])=>x`
            <h3>${t}</h3>
            <p>
              ${i.buckets.map(s=>typeof s=="number"?s:`${s.key} (${s.doc_count})`).join(", ")}
            </p>
          `)}
      </div>
    `}get snippetsHeaderTemplate(){var e;return!((e=this.searchResults)===null||e===void 0)&&e.some(t=>t.highlight)?x`<th>Snippets</th>`:x`${m}`}snippetTemplate(e){return e.highlight?x`<td>${e.highlight.value}</td>`:x`${m}`}toggleDefaultAggregations(){var e;this.defaultAggregationsChecked=(e=this.defaultAggregationsCheckbox)===null||e===void 0?void 0:e.checked}async search(e){var t;e.preventDefault();const i=this.searchInput.value,s=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector("input[name='search-type']:checked"),r=(s==null?void 0:s.value)==="fts"?U.FULLTEXT:U.METADATA;this.fetchSearchResults(i,r),this.fetchAggregations(i,r)}async fetchSearchResults(e,t){var i,s,r,o,a;const l=((i=this.checkedSort)===null||i===void 0?void 0:i.value)==="none"?void 0:[{field:"title",direction:(s=this.checkedSort)===null||s===void 0?void 0:s.value}],u=Number((r=this.rowsInput)===null||r===void 0?void 0:r.value),g=(o=this.debugCheck)===null||o===void 0?void 0:o.checked,d={query:e,rows:u,fields:["identifier","title"],sort:l,aggregations:{omit:!0},debugging:g};this.loadingSearchResults=!0;const h=await this.searchService.search(d,t);this.loadingSearchResults=!1,h!=null&&h.success?this.searchResponse=h==null?void 0:h.success:(alert(`Oh noes: ${(a=h==null?void 0:h.error)===null||a===void 0?void 0:a.message}`),console.error("Error searching",h==null?void 0:h.error))}async fetchAggregations(e,t){var i,s,r,o;const a=(i=this.shadowRoot)===null||i===void 0?void 0:i.querySelectorAll("input[name='aggs']:checked"),l={simpleParams:a?[...a].map(v=>v.value):void 0},u=Number((s=this.numAggsInput)===null||s===void 0?void 0:s.value),g=(r=this.debugCheck)===null||r===void 0?void 0:r.checked,d={query:e,rows:0,aggregationsSize:u,debugging:g};this.defaultAggregationsChecked||(d.aggregations=l),this.loadingAggregations=!0;const h=await this.searchService.search(d,t);this.loadingAggregations=!1,h!=null&&h.success?this.aggregationsResponse=h==null?void 0:h.success:(alert(`Oh noes: ${(o=h==null?void 0:h.error)===null||o===void 0?void 0:o.message}`),console.error("Error searching",h==null?void 0:h.error))}static get styles(){return Gt`
      .search-options {
        margin-top: 0.6rem;
      }

      .field-row {
        margin: 0.3rem 0;
      }
    `}};c([Y("#search-input")],S.prototype,"searchInput",void 0);c([Y("#debug-info-check")],S.prototype,"debugCheck",void 0);c([Y("#num-rows")],S.prototype,"rowsInput",void 0);c([Y("#num-aggs")],S.prototype,"numAggsInput",void 0);c([Y("input[name='sort']:checked")],S.prototype,"checkedSort",void 0);c([Y("#aggs-default")],S.prototype,"defaultAggregationsCheckbox",void 0);c([G()],S.prototype,"searchServiceUrlOptions",void 0);c([G()],S.prototype,"searchResponse",void 0);c([G()],S.prototype,"aggregationsResponse",void 0);c([G()],S.prototype,"loadingSearchResults",void 0);c([G()],S.prototype,"loadingAggregations",void 0);c([G()],S.prototype,"defaultAggregationsChecked",void 0);S=c([yi("app-root")],S);Zt(Jt`
        <app-root></app-root>
      `,document.querySelector("#demo"));
