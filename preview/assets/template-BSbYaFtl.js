import{T as h}from"./template-CNHi6PLw.js";import{R as I,a as t,s as T,n as A,g as R,C as i}from"./template-C7mrcesf.js";import{k as c}from"./lit-element-C96egxJg.js";const l=({rootClass:e="spectrum-Checkbox",size:a="m",label:$,isChecked:m=!1,isEmphasized:p=!1,isIndeterminate:f=!1,isDisabled:d=!1,isInvalid:b=!1,isReadOnly:r=!1,title:k,value:w,id:o=R("checkbox"),ariaLabelledby:y,customStyles:B={},customClasses:C=[]}={},u={})=>{const{updateArgs:D}=u;let n="75";switch(a){case"s":n="50";break;case"l":n="100";break;case"xl":n="200";break;default:n="75"}return c`
		<label
			class=${I({[e]:!0,[`${e}--size${a==null?void 0:a.toUpperCase()}`]:typeof a<"u",[`${e}--emphasized`]:p,"is-indeterminate":f,"is-disabled":d||r,"is-invalid":b,"is-readOnly":r,...C.reduce((N,v)=>({...N,[v]:!0}),{})})}
			id=${t(o)}
			style=${T(B)}
		>
			<input
				type="checkbox"
				class="${e}-input"
				aria-labelledby=${t(y)}
				?checked=${m}
				?disabled=${d||r}
				title=${t(k)}
				value=${t(w)}
				@change=${function(){d||D({isChecked:!m})}}
				id=${t(o?`${o}-input`:void 0)}
			/>
			<span class="${e}-box">
				${h({size:a,iconName:`Checkmark${n}`,setName:"ui",customClasses:[`${e}-checkmark`]},u)}
				${h({size:a,iconName:`Dash${n}`,setName:"ui",customClasses:[`${e}-partialCheckmark`]},u)}
			</span>
			${A($,()=>c`<span class="${e}-label">${$}</span>`)}
		</label>
	`},s=(e,a)=>i({direction:"column",withBorder:!1,content:c`
		${l({...e,context:a,iconName:void 0})}
		${l({...e,context:a,isChecked:!0})}
		${l({...e,context:a,isIndeterminate:!0})}
		${l({...e,context:a,isDisabled:!0})}
		${l({...e,context:a,label:"Checkbox with a long label that should wrap.",customStyles:{"max-inline-size":"200px"}})}
	`}),S=(e,a)=>i({withBorder:!1,content:c`
		${i({withBorder:!1,direction:"column",heading:"Default",content:s(e,a)})}
		${i({withBorder:!1,direction:"column",heading:"Invalid",content:s({...e,isInvalid:!0},a)})}
		${i({withBorder:!1,direction:"column",heading:"Disabled",content:s({...e,isDisabled:!0},a)})}
		${i({withBorder:!1,direction:"column",heading:"Read-only",content:s({...e,isReadOnly:!0},a)})}
	`});export{S as A,s as D,l as T};
