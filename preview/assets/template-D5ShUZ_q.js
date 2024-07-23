import"./lit-element-CJjJlyWZ.js";import{T as C,w as O,x as w}from"./lit-html-BdGv-Ldy.js";import{i as _,t as W,e as E,a as H}from"./class-map-sTkR_Npl.js";import{o as R}from"./if-defined-Bo9G1hLT.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class y extends _{constructor(t){if(super(t),this.it=C,t.type!==W.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===C||t==null)return this._t=void 0,this.it=t;if(t===O)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}y.directiveName="unsafeHTML",y.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class D extends y{}D.directiveName="unsafeSVG",D.resultType=2;const I=E(D),V=({icons:s,workflowIcons:t=[],uiIcons:r=[],uiIconSizes:l={}})=>{if(!s||Object.keys(s).length==0)if(window.icons)s=window.icons;else return{workflowIcons:[],uiIcons:[],uiIconSizes:{},uiIconsWithDirections:[]};return s=Object.entries(s).reduce((u,[h,$])=>(u[h]=Object.entries($).reduce((d,[g,a])=>(d[g]=Object.entries(a).reduce((o,[n,v])=>{var p;if(n=n.split("/").pop().replace(/\.svg$/,""),o[n]=v,h==="workflow")t.push(n);else{const f=n.replace(/\d{2,3}$/,"").replace(/(Right|Left|Down|Up)$/,""),c=(p=n.match(/\d{2,3}/g))==null?void 0:p[0];r.push(f),l[f]=[...new Set([...l[f]??[],...c?[c]:[]])]}return o},{}),d),{}),u),{}),{icons:s,workflowIcons:[...new Set(t)],uiIcons:[...new Set(r)],uiIconSizes:l,uiIconsWithDirections:[...new Set([...r.filter(u=>!["Chevron","Arrow"].includes(u))??[],"ArrowRight","ArrowLeft","ArrowUp","ArrowDown","ChevronRight","ChevronLeft","ChevronUp","ChevronDown"])]}},q=({rootClass:s="spectrum-Icon",size:t="m",setName:r,iconName:l,fill:u,id:h,customClasses:$=[],icons:d,useRef:g=!1,workflowIcons:a,uiIcons:o,uiIconSizes:n}={},v={})=>{var T,U,A;const{globals:p={},loaded:f={}}=v,c=p.scale??"medium";if(!a||!o||!n){const e=V({icons:f.icons,workflowIcons:a,uiIcons:o,uiIconSizes:n});e.icons&&(d=e.icons),!a&&e.workflowIcons&&(a=e.workflowIcons),!o&&e.uiIcons&&(o=e.uiIcons),!n&&e.uiIconSizes&&(n=e.uiIconSizes)}if(!l)return console.warn("Icon: Could not render a result because no icon name was provided to the icon template."),w``;let i=l;if(["workflow","ui"].includes(r)||(a.includes(i)?r="workflow":o.includes(i.replace(/\d{2,3}$/,"").replace(/(Right|Left|Down|Up)$/,""))&&(r="ui")),!r)return console.warn(`Icon: Could not determine the icon set for the provided icon name: ${i}.`),w``;if(r=="ui"&&o.some(e=>i.startsWith(e))&&["Right","Left","Down","Up"].some(e=>i.includes(e))&&(i=i.replace(/(Right|Left|Down|Up)/,"")),r=="ui"&&o.includes(i.replace(/\d{2,3}$/,""))&&!i.match(/^(?!\d).*\d{2,3}$/)&&((T=n[i])==null?void 0:T.length)!=0){let e;switch(t){case"xs":case"s":e="75";break;case"l":e="200";break;case"xl":case"xxl":e="300";break;default:e="100";break}i+=e,l+=e}let k;u&&(k=`color: ${u}`);let b;d&&((A=(U=d[r])==null?void 0:U[c])!=null&&A[i])&&(b=d[r][c][i]);const x={[s]:!0,[`spectrum-UIIcon-${l}`]:r==="ui",[`${s}--${c}`]:!!(r==="ui"&&c),[`${s}--size${t==null?void 0:t.toUpperCase()}`]:!!((!r||r==="workflow")&&t),...$.reduce((e,m)=>({...e,[m]:!0}),{})},S=Object.entries(x).reduce((e,[m,j])=>(j&&(e+=`${m} `),e),"");if(!g&&b)return w`${I(b.replace(/<svg/,`<svg class="${S}" focusable="false" aria-hidden="true" role="img"`))}`;const L=r!=="workflow"?`spectrum-css-icon-${i}`:`spectrum-icon-${c!=="medium"?"24":"18"}-${i}`;return w`<svg
		class=${H(x)}
		id=${R(h)}
		style=${R(k)}
		focusable="false"
		aria-hidden="true"
		aria-labelledby=${i}
		role="img"
	>
		<title id=${i}>${i.replace(/([A-Z])/g," $1").trim()}</title>
		<use xlink:href="#${L}" href="#${L}" />
	</svg>`};export{q as T};
