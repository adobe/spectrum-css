import{d as j}from"./index-BCEELo55.js";import{d as J}from"./states-DzrSzBKQ.js";import{T as N}from"./template-D7lOzDBB.js";import"./lit-element-CJjJlyWZ.js";import{x as o}from"./lit-html-BdGv-Ldy.js";import{a as S}from"./class-map-sTkR_Npl.js";import{o as n}from"./if-defined-Bo9G1hLT.js";import{o as k}from"./style-map-yx2CMG_J.js";import{n as _}from"./when-BR7zwNJC.js";import"./template-D5ShUZ_q.js";import"./template-Df-YB4AQ.js";import"./decorator-Dl7o6wQR.js";import"./utilities-BisrhIqU.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./v4-CQkTLCs1.js";import"./capitalize-D60SaZ2R.js";const Q="5.2.3";__STORYBOOK_MODULE_PREVIEW_API__;const s=({rootClass:t="spectrum-Slider",size:u,label:g,min:m=0,max:f=10,step:R=2,values:i=[],variant:$,labelPosition:w,fillColor:V="rgb(213, 213, 213)",showTicks:O=!1,isDisabled:F=!1,isFocused:P=!1,customClasses:W=[],customStyles:B={},id:a}={},M={})=>{const{globals:U={},updateArgs:T}=M,x=(U.textDirection??"ltr")==="rtl",D=f-m,y=D/2+m,b=$==="ramp",H=o`
		<svg
			viewBox="0 0 240 16"
			preserveAspectRatio="none"
			aria-hidden="true"
			focusable="false"
		>
			<path d="M240,4v8c0,2.3-1.9,4.1-4.2,4L1,9C0.4,9,0,8.5,0,8c0-0.5,0.4-1,1-1l234.8-7C238.1-0.1,240,1.7,240,4z"></path>
		</svg>`,h=e=>(e-m)/D*100,L=(e,r)=>(r>e?r-e:e-r)/D*100;function q({position:e,width:r}){return o`
			<div
				class="${t}-track"
				style=${n(k({[x?"right":"left"]:e?`${e}%`:void 0,width:r?`${r}%`:void 0}))}
			></div>`}function K({from:e,to:r}){const d=[];for(let c=e;c<=r;c+=R)d.push(o`
				<div class="${t}-tick">
					<div class="${t}-tickLabel">${c}</div>
				</div>
			`);return o`<div class="${t}-ticks">${d}</div>`}function Y({position:e,value:r,idx:d=0}){const c=x?"right":"left";return o`
			<div
				class=${S({[`${t}-handle`]:!0,"is-focused":P,"is-dragged":!1,"is-tophandle":!1})}
				style=${n(k({[c]:e?`${e}%`:void 0}))}
			>
				<input
					type="range"
					id=${n(a?`${a}-input-${d+1}`:void 0)}
					class="${t}-input"
					value=${n(r)}
					step=${n(R)}
					min=${n(m)}
					max=${n(f)}
					@change=${v=>{F||T({value:v.target.value})}}
				/>
			</div>`}return o`
		<div
			class=${S({[t]:!0,[`${t}--size${u==null?void 0:u.toUpperCase()}`]:typeof u<"u",[`${t}--ramp`]:$==="ramp",[`${t}--range`]:i.length>1,[`${t}--filled`]:$==="filled",[`${t}--tick`]:O,"is-disabled":F,[`${t}--sideLabel`]:w==="side",...W.reduce((e,r)=>({...e,[r]:!0}),{})})}
			id=${n(a)}
			style=${k({"max-width":"240px","--spectrum-slider-track-color":V,...B})}
			role=${n(i.length>1?"group":void 0)}
			aria-labelledby=${n(g&&a?`${a}-label`:void 0)}
			@focusin=${()=>{T({isFocused:!0})}}
			@focusout=${()=>{T({isFocused:!1})}}
		>
			<!-- Label region -->
			${_(g,()=>o`
			<div
				class="${t}-labelContainer"
				role=${n(i.length>1?"presentation":void 0)}
			>
				${N({size:u,label:g,isDisabled:F,id:a?`${a}-label`:void 0,forInput:a?`${a}-1`:void 0,customClasses:[`${t}-label`]},M)}
				${_(i.length&&w!="side",()=>o`
					<div
						class="${t}-value"
						role="textbox"
						aria-readonly="true"
						aria-labelledby=${n(a&&g?`${a}-label`:void 0)}
					>
						${i[0]}${i.length>1?` - ${i[1]}`:""}
					</div>
				`)}
			</div>`)}

			<!-- Slider controls -->
			<div
				class=${S({[`${t}-controls`]:!0,"is-focused":P,...W.reduce((e,r)=>({...e,[r]:!0}),{})})}
				role=${n(b?"presentation":void 0)}
			>
				${i.map((e,r)=>{const d=r===0?m:i[r-1],c=r===0,v=r===i.length-1;return[b?"":q({position:h(d),width:L(d,e)}),c&&b?o`<div class="${t}-ramp">${H}</div>`:"",c&&O&&!b?K({from:m,to:f}):"",Y({position:h(e),value:e,idx:r}),v&&!b?q({width:L(e,f)}):"",v&&$==="offset"?o` <div
									class=${S({[`${t}-fill`]:!0,[`${t}-fill--right`]:e>y})}
									style=${n(k({[x?"right":"left"]:`${e>y?h(y):h(e)}%`,width:`${L(e,y)}%`}))}
							  ></div>`:""]})}
			</div>
			${_(i.length&&w==="side",()=>o`
				<div
					class="${t}-labelContainer"
					role=${n(i.length>1?"presentation":void 0)}
				>
					<div
						class="${t}-value"
						role="textbox"
						aria-readonly="true"
						aria-labelledby=${n(a&&g?`${a}-label`:void 0)}
					>
						${i[0]}${i.length>1?` - ${i[1]}`:""}
					</div>
				</div>
			`)}
		</div>`},ke={title:"Slider",component:"Slider",argTypes:{size:{name:"Size",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["s","m","l","xl"],control:"select"},label:{name:"Label",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:{type:"text"}},min:{name:"Minimum value",type:{name:"number"},table:{type:{summary:"number"},category:"Content"},control:{type:"number"}},max:{name:"Maximum value",type:{name:"number"},table:{type:{summary:"number"},category:"Content"},control:{type:"number"}},step:{name:"Step value",type:{name:"number"},table:{type:{summary:"number"},category:"Content"},control:{type:"number"}},variant:{name:"Styling variants",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},control:"select",options:["ramp","offset","filled"]},labelPosition:{name:"Label Position",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},control:"select",options:["top","side"]},fillColor:{name:"Fill color",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},control:"color",if:{arg:"variant",neq:"ramp"}},showTicks:{name:"Show tick marks",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean",if:{arg:"variant",neq:"ramp"}},isDisabled:{name:"Disabled",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isFocused:{...J,if:{arg:"isDisabled",truthy:!1}},values:{table:{disable:!0}}},args:{rootClass:"spectrum-Slider",isDisabled:!1,isFocused:!1,showTicks:!1,labelPosition:"top",label:"Slider label",size:"m",min:10,max:20,values:[14],step:2,id:"spectrum-Slider"},parameters:{actions:{handles:["mousedown .spectrum-Slider-handle","change .spectrum-Slider-input"]},componentVersion:Q,docs:{description:{component:"A slider allows users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable."}}}},l=s.bind({});l.args={};const X=s.bind({});X.args={...l.args,variant:"filled"};const Z=s.bind({});Z.args={...l.args,min:0,variant:"offset"};const z=s.bind({});z.args={...l.args,variant:"ramp"};const C=s.bind({});C.args={...l.args,values:[14,16]};const ee=s.bind({});ee.args={...l.args,label:void 0,showTicks:!0};const te=s.bind({});te.args={...l.args,isDisabled:!0};const I=s.bind({});I.args={...l.args,variant:"with focus",isFocused:!0};const p=I.bind({});p.tags=["!autodocs","!dev","test"];p.parameters={chromatic:{forcedColors:"active",modes:j}};const re=s.bind({});re.args={...l.args,customStyles:{"--spectrum-slider-track-color":"linear-gradient(to right, red, green 100%)","--spectrum-slider-track-color-rtl":"linear-gradient(to left, red, green 100%)"},label:"Slider label that is long and wraps to the next line"};const ne=s.bind({});ne.args={...l.args,labelPosition:"side"};var A,E,G;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:"Template.bind({})",...(G=(E=p.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};const we=["Default","Filled","FilledOffset","Ramp","Range","Tick","Disabled","WithFocus","WithForcedColors","Gradient","SideLabel"];export{l as Default,te as Disabled,X as Filled,Z as FilledOffset,re as Gradient,z as Ramp,C as Range,ne as SideLabel,ee as Tick,I as WithFocus,p as WithForcedColors,we as __namedExportsOrder,ke as default};
