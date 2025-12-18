import{a as l,n as o,g as v}from"./decorator-DlLJAwnS.js";import{x as e}from"./lit-element-Cr8ugfRm.js";import{o as s}from"./if-defined-C5sRMNk0.js";const F=({rootClass:a="spectrum-Avatar",image:r="example-ava.png",altText:t,isDisabled:u=!1,isFocused:m=!1,size:d=700,hasLink:c,id:$=v("avatar"),customClasses:n=[]}={},f={})=>{const{updateArgs:i}=f;return e`
		<div
			class=${l({[a]:!0,[`${a}--size${d}`]:!0,"is-disabled":u,"is-focused":m,...n.reduce((p,g)=>({...p,[g]:!0}),{})})}
			id=${s($)}
			@focusin=${function(){i({isFocused:!0})}}
			@focusout=${function(){i({isFocused:!1})}}
		>
			${o(c,()=>e`
					<a class="spectrum-Avatar-link" href="#">
						<img class="${a}-image" data-chromatic="ignore" src=${r} alt=${s(t)} />
					</a>
					`)}
			${o(!c,()=>e`
					<img class="${a}-image" data-chromatic="ignore" src=${r} alt=${s(t)} />
				`)}
		</div>
	`};export{F as T};
