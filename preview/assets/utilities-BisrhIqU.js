import"./lit-element-CJjJlyWZ.js";import{x as p,T as y}from"./lit-html-BdGv-Ldy.js";import{a as $}from"./class-map-sTkR_Npl.js";import{o as g}from"./style-map-yx2CMG_J.js";import{n as h}from"./when-BR7zwNJC.js";const O=({type:e="heading",content:t,size:n="m",weight:r,customClasses:i=[]})=>{const s=e==="code"?"spectrum-Code":"spectrum-Heading",o={[s]:!0,[`${s}--size${n==null?void 0:n.toUpperCase()}`]:!0,[`${s}--${r}`]:e!=="code"&&typeof r<"u","chromatic-ignore":!0,...i.reduce((d,l)=>({...d,[l]:!0}),{})};return p`
    ${h(e==="code",()=>p`<pre><code class=${$(o)}>${t}</code></pre>`,()=>p`<h2 class=${$(o)}>${t}</h2>`)}
  `},u=({heading:e,content:t,type:n="heading",level:r=1,direction:i="row",withBorder:s=!0,containerStyles:o={display:"flex","flex-direction":"column",gap:"6px","padding-inline":"12px","padding-block-end":"12px"},wrapperStyles:d={}})=>{let l={size:"l"},a={gap:i==="row"?"120px":"32px"};return r===2?(l={size:"m",weight:"light"},a={gap:i==="row"?"60px":"32px"}):r===3&&(l={size:"s",weight:"light"},a={gap:"12px"}),p`
    <div style=${g(o)}>
      ${h(e,()=>O({...l,type:n,content:e}))}
      <div
        style=${g({display:"flex","flex-direction":i,"align-items":"flex-start","justify-content":"center","padding-inline":s?"12px":"0","padding-block-start":"12px","padding-block-end":s?"12px":"0",border:s?"1px solid var(--spectrum-gray-200)":"none","border-radius":s?"4px":"0",...a,...d})}
      >
        ${k(t)}
      </div>
    </div>
  `},b=({Template:e,direction:t="row",stateData:n=[],...r},i)=>u({level:2,direction:t,withBorder:!1,heading:void 0,content:n.map(({testHeading:s=t==="row"?p`&nbsp;`:void 0,...o})=>u({heading:n.some(({testHeading:d})=>d)?s:void 0,level:3,withBorder:!1,content:e({...r,...o},i)}))}),C=({Template:e,direction:t="column",...n}={},r={})=>{var o,d;const i=((d=(o=r==null?void 0:r.argTypes)==null?void 0:o.size)==null?void 0:d.options)??[];if(!i.length)return y;const s=i.map(l=>u({heading:`[size=${l}]`,type:"code",level:3,withBorder:!1,content:e({...n,size:l},r)}));return u({heading:"Sizing",level:2,direction:t,content:s})},H=({Template:e,testData:t=[{}],stateData:n=[],sizeDirection:r="column",stateDirection:i="row",withBorders:s=!0})=>{if(!e)throw new Error("Template is required");return(o,d)=>{const l=o.isOpen;return Object.keys(o).includes("isOpen")&&(o.isOpen=window.isChromatic()?!1:l),p`
      <!-- Simple, clean template preview for non-testing grid views -->
      <div
        style=${g({display:window.isChromatic()?"none":"contents"})}
        data-html-preview
      >
        ${e(o,d)}
      </div>

      <!-- Start testing grid markup -->
      <div
        style=${g({display:window.isChromatic()?"flex":"none","flex-direction":"column","align-items":"flex-start",gap:"60px"})}
      >
        <!-- Test data can include: a custom template, descriptive heading, and container styles -->
        <!-- Tests can also opt out of rendering the test in each available state -->
        ${t.map(({Template:a,testHeading:w,customContainerStyles:v,withStates:f,...m})=>{console.log(m),typeof f>"u"&&(f=n.length>0),n[0]&&Object.keys(n[0]).length!==0&&n.unshift({}),a&&(e=a);const x=s||f||t.length>1,c={...o,...m};return Object.keys(c).includes("isOpen")&&(window.isChromatic()?typeof m.isOpen>"u"&&(c.isOpen=l):c.isOpen=!1),u({heading:w,level:f?1:2,withBorder:x,containerStyles:{"z-index":"1"},wrapperStyles:v,content:p`
                ${h(f,()=>b({Template:e,stateData:n,direction:i,...c},d),()=>e(c,d))}
              `})})}

        <!-- If sizing exists for the component, it will render all sizes for testing -->
        ${C({Template:e,direction:r,...o},d)}
      </div>
    `}},k=(e=[],{context:t={},args:n={},callback:r=(i,s)=>(console.log(JSON.stringify(i,null,2),JSON.stringify(s,null,2)),y)}={})=>(Array.isArray(e)||(e=[e]),e.length===0?y:p`
    ${e.map(i=>typeof i!="string"&&typeof i=="object"&&!i._$litType$?r({...n,...i},t):typeof i=="function"?i(n,t):i)}
  `);export{C as S,H as V,k as r};
