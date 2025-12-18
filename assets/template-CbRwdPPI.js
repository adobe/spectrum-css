import{T as v}from"./template-Cug7zURX.js";import{C as m,a as F,o as N,n as p,g as P}from"./decorator-DlLJAwnS.js";import{T as R}from"./template-CeLwEE-a.js";import{x as a}from"./lit-element-Cr8ugfRm.js";import{o as l}from"./if-defined-C5sRMNk0.js";import{c as U}from"./capitalize-A3_7q2MJ.js";const n=({rootClass:e="spectrum-Button",id:t=P("button"),testId:o,customClasses:B=[],customStyles:x={},size:i="m",label:d,hideLabel:u=!1,iconName:r,iconSet:w="workflow",iconAfterLabel:h=!1,variant:b,staticColor:f,treatment:y,onclick:W,isDisabled:S=!1,isHovered:I=!1,isFocused:g=!1,isActive:k=!1,isPending:T=!1,ariaExpanded:$,ariaControls:G,noWrap:z=!1}={},c={})=>{const{updateArgs:s}=c;return a`
	<button
		class=${F({[e]:!0,[`${e}--${y}`]:typeof y<"u",[`${e}--${b}`]:typeof b<"u",[`${e}--size${i==null?void 0:i.toUpperCase()}`]:typeof i<"u",[`${e}--static${U(f)}`]:typeof f<"u",[`${e}--iconOnly`]:u,"is-pending":T,"is-disabled":S,"is-hover":I,"is-focus-visible":g,"is-active":k,[`${e}--noWrap`]:z,...B.reduce((O,A)=>({...O,[A]:!0}),{})})}
		id=${l(t)}
		style=${N(x)}
		?disabled=${S}
		@click=${W??function(){s({isPending:!0}),setTimeout(()=>{s({isPending:!1})},3e3)}}
		@focusin=${function(){s({isFocused:!0})}}
		@focusout=${function(){s({isFocused:!1})}}
		aria-label=${l(u?r:void 0)}
		aria-expanded=${l($==null?void 0:$.toString())}
		aria-controls=${l(G)}
		data-testid=${l(o)}
	>
		${p(r&&!h,()=>v({iconName:r,setName:w,size:i},c))}
		${p(d&&!u,()=>a`<span class=${`${e}-label`}>${d}</span>`)}
		${p(r&&h,()=>v({iconName:r,setName:w,size:i},c))}
		${p(T,()=>R({size:"s",testId:"progress-circle",staticColor:f,isIndeterminate:!0}))}
	</button>
	`},j=({iconName:e,...t},o={})=>m({withBorder:!1,direction:"row",wrapperStyles:{columnGap:"12px"},content:a`
		${n({...t,iconName:void 0},o)}
		${n({...t,iconName:e??"Edit"},o)}
		${n({...t,hideLabel:!0,iconName:e??"Edit"},o)}
	`},o),V=(e,t={})=>m({withBorder:!1,direction:"column",wrapperStyles:{rowGap:"12px"},content:a`${["fill","outline"].map(o=>j({...e,treatment:o},t))}`},t),X=(e,t={})=>m({withBorder:!1,direction:"column",wrapperStyles:{rowGap:"12px"},content:a`
		${n({...e,customStyles:{"max-inline-size":"480px"},label:"An example of text overflow behavior when there is no icon. When the button text is too long for the horizontal space available, it wraps to form another line."},t)}
		${n({...e,customStyles:{"max-inline-size":"480px"},iconName:"Edit",iconSet:"workflow",label:"An example of text overflow behavior when the button has an icon. When the button text is too long for the horizontal space available, it wraps to form another line."},t)}
	`},t),Y=(e,t={})=>m({direction:"column",wrapperStyles:{rowGap:"12px",maxInlineSize:"120px"},content:a`
		${n({...e,customStyles:{},label:"Be a premium member",noWrap:!0},t)}
		${n({...e,customStyles:{"max-inline-size":"100%"},label:"Be a premium member",noWrap:!0},t)}
		${n({...e,customStyles:{"max-inline-size":"100%"},iconName:"Star",iconSet:"workflow",label:"Be a premium member",noWrap:!0},t)}
	`},t);export{j as B,n as T,V as a,X as b,Y as c};
