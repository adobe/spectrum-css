import{d as y}from"./index-BCEELo55.js";import{T as k}from"./template-D5ShUZ_q.js";import"./lit-element-CJjJlyWZ.js";import{x as s}from"./lit-html-BdGv-Ldy.js";import{a as l}from"./class-map-sTkR_Npl.js";import{o as $}from"./if-defined-Bo9G1hLT.js";import{c as S}from"./repeat-Du-egFmu.js";import{n as h}from"./when-BR7zwNJC.js";import"./directive-helpers-F-Ou1E0_.js";const T="5.1.1",r=({rootClass:t="spectrum-SideNav",customClasses:u=[],variant:o,hasIcon:n,iconName:a,items:m=[]},c)=>s`
  <nav>
    <ul class=${l({[t]:!0,[`${t}--${o}`]:typeof o<"u",[`${t}--hasIcon`]:n,...u.reduce((e,i)=>({...e,[i]:!0}),{})})}>
      ${S(m,e=>e.id,e=>typeof e.levelTwoItems<"u"?s`
            <li class=${l({[`${t}-item`]:!0,"is-selected":e.isSelected,"is-disabled":e.isDisabled})}>
            ${e.heading?s`<h2 class="${t}-heading" id="${e.id}-heading">${e.heading}</h2>`:s`
              <a class="${t}-itemLink">
                ${h(n,()=>k({iconName:a},c))}
                <span class="${t}-link-text">${e.title}</span>
              </a>
              `}
            <ul class=${l({[t]:!0,[`${t}--hasIcon`]:n,...u.reduce((i,p)=>({...i,[p]:!0}),{})})}
            aria-labelledby=${$(e.heading)?`${e.id}-heading`:""}>
                ${S(e.levelTwoItems,i=>i.id,i=>v({variant:o,hasIcon:n,iconName:a,...i},c))}
              </ul>
            </li>
          `:v({hasIcon:n,iconName:a,...e},c))}
    </ul>
  </nav>
`,v=({rootClass:t="spectrum-SideNav",variant:u,levelThreeItems:o,link:n,title:a,isSelected:m,isDisabled:c,id:e,hasIcon:i,iconName:p,customClasses:f=[]}={},g={})=>s`
    <li
      id=${$(e)}
      class=${l({[`${t}-item`]:!0,"is-selected":m,"is-disabled":c,...f.reduce((d,I)=>({...d,[I]:!0}),{})})}
    >
      <a
        href=${$(n)}
        class=${l({[`${t}-itemLink`]:!0})}
      >
        ${h(!i&u!=="multiLevel",()=>k({iconName:p},g))}
        <span class=${l({[`${t}-link-text`]:!0})}>
          ${a}
        </span>
      </a>
      ${h(o,()=>s`
        <ul class=${l({[t]:!0})}>
          ${S(o,d=>d.id,d=>v(d,g))}
        </ul>`)}
    </li>
  `,V={title:"Side nav",component:"SideNav",argTypes:{hasIcon:{name:"Has Icon",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},iconName:{name:"Icon Name",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},options:["Image","Folder","Star"],control:"select",if:{arg:"hasIcon",truthy:!0}},items:{table:{disable:!0}},variant:{table:{disable:!0}}},args:{rootClass:"spectrum-SideNav",hasIcon:!1,iconName:"Folder",items:[{id:"section1",title:"Section title 1",link:"#",isSelected:!0},{id:"section2",title:"Section title 2",link:"#",isDisabled:!0},{id:"section3",title:"Section title 3",link:"#"}]},parameters:{componentVersion:T,docs:{description:{component:"Side nav lets users navigate the entire content of a product or a section. These can be used for a single level or a multi-level navigation."}}}},w=r.bind({});w.args={};const b=r.bind({});b.tags=["!autodocs","!dev","test"];b.parameters={chromatic:{forcedColors:"active",modes:y}};const N=r.bind({});N.args={variant:"multiLevel",items:[{id:"section1",title:"Section title 1",link:"#"},{id:"section2",title:"Section title 2",link:"#",levelTwoItems:[{id:"section2.1",title:"Section title 1",link:"#"},{id:"section2.2",title:"Section title 2: The long title that wraps to the next line",link:"#",levelThreeItems:[{id:"section3.1",title:"Section title 1",link:"#"},{id:"section3.2",title:"Section title 2: Another long title that wraps to the next line",link:"#",isSelected:!0},{id:"section3.3",title:"Section title 3",link:"#"}]}]},{id:"section3",title:"Section title 3",link:"#"}]};const W=r.bind({});W.args={items:[{id:"section1",title:"Section 1",link:"#"},{id:"section2",heading:"Heading 1",link:"#",levelTwoItems:[{id:"section2.1",title:"Section 1",link:"#"},{id:"section2.2",title:"Section 2",link:"#"}]}]};const D=r.bind({});D.args={variant:"multiLevel",hasIcon:!0,items:[{id:"section1",title:"Section 1",link:"#"},{id:"section2",title:"Section 2",link:"#",levelTwoItems:[{id:"section2.1",title:"Section 1",link:"#"},{id:"section2.2",title:"Section 2",link:"#",levelThreeItems:[{id:"section3.1",title:"Section 1",link:"#"}]}]},{id:"section3",title:"Section 3",link:"#"}]};const j=["Default","WithForcedColors","Multilevel","WithHeading","WithIcons"];export{w as Default,N as Multilevel,b as WithForcedColors,W as WithHeading,D as WithIcons,j as __namedExportsOrder,V as default};
