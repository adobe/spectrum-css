import{T as v}from"./template-CNHi6PLw.js";import{k as h}from"./lit-element-C96egxJg.js";import{R as l,n as T}from"./template-C7mrcesf.js";const w=({rootClass:e="spectrum-InfieldButton",customClasses:d=[],size:t="m",position:$,isQuiet:p,iconName:y="Add",iconSet:o="workflow",isDisabled:a,isInvalid:i,isHovered:f,isActive:b,isFocused:c,isStacked:N,tabIndex:m=0}={},r={})=>N?h`
				<button
					class=${l({[e]:!0,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",[`${e}--top`]:typeof $<"u",[`${e}--quiet`]:p,"is-invalid":i,"is-hover":f,"is-active":b,"is-focus-visible":c,...d.reduce((u,n)=>({...u,[n]:!0}),{})})}
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
					class=${l({[e]:!0,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",[`${e}--bottom`]:typeof $<"u",[`${e}--quiet`]:p,"is-invalid":i,"is-hover":f,"is-active":b,"is-focus-visible":c,...d.reduce((u,n)=>({...u,[n]:!0}),{})})}
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
					class=${l({[e]:!0,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",[`${e}--${$}`]:typeof $<"u",[`${e}--quiet`]:p,"is-invalid":i,"is-hover":f,"is-active":b,"is-focus-visible":c,...d.reduce((u,n)=>({...u,[n]:!0}),{})})}
					?disabled=${a}
					aria-haspopup="listbox"
					type="button"
					tabindex=${m}
				>
					<div class="${e}-fill">
						${T(y,()=>v({size:t,iconName:y,setName:o,customClasses:[`${e}-icon`]},r))}
					</div>
				</button>
			`;export{w as T};
