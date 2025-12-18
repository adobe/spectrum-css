import{T as d}from"./template-CqWMgg5V.js";import{T as f}from"./template-Cug7zURX.js";import{a as o,r as h,g as k,n as e}from"./decorator-DlLJAwnS.js";import{x as l}from"./lit-element-Cr8ugfRm.js";import{o as A}from"./if-defined-C5sRMNk0.js";const C=({rootClass:s="spectrum-AssetList-item",image:t,iconName:m,iconSet:u="workflow",label:a,checkboxId:i,ariaLabelledby:$,isNavigated:T=!1,isSelectable:c=!1,isSelected:n=!1,isBranch:p=!1,onclick:g=()=>{}}={},r={})=>l`
	<li
		class=${o({[s]:!0,"is-selectable":c,"is-selected":n,"is-branch":p,"is-navigated":T})}
		@click=${g}
		tabindex="0"
	>
		${e(c,()=>d({size:"m",isChecked:n,ariaLabelledby:$,id:i,customClasses:[`${s}Selector`]},r))}
		${e(t,()=>l`<img src=${t} class="${s}Thumbnail" alt="asset image thumbnail" />`)}
		${e(m,()=>f({iconName:m,setName:u,customClasses:[`${s}Thumbnail`]},r))}
		${e(a,()=>l`<span class="${s}Label">${a}</span>`)}
		${e(!c&&!p,()=>d({size:"m",isChecked:n,ariaLabelledby:$,id:i,customClasses:[`${s}Selector`]},r))}
		${e(p,()=>f({iconName:"ChevronRight100",setName:"ui",customClasses:[`${s}ChildIndicator`]},r))}
	</li>
`,I=({rootClass:s="spectrum-AssetList",items:t=[],customClasses:m=[],id:u=k("assetlist")}={},a={})=>l`
		<ul
			class=${o({[s]:!0,...m.reduce((i,$)=>({...i,[$]:!0}),{})})}
			id=${A(u)}
		>
			${h(t,{callback:C,args:{rootClass:`${s}-item`},context:a})}
		</ul>
	`;export{I as T};
