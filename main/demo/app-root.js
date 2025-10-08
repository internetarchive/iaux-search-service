const lt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};lt();/*! *****************************************************************************
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
***************************************************************************** */function l(n,e,t,i){var r=arguments.length,s=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var d=n.length-1;d>=0;d--)(a=n[d])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=window,xe=se.ShadowRoot&&(se.ShadyCSS===void 0||se.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Re=Symbol(),De=new WeakMap;class Ye{constructor(e,t,i){if(this._$cssResult$=!0,i!==Re)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(xe&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=De.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&De.set(t,e))}return e}toString(){return this.cssText}}const ot=n=>new Ye(typeof n=="string"?n:n+"",void 0,Re),et=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,r,s)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[s+1],n[0]);return new Ye(t,n,Re)},dt=(n,e)=>{xe?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),r=se.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,n.appendChild(i)})},Ve=xe?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return ot(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _e;const ae=window,Fe=ae.trustedTypes,ut=Fe?Fe.emptyScript:"",Le=ae.reactiveElementPolyfillSupport,Se={toAttribute(n,e){switch(e){case Boolean:n=n?ut:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},tt=(n,e)=>e!==n&&(e==e||n==n),ve={attribute:!0,type:String,converter:Se,reflect:!1,hasChanged:tt};class L extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;(t=this.h)!==null&&t!==void 0||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Ep(i,t);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,t=ve){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ve}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(Ve(r))}else e!==void 0&&t.push(Ve(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return dt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=ve){var r;const s=this.constructor._$Ep(e,i);if(s!==void 0&&i.reflect===!0){const a=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:Se).toAttribute(t,i.type);this._$El=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(e,t){var i;const r=this.constructor,s=r._$Ev.get(e);if(s!==void 0&&this._$El!==s){const a=r.getPropertyOptions(s),d=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?a.converter:Se;this._$El=s,this[s]=d.fromAttribute(t,a.type),this._$El=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||tt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(i)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}L.finalized=!0,L.elementProperties=new Map,L.elementStyles=[],L.shadowRootOptions={mode:"open"},Le==null||Le({ReactiveElement:L}),((_e=ae.reactiveElementVersions)!==null&&_e!==void 0?_e:ae.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var me;const le=window,q=le.trustedTypes,He=q?q.createPolicy("lit-html",{createHTML:n=>n}):void 0,N=`lit$${(Math.random()+"").slice(9)}$`,it="?"+N,ct=`<${it}>`,z=document,Y=(n="")=>z.createComment(n),ee=n=>n===null||typeof n!="object"&&typeof n!="function",rt=Array.isArray,ht=n=>rt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qe=/-->/g,ze=/>/g,D=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Be=/'/g,je=/"/g,nt=/^(?:script|style|textarea|title)$/i,pt=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),y=pt(1),B=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),Je=new WeakMap,gt=(n,e,t)=>{var i,r;const s=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let a=s._$litPart$;if(a===void 0){const d=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=a=new ne(e.insertBefore(Y(),d),d,void 0,t!=null?t:{})}return a._$AI(n),a},H=z.createTreeWalker(z,129,null,!1),ft=(n,e)=>{const t=n.length-1,i=[];let r,s=e===2?"<svg>":"",a=K;for(let u=0;u<t;u++){const h=n[u];let v,g,_=-1,f=0;for(;f<h.length&&(a.lastIndex=f,g=a.exec(h),g!==null);)f=a.lastIndex,a===K?g[1]==="!--"?a=qe:g[1]!==void 0?a=ze:g[2]!==void 0?(nt.test(g[2])&&(r=RegExp("</"+g[2],"g")),a=D):g[3]!==void 0&&(a=D):a===D?g[0]===">"?(a=r!=null?r:K,_=-1):g[1]===void 0?_=-2:(_=a.lastIndex-g[2].length,v=g[1],a=g[3]===void 0?D:g[3]==='"'?je:Be):a===je||a===Be?a=D:a===qe||a===ze?a=K:(a=D,r=void 0);const m=a===D&&n[u+1].startsWith("/>")?" ":"";s+=a===K?h+ct:_>=0?(i.push(v),h.slice(0,_)+"$lit$"+h.slice(_)+N+m):h+N+(_===-2?(i.push(void 0),u):m)}const d=s+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[He!==void 0?He.createHTML(d):d,i]};class te{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,a=0;const d=e.length-1,u=this.parts,[h,v]=ft(e,t);if(this.el=te.createElement(h,i),H.currentNode=this.el.content,t===2){const g=this.el.content,_=g.firstChild;_.remove(),g.append(..._.childNodes)}for(;(r=H.nextNode())!==null&&u.length<d;){if(r.nodeType===1){if(r.hasAttributes()){const g=[];for(const _ of r.getAttributeNames())if(_.endsWith("$lit$")||_.startsWith(N)){const f=v[a++];if(g.push(_),f!==void 0){const m=r.getAttribute(f.toLowerCase()+"$lit$").split(N),A=/([.?@])?(.*)/.exec(f);u.push({type:1,index:s,name:A[2],strings:m,ctor:A[1]==="."?vt:A[1]==="?"?wt:A[1]==="@"?yt:ce})}else u.push({type:6,index:s})}for(const _ of g)r.removeAttribute(_)}if(nt.test(r.tagName)){const g=r.textContent.split(N),_=g.length-1;if(_>0){r.textContent=q?q.emptyScript:"";for(let f=0;f<_;f++)r.append(g[f],Y()),H.nextNode(),u.push({type:2,index:++s});r.append(g[_],Y())}}}else if(r.nodeType===8)if(r.data===it)u.push({type:2,index:s});else{let g=-1;for(;(g=r.data.indexOf(N,g+1))!==-1;)u.push({type:7,index:s}),g+=N.length-1}s++}}static createElement(e,t){const i=z.createElement("template");return i.innerHTML=e,i}}function j(n,e,t=n,i){var r,s,a,d;if(e===B)return e;let u=i!==void 0?(r=t._$Cl)===null||r===void 0?void 0:r[i]:t._$Cu;const h=ee(e)?void 0:e._$litDirective$;return(u==null?void 0:u.constructor)!==h&&((s=u==null?void 0:u._$AO)===null||s===void 0||s.call(u,!1),h===void 0?u=void 0:(u=new h(n),u._$AT(n,t,i)),i!==void 0?((a=(d=t)._$Cl)!==null&&a!==void 0?a:d._$Cl=[])[i]=u:t._$Cu=u),u!==void 0&&(e=j(n,u._$AS(n,e.values),u,i)),e}class _t{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:r}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:z).importNode(i,!0);H.currentNode=s;let a=H.nextNode(),d=0,u=0,h=r[0];for(;h!==void 0;){if(d===h.index){let v;h.type===2?v=new ne(a,a.nextSibling,this,e):h.type===1?v=new h.ctor(a,h.name,h.strings,this,e):h.type===6&&(v=new bt(a,this,e)),this.v.push(v),h=r[++u]}d!==(h==null?void 0:h.index)&&(a=H.nextNode(),d++)}return s}m(e){let t=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ne{constructor(e,t,i,r){var s;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$C_=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$C_}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=j(this,e,t),ee(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==B&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):ht(e)?this.O(e):this.$(e)}S(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}$(e){this._$AH!==w&&ee(this._$AH)?this._$AA.nextSibling.data=e:this.k(z.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=te.createElement(r.h,this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.m(i);else{const a=new _t(s,this),d=a.p(this.options);a.m(i),this.k(d),this._$AH=a}}_$AC(e){let t=Je.get(e.strings);return t===void 0&&Je.set(e.strings,t=new te(e)),t}O(e){rt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new ne(this.S(Y()),this.S(Y()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$C_=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class ce{constructor(e,t,i,r,s){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const s=this.strings;let a=!1;if(s===void 0)e=j(this,e,t,0),a=!ee(e)||e!==this._$AH&&e!==B,a&&(this._$AH=e);else{const d=e;let u,h;for(e=s[0],u=0;u<s.length-1;u++)h=j(this,d[i+u],t,u),h===B&&(h=this._$AH[u]),a||(a=!ee(h)||h!==this._$AH[u]),h===w?e=w:e!==w&&(e+=(h!=null?h:"")+s[u+1]),this._$AH[u]=h}a&&!r&&this.P(e)}P(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class vt extends ce{constructor(){super(...arguments),this.type=3}P(e){this.element[this.name]=e===w?void 0:e}}const mt=q?q.emptyScript:"";class wt extends ce{constructor(){super(...arguments),this.type=4}P(e){e&&e!==w?this.element.setAttribute(this.name,mt):this.element.removeAttribute(this.name)}}class yt extends ce{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){var i;if((e=(i=j(this,e,t,0))!==null&&i!==void 0?i:w)===B)return;const r=this._$AH,s=e===w&&r!==w||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==w&&(r===w||s);s&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class bt{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){j(this,e)}}const We=le.litHtmlPolyfillSupport;We==null||We(te,ne),((me=le.litHtmlVersions)!==null&&me!==void 0?me:le.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var we,ye;class V extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=gt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return B}}V.finalized=!0,V._$litElement$=!0,(we=globalThis.litElementHydrateSupport)===null||we===void 0||we.call(globalThis,{LitElement:V});const Ge=globalThis.litElementPolyfillSupport;Ge==null||Ge({LitElement:V});((ye=globalThis.litElementVersions)!==null&&ye!==void 0?ye:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=n=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(n,e):((t,i)=>{const{kind:r,elements:s}=i;return{kind:r,elements:s,finisher(a){customElements.define(t,a)}}})(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}};function he(n){return(e,t)=>t!==void 0?((i,r,s)=>{r.constructor.createProperty(s,i)})(n,e,t):$t(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function S(n){return he({...n,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=({finisher:n,descriptor:e})=>(t,i)=>{var r;if(i===void 0){const s=(r=t.originalKey)!==null&&r!==void 0?r:t.key,a=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(t.key)}:{...t,key:s};return n!=null&&(a.finisher=function(d){n(d,s)}),a}{const s=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),n==null||n(s,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function T(n,e){return Mt({descriptor:t=>{const i={get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(n))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const r=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var s,a;return this[r]===void 0&&(this[r]=(a=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n))!==null&&a!==void 0?a:null),this[r]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var be;((be=window.HTMLSlotElement)===null||be===void 0?void 0:be.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const St=(n,e,t)=>{for(const i of e)if(i[0]===n)return(0,i[1])();return t==null?void 0:t()};function o(n){let e,t,i;return typeof n=="object"?(e=n.hashFunction,t=n.expiring,i=n.tags):e=n,(r,s,a)=>{if(a.value!=null)a.value=Qe(a.value,e,t,i);else if(a.get!=null)a.get=Qe(a.get,e,t,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const $e=new Map;function Qe(n,e,t=0,i){const r=Symbol("__memoized_map__");return function(...s){let a;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let d=this[r];if(Array.isArray(i))for(const u of i)$e.has(u)?$e.get(u).push(d):$e.set(u,[d]);if(e||s.length>0||t>0){let u;e===!0?u=s.map(g=>g.toString()).join("!"):e?u=e.apply(this,s):u=s[0];const h=`${u}__timestamp`;let v=!1;if(t>0)if(!d.has(h))v=!0;else{let g=d.get(h);v=Date.now()-g>t}d.has(u)&&!v?a=d.get(u):(a=n.apply(this,s),d.set(u,a),t>0&&d.set(h,Date.now()))}else{const u=this;d.has(u)?a=d.get(u):(a=n.apply(this,s),d.set(u,a))}return a}}var Z;(function(n){n[n.COUNT=0]="COUNT",n[n.ALPHABETICAL=1]="ALPHABETICAL",n[n.NUMERIC=2]="NUMERIC"})(Z||(Z={}));class st{constructor(e){this.buckets=e.buckets,this.first_bucket_key=e.first_bucket_key,this.last_bucket_key=e.last_bucket_key,this.number_buckets=e.number_buckets,this.interval=e.interval,this.first_bucket_year=e.first_bucket_year,this.first_bucket_month=e.first_bucket_month,this.last_bucket_year=e.last_bucket_year,this.last_bucket_month=e.last_bucket_month,this.interval_in_months=e.interval_in_months}getSortedBuckets(e){const t=[...this.buckets];if(this.isRawNumberBuckets(t))return t;const i=new Intl.Collator;switch(e){case Z.ALPHABETICAL:return t.sort((r,s)=>i.compare(r.key.toString(),s.key.toString()));case Z.NUMERIC:return t.sort((r,s)=>Number(s.key)-Number(r.key));case Z.COUNT:default:return t}}isRawNumberBuckets(e){return typeof e[0]=="number"}}l([o()],st.prototype,"getSortedBuckets",null);class Ae{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:Boolean(e)}}Ae.shared=new Ae;class U{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}U.shared=new U;class oe{parseValue(e){return U.shared.parseValue(e)}}oe.shared=new oe;class ie{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const i=Date.parse(t);if(Number.isNaN(i))return;let r=new Date(t);return(t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}ie.shared=new ie;class de{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let i;return t.length===1?i=this.parseNumberFormat(t[0]):i=this.parseColonSeparatedFormat(t),i}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const i=e.map((r,s)=>{const a=parseFloat(r);if(Number.isNaN(a))return t=!0,0;const d=e.length-1-s,u=60**d;return a*Math.floor(u)}).reduce((r,s)=>r+s,0);return t?void 0:i}}de.shared=new de;class Ee{parseValue(e){if(typeof e=="string")return e}}Ee.shared=new Ee;class At{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let i=[];for(const r of this.separators)if(i=t.split(r),i.length>1)break;return this.parseListValues(i)}parseListValues(e){const i=e.map(s=>s.trim()).map(s=>this.parser.parseValue(s)),r=[];return i.forEach(s=>{s!==void 0&&r.push(s)}),r}}class ke{parseValue(e){if(typeof e=="string")return e}}ke.shared=new ke;class ue{parseValue(e){return String(e)}}ue.shared=new ue;class G{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){if(this.rawValue.mtime==null)return;const e=U.shared.parseValue(this.rawValue.mtime);if(e)return new Date(e*1e3)}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?oe.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?de.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?U.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?U.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?U.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}l([o()],G.prototype,"mtime",null);l([o()],G.prototype,"size",null);l([o()],G.prototype,"length",null);l([o()],G.prototype,"height",null);l([o()],G.prototype,"width",null);l([o()],G.prototype,"track",null);class C{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(i=>{const r=this.parser.parseValue(i);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}l([o()],C.prototype,"values",null);l([o()],C.prototype,"value",null);class F extends C{constructor(e){super(Ae.shared,e)}}class E extends C{constructor(e){super(ie.shared,e)}}class Me extends C{constructor(e){super(de.shared,e)}}class M extends C{constructor(e){super(U.shared,e)}}class p extends C{constructor(e){super(ue.shared,e)}}class Et extends C{constructor(e){super(ke.shared,e)}}class Ke extends C{constructor(e){super(oe.shared,e)}}class at extends C{constructor(e){super(Ee.shared,e)}}class kt extends C{constructor(e,t){super(t,e)}}class xt extends kt{constructor(e){const t=new At(ue.shared);super(e,t)}}class c{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new E(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new p(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new M(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new M(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new p(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new p(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new Ke(this.rawMetadata.collection_size):void 0}get contact(){return this.rawMetadata.contact!=null?new p(this.rawMetadata.contact):void 0}get contributor(){return this.rawMetadata.contributor!=null?new p(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new p(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new p(this.rawMetadata.creator):void 0}get creator_alt_script(){return this.rawMetadata["creator-alt-script"]!=null?new p(this.rawMetadata["creator-alt-script"]):void 0}get credits(){return this.rawMetadata.credits!=null?new p(this.rawMetadata.credits):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new p(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new E(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new p(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new M(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new Me(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new p(this.rawMetadata["external-identifier"]):void 0}get external_link(){return this.rawMetadata["external-link"]!=null?new p(this.rawMetadata["external-link"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new M(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new E(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new p(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new p(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new M(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new Ke(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new p(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new Me(this.rawMetadata.length):void 0}get licenseurl(){return this.rawMetadata.licenseurl!=null?new p(this.rawMetadata.licenseurl):void 0}get lineage(){return this.rawMetadata.lineage!=null?new p(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new M(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new at(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new F(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new p(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new M(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new M(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new p(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new p(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new Et(this.rawMetadata.page_progression):void 0}get paginated(){return this.rawMetadata.paginated!=null?new F(this.rawMetadata.paginated):void 0}get partner(){return this.rawMetadata.partner!=null?new p(this.rawMetadata.partner):void 0}get post_text(){return this.rawMetadata.post_text!=null?new p(this.rawMetadata.post_text):void 0}get ppi(){return this.rawMetadata.ppi!=null?new M(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new E(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new p(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new E(this.rawMetadata.reviewdate):void 0}get rights(){return this.rawMetadata.rights!=null?new p(this.rawMetadata.rights):void 0}get rights_holder(){var e;const t=(e=this.rawMetadata["rights-holder"])!==null&&e!==void 0?e:this.rawMetadata.rights_holder;return t!=null?new p(t):void 0}get runtime(){return this.rawMetadata.runtime!=null?new Me(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new p(this.rawMetadata.scanner):void 0}get segments(){return this.rawMetadata.segments!=null?new p(this.rawMetadata.segments):void 0}get shotlist(){return this.rawMetadata.shotlist!=null?new p(this.rawMetadata.shotlist):void 0}get source(){return this.rawMetadata.source!=null?new p(this.rawMetadata.source):void 0}get sponsor(){return this.rawMetadata.sponsor!=null?new p(this.rawMetadata.sponsor):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new E(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new E(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new E(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new xt(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new p(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new p(this.rawMetadata.title):void 0}get title_alt_script(){return this.rawMetadata["title-alt-script"]!=null?new p(this.rawMetadata["title-alt-script"]):void 0}get transferer(){return this.rawMetadata.transferer!=null?new p(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new M(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new p(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new p(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new M(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new p(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new p(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new M(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new M(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}l([o()],c.prototype,"addeddate",null);l([o()],c.prototype,"audio_codec",null);l([o()],c.prototype,"audio_sample_rate",null);l([o()],c.prototype,"avg_rating",null);l([o()],c.prototype,"collection",null);l([o()],c.prototype,"collections_raw",null);l([o()],c.prototype,"collection_size",null);l([o()],c.prototype,"contact",null);l([o()],c.prototype,"contributor",null);l([o()],c.prototype,"coverage",null);l([o()],c.prototype,"creator",null);l([o()],c.prototype,"creator_alt_script",null);l([o()],c.prototype,"credits",null);l([o()],c.prototype,"collection_layout",null);l([o()],c.prototype,"date",null);l([o()],c.prototype,"description",null);l([o()],c.prototype,"downloads",null);l([o()],c.prototype,"duration",null);l([o()],c.prototype,"external_identifier",null);l([o()],c.prototype,"external_link",null);l([o()],c.prototype,"files_count",null);l([o()],c.prototype,"indexdate",null);l([o()],c.prototype,"isbn",null);l([o()],c.prototype,"issue",null);l([o()],c.prototype,"item_count",null);l([o()],c.prototype,"item_size",null);l([o()],c.prototype,"language",null);l([o()],c.prototype,"length",null);l([o()],c.prototype,"licenseurl",null);l([o()],c.prototype,"lineage",null);l([o()],c.prototype,"month",null);l([o()],c.prototype,"mediatype",null);l([o()],c.prototype,"noindex",null);l([o()],c.prototype,"notes",null);l([o()],c.prototype,"num_favorites",null);l([o()],c.prototype,"num_reviews",null);l([o()],c.prototype,"openlibrary_edition",null);l([o()],c.prototype,"openlibrary_work",null);l([o()],c.prototype,"page_progression",null);l([o()],c.prototype,"paginated",null);l([o()],c.prototype,"partner",null);l([o()],c.prototype,"post_text",null);l([o()],c.prototype,"ppi",null);l([o()],c.prototype,"publicdate",null);l([o()],c.prototype,"publisher",null);l([o()],c.prototype,"reviewdate",null);l([o()],c.prototype,"rights",null);l([o()],c.prototype,"rights_holder",null);l([o()],c.prototype,"runtime",null);l([o()],c.prototype,"scanner",null);l([o()],c.prototype,"segments",null);l([o()],c.prototype,"shotlist",null);l([o()],c.prototype,"source",null);l([o()],c.prototype,"sponsor",null);l([o()],c.prototype,"start_localtime",null);l([o()],c.prototype,"start_time",null);l([o()],c.prototype,"stop_time",null);l([o()],c.prototype,"subject",null);l([o()],c.prototype,"taper",null);l([o()],c.prototype,"title",null);l([o()],c.prototype,"title_alt_script",null);l([o()],c.prototype,"transferer",null);l([o()],c.prototype,"track",null);l([o()],c.prototype,"type",null);l([o()],c.prototype,"uploader",null);l([o()],c.prototype,"utc_offset",null);l([o()],c.prototype,"venue",null);l([o()],c.prototype,"volume",null);l([o()],c.prototype,"week",null);l([o()],c.prototype,"year",null);class pe{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewer_itemname(){return this.rawValue.reviewer_itemname}get reviewdate(){return this.rawValue.reviewdate!=null?ie.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?ie.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?U.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}l([o()],pe.prototype,"reviewdate",null);l([o()],pe.prototype,"createdate",null);l([o()],pe.prototype,"stars",null);class Pe extends pe{get reviewer_account_status(){var e;return(e=this.account_status)===null||e===void 0?void 0:e.status}get reviewer_account_status_reason(){var e;return(e=this.account_status)===null||e===void 0?void 0:e.reason}get __href__(){return this.rawValue.__href__}get account_status(){const e=this.rawValue.reviewer_account_status;if(!e)return;let t="unknown",i;e.startsWith("ok")&&(t="ok"),e.startsWith("locked")&&(t="locked");const r=e.split("__");return r.length>1&&(i=r.slice(1).join("__")),{status:t,reason:i}}}l([o()],Pe.prototype,"account_status",null);const Rt=["loans","waitlist","loan_history"];function Ct(n){const e=n.slice(0,4),t=n.slice(4,6),i=n.slice(6,8),r=n.slice(8,10),s=n.slice(10,12),a=n.slice(12,14);return`${e}-${t}-${i}T${r}:${s}:${a}Z`}function Pt(n){var e;const t=[];for(const i of n){if(!(!((e=i.captures)===null||e===void 0)&&e.length))continue;const r=encodeURIComponent(i.url),s=`https://web.archive.org/web/${i.captures[0]}/${r}`;t.push({hit_type:"web_archive",fields:{url:i.url,capture_dates:i.captures.map(a=>Ct(a)),__href__:s}})}return t}class $ extends c{get created_on(){return this.rawMetadata.created_on!=null?new E(this.rawMetadata.created_on):void 0}get file_creation_mtime(){return this.rawMetadata.file_creation_mtime!=null?new M(this.rawMetadata.file_creation_mtime):void 0}get filename(){return this.rawMetadata.filename!=null?new p(this.rawMetadata.filename):void 0}get file_basename(){return this.rawMetadata.file_basename!=null?new p(this.rawMetadata.file_basename):void 0}get result_in_subfile(){return this.rawMetadata.result_in_subfile!=null?new F(this.rawMetadata.result_in_subfile):void 0}get query(){return this.rawMetadata.query!=null?new p(this.rawMetadata.query):void 0}get date_favorited(){return this.rawMetadata.date_favorited!=null?new E(this.rawMetadata.date_favorited):void 0}get updated_on(){return this.rawMetadata.updated_on!=null?new E(this.rawMetadata.updated_on):void 0}get ad_id(){return this.rawMetadata.ad_id!=null?new p(this.rawMetadata.ad_id):void 0}get factcheck(){return this.rawMetadata.factcheck!=null?new p(this.rawMetadata.factcheck):void 0}get is_clip(){return this.rawMetadata.clip!=null?new F(this.rawMetadata.clip):void 0}get num_clips(){return this.rawMetadata.nclips!=null?new M(this.rawMetadata.nclips):void 0}get __href__(){return this.rawMetadata.__href__!=null?new p(this.rawMetadata.__href__):void 0}get __img__(){return this.rawMetadata.__img__!=null?new p(this.rawMetadata.__img__):void 0}}l([o()],$.prototype,"created_on",null);l([o()],$.prototype,"file_creation_mtime",null);l([o()],$.prototype,"filename",null);l([o()],$.prototype,"file_basename",null);l([o()],$.prototype,"result_in_subfile",null);l([o()],$.prototype,"query",null);l([o()],$.prototype,"date_favorited",null);l([o()],$.prototype,"updated_on",null);l([o()],$.prototype,"ad_id",null);l([o()],$.prototype,"factcheck",null);l([o()],$.prototype,"is_clip",null);l([o()],$.prototype,"num_clips",null);l([o()],$.prototype,"__href__",null);l([o()],$.prototype,"__img__",null);class R{constructor(e){var t;this.rawMetadata=e,this.fields=new $((t=e.fields)!==null&&t!==void 0?t:{})}get identifier(){return this.fields.identifier}get addeddate(){return this.fields.addeddate}get avg_rating(){return this.fields.avg_rating}get collection(){return this.fields.collection}get collection_files_count(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.collection_files_count)!=null?new M(this.rawMetadata.fields.collection_files_count):void 0}get collection_size(){return this.fields.collection_size}get creator(){return this.fields.creator}get date(){return this.fields.date}get description(){return this.fields.description}get downloads(){return this.fields.downloads}get files_count(){return this.fields.files_count}get genre(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.genre)!=null?new p(this.rawMetadata.fields.genre):void 0}get indexflag(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.indexflag)!=null?new p(this.rawMetadata.fields.indexflag):void 0}get issue(){return this.fields.issue}get item_count(){return this.fields.item_count}get item_size(){return this.fields.item_size}get language(){return this.fields.language}get lending___available_to_borrow(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.lending___available_to_borrow)!=null?new F(this.rawMetadata.fields.lending___available_to_borrow):void 0}get lending___available_to_browse(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.lending___available_to_browse)!=null?new F(this.rawMetadata.fields.lending___available_to_browse):void 0}get lending___available_to_waitlist(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.lending___available_to_waitlist)!=null?new F(this.rawMetadata.fields.lending___available_to_waitlist):void 0}get lending___status(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.lending___status)!=null?new p(this.rawMetadata.fields.lending___status):void 0}get licenseurl(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.licenseurl)!=null?new p(this.rawMetadata.fields.licenseurl):void 0}get mediatype(){return this.fields.mediatype}get month(){return this.fields.month}get noindex(){return this.fields.noindex}get num_favorites(){return this.fields.num_favorites}get num_reviews(){return this.fields.num_reviews}get publicdate(){return this.fields.publicdate}get reviewdate(){return this.fields.reviewdate}get review(){const e=this.rawMetadata.review;return e?new Pe(e):void 0}get source(){return this.fields.source}get subject(){return this.fields.subject}get title(){return this.fields.title}get type(){return this.fields.type}get volume(){return this.fields.volume}get week(){return this.fields.week}get year(){return this.fields.year}}l([o()],R.prototype,"collection_files_count",null);l([o()],R.prototype,"genre",null);l([o()],R.prototype,"indexflag",null);l([o()],R.prototype,"lending___available_to_borrow",null);l([o()],R.prototype,"lending___available_to_browse",null);l([o()],R.prototype,"lending___available_to_waitlist",null);l([o()],R.prototype,"lending___status",null);l([o()],R.prototype,"licenseurl",null);l([o()],R.prototype,"review",null);class Te{constructor(e){var t;this.rawMetadata=e,this.fields=new $((t=e.fields)!==null&&t!==void 0?t:{})}get identifier(){return this.fields.identifier}get highlight(){var e;return!((e=this.rawMetadata.highlight)===null||e===void 0)&&e.text?new p(this.rawMetadata.highlight.text):void 0}get addeddate(){return this.fields.addeddate}get avg_rating(){return this.fields.avg_rating}get collection(){return this.fields.collection}get created_on(){return this.fields.created_on}get creator(){return this.fields.creator}get date(){return this.fields.date}get description(){return this.fields.description}get downloads(){return this.fields.downloads}get filename(){return this.fields.filename}get file_basename(){return this.fields.file_basename}get file_creation_mtime(){return this.fields.file_creation_mtime}get issue(){return this.fields.issue}get mediatype(){return this.fields.mediatype}get page_num(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.page_num)!=null?new M(this.rawMetadata.fields.page_num):void 0}get publicdate(){return this.fields.publicdate}get result_in_subfile(){return this.fields.result_in_subfile}get reviewdate(){return this.fields.reviewdate}get source(){return this.fields.source}get subject(){return this.fields.subject}get title(){return this.fields.title}get updated_on(){return this.fields.updated_on}get year(){return this.fields.year}get __href__(){return this.fields.__href__}}l([o()],Te.prototype,"highlight",null);l([o()],Te.prototype,"page_num",null);class Tt{constructor(e){var t;this.rawMetadata=e,this.fields=new $((t=e.fields)!==null&&t!==void 0?t:{})}get identifier(){var e;return(e=this.fields.query)===null||e===void 0?void 0:e.value}get title(){return this.fields.title}get query(){return this.fields.query}get date_favorited(){return this.fields.date_favorited}get __href__(){return this.fields.__href__}}class Ue{constructor(e){var t;this.rawMetadata=e,this.fields=new $((t=e.fields)!==null&&t!==void 0?t:{})}get identifier(){var e;return(e=this.rawMetadata.fields)===null||e===void 0?void 0:e.url}get mediatype(){return new at("web")}get title(){var e,t;return!((e=this.rawMetadata.fields)===null||e===void 0)&&e.url?new p((t=this.rawMetadata.fields)===null||t===void 0?void 0:t.url):void 0}get capture_dates(){var e,t;return!((e=this.rawMetadata.fields)===null||e===void 0)&&e.capture_dates?new E((t=this.rawMetadata.fields)===null||t===void 0?void 0:t.capture_dates):void 0}get __href__(){return this.fields.__href__}}l([o()],Ue.prototype,"title",null);l([o()],Ue.prototype,"capture_dates",null);class Ne{constructor(e){var t;this.rawMetadata=e,this.fields=new $((t=e.fields)!==null&&t!==void 0?t:{})}get identifier(){return this.fields.identifier}get highlight(){var e;return!((e=this.rawMetadata.highlight)===null||e===void 0)&&e.text?new p(this.rawMetadata.highlight.text):void 0}get addeddate(){return this.fields.addeddate}get ad_id(){return this.fields.ad_id}get avg_rating(){return this.fields.avg_rating}get collection(){return this.fields.collection}get created_on(){return this.fields.created_on}get creator(){return this.fields.creator}get date(){return this.fields.date}get description(){return this.fields.description}get downloads(){return this.fields.downloads}get factcheck(){return this.fields.factcheck}get filename(){return this.fields.filename}get file_basename(){return this.fields.file_basename}get file_creation_mtime(){return this.fields.file_creation_mtime}get files_count(){return this.fields.files_count}get is_clip(){return this.fields.is_clip}get issue(){return this.fields.issue}get item_count(){return this.fields.item_count}get item_size(){return this.fields.item_size}get language(){return this.fields.language}get mediatype(){return this.fields.mediatype}get num_clips(){return this.fields.num_clips}get num_favorites(){return this.fields.num_favorites}get publicdate(){return this.fields.publicdate}get result_in_subfile(){return this.fields.result_in_subfile}get reviewdate(){return this.fields.reviewdate}get source(){return this.fields.source}get subject(){return this.fields.subject}get title(){return this.fields.title}get updated_on(){return this.fields.updated_on}get week(){return this.fields.week}get year(){return this.fields.year}get start(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.start)!=null?new p(this.rawMetadata.fields.start):void 0}get __href__(){return this.fields.__href__}get __img__(){return this.fields.__img__}}l([o()],Ne.prototype,"highlight",null);l([o()],Ne.prototype,"start",null);class Oe{constructor(e){this.rawResponse=e}get item_size(){return this.rawResponse.item_size}get files_count(){return this.rawResponse.files_count}get month(){return this.rawResponse.month}get week(){return this.rawResponse.week}get downloads(){return this.rawResponse.downloads}get num_favorites(){return this.rawResponse.num_favorites}get title_message(){return this.rawResponse.title_message}get primary_collection(){return this.rawResponse.primary_collection}get thumbnail_url(){return this.rawResponse.thumbnail_url}get num_reviews(){return this.rawResponse.num_reviews}get uploader_details(){return this.rawResponse.uploader_details}get public_metadata(){if(!!this.rawResponse.public_metadata)return new c(this.rawResponse.public_metadata)}get part_of(){return this.rawResponse.part_of}get speech_vs_music_asr_metadata(){return this.rawResponse.speech_vs_music_asr_metadata}get reviews_metadata(){var e;return((e=this.rawResponse.reviews_metadata)!==null&&e!==void 0?e:[]).map(i=>new Pe(i))}}l([o()],Oe.prototype,"public_metadata",null);l([o()],Oe.prototype,"reviews_metadata",null);class Ie{constructor(e,t){var i,r,s,a,d,u,h,v,g,_,f,m,A,I,ge;this.extraInfo=null,this.schema=t,this.schemaHitType=t==null?void 0:t.hit_type;let k;e!=null&&e.page_elements&&(this.pageElements=e.page_elements,k=Object.values(this.pageElements)[0]);let P=(i=e==null?void 0:e.hits)===null||i===void 0?void 0:i.hits;this.totalResults=(s=(r=e==null?void 0:e.hits)===null||r===void 0?void 0:r.total)!==null&&s!==void 0?s:0,this.returnedCount=(d=(a=e==null?void 0:e.hits)===null||a===void 0?void 0:a.returned)!==null&&d!==void 0?d:0,!(P!=null&&P.length)&&((u=this.pageElements)===null||u===void 0?void 0:u.service___fts)?(this.totalResults=0,this.returnedCount=0,this.handleFederatedPageElements()):!(P!=null&&P.length)&&((h=k==null?void 0:k.hits)===null||h===void 0?void 0:h.hits)?(P=k.hits.hits,this.totalResults=(v=k.hits.total)!==null&&v!==void 0?v:0,this.returnedCount=(g=k.hits.returned)!==null&&g!==void 0?g:0):!((_=this.pageElements)===null||_===void 0)&&_.lending?P=this.handleLendingPageElement():!((f=this.pageElements)===null||f===void 0)&&f.web_archives&&(P=this.handleWebArchivesPageElement()),this.results=this.formatHits(P);let fe=e==null?void 0:e.aggregations;!(this.aggregations&&Object.keys(this.aggregations).length>0)&&(k==null?void 0:k.aggregations)&&(fe=k.aggregations),fe&&this.buildAggregations(fe),e!=null&&e.collection_titles&&(this.collectionTitles=(m=e.collection_titles)!==null&&m!==void 0?m:{}),e!=null&&e.tv_channel_aliases&&(this.tvChannelAliases=(A=e.tv_channel_aliases)!==null&&A!==void 0?A:{}),e!=null&&e.collection_extra_info&&(this.collectionExtraInfo=(I=e.collection_extra_info)!==null&&I!==void 0?I:null),e!=null&&e.account_extra_info&&(this.accountExtraInfo=(ge=e.account_extra_info)!==null&&ge!==void 0?ge:null),e!=null&&e.extra_info&&(this.extraInfo=new Oe(e.extra_info))}formatHits(e){var t;return(t=e==null?void 0:e.map(i=>{var r;return Ie.createResult((r=i.hit_type)!==null&&r!==void 0?r:this.schemaHitType,i)}))!==null&&t!==void 0?t:[]}buildAggregations(e){this.aggregations=Object.entries(e).reduce((t,[i,r])=>(t[i]=new st(r),t),{})}handleLendingPageElement(){var e,t;const i=(e=this.pageElements)===null||e===void 0?void 0:e.lending,r=(t=i.loans)!==null&&t!==void 0?t:[];this.totalResults=r.length,this.returnedCount=this.totalResults;for(const s of Rt)i[s]=this.formatHits(i[s]);return r}handleWebArchivesPageElement(){var e;const t=Pt((e=this.pageElements)===null||e===void 0?void 0:e.web_archives);return this.totalResults=t.length,this.returnedCount=this.totalResults,t}handleFederatedPageElements(){var e,t,i,r;const s=["service___fts","service___tvs","service___rcs","service___whisper","metadata___mediatype___texts","metadata___mediatype___movies","metadata___mediatype___audio","metadata___mediatype___software","metadata___mediatype___image","metadata___mediatype___etree"];for(const a of s){const d=this.removePageElementPrefix(a);this.federatedResults?this.federatedResults[a]=[]:this.federatedResults={[d]:[]};const u=(t=(e=this.pageElements)===null||e===void 0?void 0:e[a])===null||t===void 0?void 0:t.hits;u!=null&&u.hits&&(this.federatedResults[d]=this.formatHits(u==null?void 0:u.hits)),this.totalResults+=(i=u==null?void 0:u.total)!==null&&i!==void 0?i:0,this.returnedCount+=(r=u==null?void 0:u.returned)!==null&&r!==void 0?r:0}}removePageElementPrefix(e){return e.split("___").pop()}static createResult(e,t){switch(e){case"item":return new R(t);case"text":case"asr_text":return new Te(t);case"favorited_search":return new Tt(t);case"web_archive":return new Ue(t);case"tv_clip":return new Ne(t);default:return new R(t)}}}class Ut{constructor(e){this.clientParameters=e.client_parameters,this.backendRequests=e.backend_requests,this.kind=e.kind}}class Nt{constructor(e){var t,i,r;this.rawResponse=e,this.request=new Ut(e.request),this.responseHeader=(t=e.response)===null||t===void 0?void 0:t.header,this.sessionContext=e.session_context,this.response=new Ie((i=e.response)===null||i===void 0?void 0:i.body,(r=e.response)===null||r===void 0?void 0:r.hit_schema)}}var x;(function(n){n[n.DEFAULT=0]="DEFAULT",n[n.METADATA=1]="METADATA",n[n.FULLTEXT=2]="FULLTEXT",n[n.TV=3]="TV",n[n.RADIO=4]="RADIO",n[n.FEDERATED=5]="FEDERATED"})(x||(x={}));class O{static aggregateSearchParamsAsString(e){if(e.omit)return"false";if(e.advancedParams){const t=e.advancedParams.map(r=>({terms:r}));return JSON.stringify(t)}if(e.simpleParams)return e.simpleParams.join(",")}static sortParamsAsString(e){return`${e.field}:${e.direction}`}static filterParamsAsString(e){return JSON.stringify(e)}static generateURLSearchParams(e){const t=new URLSearchParams;if(e.query&&t.append("user_query",e.query),e.pageType&&t.append("page_type",String(e.pageType)),e.pageTarget&&t.append("page_target",String(e.pageTarget)),e.pageElements&&e.pageElements.length>0){const s=`[${e.pageElements.map(a=>`"${a}"`).join(",")}]`;t.append("page_elements",s)}if(e.rows!=null&&t.append("hits_per_page",String(e.rows)),e.page!=null&&t.append("page",String(e.page)),e.fields&&e.fields.length>0&&t.append("fields",e.fields.join(",")),e.filters&&Object.keys(e.filters).length>0){const r=this.filterParamsAsString(e.filters);r&&r!=="{}"&&t.append("filter_map",r)}if(e.sort&&e.sort.length>0){const r=e.sort.map(s=>this.sortParamsAsString(s));t.append("sort",r.join(","))}const i=e.aggregations;if(i){const r=this.aggregateSearchParamsAsString(i);r&&t.append("aggregations",r)}if(e.aggregationsSize!=null&&t.append("aggregations_size",String(e.aggregationsSize)),e.debugging&&t.append("debugging","true"),e.uid&&t.append("uid",e.uid),e.includeClientUrl!==!1){const r=e.query==null,s=e.query&&e.query.length<=1e3;if(r||s){const d=window.location.href.slice(0,400);t.append("client_url",d)}}return t}}var X;(function(n){n.networkError="SearchService.NetworkError",n.itemNotFound="SearchService.ItemNotFound",n.decodingError="SearchService.DecodingError",n.searchEngineError="SearchService.SearchEngineError"})(X||(X={}));class Ot extends Error{constructor(e,t,i){super(t),this.name=e,this.type=e,this.details=i}}const Ze={reCache:JSON.stringify({recompute:!0}),noCache:JSON.stringify({bypass:!0}),dontCache:JSON.stringify({no_compute:!0})};class Q{constructor(e){var t,i;this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null;const r=new URL(window.location.href).searchParams,s=r.get("scope"),a=r.get("verbose"),d=r.get("debugging"),u=r.get("cacheDebug");let h="";for(const v of Object.keys(Ze))if(r.get(v)){h=Ze[v];break}h=(i=r.get("caching"))!==null&&i!==void 0?i:h,(e==null?void 0:e.caching)!==void 0?this.cachingFlags=e.caching:h&&(this.cachingFlags=h),(e==null?void 0:e.debuggingEnabled)!==void 0?this.debuggingEnabled=e.debuggingEnabled:(d||u)&&(this.debuggingEnabled=!0),(e==null?void 0:e.scope)!==void 0?this.requestScope=e.scope:s&&(this.requestScope=s),(e==null?void 0:e.verbose)!==void 0?this.verbose=e.verbose:a&&(this.verbose=!!a)}async fetchUrl(e,t){var i,r;const s=new URL(e);this.requestScope&&s.searchParams.set("scope",this.requestScope),this.cachingFlags&&s.searchParams.set("caching",this.cachingFlags);let a;try{const d=(i=t==null?void 0:t.requestOptions)!==null&&i!==void 0?i:{credentials:this.includeCredentials?"include":"same-origin"};a=await fetch(s.href,d)}catch(d){const u=d instanceof Error?d.message:typeof d=="string"?d:"Unknown error";return this.getErrorResult(X.networkError,u)}try{const d=await a.json();this.verbose&&this.printResponse(d),d.debugging&&this.printDebuggingInfo(d);const u=(r=d.response)===null||r===void 0?void 0:r.error;return u?this.getErrorResult(X.searchEngineError,u.message,u.forensics):{success:d}}catch(d){const u=d instanceof Error?d.message:typeof d=="string"?d:"Unknown error";return this.getErrorResult(X.decodingError,u)}}getErrorResult(e,t,i){return{error:new Ot(e,t,i)}}printResponse(e){var t,i,r,s,a;try{const d=JSON.parse(JSON.stringify(e)),u=(r=(i=(t=d==null?void 0:d.response)===null||t===void 0?void 0:t.body)===null||i===void 0?void 0:i.hits)===null||r===void 0?void 0:r.hits;if(Array.isArray(u)&&u.length>1){const v=[];v.push(u[0]),v.push(`*** ${u.length-1} hits omitted ***`),d.response.body.hits.hits=v}const h=(a=(s=d==null?void 0:d.response)===null||s===void 0?void 0:s.body)===null||a===void 0?void 0:a.aggregations;h&&Object.entries(h).forEach(([v,g])=>{var _,f,m,A;if(((f=(_=g)===null||_===void 0?void 0:_.buckets)===null||f===void 0?void 0:f.length)>0){const I=JSON.parse(JSON.stringify(g));I.buckets=`*** ${(A=(m=I.buckets)===null||m===void 0?void 0:m.length)!==null&&A!==void 0?A:0} buckets omitted ***`,d.response.body.aggregations[v]=I}}),console.log("***** RESPONSE RECEIVED *****"),console.groupCollapsed("Response"),console.log(JSON.stringify(d,null,2)),console.groupEnd()}catch(d){console.error("Error printing search response:",d)}}printDebuggingInfo(e){var t,i;const r=e.debugging,s=(t=r.messages)!==null&&t!==void 0?t:[],a=(i=r.data)!==null&&i!==void 0?i:{};console.log("***** BEGIN DEBUGGING *****"),console.log("Full response:"),console.log(JSON.stringify(e,null,2)),console.group("Debug messages");for(const d of s)console.log(d);console.groupEnd(),console.group("Debug data");for(const[d,u]of Object.entries(a))console.log(d,u);console.groupEnd(),console.log("***** END DEBUGGING *****")}}class It extends Q{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=O.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?service_backend=fts&${i}`;return this.fetchUrl(r)}}class Dt extends Q{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=O.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?service_backend=metadata&${i}`;return this.fetchUrl(r)}}class Vt extends Q{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=O.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?service_backend=tvs&${i}`;return this.fetchUrl(r)}}class Ft extends Q{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=O.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?service_backend=rcs&${i}`;return this.fetchUrl(r)}}class Lt extends Q{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=O.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?page_type=simple_federation&${i}`;return this.fetchUrl(r)}}class Ht extends Q{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=O.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?${i}`;return this.fetchUrl(r)}}class J{constructor(e={}){this.backendOptions=e}async search(e,t=x.METADATA){const r=await J.getBackendForSearchType(t,this.backendOptions).performSearch(e);return r.error?r:{success:new Nt(r.success)}}itemDetails(e){const t={pageType:"item_details",pageTarget:e};return this.search(t,x.DEFAULT)}static getBackendForSearchType(e,t={}){switch(e){case x.METADATA:return new Dt(t);case x.FULLTEXT:return new It(t);case x.RADIO:return new Ft(t);case x.TV:return new Vt(t);case x.FEDERATED:return new Lt(t);default:return new Ht(t)}}}J.default=new J;l([o((n,e={})=>{const{includeCredentials:t=!1,verbose:i=!1,scope:r="",baseUrl:s=""}=e;return`${n};${t};${i};${r};${s}`})],J,"getBackendForSearchType",null);let W=class extends V{constructor(){super(...arguments),this.isSearching=!1}get itemResults(){var e;return(e=this.response)===null||e===void 0?void 0:e.response.extraInfo}render(){return y`
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
    `}async search(e){var t,i,r;e.preventDefault();const s=(i=(t=this.shadowRoot)===null||t===void 0?void 0:t.getElementById("item-input"))===null||i===void 0?void 0:i.value;this.error=void 0,this.response=void 0,this.isSearching=!0;const a=await((r=this.searchService)===null||r===void 0?void 0:r.itemDetails(s));this.response=a==null?void 0:a.success,this.error=a==null?void 0:a.error,this.isSearching=!1}};l([he({type:Object})],W.prototype,"searchService",void 0);l([S()],W.prototype,"isSearching",void 0);l([S()],W.prototype,"response",void 0);l([S()],W.prototype,"error",void 0);W=l([Ce("item-detail-query")],W);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*qt(n,e){if(n!==void 0){let t=0;for(const i of n)yield e(i,t++)}}class Xe{constructor(){this.filterMap={}}addFilter(e,t,i){if(this.filterMap[e]||(this.filterMap[e]={}),this.filterMap[e][t]){const r=[].concat(this.filterMap[e][t],i);this.filterMap[e][t]=Array.from(new Set(r))}else this.filterMap[e][t]=i;return this}removeSingleFilter(e,t,i){var r;if(!(!((r=this.filterMap[e])===null||r===void 0)&&r[t]))return this;const s=[].concat(this.filterMap[e][t]),a=s.indexOf(i);return a>=0&&s.splice(a,1),this.filterMap[e][t]=s.length===1?s[0]:s,s.length===0&&delete this.filterMap[e][t],this.deleteFieldIfEmpty(e),this}removeFilters(e,t){return this.filterMap[e]?(delete this.filterMap[e][t],this.deleteFieldIfEmpty(e),this):this}deleteFieldIfEmpty(e){const t=this.filterMap[e];t&&Object.keys(t).length===0&&delete this.filterMap[e]}setFilterMap(e){return this.filterMap={...e},this}mergeFilterMap(e){for(const[t,i]of Object.entries(e))for(const[r,s]of Object.entries(i))if(Array.isArray(s))for(const a of s)this.addFilter(t,r,a);else this.addFilter(t,r,s);return this}build(){return this.filterMap}}let b=class extends V{constructor(){super(...arguments),this.debuggingEnabled=!1,this.filterMap={},this.loadingSearchResults=!1,this.loadingAggregations=!1,this.defaultAggregationsChecked=!0,this.fullSearchResultsShown=!1}get searchResults(){var e;return(e=this.searchResponse)===null||e===void 0?void 0:e.response.results}get searchAggregations(){var e;return(e=this.aggregationsResponse)===null||e===void 0?void 0:e.response.aggregations}render(){return y`
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
    `}filterFieldChanged(e){var t,i;const s=!!e.target.selectedOptions[0].dataset.numeric,a=(i=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelectorAll("#filter-constraint option"))!==null&&i!==void 0?i:[];for(const d of a)d.toggleAttribute("hidden",!s&&!!d.dataset.numeric)}addFilterClicked(){const e=this.filterFieldInput.selectedOptions[0].value,t=this.filterValueInput.value,i=this.filterConstraintInput.selectedOptions[0].value;!e||!i||!t||(this.filterMap=new Xe().setFilterMap(this.filterMap).addFilter(e,t,i).build(),this.filterValueInput.value="")}removeFilterClicked(e){const t=e.target,{field:i,value:r,constraint:s}=t.dataset;i&&r&&s&&(this.filterMap=new Xe().setFilterMap(this.filterMap).removeSingleFilter(i,r,s).build())}get appliedFiltersTemplate(){const e=[];for(const[i,r]of Object.entries(this.filterMap))for(const[s,a]of Object.entries(r))if(Array.isArray(a))for(const d of a)e.push({field:i,value:s,constraint:d});else e.push({field:i,value:s,constraint:a});if(e.length===0)return y`<span>(no filters applied)</span>`;const t={inc:"includes",exc:"excludes",gt:">",gte:">=",lt:"<",lte:"<="};return qt(e,({field:i,value:r,constraint:s})=>y`
        <span class="filter">
          <span class="filter-text"
            >'${i}' ${t[s]} '${r}'</span
          >
          <button
            type="button"
            class="remove-filter"
            data-field=${i}
            data-value=${r}
            data-constraint=${s}
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
    `}get snippetsHeaderTemplate(){var e;return!((e=this.searchResults)===null||e===void 0)&&e.some(t=>t.highlight)?y`<th>Snippets</th>`:y`${w}`}snippetTemplate(e){return e.highlight?y`<td>${e.highlight.value}</td>`:y`${w}`}toggleDefaultAggregations(){var e;this.defaultAggregationsChecked=(e=this.defaultAggregationsCheckbox)===null||e===void 0?void 0:e.checked}toggleFullSearchResults(){this.fullSearchResultsShown=!this.fullSearchResultsShown}async search(e){var t;e.preventDefault();const i=this.searchInput.value,r=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector("input[name='search-type']:checked"),s=(r==null?void 0:r.value)==="fts"?x.FULLTEXT:x.METADATA;this.fetchSearchResults(i,s),this.fetchAggregations(i,s)}async fetchSearchResults(e,t){var i,r,s,a,d,u,h;const v=((i=this.checkedSort)===null||i===void 0?void 0:i.value)==="none"?void 0:[{field:"title",direction:(r=this.checkedSort)===null||r===void 0?void 0:r.value}],g=Number((s=this.rowsInput)===null||s===void 0?void 0:s.value),_=(a=this.debugCheck)===null||a===void 0?void 0:a.checked,f={query:e,rows:g,sort:v,filters:this.filterMap,aggregations:{omit:!0},debugging:_,uid:"demo"};!((d=this.searchWithinCheck)===null||d===void 0)&&d.checked&&(f.pageTarget=e,f.pageType="collection_details"),this.lastSearchParams=decodeURIComponent(O.generateURLSearchParams(f).toString()),this.loadingSearchResults=!0;const m=await((u=this.searchService)===null||u===void 0?void 0:u.search(f,t));this.loadingSearchResults=!1,m!=null&&m.success?this.searchResponse=m==null?void 0:m.success:(alert(`Oh noes: ${(h=m==null?void 0:m.error)===null||h===void 0?void 0:h.message}`),console.error("Error searching",m==null?void 0:m.error))}async fetchAggregations(e,t){var i,r,s,a,d;const u=(i=this.shadowRoot)===null||i===void 0?void 0:i.querySelectorAll("input[name='aggs']:checked"),h={simpleParams:u?[...u].map(m=>m.value):void 0},v=Number((r=this.numAggsInput)===null||r===void 0?void 0:r.value),g=(s=this.debugCheck)===null||s===void 0?void 0:s.checked,_={query:e,rows:0,filters:this.filterMap,aggregationsSize:v,debugging:g,uid:"demo"};this.defaultAggregationsChecked||(_.aggregations=h),this.lastAggregationParams=decodeURIComponent(O.generateURLSearchParams(_).toString()),this.loadingAggregations=!0;const f=await((a=this.searchService)===null||a===void 0?void 0:a.search(_,t));this.loadingAggregations=!1,f!=null&&f.success?this.aggregationsResponse=f==null?void 0:f.success:(alert(`Oh noes: ${(d=f==null?void 0:f.error)===null||d===void 0?void 0:d.message}`),console.error("Error searching",f==null?void 0:f.error))}static get styles(){return et`
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
    `}};l([he({type:Object})],b.prototype,"searchService",void 0);l([he({type:Boolean})],b.prototype,"debuggingEnabled",void 0);l([T("#search-input")],b.prototype,"searchInput",void 0);l([T("#search-within-check")],b.prototype,"searchWithinCheck",void 0);l([T("#debug-info-check")],b.prototype,"debugCheck",void 0);l([T("#num-rows")],b.prototype,"rowsInput",void 0);l([T("#num-aggs")],b.prototype,"numAggsInput",void 0);l([T("input[name='sort']:checked")],b.prototype,"checkedSort",void 0);l([T("#filter-field")],b.prototype,"filterFieldInput",void 0);l([T("#filter-constraint")],b.prototype,"filterConstraintInput",void 0);l([T("#filter-value")],b.prototype,"filterValueInput",void 0);l([T("#aggs-default")],b.prototype,"defaultAggregationsCheckbox",void 0);l([S()],b.prototype,"filterMap",void 0);l([S()],b.prototype,"loadingSearchResults",void 0);l([S()],b.prototype,"loadingAggregations",void 0);l([S()],b.prototype,"lastSearchParams",void 0);l([S()],b.prototype,"lastAggregationParams",void 0);l([S()],b.prototype,"defaultAggregationsChecked",void 0);l([S()],b.prototype,"fullSearchResultsShown",void 0);l([S()],b.prototype,"searchResponse",void 0);l([S()],b.prototype,"aggregationsResponse",void 0);b=l([Ce("search-query")],b);let re=class extends V{constructor(){super(...arguments),this.searchServiceUrlOptions=this.initSearchServiceUrlOptions(),this.queryType="search",this.searchService=new J(this.searchServiceUrlOptions)}initSearchServiceUrlOptions(){var e,t;const i=new URL(window.location.href).searchParams;return{baseUrl:(e=i.get("search_base_url"))!==null&&e!==void 0?e:"archive.org",servicePath:(t=i.get("search_service_path"))!==null&&t!==void 0?t:void 0,debuggingEnabled:!!i.get("debugging")}}render(){return y`
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
      ${St(this.queryType,[["search",()=>this.searchTemplate],["item",()=>this.itemTemplate]])}
    `}onQueryTypeChange(e){const t=e.target;this.queryType=t.value}get itemTemplate(){return y`
      <item-detail-query
        .searchService=${this.searchService}
      ></item-detail-query>
    `}get searchTemplate(){var e;return y` <search-query
      .searchService=${this.searchService}
      ?debuggingEnabled=${(e=this.searchServiceUrlOptions)===null||e===void 0?void 0:e.debuggingEnabled}
    ></search-query>`}static get styles(){return et`
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
    `}};l([S()],re.prototype,"searchServiceUrlOptions",void 0);l([S()],re.prototype,"queryType",void 0);l([S()],re.prototype,"searchService",void 0);re=l([Ce("app-root")],re);
