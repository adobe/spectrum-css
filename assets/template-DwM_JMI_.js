import{T as S}from"./template-DKVEHtSM.js";import{C as i,a as k,o as N,r as g}from"./decorator-DlLJAwnS.js";import{x as c}from"./lit-element-Cr8ugfRm.js";import{c as v}from"./capitalize-A3_7q2MJ.js";const r=({rootClass:e="spectrum-ActionGroup",size:o="m",areQuiet:a=!1,areEmphasized:n=!1,areDisabled:t=!1,vertical:p=!1,compact:f=!1,justified:m=!1,iconOnly:d=!1,staticColor:l,content:w=[],customClasses:s=[],customStyles:u={},iconName:$}={},h={})=>c`
		<div
			class=${k({[e]:!0,[`${e}--size${o==null?void 0:o.toUpperCase()}`]:typeof o<"u",[`${e}--quiet`]:a,[`${e}--vertical`]:p,[`${e}--compact`]:f,[`${e}--justified`]:m,[`${e}--static${v(l)}`]:typeof l<"u",...s.reduce((y,b)=>({...y,[b]:!0}),{})})}
			style=${N(u)}
		>
			${g(w,{callback:S,args:{staticColor:l,isQuiet:a,isEmphasized:n,isDisabled:t,customClasses:[`${e}-item`],hideLabel:d,size:o,iconName:$||void 0},context:h})}
		</div>
	`,O=e=>i({withBorder:!1,direction:"column",wrapperStyles:{columnGap:"12px"},content:c`
		${i({withBorder:!1,heading:"Wrap",content:r({customStyles:{"max-inline-size":"288px"},content:[{iconName:"Edit",iconSet:"workflow",label:"Edit"},{iconName:"Copy",iconSet:"workflow",label:"Copy"},{iconName:"Delete",iconSet:"workflow",label:"Delete"},{iconName:"Cut",iconSet:"workflow",label:"Cut"},{iconName:"Move",iconSet:"workflow",label:"Move"}]},e)},e)}
		${i({withBorder:!1,heading:"Collapse",content:r({content:[{iconName:"Edit",iconSet:"workflow",label:"Edit"},{iconName:"Copy",iconSet:"workflow",label:"Copy"},{iconName:"Delete",iconSet:"workflow",label:"Delete"},{iconName:"More",label:"More options",iconSet:"workflow",hideLabel:!0}]},e)},e)}
	`},e),M=(e,o)=>i({withBorder:!1,direction:"row",wrapperStyles:{rowGap:"12px"},content:c`${[{heading:"Default"},{iconOnly:!0,heading:"Icon-only"},{iconOnly:!0,areQuiet:!0,heading:"Quiet, icon-only"}].map(({heading:a,areQuiet:n,iconOnly:t})=>i({withBorder:!1,heading:a,content:r({...e,areQuiet:n,iconOnly:t},o)},o))}`},o);export{O,r as T,M as a};
