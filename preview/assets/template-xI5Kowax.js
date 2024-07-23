import{T as R}from"./template-BSRXx7Ch.js";import{T as G}from"./template-CLOJq6Hl.js";import{T as V}from"./template-D5ShUZ_q.js";import{T as U}from"./template-BzRF0abB.js";import{T as j}from"./template-BMKK6e4E.js";import{Template as A}from"./template-Df-YB4AQ.js";import"./lit-element-CJjJlyWZ.js";import{x as i}from"./lit-html-BdGv-Ldy.js";import{a as $}from"./class-map-sTkR_Npl.js";import{o as h}from"./if-defined-Bo9G1hLT.js";import{o as g}from"./style-map-yx2CMG_J.js";import{n as o}from"./when-BR7zwNJC.js";const C=(e="m",t="ArrowLeft")=>{switch(e){case"s":return`${t}200`;case"l":return`${t}400`;case"xl":return`${t}500`;default:return`${t}300`}},q=({description:e,iconName:t,iconSet:s="workflow",hasActions:n,id:c,idx:m=0,isActive:x=!1,isCollapsible:r=!1,isDisabled:u=!1,isDrillIn:w=!1,isFocused:T=!1,isHighlighted:M=!1,isHovered:H=!1,isOpen:L=!1,isSelected:b=!1,items:N=[],label:I,role:k="menuitem",rootClass:a,shouldTruncate:W,size:d,selectionMode:S,value:p},f)=>i`
  <li
    class=${$({[`${a}`]:!0,"is-highlighted":M,"is-active":x,"is-focus-visible":T,"is-selected":b,"is-disabled":u,"is-hover":H,[`${a}--drillIn`]:w,[`${a}--collapsible`]:r,"is-open":L})}
    id=${h(c)}
    role=${h(k)}
    aria-selected=${b?"true":"false"}
    aria-disabled=${u?"true":"false"}
    tabindex=${h(u?void 0:"0")}>
      ${o(r||S=="single"&&b,()=>V({iconName:C(d,r?"ChevronRight":"Checkmark"),setName:"ui",size:d,customClasses:[`${a}Icon`,r?"spectrum-Menu-chevron":"spectrum-Menu-checkmark"]},f))}
      ${o(S==="multiple"&&!n,()=>R({size:d,isEmphasized:!0,isChecked:b,isDisabled:u,id:`menu-checkbox-${m}`,customClasses:[`${a}Checkbox`]},f))}
      ${o(t,()=>V({iconName:t,setName:s,size:d,customClasses:[`${a}Icon`,`${a}Icon--workflowIcon`]},f))}
      ${o(r,()=>i`
        <span class=${$({"spectrum-Menu-sectionHeading":!0,[`${a}Label--truncate`]:W})}>
          ${I}
        </span>
      `,()=>i`
        <span class=${$({[`${a}Label`]:!0,"spectrum-Switch-label":n,[`${a}Label--truncate`]:W})}>
          ${I}
        </span>
      `)}
      ${o(e,()=>i`
        <span class=${$({[`${a}Description`]:!0})}>
          ${e}
        </span>
      `)}
      ${o(p,()=>i`
        <span class=${$({[`${a}Value`]:!0})}>
          ${p}
        </span>
      `)}
      ${o(n&&S=="multiple",()=>i`
        <div class=${$({[`${a}Actions`]:!0})}>
          ${U({size:d,isChecked:b,isDisabled:u,label:null,id:`menu-switch-${m}`,customClasses:[`${a}Switch`]})}
        </div>
      `)}
      ${o(w,()=>V({iconName:C(d,"ChevronRight"),setName:"ui",size:d,customClasses:[`${a}Icon`,"spectrum-Menu-chevron"]},f))}
      ${o(r&&N.length>0,()=>v({items:N,isOpen:L,size:d,shouldTruncate:W},f))}
  </li>
`,J=({heading:e,id:t,idx:s=0,items:n=[],isDisabled:c=!1,isSelectable:m=!1,isTraySubmenu:x=!1,shouldTruncate:r,maxInlineSize:u,subrole:w,size:T},M)=>i`
  <li
    id=${h(t)}
    role="presentation"
  >
    ${o(!x,()=>i`
      <span
        class=${$({"spectrum-Menu-sectionHeading":!0,"spectrum-Menu-itemLabel--truncate":r})}
        id=${h(t??`menu-heading-category-${s}`)}
        aria-hidden="true"
      >
        ${e}
      </span>
    `,()=>i`
        <div
          class=${$({"spectrum-Menu-back":!0})}
        >
          <button aria-label="Back to previous menu" class="spectrum-Menu-backButton" type="button" role="menuitem">
            ${V({iconName:C(T),setName:"ui",size:T,customClasses:["spectrum-Menu-backIcon"]},M)}
          </button>
          ${o(e,()=>i`
            <span
              class=${$({"spectrum-Menu-sectionHeading":!0,"spectrum-Menu-itemLabel--truncate":r})}
              style=${g({"max-inline-size":u&&`${u}px`})}
              id=${h(t??`menu-heading-category-${s}`)}
              aria-hidden="true"
            >
              ${e}
            </span>
          `)}
        </div>
    `)}
    ${v({role:"group",subrole:w,labelledby:t??`menu-heading-category-${s}`,items:n,isDisabled:c,isSelectable:m,shouldTruncate:!0,maxInlineSize:u,size:T},M)}
  </li>
`,v=({customClasses:e=[],customStyles:t={},hasActions:s,hasDividers:n=!1,id:c,isDisabled:m=!1,isItemActive:x=!1,isItemFocused:r=!1,isItemHovered:u=!1,isItemSelected:w=!1,isOpen:T=!1,isTraySubmenu:M=!1,itemIcon:H,items:L=[],labelledby:b,maxInlineSize:N,role:I="menu",rootClass:k="spectrum-Menu",selectionMode:a="none",singleItemDescription:W,singleItemValue:d,shouldTruncate:S,size:p,subrole:f="menuitem"}={},P={})=>{const B=i`
    <ul
      class=${$({[k]:!0,[`${k}--size${p==null?void 0:p.toUpperCase()}`]:typeof p<"u","is-selectable":a==="single","is-selectableMultiple":a==="multiple","is-open":T,...e.reduce((l,F)=>({...l,[F]:!0}),{})})}
      id=${h(c)}
      role=${h(I)}
      aria-labelledby=${h(b)}
      aria-disabled=${m?"true":"false"}
      style=${N?`max-inline-size: ${N};`:g(t)}
    >
      ${L.map((l,F)=>l.type==="divider"?i`${n?G({tag:"li",size:"s",customClasses:[`${k}-divider`]}):""}`:l.heading||l.isTraySubmenu?J({...l,subrole:f,size:p,selectionMode:a,isTraySubmenu:M,shouldTruncate:S},P):q({...l,description:W||l.description,hasActions:s,iconName:H||l.iconName,iconSet:l.iconSet||"workflow",idx:F,isActive:x,isDisabled:m||l.isDisabled,isFocused:r||l.isFocused,isHovered:u,isSelected:w||l.isSelected,role:f,rootClass:`${k}-item`,selectionMode:a,shouldTruncate:S,size:p,value:d||l.value},P))}
    </ul>
  `;return M?j({content:[B]},P):B},K=(e,t)=>["s","m","l","xl"].map(s=>i`
	<div>
		${A({semantics:"heading",size:"xs",content:[{s:"Small",m:"Medium",l:"Large",xl:"Extra-large"}[s]],customClasses:["chromatic-ignore"]})}
		<div>
			${v({...e,size:s},t)}
		</div>
	</div>
`),y=(e,t)=>{const{titlePrefix:s,firstAndLast:n}=e;let c=[{stateTitle:"Default",args:{}},{stateTitle:"Hover",args:{...e,isItemHovered:!0}},{stateTitle:"Active (Down)",args:{...e,isItemActive:!0}},{stateTitle:"Focused",args:{...e,isItemFocused:!0}},{stateTitle:"Disabled",args:{...e,isDisabled:!0}}];return n&&(c=[c[0],c[c.length-1]]),c.map(m=>i`
		<div>
			${A({semantics:"heading",size:"xs",content:[`${s?s+", ":""}${m.stateTitle}`],customClasses:["chromatic-ignore"]})}
			<div>
				${v({...e,...m.args},t)}
			</div>
		</div>
	`)},E=e=>i`
			${y({...e,items:[{label:"Not selected",isSelected:!1,...e.items[0]}],titlePrefix:"Not selected",firstAndLast:!0})}
			${y({...e,items:[{label:"Selected item",isSelected:!0,...e.items[0]}],titlePrefix:"Selected",firstAndLast:!0})}
	`,D=e=>i`
		${y({...e,items:[{label:"Not selected",isSelected:!1,...e.items[0]}],titlePrefix:"Not Selected",firstAndLast:!0})}
		${y({...e,items:[{label:"Selected item",isSelected:!0,...e.items[0]}],titlePrefix:"Selected",firstAndLast:!0})}
	`,Q=e=>{const t={...e,hasValue:!0,singleItemValue:"Value"};return[{stateTitle:"With value",args:{...t}},{stateTitle:"With value, disabled",args:{...t,isDisabled:!0}},{stateTitle:"With value and switch",args:{...t,hasActions:!0}},{stateTitle:"With value, truncated label",args:{...t,shouldTruncate:!0,maxInlineSize:"195px",items:[{label:"Truncated label on menu item"}]}}].map(n=>i`
		<div>
		${A({semantics:"heading",size:"xs",content:[n.stateTitle],customClasses:["chromatic-ignore"]})}
			<div>
				${v({...e,...n.args})}
			</div>
		</div>
	`)},ne=(e,t)=>i`
  <div style=${g({display:window.isChromatic()?"none":void 0})}>
    ${v({iconName:"Share",...e},t)}
  </div>
  <div style=${g({display:window.isChromatic()?"flex":"none",flexDirection:"column",alignItems:"flex-start",gap:"1rem","--mod-detail-margin-end":".3rem"})}>
    ${[{sectionTitle:"No selection",sectionMarkup:y(e)},{sectionTitle:"With item description and truncation",sectionMarkup:y({...e,shouldTruncate:!0,maxInlineSize:"150px",items:[{label:"This is a longer menu item that will truncate",description:"This is a description of the menu item"}]})},{sectionTitle:"Single selection",sectionMarkup:E({...e,selectionMode:"single"})},{sectionTitle:"Single selection with icon",sectionMarkup:E({...e,selectionMode:"single",items:[{label:"With icon",iconName:"Share"}]})},{sectionTitle:"Multi-selection with checkboxes",sectionMarkup:D({...e,selectionMode:"multiple"})},{sectionTitle:"Multi-selection with checkboxes and icon",sectionMarkup:D({...e,selectionMode:"multiple",items:[{label:"With icon",iconName:"Share"}]})},{sectionTitle:"Multi-selection with switches",sectionMarkup:D({...e,selectionMode:"multiple",hasActions:!0})},{sectionTitle:"Multi-selection with switches and switch label",sectionMarkup:D({...e,selectionMode:"multiple",hasActions:!0,items:[{label:"Menu item",value:"switch label"}]})},{sectionTitle:"With values",sectionMarkup:Q(e)},{sectionTitle:"Sizes",sectionMarkup:K({...e,selectionMode:"single",items:[{label:"With sizing",isSelected:!0,iconName:"Share"}]})}].map(s=>i`
      <div class="spectrum-Typography">
        ${A({semantics:"heading",size:"s",content:[s.sectionTitle],customClasses:["chromatic-ignore"]})}
        <div
          style=${g({display:"flex",flexWrap:"wrap",gap:"1.5rem"})}
        >
          ${s.sectionMarkup}
        </div>
      </div>
    `)}
  </div>
`,ce=(e,t)=>i`
  <div style=${g({display:window.isChromatic()?"none":void 0})}>
    ${v(e,t)}
  </div>
  <div style=${g({display:window.isChromatic()?"flex":"none",flexDirection:"column",alignItems:"flex-start",gap:"1rem"})}>
    ${[{stateTitle:"No selection",args:{...e,selectionMode:"none"}},{stateTitle:"With dividers",args:{...e,selectionMode:"none",hasDividers:!0}},{stateTitle:"Single selection",args:{...e,selectionMode:"single"}},{stateTitle:"Multi selection",args:{...e,selectionMode:"multiple"}}].map(s=>i`
<div class="spectrum-Typography">
  ${A({semantics:"heading",size:"s",content:[s.stateTitle],customClasses:["chromatic-ignore"]})}
  <div>
    ${v({...e,...s.args})}
  </div>
</div>
    `)}
  </div>
`;export{ce as M,v as T,ne as a};
