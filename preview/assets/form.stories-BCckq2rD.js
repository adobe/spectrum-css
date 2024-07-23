import{T as x}from"./template-BO-X2BxT.js";import{d as T}from"./index-BCEELo55.js";import{T as h}from"./template-Db1IFiUx.js";import{T as u}from"./template-C3bVK-Qx.js";import{v as F}from"./package-zFcCOiDa.js";import{T as C}from"./template-D7lOzDBB.js";import{Template as w}from"./template-Df-YB4AQ.js";import"./lit-element-CJjJlyWZ.js";import{x as a}from"./lit-html-BdGv-Ldy.js";import{a as l}from"./class-map-sTkR_Npl.js";import{o as A}from"./if-defined-Bo9G1hLT.js";import{c as D}from"./repeat-Du-egFmu.js";import{o as i}from"./style-map-yx2CMG_J.js";import{n as _}from"./when-BR7zwNJC.js";import"./template-CO7DuZY3.js";import"./template-D5ShUZ_q.js";import"./template-BCjEPzLh.js";import"./utilities-BisrhIqU.js";import"./template-BTVRUgwL.js";import"./template-BzRF0abB.js";import"./template-D4xZNe-s.js";import"./decorator-Dl7o6wQR.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./v4-CQkTLCs1.js";import"./capitalize-D60SaZ2R.js";import"./directive-helpers-F-Ou1E0_.js";const f=({rootClass:e="spectrum-Form",labelsAbove:m=!1,customClasses:n=[],customStyles:s={},id:y,items:g=[]},d)=>a`
    <form
        class=${l({[e]:!0,[`${e}--labelsAbove`]:m,...n.reduce((r,t)=>({...r,[t]:!0}),{})})}
        id=${A(y)}
        style=${i(s)}
    >
        ${D(g,r=>r.id,({label:r,content:t,...c})=>{if(t)return a`
                <div class=${l({[`${e}-item`]:!0})}>
                    ${_(r,()=>C({label:r,forInput:c.id,alignment:m?void 0:"left"},d))}
                    <div class=${l({[`${e}-itemField`]:!0})}>
                        ${typeof t=="function"?t({...c},d):t}
                    </div>
                </div>
            `})}
    </form>
`,E=(e,m)=>a`
	<div style=${i({display:window.isChromatic()?"none":"contents"})}>
		${f(e,m)}
	</div>
	<div style=${i({display:window.isChromatic()?"flex":"none","flex-direction":"column","align-items":"flex-start",gap:"8px"})}>
		${[{},{heading:"Labels above",labelsAbove:!0}].map(({heading:n,...s})=>a`
			<div>
				${w({semantics:"heading",size:"s",content:[n]})}
                <div style=${i({border:"1px solid var(--spectrum-gray-200)","border-radius":"4px",padding:"12px","margin-block-end":"32px"})}>
                    ${f({...e,...s},m)}
                </div>
			</div>
		`)}
	</div>
`,te={title:"Form",component:"Form",argTypes:{labelsAbove:{name:"Labels above",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"}},args:{rootClass:"spectrum-Form",labelsAbove:!1},parameters:{componentVersion:F,docs:{description:{component:"The form component is used for aligning multiple inputs and field groups within a form."}}}},p=E.bind({});p.args={items:[{label:"Company title",id:"form-example-company",content:u.bind(null,{multiline:!0,name:"field"})},{label:"Email address",id:"form-example-email",content:u.bind(null,{type:"email",name:"email"})},{label:"Country",id:"form-example-country",content:x.bind(null,{placeholder:"Select a country",name:"country"})},{label:"Amount",id:"form-example-amount",content:h.bind(null,{})}]};const o=p.bind({});o.args=p.args;o.tags=["!autodocs","!dev","test"];o.parameters={chromatic:{forcedColors:"active",modes:T}};var b,$,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:"FormGroup.bind({})",...(v=($=o.parameters)==null?void 0:$.docs)==null?void 0:v.source}}};const me=["Default","WithForcedColors"];export{p as Default,o as WithForcedColors,me as __namedExportsOrder,te as default};
