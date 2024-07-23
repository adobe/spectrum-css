import{d as f}from"./index-BCEELo55.js";import{Template as u}from"./template-Df-YB4AQ.js";import"./lit-element-CJjJlyWZ.js";import{x as a}from"./lit-html-BdGv-Ldy.js";import{o as n}from"./style-map-yx2CMG_J.js";import{T as v,P as m}from"./progressbar.stories-B827TqAe.js";import"./decorator-Dl7o6wQR.js";import"./utilities-BisrhIqU.js";import"./class-map-sTkR_Npl.js";import"./when-BR7zwNJC.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./v4-CQkTLCs1.js";import"./if-defined-Bo9G1hLT.js";import"./capitalize-D60SaZ2R.js";import"./template-D7lOzDBB.js";import"./template-D5ShUZ_q.js";import"./lowerCase-CIorQk0G.js";import"./_createCompounder-DY9ZW94_.js";const h="4.1.3",p=({customClasses:r=[],fill:t,size:o="s",...i},g)=>v({customClasses:[...r,"spectrum-Meter",typeof o<"u"?`spectrum-Meter--size${o.toUpperCase()}`:null,typeof t<"u"?`is-${t}`:null].filter(Boolean),size:o,...i},g),y=(r,t)=>a`
	<div style=${n({display:window.isChromatic()?"none":"contents"})}>
		${p(r,t)}
	</div>
	<div style=${n({display:window.isChromatic()?"flex":"none","flex-direction":"column","align-items":"flex-start",gap:"32px"})}>
		${[{},{heading:"Large",size:"l"},{heading:"Positive",fill:"positive"},{heading:"Negative",fill:"negative"},{heading:"Notice",fill:"notice"},{heading:"Text overflow",fill:"notice",label:"Storage space remaining for XYZ user"}].map(({heading:o,...i})=>a`
			<div>
				${u({semantics:"heading",size:"xs",content:[o]})}
				${p({...r,...i},t)}
			</div>
		`)}
	</div>
`,L={title:"Meter",component:"ProgressBar",argTypes:{...m.argTypes,fill:{name:"Fill color",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},options:["notice","positive","negative"],control:"select"}},args:m.args,parameters:{componentVersion:h,docs:{description:{component:"The meter component is a visual representations of a quantity or an achievement. Their progress is determined by user actions, rather than system actions."}}}},s=y.bind({});s.args={value:50,size:"s",label:"Storage space"};const e=s.bind({});e.args=s.args;e.tags=["!autodocs","!dev","test"];e.parameters={chromatic:{forcedColors:"active",modes:f}};var l,c,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"MeterGroup.bind({})",...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const O=["Default","WithForcedColors"];export{s as Default,e as WithForcedColors,O as __namedExportsOrder,L as default};
