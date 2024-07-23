import{T as p}from"./template-BSRXx7Ch.js";import{T as u}from"./template-D5ShUZ_q.js";import{V as T,r as h}from"./utilities-BisrhIqU.js";import"./lit-element-CJjJlyWZ.js";import{x as $}from"./lit-html-BdGv-Ldy.js";import{a as f}from"./class-map-sTkR_Npl.js";import{o as A}from"./if-defined-Bo9G1hLT.js";import{n as t}from"./when-BR7zwNJC.js";const g=({rootClass:s="spectrum-AssetList-item",image:e,iconName:m,label:i,checkboxId:a,ariaLabelledby:r,isNavigated:c=!1,isSelectable:l=!1,isSelected:n=!1,isBranch:o=!1,onclick:d=()=>{}})=>$`
	<li
		class=${f({[s]:!0,"is-selectable":l,"is-selected":n,"is-branch":o,"is-navigated":c})}
		@click=${d}
		tabindex="0"
	>
		${t(l,()=>p({size:"m",isChecked:n,ariaLabelledby:r,id:a,customClasses:[`${s}Selector`]}))}
		${t(e,()=>$`<img src=${e} class="${s}Thumbnail" alt="asset image thumbnail" />`)}
		${t(m,()=>u({iconName:m,customClasses:[`${s}Thumbnail`]}))}
		${t(i,()=>$`<span class="${s}Label">${i}</span>`)}
		${t(!l&&!o,()=>p({size:"m",isChecked:n,ariaLabelledby:r,id:a,customClasses:[`${s}Selector`]}))}
		${t(o,()=>u({iconName:"ChevronRight100",customClasses:[`${s}ChildIndicator`]}))}
	</li>
`,L=({rootClass:s="spectrum-AssetList",items:e=[],customClasses:m=[],id:i}={},a={})=>$`
		<ul
			class=${f({[s]:!0,...m.reduce((r,c)=>({...r,[c]:!0}),{})})}
			id=${A(i)}
		>
			${h(e,{callback:g,args:{rootClass:`${s}-item`},context:a})}
		</ul>
	`,I=T({Template:L});export{I as A,L as T};
