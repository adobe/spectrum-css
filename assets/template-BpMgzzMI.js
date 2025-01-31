import{T as v}from"./template-B52pacml.js";import{C as m,R as A,s as F,n as p,g as N}from"./decorator-BtqfPG1l.js";import{T as P}from"./template-DblBPUvk.js";import{k as a}from"./lit-element-C96egxJg.js";import{t as r}from"./if-defined-B5hOZ0d5.js";import{c as U}from"./capitalize-D60SaZ2R.js";const n=({rootClass:e="spectrum-Button",id:t=N("button"),testId:o,customClasses:B=[],customStyles:W={},size:i="m",label:d,hideLabel:u=!1,iconName:s,iconSet:w="workflow",iconAfterLabel:h=!1,variant:b,staticColor:f,treatment:y,onclick:x,isDisabled:S=!1,isHovered:k=!1,isFocused:I=!1,isActive:g=!1,isPending:T=!1,ariaExpanded:$,ariaControls:G,noWrap:z=!1}={},c={})=>{const{updateArgs:l}=c;return a`
	<button
		class=${A({[e]:!0,[`${e}--${y}`]:typeof y<"u",[`${e}--${b}`]:typeof b<"u",[`${e}--size${i==null?void 0:i.toUpperCase()}`]:typeof i<"u",[`${e}--static${U(f)}`]:typeof f<"u",[`${e}--iconOnly`]:u,"is-pending":T,"is-disabled":S,"is-hover":k,"is-focus-visible":I,"is-active":g,[`${e}--noWrap`]:z,...B.reduce((O,R)=>({...O,[R]:!0}),{})})}
		id=${r(t)}
		style=${F(W)}
		?disabled=${S}
		@click=${x??function(){l({isPending:!0}),setTimeout(()=>{l({isPending:!1})},3e3)}}
		@focusin=${function(){l({isFocused:!0})}}
		@focusout=${function(){l({isFocused:!1})}}
		aria-label=${r(u?s:void 0)}
		aria-expanded=${r($==null?void 0:$.toString())}
		aria-controls=${r(G)}
		data-testid=${r(o)}
	>
		${p(s&&!h,()=>v({iconName:s,setName:w,size:i},c))}
		${p(d&&!u,()=>a`<span class=${`${e}-label`}>${d}</span>`)}
		${p(s&&h,()=>v({iconName:s,setName:w,size:i},c))}
		${p(T,()=>P({size:"s",testId:"progress-circle",staticColor:f,isIndeterminate:!0}))}
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
