import{d as H}from"./index-BCEELo55.js";import{Template as m}from"./template-Df-YB4AQ.js";import"./lit-element-CJjJlyWZ.js";import{x as s}from"./lit-html-BdGv-Ldy.js";import{T as v}from"./template-D5ShUZ_q.js";import{T as L}from"./template-xI5Kowax.js";import{T as P}from"./template-BO-X2BxT.js";import{a as w}from"./class-map-sTkR_Npl.js";import{o as U}from"./if-defined-Bo9G1hLT.js";import{c as A}from"./repeat-Du-egFmu.js";import{o as T}from"./style-map-yx2CMG_J.js";import{n as d}from"./when-BR7zwNJC.js";import"./decorator-Dl7o6wQR.js";import"./utilities-BisrhIqU.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./v4-CQkTLCs1.js";import"./capitalize-D60SaZ2R.js";import"./template-BSRXx7Ch.js";import"./template-CLOJq6Hl.js";import"./upperCase-0eNr0WW7.js";import"./_createCompounder-DY9ZW94_.js";import"./lowerCase-CIorQk0G.js";import"./template-BzRF0abB.js";import"./template-BMKK6e4E.js";import"./template-Di67rEmc.js";import"./template-B5CNIEfi.js";import"./template-BtQIgTkN.js";import"./template-D7lOzDBB.js";import"./template-CO7DuZY3.js";import"./template-BCjEPzLh.js";import"./template-BTVRUgwL.js";import"./directive-helpers-F-Ou1E0_.js";const J="5.1.1",g=({rootClass:n="spectrum-Tabs",customClasses:F=[],size:o="m",orientation:y="horizontal",isQuiet:N=!1,isOpen:W=!1,isEmphasized:k=!1,isCompact:M=!1,iconOnly:h=!1,customStyles:j={},content:a=[]}={},p={})=>{if(!a||!a.length)return console.warn("Tabs: content required"),s``;const c=y==="vertical",B=y==="horizontal",b=y==="overflow",$=e=>d(e,()=>s`
			<div
				class="${n}-selectionIndicator"
				style=${U(T({blockSize:c?"100%":void 0,inlineSize:c?void 0:"100%",maxInlineSize:b?"50px":void 0,marginInlineStart:c?"calc(-1 * var(--spectrum-tabs-start-to-edge))":void 0}))}
			></div>`);return s`
		<div
			class=${w({[n]:!0,[`${n}--size${o==null?void 0:o.toUpperCase()}`]:typeof o<"u",[`${n}--horizontal`]:B||b,[`${n}--vertical`]:c,[`${n}--quiet`]:N,[`${n}--emphasized`]:k,[`${n}--compact`]:M,...F.reduce((e,x)=>({...e,[x]:!0}),{})})}
			style=${T(j)}
		>
			${d(!b,()=>A(a,e=>e.id,e=>typeof e=="object"?s`
							<div
								class=${w({[`${n}-item`]:!0,"is-selected":(e==null?void 0:e.isSelected)??!1,"is-disabled":(e==null?void 0:e.isDisabled)??!1})}
								tabindex="0"
							>
								${d(e.icon,()=>v({iconName:e.icon,size:o},p))}
								${d(e.label&&!h,()=>s`
									<span class="${n}-itemLabel">
										${e.label}
									</span>
								`)}
								${$(e.isSelected)}
							</div>
						`:e),()=>s`
				${P({isQuiet:!0,size:o,isOpen:W,placeholder:h?v({iconName:a==null?void 0:a[0].icon,size:o},p):a==null?void 0:a[0].label,name:a==null?void 0:a[0].label,id:"tab-selector",customPopoverStyles:{insetBlockStart:"24px"},content:[()=>L({selectionMode:"none",size:o,role:"listbox",subrole:"option",customStyles:{minWidth:"max-content"},items:a.filter((e,x)=>x!==0).map(e=>({...e,iconName:e.icon,label:h?void 0:e.label}))},p)]},p)}
				${$(!0)}
			`)}
		</div>
	`},Ge={title:"Tabs",component:"Tabs",argTypes:{content:{table:{disable:!0}},size:{name:"Size",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["s","m","l","xl"],control:"select"},orientation:{name:"Orientation",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component",default:"horizontal"},options:["horizontal","vertical","overflow"],control:"select",default:"horizontal"},isQuiet:{name:"Quiet",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isEmphasized:{name:"Emphasized",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isCompact:{name:"Compact",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean",if:{arg:"isQuiet",truthy:!0}},iconOnly:{name:"Icon only",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"}},args:{rootClass:"spectrum-Tabs",isQuiet:!1,isEmphasized:!1,isCompact:!1,iconOnly:!1,content:[{id:"tab-1",label:"Tab 1",icon:"Folder",isSelected:!0},{id:"tab-2",label:"Tab 2",icon:"Image"},{id:"tab-3",label:"Tab 3",icon:"Document",isDisabled:!0}]},parameters:{actions:{handles:[".spectrum-Tabs-item"]},componentVersion:J,docs:{description:{component:"Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit."}}}},u=n=>s`
  <div
    style="display: flex; flex-direction: ${n.orientation==="horizontal"?"column":"row"}; gap: 32px;"
  >
    ${g({...n,content:[{id:"tab-1",label:"Tab 1",isSelected:!0},{id:"tab-2",label:"Tab 2",isDisabled:!0},{id:"tab-3",label:"Tab 3"}]})}
    ${g(n)} ${g({...n,iconOnly:!0})}
  </div>
`,f=n=>s`
  ${window.isChromatic()?s`
  <div style="display: grid; gap: 32px;${n.orientation==="overflow"?" max-inline-size: 100px":""}">
    <div style="display: flex; flex-flow: column nowrap; gap: 8px;">
      ${m({semantics:"heading",size:"s",content:["Default"],customClasses:["chromatic-ignore"]})}
      ${u(n)}
    </div>
    <div style="display: flex; flex-flow: column nowrap; gap: 8px;">
      ${m({semantics:"heading",size:"s",content:["Emphasized"],customClasses:["chromatic-ignore"]})}
      ${u({...n,isEmphasized:!0})}
    </div>
    <div style="display: flex; flex-flow: column nowrap; gap: 8px;">
      ${m({semantics:"heading",size:"s",content:["Quiet"],customClasses:["chromatic-ignore"]})}
      ${u({...n,isQuiet:!0})}
    </div>
    <div style="display: flex; flex-flow: column nowrap; gap: 8px;">
      ${m({semantics:"heading",size:"s",content:["Quiet + compact"],customClasses:["chromatic-ignore"]})}
      ${u({...n,isQuiet:!0,isCompact:!0})}
    </div>
  </div>
`:g(n)}
`,t=f.bind({});t.args={};const i=f.bind({});i.tags=["!autodocs","!dev","test"];i.parameters={chromatic:{forcedColors:"active",modes:H}};const r=f.bind({});r.args={orientation:"vertical"};const l=f.bind({});l.args={orientation:"overflow"};var z,C,Q;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`args => html\`
  \${window.isChromatic() ? html\`
  <div style="display: grid; gap: 32px;\${args.orientation === "overflow" ? " max-inline-size: 100px" : ""}">
    <div style="display: flex; flex-flow: column nowrap; gap: 8px;">
      \${Typography({
  semantics: "heading",
  size: "s",
  content: ["Default"],
  customClasses: ["chromatic-ignore"]
})}
      \${TabsGroup(args)}
    </div>
    <div style="display: flex; flex-flow: column nowrap; gap: 8px;">
      \${Typography({
  semantics: "heading",
  size: "s",
  content: ["Emphasized"],
  customClasses: ["chromatic-ignore"]
})}
      \${TabsGroup({
  ...args,
  isEmphasized: true
})}
    </div>
    <div style="display: flex; flex-flow: column nowrap; gap: 8px;">
      \${Typography({
  semantics: "heading",
  size: "s",
  content: ["Quiet"],
  customClasses: ["chromatic-ignore"]
})}
      \${TabsGroup({
  ...args,
  isQuiet: true
})}
    </div>
    <div style="display: flex; flex-flow: column nowrap; gap: 8px;">
      \${Typography({
  semantics: "heading",
  size: "s",
  content: ["Quiet + compact"],
  customClasses: ["chromatic-ignore"]
})}
      \${TabsGroup({
  ...args,
  isQuiet: true,
  isCompact: true
})}
    </div>
  </div>
\` : Template(args)}
\``,...(Q=(C=t.parameters)==null?void 0:C.docs)==null?void 0:Q.source}}};var S,G,E;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`args => html\`
  \${window.isChromatic() ? html\`
  <div style="display: grid; gap: 32px;\${args.orientation === "overflow" ? " max-inline-size: 100px" : ""}">
    <div style="display: flex; flex-flow: column nowrap; gap: 8px;">
      \${Typography({
  semantics: "heading",
  size: "s",
  content: ["Default"],
  customClasses: ["chromatic-ignore"]
})}
      \${TabsGroup(args)}
    </div>
    <div style="display: flex; flex-flow: column nowrap; gap: 8px;">
      \${Typography({
  semantics: "heading",
  size: "s",
  content: ["Emphasized"],
  customClasses: ["chromatic-ignore"]
})}
      \${TabsGroup({
  ...args,
  isEmphasized: true
})}
    </div>
    <div style="display: flex; flex-flow: column nowrap; gap: 8px;">
      \${Typography({
  semantics: "heading",
  size: "s",
  content: ["Quiet"],
  customClasses: ["chromatic-ignore"]
})}
      \${TabsGroup({
  ...args,
  isQuiet: true
})}
    </div>
    <div style="display: flex; flex-flow: column nowrap; gap: 8px;">
      \${Typography({
  semantics: "heading",
  size: "s",
  content: ["Quiet + compact"],
  customClasses: ["chromatic-ignore"]
})}
      \${TabsGroup({
  ...args,
  isQuiet: true,
  isCompact: true
})}
    </div>
  </div>
\` : Template(args)}
\``,...(E=(G=i.parameters)==null?void 0:G.docs)==null?void 0:E.source}}};var D,I,O;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`args => html\`
  \${window.isChromatic() ? html\`
  <div style="display: grid; gap: 32px;\${args.orientation === "overflow" ? " max-inline-size: 100px" : ""}">
    <div style="display: flex; flex-flow: column nowrap; gap: 8px;">
      \${Typography({
  semantics: "heading",
  size: "s",
  content: ["Default"],
  customClasses: ["chromatic-ignore"]
})}
      \${TabsGroup(args)}
    </div>
    <div style="display: flex; flex-flow: column nowrap; gap: 8px;">
      \${Typography({
  semantics: "heading",
  size: "s",
  content: ["Emphasized"],
  customClasses: ["chromatic-ignore"]
})}
      \${TabsGroup({
  ...args,
  isEmphasized: true
})}
    </div>
    <div style="display: flex; flex-flow: column nowrap; gap: 8px;">
      \${Typography({
  semantics: "heading",
  size: "s",
  content: ["Quiet"],
  customClasses: ["chromatic-ignore"]
})}
      \${TabsGroup({
  ...args,
  isQuiet: true
})}
    </div>
    <div style="display: flex; flex-flow: column nowrap; gap: 8px;">
      \${Typography({
  semantics: "heading",
  size: "s",
  content: ["Quiet + compact"],
  customClasses: ["chromatic-ignore"]
})}
      \${TabsGroup({
  ...args,
  isQuiet: true,
  isCompact: true
})}
    </div>
  </div>
\` : Template(args)}
\``,...(O=(I=r.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var V,q,_;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`args => html\`
  \${window.isChromatic() ? html\`
  <div style="display: grid; gap: 32px;\${args.orientation === "overflow" ? " max-inline-size: 100px" : ""}">
    <div style="display: flex; flex-flow: column nowrap; gap: 8px;">
      \${Typography({
  semantics: "heading",
  size: "s",
  content: ["Default"],
  customClasses: ["chromatic-ignore"]
})}
      \${TabsGroup(args)}
    </div>
    <div style="display: flex; flex-flow: column nowrap; gap: 8px;">
      \${Typography({
  semantics: "heading",
  size: "s",
  content: ["Emphasized"],
  customClasses: ["chromatic-ignore"]
})}
      \${TabsGroup({
  ...args,
  isEmphasized: true
})}
    </div>
    <div style="display: flex; flex-flow: column nowrap; gap: 8px;">
      \${Typography({
  semantics: "heading",
  size: "s",
  content: ["Quiet"],
  customClasses: ["chromatic-ignore"]
})}
      \${TabsGroup({
  ...args,
  isQuiet: true
})}
    </div>
    <div style="display: flex; flex-flow: column nowrap; gap: 8px;">
      \${Typography({
  semantics: "heading",
  size: "s",
  content: ["Quiet + compact"],
  customClasses: ["chromatic-ignore"]
})}
      \${TabsGroup({
  ...args,
  isQuiet: true,
  isCompact: true
})}
    </div>
  </div>
\` : Template(args)}
\``,...(_=(q=l.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};const Ee=["Default","WithForcedColors","Vertical","Overflow"];export{t as Default,l as Overflow,r as Vertical,i as WithForcedColors,Ee as __namedExportsOrder,Ge as default};
