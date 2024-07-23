import{T as x}from"./template-D5ShUZ_q.js";import"./decorator-Dl7o6wQR.js";import{V as z}from"./utilities-BisrhIqU.js";import{T as P}from"./template-BTVRUgwL.js";import"./lit-element-CJjJlyWZ.js";import{x as d}from"./lit-html-BdGv-Ldy.js";import{a as U}from"./class-map-sTkR_Npl.js";import{o as a}from"./if-defined-Bo9G1hLT.js";import{o as W}from"./style-map-yx2CMG_J.js";import{n as l}from"./when-BR7zwNJC.js";import{c}from"./capitalize-D60SaZ2R.js";import{l as k}from"./lowerCase-CIorQk0G.js";const i=({rootClass:e="spectrum-Button",id:o,testId:n,customClasses:H=[],customStyles:y={},size:t="m",label:$,hideLabel:p=!1,iconName:s,iconAfterLabel:h=!1,variant:w,staticColor:f,treatment:g,onclick:T,isDisabled:b=!1,isHovered:S=!1,isFocused:A=!1,isActive:D=!1,isPending:v=!1,ariaExpanded:m,ariaControls:B}={},u={})=>{const{updateArgs:r}=u;return d`
    <button
      class=${U({[e]:!0,[`${e}--${g}`]:typeof g<"u",[`${e}--${w}`]:typeof w<"u",[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",[`${e}--static${c(k(f))}`]:typeof f<"u",[`${e}--iconOnly`]:p,"is-pending":v,"is-disabled":b,"is-hover":S,"is-focus-visible":A,"is-active":D,...H.reduce((F,I)=>({...F,[I]:!0}),{})})}
      id=${a(o)}
      style=${W(y)}
      ?disabled=${b}
      @click=${T??function(){r({isPending:!0}),setTimeout(()=>{r({isPending:!1})},3e3)}}
      @focusin=${()=>{r({isFocused:!0})}}
      @focusout=${()=>{r({isFocused:!1})}}
      aria-label=${a(p?s:void 0)}
      aria-expanded=${a(m==null?void 0:m.toString())}
      aria-controls=${a(B)}
      data-testid=${a(n)}
    >
      ${l(s&&!h,()=>x({iconName:s,size:t},u))}
      ${l($&&!p,()=>d`<span class=${`${e}-label`}>${$}</span>`)}
      ${l(s&&h,()=>x({iconName:s,size:t},u))}
      ${l(v,()=>P({size:"s",testId:"progress-circle",staticColor:f,isIndeterminate:!0}))}
    </button>
  `},V=({iconName:e,...o},n)=>d`
  ${i({...o,iconName:void 0},n)}
  ${i({...o,iconName:e??"Edit"},n)}
  ${i({...o,hideLabel:!0,iconName:e??"Edit"},n)}
`,Z=z({Template:V,testData:[...["accent","negative","primary","secondary"].map(e=>({testHeading:c(e),variant:e})),...["fill","outline"].map(e=>({testHeading:c(e),treatment:e})),{testHeading:"Text wrapping with workflow icon",customStyles:{"max-inline-size":"480px"},iconName:"Edit",label:"An example of text overflow behavior within the button component. When the button text is too long for the horizontal space available, it wraps to form another line.",withStates:!1,Template:i},{testHeading:"Text wrapping with UI icon",customStyles:{"max-inline-size":"480px"},iconName:"Cross100",label:"An example of text overflow behavior within the button component. When the button text is too long for the horizontal space available, it wraps to form another line.",withStates:!1,Template:i},{testHeading:"Text wrapping with larger UI icon",customStyles:{"max-inline-size":"480px"},iconName:"ArrowDown600",label:"An example of text overflow behavior within the button component. When the button text is too long for the horizontal space available, it wraps to form another line.",withStates:!1,Template:i}],stateData:[{testHeading:"Disabled",isDisabled:!0},{testHeading:"Hovered",isHovered:!0},{testHeading:"Focused",isFocused:!0},{testHeading:"Active",isActive:!0},{testHeading:"Pending",isPending:!0}],sizeDirection:"row"});export{Z as B,i as T};
