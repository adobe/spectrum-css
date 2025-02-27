import{d as s}from"./index-_AwL4lpH.js";import{i as r,a as t}from"./states-C6Exry22.js";import{V as c}from"./decorator-BliclrE4.js";import{T as p}from"./template-CbTMuxpg.js";import"./lit-element-C96egxJg.js";import"./capitalize-D60SaZ2R.js";import"./v4-CQkTLCs1.js";const l="index.css",n=[".spectrum-ColorLoupe",".spectrum-ColorLoupe-checkerboard-background",".spectrum-ColorLoupe-checkerboard-fill",".spectrum-ColorLoupe-checkerboard-pattern",".spectrum-ColorLoupe-inner-border",".spectrum-ColorLoupe-outer-border",".spectrum-ColorLoupe.is-disabled",".spectrum-ColorLoupe.is-open",".spectrum-ColorLoupe:dir(rtl)",'[dir="rtl"] .spectrum-ColorLoupe'],d=["--mod-colorloupe-animation-distance","--mod-colorloupe-drop-shadow-blur","--mod-colorloupe-drop-shadow-color","--mod-colorloupe-drop-shadow-x","--mod-colorloupe-drop-shadow-y","--mod-colorloupe-inner-border-color","--mod-colorloupe-inner-border-width","--mod-colorloupe-offset","--mod-colorloupe-outer-border-color","--mod-colorloupe-outer-border-width"],u=["--spectrum-color-loupe-bottom-to-color-handle","--spectrum-color-loupe-drop-shadow-blur","--spectrum-color-loupe-drop-shadow-color","--spectrum-color-loupe-drop-shadow-y","--spectrum-color-loupe-height","--spectrum-color-loupe-inner-border","--spectrum-color-loupe-inner-border-width","--spectrum-color-loupe-outer-border","--spectrum-color-loupe-outer-border-width","--spectrum-color-loupe-width","--spectrum-colorloupe-checkerboard-fill"],i=["--spectrum-color-handle-outer-border-width","--spectrum-color-handle-size","--spectrum-drop-shadow-x","--spectrum-opacity-checkerboard-square-dark","--spectrum-opacity-checkerboard-square-light","--spectrum-picked-color"],a=[],m={sourceFile:l,selectors:n,modifiers:d,component:u,global:i,"system-theme":[],passthroughs:a,"high-contrast":["--highcontrast-colorloupe-outer-border-color"]},h="@spectrum-css/colorloupe",b="7.1.0",g="The Spectrum CSS Color Loupe component",C="Apache-2.0",w="Adobe",y="https://opensource.adobe.com/spectrum-css/?path=/docs/components-color-loupe--docs",f={type:"git",url:"https://github.com/adobe/spectrum-css.git",directory:"components/colorloupe"},k={url:"https://github.com/adobe/spectrum-css/issues"},D={".":"./dist/index.css","./*.md":"./*.md","./dist/*":"./dist/*","./index-*.css":"./dist/index-*.css","./index.css":"./dist/index.css","./metadata.json":"./dist/metadata.json","./package.json":"./package.json","./stories/*":"./stories/*"},x="dist/index.css",L={"@spectrum-css/tokens":">=16.0.1"},v={"@spectrum-css/tokens":{optional:!0}},S={"@spectrum-css/tokens":"16.0.1"},T=["design-system","spectrum","spectrum-css","adobe","adobe-spectrum","component","css"],j={access:"public"},F=[{guidelines:"https://spectrum.adobe.com/page/color-loupe",rootClass:"spectrum-ColorLoupe",swc:"https://opensource.adobe.com/spectrum-web-components/components/color-loupe/"}],O={name:h,version:b,description:g,license:C,author:w,homepage:y,repository:f,bugs:k,exports:D,main:x,peerDependencies:L,peerDependenciesMeta:v,devDependencies:S,keywords:T,publishConfig:j,spectrum:F},o=c({Template:p,testData:[{testHeading:"Default"}],stateData:[{testHeading:"Closed",isOpen:!1},{testHeading:"Disabled",isDisabled:!0}]}),E={title:"Color loupe",component:"ColorLoupe",argTypes:{isOpen:r,isDisabled:t,selectedColor:{name:"Selected color",type:{name:"string"},accept:"hex, rgb, rgba",control:"color"}},args:{rootClass:"spectrum-ColorLoupe",isOpen:!0,isDisabled:!1,selectedColor:"rgba(255, 0, 0, 0.5)",customStyles:{position:"relative","inset-block-end":"0","inset-inline-end":"0"}},parameters:{docs:{story:{height:"100px"},description:{component:`The color loupe component shows the output color that would otherwise be covered by a cursor, stylus, or finger during color selection.

## Usage notes

- Set the \`--spectrum-picked-color\` custom property to the CSS color value you want to show.
- Implementations must apply the \`.is-open\` class to display the loupe.
- Color loupe does not have a disabled style. Do not show it when the handle it's attached to is disabled.`}},packageJson:O,metadata:m}},H=o.bind({});H.args={};const e=o.bind({});e.tags=["!autodocs","!dev"];e.parameters={chromatic:{forcedColors:"active",modes:s}};const G=["Default","WithForcedColors"];export{H as Default,e as WithForcedColors,G as __namedExportsOrder,E as default};
