import{R as l,n as o,g as v}from"./decorator-BtqfPG1l.js";import{k as e}from"./lit-element-C96egxJg.js";import{t as s}from"./if-defined-B5hOZ0d5.js";const k=({rootClass:a="spectrum-Avatar",image:t="example-ava.png",altText:r,isDisabled:u=!1,isFocused:m=!1,size:n=700,hasLink:c,id:d=v("avatar"),customClasses:$=[]}={},f={})=>{const{updateArgs:i}=f;return e`
		<div
			class=${l({[a]:!0,[`${a}--size${n}`]:!0,"is-disabled":u,"is-focused":m,...$.reduce((p,g)=>({...p,[g]:!0}),{})})}
			id=${s(d)}
			@focusin=${function(){i({isFocused:!0})}}
			@focusout=${function(){i({isFocused:!1})}}
		>
			${o(c,()=>e`
					<a class="spectrum-Avatar-link" href="#">
						<img class="${a}-image" data-chromatic="ignore" src=${t} alt=${s(r)} />
					</a>
					`)}
			${o(!c,()=>e`
					<img class="${a}-image" data-chromatic="ignore" src=${t} alt=${s(r)} />
				`)}
		</div>
	`};export{k as T};
