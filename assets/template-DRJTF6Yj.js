import{T as B}from"./template-5JNq6ium.js";import{T as D}from"./template-CvXlXRC5.js";import{T as O}from"./template-DB9Qk6ko.js";import{T as R}from"./template-C-uWPfct.js";import{a as S,n,r as p,g as q,o as u}from"./decorator-DlLJAwnS.js";import{x as r}from"./lit-element-Cr8ugfRm.js";import{o as v}from"./if-defined-C5sRMNk0.js";const K=({rootClass:e="spectrum-Dialog",isDismissible:l=!1,hasDivider:c=!0,isOpen:m=!0,showModal:g=!1,hasFooter:T=!1,heading:f,content:y=[],footer:a=[],customClasses:k=[],id:b=q("dialog"),size:$="m",layout:t,heroImageUrl:o,customStyles:A={}}={},i={})=>{const{updateArgs:h}=i,j=function(){h({isOpen:!m})},s=r`
		<div
			class=${S({[e]:!0,[`${e}--dismissable`]:l&&["fullscreen","fullscreenTakeover"].every(d=>t!==d),[`${e}--${t}`]:typeof t<"u",[`${e}--size${$==null?void 0:$.toUpperCase()}`]:typeof $<"u",[`${e}--noDivider`]:!c,...k.reduce((d,x)=>({...d,[x]:!0}),{})})}
			id=${v(b)}
			role="dialog"
			tabindex="-1"
			aria-modal="true"
			style=${v(u(A))}
		>
			<div class="${e}-grid">
				${n(typeof o<"u",()=>r`
						<div
							class="spectrum-Dialog-hero"
							style="background-image:url(${o})">
						</div>
					`)}
				${n(f,()=>r`
					<h1 class="${e}-heading">${f}</h1>
				`)}
				${n(c,()=>O({customClasses:[`${e}-divider`]}))}
				<section class="${e}-content">
					${p(y)}
				</section>
				${n(T,()=>r`
						<footer class="${e}-footer" style=${u({"justify-content":"flex-end"})}>
							${n(typeof a<"u"&&Array.isArray(a)&&a.length>0,()=>p(a))}
							${n(!l,()=>r`
									${B({items:[{label:"Cancel",treatment:"outline",variant:"secondary"},{label:"Save",treatment:"fill",variant:"accent"}]},i)}
								`)}
						</footer>
					`)}
				${n(l&&t!=="fullscreen"&&t!=="fullscreenTakeover",()=>D({customClasses:[`${e}-closeButton`],onclick:j},i))}
			</div>
		</div>
	`;return g?r`
			${R({isOpen:m,content:[()=>s],variant:t},i)}
		`:s};export{K as T};
