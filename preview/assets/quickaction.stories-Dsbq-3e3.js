import"./lit-element-CJjJlyWZ.js";import{x as a}from"./lit-html-BdGv-Ldy.js";import{a as y}from"./class-map-sTkR_Npl.js";import{o as f}from"./if-defined-Bo9G1hLT.js";import{T as k}from"./template-Zxf6qo95.js";import"./decorator-Dl7o6wQR.js";import"./utilities-BisrhIqU.js";import"./style-map-yx2CMG_J.js";import"./when-BR7zwNJC.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./v4-CQkTLCs1.js";import"./template-D5ShUZ_q.js";import"./capitalize-D60SaZ2R.js";import"./lowerCase-CIorQk0G.js";import"./_createCompounder-DY9ZW94_.js";const P={title:"Quick actions",component:"QuickAction",argTypes:{content:{table:{disable:!0}},isOpen:{name:"Open",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},position:{name:"Position",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},control:"select",options:["left","right"]},textOnly:{name:"Text only action buttons",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Advanced"},control:"boolean"}},args:{rootClass:"spectrum-QuickActions",isOpen:!0,textOnly:!1,content:[{iconName:"Edit",label:"Edit"},{iconName:"Copy",label:"Copy"},{iconName:"Delete",label:"Delete"}]},parameters:{chromatic:{disableSnapshot:!0},status:{type:"deprecated"},componentVersion:"3.1.1",docs:{description:{component:"**This component is deprecated.** Please use an action bar to allow users to perform actions on either a single or multiple items at the same time, instead."}}}},x=({rootClass:t="spectrum-QuickActions",size:o="m",isOpen:p=!1,textOnly:s=!1,position:i,content:r=[],id:u,customClasses:d=[]}={},b={})=>r.length?(r.some(e=>e.icon)||(s=!0),a`
        <!-- Note: Only values that differ in express theme are included -->
        <style>
            :root {
                --spectrum-alias-border-radius-regular: var(--spectrum-global-dimension-size-50);
                --spectrum-alias-background-color-quickactions-overlay: rgba(0,0,0,0.2);
            }
            :root, .spectrum--light {
                --spectrum-alias-background-color-quickactions: rgba(248,248,248,0.9);
            }
            .spectrum--dark {
                --spectrum-alias-background-color-quickactions: rgba(50,50,50,0.9);
            }
            .spectrum--darkest {
                --spectrum-alias-background-color-quickactions: rgba(29,29,29,0.9);
            }
            :root, .spectrum--medium {
                --spectrum-global-dimension-size-50: 4px;
                --spectrum-global-dimension-size-100: 8px;
                --spectrum-global-dimension-size-500: 40px;
            }
            .spectrum--large {
                --spectrum-global-dimension-size-50: 5px;
                --spectrum-global-dimension-size-100: 10px;
                --spectrum-global-dimension-size-500: 50px;
            }
            .spectrum--express {
                --spectrum-alias-border-radius-regular: var(--spectrum-global-dimension-size-75);
            }
        </style>
        <div
            class="${y({[t]:!0,[`${t}--size${o==null?void 0:o.toUpperCase()}`]:typeof o<"u","is-open":p,[`${t}--${i}`]:typeof i<"u",[`${t}--textOnly`]:s,...d.reduce((e,g)=>({...e,[g]:!0}),{})})}"
            id=${f(u)}
        >
            ${r.map(e=>typeof e=="object"&&e.iconName||e.label?k({...e,isQuiet:!0},b):e)}
        </div>
    `):(console.warn("QuickActions: requires content be passed in to render."),a``),n=x.bind({});n.args={};var c,l,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`({
  rootClass = "spectrum-QuickActions",
  size = "m",
  isOpen = false,
  textOnly = false,
  position,
  // noOverlay = false,
  content = [],
  id,
  customClasses = []
} = {}, context = {}) => {
  if (!content.length) {
    console.warn("QuickActions: requires content be passed in to render.");
    return html\`\`;
  }
  if (!content.some(c => c.icon)) textOnly = true;
  return html\`
        <!-- Note: Only values that differ in express theme are included -->
        <style>
            :root {
                --spectrum-alias-border-radius-regular: var(--spectrum-global-dimension-size-50);
                --spectrum-alias-background-color-quickactions-overlay: rgba(0,0,0,0.2);
            }
            :root, .spectrum--light {
                --spectrum-alias-background-color-quickactions: rgba(248,248,248,0.9);
            }
            .spectrum--dark {
                --spectrum-alias-background-color-quickactions: rgba(50,50,50,0.9);
            }
            .spectrum--darkest {
                --spectrum-alias-background-color-quickactions: rgba(29,29,29,0.9);
            }
            :root, .spectrum--medium {
                --spectrum-global-dimension-size-50: 4px;
                --spectrum-global-dimension-size-100: 8px;
                --spectrum-global-dimension-size-500: 40px;
            }
            .spectrum--large {
                --spectrum-global-dimension-size-50: 5px;
                --spectrum-global-dimension-size-100: 10px;
                --spectrum-global-dimension-size-500: 50px;
            }
            .spectrum--express {
                --spectrum-alias-border-radius-regular: var(--spectrum-global-dimension-size-75);
            }
        </style>
        <div
            class="\${classMap({
    [rootClass]: true,
    [\`\${rootClass}--size\${size?.toUpperCase()}\`]: typeof size !== "undefined",
    "is-open": isOpen,
    [\`\${rootClass}--\${position}\`]: typeof position !== "undefined",
    [\`\${rootClass}--textOnly\`]: textOnly,
    ...customClasses.reduce((a, c) => ({
      ...a,
      [c]: true
    }), {})
  })}"
            id=\${ifDefined(id)}
        >
            \${content.map(c => {
    if (typeof c === "object" && c.iconName || c.label) {
      return ActionButton({
        ...c,
        isQuiet: true
      }, context);
    } else return c;
  })}
        </div>
    \`;
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const S=["Default"];export{n as Default,S as __namedExportsOrder,P as default};
