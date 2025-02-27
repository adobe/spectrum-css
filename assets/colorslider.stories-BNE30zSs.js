import{d as x}from"./index-_AwL4lpH.js";import{a as z,c as E}from"./states-C6Exry22.js";import{R as b,s as S,n as A,V as Q}from"./decorator-BliclrE4.js";import{T as V}from"./template-BfA4Uu1R.js";import{T as j}from"./template-XOE-O1Gr.js";import{k as c}from"./lit-element-C96egxJg.js";import"./capitalize-D60SaZ2R.js";import"./v4-CQkTLCs1.js";import"./template-CbTMuxpg.js";import"./if-defined-B5hOZ0d5.js";const L="index.css",B=[".spectrum-ColorSlider",".spectrum-ColorSlider--vertical",".spectrum-ColorSlider--vertical .spectrum-ColorSlider-handle",".spectrum-ColorSlider-checkerboard",".spectrum-ColorSlider-checkerboard:before",".spectrum-ColorSlider-gradient",".spectrum-ColorSlider-gradient:dir(rtl)",".spectrum-ColorSlider-handle",".spectrum-ColorSlider-slider",".spectrum-ColorSlider.is-disabled",".spectrum-ColorSlider.is-disabled .spectrum-ColorSlider-checkerboard",".spectrum-ColorSlider.is-disabled .spectrum-ColorSlider-gradient",".spectrum-ColorSlider.is-focused",'[dir="rtl"] .spectrum-ColorSlider-gradient'],F=["--mod-color-slider-background-color-disabled","--mod-color-slider-border-color","--mod-color-slider-border-color-disabled","--mod-color-slider-border-rounding","--mod-color-slider-border-width","--mod-color-slider-control-track-height","--mod-color-slider-control-track-width","--mod-color-slider-handle-hitarea-border-radius","--mod-color-slider-length","--mod-color-slider-minimum-length","--mod-color-slider-vertical-control-track-width","--mod-color-slider-vertical-height","--mod-color-slider-vertical-minimum-height"],H=["--spectrum-color-slider-border-color-default","--spectrum-color-slider-border-color-local","--spectrum-color-slider-border-opacity","--spectrum-color-slider-border-rounding","--spectrum-color-slider-border-width","--spectrum-color-slider-length","--spectrum-color-slider-minimum-length"],U=["--spectrum-color-control-track-width","--spectrum-disabled-background-color","--spectrum-gray-900-rgb"],J=["--mod-colorhandle-hitarea-border-radius"],O={sourceFile:L,selectors:B,modifiers:F,component:H,global:U,"system-theme":[],passthroughs:J,"high-contrast":["--highcontrast-color-slider-background-color-disabled","--highcontrast-color-slider-border-color","--highcontrast-color-slider-border-color-disabled"]},$="@spectrum-css/colorslider",X="8.1.0",P="The Spectrum CSS Color slider component",K="Apache-2.0",q="Adobe",_="https://opensource.adobe.com/spectrum-css/?path=/docs/components-color-slider--docs",ee={type:"git",url:"https://github.com/adobe/spectrum-css.git",directory:"components/colorslider"},re={url:"https://github.com/adobe/spectrum-css/issues"},oe={".":"./dist/index.css","./*.md":"./*.md","./dist/*":"./dist/*","./index-*.css":"./dist/index-*.css","./index.css":"./dist/index.css","./metadata.json":"./dist/metadata.json","./package.json":"./package.json","./stories/*":"./stories/*"},se="dist/index.css",te={"@spectrum-css/colorhandle":">=10.0.0 <11.0.0","@spectrum-css/opacitycheckerboard":">=4.0.0 <5.0.0","@spectrum-css/tokens":">=16.0.0 <17.0.0"},ie={"@spectrum-css/colorhandle":{optional:!0},"@spectrum-css/opacitycheckerboard":{optional:!0},"@spectrum-css/tokens":{optional:!0}},ce={"@spectrum-css/colorhandle":"10.1.0","@spectrum-css/opacitycheckerboard":"4.1.0","@spectrum-css/tokens":"16.0.1"},ae=["design-system","spectrum","spectrum-css","adobe","adobe-spectrum","component","css"],de={access:"public"},le=[{guidelines:"https://spectrum.adobe.com/page/color-slider",rootClass:"spectrum-ColorSlider",swc:"https://opensource.adobe.com/spectrum-web-components/components/color-slider/"}],ne={name:$,version:X,description:P,license:K,author:q,homepage:_,repository:ee,bugs:re,exports:oe,main:se,peerDependencies:te,peerDependenciesMeta:ie,devDependencies:ce,keywords:ae,publishConfig:de,spectrum:le},t=({rootClass:r="spectrum-ColorSlider",customClasses:T=[],customStyles:N={},isDisabled:n=!1,isFocused:p=!1,vertical:m=!1,gradientStops:i=["rgb(255, 0, 0) 0%","rgb(255, 255, 0) 17%","rgb(0, 255, 0) 33%","rgb(0, 255, 255) 50%","rgb(0, 0, 255) 67%","rgb(255, 0, 255) 83%","rgb(255, 0, 0)"],gradientType:Y="gradient",selectedColor:u="rgba(255, 0, 0, 1)",colorHandleStyle:R={}}={},g={})=>{const{updateArgs:h}=g;return c`
    <div
      class=${b({[r]:!0,[`${r}--vertical`]:m,"is-disabled":n,"is-focused":p,...T.reduce((Z,W)=>({...Z,[W]:!0}),{})})}
      style=${S(N)}
      @focusin=${function(){h({isFocused:!0})}}
      @focusout=${function(){h({isFocused:!1})}}
    >
      ${j({customClasses:[`${r}-checkerboard`],content:[A(Y==="image",()=>c`<img
              class="${r}-gradient"
              role="presentation"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAeCAIAAAAkbYJ/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjNBMTBENzk4QkQzMTFFQThDOTdDN0QyNDNGMUNFMzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjNBMTBEN0E4QkQzMTFFQThDOTdDN0QyNDNGMUNFMzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGM0ExMEQ3NzhCRDMxMUVBOEM5N0M3RDI0M0YxQ0UzMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGM0ExMEQ3ODhCRDMxMUVBOEM5N0M3RDI0M0YxQ0UzMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrmQ8p4AAADbSURBVHja7JFLDsMgDAWNc/9L9h7YiQ0Gou66rGaUWHxegDDN5SPiEm/Uo+3S3LPWIzEy2uqu1Vh1dy3q5TM/ks38yprJbGdXK38GdHwVs94sAtXNas9h/LIK2zE11jlHrI5ksa9a5r+mdJ3E8i+OveISurzCvldr3V/dp91XQLTPvWYdgbFCr/tcp81BqW/bzKxLkz2epxLzPWglS7Y1ERX4axCMYEAwIBgQDAgGBAOCEQwIBgQDggHBgGBAMIIBwYBgQDAgGBAMCAYEIxgQDAgGBAOC4RduAQYALiXYw9aNKvcAAAAASUVORK5CYII="
            />`,()=>c`<div
              class="${r}-gradient"
              role="presentation"
              style=${A(i&&i.length,()=>S({background:`linear-gradient(to ${m?"bottom":"right"}, ${i.join(", ")})`}))}
            ></div>`)],role:"presentation"})}
      ${V({isDisabled:n,isFocused:p,selectedColor:u,customClasses:[`${r}-handle`],customStyles:R},g)}
      <input
	  	type="color"
		value=${u}
		class=${b({[`${r}-slider`]:!0})} />
    </div>
  `},I=Q({Template:t,testData:[{testHeading:"Default",wrapperStyles:{"padding-inline":"20px"}},{testHeading:"Vertical",vertical:!0,wrapperStyles:{"padding-block":"20px"}},{testHeading:"Alpha",gradientStops:["rgba(0, 0, 0, 1) 0%","rgba(0, 0, 0, 0) 100%"],selectedColor:"rgba(0, 0, 0, 1)",wrapperStyles:{"padding-inline":"20px"}},{testHeading:"With Image",gradientType:"image",selectedColor:"#df6a7d",colorHandleStyle:{"inset-inline-start":"50%"}}],stateData:[{testHeading:"Disabled",isDisabled:!0},{testHeading:"Focused",isFocused:!0}]}),ve={title:"Color slider",component:"ColorSlider",argTypes:{colorHandleStyle:{table:{disable:!0}},vertical:{table:{disable:!0}},isDisabled:z,isFocused:{...E,if:{arg:"isDisabled",truthy:!1}},gradientStops:{name:"Gradient stops",description:"The <linear-color-stop> value of the CSS linear-gradient. Can be multiple stops separated by commas.",type:{name:"array"},table:{disable:!0}},selectedColor:{name:"Selected color",description:"The color of the handle.",type:{name:"string"},accept:"hex, rgb, rgba",control:"color"},gradientType:{name:"Gradient type",description:"The gradient can be defined in the markup using CSS or with an image.",options:["gradient","image"],control:{type:"select"},table:{disable:!0}}},args:{rootClass:"spectrum-ColorSlider",isDisabled:!1,isFocused:!1,gradientType:"gradient",vertical:!1,selectedColor:"rgba(255, 0, 0, 1)"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=36740-137"},packageJson:ne,metadata:O,docs:{description:{component:"The color slider component lets users visually change an individual channel of a color.\n\n## Usage notes\n- Set the color of the nested [color handle component](/docs/components-color-handle--docs) to match the color slider’s currently selected color using its custom property, `--spectrum-picked-color`.\n- The `.spectrum-ColorHandle` should be moved with `inset-inline-*` (horizontal) or `inset-block-*` (vertical) style properties as the slider is dragged.\n- Ensure that the min and max attributes of the `.spectrum-ColorSlider-slider` input are set to the corresponding scale (i.e. 0 to 1 for a, 0 to 255 for r, etc.).\n- Ensure the step attribute of the `.spectrum-ColorSlider-slider` input is set appropriately (i.e. 0.1 for a, s, v or 1 and h, r, etc)."}}}},s=I.bind({});s.args={gradientStops:["rgb(255, 0, 0) 0%","rgb(255, 255, 0) 17%","rgb(0, 255, 0) 33%","rgb(0, 255, 255) 50%","rgb(0, 0, 255) 67%","rgb(255, 0, 255) 83%","rgb(255, 0, 0) 100%"]};const a=I.bind({});a.args=s.args;a.tags=["!autodocs","!dev"];a.parameters={chromatic:{forcedColors:"active",modes:x}};const o=t.bind({});o.args={vertical:!0};o.tags=["!dev"];o.parameters={chromatic:{disableSnapshot:!0}};const d=t.bind({});d.args={gradientStops:["rgba(0, 0, 0, 1) 0%","rgba(0, 0, 0, 0) 100%"],selectedColor:"rgba(0, 0, 0, 1)"};d.tags=["!dev"];d.parameters={chromatic:{disableSnapshot:!0}};const e=t.bind({});e.args={gradientType:"image",selectedColor:"#df6a7d",colorHandleStyle:{"inset-inline-start":"50%"}};e.storyName="With image";e.tags=["!dev"];e.parameters={chromatic:{disableSnapshot:!0}};const l=t.bind({});l.args={isDisabled:!0};l.tags=["!dev"];l.parameters={chromatic:{disableSnapshot:!0}};var y,C,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,description:{story:"By default, a color slider is horizontal and should be used when vertical space is more limited.  The background style property of `.spectrum-ColorSlider-gradient` can be set to the gradient of the colors to be selected. The CSS will automatically reverse the gradient element horizontally when using a RTL (right-to-left) base direction.",...(v=(C=s.parameters)==null?void 0:C.docs)==null?void 0:v.description}}};var D,k,f;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,description:{story:"The vertical orientation is used when horizontal space is more limited.",...(f=(k=o.parameters)==null?void 0:k.docs)==null?void 0:f.description}}};var G,M,w;e.parameters={...e.parameters,docs:{...(G=e.parameters)==null?void 0:G.docs,description:{story:"Alternatively, implementations can provide an `<img>` element with the gradient desired and apply the `.spectrum-ColorSlider-gradient` class.",...(w=(M=e.parameters)==null?void 0:M.docs)==null?void 0:w.description}}};const De=["Default","WithForcedColors","Vertical","Alpha","WithImage","Disabled"];export{d as Alpha,s as Default,l as Disabled,o as Vertical,a as WithForcedColors,e as WithImage,De as __namedExportsOrder,ve as default};
