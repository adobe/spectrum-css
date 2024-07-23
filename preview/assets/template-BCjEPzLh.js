import{r as I}from"./utilities-BisrhIqU.js";import{Template as O}from"./template-Df-YB4AQ.js";import"./lit-element-CJjJlyWZ.js";import{x as d}from"./lit-html-BdGv-Ldy.js";import{a as R}from"./class-map-sTkR_Npl.js";import{o as y}from"./if-defined-Bo9G1hLT.js";import{o as h}from"./style-map-yx2CMG_J.js";import{n as D}from"./when-BR7zwNJC.js";const{useArgs:T}=__STORYBOOK_MODULE_PREVIEW_API__,_=({rootClass:a="spectrum-Popover",size:i="m",isOpen:m=!1,withTip:r=!1,position:t="top",customClasses:p=[],id:o="popover-1",testId:E,triggerId:b="trigger",customStyles:P={},trigger:W,content:B=[]}={},C={})=>{const[,L]=T(),{globals:M={}}=C,w=M.textDir??"ltr",$=o==="popover-nested"||o==="popover-nested-2",k=()=>{if($||!m||!t)return;const v=document.querySelector(`#${b}`),e=document.querySelector(`#${o}`);if(!v||!e)return;const s=v.getBoundingClientRect(),g=[],S=(s.left+s.right)/2,A=(s.top+s.bottom)/2,c=e.offsetWidth??0,f=e.offsetHeight??0;let n,u,l="+ 0px",x="+ 0px";(t.startsWith("top")||t.startsWith("bottom"))&&(n=S-(c>0?c/2:c)),(t.includes("left")||t.includes("right")||t.startsWith("start")||t.startsWith("end"))&&(u=A-(f>0?f/2:f)),t.startsWith("top")?(u=s.top-f,x=r?"- (var(--spectrum-popover-pointer-height) + var(--spectrum-popover-animation-distance) - 1px)":"- var(--spectrum-popover-animation-distance)"):t.startsWith("bottom")?(u=s.bottom,x="+ (var(--spectrum-popover-animation-distance))"):t.includes("left")?w=="rtl"?(n=s.right,l=r?"+ 0px":"+ var(--spectrum-popover-animation-distance)"):(n=s.left-c,l=r?"- ((var(--spectrum-popover-pointer-width) / 2) + var(--spectrum-popover-animation-distance) - 2px)":"- var(--spectrum-popover-animation-distance)"):t.includes("right")?w=="rtl"?(n=s.left-c,l=r?"- ((var(--spectrum-popover-pointer-width) / 2) + var(--spectrum-popover-animation-distance) - 2px)":"- var(--spectrum-popover-animation-distance)"):(n=s.right,l=r?"+ 0px":"+ var(--spectrum-popover-animation-distance)"):t.includes("start")?(n=s.left-c,l=r?"- ((var(--spectrum-popover-pointer-width) / 2) + var(--spectrum-popover-animation-distance) - 2px)":"- var(--spectrum-popover-animation-distance)"):t.includes("end")&&(n=s.right,l=r?"+ 0px":"+ var(--spectrum-popover-animation-distance)"),n&&g.push(`translateX(calc(var(--flow-direction) * calc(${parseInt(n,10)}px ${l})))`),u&&g.push(`translateY(calc(${u}px ${x}))`),g.length>0&&(e.style.transform=g.join(" ")),t==="top-start"||t==="bottom-start"?(e.style["inset-inline-start"]="calc("+c/2+"px - var(--spectrum-popover-pointer-edge-offset))",e.style["inset-block-start"]="0px"):t==="top-end"||t==="bottom-end"?(e.style["inset-inline-start"]="calc(-1 *"+c/2+"px + var(--spectrum-popover-pointer-edge-offset))",e.style["inset-block-start"]="0px"):t==="left-top"||t==="right-top"||t==="start-top"||t==="end-top"?(e.style["inset-block-start"]="calc("+f/2+"px - var(--spectrum-popover-pointer-edge-offset))",e.style["inset-inline-start"]="0px"):t==="left-bottom"||t==="right-bottom"||t==="start-bottom"||t==="end-bottom"?(e.style["inset-block-start"]="calc(-1 *"+f/2+"px + var(--spectrum-popover-pointer-edge-offset))",e.style["inset-inline-start"]="0px"):(e.style["inset-inline-start"]="0px",e.style["inset-block-start"]="0px")};return window.addEventListener("DOMContentLoaded",()=>{setTimeout(k,100)}),window.addEventListener("resize",()=>{setTimeout(k,100)}),d`
		${D(typeof W=="function",()=>W({isSelected:$??m,isOpen:$??!0,id:b,popupId:o,onclick:()=>{L({isOpen:!m})}}))}

		<div
			class=${R({[a]:!0,"is-open":m,[`${a}--size${i==null?void 0:i.toUpperCase()}`]:typeof i<"u",[`${a}--withTip`]:r,[`${a}--${t}`]:typeof t<"u",...p.reduce((v,e)=>({...v,[e]:!0}),{})})}
			style=${y(h(P))}
			role="presentation"
			id=${y(o)}
			data-testid=${y(E??o)}
		>
			${I(B)}
			${r?t&&["top","bottom"].some(v=>t.startsWith(v))?d`<svg class="${a}-tip" viewBox="0 -0.5 16 9" width="10"><path class="${a}-tip-triangle" d="M-1,-1 8,8 17,-1"></svg>`:d`<svg class="${a}-tip" viewBox="0 -0.5 9 16" width="10"><path class="${a}-tip-triangle" d="M-1,-1 8,8 -1,17"></svg>`:""}
		</div>
	`},K=(a,i)=>{var r,t;const m=((t=(r=i==null?void 0:i.argTypes)==null?void 0:r.position)==null?void 0:t.options)??[];return d`
		<div style=${h({display:window.isChromatic()?"none":"contents"})}>
			${_(a,i)}
		</div>
		<div style=${h({display:window.isChromatic()?"flex":"none","flex-direction":"column","align-items":"flex-start"})} class="spectrum-Typography">
			${m.map(p=>{let o;return(p.startsWith("start")||p.startsWith("end"))&&(o="Changes side with text direction (like a logical property)"),(p.startsWith("left")||p.startsWith("right"))&&(o="Text direction does not affect the position"),d`
					<div>
						${O({semantics:"heading",size:"s",content:[p],customClasses:["chromatic-ignore"]})}
						<div style=${h({padding:"16px","block-size":"200px","inline-size":"200px",border:"1px solid var(--spectrum-gray-200)","border-radius":"4px"})}>
							<div style="position: relative">
								${_({...a,position:p,isOpen:!0,trigger:()=>null},i)}
							</div>
						</div>
						${D(o,()=>d`
							${O({semantics:"body",size:"s",content:[d`<sup>*</sup> ${o}`],customClasses:["chromatic-ignore"]})}
						`)}
					</div>
				`})}
		</div>
	`};export{_ as T,K as V};
