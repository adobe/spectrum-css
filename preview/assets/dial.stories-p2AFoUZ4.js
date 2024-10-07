import{d as V}from"./index-BL42WGY7.js";import{e as W,p as j,i as z}from"./states-D366RZcH.js";import{s as H}from"./variants-YiDXN7gG.js";import{R as G,a as M,n as A,g as C,V as I}from"./template-CykOH8vE.js";import{k as b}from"./lit-element-C96egxJg.js";import"./v4-CQkTLCs1.js";import"./capitalize-D60SaZ2R.js";const R="@spectrum-css/dial",T="3.1.3",_="The Spectrum CSS dial component",q="Apache-2.0",E="Adobe",J="https://opensource.adobe.com/spectrum-css/dial",O={type:"git",url:"https://github.com/adobe/spectrum-css.git",directory:"components/dial"},B={url:"https://github.com/adobe/spectrum-css/issues"},P={".":"./dist/index.css","./*.md":"./*.md","./dist/*":"./dist/*","./index-*.css":"./dist/index-*.css","./index.css":"./dist/index.css","./metadata.json":"./metadata/metadata.json","./metadata/*":"./metadata/*","./package.json":"./package.json","./stories/*":"./stories/*"},K="dist/index.css",N=["dist/*","*.md","package.json","stories/*","metadata/*"],Q={"@spectrum-css/tokens":">=14"},U={"@spectrum-css/tokens":"workspace:^"},X=["spectrum","css","design system","adobe"],Y={access:"public"},Z={name:R,version:T,description:_,license:q,author:E,homepage:J,repository:O,bugs:B,exports:P,main:K,files:N,peerDependencies:Q,devDependencies:U,keywords:X,publishConfig:Y},i=({rootClass:s="spectrum-Dial",size:v="m",label:u,isFocusVisible:D=!1,isDragged:x=!1,isDisabled:o=!1,min:n=0,max:y=100,customClasses:$=[],id:k=C("dial")}={})=>b`
    <div
      class=${G({[s]:!0,[`${s}--small`]:v==="s","is-disabled":o,...$.reduce((t,e)=>({...t,[e]:!0}),{})})}
      id=${M(k)}
      @mousedown=${()=>{o||document.body.classList.add("u-isGrabbing")}}
      @mouseup=${()=>{document.body.classList.remove("u-isGrabbing")}}
      @mousemove=${t=>{if(o||!document.body.classList.contains("u-isGrabbing"))return;const e=t.target.closest(".spectrum-Dial"),d=e.querySelector(".spectrum-Dial-handle"),a=e.querySelector("input"),p=-45,L=225,S=e.offsetLeft+e.offsetParent.offsetLeft;var w=Math.max(Math.min(t.x-S,e.offsetWidth),0),g=w/e.offsetWidth*100,F=g*.01*(L-p)+p;d.style.transform="rotate("+F+"deg)",a.value=Math.round(g*.01*(a.max-a.min)+a.min)}}
		>
			${A(u,()=>b`<div class="${s}-labelContainer">
					<label id="dialLabel" class="${s}-label" for="labeledDial"
						>${u}</label
					>
					<div
						class="${s}-value"
						role="textbox"
						aria-readonly="true"
						aria-labelledby="dialLabel"
					>
						${n}
					</div>
				</div>`)}
			<div class="${s}-controls">
				<div
					class="${s}-handle
					${x?"is-dragged":""}
					${D?"is-focus-visible":""}"
					tabindex="0"
				>
					<input
						type="range"
						class="${s}-input"
						min="${n}"
						max="${y}"
						value="${n}"
						@change=${t=>{const e=t.target.value,d=document.getElementById("dialLabel");d.nextSibling.textContent=e}}
					/>
				</div>
			</div>
		</div>
	`,f=I({Template:i,testData:[{testHeading:"Default"},{testHeading:"With label",label:"Volume",withStates:!1}],stateData:[{testHeading:"Disabled",isDisabled:!0},{testHeading:"Focused",isFocusVisible:!0},{testHeading:"Dragged",isDragged:!0}]}),de={title:"Dial",component:"Dial",argTypes:{size:H(["s","m"]),label:{name:"Label",table:{type:{summary:"string"},category:"Content"},control:"text"},isFocusVisible:W,isDragged:j,isDisabled:z},args:{rootClass:"spectrum-Dial",size:"m",isFocusVisible:!1,isDragged:!1,isDisabled:!1},parameters:{packageJson:Z,docs:{description:{component:"A dial is an input control used for selecting a value within a range, similar to a slider. It's often used in audio and video mixing and editing applications, where horizontal space is limited."}}}},h=f.bind();h.args={};const r=i.bind();r.args={size:"s"};r.parameters={chromatic:{disableSnapshot:!0}};r.tags=["!dev"];const c=i.bind();c.args={label:"Volume"};c.parameters={chromatic:{disableSnapshot:!0}};c.tags=["!dev"];const l=i.bind();l.args={isDisabled:!0};l.parameters={chromatic:{disableSnapshot:!0}};l.tags=["!dev"];const m=f.bind({});m.args=h.args;m.tags=["!autodocs","!dev"];m.parameters={chromatic:{forcedColors:"active",modes:V}};const re=["Default","Small","WithLabel","Disabled","WithForcedColors"];export{h as Default,l as Disabled,r as Small,m as WithForcedColors,c as WithLabel,re as __namedExportsOrder,de as default};
