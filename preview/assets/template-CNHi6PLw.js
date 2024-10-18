import{i as _,t as W,e as E,R as H,a as T,g as I}from"./template-C7mrcesf.js";import{D as S,R as V,k as g}from"./lit-element-C96egxJg.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class D extends _{constructor(t){if(super(t),this.it=S,t.type!==W.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===S||t==null)return this._t=void 0,this.it=t;if(t===V)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}D.directiveName="unsafeHTML",D.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class R extends D{}R.directiveName="unsafeSVG",R.resultType=2;const G=E(R),K=({icons:s,workflowIcons:t=[],uiIcons:r=[],uiIconSizes:o={}})=>{if(!s||Object.keys(s).length==0)if(window.icons)s=window.icons;else return{workflowIcons:[],uiIcons:[],uiIconSizes:{},uiIconsWithDirections:[]};return s=Object.entries(s).reduce((c,[f,v])=>(c[f]=Object.entries(v).reduce((p,[d,b])=>(p[d]=Object.entries(b).reduce((l,[n,u])=>{var w;if(n=n.split("/").pop().replace(/\.svg$/,""),l[n]=u,f==="workflow")t.push(n);else{const a=n.replace(/\d{2,3}$/,"").replace(/(Right|Left|Down|Up)$/,""),$=(w=n.match(/\d{2,3}/g))==null?void 0:w[0];r.push(a),o[a]=[...new Set([...o[a]??[],...$?[$]:[]])]}return l},{}),p),{}),c),{}),{icons:s,workflowIcons:[...new Set(t)],uiIcons:[...new Set(r)],uiIconSizes:o,uiIconsWithDirections:[...new Set([...r.filter(c=>!["Chevron","Arrow"].includes(c))??[],"ArrowRight","ArrowLeft","ArrowUp","ArrowDown","ChevronRight","ChevronLeft","ChevronUp","ChevronDown"])]}},q=({rootClass:s="spectrum-Icon",size:t="m",setName:r,iconName:o,uiIconName:c,fill:f,id:v=I("icon"),customClasses:p=[],icons:d,useRef:b=!1,workflowIcons:l,uiIcons:n,uiIconSizes:u}={},w={})=>{var U,A,C;const{globals:a={},loaded:$={}}=w,h=a.scale??"medium";if(!l||!n||!u){const e=K({icons:$.icons,workflowIcons:l,uiIcons:n,uiIconSizes:u});e.icons&&(d=e.icons),!l&&e.workflowIcons&&(l=e.workflowIcons),!n&&e.uiIcons&&(n=e.uiIcons),!u&&e.uiIconSizes&&(u=e.uiIconSizes)}if(r==="ui"&&c&&(o=c),!o)return console.warn("Icon: Could not render a result because no icon name was provided to the icon template."),g``;let i=o;if(["workflow","ui"].includes(r)||(l.includes(i)?r="workflow":n.includes(i.replace(/\d{2,3}$/,"").replace(/(Right|Left|Down|Up)$/,""))&&(r="ui")),!r)return console.warn(`Icon: Could not determine the icon set for the provided icon name: ${i}.`),g``;if(r=="ui"&&n.some(e=>i.startsWith(e))&&["Right","Left","Down","Up"].some(e=>i.includes(e))&&(i=i.replace(/(Right|Left|Down|Up)/,"")),r=="ui"&&n.includes(i.replace(/\d{2,3}$/,""))&&!i.match(/^(?!\d).*\d{2,3}$/)&&((U=u[i])==null?void 0:U.length)!=0){let e;switch(t){case"xs":case"s":e="75";break;case"l":e="200";break;case"xl":case"xxl":e="300";break;default:e="100";break}i+=e,o+=e}let L;f&&(L=`color: ${f}`);let k;d&&((C=(A=d[r])==null?void 0:A[h])!=null&&C[i])&&(k=d[r][h][i]);const m={[s]:!0,[`spectrum-UIIcon-${o}`]:r==="ui",[`${s}--${h}`]:!!(r==="ui"&&h),[`${s}--size${t==null?void 0:t.toUpperCase()}`]:!!((!r||r==="workflow")&&t),...p.reduce((e,y)=>({...e,[y]:!0}),{})},j=Object.entries(m).reduce((e,[y,O])=>(O&&(e+=`${y} `),e),"");if(!b&&k)return g`${G(k.replace(/<svg/,`<svg class="${j}" focusable="false" aria-hidden="true" role="img"`))}`;const x=r!=="workflow"?`spectrum-css-icon-${i}`:`spectrum-icon-${h!=="medium"?"24":"18"}-${i}`;return g`<svg
		class=${H(m)}
		id=${T(v)}
		style=${T(L)}
		focusable="false"
		aria-hidden="true"
		aria-labelledby=${i}
		role="img"
	>
		<title id=${i}>${i.replace(/([A-Z])/g," $1").trim()}</title>
		<use xlink:href="#${x}" href="#${x}" />
	</svg>`};export{q as T};
