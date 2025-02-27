import{T as N}from"./template-CKQlC29v.js";import{R as A,s as o,n as B,g as R}from"./decorator-BliclrE4.js";import{T as r}from"./template-DcvgokMx.js";import{k as s}from"./lit-element-C96egxJg.js";import{t as d}from"./if-defined-B5hOZ0d5.js";const l=({rootClass:e="spectrum-PickerButton",id:u=R("pickerbutton"),size:t="m",label:n,position:c,iconSet:i="ui",iconName:f="ChevronDown",isDisabled:a=!1,isFocused:$=!1,isOpen:p=!1,isQuiet:x=!1,customClasses:y=[],isRounded:v=!1,customStyles:w={},onclick:g,tabindex:k}={},m={})=>{const{updateArgs:T}=m;return s`
		<button
			class=${A({[e]:!0,[`${e}--textuiicon`]:n&&i==="ui",[`${e}--uiicononly`]:!n&&i==="ui",[`${e}--icononly`]:!n&&i!=="ui",[`${e}--${c}`]:typeof c<"u",[`${e}--rounded`]:v,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u","is-disabled":a,"is-focused":$,"is-open":p&&!a,[`${e}--quiet`]:x,...y.reduce((h,I)=>({...h,[I]:!0}),{})})}
			style=${o(w)}
			id=${d(u)}
			aria-haspopup="listbox"
			?disabled=${a}
			@click=${g??function(){a||T({isOpen:!p})}}
			tabindex=${d(k)}
		>
			<div class="${e}-fill">
				${B(n,()=>s`
					<span class="${e}-label is-placeholder">
						${n}
					</span>
				`)}
				${N({iconName:f??"ChevronDown",setName:i,size:t,customClasses:[`${e}-icon`]},m)}
			</div>
		</button>
	`},P=e=>s`
	<div
		style=${o({display:"flex",gap:"24px",flexWrap:"wrap"})}
	>
		<div
			style=${o({display:"flex",gap:"16px",flexDirection:"column",alignItems:"center",flexBasis:"80px"})}
		>
			${r({semantics:"detail",size:"s",content:["UI icon"],customStyles:{"white-space":"nowrap","--mod-detail-font-color":"var(--spectrum-seafoam-900)"}})}
			${l({...e,iconName:"ArrowDown100",iconSet:"ui"})}
		</div>
		<div
			style=${o({display:"flex",gap:"16px",flexDirection:"column",alignItems:"center",flexBasis:"80px"})}
		>
			${r({semantics:"detail",size:"s",content:["Workflow icon"],customStyles:{"white-space":"nowrap","--mod-detail-font-color":"var(--spectrum-seafoam-900)"}})}
			${l({...e,iconName:"Add",iconSet:"workflow"})}
		</div>
	</div>
`;export{P as C,l as T};
