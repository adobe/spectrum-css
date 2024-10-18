import{T as E}from"./template-C8oSNaTT.js";import{s as u,n as R,R as F,a as h,r as L,g as I,T as B}from"./template-C7mrcesf.js";import{k as c}from"./lit-element-C96egxJg.js";const w=({rootClass:s="spectrum-Popover",size:a="m",isOpen:n=!1,withTip:e=!1,position:r="top",customClasses:d=[],id:i=I("popover"),testId:M,triggerId:W=I("popover-trigger"),customStyles:g={},popoverWrapperStyles:f={},popoverHeight:k=142,popoverWidth:o=89,popoverAlignment:t={},skipAlignment:z=!1,trigger:y,content:D=[]}={},m={})=>{const{updateArgs:x}=m;if(document.addEventListener("DOMContentLoaded",function(){typeof k<"u"&&typeof o<"u"||setTimeout(()=>{const l=document.getElementById(i).getBoundingClientRect();let $=!1;(k!==parseInt(l.height,10)||o!==parseInt(l.width,10))&&($=!0),$&&x({popoverWidth:parseInt(l.width,10),popoverHeight:parseInt(l.height,10)})},500)}),!z)switch(r){case"top":f["inline-size"]="var(--spectrum-popover-width)",t["inset-block-end"]="100%",t["inset-inline-start"]="0";break;case"top-left":t["inset-block-end"]="100%",t.left="0";break;case"top-right":t["inset-block-end"]="100%",t.right="0";break;case"top-start":t["inset-block-end"]="100%",t["inset-inline-start"]="0";break;case"top-end":t["inset-block-end"]="100%",t["inset-inline-end"]="0";break;case"bottom":f["inline-size"]="var(--spectrum-popover-width)",t["inset-block-start"]="100%",t["inset-inline-start"]="0";break;case"bottom-left":t["inset-block-start"]="100%",t.left="0";break;case"bottom-right":t["inset-block-start"]="100%",t.right="0";break;case"bottom-start":t["inset-block-start"]="100%",t["inset-inline-start"]="0";break;case"bottom-end":t["inset-block-start"]="100%",t["inset-inline-end"]="0";break;case"right":t.left="100%";break;case"right-top":t.left="100%",t.top="0";break;case"right-bottom":t.left="100%",t.bottom="0";break;case"left":t.right="100%";break;case"left-top":t.right="100%",t.top="0";break;case"left-bottom":t.right="100%",t.bottom="0";break;case"start":t["inset-inline-end"]="100%";break;case"start-top":t["inset-inline-end"]="100%",t.top="0";break;case"start-bottom":t["inset-inline-end"]="100%",t.bottom="0";break;case"end":t["inset-inline-start"]="100%";break;case"end-top":t["inset-inline-start"]="100%",t.top="0";break;case"end-bottom":t["inset-inline-start"]="100%",t.bottom="0";break}return c`
		<div style=${u({"--spectrum-popover-height":`${k}px`,"--spectrum-popover-width":`${o}px`,position:"relative",display:"inline-flex","align-items":"center","justify-content":"center",...f})}>
			${R(typeof y=="function",b=>y({...b,isSelected:n,isOpen:n,id:W,popupId:i,onclick:function(){x({isOpen:!n})}},m))}

			<div
				class=${F({[s]:!0,"is-open":n,[`${s}--size${a==null?void 0:a.toUpperCase()}`]:typeof a<"u",[`${s}--withTip`]:e,[`${s}--${r}`]:typeof r<"u",...d.reduce((b,l)=>({...b,[l]:!0}),{})})}
				style=${h(u({...t,...g}))}
				role="presentation"
				id=${h(i)}
				data-testid=${h(M??i)}
			>
				${L(D)}
				${e?r&&["top","bottom"].some(b=>r.startsWith(b))?c`<svg class="${s}-tip" viewBox="0 -0.5 16 9" width="10"><path class="${s}-tip-triangle" d="M-1,-1 8,8 17,-1"></svg>`:c`<svg class="${s}-tip" viewBox="0 -0.5 9 16" width="10"><path class="${s}-tip-triangle" d="M-1,-1 8,8 -1,17"></svg>`:""}
			</div>
		</div>
	`},j=(s,a)=>{var e,r;const n=((r=(e=a==null?void 0:a.argTypes)==null?void 0:e.position)==null?void 0:r.options)??[];return c`
		<div
			style=${u({display:"grid",gap:"16px","row-gap":"32px","grid-template-columns":"repeat(auto-fit, minmax(232px, 1fr))","max-width":"1000px"})}
		>
			${n.map(d=>{let i;return(d.startsWith("start")||d.startsWith("end"))&&(i="Changes side with text direction (like a logical property)"),(d.startsWith("left")||d.startsWith("right"))&&(i="Text direction does not affect the position"),c`
					<div>
						${B({semantics:"detail",size:"l",content:[d],customClasses:["chromatic-ignore"]},a)}
						<div style=${u({padding:"16px","block-size":"100px","inline-size":"200px",border:"1px solid var(--spectrum-gray-200)","border-radius":"4px"})}>
							<div style="position: relative">
								${w({...s,position:d,isOpen:!0,trigger:()=>null},a)}
							</div>
						</div>
						${R(i,()=>c`
							${B({semantics:"body",size:"s",content:[c`<sup>*</sup> ${i}`],customClasses:["chromatic-ignore"]},a)}
						`)}
					</div>
				`})}
		</div>
	`},C=s=>c`
	<div style="min-width: 300px;">
		${E({label:"Source",customStyles:{width:"100px",display:"block"}})}
		${w({...s,position:"bottom-start",isOpen:!0,trigger:()=>null})}
	</div>
`;export{C as F,w as T,j as a};
