import{d as y}from"./index-BCEELo55.js";import"./lit-element-CJjJlyWZ.js";import{x as u}from"./lit-html-BdGv-Ldy.js";import{a as x}from"./class-map-sTkR_Npl.js";import{o as f}from"./style-map-yx2CMG_J.js";const b="7.2.0",o=({rootClass:t="spectrum-StatusLight",size:a="m",variant:r="info",label:g,customStyles:h={}})=>u`
	<div
		class=${x({[t]:!0,[`${t}--size${a==null?void 0:a.toUpperCase()}`]:typeof a<"u",[`${t}--${r}`]:typeof r<"u"})}
		style=${f(h)}
	>
		${g}
	</div>
`,T={title:"Status light",component:"Statuslight",argTypes:{size:{name:"Size",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["s","m","l","xl"],control:"select"},label:{name:"Label",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:{type:"text"}},variant:{name:"Variant",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["accent","info","neutral","positive","notice","negative","gray","red","orange","yellow","chartreuse","celery","green","seafoam","cyan","blue","indigo","purple","fuchsia","magenta"],control:"select"}},args:{rootClass:"spectrum-StatusLight",size:"m",label:"Status",variant:"info"},parameters:{componentVersion:b}},d=(t,a)=>u`
        <div>
            ${o(t)}
            ${window.isChromatic()?o({...t,label:"Status light label that is long and wraps to the next line",customStyles:{"max-width":"150px"}}):null}
        </div>
    `,n=d.bind({});n.args={};const e=d.bind({});e.tags=["!autodocs","!dev","test"];e.parameters={chromatic:{forcedColors:"active",modes:y}};var s,i,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`(args, context) => {
  return html\`
        <div>
            \${Template(args, context)}
            \${window.isChromatic() ? Template({
    ...args,
    label: "Status light label that is long and wraps to the next line",
    customStyles: {
      "max-width": "150px"
    }
  }, context) : null}
        </div>
    \`;
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,c,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`(args, context) => {
  return html\`
        <div>
            \${Template(args, context)}
            \${window.isChromatic() ? Template({
    ...args,
    label: "Status light label that is long and wraps to the next line",
    customStyles: {
      "max-width": "150px"
    }
  }, context) : null}
        </div>
    \`;
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const D=["Default","WithForcedColors"];export{n as Default,e as WithForcedColors,D as __namedExportsOrder,T as default};
