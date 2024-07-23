import"./lit-element-CJjJlyWZ.js";import{x as $}from"./lit-html-BdGv-Ldy.js";import{a as x}from"./class-map-sTkR_Npl.js";import{o as v}from"./if-defined-Bo9G1hLT.js";import{o as C}from"./style-map-yx2CMG_J.js";import{T}from"./template-BwSdDgU-.js";import{T as w}from"./template-BO-X2BxT.js";import{T as z}from"./template-BCjEPzLh.js";import{T as D}from"./template-C3bVK-Qx.js";import{T as O}from"./template-xI5Kowax.js";import"./template-D5ShUZ_q.js";import"./template-D7lOzDBB.js";import"./template-Df-YB4AQ.js";import"./decorator-Dl7o6wQR.js";import"./utilities-BisrhIqU.js";import"./when-BR7zwNJC.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./v4-CQkTLCs1.js";import"./capitalize-D60SaZ2R.js";import"./template-CO7DuZY3.js";import"./template-BTVRUgwL.js";import"./template-BzRF0abB.js";import"./template-BSRXx7Ch.js";import"./template-CLOJq6Hl.js";import"./upperCase-0eNr0WW7.js";import"./_createCompounder-DY9ZW94_.js";import"./lowerCase-CIorQk0G.js";import"./template-BMKK6e4E.js";import"./template-Di67rEmc.js";import"./template-B5CNIEfi.js";import"./template-BtQIgTkN.js";const re={title:"Search within",component:"SearchWithin",argTypes:{size:{name:"Size",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["s","m","l","xl"],control:"select"},label:{name:"Label",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:{type:"text"}},labelPosition:{name:"Label position",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},options:["top","left"],control:{type:"select"}},withSwitch:{name:"Display with a switch component",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean",if:{arg:"labelPosition",eq:"left"}},placeholder:{name:"Placeholder",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:{type:"text"}},isQuiet:{name:"Quiet styling",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},isOpen:{name:"Open",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isKeyboardFocused:{name:"Keyboard focused",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isDisabled:{name:"Disabled",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isLoading:{name:"Loading",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isInvalid:{name:"Invalid input",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},content:{table:{disable:!0}}},args:{rootClass:"spectrum-SearchWithin",isOpen:!1,isQuiet:!1,size:"m",label:"All",placeholder:"Search",isKeyboardFocused:!1,isLoading:!1,isDisabled:!1,isInvalid:!1,withSwitch:!1},parameters:{chromatic:{disableSnapshot:!0},status:{type:"deprecated"},componentVersion:"5.1.3",docs:{description:{component:"**This component is deprecated.** Please use a search field with a separate control to filter the search instead."}}}},W=({rootClass:a="spectrum-SearchWithin",customClasses:u=[],customStyles:b={},isQuiet:s=!1,isOpen:o=!1,isInvalid:l=!1,isLoading:i=!1,isDisabled:r=!1,withSwitch:d=!1,isKeyboardFocused:y=!1,size:n="m",label:f,placeholder:h},e)=>$`
        <!-- Note: Only values that differ in express theme are included -->
    <style>
        .spectrum-SearchWithin {
            --spectrum-alias-input-border-size: var(--spectrum-global-dimension-static-size-10, 1px);
        }
        .spectrum--express .spectrum-SearchWithin {
            --spectrum-alias-input-border-size: var(--spectrum-global-dimension-static-size-25, 2px);
        }
    </style>
    <form
        class=${x({[a]:!0,...u.reduce((g,S)=>({...g,[S]:!0}),{})})}
        style=${v(C(b))}
    >
        ${w({size:n,placeholder:f,label:void 0,isOpen:o,isQuiet:s,isInvalid:l,isLoading:i,isDisabled:r,withSwitch:d,position:"left",customClasses:[`${a}-picker`]},e)}
        ${D({size:n,autocomplete:!1,name:"search",placeholder:h,type:"search",customInputClasses:[`${a}-input`],isQuiet:s,isInvalid:l,isLoading:i,isDisabled:r,isKeyboardFocused:y},e)}
        ${T({size:n,customClasses:[`${a}-clearButton`]},e)}
        ${z({isOpen:o,withTip:!1,position:"bottom",customStyles:{position:"absolute",top:"38px",left:"0"},content:[O({items:[{label:"Deselect"},{label:"Select Inverse"},{label:"Feather..."},{label:"Select and Mask..."},{type:"divider"},{label:"Save Selection"},{label:"Make Work Path",isDisabled:!0}]},e)]},e)}
    </form>
`,t=W.bind({});t.args={};var p,m,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`({
  rootClass = "spectrum-SearchWithin",
  customClasses = [],
  customStyles = {},
  isQuiet = false,
  isOpen = false,
  isInvalid = false,
  isLoading = false,
  isDisabled = false,
  withSwitch = false,
  isKeyboardFocused = false,
  size = "m",
  label,
  placeholder
}, context) => html\`
        <!-- Note: Only values that differ in express theme are included -->
    <style>
        .spectrum-SearchWithin {
            --spectrum-alias-input-border-size: var(--spectrum-global-dimension-static-size-10, 1px);
        }
        .spectrum--express .spectrum-SearchWithin {
            --spectrum-alias-input-border-size: var(--spectrum-global-dimension-static-size-25, 2px);
        }
    </style>
    <form
        class=\${classMap({
  [rootClass]: true,
  ...customClasses.reduce((a, c) => ({
    ...a,
    [c]: true
  }), {})
})}
        style=\${ifDefined(styleMap(customStyles))}
    >
        \${Picker({
  size,
  placeholder: label,
  label: undefined,
  isOpen,
  isQuiet,
  isInvalid,
  isLoading,
  isDisabled,
  withSwitch,
  position: "left",
  customClasses: [\`\${rootClass}-picker\`]
}, context)}
        \${Textfield({
  size,
  autocomplete: false,
  name: "search",
  placeholder,
  type: "search",
  customInputClasses: [\`\${rootClass}-input\`],
  isQuiet,
  isInvalid,
  isLoading,
  isDisabled,
  isKeyboardFocused
}, context)}
        \${ClearButton({
  size,
  customClasses: [\`\${rootClass}-clearButton\`]
}, context)}
        \${Popover({
  isOpen: isOpen,
  withTip: false,
  position: "bottom",
  customStyles: {
    position: "absolute",
    top: "38px",
    left: "0"
  },
  content: [Menu({
    items: [{
      label: "Deselect"
    }, {
      label: "Select Inverse"
    }, {
      label: "Feather..."
    }, {
      label: "Select and Mask..."
    }, {
      type: "divider"
    }, {
      label: "Save Selection"
    }, {
      label: "Make Work Path",
      isDisabled: true
    }]
  }, context)]
}, context)}
    </form>
\``,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const pe=["Default"];export{t as Default,pe as __namedExportsOrder,re as default};
