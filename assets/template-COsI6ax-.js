import{T as d}from"./template-B2A9LdU4.js";import{T as f}from"./template-B52pacml.js";import{R as o,r as h,g as k,n as e}from"./decorator-BtqfPG1l.js";import{k as l}from"./lit-element-C96egxJg.js";import{t as R}from"./if-defined-B5hOZ0d5.js";const A=({rootClass:s="spectrum-AssetList-item",image:t,iconName:a,iconSet:u="workflow",label:m,checkboxId:i,ariaLabelledby:$,isNavigated:T=!1,isSelectable:c=!1,isSelected:n=!1,isBranch:p=!1,onclick:g=()=>{}}={},r={})=>l`
	<li
		class=${o({[s]:!0,"is-selectable":c,"is-selected":n,"is-branch":p,"is-navigated":T})}
		@click=${g}
		tabindex="0"
	>
		${e(c,()=>d({size:"m",isChecked:n,ariaLabelledby:$,id:i,customClasses:[`${s}Selector`]},r))}
		${e(t,()=>l`<img src=${t} class="${s}Thumbnail" alt="asset image thumbnail" />`)}
		${e(a,()=>f({iconName:a,setName:u,customClasses:[`${s}Thumbnail`]},r))}
		${e(m,()=>l`<span class="${s}Label">${m}</span>`)}
		${e(!c&&!p,()=>d({size:"m",isChecked:n,ariaLabelledby:$,id:i,customClasses:[`${s}Selector`]},r))}
		${e(p,()=>f({iconName:"ChevronRight100",setName:"ui",customClasses:[`${s}ChildIndicator`]},r))}
	</li>
`,z=({rootClass:s="spectrum-AssetList",items:t=[],customClasses:a=[],id:u=k("assetlist")}={},m={})=>l`
		<ul
			class=${o({[s]:!0,...a.reduce((i,$)=>({...i,[$]:!0}),{})})}
			id=${R(u)}
		>
			${h(t,{callback:A,args:{rootClass:`${s}-item`},context:m})}
		</ul>
	`;export{z as T};
