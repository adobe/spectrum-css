import{T as x}from"./template-D5ShUZ_q.js";import{Template as m}from"./template-Df-YB4AQ.js";import"./lit-element-CJjJlyWZ.js";import{x as o}from"./lit-html-BdGv-Ldy.js";import{a as h}from"./class-map-sTkR_Npl.js";import{o as f}from"./if-defined-Bo9G1hLT.js";import{o as d}from"./style-map-yx2CMG_J.js";import{n as p}from"./when-BR7zwNJC.js";const n=({rootClass:e="spectrum-HelpText",size:i="m",isDisabled:s=!1,hideIcon:t=!1,text:r,variant:a,id:l,customClasses:c=[],customStyles:u={}},g)=>o`
  <div
    class=${h({[e]:!0,"is-disabled":s,[`${e}--size${i==null?void 0:i.toUpperCase()}`]:typeof i<"u",[`${e}--${a}`]:typeof a<"u",...c.reduce((v,$)=>({...v,[$]:!0}),{})})}
    style=${d(u)}
    id=${f(l)}
  >
    ${p(!t&&a=="negative",()=>x({iconName:"Alert",size:i,customClasses:[`${e}-validationIcon`]},g))}
    <div class=${`${e}-text`}>${r}</div>
  </div>
`,y=(e,i)=>{var t,r;return((r=(t=i==null?void 0:i.argTypes)==null?void 0:t.size)==null?void 0:r.options).map(a=>o`
      <div>
        ${m({semantics:"heading",size:"m",weight:"light",content:[{s:"Small",m:"Medium",l:"Large",xl:"Extra-large"}[a]],customClasses:["chromatic-ignore"]})}
        <div>${n({...e,size:a},i)}</div>
      </div>
    `)},C=(e,i)=>o`
  <div
    style=${d({display:window.isChromatic()?"none":"contents"})}
  >
    ${n(e,i)}
  </div>
  <div
    style=${d({display:window.isChromatic()?"flex":"none","flex-direction":"column","align-items":"flex-start",gap:"32px"})}
  >
    ${[{heading:"Neutral",variant:"neutral"},{heading:"Negative",variant:"negative",text:"This is an example with wrapping text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",customStyles:{"max-width":"350px"}},{heading:"Negative with no icon",variant:"negative",hideIcon:!0,text:"This is an example with wrapping text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",customStyles:{"max-width":"350px"}},{heading:"Disabled",isDisabled:!0}].map(({heading:s,...t})=>o`
        <div class="spectrum-Typography">
          ${p(s,()=>m({semantics:"heading",size:"l",content:[s],customClasses:["chromatic-ignore"]}))}
          <div
            style=${d({padding:"12px",border:"1px solid var(--spectrum-gray-200)","border-radius":"4px"})}
          >
            ${n({...e,...t},i)}
          </div>
        </div>
      `)}
    <div class="spectrum-Typography">
      ${m({semantics:"heading",size:"l",content:["Sizing"]})}
      <div
        style=${d({display:"flex","flex-direction":"row","align-items":"flex-start",gap:"32px",padding:"12px",border:"1px solid var(--spectrum-gray-200)","border-radius":"4px"})}
      >
        ${y(e,i)}
      </div>
    </div>
  </div>
`;export{n as T,C as V};
