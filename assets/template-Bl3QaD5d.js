import{T as B}from"./template-q7G3Crkc.js";import{T as D}from"./template-CAvAu-e_.js";import{T as O}from"./template-CgRUgpNy.js";import{T as S}from"./template-C6FhnKVB.js";import{R as q,s as u,n as t,r as p,g as w}from"./decorator-BliclrE4.js";import{k as r}from"./lit-element-C96egxJg.js";import{t as v}from"./if-defined-B5hOZ0d5.js";const K=({rootClass:e="spectrum-Dialog",isDismissible:$=!1,hasDivider:c=!0,isOpen:s=!0,showModal:g=!1,hasFooter:T=!1,heading:m,content:y=[],footer:a=[],customClasses:k=[],id:b=w("dialog"),size:i="m",layout:n,heroImageUrl:f,customStyles:h={}}={},l={})=>{const{updateArgs:A}=l,R=function(){A({isOpen:!s})},o=r`
		<div
			class=${q({[e]:!0,[`${e}--dismissable`]:$&&["fullscreen","fullscreenTakeover"].every(d=>n!==d),[`${e}--${n}`]:typeof n<"u",[`${e}--size${i==null?void 0:i.toUpperCase()}`]:typeof i<"u",[`${e}--noDivider`]:!c,...k.reduce((d,j)=>({...d,[j]:!0}),{})})}
			id=${v(b)}
			role="dialog"
			tabindex="-1"
			aria-modal="true"
			style=${v(u(h))}
		>
			<div class="${e}-grid">
				${t(typeof f<"u",()=>r`
						<div
							class="spectrum-Dialog-hero"
							style="background-image:url(${f})">
						</div>
					`)}
				${t(m,()=>r`
					<h1 class="${e}-heading">${m}</h1>
				`)}
				${t(c,()=>O({horizontal:!0,customClasses:[`${e}-divider`]}))}
				<section class="${e}-content">
					${p(y)}
				</section>
				${t(T,()=>r`
						<footer class="${e}-footer" style=${u({"justify-content":"flex-end"})}>
							${t(typeof a<"u"&&Array.isArray(a)&&a.length>0,()=>p(a))}
							${t(!$,()=>r`
									${B({items:[{label:"Cancel",treatment:"outline",variant:"secondary"},{label:"Save",treatment:"fill",variant:"accent"}]},l)}
								`)}
						</footer>
					`)}
				${t($&&n!=="fullscreen"&&n!=="fullscreenTakeover",()=>D({customClasses:[`${e}-closeButton`],onclick:R},l))}
			</div>
		</div>
	`;return g?r`
			${S({isOpen:s,content:[()=>o],variant:n},l)}
		`:o};export{K as T};
