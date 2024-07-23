import{d as G}from"./index-BCEELo55.js";import{d as M}from"./states-DzrSzBKQ.js";import{Template as m}from"./template-Df-YB4AQ.js";import"./lit-element-CJjJlyWZ.js";import{x as i}from"./lit-html-BdGv-Ldy.js";import{a as W}from"./class-map-sTkR_Npl.js";import{o as q}from"./if-defined-Bo9G1hLT.js";import{o as n}from"./style-map-yx2CMG_J.js";import{n as b}from"./when-BR7zwNJC.js";import"./decorator-Dl7o6wQR.js";import"./utilities-BisrhIqU.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./v4-CQkTLCs1.js";import"./capitalize-D60SaZ2R.js";const E="3.1.1",p=({rootClass:e="spectrum-Dial",size:l="m",label:t,isFocused:r=!1,isDragged:d=!1,isDisabled:u=!1,min:g=0,max:w=100,customClasses:S=[],id:L})=>i`
	<div
		class=${W({[e]:!0,[`${e}--small`]:l==="s","is-disabled":u,...S.reduce((o,a)=>({...o,[a]:!0}),{})})}
		id=${q(L)}
		@mousedown=${()=>{u||document.body.classList.add("u-isGrabbing")}}
		@mouseup=${()=>{document.body.classList.remove("u-isGrabbing")}}
		@mousemove=${o=>{if(u||!document.body.classList.contains("u-isGrabbing"))return;const a=o.target.closest(".spectrum-Dial"),f=a.querySelector(".spectrum-Dial-handle"),c=a.querySelector("input"),y=-45,z=225,C=a.offsetLeft+a.offsetParent.offsetLeft;var F=Math.max(Math.min(o.x-C,a.offsetWidth),0),x=F/a.offsetWidth*100,T=x*.01*(z-y)+y;f.style.transform="rotate("+T+"deg)",c.value=Math.round(x*.01*(c.max-c.min)+c.min)}}
	>
		${b(t,()=>i`<div class="${e}-labelContainer">
				<label id="dialLabel" class="${e}-label" for="labeledDial"
					>${t}</label
				>
				<div
					class="${e}-value"
					role="textbox"
					aria-readonly="true"
					aria-labelledby="dialLabel"
				>
					${g}
				</div>
			</div>`)}
		<div class="${e}-controls">
			<div class="${e}-handle ${d?"is-dragged":""} ${r?"is-focused":""}" tabindex="0">
				<input
					type="range"
					class="${e}-input"
					min="${g}"
					max="${w}"
					value="${g}"
					@change=${o=>{const a=o.target.value,f=document.getElementById("dialLabel");f.nextSibling.textContent=a}}
				/>
			</div>
		</div>
	</div>
`,_=(e,l)=>["s","m","l","xl"].map(t=>i`
	<div>
		${m({semantics:"heading",size:"m",weight:"light",content:[{s:"Small",m:"Medium",l:"Large",xl:"Extra-large"}[t]],customClasses:["chromatic-ignore"]})}
		<div>
			${p({...e,size:t})}
		</div>
	</div>
`),I=(e,l)=>i`
  <div
    style=${n({display:"flex","flex-direction":"row","flex-wrap":"wrap",gap:"32px"})}
  >
    ${[{},{heading:"Disabled",isDisabled:!0},{heading:"Focused",isFocused:!0},{heading:"Dragged",isDragged:!0}].map(({heading:t,...r})=>i`
        <div>
          ${m({semantics:"heading",size:"m",weight:"light",content:[t??i`&nbsp;`],customClasses:["chromatic-ignore"]})}
          <div>
            ${p({...e,...r})}
          </div>
        </div>
      `)}
  </div>
`,O=(e,l)=>i`
  <div
    style=${n({display:window.isChromatic()?"none":"contents"})}
  >
    ${p(e)}
  </div>
  <div
    style=${n({display:window.isChromatic()?"flex":"none","flex-direction":"column","align-items":"flex-start",gap:"32px"})}
  >
    ${[{heading:"Default"},{heading:"With label",label:"Volume",withStates:!1}].map(({heading:t,withStates:r=!0,...d})=>i`
        <div class="spectrum-Typography">
          ${b(t,()=>m({semantics:"heading",size:"l",content:[t],customClasses:["chromatic-ignore"]}))}
          <div
            style=${n({padding:"12px",border:"1px solid var(--spectrum-gray-200)","border-radius":"4px"})}
          >
            ${b(r,()=>I({...e,...d}),()=>p({...e,...d}))}
          </div>
        </div>
      `)}
	<div class="spectrum-Typography">
		${m({semantics:"heading",size:"l",content:["Sizing"]})}
		<div
			style=${n({display:"flex","flex-direction":"row","align-items":"flex-start",gap:"32px",padding:"12px",border:"1px solid var(--spectrum-gray-200)","border-radius":"4px"})}
		>
			${_(e)}
		</div>
	</div>
  </div>
`,Z={title:"Dial",component:"Dial",argTypes:{size:{name:"Size",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["s","m"],control:"select"},label:{name:"Label",table:{type:{summary:"string"},category:"Content"},control:"text"},isFocused:M,isDragged:{name:"Dragged",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isDisabled:{name:"Disabled",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"}},args:{rootClass:"spectrum-Dial",size:"m",isFocused:!1,isDragged:!1,isDisabled:!1},parameters:{componentVersion:E,docs:{description:{component:"A dial is an input control used for selecting a value within a range, similar to a slider. It's often used in audio and video mixing and editing applications, where horizontal space is limited."}}}},v=O.bind();v.args={};const s=v.bind({});s.args=v.args;s.tags=["!autodocs","!dev","test"];s.parameters={chromatic:{forcedColors:"active",modes:G}};var $,h,D;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:"DialGroup.bind()",...(D=(h=s.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};const ee=["Default","WithForcedColors"];export{v as Default,s as WithForcedColors,ee as __namedExportsOrder,Z as default};
