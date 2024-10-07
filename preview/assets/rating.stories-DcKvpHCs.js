import{d as A}from"./index-BL42WGY7.js";import{e as F,i as N,l as j}from"./states-D366RZcH.js";import{a as H}from"./variants-YiDXN7gG.js";import{R as m,a as V,g as C,V as W}from"./template-CykOH8vE.js";import{T as f}from"./template-CjNf7Zto.js";import{k as y}from"./lit-element-C96egxJg.js";import{Q as _}from"./repeat-BXd58rDM.js";import"./v4-CQkTLCs1.js";import"./capitalize-D60SaZ2R.js";import"./directive-helpers-Vx9dmk2R.js";const I="@spectrum-css/rating",J="5.1.3",M="The Spectrum CSS rating component",Q="Apache-2.0",G="Adobe",U="https://opensource.adobe.com/spectrum-css/rating",q={type:"git",url:"https://github.com/adobe/spectrum-css.git",directory:"components/rating"},B={url:"https://github.com/adobe/spectrum-css/issues"},K={".":"./dist/index.css","./*.md":"./*.md","./dist/*":"./dist/*","./index-*.css":"./dist/index-*.css","./index.css":"./dist/index.css","./metadata.json":"./metadata/metadata.json","./metadata/*":"./metadata/*","./package.json":"./package.json","./stories/*":"./stories/*"},L="dist/index.css",P=["dist/*","*.md","package.json","stories/*","metadata/*"],X={"@spectrum-css/icon":">=7","@spectrum-css/tokens":">=14"},Y={"@spectrum-css/icon":"workspace:^","@spectrum-css/tokens":"workspace:^"},Z=["spectrum","css","design system","adobe"],ee={access:"public"},se={name:I,version:J,description:M,license:Q,author:G,homepage:U,repository:q,bugs:B,exports:K,main:L,files:P,peerDependencies:X,devDependencies:Y,keywords:Z,publishConfig:ee},r=({rootClass:e="spectrum-Rating",max:g=5,value:c=0,isReadOnly:h=!1,isFocused:O=!1,isDisabled:d=!0,isEmphasized:w=!1,customClasses:S=[],id:T=C("rating")}={},p={})=>{const{updateArgs:n}=p;return y`
		<div
			class=${m({[e]:!0,"is-disabled":d,"is-readOnly":h,"is-focused":O,[`${e}--emphasized`]:w,...S.reduce((i,s)=>({...i,[s]:!0}),{})})}
			id=${V(T)}
			@focusin=${function(){n({isFocused:!0})}}
			@focusout=${function(){n({isFocused:!1})}}
		>
			<input
				class=${m({[`${e}-input`]:!0})}
				type="range"
				min="0"
				max=${g}
				value=${c}
				aria-label="Rating"
				?disabled=${d}
				@change=${function(i){const s=i.target.closest(`.${e}`);if(!s)return;const b=s.closest(`.${e}-input`);b&&!h&&!d&&n({value:parseInt(b.value,10)})}}
			/>
			${_(Array(g).fill(0),(i,s)=>y`
					<span
						class=${m({[`${e}-icon`]:!0,"is-selected":s<=c-1,"is-currentValue":s===c-1})}
						@click=${function(){n({value:s+1,isFocused:!0})}}
					>
						${f({iconName:"Star",setName:"workflow",customClasses:[`${e}-starActive`]},p)}
						${f({iconName:"StarOutline",setName:"workflow",customClasses:[`${e}-starInactive`]},p)}
					</span>
				`)}
		</div>
	`},x=W({Template:r,testData:[{testHeading:"Default"},{testHeading:"Emphasized",isEmphasized:!0}],stateData:[{testHeading:"Disabled",isDisabled:!0},{testHeading:"Focused",isFocused:!0},{testHeading:"Read-only",isReadOnly:!0}]}),ue={title:"Rating",component:"Rating",argTypes:{isEmphasized:H,isFocused:F,isDisabled:N,isReadOnly:j,max:{name:"Maximum value",description:"The total number of stars. Star ratings should always have 5 available stars. This shouldn't be increased or decreased to fit various containers.",type:{name:"number"},table:{type:{summary:"number"},category:"Content",disable:!0},control:{type:"number"}},value:{name:"Value",description:"The current rating, represented by the number of selected stars.",type:{name:"number"},table:{type:{summary:"number"},category:"Content",disable:!0},control:{type:"number"}}},args:{rootClass:"spectrum-Rating",isDisabled:!1,isEmphasized:!1,isReadOnly:!1,max:5,value:3},parameters:{packageJson:se,docs:{description:{component:"The rating component is used to display or collect a user's rating of an item as represented by a number of stars.\n\n### Usage notes\n- All active stars have the class `is-selected` applied.\n- The current value (the last active star) has the class `is-currentValue` applied.\n- When the rating receives focus, the class `is-focused` should be added to the component's root element (`.spectrum-Rating`)."}}}},a=x.bind({});a.args={};const E=x.bind({});E.tags=["!autodocs","!dev"];E.parameters={chromatic:{forcedColors:"active",modes:A}};const t=r.bind({});t.storyName="Read-only";t.tags=["!dev"];t.args={isReadOnly:!0};t.parameters={chromatic:{disableSnapshot:!0}};const u=r.bind({});u.tags=["!dev"];u.args={isEmphasized:!0};u.parameters={chromatic:{disableSnapshot:!0}};const o=r.bind({});o.storyName="Read-only, emphasized";o.tags=["!dev"];o.args={isEmphasized:!0,isReadOnly:!0};o.parameters={chromatic:{disableSnapshot:!0}};const l=r.bind({});l.tags=["!dev"];l.args={isDisabled:!0};l.parameters={chromatic:{disableSnapshot:!0}};var v,$,R;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,description:{story:`A initial value of three is used for the following examples, to demonstrate both active and inactive stars.
When hovering over a rating component that has a previously entered value, an underline appears under the
current selection to provide context.`,...(R=($=a.parameters)==null?void 0:$.docs)==null?void 0:R.description}}};var k,D,z;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,description:{story:"A non-interactive rating.",...(z=(D=t.parameters)==null?void 0:D.docs)==null?void 0:z.description}}};const le=["Default","WithForcedColors","ReadOnly","Emphasized","ReadOnlyEmphasized","Disabled"];export{a as Default,l as Disabled,u as Emphasized,t as ReadOnly,o as ReadOnlyEmphasized,E as WithForcedColors,le as __namedExportsOrder,ue as default};
