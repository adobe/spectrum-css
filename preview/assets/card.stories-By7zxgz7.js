import ie from"./actionbutton.stories-9e_KVnsd.js";import re from"./checkbox.stories-BYWUGQBD.js";import{d as oe}from"./index-BL42WGY7.js";import{c as ce,e as ne}from"./states-D366RZcH.js";import{i as de}from"./variants-YiDXN7gG.js";import{R as r,a as D,s as H,n as s,g as pe,V as ue}from"./template-CykOH8vE.js";import{T as E}from"./template-C9PkAyt7.js";import{T as le}from"./template-CK26MrlV.js";import{T as me}from"./template-CotMDNmo.js";import{T as ge}from"./template-BBAyYaQJ.js";import{T as fe}from"./template-CjNf7Zto.js";import{k as a}from"./lit-element-C96egxJg.js";const he="@spectrum-css/card",be="9.1.1",ye="The Spectrum CSS card component",$e="Apache-2.0",ve="Adobe",we="https://opensource.adobe.com/spectrum-css/card",Se={type:"git",url:"https://github.com/adobe/spectrum-css.git",directory:"components/card"},xe={url:"https://github.com/adobe/spectrum-css/issues"},ke={".":"./dist/index.css","./*.md":"./*.md","./dist/*":"./dist/*","./index-*.css":"./dist/index-*.css","./index.css":"./dist/index.css","./metadata.json":"./metadata/metadata.json","./metadata/*":"./metadata/*","./package.json":"./package.json","./stories/*":"./stories/*"},Ae="dist/index.css",Qe=["dist/*","*.md","package.json","stories/*","metadata/*"],Ce={"@spectrum-css/actionbutton":">=6","@spectrum-css/asset":">=5","@spectrum-css/checkbox":">=9","@spectrum-css/icon":">=7","@spectrum-css/quickaction":">=3","@spectrum-css/tokens":">=14","@spectrum-css/typography":">=6"},Fe={"@spectrum-css/actionbutton":{optional:!0},"@spectrum-css/asset":{optional:!0},"@spectrum-css/checkbox":{optional:!0},"@spectrum-css/icon":{optional:!0},"@spectrum-css/quickaction":{optional:!0},"@spectrum-css/typography":{optional:!0}},Te={"@spectrum-css/actionbutton":"workspace:^","@spectrum-css/asset":"workspace:^","@spectrum-css/checkbox":"workspace:^","@spectrum-css/icon":"workspace:^","@spectrum-css/quickaction":"^3.1.1","@spectrum-css/tokens":"workspace:^","@spectrum-css/typography":"workspace:^"},De=["spectrum","css","design system","adobe"],Ne={access:"public"},je={name:he,version:be,description:ye,license:$e,author:ve,homepage:we,repository:Se,bugs:xe,exports:ke,main:Ae,files:Qe,peerDependencies:Ce,peerDependenciesMeta:Fe,devDependencies:Te,keywords:De,publishConfig:Ne},He=({rootClass:e="spectrum-QuickActions",size:i="m",isOpen:l=!1,textOnly:p=!1,position:m,content:g=[],id:F,customClasses:h=[],...f})=>g.length?(g.some(t=>t.icon)||(p=!0),a`
		<div
			class="${r({[e]:!0,[`${e}--size${i==null?void 0:i.toUpperCase()}`]:typeof i<"u","is-open":l,[`${e}--${m}`]:typeof m<"u",[`${e}--textOnly`]:p,...h.reduce((t,$)=>({...t,[$]:!0}),{})})}"
			id=${D(F)}
		>
			${g.map(t=>typeof t=="object"&&t.iconName||t.label?E({...f,...t,isQuiet:!0}):t)}
		</div>
	`):(console.warn("QuickActions: requires content be passed in to render."),a``),o=({rootClass:e="spectrum-Card",image:i,title:l,subtitle:p,description:m,footer:g,isFocused:F=!1,isSelected:h=!1,isHorizontal:f=!1,isQuiet:t=!1,isGallery:$=!1,isCardAssetOverride:K=!1,isGrid:L=!1,hasQuickAction:X=!1,hasActions:j=!1,showAsset:b,customStyles:Y={},customClasses:Z=[],id:ee=pe("card"),role:te}={},v={})=>{const{updateArgs:T}=v;return a`
    <div
      class=${r({[e]:!0,"is-selected":h,"is-focused":F,[`${e}--quiet`]:t,[`${e}--gallery`]:$,[`${e}--horizontal`]:f,...Z.reduce((se,ae)=>({...se,[ae]:!0}),{})})}
      id=${D(ee)}
      style=${H(Y)}
      tabindex="0"
      role=${D(i||b?"figure":L?"rowheader":te)}
			@focusin=${function(){T({isFocused:!0})}}
			@focusout=${function(){T({isFocused:!1})}}
    >
      ${s(i||b,()=>s(b||$&&i,()=>a`
            <div
              class=${r({[`${e}-preview`]:!0})}
            >
              ${s(!f,()=>le({image:i,preset:i?void 0:b,isCardAssetOverride:K}),()=>fe({size:"xxl",iconName:b==="folder"?"File":"Document",setName:"workflow"},v))}
            </div>
          `,()=>a`
            <div
              class=${r({[`${e}-coverPhoto`]:!0})}
              style=${H({"background-image":`url(${i})`})}
            ></div>
            ${ge({size:"s",customClasses:[`${e}-divider`]})}
          `))}
      ${s(l||p,()=>a` <div
            class=${r({[`${e}-body`]:!0})}
          >
            ${s(l||j,()=>a`
                <div
                  class=${r({[`${e}-header`]:!0})}
                >
                  ${s(l,()=>a`
                      <div
                        class=${r({[`${e}-title`]:!0})}
                      >
                        ${l}
                      </div>
                    `)}
                  ${s(j&&!f,()=>E({iconName:"More",iconSet:"workflow",size:"m",isQuiet:!0,customClasses:[`${e}-actionButton`]},v))}
                </div>
              `)}
            ${s(p||m,()=>a`
                <div
                  class=${r({[`${e}-content`]:!0})}
                >
                  ${s(p,()=>a`
                      <div
                        class=${r({[`${e}-subtitle`]:!0})}
                      >
                        ${p}
                      </div>
                    `)}
                  ${s(m,()=>a`
                      <div
                        class=${r({[`${e}-description`]:!0})}
                      >
                        ${m}
                      </div>
                    `)}
                </div>
              `)}
          </div>`)}
      ${s(g&&!t,()=>a`
          <div
            class=${r({[`${e}-footer`]:!0})}
          >
            ${g}
          </div>
        `)}
      ${s(X&&!f,()=>He({noOverlay:!0,content:[me({isChecked:h,title:"Select"},v)],onclick:function(){T({isSelected:!h})},customClasses:[`${e}-quickActions`]}))}
    </div>
  `},U=ue({Template:o,testData:[{testHeading:"Default"},{testHeading:"No image",title:"Card title",description:"Optional description that should be one or two lines",footer:void 0,image:void 0},{testHeading:"Horizontal",title:"Card title",description:"jpg",showAsset:"file",isQuiet:!1,isHorizontal:!0,hasActions:!1,hasQuickAction:!1,footer:void 0},{testHeading:"Quiet",title:"Name",showAsset:"image",image:"example-ava@2x.png",description:"10/15/18",isQuiet:!0,footer:void 0},{testHeading:"Quiet file",title:"FileName",description:"PDF",showAsset:"file",image:void 0,isQuiet:!0,footer:void 0},{testHeading:"Quiet folder",title:"Name",showAsset:"folder",description:"10/15/18",isQuiet:!0,image:void 0,footer:void 0},{testHeading:"Asset preview",title:"Card title",showAsset:"image",image:"example-card-portrait.png",description:"jpg",hasActions:!1,isCardAssetOverride:!0,customStyles:{width:"200px"},footer:void 0},{testHeading:"Gallery",title:"Card title",showAsset:"image",image:"example-card-landscape.png",description:"jpg",isGallery:!0,isCardAssetOverride:!0,customStyles:{width:"700px"},footer:void 0},{testHeading:"Text wrap",title:"Card title that is longer and should wrap",customStyles:{"max-inline-size":"205px"},footer:void 0,withStates:!1}],stateData:[{testHeading:"Selected",isSelected:!0},{testHeading:"Focused",isFocused:!0}]});var O,G,_,q;const Oe={title:"Card",component:"Card",argTypes:{image:{name:"Image",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},control:{type:"file",accept:".svg,.png,.jpg,.jpeg,.webc"}},isQuiet:de,isSelected:ce,isFocused:ne,hasActions:{name:"Card actions",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},hasQuickAction:{name:"Quick action",table:{disable:!0}},showAsset:{name:"Show asset",type:{name:"string"},table:{type:{summary:"string | boolean"},category:"Component"},options:["image","file","folder"],control:"select"},title:{name:"Title",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:{type:"text"}},description:{name:"Description",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:{type:"text"}},footer:{table:{disable:!0}},isGallery:{table:{disable:!0}},isCardAssetOverride:{table:{disable:!0}},isGrid:{table:{disable:!0}},isHorizontal:{table:{disable:!0}},isDropTarget:{table:{disable:!0}}},args:{rootClass:"spectrum-Card",isSelected:!1,isFocused:!1,isQuiet:!1,isGrid:!1,isGallery:!1,isDropTarget:!1,hasActions:!0,hasQuickAction:!0},parameters:{actions:{handles:[...((G=(O=ie.parameters)==null?void 0:O.actions)==null?void 0:G.handles)??[],...((q=(_=re.parameters)==null?void 0:_.actions)==null?void 0:q.handles)??[]]},packageJson:je,docs:{description:{component:"A card represents a rectangular space to contain text or images. Cards are typically used to encapsulate units of a data set, such as a gallery of image/caption pairs."}}},tags:["!autodocs"]},N=U.bind({});N.args={title:"Card title",image:"example-card-portrait.png",description:"Optional description that should be one or two lines",footer:["Footer"]};const w=U.bind({});w.args=N.args;w.tags=["!autodocs","!dev"];w.parameters={chromatic:{forcedColors:"active",modes:oe}};const S=o.bind({});S.tags=["!dev"];S.parameters={chromatic:{disableSnapshot:!0}};S.args={isSelected:!0};const x=o.bind({});x.args={isFocused:!0,title:"Card title that is longer and should wrap",customStyles:{"max-inline-size":"205px"}};x.tags=["!dev"];x.parameters={chromatic:{disableSnapshot:!0}};const u=o.bind({});u.args={title:"Name",showAsset:"image",image:"example-ava@2x.png",description:"10/15/18",isQuiet:!0};u.tags=["!dev"];u.parameters={chromatic:{disableSnapshot:!0}};const y=o.bind({});y.storyName="Quiet (file)";y.args={title:"FileName",description:"PDF",showAsset:"file",image:void 0,isQuiet:!0};y.tags=["!dev"];y.parameters={chromatic:{disableSnapshot:!0}};const k=o.bind({});k.tags=["!dev"];k.parameters={chromatic:{disableSnapshot:!0}};k.args={title:"Card title",description:"jpg",showAsset:"file",isQuiet:!1,isHorizontal:!0,hasActions:!1,hasQuickAction:!1};const A=o.bind({});A.args={title:"Card title",description:"Optional description that should be one or two lines"};A.tags=["!dev"];A.parameters={chromatic:{disableSnapshot:!0}};const c=u.bind({});c.args={title:"Name",showAsset:"folder",description:"10/15/18",isQuiet:!0};c.tags=["!dev"];c.parameters={chromatic:{disableSnapshot:!0}};const n=u.bind({});n.args={title:"Name",showAsset:"image",image:"example-ava@2x.png",description:"10/15/18",isQuiet:!0,isFocused:!0};n.tags=["!dev"];n.parameters={chromatic:{disableSnapshot:!0}};const d=u.bind({});d.args={title:"Name",showAsset:"image",image:"example-ava@2x.png",description:"10/15/18",isQuiet:!0,isSelected:!0};d.tags=["!dev"];d.parameters={chromatic:{disableSnapshot:!0}};const Q=o.bind({});Q.args={title:"Card title",showAsset:"image",image:"example-card-portrait.png",description:"jpg",hasActions:!1,isCardAssetOverride:!0,customStyles:{width:"200px"}};Q.tags=["!dev"];Q.parameters={chromatic:{disableSnapshot:!0}};const C=o.bind({});C.args={title:"Card title",showAsset:"image",image:"example-card-landscape.png",description:"jpg",isGallery:!0,isCardAssetOverride:!0,customStyles:{width:"700px"}};C.tags=["!dev"];C.parameters={chromatic:{disableSnapshot:!0}};var z,P,M;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:"Template.bind({})",...(M=(P=c.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var I,R,B;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:"Template.bind({})",...(B=(R=n.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var J,V,W;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:"Template.bind({})",...(W=(V=d.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const Ge=["Default","WithForcedColors","Selected","Focused","Quiet","QuietFile","Horizontal","NoImage","QuietFolder","QuietFocused","QuietSelected","AssetPreview","Gallery"],Ue=Object.freeze(Object.defineProperty({__proto__:null,AssetPreview:Q,Default:N,Focused:x,Gallery:C,Horizontal:k,NoImage:A,Quiet:u,QuietFile:y,QuietFocused:n,QuietFolder:c,QuietSelected:d,Selected:S,WithForcedColors:w,__namedExportsOrder:Ge,default:Oe},Symbol.toStringTag,{value:"Module"}));export{Q as A,Ue as C,N as D,x as F,C as G,k as H,A as N,u as Q,S,y as a,c as b,n as c,d};
