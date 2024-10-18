import{T as k}from"./template-C8oSNaTT.js";import{C as t,R as S,s as N,r as g}from"./template-C7mrcesf.js";import{k as c}from"./lit-element-C96egxJg.js";import{c as v}from"./capitalize-D60SaZ2R.js";const r=({rootClass:e="spectrum-ActionGroup",size:o="m",areQuiet:n=!1,areEmphasized:a=!1,areDisabled:i=!1,vertical:p=!1,compact:f=!1,justified:m=!1,iconOnly:d=!1,staticColor:l,content:s=[],customClasses:w=[],customStyles:u={},iconName:$}={},h={})=>c`
		<div
			class=${S({[e]:!0,[`${e}--size${o==null?void 0:o.toUpperCase()}`]:typeof o<"u",[`${e}--quiet`]:n,[`${e}--vertical`]:p,[`${e}--compact`]:f,[`${e}--justified`]:m,[`${e}--static${v(l)}`]:typeof l<"u",...w.reduce((y,b)=>({...y,[b]:!0}),{})})}
			style=${N(u)}
		>
			${g(s,{callback:k,args:{staticColor:l,isQuiet:n,isEmphasized:a,isDisabled:i,customClasses:[`${e}-item`],hideLabel:d,size:o,iconName:$||void 0},context:h})}
		</div>
	`,O=e=>t({withBorder:!1,direction:"column",wrapperStyles:{columnGap:"12px"},content:c`
		${t({withBorder:!1,heading:"Wrap",content:r({customStyles:{"max-inline-size":"288px"},content:[{iconName:"Edit",iconSet:"workflow",label:"Edit"},{iconName:"Copy",iconSet:"workflow",label:"Copy"},{iconName:"Delete",iconSet:"workflow",label:"Delete"},{iconName:"Cut",iconSet:"workflow",label:"Cut"},{iconName:"Move",iconSet:"workflow",label:"Move"}]},e)})}
		${t({withBorder:!1,heading:"Collapse",content:r({content:[{iconName:"Edit",iconSet:"workflow",label:"Edit"},{iconName:"Copy",iconSet:"workflow",label:"Copy"},{iconName:"Delete",iconSet:"workflow",label:"Delete"},{iconName:"More",label:"More options",iconSet:"workflow",hideLabel:!0}]},e)})}
	`}),x=(e,o)=>t({withBorder:!1,direction:"row",wrapperStyles:{rowGap:"12px"},content:c`${[{heading:"Default"},{iconOnly:!0,heading:"Icon-only"},{iconOnly:!0,areQuiet:!0,heading:"Quiet, icon-only"}].map(({heading:n,areQuiet:a,iconOnly:i})=>t({withBorder:!1,heading:n,content:r({...e,areQuiet:a,iconOnly:i},o)}))}`});export{O,r as T,x as a};
