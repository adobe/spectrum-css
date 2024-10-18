import{T as P}from"./template-Mj7VCTJo.js";import{T as Q}from"./template-CNHi6PLw.js";import{R as c,s as R,a as e,n as r,g as W}from"./template-C7mrcesf.js";import{T as X}from"./template-ww5XkWg8.js";import{k as m}from"./lit-element-C96egxJg.js";const N=({rootClass:$="spectrum-Textfield",size:t="m",customClasses:h=[],customInputClasses:T=[],customIconClasses:q=[],customProgressCircleClasses:A=[],isInvalid:s=!1,isValid:l=!1,multiline:k=!1,grows:K=!1,isQuiet:L=!1,isFocused:U=!1,isDisabled:n=!1,isRequired:y=!1,isReadOnly:i=!1,isKeyboardFocused:j=!1,isLoading:B=!1,displayLabel:E=!1,labelPosition:G="top",labelText:H,iconName:d,iconSet:p,pattern:b,placeholder:F,name:g,id:u=W("textfield"),value:v="",type:I="text",autocomplete:w=!0,onclick:J,customStyles:M={}}={},o={})=>{const{updateArgs:x}=o;return s?(d="Alert",p="workflow"):l&&(d="Checkmark",p="ui"),m`
		<div
			class=${c({[$]:!0,[`${$}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",[`${$}--multiline`]:k,[`${$}--grows`]:K,[`${$}--quiet`]:L,[`${$}--sideLabel`]:G==="side","is-invalid":s,"is-valid":l,"is-focused":U,"is-keyboardFocused":j,"is-disabled":n,"is-readOnly":i,...h.reduce((a,f)=>({...a,[f]:!0}),{})})}
			style=${R(M)}
			@click=${J}
			@focusin=${function(){x({isFocused:!0,isKeyboardFocused:!0})}}
			@focusout=${function(){x({isFocused:!1,isKeyboardFocused:!1})}}
			id=${e(u)}
		>
		${r(E,()=>P({size:t,label:H},o))}
		${r(d,()=>Q({size:t,iconName:d,setName:p,customClasses:[s||l?`${$}-validationIcon`:`${$}-icon`,...q]},o))}
		${r(k,()=>m`<textarea
				placeholder=${e(F)}
				name=${e(g)}
				id=${e(u?`${u}-input`:void 0)}
				.value=${v}
				autocomplete=${e(w?void 0:"off")}
				?required=${y}
				?disabled=${n}
				?readonly=${i}
				pattern=${e(b)}
				class=${c({[`${$}-input`]:!0,...T.reduce((a,f)=>({...a,[f]:!0}),{})})}
			/>`,()=>m`<input
				type=${e(I)}
				placeholder=${e(F)}
				name=${e(g)}
				id=${e(u?`${u}-input`:void 0)}
				.value=${v}
				autocomplete=${e(w?void 0:"off")}
				?required=${y}
				?disabled=${n}
				?readonly=${i}
				pattern=${e(b)}
				class=${c({[`${$}-input`]:!0,...T.reduce((a,f)=>({...a,[f]:!0}),{})})}
			/>`)}
		${r(B,()=>X({isIndeterminate:!0,size:"s",customClasses:A}))}
	</div>
	`};export{N as T};
