import"./lit-element-CJjJlyWZ.js";import{x as h}from"./lit-html-BdGv-Ldy.js";import{a as z}from"./class-map-sTkR_Npl.js";import{T as m}from"./template-CU9oPm8-.js";import"./template-D5ShUZ_q.js";import"./if-defined-Bo9G1hLT.js";import"./decorator-Dl7o6wQR.js";import"./utilities-BisrhIqU.js";import"./style-map-yx2CMG_J.js";import"./when-BR7zwNJC.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./v4-CQkTLCs1.js";import"./template-BTVRUgwL.js";import"./capitalize-D60SaZ2R.js";import"./lowerCase-CIorQk0G.js";import"./_createCompounder-DY9ZW94_.js";const P={title:"Split button",component:"SplitButton",argTypes:{size:{name:"Size",type:{name:"string",required:!0},table:{disable:!0},options:["m"],control:"select"},variant:{name:"Variant",type:{name:"string"},table:{disable:!0},options:["accent","primary","secondary"],control:"select"},position:{name:"Position",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["right","left"],control:"select"},iconName:{table:{disable:!0}},label:{name:"Label",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:{type:"text"}}},args:{rootClass:"spectrum-SplitButton",size:"m",position:"right",label:"Split Button",variant:"accent",iconName:"ChevronDown100"},parameters:{chromatic:{disableSnapshot:!0},status:{type:"deprecated"},componentVersion:"8.1.2",docs:{description:{component:`**This component is deprecated.** Please use a button group to show any additional actions related to the most critical action. Reference [Spectrum documentation](https://spectrum.corp.adobe.com/page/button-group/#Use-a-button-group-to-show-additional-actions) for more information.

A split button surfaces an immediately invokable action via it's main button, as well as a list of alternative actions in its toggle-able menu overlay.`}}}},y=({rootClass:i="spectrum-SplitButton",customClasses:d=[],customFirstButtonClasses:g=[],customLastButtonClasses:b=[],size:s="m",variant:o="cta",iconName:r="ChevronDown100",labelIconName:n=void 0,position:e="right",label:a="Split button"}={},l={})=>h`
        <!-- Note: Only values that differ in express theme are included -->
        <style>
            :root, .spectrum--medium {
                --spectrum-global-dimension-size-25: 2px;
                --spectrum-global-dimension-size-40: 3px;
                --spectrum-global-dimension-size-100: 8px;
                --spectrum-global-dimension-size-125: 10px;
                --spectrum-global-dimension-size-150: 12px;
                --spectrum-global-dimension-size-175: 14px;
                --spectrum-global-dimension-size-200: 16px;
            }
            .spectrum--large {
                --spectrum-global-dimension-size-40: 4px;
                --spectrum-global-dimension-size-100: 10px;
                --spectrum-global-dimension-size-125: 13px;
                --spectrum-global-dimension-size-150: 15px;
                --spectrum-global-dimension-size-175: 18px;
                --spectrum-global-dimension-size-200: 20px;
            }
            .spectrum-SplitButton {
                --spectrum-button-m-primary-outline-texticon-padding-left: var(--spectrum-button-m-primary-outline-texticon-padding-right);
                --spectrum-alias-border-radius-small: var(--spectrum-global-dimension-size-25);
                --spectrum-alias-border-size-thick: var(--spectrum-global-dimension-static-size-25, 2px);
            }
            .spectrum--express .spectrum-SplitButton {
                --spectrum-button-m-primary-outline-texticon-padding-left: var(--spectrum-global-dimension-size-175);
                --spectrum-alias-border-radius-small: var(--spectrum-global-dimension-size-40);
            }
        </style>
        <div
            class=${z({[i]:!0,[`${i}--left`]:typeof e<"u"&&e==="left",...d.reduce((f,x)=>({...f,[x]:!0}),{})})}
        >
            ${m({variant:o,size:s,iconName:e==="right"?typeof n<"u"?n:void 0:r,label:e==="right"?a:void 0,hideLabel:e!=="right",customClasses:[e==="right"?"spectrum-SplitButton-action":"spectrum-SplitButton-trigger",...g]},l)}
            ${m({variant:o,size:s,iconName:e==="right"?r:typeof n<"u"?n:void 0,iconAfterLabel:!0,label:e==="right"?void 0:a,hideLabel:e==="right",customClasses:[e==="right"?"spectrum-SplitButton-trigger":"spectrum-SplitButton-action",...b]},l)}
        </div>
    `,t=y.bind({});t.args={};var p,u,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`({
  rootClass = "spectrum-SplitButton",
  customClasses = [],
  customFirstButtonClasses = [],
  customLastButtonClasses = [],
  size = "m",
  variant = "cta",
  iconName = "ChevronDown100",
  labelIconName = undefined,
  position = "right",
  label = "Split button"
} = {}, context = {}) => {
  return html\`
        <!-- Note: Only values that differ in express theme are included -->
        <style>
            :root, .spectrum--medium {
                --spectrum-global-dimension-size-25: 2px;
                --spectrum-global-dimension-size-40: 3px;
                --spectrum-global-dimension-size-100: 8px;
                --spectrum-global-dimension-size-125: 10px;
                --spectrum-global-dimension-size-150: 12px;
                --spectrum-global-dimension-size-175: 14px;
                --spectrum-global-dimension-size-200: 16px;
            }
            .spectrum--large {
                --spectrum-global-dimension-size-40: 4px;
                --spectrum-global-dimension-size-100: 10px;
                --spectrum-global-dimension-size-125: 13px;
                --spectrum-global-dimension-size-150: 15px;
                --spectrum-global-dimension-size-175: 18px;
                --spectrum-global-dimension-size-200: 20px;
            }
            .spectrum-SplitButton {
                --spectrum-button-m-primary-outline-texticon-padding-left: var(--spectrum-button-m-primary-outline-texticon-padding-right);
                --spectrum-alias-border-radius-small: var(--spectrum-global-dimension-size-25);
                --spectrum-alias-border-size-thick: var(--spectrum-global-dimension-static-size-25, 2px);
            }
            .spectrum--express .spectrum-SplitButton {
                --spectrum-button-m-primary-outline-texticon-padding-left: var(--spectrum-global-dimension-size-175);
                --spectrum-alias-border-radius-small: var(--spectrum-global-dimension-size-40);
            }
        </style>
        <div
            class=\${classMap({
    [rootClass]: true,
    [\`\${rootClass}--left\`]: typeof position !== "undefined" && position === "left",
    ...customClasses.reduce((a, c) => ({
      ...a,
      [c]: true
    }), {})
  })}
        >
            \${Button({
    variant,
    size,
    iconName: position === "right" ? typeof labelIconName != "undefined" ? labelIconName : undefined : iconName,
    label: position === "right" ? label : undefined,
    hideLabel: position === "right" ? false : true,
    customClasses: [position === "right" ? "spectrum-SplitButton-action" : "spectrum-SplitButton-trigger", ...customFirstButtonClasses]
  }, context)}
            \${Button({
    variant,
    size,
    iconName: position === "right" ? iconName : typeof labelIconName != "undefined" ? labelIconName : undefined,
    iconAfterLabel: true,
    label: position === "right" ? undefined : label,
    hideLabel: position === "right" ? true : false,
    customClasses: [position === "right" ? "spectrum-SplitButton-trigger" : "spectrum-SplitButton-action", ...customLastButtonClasses]
  }, context)}
        </div>
    \`;
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const V=["Default"];export{t as Default,V as __namedExportsOrder,P as default};
