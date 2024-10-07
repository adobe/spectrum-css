import{k as $}from"./lit-element-C96egxJg.js";import{R as v,a as C,s as x}from"./template-CykOH8vE.js";import{T as w}from"./template-B-PADYXF.js";import{T}from"./template-B-Y5qseo.js";import{T as D}from"./template-CFzFm5hn.js";import{T as k}from"./template-BcBQPg07.js";import{T as z}from"./template-BBACTsaP.js";import"./v4-CQkTLCs1.js";import"./capitalize-D60SaZ2R.js";import"./template-CjNf7Zto.js";import"./template-DhJXrEWv.js";import"./template-Dl5RGBy0.js";import"./template-CjHMi-cO.js";import"./template-BI8UA81D.js";import"./template-C9PkAyt7.js";import"./template-CotMDNmo.js";import"./template-BBAyYaQJ.js";import"./upperCase-0eNr0WW7.js";import"./_createCompounder-DY9ZW94_.js";import"./template-D5W5kXKr.js";import"./template-DJxH4dO_.js";const O="@spectrum-css/searchwithin",W="5.1.3",I="The Spectrum CSS searchwithin component",P="Apache-2.0",L="Adobe",M="https://opensource.adobe.com/spectrum-css/searchwithin",F={type:"git",url:"https://github.com/adobe/spectrum-css.git",directory:"components/searchwithin"},K={url:"https://github.com/adobe/spectrum-css/issues"},Q="dist/index-vars.css",A={"@spectrum-css/clearbutton":">=5","@spectrum-css/icon":">=4","@spectrum-css/picker":">=3","@spectrum-css/textfield":">=5","@spectrum-css/vars":">=9"},B={access:"public"},_="6068b4ea6e89d71d3d537d3797e77701d2d354e5",q={name:O,version:W,description:I,license:P,author:L,homepage:M,repository:F,bugs:K,main:Q,peerDependencies:A,publishConfig:B,gitHead:_},pe={title:"Search within",component:"SearchWithin",argTypes:{size:{name:"Size",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["s","m","l","xl"],control:"select"},label:{name:"Label",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:{type:"text"}},labelPosition:{name:"Label position",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},options:["top","left"],control:{type:"select"}},withSwitch:{name:"Display with a switch component",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean",if:{arg:"labelPosition",eq:"left"}},placeholder:{name:"Placeholder",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:{type:"text"}},isQuiet:{name:"Quiet styling",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},isOpen:{name:"Open",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isKeyboardFocused:{name:"Keyboard focused",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isDisabled:{name:"Disabled",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isLoading:{name:"Loading",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isInvalid:{name:"Invalid input",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},content:{table:{disable:!0}}},args:{rootClass:"spectrum-SearchWithin",isOpen:!1,isQuiet:!1,size:"m",label:"All",placeholder:"Search",isKeyboardFocused:!1,isLoading:!1,isDisabled:!1,isInvalid:!1,withSwitch:!1},parameters:{chromatic:{disableSnapshot:!0},status:{type:"deprecated"},packageJson:q,docs:{description:{component:"**This component is deprecated.** Please use a search field with a separate control to filter the search instead."}}}},H=({rootClass:s="spectrum-SearchWithin",customClasses:u=[],customStyles:d={},isQuiet:n=!1,isOpen:o=!1,isInvalid:i=!1,isLoading:l=!1,isDisabled:r=!1,withSwitch:b=!1,isKeyboardFocused:h=!1,size:a="m",label:y,placeholder:f},e)=>$`
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
        class=${v({[s]:!0,...u.reduce((g,S)=>({...g,[S]:!0}),{})})}
        style=${C(x(d))}
    >
        ${T({size:a,placeholder:y,label:void 0,isOpen:o,isQuiet:n,isInvalid:i,isLoading:l,isDisabled:r,withSwitch:b,position:"left",customClasses:[`${s}-picker`]},e)}
        ${k({size:a,autocomplete:!1,name:"search",placeholder:f,type:"search",customInputClasses:[`${s}-input`],isQuiet:n,isInvalid:i,isLoading:l,isDisabled:r,isKeyboardFocused:h},e)}
        ${w({size:a,customClasses:[`${s}-clearButton`]},e)}
        ${D({isOpen:o,withTip:!1,position:"bottom",customStyles:{position:"absolute",top:"38px",left:"0"},content:[z({items:[{label:"Deselect"},{label:"Select Inverse"},{label:"Feather..."},{label:"Select and Mask..."},{type:"divider"},{label:"Save Selection"},{label:"Make Work Path",isDisabled:!0}]},e)]},e)}
    </form>
`,t=H.bind({});t.args={};var c,p,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
\``,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const me=["Default"];export{t as Default,me as __namedExportsOrder,pe as default};
