import{T as W}from"./template-DTy_b55N.js";import{T as X}from"./template-VwUDRV6W.js";import{T as Y}from"./template-B52pacml.js";import{R as w,s as Z,n as l,g as _,C as r}from"./decorator-BtqfPG1l.js";import{T as D}from"./template-DblBPUvk.js";import{k as o}from"./lit-element-C96egxJg.js";import{t}from"./if-defined-B5hOZ0d5.js";const n=({rootClass:a="spectrum-Textfield",size:e="m",customClasses:q=[],customInputClasses:T=[],customIconClasses:E=[],customProgressCircleClasses:H=[],isInvalid:$=!1,isValid:m=!1,multiline:b=!1,grows:L=!1,isQuiet:U=!1,isFocused:G=!1,isDisabled:u=!1,isRequired:F=!1,isReadOnly:h=!1,isKeyboardFocused:Q=!1,isLoading:R=!1,displayLabel:O=!1,labelPosition:j="top",labelText:x,characterCount:v,iconName:p,iconSet:y,pattern:g,placeholder:k,name:B,helpText:K="",id:f=_("textfield"),value:S="",type:J="text",autocomplete:I=!0,onclick:M,customStyles:P={}}={},c={})=>{const{updateArgs:i}=c;return $?(p="Alert",y="workflow"):m&&(p="Checkmark",y="ui"),o`
		<div
			class=${w({[a]:!0,[`${a}--size${e==null?void 0:e.toUpperCase()}`]:typeof e<"u",[`${a}--multiline`]:b,[`${a}--grows`]:L,[`${a}--quiet`]:U,[`${a}--sideLabel`]:j==="side","is-invalid":$,"is-valid":m,"is-focused":G,"is-keyboardFocused":Q,"is-disabled":u,"is-readOnly":h,...q.reduce((s,d)=>({...s,[d]:!0}),{})})}
			style=${Z(P)}
			@click=${M}
			@focusin=${function(){i==null||i({isFocused:!0})}}
			@keyup=${function(s){var d;s.keyCode===9&&(s.target==this||((d=s.target)==null?void 0:d.parentNode)==this)&&(i==null||i({isKeyboardFocused:!0}),this.classList.add("is-keyboardFocused"))}}
			@focusout=${function(){i==null||i({isFocused:!1,isKeyboardFocused:!1}),this.classList.remove("is-keyboardFocused")}}
			id=${t(f)}
		>
		${l(O,()=>W({size:e,label:x,isDisabled:u},c))}
		${l(typeof v<"u",()=>o`
			<span class="${a}-characterCount">${v}</span>`)}
		${l(p,()=>Y({size:e,iconName:p,setName:y,customClasses:[$||m?`${a}-validationIcon`:`${a}-icon`,...E]},c))}
		${l(b,()=>o`<textarea
				placeholder=${t(k)}
				name=${t(B)}
				id=${t(f?`${f}-input`:void 0)}
				.value=${S}
				autocomplete=${t(I?void 0:"off")}
				?required=${F}
				?disabled=${u}
				?readonly=${h}
				pattern=${t(g)}
				class=${w({[`${a}-input`]:!0,...T.reduce((s,d)=>({...s,[d]:!0}),{})})}
			/>`,()=>o`<input
				type=${t(J)}
				placeholder=${t(k)}
				name=${t(B)}
				id=${t(f?`${f}-input`:void 0)}
				.value=${S}
				autocomplete=${t(I?void 0:"off")}
				?required=${F}
				?disabled=${u}
				?readonly=${h}
				pattern=${t(g)}
				class=${w({[`${a}-input`]:!0,...T.reduce((s,d)=>({...s,[d]:!0}),{})})}
			/>`)}
		${l(R,()=>D({isIndeterminate:!0,size:"s",customClasses:H}))}
		${l(K,()=>X({text:K,variant:$?"negative":"neutral",size:e,hideIcon:!0,isDisabled:u},c))}
	</div>
	`},te=(a,e)=>r({direction:"column",withBorder:!1,withHeading:!1,content:o`
		${r({withBorder:!1,heading:"Description",content:n({...a,isRequired:!0,labelText:"Username",value:"lisawilson24",helpText:"Username must be at least 8 characters."},e)},e)}
		${r({withBorder:!1,heading:"Error message",content:n({...a,isRequired:!0,labelText:"Email address",value:"abc@adobe.com",helpText:"Enter your email address",isInvalid:!0},e)},e)}
	`},e),re=(a,e)=>r({direction:"row",withBorder:!1,wrapperStyles:{rowGap:"12px"},content:o`
		${r({withBorder:!1,containerStyles:{gap:"8px"},heading:"Default",content:n(a,e)},e)}
		${r({withBorder:!1,containerStyles:{gap:"8px"},heading:"Invalid",content:n({...a,isInvalid:!0},e)},e)}
		${r({withBorder:!1,containerStyles:{gap:"8px"},heading:"Focused",content:n({...a,isFocused:!0},e)},e)}
		${r({withBorder:!1,containerStyles:{gap:"8px"},heading:"Invalid, focused",content:n({...a,isInvalid:!0,isFocused:!0},e)},e)}
	`},e),ie=(a,e)=>r({direction:"column",withBorder:!1,wrapperStyles:{rowGap:"12px"},content:o`
		${r({withBorder:!1,containerStyles:{gap:"8px"},heading:"Default",content:n({...a,isKeyboardFocused:!0},e)},e)}
		${r({withBorder:!1,containerStyles:{gap:"8px"},heading:"Quiet",content:n({...a,isKeyboardFocused:!0,isQuiet:!0},e)},e)}
	`},e);export{te as H,ie as K,n as T,re as a};
