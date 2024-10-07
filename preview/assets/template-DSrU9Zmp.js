import{T as x}from"./template-CjNf7Zto.js";import{R as A,a as r,s as F,n as p,g as N,C as m}from"./template-CykOH8vE.js";import{T as P}from"./template-CjHMi-cO.js";import{k as a}from"./lit-element-C96egxJg.js";import{c as U}from"./capitalize-D60SaZ2R.js";const n=({rootClass:e="spectrum-Button",id:t=N("button"),testId:o,customClasses:v=[],customStyles:B={},size:i="m",label:d,hideLabel:u=!1,iconName:s,iconSet:w="workflow",iconAfterLabel:h=!1,variant:b,staticColor:f,treatment:y,onclick:W,isDisabled:S=!1,isHovered:k=!1,isFocused:I=!1,isActive:g=!1,isPending:T=!1,ariaExpanded:c,ariaControls:G,noWrap:z=!1}={},$={})=>{const{updateArgs:l}=$;return a`
	<button
		class=${A({[e]:!0,[`${e}--${y}`]:typeof y<"u",[`${e}--${b}`]:typeof b<"u",[`${e}--size${i==null?void 0:i.toUpperCase()}`]:typeof i<"u",[`${e}--static${U(f)}`]:typeof f<"u",[`${e}--iconOnly`]:u,"is-pending":T,"is-disabled":S,"is-hover":k,"is-focus-visible":I,"is-active":g,[`${e}--noWrap`]:z,...v.reduce((O,R)=>({...O,[R]:!0}),{})})}
		id=${r(t)}
		style=${F(B)}
		?disabled=${S}
		@click=${W??function(){l({isPending:!0}),setTimeout(()=>{l({isPending:!1})},3e3)}}
		@focusin=${function(){l({isFocused:!0})}}
		@focusout=${function(){l({isFocused:!1})}}
		aria-label=${r(u?s:void 0)}
		aria-expanded=${r(c==null?void 0:c.toString())}
		aria-controls=${r(G)}
		data-testid=${r(o)}
	>
		${p(s&&!h,()=>x({iconName:s,setName:w,size:i},$))}
		${p(d&&!u,()=>a`<span class=${`${e}-label`}>${d}</span>`)}
		${p(s&&h,()=>x({iconName:s,setName:w,size:i},$))}
		${p(T,()=>P({size:"s",testId:"progress-circle",staticColor:f,isIndeterminate:!0}))}
	</button>
	`},j=({iconName:e,...t},o={})=>m({withBorder:!1,direction:"row",wrapperStyles:{columnGap:"12px"},content:a`
		${n({...t,iconName:void 0},o)}
		${n({...t,iconName:e??"Edit"},o)}
		${n({...t,hideLabel:!0,iconName:e??"Edit"},o)}
	`}),Q=(e,t={})=>m({withBorder:!1,direction:"column",wrapperStyles:{rowGap:"12px"},content:a`${["fill","outline"].map(o=>j({...e,treatment:o},t))}`}),V=(e,t={})=>m({withBorder:!1,direction:"column",wrapperStyles:{rowGap:"12px"},content:a`
	${n({...e,customStyles:{"max-inline-size":"480px"},label:"An example of text overflow behavior when there is no icon. When the button text is too long for the horizontal space available, it wraps to form another line."},t)}
	${n({...e,customStyles:{"max-inline-size":"480px"},iconName:"Edit",iconSet:"workflow",label:"An example of text overflow behavior when the button has an icon. When the button text is too long for the horizontal space available, it wraps to form another line."},t)}
  `}),X=(e,t={})=>m({direction:"column",wrapperStyles:{rowGap:"12px",maxInlineSize:"120px"},content:a`
		${n({...e,customStyles:{},label:"Be a premium member",noWrap:!0},t)}
		${n({...e,customStyles:{"max-inline-size":"100%"},label:"Be a premium member",noWrap:!0},t)}
		${n({...e,customStyles:{"max-inline-size":"100%"},iconName:"Star",iconSet:"workflow",label:"Be a premium member",noWrap:!0},t)}
	`});export{j as B,n as T,Q as a,V as b,X as c};
