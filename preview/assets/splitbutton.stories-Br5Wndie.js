import{k as z}from"./lit-element-C96egxJg.js";import{R as y}from"./template-C7mrcesf.js";import{T as c}from"./template-C5tcyh-q.js";import"./v4-CQkTLCs1.js";import"./capitalize-D60SaZ2R.js";import"./template-CNHi6PLw.js";import"./template-ww5XkWg8.js";const v="@spectrum-css/splitbutton",S="8.1.2",B="The Spectrum CSS splitbutton component",C="Apache-2.0",N="Adobe",D="https://opensource.adobe.com/spectrum-css/splitbutton",L={type:"git",url:"https://github.com/adobe/spectrum-css.git",directory:"components/splitbutton"},$={url:"https://github.com/adobe/spectrum-css/issues"},k="dist/index-vars.css",w={"@spectrum-css/button":">=11","@spectrum-css/icon":">=4","@spectrum-css/vars":">=9"},T={"@spectrum-css/icon":{optional:!0}},A={access:"public"},M="662aadb29fbb761e46a6d0fb75eb1c7663da958d",O={name:v,version:S,description:B,license:C,author:N,homepage:D,repository:L,bugs:$,main:k,peerDependencies:w,peerDependenciesMeta:T,publishConfig:A,gitHead:M},J={title:"Split button",component:"SplitButton",argTypes:{size:{name:"Size",type:{name:"string",required:!0},table:{disable:!0},options:["m"],control:"select"},variant:{name:"Variant",type:{name:"string"},table:{disable:!0},options:["accent","primary","secondary"],control:"select"},position:{name:"Position",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["right","left"],control:"select"},iconName:{table:{disable:!0}},label:{name:"Label",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:{type:"text"}}},args:{rootClass:"spectrum-SplitButton",size:"m",position:"right",label:"Split Button",variant:"accent",iconName:"ChevronDown100"},parameters:{chromatic:{disableSnapshot:!0},status:{type:"deprecated"},packageJson:O,docs:{description:{component:`**This component is deprecated.** Please use a button group to show any additional actions related to the most critical action. Reference [Spectrum documentation](https://spectrum.corp.adobe.com/page/button-group/#Use-a-button-group-to-show-additional-actions) for more information.

A split button surfaces an immediately invokable action via it's main button, as well as a list of alternative actions in its toggle-able menu overlay.`}}}},R=({rootClass:s="spectrum-SplitButton",customClasses:b=[],customFirstButtonClasses:g=[],customLastButtonClasses:f=[],size:i="m",variant:o="cta",iconName:r="ChevronDown100",iconSet:a="ui",labelIconName:n=void 0,position:e="right",label:p="Split button"}={},l={})=>z`
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
            class=${y({[s]:!0,[`${s}--left`]:typeof e<"u"&&e==="left",...b.reduce((h,x)=>({...h,[x]:!0}),{})})}
        >
            ${c({variant:o,size:i,iconSet:a,iconName:e==="right"?typeof n<"u"?n:void 0:r,label:e==="right"?p:void 0,hideLabel:e!=="right",customClasses:[e==="right"?"spectrum-SplitButton-action":"spectrum-SplitButton-trigger",...g]},l)}
            ${c({variant:o,size:i,iconSet:a,iconName:e==="right"?r:typeof n<"u"?n:void 0,iconAfterLabel:!0,label:e==="right"?void 0:p,hideLabel:e==="right",customClasses:[e==="right"?"spectrum-SplitButton-trigger":"spectrum-SplitButton-action",...f]},l)}
        </div>
    `,t=R.bind({});t.args={};var u,m,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`({
  rootClass = "spectrum-SplitButton",
  customClasses = [],
  customFirstButtonClasses = [],
  customLastButtonClasses = [],
  size = "m",
  variant = "cta",
  iconName = "ChevronDown100",
  iconSet = "ui",
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
    iconSet,
    iconName: position === "right" ? typeof labelIconName != "undefined" ? labelIconName : undefined : iconName,
    label: position === "right" ? label : undefined,
    hideLabel: position === "right" ? false : true,
    customClasses: [position === "right" ? "spectrum-SplitButton-action" : "spectrum-SplitButton-trigger", ...customFirstButtonClasses]
  }, context)}
            \${Button({
    variant,
    size,
    iconSet,
    iconName: position === "right" ? iconName : typeof labelIconName != "undefined" ? labelIconName : undefined,
    iconAfterLabel: true,
    label: position === "right" ? undefined : label,
    hideLabel: position === "right" ? true : false,
    customClasses: [position === "right" ? "spectrum-SplitButton-trigger" : "spectrum-SplitButton-action", ...customLastButtonClasses]
  }, context)}
        </div>
    \`;
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const U=["Default"];export{t as Default,U as __namedExportsOrder,J as default};
