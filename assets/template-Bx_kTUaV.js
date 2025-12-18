import{T as W}from"./template-B6nmLdiv.js";import{T as X}from"./template-x40ps2mj.js";import{T as Y}from"./template-Cug7zURX.js";import{C as t,a as w,o as Z,n as l,g as _}from"./decorator-DlLJAwnS.js";import{T as D}from"./template-CeLwEE-a.js";import{x as o}from"./lit-element-Cr8ugfRm.js";import{o as r}from"./if-defined-C5sRMNk0.js";const n=({rootClass:a="spectrum-Textfield",size:e="m",customClasses:q=[],customInputClasses:T=[],customIconClasses:E=[],customProgressCircleClasses:L=[],isInvalid:f=!1,isValid:m=!1,multiline:b=!1,grows:U=!1,isQuiet:G=!1,isFocused:H=!1,isDisabled:u=!1,isRequired:F=!1,isReadOnly:h=!1,isKeyboardFocused:Q=!1,isLoading:x=!1,displayLabel:O=!1,labelPosition:j="top",labelText:J,characterCount:v,iconName:p,iconSet:y,pattern:g,placeholder:B,name:k,helpText:K="",id:$=_("textfield"),value:S="",type:M="text",autocomplete:I=!0,onclick:P,customStyles:R={}}={},c={})=>{const{updateArgs:i}=c;return f?(p="Alert",y="workflow"):m&&(p="Checkmark",y="ui"),o`
		<div
			class=${w({[a]:!0,[`${a}--size${e==null?void 0:e.toUpperCase()}`]:typeof e<"u",[`${a}--multiline`]:b,[`${a}--grows`]:U,[`${a}--quiet`]:G,[`${a}--sideLabel`]:j==="side","is-invalid":f,"is-valid":m,"is-focused":H,"is-keyboardFocused":Q,"is-disabled":u,"is-readOnly":h,...q.reduce((s,d)=>({...s,[d]:!0}),{})})}
			style=${Z(R)}
			@click=${P}
			@focusin=${function(){i==null||i({isFocused:!0})}}
			@keyup=${function(s){var d;s.keyCode===9&&(s.target==this||((d=s.target)==null?void 0:d.parentNode)==this)&&(i==null||i({isKeyboardFocused:!0}),this.classList.add("is-keyboardFocused"))}}
			@focusout=${function(){i==null||i({isFocused:!1,isKeyboardFocused:!1}),this.classList.remove("is-keyboardFocused")}}
			id=${r($)}
		>
		${l(O,()=>W({size:e,label:J,isDisabled:u},c))}
		${l(typeof v<"u",()=>o`
			<span class="${a}-characterCount">${v}</span>`)}
		${l(p,()=>Y({size:e,iconName:p,setName:y,customClasses:[f||m?`${a}-validationIcon`:`${a}-icon`,...E]},c))}
		${l(b,()=>o`<textarea
				placeholder=${r(B)}
				name=${r(k)}
				id=${r($?`${$}-input`:void 0)}
				.value=${S}
				autocomplete=${r(I?void 0:"off")}
				?required=${F}
				?disabled=${u}
				?readonly=${h}
				pattern=${r(g)}
				class=${w({[`${a}-input`]:!0,...T.reduce((s,d)=>({...s,[d]:!0}),{})})}
			/>`,()=>o`<input
				type=${r(M)}
				placeholder=${r(B)}
				name=${r(k)}
				id=${r($?`${$}-input`:void 0)}
				.value=${S}
				autocomplete=${r(I?void 0:"off")}
				?required=${F}
				?disabled=${u}
				?readonly=${h}
				pattern=${r(g)}
				class=${w({[`${a}-input`]:!0,...T.reduce((s,d)=>({...s,[d]:!0}),{})})}
			/>`)}
		${l(x,()=>D({isIndeterminate:!0,size:"s",customClasses:L}))}
		${l(K,()=>X({text:K,variant:f?"negative":"neutral",size:e,hideIcon:!0,isDisabled:u},c))}
	</div>
	`},re=(a,e)=>t({direction:"column",withBorder:!1,content:o`
		${t({withBorder:!1,heading:"Description",content:n({...a,isRequired:!0,labelText:"Username",value:"lisawilson24",helpText:"Username must be at least 8 characters."},e)},e)}
		${t({withBorder:!1,heading:"Error message",content:n({...a,isRequired:!0,labelText:"Email address",value:"abc@adobe.com",helpText:"Enter your email address",isInvalid:!0},e)},e)}
	`},e),te=(a,e)=>t({direction:"row",withBorder:!1,wrapperStyles:{rowGap:"12px"},content:o`
		${t({withBorder:!1,containerStyles:{gap:"8px"},heading:"Default",content:n(a,e)},e)}
		${t({withBorder:!1,containerStyles:{gap:"8px"},heading:"Invalid",content:n({...a,isInvalid:!0},e)},e)}
		${t({withBorder:!1,containerStyles:{gap:"8px"},heading:"Focused",content:n({...a,isFocused:!0},e)},e)}
		${t({withBorder:!1,containerStyles:{gap:"8px"},heading:"Invalid, focused",content:n({...a,isInvalid:!0,isFocused:!0},e)},e)}
	`},e),ie=(a,e)=>t({direction:"column",withBorder:!1,wrapperStyles:{rowGap:"12px"},content:o`
		${t({withBorder:!1,containerStyles:{gap:"8px"},heading:"Default",content:n({...a,isKeyboardFocused:!0},e)},e)}
		${t({withBorder:!1,containerStyles:{gap:"8px"},heading:"Quiet",content:n({...a,isKeyboardFocused:!0,isQuiet:!0},e)},e)}
	`},e);export{re as H,ie as K,n as T,te as a};
