import{d as n}from"./index-BCEELo55.js";import{i as p,d as m}from"./states-DzrSzBKQ.js";import"./lit-element-CJjJlyWZ.js";import{x as l}from"./lit-html-BdGv-Ldy.js";import{o as c}from"./style-map-yx2CMG_J.js";import{P as d}from"./template-CsttVY-o.js";import"./class-map-sTkR_Npl.js";import"./template-D5ShUZ_q.js";import"./if-defined-Bo9G1hLT.js";import"./decorator-Dl7o6wQR.js";import"./utilities-BisrhIqU.js";import"./when-BR7zwNJC.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./v4-CQkTLCs1.js";import"./capitalize-D60SaZ2R.js";const u="6.1.2",g=["top","top-left","top-right","top-start","top-end","bottom","bottom-left","bottom-right","bottom-start","bottom-end","right","right-bottom","right-top","left","left-bottom","left-top","start","start-top","start-bottom","end","end-top","end-bottom"],S={title:"Tooltip",component:"Tooltip",argTypes:{label:{name:"Label",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:"text"},variant:{name:"Variant",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},options:["neutral","info","positive","negative"],control:"inline-radio"},placement:{name:"Placement",description:"The placement of the tooltip relative to the source. Note that placements that start with Left/Right do not change with text direction, but Start/End placements do.",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},options:g,control:"select"},isOpen:p,isFocused:{...m,if:{arg:"showOnHover",truthy:!0}},showOnHover:{name:"Show tooltip on hover (.u-tooltip-showOnHover &)",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component",disable:!0},control:"boolean"}},args:{rootClass:"spectrum-Tooltip",isOpen:!0,isFocused:!1,showOnHover:!1,variant:"neutral",label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},parameters:{actions:{handles:[]},componentVersion:u},decorators:[(s,i)=>l`
            <style>
                .spectrum-Detail { display: inline-block; }
                .spectrum-Typography > div {
                    border: 1px solid var(--spectrum-gray-200);
                    border-radius: 4px;
                    padding: 0 14px 14px;
                    /* Why seafoam? Because it separates it from the component styles. */
                    --mod-detail-font-color: var(--spectrum-seafoam-900);
                }
            </style>
            <div
                style=${c({display:"flex","flex-direction":"column","align-items":"flex-start",gap:"16px","--mod-detail-margin-end":"4.8px"})}
            >
                ${s(i)}
            </div>
        `]},o=d.bind({});o.args={};const t=o.bind({});t.args=o.args;t.tags=["!autodocs","!dev","test"];t.parameters={chromatic:{forcedColors:"active",modes:n}};var e,r,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:"PlacementVariants.bind({})",...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const W=["Default","WithForcedColors"];export{o as Default,t as WithForcedColors,W as __namedExportsOrder,S as default};
