import{WithDividers as i}from"./menu.stories-DXtsL2KW.js";import{d as y}from"./index-BCEELo55.js";import{i as f,e as h}from"./states-DzrSzBKQ.js";import"./lit-element-CJjJlyWZ.js";import{x as u}from"./lit-html-BdGv-Ldy.js";import{o as l}from"./style-map-yx2CMG_J.js";import{T as n}from"./template-BO-X2BxT.js";import"./icon.stories-DZE3EIDq.js";import"./template-Df-YB4AQ.js";import"./decorator-Dl7o6wQR.js";import"./utilities-BisrhIqU.js";import"./class-map-sTkR_Npl.js";import"./when-BR7zwNJC.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./v4-CQkTLCs1.js";import"./if-defined-Bo9G1hLT.js";import"./capitalize-D60SaZ2R.js";import"./template-D5ShUZ_q.js";import"./template-xI5Kowax.js";import"./template-BSRXx7Ch.js";import"./template-CLOJq6Hl.js";import"./upperCase-0eNr0WW7.js";import"./_createCompounder-DY9ZW94_.js";import"./lowerCase-CIorQk0G.js";import"./template-BzRF0abB.js";import"./template-BMKK6e4E.js";import"./template-Di67rEmc.js";import"./template-B5CNIEfi.js";import"./template-BtQIgTkN.js";import"./template-D7lOzDBB.js";import"./template-CO7DuZY3.js";import"./template-BCjEPzLh.js";import"./template-BTVRUgwL.js";const b="8.1.4",Z={title:"Picker",component:"Picker",argTypes:{size:{name:"Size",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["s","m","l","xl"],control:"select"},label:{name:"Label",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:{type:"text"}},labelPosition:{name:"Label position",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},options:["top","left"],control:{type:"select"}},withSwitch:{name:"Display with a switch component",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean",if:{arg:"labelPosition",eq:"left"}},placeholder:{name:"Placeholder",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:{type:"text"}},isQuiet:{name:"Quiet styling",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},isOpen:f,isKeyboardFocused:{name:"Keyboard focused",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isDisabled:{name:"Disabled",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isLoading:{name:"Loading",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isInvalid:h,content:{table:{disable:!0}}},args:{rootClass:"spectrum-Picker",size:"m",label:"Country",placeholder:"Select a country",isQuiet:!1,isKeyboardFocused:!1,isLoading:!1,isDisabled:!1,isInvalid:!1,isOpen:!1,withSwitch:!1,content:[()=>i(i.args)]},parameters:{docs:{story:{height:"300px"},description:{component:"A picker outlines a set of options for a user."}},componentVersion:b},decorators:[e=>window.isChromatic()?u`<div style="padding: 32px; min-height: 400px;">${e()}</div>`:e()]},m=e=>u`
    <div style=${l({display:window.isChromatic()?"grid":"none",gap:"20px"})}>
        <div>
            ${n({labelPosition:"top",...e,isOpen:!1,placeholder:"Select your country of origin"})}
        </div>
        <div>
            ${n({labelPosition:"top",...e,isOpen:!1,isQuiet:!0,placeholder:"Select your country of origin"})}
        </div>
        <div>
            ${n({labelPosition:"top",...e,isOpen:!1,isLoading:!0,placeholder:"Select your country of origin"})}
        </div>
        <div>
            ${n({labelPosition:"top",...e,isOpen:!1,isInvalid:!0,placeholder:"Select your country of origin"})}
        </div>
        <div>
            ${n({labelPosition:"top",...e,isOpen:!1,isKeyboardFocused:!0,helpText:"Please select a country",placeholder:"Select your country of origin"})}
        </div>
        <div>
            ${n({labelPosition:"left",...e,isOpen:!1,withSwitch:!0,placeholder:"Select your country of origin"})}
        </div>
        <div>
            ${n({labelPosition:"left",...e,isOpen:!1,withSwitch:!0,fieldLabelStyle:{"max-width":"90px"},label:"Enter country, text should wrap",placeholder:"Select your country of origin"})}
        </div>
        <div>
            ${n({labelPosition:"left",...e,isOpen:!1,withSwitch:!0,placeholder:"Select your country of origin",isQuiet:!0})}
        </div>
        <div>
            ${n({labelPosition:"left",...e,isOpen:!1,withSwitch:!0,isQuiet:!0,fieldLabelStyle:{"max-width":"90px"},label:"Enter country, text should wrap",placeholder:"Select your country of origin"})}
        </div>
    </div>
    <div style=${l({display:window.isChromatic()?"none":void 0})}>
        ${n(e)}
    </div>
`,o=m.bind({});o.args={};const g=n.bind({});g.args={isOpen:!0};const t=m.bind({});t.tags=["!autodocs","!dev","test"];t.parameters={chromatic:{forcedColors:"active",modes:y}};t.args={};var r,a,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`args => html\`
    <div style=\${styleMap({
  "display": window.isChromatic() ? "grid" : "none",
  "gap": "20px"
})}>
        <div>
            \${Template({
  labelPosition: "top",
  ...args,
  isOpen: false,
  placeholder: "Select your country of origin"
})}
        </div>
        <div>
            \${Template({
  labelPosition: "top",
  ...args,
  isOpen: false,
  isQuiet: true,
  placeholder: "Select your country of origin"
})}
        </div>
        <div>
            \${Template({
  labelPosition: "top",
  ...args,
  isOpen: false,
  isLoading: true,
  placeholder: "Select your country of origin"
})}
        </div>
        <div>
            \${Template({
  labelPosition: "top",
  ...args,
  isOpen: false,
  isInvalid: true,
  placeholder: "Select your country of origin"
})}
        </div>
        <div>
            \${Template({
  labelPosition: "top",
  ...args,
  isOpen: false,
  isKeyboardFocused: true,
  helpText: "Please select a country",
  placeholder: "Select your country of origin"
})}
        </div>
        <div>
            \${Template({
  labelPosition: "left",
  ...args,
  isOpen: false,
  withSwitch: true,
  placeholder: "Select your country of origin"
})}
        </div>
        <div>
            \${Template({
  labelPosition: "left",
  ...args,
  isOpen: false,
  withSwitch: true,
  fieldLabelStyle: {
    "max-width": "90px"
  },
  label: "Enter country, text should wrap",
  placeholder: "Select your country of origin"
})}
        </div>
        <div>
            \${Template({
  labelPosition: "left",
  ...args,
  isOpen: false,
  withSwitch: true,
  placeholder: "Select your country of origin",
  isQuiet: true
})}
        </div>
        <div>
            \${Template({
  labelPosition: "left",
  ...args,
  isOpen: false,
  withSwitch: true,
  isQuiet: true,
  fieldLabelStyle: {
    "max-width": "90px"
  },
  label: "Enter country, text should wrap",
  placeholder: "Select your country of origin"
})}
        </div>
    </div>
    <div style=\${styleMap({
  "display": window.isChromatic() ? "none" : undefined
})}>
        \${Template(args)}
    </div>
\``,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var p,d,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => html\`
    <div style=\${styleMap({
  "display": window.isChromatic() ? "grid" : "none",
  "gap": "20px"
})}>
        <div>
            \${Template({
  labelPosition: "top",
  ...args,
  isOpen: false,
  placeholder: "Select your country of origin"
})}
        </div>
        <div>
            \${Template({
  labelPosition: "top",
  ...args,
  isOpen: false,
  isQuiet: true,
  placeholder: "Select your country of origin"
})}
        </div>
        <div>
            \${Template({
  labelPosition: "top",
  ...args,
  isOpen: false,
  isLoading: true,
  placeholder: "Select your country of origin"
})}
        </div>
        <div>
            \${Template({
  labelPosition: "top",
  ...args,
  isOpen: false,
  isInvalid: true,
  placeholder: "Select your country of origin"
})}
        </div>
        <div>
            \${Template({
  labelPosition: "top",
  ...args,
  isOpen: false,
  isKeyboardFocused: true,
  helpText: "Please select a country",
  placeholder: "Select your country of origin"
})}
        </div>
        <div>
            \${Template({
  labelPosition: "left",
  ...args,
  isOpen: false,
  withSwitch: true,
  placeholder: "Select your country of origin"
})}
        </div>
        <div>
            \${Template({
  labelPosition: "left",
  ...args,
  isOpen: false,
  withSwitch: true,
  fieldLabelStyle: {
    "max-width": "90px"
  },
  label: "Enter country, text should wrap",
  placeholder: "Select your country of origin"
})}
        </div>
        <div>
            \${Template({
  labelPosition: "left",
  ...args,
  isOpen: false,
  withSwitch: true,
  placeholder: "Select your country of origin",
  isQuiet: true
})}
        </div>
        <div>
            \${Template({
  labelPosition: "left",
  ...args,
  isOpen: false,
  withSwitch: true,
  isQuiet: true,
  fieldLabelStyle: {
    "max-width": "90px"
  },
  label: "Enter country, text should wrap",
  placeholder: "Select your country of origin"
})}
        </div>
    </div>
    <div style=\${styleMap({
  "display": window.isChromatic() ? "none" : undefined
})}>
        \${Template(args)}
    </div>
\``,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const ee=["Default","Open","WithForcedColors"];export{o as Default,g as Open,t as WithForcedColors,ee as __namedExportsOrder,Z as default};
