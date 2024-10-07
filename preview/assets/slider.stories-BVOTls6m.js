import{d as Ae}from"./index-BL42WGY7.js";import{R as H,a as i,s as W,n as R,g as Ie,V as Pe,S as je}from"./template-CykOH8vE.js";import{i as ze,e as Ge}from"./states-D366RZcH.js";import{s as Me}from"./variants-YiDXN7gG.js";import{T as Be}from"./template-DhJXrEWv.js";import{k as d}from"./lit-element-C96egxJg.js";import"./v4-CQkTLCs1.js";import"./capitalize-D60SaZ2R.js";import"./template-CjNf7Zto.js";const qe="@spectrum-css/slider",Ce="5.4.0",Ne="The Spectrum CSS slider component",Oe="Apache-2.0",Ve="Adobe",_e="https://opensource.adobe.com/spectrum-css/slider",Je={type:"git",url:"https://github.com/adobe/spectrum-css.git",directory:"components/slider"},Ee={url:"https://github.com/adobe/spectrum-css/issues"},Ue={".":"./dist/index.css","./*.md":"./*.md","./dist/*":"./dist/*","./index-*.css":"./dist/index-*.css","./index.css":"./dist/index.css","./metadata.json":"./metadata/metadata.json","./metadata/*":"./metadata/*","./package.json":"./package.json","./stories/*":"./stories/*"},Ke="dist/index.css",Qe=["dist/*","*.md","package.json","stories/*","metadata/*"],Xe={"@spectrum-css/stepper":">=6","@spectrum-css/tokens":">=14"},Ye={"@spectrum-css/stepper":"workspace:^","@spectrum-css/tokens":"workspace:^"},Ze=["spectrum","css","design system","adobe"],et={access:"public"},tt={name:qe,version:Ce,description:Ne,license:Oe,author:Ve,homepage:_e,repository:Je,bugs:Ee,exports:Ue,main:Ke,files:Qe,peerDependencies:Xe,devDependencies:Ye,keywords:Ze,publishConfig:et},o=({rootClass:t="spectrum-Slider",size:h,label:w,min:k=0,max:T=10,step:C=2,values:r=[],variant:x,labelPosition:A,fillColor:xe="rgb(213, 213, 213)",showTicks:N=!1,showTickLabels:Le=!1,isDisabled:I=!1,isFocused:O=!1,customClasses:V=[],customStyles:De={},id:n=Ie("slider")}={},_={})=>{const{globals:Fe={},updateArgs:P}=_,j=Fe.textDirection!=="rtl",z=T-k,L=z/2+k,S=x==="ramp",He=d`
		<svg
			viewBox="0 0 240 16"
			preserveAspectRatio="none"
			aria-hidden="true"
			focusable="false"
		>
			<path d="M240,4v8c0,2.3-1.9,4.1-4.2,4L1,9C0.4,9,0,8.5,0,8c0-0.5,0.4-1,1-1l234.8-7C238.1-0.1,240,1.7,240,4z"></path>
		</svg>`,D=e=>(e-k)/z*100,G=(e,s)=>(s>e?s-e:e-s)/z*100;function J({position:e,width:s}){return d`
			<div
				class="${t}-track"
				style=${i(W({[j?"right":"left"]:e?`${e}%`:void 0,width:s?`${s}%`:void 0}))}
			></div>`}function We({from:e,to:s}){const c=[];for(let l=e;l<=s;l+=C)c.push(d`
				<div class="${t}-tick">
					<div class="${t}-tickLabel">
						${R(Le,()=>d`${l}`,void 0)}
					</div>
				</div>
			`);return d`<div class="${t}-ticks">${c}</div>`}function Re({position:e,value:s,idx:c=0}){const l=j?"left":"right";return d`
			<div
				class=${H({[`${t}-handle`]:!0,"is-focused":O,"is-dragged":!1,"is-tophandle":!1})}
				style=${W({[l]:e?`${e}%`:void 0})}
			>
				<input
					type="range"
					id=${i(n?`${n}-input-${c+1}`:void 0)}
					class="${t}-input"
					value=${i(s)}
					step=${i(C)}
					min=${i(k)}
					max=${i(T)}
					@change=${function(F){I||P({value:F.target.value})}}
				/>
			</div>`}return d`
		<div
			class=${H({[t]:!0,[`${t}--size${h==null?void 0:h.toUpperCase()}`]:typeof h<"u",[`${t}--ramp`]:x==="ramp",[`${t}--range`]:r.length>1,[`${t}--filled`]:x==="filled",[`${t}--tick`]:N,"is-disabled":I,[`${t}--sideLabel`]:A==="side",...V.reduce((e,s)=>({...e,[s]:!0}),{})})}
			id=${i(n)}
			style=${W({"inline-size":"240px","--spectrum-slider-track-color":xe,...De})}
			role=${i(r.length>1?"group":void 0)}
			aria-labelledby=${i(w&&n?`${n}-label`:void 0)}
			@focusin=${function(){P({isFocused:!0})}}
			@focusout=${function(){P({isFocused:!1})}}
		>
			<!-- Label region -->
			${R(w,()=>d`
			<div
				class="${t}-labelContainer"
				role=${i(r.length>1?"presentation":void 0)}
			>
				${Be({size:h,label:w,isDisabled:I,id:n?`${n}-label`:void 0,forInput:n?`${n}-1`:void 0,customClasses:[`${t}-label`]},_)}
				${R(r.length&&A!="side",()=>d`
					<div
						class="${t}-value"
						role="textbox"
						aria-readonly="true"
						aria-labelledby=${i(n&&w?`${n}-label`:void 0)}
					>
						${r[0]}${r.length>1?` - ${r[1]}`:""}
					</div>
				`)}
			</div>`)}

			<!-- Slider controls -->
			<div
				class=${H({[`${t}-controls`]:!0,"is-focused":O,...V.reduce((e,s)=>({...e,[s]:!0}),{})})}
				role=${i(S?"presentation":void 0)}
			>
				${r.map((e,s)=>{const c=s===0?k:r[s-1],l=s===0,F=s===r.length-1;return[S?"":J({position:D(c),width:G(c,e)}),l&&S?d`<div class="${t}-ramp">${He}</div>`:"",l&&N&&!S?We({from:k,to:T}):"",Re({position:D(e),value:e,idx:s}),F&&!S?J({width:G(e,T)}):"",F&&x==="offset"?d` <div
									class=${H({[`${t}-fill`]:!0,[`${t}-fill--right`]:e>L})}
									style=${i(W({[j?"right":"left"]:`${e>L?D(L):D(e)}%`,width:`${G(e,L)}%`}))}
							  ></div>`:""]})}
			</div>
			${R(r.length&&A==="side",()=>d`
				<div
					class="${t}-labelContainer"
					role=${i(r.length>1?"presentation":void 0)}
				>
					<div
						class="${t}-value"
						role="textbox"
						aria-readonly="true"
						aria-labelledby=${i(n&&w?`${n}-label`:void 0)}
					>
						${r[0]}${r.length>1?` - ${r[1]}`:""}
					</div>
				</div>
			`)}
		</div>`},Se=Pe({Template:o,testData:[{testHeading:"Default"},{testHeading:"Without label",label:void 0},{testHeading:"Filled",variant:"filled"},{testHeading:"Filled offset",variant:"offset",min:0},{testHeading:"Ramp",variant:"ramp"},{testHeading:"Range",values:[14,16]},{testHeading:"Tick",showTicks:!0},{testHeading:"Tick with labels",showTicks:!0,showTickLabels:!0},{testHeading:"Side label",labelPosition:"side"},{testHeading:"Gradient",customStyles:{"--spectrum-slider-track-color":"linear-gradient(to right, red, green 100%)","--spectrum-slider-track-color-rtl":"linear-gradient(to left, red, green 100%)"}},{testHeading:"Truncation",withStates:!1,label:"Slider label that is long and wraps to the next line"}],stateData:[{testHeading:"Disabled",isDisabled:!0},{testHeading:"Focused",isFocused:!0}]}),pt={title:"Slider",component:"Slider",argTypes:{size:Me(["s","m","l","xl"]),label:{name:"Label",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:{type:"text"}},min:{name:"Minimum value",type:{name:"number"},table:{type:{summary:"number"},category:"Content"},control:{type:"number"}},max:{name:"Maximum value",type:{name:"number"},table:{type:{summary:"number"},category:"Content"},control:{type:"number"}},step:{name:"Step value",type:{name:"number"},table:{type:{summary:"number"},category:"Content"},control:{type:"number"}},variant:{name:"Styling variants",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},control:"select",options:["ramp","offset","filled"]},labelPosition:{name:"Label Position",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},control:"select",options:["top","side"]},fillColor:{name:"Fill color",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},control:"color",if:{arg:"variant",neq:"ramp"}},showTicks:{name:"Show tick marks",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean",if:{arg:"variant",neq:"ramp"}},showTickLabels:{name:"Show associated tick labels",description:"Displays the values at each step of the slider",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean",if:{arg:"showTicks",truthy:!0}},isDisabled:ze,isFocused:{...Ge,if:{arg:"isDisabled",truthy:!1}},values:{table:{disable:!0}}},args:{rootClass:"spectrum-Slider",isDisabled:!1,isFocused:!1,showTicks:!1,showTickLabels:!1,labelPosition:"top",label:"Slider label",size:"m",min:10,max:20,values:[14],step:2},parameters:{actions:{handles:["mousedown .spectrum-Slider-handle","change .spectrum-Slider-input"]},packageJson:tt,docs:{description:{component:`A slider allows users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable.

## Indicating focus
Focus must be bubbled up to the parent so its descendants can be styled.

Thus, implementations should add the following class to the \`.spectrum-Slider\` parent class in the following situations:

- \`.is-disabled\`: when the slider is disabled

Implementations should also bubble the following class to the \`.spectrum-Slider-controls\` parent class in the following situations:

- \`.is-focused\`: when the handle input is focused with the mouse or keyboard`}}}},a=Se.bind({});a.args={};const p=o.bind({});p.args={label:""};p.tags=["!dev"];p.storyName="Without label";p.parameters={chromatic:{disableSnapshot:!0}};const g=(t,h)=>je({Template:o,withBorder:!1,withHeading:!1,...t},h);g.args=a.args;g.tags=["!dev"];g.parameters={chromatic:{disableSnapshot:!0}};const b=o.bind({});b.args={...a.args,variant:"filled"};b.tags=["!dev"];b.parameters={chromatic:{disableSnapshot:!0}};const f=o.bind({});f.args={...a.args,min:0,variant:"offset"};f.tags=["!dev"];f.parameters={chromatic:{disableSnapshot:!0}};const M=o.bind({});M.args={...a.args,variant:"ramp"};M.tags=["!dev"];M.parameters={chromatic:{disableSnapshot:!0}};const y=o.bind({});y.args={...a.args,values:[14,16]};y.tags=["!dev"];y.parameters={chromatic:{disableSnapshot:!0}};const $=o.bind({});$.args={...a.args,showTicks:!0};$.tags=["!dev"];$.parameters={chromatic:{disableSnapshot:!0}};const m=o.bind({});m.args={...a.args,showTicks:!0,showTickLabels:!0};m.tags=["!dev"];m.parameters={chromatic:{disableSnapshot:!0}};m.storyName="Tick with labels";const B=o.bind({});B.args={...a.args,isDisabled:!0};B.tags=["!dev"];B.parameters={chromatic:{disableSnapshot:!0}};const q=o.bind({});q.args={...a.args,isFocused:!0};q.tags=["!dev"];q.parameters={chromatic:{disableSnapshot:!0}};const v=o.bind({});v.args={...a.args,customStyles:{"--spectrum-slider-track-color":"linear-gradient(to right, red, green 100%)","--spectrum-slider-track-color-rtl":"linear-gradient(to left, red, green 100%)"},label:"Slider label that is long and wraps to the next line"};v.tags=["!dev"];v.parameters={chromatic:{disableSnapshot:!0}};const u=o.bind({});u.args={...a.args,labelPosition:"side"};u.tags=["!dev"];u.parameters={chromatic:{disableSnapshot:!0}};u.storyName="With side label";const Te=Se.bind({});Te.tags=["!autodocs","!dev"];Te.parameters={chromatic:{forcedColors:"active",modes:Ae}};var E,U,K;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,description:{story:"Sliders should always have a label. In rare cases where context is sufficient and an accessibility expert has reviewed the design, the label could be undefined. Top labels are the default and are recommended because they work better with long copy, localization, and responsive layouts.",...(K=(U=a.parameters)==null?void 0:U.docs)==null?void 0:K.description}}};var Q,X,Y;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,description:{story:"If a slider's label is undefined, it should still include an aria-label in HTML (depending on the context, “aria-label” or “aria-labelledby”).",...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,ee,te;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`(args, context) => Sizes({
  Template,
  withBorder: false,
  withHeading: false,
  ...args
}, context)`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,ae,re;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,description:{story:"The track of the slider can have a fill. By default, the fill originates from the left side of the track.",...(re=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:re.description}}};var ie,ne,oe;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,description:{story:"With fill and offset. If the value represents an offset, the fill start can be set to represent the point of origin. This allows the slider fill to start from inside the track.",...(oe=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:oe.description}}};var de,ce,le;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,description:{story:"A range slider with two handles.",...(le=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:le.description}}};var pe,me,ue;$.parameters={...$.parameters,docs:{...(pe=$.parameters)==null?void 0:pe.docs,description:{story:"Spectrum tick slider.",...(ue=(me=$.parameters)==null?void 0:me.docs)==null?void 0:ue.description}}};var he,ge,be;m.parameters={...m.parameters,docs:{...(he=m.parameters)==null?void 0:he.docs,description:{story:"Spectrum tick slider with tick labels.",...(be=(ge=m.parameters)==null?void 0:ge.docs)==null?void 0:be.description}}};var fe,ye,$e;v.parameters={...v.parameters,docs:{...(fe=v.parameters)==null?void 0:fe.docs,description:{story:"A gradient can be added to the track of any slider to give more meaning to the range of values. Tracks with a gradient can also have a fill. A gradient track should not be used for choosing a precise color; use a [color slider](/docs/components-color-slider--docs), [color area](/docs/components-color-area--docs), or [color wheel](/docs/components-color-wheel--docs) instead.",...($e=(ye=v.parameters)==null?void 0:ye.docs)==null?void 0:$e.description}}};var ve,ke,we;u.parameters={...u.parameters,docs:{...(ve=u.parameters)==null?void 0:ve.docs,description:{story:"Labels can be placed either on top or on the side. Side labels are most useful when vertical space is limited.",...(we=(ke=u.parameters)==null?void 0:ke.docs)==null?void 0:we.description}}};const mt=["Default","WithoutLabel","Sizing","Filled","FilledOffset","Ramp","Range","Tick","TickWithLabels","Disabled","Focused","Gradient","WithSideLabel","WithForcedColors"];export{a as Default,B as Disabled,b as Filled,f as FilledOffset,q as Focused,v as Gradient,M as Ramp,y as Range,g as Sizing,$ as Tick,m as TickWithLabels,Te as WithForcedColors,u as WithSideLabel,p as WithoutLabel,mt as __namedExportsOrder,pt as default};
