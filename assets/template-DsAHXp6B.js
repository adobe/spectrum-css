import{T as F}from"./template-DKVEHtSM.js";import{g as I,o as u,n as w,a as L,r as O}from"./decorator-DlLJAwnS.js";import{T as B}from"./template-DQFWcFnW.js";import{x as n}from"./lit-element-Cr8ugfRm.js";import{o as h}from"./if-defined-C5sRMNk0.js";const M=({rootClass:a="spectrum-Popover",size:s="m",isOpen:f=!1,withTip:e=!1,position:r="top",customClasses:d=[],id:i=I("popover"),testId:W,triggerId:g=I("popover-trigger"),customStyles:z={},popoverWrapperStyles:l={},popoverHeight:k=142,popoverWidth:o=89,popoverAlignment:t={},skipAlignment:D=!1,trigger:m,content:E=[]}={},y={})=>{const{updateArgs:x}=y;if(document.addEventListener("DOMContentLoaded",function(){typeof k<"u"&&typeof o<"u"||setTimeout(()=>{const c=document.getElementById(i);if(!c)return;const b=c.getBoundingClientRect();if(!b)return;let $=!1;(k!==parseInt(b.height,10)||o!==parseInt(b.width,10))&&($=!0),$&&x({popoverWidth:parseInt(b.width,10),popoverHeight:parseInt(b.height,10)})},500)}),!D)switch(r){case"top":l["inline-size"]="var(--spectrum-popover-width)",t["inset-block-end"]="100%",t["inset-inline-start"]="0";break;case"top-left":t["inset-block-end"]="100%",t.left="0";break;case"top-right":t["inset-block-end"]="100%",t.right="0";break;case"top-start":t["inset-block-end"]="100%",t["inset-inline-start"]="0";break;case"top-end":t["inset-block-end"]="100%",t["inset-inline-end"]="0";break;case"bottom":l["inline-size"]="var(--spectrum-popover-width)",t["inset-block-start"]="100%",t["inset-inline-start"]="0";break;case"bottom-left":t["inset-block-start"]="100%",t.left="0";break;case"bottom-right":t["inset-block-start"]="100%",t.right="0";break;case"bottom-start":t["inset-block-start"]="100%",t["inset-inline-start"]="0";break;case"bottom-end":t["inset-block-start"]="100%",t["inset-inline-end"]="0";break;case"right":t.left="100%";break;case"right-top":t.left="100%",t.top="0";break;case"right-bottom":t.left="100%",t.bottom="0";break;case"left":t.right="100%";break;case"left-top":t.right="100%",t.top="0";break;case"left-bottom":t.right="100%",t.bottom="0";break;case"start":t["inset-inline-end"]="100%";break;case"start-top":t["inset-inline-end"]="100%",t.top="0";break;case"start-bottom":t["inset-inline-end"]="100%",t.bottom="0";break;case"end":t["inset-inline-start"]="100%";break;case"end-top":t["inset-inline-start"]="100%",t.top="0";break;case"end-bottom":t["inset-inline-start"]="100%",t.bottom="0";break}return n`
		<div style=${u({"--spectrum-popover-height":`${k}px`,"--spectrum-popover-width":`${o}px`,position:"relative",display:"inline-flex","align-items":"center","justify-content":"center",...l})}>
			${w(typeof m=="function",c=>m({...c,isSelected:f,isOpen:f,id:g,popupId:i,onclick:function(){x({isOpen:!f})}},y))}

			<div
				class=${L({[a]:!0,"is-open":f,[`${a}--size${s==null?void 0:s.toUpperCase()}`]:typeof s<"u",[`${a}--withTip`]:e,[`${a}--${r}`]:typeof r<"u",...d.reduce((c,b)=>({...c,[b]:!0}),{})})}
				style=${h(u({...t,...z}))}
				role="presentation"
				id=${h(i)}
				data-testid=${h(W??i)}
			>
				${O(E)}
				${e?r&&["top","bottom"].some(c=>r.startsWith(c))?n`<svg class="${a}-tip" viewBox="0 -0.5 16 9" width="10"><path class="${a}-tip-triangle" d="M-1,-1 8,8 17,-1"></svg>`:n`<svg class="${a}-tip" viewBox="0 -0.5 9 16" width="10"><path class="${a}-tip-triangle" d="M-1,-1 8,8 -1,17"></svg>`:""}
			</div>
		</div>
	`},U=(a,s)=>{var e,r;const f=((r=(e=s==null?void 0:s.argTypes)==null?void 0:e.position)==null?void 0:r.options)??[];return n`
		<div
			style=${u({display:"grid",gap:"16px","row-gap":"32px","grid-template-columns":"repeat(auto-fit, minmax(232px, 1fr))","max-width":"1000px"})}
		>
			${f.map(d=>{let i;return(d.startsWith("start")||d.startsWith("end"))&&(i="Changes side with text direction (like a logical property)"),(d.startsWith("left")||d.startsWith("right"))&&(i="Text direction does not affect the position"),n`
					<div>
						${B({semantics:"detail",size:"l",content:[d],customClasses:["chromatic-ignore"]},s)}
						<div style=${u({padding:"16px","block-size":"100px","inline-size":"200px",border:"1px solid var(--spectrum-gray-200)","border-radius":"4px"})}>
							<div style="position: relative">
								${M({...a,position:d,isOpen:!0,trigger:()=>null},s)}
							</div>
						</div>
						${w(i,()=>n`
							${B({semantics:"body",size:"s",content:[n`<sup>*</sup> ${i}`],customClasses:["chromatic-ignore"]},s)}
						`)}
					</div>
				`})}
		</div>
	`},V=(a,s)=>n`
	<div style="min-width: 300px;">
		${F({label:"Source",customStyles:{width:"100px",display:"block"}},s)}
		${M({...a,position:"bottom-start",isOpen:!0,trigger:()=>null},s)}
	</div>
`;export{V as F,M as T,U as a};
