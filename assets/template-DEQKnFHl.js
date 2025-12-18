import{C as x,a as y,o as k,g as w}from"./decorator-DlLJAwnS.js";import{x as f}from"./lit-element-Cr8ugfRm.js";import{o as I}from"./if-defined-C5sRMNk0.js";const c=({rootClass:e="spectrum-Radio",size:t="m",label:m,name:l,isEmphasized:o=!1,isChecked:r=!1,isDisabled:d=!1,isReadOnly:n=!1,id:i=w("radio"),customClasses:$=[],customStyles:b={}}={},h={})=>{const{updateArgs:p}=h,u=typeof i<"u"?i+="-input":typeof l<"u"?i=l+"-input":"radio-0";return f`
		<div
			class=${y({[e]:!0,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",[`${e}--emphasized`]:o,"is-readOnly":n,...$.reduce((a,s)=>({...a,[s]:!0}),{})})}
			style=${k(b)}
		>
			<input
				type="radio"
				name=${l}
				class="${e}-input"
				id=${u}
				?checked=${r}
				?disabled=${d}
				aria-disabled=${I(n?"true":void 0)}
				@change=${a=>{d||n||p==null||p({isChecked:a.target.checked})}}
				@click=${a=>{n&&a.preventDefault()}}
			/>
			<span class="${e}-button ${e}-button--sizeS"></span>
			<label class="${e}-label ${e}-label--sizeS" for=${u}
				>${m}</label
			>
		</div>
	`},T=(e,t)=>x({withBorder:!1,direction:"column",wrapperStyles:{rowGap:"0px",alignItems:"flex-start"},content:f`
		${c({...e,label:"Example label",name:"radio-example-"+((e==null?void 0:e.name)??"default")},t)}
		${c({...e,isChecked:!0,label:"Initially selected radio button that has wrapping label text",customStyles:{"max-width":"220px"},name:"radio-example-"+((e==null?void 0:e.name)??"default")},t)}
	`},t);export{T as B,c as T};
