import{T as G}from"./template-xI5Kowax.js";import{d as R}from"./index-BCEELo55.js";import{i as X,e as Y,d as Z}from"./states-DzrSzBKQ.js";import"./lit-element-CJjJlyWZ.js";import{x as T}from"./lit-html-BdGv-Ldy.js";import{o as D}from"./style-map-yx2CMG_J.js";import{T as z}from"./template-D7lOzDBB.js";import{T as ee}from"./template-oY73HyMu.js";import{T as te}from"./template-BCjEPzLh.js";import{T as oe}from"./template-C3bVK-Qx.js";import{a as ae}from"./class-map-sTkR_Npl.js";import{o as ie}from"./if-defined-Bo9G1hLT.js";import{n as se}from"./when-BR7zwNJC.js";const ne="3.1.2",t=({rootClass:e="spectrum-Combobox",id:o,customClasses:j=[],size:a="m",isOpen:n=!0,isInvalid:w=!1,isQuiet:c=!1,isDisabled:i=!1,showFieldLabel:B=!1,fieldLabelText:K="Select location",fieldLabelPosition:E="top",isFocused:C=!1,isKeyboardFocused:S=!1,isLoading:L=!1,selectedDay:l}={},r={})=>{const{globals:N={},updateArgs:F}=r,O=N.lang??"en-US";return typeof l=="string"&&l.length>0&&(l=new Date(l).toLocaleDateString({language:O})),T`
		${se(B,()=>z({size:a,label:K,customStyles:{"max-inline-size":"100px"},alignment:E==="left"&&"left"},r))}
		<div
			class=${ae({[e]:!0,[`${e}--size${a==null?void 0:a.toUpperCase()}`]:typeof a<"u","is-open":!i&&n,[`${e}--quiet`]:c,"is-invalid":!i&&w,"is-focused":!i&&C,"is-keyboardFocused":!i&&S,"is-loading":L,"is-disabled":i,...j.reduce((H,J)=>({...H,[J]:!0}),{})})}
			id=${ie(o)}
		>
			${[oe({size:a,isQuiet:c,isDisabled:i,isInvalid:w,isFocused:C,isKeyboardFocused:S,customClasses:[`${e}-textfield`,...L?["is-loading"]:[]],customInputClasses:[`${e}-input`],isLoading:L,customProgressCircleClasses:["spectrum-Combobox-progress-circle"],placeholder:"Type here this text should truncate",name:"field",value:l?new Date(l).toLocaleDateString(O):void 0,onclick:function(){n||F({isOpen:!0})}},r),ee({customClasses:[`${e}-button`,...w?["is-invalid"]:[]],size:a,iconType:"ui",iconName:"ChevronDown",isQuiet:c,isOpen:n,isFocused:C,isKeyboardFocused:S,isDisabled:i,position:"right",onclick:function(){F({isOpen:!n})}},r),te({isOpen:n&&!i,withTip:!1,position:"bottom",isQuiet:c,customStyles:n?{position:"absolute",top:"100%",left:"0",width:"100%"}:{},content:[G({size:a,items:[{label:"Ballard"},{label:"Fremont"},{label:"Greenwood"},{label:"United States of America",isDisabled:!0}]},r)]},r)]}
		</div>
	`},le={title:"Combobox",component:"Combobox",argTypes:{size:{name:"Size",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["s","m","l","xl"],control:"select"},isOpen:X,isQuiet:{name:"Quiet styling",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},isInvalid:Y,isFocused:Z,isKeyboardFocused:{name:"Keyboard Focused",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isLoading:{name:"Loading",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isDisabled:{name:"Disabled",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},showFieldLabel:{name:"Show field label",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},fieldLabelText:{name:"Field label text",type:{name:"text"},table:{type:{summary:"text"},category:"Component"},control:"text",if:{arg:"showFieldLabel",truthy:!0}},fieldLabelPosition:{name:"Field label position",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},options:["top","left"],control:"select",if:{arg:"showFieldLabel",truthy:!0}},content:{table:{disable:!0}}},args:{rootClass:"spectrum-Combobox",size:"m",isOpen:!0,isQuiet:!1,isInvalid:!1,isFocused:!1,isKeyboardFocused:!1,isLoading:!1,isDisabled:!1,showFieldLabel:!1,fieldLabelText:"Select location",content:[G({role:"listbox",subrole:"option",isSelectable:!0,items:[{label:"Ballard",isSelected:!0,isChecked:!0},{label:"Fremont"},{label:"Greenwood"},{type:"divider"},{label:"United States of America",isDisabled:!0}]})]},parameters:{docs:{story:{height:"220px"},description:{component:"Comboboxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query."}},componentVersion:ne}},I=(e,o)=>T`
    <div style=${e.isOpen&&"padding-bottom: 160px;"}>
        ${t(e,o)}
    </div>
    <div style=${e.isOpen&&"padding-bottom: 160px;"}>
        ${t({...e,isFocused:!0},o)}
    </div>
    <div style=${e.isOpen&&"padding-bottom: 160px;"}>
        ${t({...e,isKeyboardFocused:!0},o)}
    </div>
    <div style=${e.isOpen&&"padding-bottom: 160px;"}>
        ${t({...e,isDisabled:!0},o)}
    </div>
    <div style=${e.isOpen&&"padding-bottom: 160px;"}>
        ${t({...e,isLoading:!0},o)}
    </div>
    <div style=${e.isOpen&&"padding-bottom: 160px;"}>
        ${t({...e,isInvalid:!0},o)}
    </div>
    <div style=${e.isOpen&&"padding-bottom: 160px;"}>
        ${t({...e,showFieldLabel:!0,fieldLabelText:"Select location, this label should wrap"},o)}
    </div>
    <div style=${e.isOpen&&"padding-bottom: 160px;"}>
        ${t({...e,showFieldLabel:!0,fieldLabelText:"Select location, this label should wrap",fieldLabelPosition:"left"},o)}
    </div>
`,Q=(e,o)=>T`
    <div style=${D({display:window.isChromatic()?"none":"contents"})}>
        ${t(e,o)}
    </div>
    <div style=${D({display:window.isChromatic()?"contents":"none"})}>
        <div style="display: flex; gap: 16px; flex-direction: column;">
            ${I({...e,isOpen:!1},o)}
        </div>
        <div style="display: flex; gap: 16px; flex-direction: column; margin-top: 32px;">
            ${I(e,o)}
        </div>
    </div>
`,d=Q.bind({});d.args={};const p=Q.bind({});p.args={isQuiet:!0};const m=t.bind({});m.tags=["autodocs","!dev"];m.args={showFieldLabel:!0,fieldLabelText:"Country",isOpen:!0};m.parameters={chromatic:{disableSnapshot:!0}};const u=t.bind({});u.tags=["autodocs","!dev"];u.args={isOpen:!1};u.parameters={chromatic:{disableSnapshot:!0}};const b=t.bind({});b.tags=["autodocs","!dev"];b.args={isInvalid:!0};b.parameters={chromatic:{disableSnapshot:!0}};const y=t.bind({});y.tags=["autodocs","!dev"];y.args={isLoading:!0};y.parameters={chromatic:{disableSnapshot:!0}};const g=t.bind({});g.tags=["autodocs","!dev"];g.args={isDisabled:!0};g.parameters={chromatic:{disableSnapshot:!0}};const f=t.bind({});f.tags=["autodocs","!dev"];f.args={showFieldLabel:!0,fieldLabelText:"Country",isQuiet:!0};f.parameters={chromatic:{disableSnapshot:!0}};const v=t.bind({});v.tags=["autodocs","!dev"];v.args={isQuiet:!0,isOpen:!1};v.parameters={chromatic:{disableSnapshot:!0}};const h=t.bind({});h.tags=["autodocs","!dev"];h.args={isQuiet:!0,isInvalid:!0};h.parameters={chromatic:{disableSnapshot:!0}};const x=t.bind({});x.tags=["autodocs","!dev"];x.args={isQuiet:!0,isLoading:!0};x.parameters={chromatic:{disableSnapshot:!0}};const $=t.bind({});$.tags=["autodocs","!dev"];$.args={isQuiet:!0,isDisabled:!0};$.parameters={chromatic:{disableSnapshot:!0}};const s=Q.bind({});s.tags=["!autodocs","!dev","test"];s.parameters={chromatic:{forcedColors:"active",modes:R}};var M,V,W;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`(args, context) => html\`
    <div style=\${styleMap({
  "display": window.isChromatic() ? "none" : "contents"
})}>
        \${Template(args, context)}
    </div>
    <div style=\${styleMap({
  "display": window.isChromatic() ? "contents" : "none"
})}>
        <div style="display: flex; gap: 16px; flex-direction: column;">
            \${Variants({
  ...args,
  isOpen: false
}, context)}
        </div>
        <div style="display: flex; gap: 16px; flex-direction: column; margin-top: 32px;">
            \${Variants(args, context)}
        </div>
    </div>
\``,...(W=(V=d.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var _,k,P;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`(args, context) => html\`
    <div style=\${styleMap({
  "display": window.isChromatic() ? "none" : "contents"
})}>
        \${Template(args, context)}
    </div>
    <div style=\${styleMap({
  "display": window.isChromatic() ? "contents" : "none"
})}>
        <div style="display: flex; gap: 16px; flex-direction: column;">
            \${Variants({
  ...args,
  isOpen: false
}, context)}
        </div>
        <div style="display: flex; gap: 16px; flex-direction: column; margin-top: 32px;">
            \${Variants(args, context)}
        </div>
    </div>
\``,...(P=(k=p.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var U,q,A;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`(args, context) => html\`
    <div style=\${styleMap({
  "display": window.isChromatic() ? "none" : "contents"
})}>
        \${Template(args, context)}
    </div>
    <div style=\${styleMap({
  "display": window.isChromatic() ? "contents" : "none"
})}>
        <div style="display: flex; gap: 16px; flex-direction: column;">
            \${Variants({
  ...args,
  isOpen: false
}, context)}
        </div>
        <div style="display: flex; gap: 16px; flex-direction: column; margin-top: 32px;">
            \${Variants(args, context)}
        </div>
    </div>
\``,...(A=(q=s.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const re=["Default","Quiet","WithLabel","Closed","Invalid","Loading","Disabled","QuietWithLabel","QuietClosed","QuietInvalid","QuietLoading","QuietDisabled","WithForcedColors"],we=Object.freeze(Object.defineProperty({__proto__:null,Closed:u,Default:d,Disabled:g,Invalid:b,Loading:y,Quiet:p,QuietClosed:v,QuietDisabled:$,QuietInvalid:h,QuietLoading:x,QuietWithLabel:f,WithForcedColors:s,WithLabel:m,__namedExportsOrder:re,default:le},Symbol.toStringTag,{value:"Module"}));export{we as C,d as D,b as I,y as L,p as Q,m as W,u as a,g as b,f as c,v as d,h as e,x as f,$ as g};
