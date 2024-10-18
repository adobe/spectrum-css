import{R as x,s,a as w,g as k,C as I}from"./template-C7mrcesf.js";import{k as u}from"./lit-element-C96egxJg.js";const p=({rootClass:e="spectrum-Radio",size:t="m",label:o,name:d,isEmphasized:f=!1,isChecked:n=!1,isDisabled:l=!1,isReadOnly:c=!1,id:a=k("radio"),customClasses:m=[],customStyles:$={}}={},b={})=>{const{updateArgs:y}=b,i=typeof a<"u"?a+="-input":typeof d<"u"?a=d+"-input":"radio-0";return u`
		<div
			class=${x({[e]:!0,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",[`${e}--emphasized`]:f,"is-readOnly":c,...m.reduce((h,r)=>({...h,[r]:!0}),{})})}
			style=${s($)}
			id=${w(a)}
		>
			<input
				type="radio"
				name=${d}
				class="${e}-input"
				id=${i}
				?checked=${n}
				?disabled=${l}
				@change=${function(){l||y({isChecked:!n})}}
			/>
			<span class="${e}-button ${e}-button--sizeS"></span>
			<label class="${e}-label ${e}-label--sizeS" for=${i}
				>${o}</label
			>
		</div>
	`},B=(e,t)=>I({withBorder:!1,direction:"column",wrapperStyles:{rowGap:"0px",alignItems:"flex-start"},content:u`
		${p({...e,label:"Example label",id:"radio-1-"+((e==null?void 0:e.id)??"default"),name:"radio-example-"+((e==null?void 0:e.name)??"default")},t)}
		${p({...e,isChecked:!0,label:"Initially selected radio button that has wrapping label text",customStyles:{"max-width":"220px"},id:"radio-2-"+((e==null?void 0:e.id)??"default"),name:"radio-example-"+((e==null?void 0:e.name)??"default")},t)}
	`});export{B,p as T};
