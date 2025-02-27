import{i as _,t as W,e as E,R as H,g as V}from"./decorator-BliclrE4.js";import{D as T,R as G,k as b}from"./lit-element-C96egxJg.js";import{t as S}from"./if-defined-B5hOZ0d5.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class D extends _{constructor(t){if(super(t),this.it=T,t.type!==W.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===T||t==null)return this._t=void 0,this.it=t;if(t===G)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}D.directiveName="unsafeHTML",D.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class R extends D{}R.directiveName="unsafeSVG",R.resultType=2;const I=E(R),K=({icons:s,workflowIcons:t=[],uiIcons:e=[],uiIconSizes:o={}})=>{if(!s||Object.keys(s).length==0)if(window.icons)s=window.icons;else return{workflowIcons:[],uiIcons:[],uiIconSizes:{},uiIconsWithDirections:[]};return s=Object.entries(s).reduce((l,[f,k])=>(l[f]=Object.entries(k).reduce((p,[d,w])=>(p[d]=Object.entries(w).reduce((c,[n,u])=>{var $;if(n=n.split("/").pop().replace(/\.svg$/,""),c[n]=u,f==="workflow")t.push(n);else{const a=n.replace(/\d{2,3}$/,"").replace(/(Right|Left|Down|Up)$/,""),g=($=n.match(/\d{2,3}/g))==null?void 0:$[0];e.push(a),o[a]=[...new Set([...o[a]??[],...g?[g]:[]])]}return c},{}),p),{}),l),{}),{icons:s,workflowIcons:[...new Set(t)],uiIcons:[...new Set(e)],uiIconSizes:o,uiIconsWithDirections:[...new Set([...e.filter(l=>!["Chevron","Arrow"].includes(l))??[],"ArrowRight","ArrowLeft","ArrowUp","ArrowDown","ChevronRight","ChevronLeft","ChevronUp","ChevronDown"])]}},B=({rootClass:s="spectrum-Icon",size:t="m",setName:e,iconName:o,uiIconName:l,fill:f,id:k=V("icon"),customClasses:p=[],icons:d,useRef:w=!0,workflowIcons:c,uiIcons:n,uiIconSizes:u}={},$={})=>{var U,A,C;const{globals:a={},loaded:g={}}=$,h=a.scale??"medium";if(!c||!n||!u){const r=K({icons:g.icons,workflowIcons:c,uiIcons:n,uiIconSizes:u});r.icons&&(d=r.icons),!c&&r.workflowIcons&&(c=r.workflowIcons),!n&&r.uiIcons&&(n=r.uiIcons),!u&&r.uiIconSizes&&(u=r.uiIconSizes)}if(e==="ui"&&l&&(o=l),!o)return console.warn("Icon: Could not render a result because no icon name was provided to the icon template."),b``;let i=o;if(["workflow","ui"].includes(e)||(c.includes(i)?e="workflow":n.includes(i.replace(/\d{2,3}$/,"").replace(/(Right|Left|Down|Up)$/,""))&&(e="ui")),e==="ui"&&l&&(w=!1),!e)return console.warn(`Icon: Could not determine the icon set for the provided icon name: ${i}.`),b``;if(e=="ui"&&n.some(r=>i.startsWith(r))&&["Right","Left","Down","Up"].some(r=>i.includes(r))&&(i=i.replace(/(Right|Left|Down|Up)/,"")),e=="ui"&&n.includes(i.replace(/\d{2,3}$/,""))&&!i.match(/^(?!\d).*\d{2,3}$/)&&((U=u[i])==null?void 0:U.length)!=0){let r;switch(t){case"xs":case"s":r="75";break;case"l":r="200";break;case"xl":case"xxl":r="300";break;default:r="100";break}i+=r,o+=r}let L;f&&(L=`color: ${f}`);let y;!w&&d&&((C=(A=d[e])==null?void 0:A[h])!=null&&C[i])&&(y=d[e][h][i]);const m={[s]:!0,[`spectrum-UIIcon-${o}`]:e==="ui",[`${s}--${h}`]:!!(e==="ui"&&h),[`${s}--size${t==null?void 0:t.toUpperCase()}`]:!!((!e||e==="workflow")&&t),...p.reduce((r,v)=>({...r,[v]:!0}),{})};if(y){const r=Object.entries(m).reduce((v,[j,O])=>(O&&(v+=`${j} `),v),"");return b`${I(y.replace(/<svg/,`<svg class="${r}" focusable="false" aria-hidden="true" role="img"`))}`}const x=e!=="workflow"?`spectrum-css-icon-${i}`:`spectrum-icon-${h!=="medium"?"24":"18"}-${i}`;return b`<svg
		class=${H(m)}
		id=${S(k)}
		style=${S(L)}
		focusable="false"
		aria-hidden="true"
		aria-labelledby=${i}
		role="img"
	>
		<title id=${i}>${i.replace(/([A-Z])/g," $1").trim()}</title>
		<use xlink:href="#${x}" href="#${x}" />
	</svg>`};export{B as T};
