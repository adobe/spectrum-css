import{R as p,a as e,n as u,g as v}from"./template-C7mrcesf.js";import{k as s}from"./lit-element-C96egxJg.js";const h=({rootClass:a="spectrum-Avatar",image:t="example-ava.png",altText:c,isDisabled:n=!1,isFocused:o=!1,size:d=700,hasLink:r,id:m=v("avatar"),customClasses:$=[]}={},f={})=>{const{updateArgs:i}=f;return s`
		<div
			class=${p({[a]:!0,[`${a}--size${d}`]:!0,"is-disabled":n,"is-focused":o,...$.reduce((g,l)=>({...g,[l]:!0}),{})})}
			id=${e(m)}
			@focusin=${function(){i({isFocused:!0})}}
			@focusout=${function(){i({isFocused:!1})}}
		>
			${u(r,()=>s`
					<a class="spectrum-Avatar-link" href="#">
						<img class="${a}-image" data-chromatic="ignore" src=${t} alt=${e(c)} />
					</a>
					`)}
			${u(!r,()=>s`
					<img class="${a}-image" data-chromatic="ignore" src=${t} alt=${e(c)} />
				`)}
		</div>
	`};export{h as T};
