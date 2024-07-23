import{Default as r}from"./link.stories-Dw1OD-i9.js";import{d as D}from"./index-BCEELo55.js";import{Default as s}from"./typography.stories-CsS6qewV.js";import"./decorator-Dl7o6wQR.js";import{V as W}from"./utilities-BisrhIqU.js";import"./lit-element-CJjJlyWZ.js";import{x as $}from"./lit-html-BdGv-Ldy.js";import{a as b}from"./class-map-sTkR_Npl.js";import{o as a}from"./if-defined-Bo9G1hLT.js";import{o as x}from"./style-map-yx2CMG_J.js";import"./template-BzbLabtx.js";import"./capitalize-D60SaZ2R.js";import"./lowerCase-CIorQk0G.js";import"./_createCompounder-DY9ZW94_.js";import"./template-Df-YB4AQ.js";import"./when-BR7zwNJC.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./v4-CQkTLCs1.js";const y="5.2.1",C=({rootClass:p="spectrum-Well",customClasses:l=[],customStyles:c={},id:d,testId:u,content:f=[]},g)=>$`
	<span
		class=${b({[p]:!0,...l.reduce((o,h)=>({...o,[h]:!0}),{})})}
		style=${x(c)}
		id=${a(d)}
		data-testid=${a(u)}
	>
		${f.map(o=>typeof o=="function"?o({},g):o)}
	</span>
`,v=W({Template:C,testData:[{}]}),K={title:"Well",component:"Well",argTypes:{content:{table:{disable:!0}}},args:{rootClass:"spectrum-Well"},parameters:{actions:{handles:[]},componentVersion:y,docs:{description:{component:"A well is a content container that displays non-editable content separate from other content on the screen. Often this is used to display preformatted text, such as code/markup examples on a documentation page."}}}},e=v.bind({});e.args={content:[()=>s(s.args),()=>r(r.args)]};const t=e.bind({});t.args=e.args;t.tags=["!autodocs","!dev","test"];t.parameters={chromatic:{forcedColors:"active",modes:D}};var i,m,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"WellGroup.bind({})",...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const L=["Default","WithForcedColors"];export{e as Default,t as WithForcedColors,L as __namedExportsOrder,K as default};
