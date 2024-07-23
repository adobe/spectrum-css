import{d as h}from"./index-BCEELo55.js";import{d as v}from"./states-DzrSzBKQ.js";import{T as p}from"./template-D5ShUZ_q.js";import"./lit-element-CJjJlyWZ.js";import{x as d}from"./lit-html-BdGv-Ldy.js";import{a as l}from"./class-map-sTkR_Npl.js";import{o as R}from"./if-defined-Bo9G1hLT.js";import{c as z}from"./repeat-Du-egFmu.js";import"./directive-helpers-F-Ou1E0_.js";const E="5.1.1",t=({rootClass:e="spectrum-Rating",max:c=5,value:i=0,isReadOnly:n=!1,isFocused:y=!1,isDisabled:s=!0,isEmphasized:g=!1,customClasses:f=[],id:$}={},m={})=>{const{updateArgs:o}=m;return d`
		<div
			class=${l({[e]:!0,"is-disabled":s,"is-readOnly":n,[`${e}--emphasized`]:g,...f.reduce((r,a)=>({...r,[a]:!0}),{})})}
			id=${R($)}
			@focusin=${()=>{o({isFocused:!0})}}
			@focusout=${()=>{o({isFocused:!1})}}
		>
			<input
				class=${l({[`${e}-input`]:!0,"is-Focus":y})}
				type="range"
				min="0"
				max=${c}
				value=${i}
				aria-label="Rating"
				?readonly=${n}
				?disabled=${s}
				@change=${r=>{const a=r.target.closest(`.${e}`);if(!a)return;const u=a.closest(`.${e}-input`);u&&!n&&!s&&o({value:parseInt(u.value,10)})}}
			/>
			${z(Array(c).fill(0),(r,a)=>d`
					<span
						class=${l({[`${e}-icon`]:!0,"is-selected":!s&&a<=i-1,"is-currentValue":!s&&!n&&a===i-1})}
						@click=${()=>{o({value:a+1,isFocused:!0})}}
					>
						${p({iconName:"Star",customClasses:[`${e}-starActive`]},m)}
						${p({iconName:"StarOutline",customClasses:[`${e}-starInactive`]},m)}
					</span>
				`)}
		</div>
	`},k={title:"Rating",component:"Rating",argTypes:{isEmphasized:{name:"Emphasized styling",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},isFocused:v,isDisabled:{name:"Disabled",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isReadOnly:{name:"Read only",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},max:{name:"Maximum value",type:{name:"number"},table:{type:{summary:"number"},category:"Content"},control:{type:"number"}},value:{name:"Value",type:{name:"number"},table:{type:{summary:"number"},category:"Content",disable:!0},control:{type:"number"}}},args:{rootClass:"spectrum-Rating",isDisabled:!1,max:5,value:3},parameters:{componentVersion:E,docs:{description:{component:"A rating element is used to display or collect a user's rating of an item as represented by a number of stars."}}}},F=t.bind({});F.args={};const b=t.bind({});b.tags=["!autodocs","!dev","test"];b.parameters={chromatic:{forcedColors:"active",modes:h}};const O=t.bind({});O.args={isReadOnly:!0};const D=t.bind({});D.args={isEmphasized:!0};const A=t.bind({});A.args={isEmphasized:!0,isReadOnly:!0};const T=t.bind({});T.args={isDisabled:!0};const j=["Default","WithForcedColors","ReadOnly","Emphasized","ReadOnlyEmphasized","Disabled"];export{F as Default,T as Disabled,D as Emphasized,O as ReadOnly,A as ReadOnlyEmphasized,b as WithForcedColors,j as __namedExportsOrder,k as default};
