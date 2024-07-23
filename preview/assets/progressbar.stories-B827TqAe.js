import{d as w}from"./index-BCEELo55.js";import{T as y}from"./template-D7lOzDBB.js";import{Template as n}from"./template-Df-YB4AQ.js";import"./lit-element-CJjJlyWZ.js";import{x as c}from"./lit-html-BdGv-Ldy.js";import{a as _}from"./class-map-sTkR_Npl.js";import{o as l}from"./style-map-yx2CMG_J.js";import{c as L}from"./capitalize-D60SaZ2R.js";import{l as W}from"./lowerCase-CIorQk0G.js";const o=({rootClass:e="spectrum-ProgressBar",customClasses:t=[],labelPosition:i,staticColor:u,customWidth:C,indeterminate:p,label:P,value:d,customStyles:S={},size:r="m"},g)=>c`
		<div
			class=${_({[e]:!0,[`${e}--size${r==null?void 0:r.toUpperCase()}`]:typeof r<"u",[`${e}--${i}Label`]:typeof i<"u",[`${e}--static${L(W(u))}`]:typeof u<"u",[`${e}--${p}`]:typeof p<"u",...t.reduce((T,B)=>({...T,[B]:!0}),{})})}
			style=${l({width:C,...S})}
			value="${d}%"
			role="progressbar"
			aria-valuenow="${d}%"
			aria-valuemin="0"
			aria-valuemax="100"
		>
			${y({size:r,label:P,customClasses:[`${e}-label`]},g)}
			${y({size:r,label:p?"":`${d}%`,customClasses:[`${e}-percentage`]},g)}
			<div class="${e}-track">
				<div class="${e}-fill" style="width: ${d}%;"></div>
			</div>
		</div>
`,z=(e,t)=>c`
  ${["s","m","l","xl"].map(i=>c`
    <div>
			${n({semantics:"heading",size:"xs",content:[{xxs:"Extra-extra-small",xs:"Extra-small",s:"Small",m:"Medium",l:"Large",xl:"Extra-large",xxl:"Extra-extra-large"}[i]],customClasses:["chromatic-ignore"]})}
			${o({...e,size:i},t)}
		</div>
  `)}
`,E=(e,t)=>c`
	<div style=${l({display:window.isChromatic()?"none":"contents"})}>
		${o(e,t)}
	</div>
	<div style=${l({display:window.isChromatic()?"flex":"none","flex-direction":"column","align-items":"flex-start",gap:"32px"})}>
		<div style=${l({display:window.isChromatic()?"flex":"none","flex-direction":"column","align-items":"flex-start",gap:"32px",border:"1px solid var(--spectrum-gray-200)","border-radius":"4px",padding:"12px"})}>
			${o(e,t)}
			<div>
				${n({semantics:"heading",size:"xs",content:["Side label"],customClasses:["chromatic-ignore"]})}
				${o({...e,labelPosition:"side"},t)}
			</div>
			<div>
				${n({semantics:"heading",size:"xs",content:["Custom width"],customClasses:["chromatic-ignore"]})}
				${o({...e,customWidth:"225px"},t)}
			</div>
			<div>
				${n({semantics:"heading",size:"xs",content:["Indeterminate"],customClasses:["chromatic-ignore"]})}
				${o({...e,indeterminate:"indeterminate"},t)}
			</div>
		</div>
		<div>
			${n({semantics:"heading",size:"s",content:["Sizing"],customClasses:["chromatic-ignore"]})}
			<div style=${l({display:window.isChromatic()?"flex":"none","flex-direction":"column","align-items":"flex-start",gap:"32px",border:"1px solid var(--spectrum-gray-200)","border-radius":"4px",padding:"12px"})}>
				${z(e,t)}
			</div>
		</div>
	</div>
`,D={title:"Progress bar",component:"ProgressBar",argTypes:{customWidth:{table:{disable:!0}},indeterminate:{table:{disable:!0}},size:{name:"Size",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["s","m","l","xl"],control:"select"},labelPosition:{name:"Label position",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},options:["top","side"],control:"select"},label:{name:"Label",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:"text"},value:{name:"Percent filled",type:{name:"number"},table:{type:{summary:"number"},category:"Content"},control:{type:"range",min:0,max:100},if:{arg:"indeterminate",truthy:!1}},staticColor:{name:"Static color",type:{name:"string"},table:{type:{summary:"string"},category:"Advanced"},options:["white"],control:"select"}},args:{rootClass:"spectrum-ProgressBar",size:"m",labelPosition:"top",value:0,label:""},parameters:{docs:{description:{component:"The progress bar component shows the progression of a system operation such as downloading, uploading, processing, etc. in a visual way."}}}},m=E.bind({});m.args={label:"Loading",value:50};const a=m.bind({});a.args=m.args;a.tags=["!autodocs","!dev","test"];a.parameters={chromatic:{forcedColors:"active",modes:w}};const s=m.bind({});s.tags=["!autodocs","!dev","test"];s.args={staticColor:"white",label:"Loading your fonts, images, and icons",value:50};s.parameters={chromatic:{modes:w}};var b,$,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"ProgressBarGroup.bind({})",...(f=($=a.parameters)==null?void 0:$.docs)==null?void 0:f.source}}};var v,x,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:"ProgressBarGroup.bind({})",...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const G=["Default","WithForcedColors","StaticWhite"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:m,StaticWhite:s,WithForcedColors:a,__namedExportsOrder:G,default:D},Symbol.toStringTag,{value:"Module"}));export{D as P,o as T,H as p};
