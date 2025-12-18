import{T as N}from"./template-Cug7zURX.js";import{a as A,o as a,n as B,g as D}from"./decorator-DlLJAwnS.js";import{T as r}from"./template-DQFWcFnW.js";import{x as c}from"./lit-element-Cr8ugfRm.js";import{o as d}from"./if-defined-C5sRMNk0.js";const l=({rootClass:e="spectrum-PickerButton",id:u=D("pickerbutton"),size:t="m",label:i,position:p,iconSet:n="ui",iconName:f="ChevronDown",isDisabled:o=!1,isFocused:$=!1,isOpen:s=!1,isQuiet:x=!1,customClasses:y=[],isRounded:v=!1,customStyles:w={},onclick:g,tabindex:T}={},m={})=>{const{updateArgs:h}=m;return c`
		<button
			class=${A({[e]:!0,[`${e}--textuiicon`]:i&&n==="ui",[`${e}--uiicononly`]:!i&&n==="ui",[`${e}--icononly`]:!i&&n!=="ui",[`${e}--${p}`]:typeof p<"u",[`${e}--rounded`]:v,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u","is-disabled":o,"is-focused":$,"is-open":s&&!o,[`${e}--quiet`]:x,...y.reduce((k,I)=>({...k,[I]:!0}),{})})}
			style=${a(w)}
			id=${d(u)}
			aria-haspopup="listbox"
			?disabled=${o}
			@click=${g??function(){o||h({isOpen:!s})}}
			tabindex=${d(T)}
		>
			<div class="${e}-fill">
				${B(i,()=>c`
					<span class="${e}-label is-placeholder">
						${i}
					</span>
				`)}
				${N({iconName:f??"ChevronDown",setName:n,size:t,customClasses:[`${e}-icon`]},m)}
			</div>
		</button>
	`},R=e=>c`
	<div
		style=${a({display:"flex",gap:"24px",flexWrap:"wrap"})}
	>
		<div
			style=${a({display:"flex",gap:"16px",flexDirection:"column",alignItems:"center",flexBasis:"80px"})}
		>
			${r({semantics:"detail",size:"s",content:["UI icon"],customStyles:{"white-space":"nowrap","--mod-detail-font-color":"var(--spectrum-seafoam-900)"}})}
			${l({...e,iconName:"ArrowDown100",iconSet:"ui"})}
		</div>
		<div
			style=${a({display:"flex",gap:"16px",flexDirection:"column",alignItems:"center",flexBasis:"80px"})}
		>
			${r({semantics:"detail",size:"s",content:["Workflow icon"],customStyles:{"white-space":"nowrap","--mod-detail-font-color":"var(--spectrum-seafoam-900)"}})}
			${l({...e,iconName:"Add",iconSet:"workflow"})}
		</div>
	</div>
`;export{R as C,l as T};
