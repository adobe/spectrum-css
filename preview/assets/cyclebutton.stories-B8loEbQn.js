import t from"./actionbutton.stories-9e_KVnsd.js";import{T as w}from"./template-C9PkAyt7.js";import{c}from"./icon.stories-Cl-5QZPN.js";import{k as P}from"./lit-element-C96egxJg.js";import"./template-CykOH8vE.js";import"./v4-CQkTLCs1.js";import"./capitalize-D60SaZ2R.js";import"./index-BL42WGY7.js";import"./states-D366RZcH.js";import"./variants-YiDXN7gG.js";import"./template-CjNf7Zto.js";const B="@spectrum-css/cyclebutton",N="3.1.3",v="The Spectrum CSS cyclebutton component",_="Apache-2.0",q="Adobe",H="https://opensource.adobe.com/spectrum-css/cyclebutton",J={type:"git",url:"https://github.com/adobe/spectrum-css.git",directory:"components/cyclebutton"},Q={url:"https://github.com/adobe/spectrum-css/issues"},$="dist/index-vars.css",E={"@spectrum-css/actionbutton":">=5","@spectrum-css/vars":">=9"},O={access:"public"},j="6068b4ea6e89d71d3d537d3797e77701d2d354e5",F={name:B,version:N,description:v,license:_,author:q,homepage:H,repository:J,bugs:Q,main:$,peerDependencies:E,publishConfig:O,gitHead:j};var i,a,r,p,l,m,u,d,h,g,b,y,f;const ee={title:"Cycle button",component:"CycleButton",argTypes:{size:((a=(i=t)==null?void 0:i.argTypes)==null?void 0:a.size)??{},initialIcon:{...((p=(r=c)==null?void 0:r.argTypes)==null?void 0:p.iconName)??{},name:"Initial icon",type:{name:"string",required:!0},if:!1},selectedIcon:{...((m=(l=c)==null?void 0:l.argTypes)==null?void 0:m.iconName)??{},name:"Selected icon",if:!1},isSelected:((d=(u=t)==null?void 0:u.argTypes)==null?void 0:d.isSelected)??{},isDisabled:((g=(h=t)==null?void 0:h.argTypes)==null?void 0:g.isDisabled)??{}},args:{rootClass:"spectrum-CycleButton",size:"m",initialIcon:"Play",selectedIcon:"Pause"},parameters:{actions:{handles:[...((f=(y=(b=t)==null?void 0:b.parameters)==null?void 0:y.actions)==null?void 0:f.handles)??[]]},chromatic:{disableSnapshot:!0},status:{type:"deprecated"},packageJson:F,docs:{description:{component:`**This component is deprecated.** Please use the quiet variant of action button with the appropriate icon(s) instead. Any icon swapping that happens on-click/on-key should be handled by the implementation.

The cycle button component is an action button that cycles through two different icons, a play that then changes to a pause, for example.`}}}},e=(({rootClass:k="spectrum-CycleButton",customClasses:x=[],size:S="m",isDisabled:s=!1,onclick:z,selectedIcon:A="Pause",initialIcon:n="Play"}={},o={})=>{const{updateArgs:D}=o;return P`
        <!-- Note: These dimensions don't change in express theme -->
        <style>
            :root, .spectrum--medium { --spectrum-global-dimension-size-85: 7px; }
            .spectrum--large { --spectrum-global-dimension-size-85: 9px; }
        </style>
        ${w({customClasses:[k,...x],isQuiet:!0,isDisabled:s,size:S,iconName:n,iconSet:"workflow",onclick:z??function(){s||D({initialIcon:A,selectedIcon:n})}},o)}
    `}).bind({});e.args={};var C,I,T;e.parameters={...e.parameters,docs:{...(C=e.parameters)==null?void 0:C.docs,source:{originalSource:`(({
  rootClass = "spectrum-CycleButton",
  customClasses = [],
  size = "m",
  isDisabled = false,
  onclick,
  selectedIcon = "Pause",
  initialIcon = "Play"
} = {}, context = {}) => {
  const {
    updateArgs
  } = context;
  return html\`
        <!-- Note: These dimensions don't change in express theme -->
        <style>
            :root, .spectrum--medium { --spectrum-global-dimension-size-85: 7px; }
            .spectrum--large { --spectrum-global-dimension-size-85: 9px; }
        </style>
        \${ActionButton({
    customClasses: [rootClass, ...customClasses],
    isQuiet: true,
    isDisabled,
    size,
    iconName: initialIcon,
    iconSet: "workflow",
    onclick: onclick ?? function () {
      if (isDisabled) return;
      updateArgs({
        initialIcon: selectedIcon,
        selectedIcon: initialIcon
      });
    }
  }, context)}
    \`;
}).bind({})`,...(T=(I=e.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const te=["Default"];export{e as Default,te as __namedExportsOrder,ee as default};
