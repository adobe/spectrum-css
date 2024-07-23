import{T as V}from"./template-D7lOzDBB.js";import{T as j}from"./template-D5ShUZ_q.js";import"./decorator-Dl7o6wQR.js";import{V as B}from"./utilities-BisrhIqU.js";import{T as J}from"./template-BTVRUgwL.js";import"./lit-element-CJjJlyWZ.js";import{x as f}from"./lit-html-BdGv-Ldy.js";import{a as c}from"./class-map-sTkR_Npl.js";import{o as e}from"./if-defined-Bo9G1hLT.js";import{o as M}from"./style-map-yx2CMG_J.js";import{n as l}from"./when-BR7zwNJC.js";const O=({rootClass:t="spectrum-Textfield",size:a="m",customClasses:F=[],customInputClasses:b=[],customIconClasses:L=[],customProgressCircleClasses:U=[],isInvalid:d=!1,isValid:n=!1,multiline:T=!1,grows:k=!1,isQuiet:w=!1,isFocused:K=!1,isDisabled:o=!1,isRequired:g=!1,isReadOnly:m=!1,isKeyboardFocused:W=!1,isLoading:I=!1,displayLabel:A=!1,labelPosition:D="top",labelText:R,iconName:r,iconSet:p,pattern:v,placeholder:y,name:q,id:i,value:x="",type:E="text",autocomplete:H=!0,onclick:G,customStyles:P={}}={},$={})=>{const{updateArgs:h}=$;return d?(r="Alert",p="workflow"):n&&(r="Checkmark",p="ui"),f`
		<div
			class=${c({[t]:!0,[`${t}--size${a==null?void 0:a.toUpperCase()}`]:typeof a<"u",[`${t}--multiline`]:T,[`${t}--grows`]:k,[`${t}--quiet`]:w,[`${t}--sideLabel`]:D==="side","is-invalid":d,"is-valid":n,"is-focused":K,"is-keyboardFocused":W,"is-disabled":o,"is-readOnly":m,...F.reduce((u,s)=>({...u,[s]:!0}),{})})}
			style=${M(P)}
			@click=${G}
			@focusin=${()=>{h({isFocused:!0,isKeyboardFocused:!0})}}
			@focusout=${()=>{h({isFocused:!1,isKeyboardFocused:!1})}}
			id=${e(i)}
		>
		${l(A,()=>V({size:a,label:R},$))}
		${l(r,()=>j({size:a,iconName:r,setName:p,customClasses:[d||n?`${t}-validationIcon`:`${t}-icon`,...L]},$))}
		${l(T,()=>f`<textarea
				placeholder=${e(y)}
				name=${e(q)}
				id=${e(i?`${i}-input`:void 0)}
				.value=${x}
				autocomplete=${e(H?void 0:"off")}
				?required=${g}
				?disabled=${o}
				?readonly=${m}
				pattern=${e(v)}
				class=${c({[`${t}-input`]:!0,...b.reduce((u,s)=>({...u,[s]:!0}),{})})}
			/>`,()=>f`<input
				type=${e(E)}
				placeholder=${e(y)}
				name=${e(q)}
				id=${e(i?`${i}-input`:void 0)}
				.value=${x}
				autocomplete=${e(H?void 0:"off")}
				?required=${g}
				?disabled=${o}
				?readonly=${m}
				pattern=${e(v)}
				class=${c({[`${t}-input`]:!0,...b.reduce((u,s)=>({...u,[s]:!0}),{})})}
			/>`)}
		${l(I,()=>J({isIndeterminate:!0,size:"s",customClasses:U}))}
	</div>
	`},ae=B({Template:O,testData:[{},{testHeading:"With field label",displayLabel:!0,labelText:"Username"},{testHeading:"With side label",displayLabel:!0,labelText:"Username",labelPosition:"side"},{testHeading:"With value",displayLabel:!0,labelText:"Username",value:"UsernameWiderThanInput@ReallyLongEmail.com"},{testHeading:"Text area",multiline:!0},{testHeading:"Text area with label",displayLabel:!0,labelText:"Username",multiline:!0},{testHeading:"Text area with value",displayLabel:!0,labelText:"Username",multiline:!0,value:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."}],stateData:[{testHeading:"Invalid",isInvalid:!0},{testHeading:"Valid",isInvalid:!0},{testHeading:"Focused",isFocused:!0},{testHeading:"Keyboard focused",isKeyboardFocused:!0},{testHeading:"Disabled",isDisabled:!0},{testHeading:"Required",isRequired:!0},{testHeading:"Read-only",isReadOnly:!0}]});export{O as T,ae as a};
