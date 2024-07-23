import{d as u}from"./index-BCEELo55.js";import{x as r}from"./lit-html-BdGv-Ldy.js";import{a as s}from"./class-map-sTkR_Npl.js";import{o as i}from"./style-map-yx2CMG_J.js";const l="2.1.2",t=({rootClass:e="spectrum-CoachIndicator",isQuiet:p=!1,variant:n})=>r`
	<div
		class=${s({[`${e}`]:!0,[`${e}--quiet`]:p,[`${e}--${n}`]:typeof n<"u"})}
	>
		${Array.from({length:3}).map(()=>r`
			<div class=${s({[`${e}-ring`]:!0})}></div>
		`)}
	</div>
`,f=e=>r`
		<div style=${i({display:window.isChromatic()?"none":void 0})}>
			${t(e)}
		</div>
		<div style=${i({display:window.isChromatic()?"flex":"none"})}>
			${t(e)}
			${t({...e,variant:"dark"})}
			${t({...e,variant:"light"})}
		</div>
		<div style=${i({display:window.isChromatic()?"flex":"none"})}>
			${t({...e,isQuiet:!0})}
			${t({...e,variant:"dark",isQuiet:!0})}
			${t({...e,variant:"light",isQuiet:!0})}
		</div>
	`,g={title:"Coach indicator",component:"CoachIndicator",argTypes:{isQuiet:{name:"Quiet styling",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},variant:{name:"Variant",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},options:["dark","light"],control:"select"}},args:{rootClass:"spectrum-CoachIndicator",isQuiet:!1},parameters:{componentVersion:l,docs:{description:{component:"The coach indicator component can be used to bring added attention to specific parts of a page."}}}},a=f.bind({});a.args={};a.parameters={chromatic:{prefersReducedMotion:"reduce",pauseAnimationAtEnd:!0}};const o=a.bind({});o.args=a.args;o.tags=["!autodocs","!dev","test"];o.parameters={chromatic:{forcedColors:"active",prefersReducedMotion:"reduce",pauseAnimationAtEnd:!0,modes:u}};var c,d,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"CoachIndicatorGroup.bind({})",...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const C=["Default","WithForcedColors"];export{a as Default,o as WithForcedColors,C as __namedExportsOrder,g as default};
