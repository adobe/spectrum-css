import{d as k}from"./index-BCEELo55.js";import"./lit-element-CJjJlyWZ.js";import{T as l,x as s}from"./lit-html-BdGv-Ldy.js";import{T as S}from"./template-CU9oPm8-.js";import{T as A}from"./template-D5ShUZ_q.js";import{a as I}from"./class-map-sTkR_Npl.js";import{o as L}from"./style-map-yx2CMG_J.js";import"./decorator-Dl7o6wQR.js";import"./utilities-BisrhIqU.js";import"./when-BR7zwNJC.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./v4-CQkTLCs1.js";import"./template-BTVRUgwL.js";import"./if-defined-Bo9G1hLT.js";import"./capitalize-D60SaZ2R.js";import"./lowerCase-CIorQk0G.js";import"./_createCompounder-DY9ZW94_.js";const D="8.1.1",i=({rootClass:e="spectrum-InLineAlert",customClasses:o=[],customStyles:x={},headerText:y,text:v,variant:a="neutral",isClosable:f=!1}={},b={})=>{let t;switch(a){case"info":t="Info";break;case"positive":t="CheckmarkCircle";break;case"notice":case"negative":case"closable":t="Alert";break;default:t=void 0}const w=typeof t<"u"?A({iconName:t,customClasses:[`${e}-icon`]},b):l,T=f?s`
		<div class="spectrum-InLineAlert-footer">
			${S({treatment:"outline",variant:"primary",iconName:!1,hideLabel:!1,label:"Ok"})}
		</div>
	`:l;return s`
		<div
			class=${I({[e]:!0,[`${e}--${a}`]:typeof a<"u",...o.reduce(($,C)=>({...$,[C]:!0}),{})})}
			style=${L(x)}

		>
			<div class="${e}-header">
				${a.charAt(0).toUpperCase()+a.slice(1)} ${y}
				${w}
			</div>
			<div class="${e}-content">${v}</div>
			${T}
		</div>
	`},Q={title:"In-line alert",component:"InLineAlert",argTypes:{headerText:{name:"Header Text",type:{name:"string",required:!0},table:{type:{summary:"string"},disable:!1,category:"Content"},control:{type:"text"}},text:{name:"Text",type:{name:"string",required:!0},table:{type:{summary:"string"},disable:!1,category:"Component"},control:{type:"text"}},variant:{name:"Variants",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},options:["neutral","info","positive","notice","negative"],control:"select"},isClosable:{name:"Closable",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Advanced"},control:"boolean"}},args:{rootClass:"spectrum-InLineAlert",headerText:"in-line alert header",text:"This is an alert.",variant:"neutral",isClosable:!1},parameters:{componentVersion:D,docs:{description:{component:"In-line alerts display a non-modal message associated with objects in a view. These are often used in form validation, providing a place to aggregate feedback related to multiple fields."}}}},g=(e,o)=>s`
        <div>
            ${i(e,o)}
            ${window.isChromatic()?i({...e,headerText:"in-line alert header announcing something very long and in-line",text:"this is a very urgent alert with a lot of context, so the text has to wrap",customStyles:{"max-width":"400px"}})&&i({...e,headerText:"in-line alert header announcing something very long and in-line",text:"this is a very urgent alert with a lot of context, so the text has to wrap",customStyles:{"max-width":"400px"},variant:"notice",isClosable:!0}):null}
        </div>
    `,r=g.bind({});r.args={};const n=g.bind({});n.tags=["!autodocs","!dev","test"];n.parameters={chromatic:{forcedColors:"active",modes:k}};var c,m,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`(args, context) => {
  return html\`
        <div>
            \${Template(args, context)}
            \${window.isChromatic() ? Template({
    ...args,
    headerText: "in-line alert header announcing something very long and in-line",
    text: "this is a very urgent alert with a lot of context, so the text has to wrap",
    customStyles: {
      "max-width": "400px"
    }
  }) && Template({
    ...args,
    headerText: "in-line alert header announcing something very long and in-line",
    text: "this is a very urgent alert with a lot of context, so the text has to wrap",
    customStyles: {
      "max-width": "400px"
    },
    variant: "notice",
    isClosable: true
  }) : null}
        </div>
    \`;
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,h,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`(args, context) => {
  return html\`
        <div>
            \${Template(args, context)}
            \${window.isChromatic() ? Template({
    ...args,
    headerText: "in-line alert header announcing something very long and in-line",
    text: "this is a very urgent alert with a lot of context, so the text has to wrap",
    customStyles: {
      "max-width": "400px"
    }
  }) && Template({
    ...args,
    headerText: "in-line alert header announcing something very long and in-line",
    text: "this is a very urgent alert with a lot of context, so the text has to wrap",
    customStyles: {
      "max-width": "400px"
    },
    variant: "notice",
    isClosable: true
  }) : null}
        </div>
    \`;
}`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const R=["Default","WithForcedColors"];export{r as Default,n as WithForcedColors,R as __namedExportsOrder,Q as default};
