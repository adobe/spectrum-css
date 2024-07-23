import t from"./actionbutton.stories-A3GYwxv4.js";import{T as k}from"./template-Zxf6qo95.js";import{c as s}from"./icon.stories-DZE3EIDq.js";import"./lit-element-CJjJlyWZ.js";import{x as w}from"./lit-html-BdGv-Ldy.js";import"./index-BCEELo55.js";import"./states-DzrSzBKQ.js";import"./template-Df-YB4AQ.js";import"./decorator-Dl7o6wQR.js";import"./utilities-BisrhIqU.js";import"./class-map-sTkR_Npl.js";import"./style-map-yx2CMG_J.js";import"./when-BR7zwNJC.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./v4-CQkTLCs1.js";import"./if-defined-Bo9G1hLT.js";import"./capitalize-D60SaZ2R.js";import"./template-D5ShUZ_q.js";import"./lowerCase-CIorQk0G.js";import"./_createCompounder-DY9ZW94_.js";const{useArgs:B}=__STORYBOOK_MODULE_PREVIEW_API__;var i,c,a,r,l,m,p,u,d,h,y,g,f;const X={title:"Cycle button",component:"CycleButton",argTypes:{size:((c=(i=t)==null?void 0:i.argTypes)==null?void 0:c.size)??{},initialIcon:{...((r=(a=s)==null?void 0:a.argTypes)==null?void 0:r.iconName)??{},name:"Initial icon",type:{name:"string",required:!0},if:!1},selectedIcon:{...((m=(l=s)==null?void 0:l.argTypes)==null?void 0:m.iconName)??{},name:"Selected icon",if:!1},isSelected:((u=(p=t)==null?void 0:p.argTypes)==null?void 0:u.isSelected)??{},isDisabled:((h=(d=t)==null?void 0:d.argTypes)==null?void 0:h.isDisabled)??{}},args:{rootClass:"spectrum-CycleButton",size:"m",initialIcon:"Play",selectedIcon:"Pause"},parameters:{actions:{handles:[...((f=(g=(y=t)==null?void 0:y.parameters)==null?void 0:g.actions)==null?void 0:f.handles)??[]]},chromatic:{disableSnapshot:!0},status:{type:"deprecated"},componentVersion:"3.1.3",docs:{description:{component:`**This component is deprecated.** Please use the quiet variant of action button with the appropriate icon(s) instead. Any icon swapping that happens on-click/on-key should be handled by the implementation.

The cycle button component is an action button that cycles through two different icons, a play that then changes to a pause, for example.`}}}},e=(({rootClass:x="spectrum-CycleButton",customClasses:C=[],size:_="m",isDisabled:n=!1,onclick:z}={},A={})=>{const[{selectedIcon:P="Pause",initialIcon:o="Play"},S]=B();return w`
        <!-- Note: These dimensions don't change in express theme -->
        <style>
            :root, .spectrum--medium { --spectrum-global-dimension-size-85: 7px; }
            .spectrum--large { --spectrum-global-dimension-size-85: 9px; }
        </style>
        ${k({customClasses:[x,...C],isQuiet:!0,isDisabled:n,size:_,iconName:o,iconSet:"workflow",onclick:z??function(){n||S({initialIcon:P,selectedIcon:o})}},A)}
    `}).bind({});e.args={};var I,b,T;e.parameters={...e.parameters,docs:{...(I=e.parameters)==null?void 0:I.docs,source:{originalSource:`(({
  rootClass = "spectrum-CycleButton",
  customClasses = [],
  size = "m",
  isDisabled = false,
  onclick
} = {}, context = {}) => {
  const [{
    selectedIcon = "Pause",
    initialIcon = "Play"
  }, updateArgs] = useArgs();
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
}).bind({})`,...(T=(b=e.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};const Z=["Default"];export{e as Default,Z as __namedExportsOrder,X as default};
