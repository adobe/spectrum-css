import{T as v}from"./template-Cug7zURX.js";import{x as h}from"./lit-element-Cr8ugfRm.js";import{a as l,n as N}from"./decorator-DlLJAwnS.js";const w=({rootClass:e="spectrum-InfieldButton",customClasses:n=[],size:t="m",position:d,isQuiet:p,iconName:y="Add",iconSet:o="workflow",isDisabled:a,isInvalid:i,isHovered:f,isActive:b,isFocused:c,isStacked:x,tabIndex:m=0}={},r={})=>x?h`
				<button
					class=${l({[e]:!0,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",[`${e}--top`]:typeof d<"u",[`${e}--quiet`]:p,"is-invalid":i,"is-hover":f,"is-active":b,"is-focus-visible":c,...n.reduce((u,$)=>({...u,[$]:!0}),{})})}
					?disabled=${a}
					aria-haspopup="listbox"
					type="button"
					tabindex=${m}
					aria-label="add"
				>
					<div class="${e}-fill">
						${v({size:t,iconName:"ChevronUp75",setName:"ui",customClasses:[`${e}-icon`]},r)}
					</div>
				</button>
				<button
					class=${l({[e]:!0,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",[`${e}--bottom`]:typeof d<"u",[`${e}--quiet`]:p,"is-invalid":i,"is-hover":f,"is-active":b,"is-focus-visible":c,...n.reduce((u,$)=>({...u,[$]:!0}),{})})}
					?disabled=${a}
					aria-haspopup="listbox"
					type="button"
					tabindex=${m}
					aria-label="add"
				>
					<div class="${e}-fill">
						${v({size:t,iconName:"ChevronDown75",setName:"ui",customClasses:[`${e}-icon`]},r)}
					</div>
				</button>
			`:h`
				<button
					class=${l({[e]:!0,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",[`${e}--${d}`]:typeof d<"u",[`${e}--quiet`]:p,"is-invalid":i,"is-hover":f,"is-active":b,"is-focus-visible":c,...n.reduce((u,$)=>({...u,[$]:!0}),{})})}
					?disabled=${a}
					aria-haspopup="listbox"
					type="button"
					tabindex=${m}
				>
					<div class="${e}-fill">
						${N(y,()=>v({size:t,iconName:y,setName:o,customClasses:[`${e}-icon`]},r))}
					</div>
				</button>
			`;export{w as T};
