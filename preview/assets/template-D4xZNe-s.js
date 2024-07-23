import{T as r}from"./template-D5ShUZ_q.js";import"./lit-element-CJjJlyWZ.js";import{x as v}from"./lit-html-BdGv-Ldy.js";import{a as c}from"./class-map-sTkR_Npl.js";import{n as l}from"./when-BR7zwNJC.js";const q=({rootClass:e="spectrum-InfieldButton",customClasses:$=[],size:d="m",position:u,isQuiet:n,iconName:i="Add",isDisabled:a,isInvalid:f,isStacked:y,tabIndex:b=0}={},m={})=>y?v`
    <button
      class=${c({[e]:!0,[`${e}--size${d==null?void 0:d.toUpperCase()}`]:typeof d<"u",[`${e}--top`]:typeof u<"u",[`${e}--quiet`]:n,"is-invalid":f,...$.reduce((t,p)=>({...t,[p]:!0}),{})})}
      ?disabled=${a}
      aria-haspopup="listbox"
      type="button"
      tabIndex=${b}
      aria-label="add"
    >
      <div class="${e}-fill">
        ${r({size:d,iconName:"ChevronUp75",customClasses:[`${e}-icon`]},m)}
      </div>
    </button>
    <button
      class=${c({[e]:!0,[`${e}--size${d==null?void 0:d.toUpperCase()}`]:typeof d<"u",[`${e}--bottom`]:typeof u<"u",[`${e}--quiet`]:n,"is-invalid":f,...$.reduce((t,p)=>({...t,[p]:!0}),{})})}
      ?disabled=${a}
      aria-haspopup="listbox"
      type="button"
      tabIndex=${b}
      aria-label="add"
    >
      <div class="${e}-fill">
        ${r({size:d,iconName:"ChevronDown75",customClasses:[`${e}-icon`]},m)}
      </div>
    </button>
  `:v`
    <button
      class=${c({[e]:!0,[`${e}--size${d==null?void 0:d.toUpperCase()}`]:typeof d<"u",[`${e}--${u}`]:typeof u<"u",[`${e}--quiet`]:n,"is-invalid":f,...$.reduce((t,p)=>({...t,[p]:!0}),{})})}
      ?disabled=${a}
      aria-haspopup="listbox"
      type="button"
      tabIndex=${b}
    >
    <div class="${e}-fill">
      ${l(i,()=>r({size:d,iconName:i,customClasses:[`${e}-icon`]},m))}
    </div>
  </button>
  `;export{q as T};
