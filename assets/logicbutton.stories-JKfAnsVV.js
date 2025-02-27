import{d as h}from"./index-_AwL4lpH.js";import{a as f}from"./states-C6Exry22.js";import{R as v,V as k}from"./decorator-BliclrE4.js";import{k as l}from"./lit-element-C96egxJg.js";import"./capitalize-D60SaZ2R.js";import"./v4-CQkTLCs1.js";const y="index.css",x=[".spectrum-LogicButton",".spectrum-LogicButton--and",".spectrum-LogicButton--and:hover:not([disabled])",".spectrum-LogicButton--or",".spectrum-LogicButton--or:hover:not([disabled])",".spectrum-LogicButton.is-disabled",".spectrum-LogicButton::-moz-focus-inner",".spectrum-LogicButton:after",".spectrum-LogicButton:disabled",".spectrum-LogicButton:focus",".spectrum-LogicButton:focus-visible",".spectrum-LogicButton:focus-visible:after"],L=["--mod-animation-duration-100","--mod-focus-indicator-gap","--mod-line-height-100","--mod-logic-button-and-background-color","--mod-logic-button-and-background-color-disabled","--mod-logic-button-and-background-color-hover","--mod-logic-button-and-background-color-hover-disabled","--mod-logic-button-and-border-color","--mod-logic-button-and-border-color-disabled","--mod-logic-button-and-border-color-hover","--mod-logic-button-and-border-color-hover-disabled","--mod-logic-button-and-text-color","--mod-logic-button-and-text-color-disabled","--mod-logic-button-border-radius","--mod-logic-button-border-width","--mod-logic-button-focus-indicator-color","--mod-logic-button-focus-indicator-gap","--mod-logic-button-focus-indicator-width","--mod-logic-button-font-size","--mod-logic-button-font-weight","--mod-logic-button-height","--mod-logic-button-or-background-color","--mod-logic-button-or-background-color-disabled","--mod-logic-button-or-background-color-hover","--mod-logic-button-or-background-color-hover-disabled","--mod-logic-button-or-border-color","--mod-logic-button-or-border-color-disabled","--mod-logic-button-or-border-color-hover","--mod-logic-button-or-border-color-hover-disabled","--mod-logic-button-or-text-color","--mod-logic-button-or-text-color-disabled","--mod-logic-button-padding","--mod-sans-font-family-stack"],B=["--spectrum-logic-button-and-background-color","--spectrum-logic-button-and-background-color-disabled","--spectrum-logic-button-and-background-color-hover","--spectrum-logic-button-and-background-color-hover-disabled","--spectrum-logic-button-and-border-color","--spectrum-logic-button-and-border-color-disabled","--spectrum-logic-button-and-border-color-hover","--spectrum-logic-button-and-border-color-hover-disabled","--spectrum-logic-button-and-text-color","--spectrum-logic-button-border-radius","--spectrum-logic-button-or-background-color","--spectrum-logic-button-or-background-color-disabled","--spectrum-logic-button-or-background-color-hover","--spectrum-logic-button-or-background-color-hover-disabled","--spectrum-logic-button-or-border-color","--spectrum-logic-button-or-border-color-disabled","--spectrum-logic-button-or-border-color-hover","--spectrum-logic-button-or-border-color-hover-disabled","--spectrum-logic-button-or-text-color","--spectrum-logic-button-text-color-disabled"],D=["--spectrum-animation-duration-100","--spectrum-blue-1100","--spectrum-bold-font-weight","--spectrum-border-width-200","--spectrum-component-edge-to-text-50","--spectrum-corner-radius-100","--spectrum-focus-indicator-color","--spectrum-focus-indicator-gap","--spectrum-focus-indicator-thickness","--spectrum-font-size-100","--spectrum-gray-100","--spectrum-gray-500","--spectrum-line-height-100","--spectrum-sans-font-family-stack","--spectrum-white"],w=["--mod-button-animation-duration","--mod-button-focus-indicator-gap","--mod-button-font-family","--mod-button-line-height"],C={sourceFile:y,selectors:x,modifiers:L,component:B,global:D,"system-theme":["--system-logic-button-and-background-color-disabled","--system-logic-button-and-background-color-hover-disabled","--system-logic-button-and-border-color-disabled","--system-logic-button-and-border-color-hover-disabled","--system-logic-button-or-background-color-disabled","--system-logic-button-or-background-color-hover-disabled","--system-logic-button-or-border-color-disabled","--system-logic-button-or-border-color-hover-disabled"],passthroughs:w,"high-contrast":["--highcontrast-logic-button-and-background-color","--highcontrast-logic-button-and-background-color-hover","--highcontrast-logic-button-and-border-color","--highcontrast-logic-button-and-border-color-hover","--highcontrast-logic-button-and-text-color","--highcontrast-logic-button-focus-indicator-color","--highcontrast-logic-button-or-background-color","--highcontrast-logic-button-or-background-color-hover","--highcontrast-logic-button-or-border-color","--highcontrast-logic-button-or-border-color-hover","--highcontrast-logic-button-or-text-color"]},$="@spectrum-css/logicbutton",A="6.1.0",S="The Spectrum CSS logicbutton component",j="Apache-2.0",F="Adobe",O="https://opensource.adobe.com/spectrum-css/?path=/docs/components-logic-button--docs",T={type:"git",url:"https://github.com/adobe/spectrum-css.git",directory:"components/logicbutton"},V={url:"https://github.com/adobe/spectrum-css/issues"},z={".":"./dist/index.css","./*.md":"./*.md","./dist/*":"./dist/*","./index-*.css":"./dist/index-*.css","./index.css":"./dist/index.css","./metadata.json":"./dist/metadata.json","./package.json":"./package.json","./stories/*":"./stories/*"},H="dist/index.css",M={"@spectrum-css/tokens":">=16.0.1"},_={"@spectrum-css/tokens":{optional:!0}},G={"@spectrum-css/commons":"11.0.0","@spectrum-css/tokens":"16.0.1"},R=["design-system","spectrum","spectrum-css","adobe","adobe-spectrum","component","css"],W={access:"public"},q=[{guidelines:"https://spectrum-contributions.corp.adobe.com/page/logic-button-beta",rootClass:"spectrum-LogicButton"}],E={name:$,version:A,description:S,license:j,author:F,homepage:O,repository:T,bugs:V,exports:z,main:H,peerDependencies:M,peerDependenciesMeta:_,devDependencies:G,keywords:R,publishConfig:W,spectrum:q},e=({rootClass:o="spectrum-LogicButton",customClasses:n=[],variant:t="and",isDisabled:i=!1}={})=>l`
		<button
			class=${v({[o]:!0,[`${o}--${t}`]:typeof t<"u",...n.reduce((m,p)=>({...m,[p]:!0}),{})})}
			aria-disabled=${i?"true":"false"}
			?disabled=${i}
			type="button"
		>
			${t?t.charAt(0).toUpperCase()+t.slice(1):void 0}
		</button>
	`,J=(o,n)=>l`
	${e({...o})}
	${e({...o,variant:"or"})}
`,b=k({Template:e,testData:[{testHeading:"And variant"},{testHeading:"Or variant",variant:"or"}],stateData:[{testHeading:"Disabled",isDisabled:!0}]}),X={title:"Logic button",component:"LogicButton",argTypes:{variant:{name:"Variant",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},options:["and","or"],control:"inline-radio"},isDisabled:f},args:{rootClass:"spectrum-LogicButton",variant:"and",isDisabled:!1},parameters:{packageJson:E,metadata:C,docs:{description:{component:"A logic button displays an operator within a boolean logic sequence."}}}},r=b.bind({});r.args={};const c=e.bind({});c.tags=["!dev"];c.args={variant:"or"};c.parameters={chromatic:{disableSnapshot:!0}};const s=J.bind({});s.tags=["!dev"];s.args={isDisabled:!0};s.parameters={chromatic:{disableSnapshot:!0}};const g=b.bind({});g.tags=["!autodocs","!dev"];g.parameters={chromatic:{forcedColors:"active",modes:h}};var d,a,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,description:{story:"The default logic button is the And variant.",...(u=(a=r.parameters)==null?void 0:a.docs)==null?void 0:u.description}}};const Y=["Default","Or","Disabled","WithForcedColors"];export{r as Default,s as Disabled,c as Or,g as WithForcedColors,Y as __namedExportsOrder,X as default};
