import{R as k,s as x,g as y,C as w}from"./decorator-BliclrE4.js";import{k as f}from"./lit-element-C96egxJg.js";import{t as I}from"./if-defined-B5hOZ0d5.js";const c=({rootClass:e="spectrum-Radio",size:t="m",label:m,name:l,isEmphasized:r=!1,isChecked:$=!1,isDisabled:d=!1,isReadOnly:n=!1,id:i=y("radio"),customClasses:o=[],customStyles:s={}}={},b={})=>{const{updateArgs:p}=b,u=typeof i<"u"?i+="-input":typeof l<"u"?i=l+"-input":"radio-0";return f`
		<div
			class=${k({[e]:!0,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",[`${e}--emphasized`]:r,"is-readOnly":n,...o.reduce((a,h)=>({...a,[h]:!0}),{})})}
			style=${x(s)}
		>
			<input
				type="radio"
				name=${l}
				class="${e}-input"
				id=${u}
				?checked=${$}
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
	`},T=(e,t)=>w({withBorder:!1,direction:"column",wrapperStyles:{rowGap:"0px",alignItems:"flex-start"},content:f`
		${c({...e,label:"Example label",name:"radio-example-"+((e==null?void 0:e.name)??"default")},t)}
		${c({...e,isChecked:!0,label:"Initially selected radio button that has wrapping label text",customStyles:{"max-width":"220px"},name:"radio-example-"+((e==null?void 0:e.name)??"default")},t)}
	`},t);export{T as B,c as T};
