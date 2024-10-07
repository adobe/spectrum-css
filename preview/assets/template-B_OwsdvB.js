import{T as p}from"./template-CotMDNmo.js";import{T as o}from"./template-CjNf7Zto.js";import{R as d,a as g,r as h,g as k,n as e}from"./template-CykOH8vE.js";import{k as l}from"./lit-element-C96egxJg.js";const R=({rootClass:s="spectrum-AssetList-item",image:t,iconName:a,iconSet:r="workflow",label:m,checkboxId:i,ariaLabelledby:$,isNavigated:f=!1,isSelectable:c=!1,isSelected:n=!1,isBranch:u=!1,onclick:T=()=>{}})=>l`
	<li
		class=${d({[s]:!0,"is-selectable":c,"is-selected":n,"is-branch":u,"is-navigated":f})}
		@click=${T}
		tabindex="0"
	>
		${e(c,()=>p({size:"m",isChecked:n,ariaLabelledby:$,id:i,customClasses:[`${s}Selector`]}))}
		${e(t,()=>l`<img src=${t} class="${s}Thumbnail" alt="asset image thumbnail" />`)}
		${e(a,()=>o({iconName:a,setName:r,customClasses:[`${s}Thumbnail`]}))}
		${e(m,()=>l`<span class="${s}Label">${m}</span>`)}
		${e(!c&&!u,()=>p({size:"m",isChecked:n,ariaLabelledby:$,id:i,customClasses:[`${s}Selector`]}))}
		${e(u,()=>o({iconName:"ChevronRight100",setName:"ui",customClasses:[`${s}ChildIndicator`]}))}
	</li>
`,v=({rootClass:s="spectrum-AssetList",items:t=[],customClasses:a=[],id:r=k("assetlist")}={},m={})=>l`
		<ul
			class=${d({[s]:!0,...a.reduce((i,$)=>({...i,[$]:!0}),{})})}
			id=${g(r)}
		>
			${h(t,{callback:R,args:{rootClass:`${s}-item`},context:m})}
		</ul>
	`;export{v as T};
