import{T as B}from"./template-Dgallghr.js";import{T as D}from"./template-CZKJ_9KO.js";import{T as O}from"./template-DeUxfKRv.js";import{T as S}from"./template-_hQ6WWkb.js";import{R as q,a as o,s as p,n,r as v,g as w}from"./template-C7mrcesf.js";import{k as a}from"./lit-element-C96egxJg.js";const I=({rootClass:e="spectrum-Dialog",isDismissible:l=!1,hasDivider:s=!0,isOpen:$=!0,showModal:g=!1,hasFooter:T=!1,heading:c,content:y=[],footer:r=[],customClasses:k=[],id:b=w("dialog"),size:m="medium",layout:t,heroImageUrl:f,customStyles:h={}}={},i={})=>{const{updateArgs:A}=i,R=()=>A({isOpen:!$}),u=a`
		<div
			class=${q({[e]:!0,[`${e}--dismissable`]:l&&["fullscreen","fullscreenTakeover"].every(d=>t!==d),[`${e}--${t}`]:typeof t<"u",[`${e}--${m}`]:typeof m<"u",[`${e}--noDivider`]:!s,...k.reduce((d,j)=>({...d,[j]:!0}),{})})}
			id=${o(b)}
			role="dialog"
			tabindex="-1"
			aria-modal="true"
			style=${o(p(h))}
		>
			<div class="${e}-grid">
				${n(typeof f<"u",()=>a`
						<div 
							class="spectrum-Dialog-hero"
							style="background-image:url(${f})">
						</div>
					`)}
				${n(c,()=>a`
					<h1 class="${e}-heading">${c}</h1>
				`)}
				${n(s,()=>O({horizontal:!0,customClasses:[`${e}-divider`]}))}
				<section class="${e}-content">
					${v(y)}
				</section>
				${n(T,()=>a`
						<footer class="${e}-footer" style=${p({"justify-content":"flex-end"})}>
							${n(typeof r<"u"&&Array.isArray(r)&&r.length>0,()=>v(r))}
							${n(!l,()=>a`
									${B({items:[{label:"Cancel",treatment:"outline",variant:"secondary"},{label:"Save",treatment:"fill",variant:"accent"}]},i)}
								`)}
						</footer>
					`)}
				${n(l&&t!=="fullscreen"&&t!=="fullscreenTakeover",()=>D({customClasses:[`${e}-closeButton`],onclick:R},i))}
			</div>
		</div>
	`;return g?a`
			${S({isOpen:$,content:[()=>u],variant:t},i)}
		`:u};export{I as T};
