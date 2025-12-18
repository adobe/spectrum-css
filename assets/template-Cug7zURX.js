import{i as W,t as _,e as E,o as H,a as V,g as G}from"./decorator-DlLJAwnS.js";import{E as R,T as K,x as a}from"./lit-element-Cr8ugfRm.js";import{o as S}from"./if-defined-C5sRMNk0.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class y extends W{constructor(e){if(super(e),this.it=R,e.type!==_.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===R||e==null)return this._t=void 0,this.it=e;if(e===K)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}y.directiveName="unsafeHTML",y.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class k extends y{}k.directiveName="unsafeSVG",k.resultType=2;const M=E(k),Z=({icons:s,workflowIcons:e=[],uiIcons:t=[],uiIconSizes:o={}})=>{if(!s||Object.keys(s).length==0)if(window.icons)s=window.icons;else return{workflowIcons:[],uiIcons:[],uiIconSizes:{},uiIconsWithDirections:[]};return s=Object.entries(s).reduce((l,[f,D])=>(l[f]=Object.entries(D).reduce((w,[d,$])=>(w[d]=Object.entries($).reduce((c,[n,u])=>{var v;if(n=n.split("/").pop().replace(/\.svg$/,""),c[n]=u,f==="workflow")e.push(n);else{const p=n.replace(/\d{2,3}$/,"").replace(/(Right|Left|Down|Up)$/,""),g=(v=n.match(/\d{2,3}/g))==null?void 0:v[0];t.push(p),o[p]=[...new Set([...o[p]??[],...g?[g]:[]])]}return c},{}),w),{}),l),{}),{icons:s,workflowIcons:[...new Set(e)],uiIcons:[...new Set(t)],uiIconSizes:o,uiIconsWithDirections:[...new Set([...t.filter(l=>!["Chevron","Arrow"].includes(l))??[],"ArrowRight","ArrowLeft","ArrowUp","ArrowDown","ChevronRight","ChevronLeft","ChevronUp","ChevronDown"])]}},q=({rootClass:s="spectrum-Icon",size:e="m",setName:t,iconName:o,uiIconName:l,fill:f,id:D=G("icon"),customClasses:w=[],icons:d,useRef:$=!0,workflowIcons:c,uiIcons:n,uiIconSizes:u}={},v={})=>{var L,T,U;const{globals:p={},loaded:g={}}=v,h=p.scale??"medium";if(!c||!n||!u){const r=Z({icons:g.icons,workflowIcons:c,uiIcons:n,uiIconSizes:u});r.icons&&(d=r.icons),!c&&r.workflowIcons&&(c=r.workflowIcons),!n&&r.uiIcons&&(n=r.uiIcons),!u&&r.uiIconSizes&&(u=r.uiIconSizes)}if(t==="ui"&&l&&(o=l),!o)return console.warn("Icon: Could not render a result because no icon name was provided to the icon template."),a``;let i=o;if(["workflow","ui"].includes(t)||(c.includes(i)?t="workflow":n.includes(i.replace(/\d{2,3}$/,"").replace(/(Right|Left|Down|Up)$/,""))&&(t="ui")),t==="ui"&&l&&($=!1),!t)return console.warn(`Icon: Could not determine the icon set for the provided icon name: ${i}.`),a``;if(t=="ui"&&n.some(r=>i.startsWith(r))&&["Right","Left","Down","Up"].some(r=>i.includes(r))&&(i=i.replace(/(Right|Left|Down|Up)/,"")),t=="ui"&&n.includes(i.replace(/\d{2,3}$/,""))&&!i.match(/^(?!\d).*\d{2,3}$/)&&((L=u[i])==null?void 0:L.length)!=0){let r;switch(e){case"xs":case"s":r="75";break;case"l":r="200";break;case"xl":case"xxl":r="300";break;default:r="100";break}i+=r,o+=r}let C;f&&(C=`color: ${f}`);let m;!$&&d&&((U=(T=d[t])==null?void 0:T[h])!=null&&U[i])&&(m=d[t][h][i]);const x={[s]:!0,[`spectrum-UIIcon-${o}`]:t==="ui",[`${s}--${h}`]:!!(t==="ui"&&h),[`${s}--size${e==null?void 0:e.toUpperCase()}`]:!!((!t||t==="workflow")&&e),...w.reduce((r,b)=>({...r,[b]:!0}),{})};if(m){const r=Object.entries(x).reduce((b,[O,I])=>(I&&(b+=`${O} `),b),"");return a`${M(m.replace(/<svg/,`<svg class="${r}" focusable="false" aria-hidden="true" role="img"`))}`}const A=t!=="workflow"?`spectrum-css-icon-${i}`:`spectrum-icon-${h!=="medium"?"24":"18"}-${i}`;return a`<svg
		class=${V(x)}
		id=${S(D)}
		style=${S(C)}
		focusable="false"
		aria-hidden="true"
		aria-labelledby=${i}
		role="img"
	>
		<title id=${i}>${i.replace(/([A-Z])/g," $1").trim()}</title>
		<use xlink:href="#${A}" href="#${A}" />
	</svg>`},j=(s,e=[],t)=>a`
	<div
		style=${H({display:"flex",gap:"32px",flexWrap:"wrap"})}
	>
		${e.map(o=>q({...s,iconName:o},t))}
	</div>
`,P=(s,e)=>a`
<div style="margin-bottom: 32px;">
	${j({...s,setName:"ui"},["Asterisk100","Asterisk200","Asterisk300"],e)}
</div>
<div>
	${j({...s,setName:"ui"},["ChevronDown50","ChevronDown75","ChevronDown100","ChevronDown200","ChevronDown300","ChevronDown400"],e)}
</div>
`;export{j as I,q as T,P as U};
