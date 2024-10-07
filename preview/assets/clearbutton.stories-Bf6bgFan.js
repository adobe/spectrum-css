import{V as z,S}from"./template-CykOH8vE.js";import{d as g}from"./index-BL42WGY7.js";import{i as k}from"./states-D366RZcH.js";import{s as w,i as x,b as v}from"./variants-YiDXN7gG.js";import{T as r}from"./template-B-PADYXF.js";import"./v4-CQkTLCs1.js";import"./lit-element-C96egxJg.js";import"./capitalize-D60SaZ2R.js";import"./template-CjNf7Zto.js";const y="@spectrum-css/clearbutton",B="6.1.3",T="The Spectrum CSS clearbutton component",Q="Apache-2.0",j="Adobe",H="https://opensource.adobe.com/spectrum-css/clearbutton",O={type:"git",url:"https://github.com/adobe/spectrum-css.git",directory:"components/clearbutton"},_={url:"https://github.com/adobe/spectrum-css/issues"},q={".":"./dist/index.css","./*.md":"./*.md","./dist/*":"./dist/*","./index-*.css":"./dist/index-*.css","./index.css":"./dist/index.css","./metadata.json":"./metadata/metadata.json","./metadata/*":"./metadata/*","./package.json":"./package.json","./stories/*":"./stories/*"},A="dist/index.css",E=["dist/*","*.md","package.json","stories/*","metadata/*"],F={"@spectrum-css/icon":">=7","@spectrum-css/tokens":">=14"},J={"@spectrum-css/icon":"workspace:^","@spectrum-css/tokens":"workspace:^"},L=["spectrum","css","design system","adobe"],M={access:"public"},U={name:y,version:B,description:T,license:Q,author:j,homepage:H,repository:O,bugs:_,exports:q,main:A,files:E,peerDependencies:F,devDependencies:J,keywords:L,publishConfig:M},o=z({Template:r,stateDirection:"row",sizeDirection:"row",testData:[{testHeading:"Default"},{testHeading:"Quiet",isQuiet:!0}],stateData:[{testHeading:"Disabled",isDisabled:!0}]}),Y={title:"Clear button",component:"ClearButton",argTypes:{size:w(["s","m","l","xl"]),isDisabled:k,isQuiet:x,staticColor:{...v,options:["white"]}},args:{rootClass:"spectrum-ClearButton",size:"m",isDisabled:!1,isQuiet:!1},parameters:{packageJson:U,docs:{description:{component:`The clear button component is an in-field button used in search and tags.

## Usage Notes

Use the correct cross icon size that corresponds to the t-shirt size you require for the clear button.

<table>
<thead>
<tr>
<th>**T-Shirt Size**</th>
<th>**Icon Size**</th>
</tr>
</thead>
<tbody>
<tr>
<td>spectrum-ClearButton--sizeS</td>
<td>spectrum-css-icon-Cross75</td>
</tr>
<tr>
<td>spectrum-ClearButton--sizeM</td>
<td>spectrum-css-icon-Cross100</td>
</tr>
<tr>
<td>spectrum-ClearButton--sizeL</td>
<td>spectrum-css-icon-Cross200</td>
</tr>
<tr>
<td>spectrum-ClearButton--sizeXL</td>
<td>spectrum-css-icon-Cross300</td>
</tr>
</tbody>
</table>`}}}},e=o.bind({});e.args={};const a=r.bind({});a.args={isDisabled:!0};a.tags=["!dev"];a.parameters={chromatic:{disableSnapshot:!0}};const t=r.bind({});t.args={isQuiet:!0};t.tags=["!dev"];t.parameters={chromatic:{disableSnapshot:!0}};const s=(C,D)=>S({Template:r,withHeading:!1,withBorder:!1,...C},D);s.args={};s.tags=["!dev"];s.parameters={chromatic:{disableSnapshot:!0}};const n=o.bind({});n.tags=["!dev"];n.args={staticColor:"white"};n.parameters={chromatic:{modes:g}};const f=o.bind({});f.tags=["!autodocs","!dev"];f.parameters={chromatic:{forcedColors:"active",modes:g}};var i,c,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,description:{story:"The default size for clear button is medium.",...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.description}}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,description:{story:"The `.spectrum-ClearButton--quiet` class will use a transparent background (including when the Express theme is active).",...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.description}}};var l,h,b;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`(args, context) => Sizes({
  Template,
  withHeading: false,
  withBorder: false,
  ...args
}, context)`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const Z=["Default","Disabled","Quiet","Sizing","OverBackground","WithForcedColors"];export{e as Default,a as Disabled,n as OverBackground,t as Quiet,s as Sizing,f as WithForcedColors,Z as __namedExportsOrder,Y as default};
