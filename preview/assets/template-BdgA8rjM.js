import{T as H}from"./template-C8oSNaTT.js";import{T as Q}from"./template-BSbYaFtl.js";import{T as U}from"./template-DeUxfKRv.js";import{T as A}from"./template-CNHi6PLw.js";import{T as O}from"./template-B4EwY7hA.js";import{R as c,a as b,s as P,g as I,n as o,C as T}from"./template-C7mrcesf.js";import{T as C}from"./template-C8MiogCw.js";import{T as F}from"./template-BIFZ_7Gv.js";import{k as l}from"./lit-element-C96egxJg.js";const L=(e="m",t="ArrowLeft")=>{switch(e){case"s":return`${t}200`;case"l":return`${t}400`;case"xl":return`${t}500`;default:return`${t}300`}},V=({rootClass:e="spectrum-Menu-item",label:t,description:i,iconName:a,iconSet:h="workflow",hasActions:$=!1,id:w=I("menuitem"),idx:S=0,isActive:f=!1,isCollapsible:u=!1,isDisabled:r=!1,isDrillIn:M=!1,isFocused:d=!1,isHighlighted:k=!1,isHovered:x=!1,isOpen:m=!1,isSelected:p=!1,items:v=[],role:y="menuitem",shouldTruncate:n=!1,size:s="m",selectionMode:D="none",value:E,customClasses:G=[],customStyles:R={}}={},N={})=>l`
	<li
		class=${c({[e]:!0,"is-highlighted":k,"is-active":f,"is-focus-visible":d,"is-selected":p,"is-disabled":r,"is-hover":x,[`${e}--drillIn`]:M,[`${e}--collapsible`]:u,"is-open":m,...G.reduce((B,q)=>({...B,[q]:!0}),{})})}
		style=${P(R)}
		id=${b(w)}
		role=${b(y)}
		aria-selected=${p?"true":"false"}
		aria-disabled=${r?"true":"false"}
		tabindex=${b(r?void 0:"0")}
	>
		${o(u||D=="single"&&p,()=>A({iconName:L(s,u?"ChevronRight":"Checkmark"),setName:"ui",size:s,customClasses:[`${e}Icon`,u?"spectrum-Menu-chevron":"spectrum-Menu-checkmark"]},N))}
		${o(D==="multiple"&&!$,()=>Q({size:s,isEmphasized:!0,isChecked:p,isDisabled:r,id:`menu-checkbox-${S}`,customClasses:[`${e}Checkbox`]},N))}
		${o(a,()=>A({iconName:a,setName:h,size:s,customClasses:[`${e}Icon`,`${e}Icon--workflowIcon`]},N))}
		${o(u,()=>l`
				<span
					class=${c({"spectrum-Menu-sectionHeading":!0,[`${e}Label--truncate`]:n})}
				>
					${t}
				</span>
			`,()=>l`
				<span
					class=${c({[`${e}Label`]:!0,"spectrum-Switch-label":$,[`${e}Label--truncate`]:n})}
				>
					${t}
				</span>
			`)}
		${o(i,()=>l`
				<span
					class=${c({[`${e}Description`]:!0})}
				>
					${i}
				</span>
			`)}
		${o(E,()=>l`
				<span
					class=${c({[`${e}Value`]:!0})}
				>
					${E}
				</span>
			`)}
		${o($&&D=="multiple",()=>l`
				<div
					class=${c({[`${e}Actions`]:!0})}
				>
					${C({size:s,isChecked:p,isDisabled:r,label:null,id:`menu-switch-${S}`,customClasses:[`${e}Switch`]})}
				</div>
			`)}
		${o(M,()=>A({iconName:L(s,"ChevronRight"),setName:"ui",size:s,customClasses:[`${e}Icon`,"spectrum-Menu-chevron"]},N))}
		${o(u&&v.length>0,()=>g({items:v,isOpen:m,size:s,shouldTruncate:n},N))}
	</li>
`,W=({hasActions:e=!1,heading:t,id:i=I("menugroup"),idx:a=0,items:h=[],isDisabled:$=!1,isSelectable:w=!1,isTraySubmenu:S=!1,shouldTruncate:f=!1,subrole:u="menuitem",size:r="m",selectionMode:M="none",customStyles:d={}}={},k={})=>l`
	<li id=${b(i)} role="presentation">
		${o(!S,()=>l`
				<span
					class=${c({"spectrum-Menu-sectionHeading":!0,"spectrum-Menu-itemLabel--truncate":f})}
					id=${b(i??`menu-heading-category-${a}`)}
					aria-hidden="true"
				>
					${t}
				</span>
			`,()=>l`
				<div
					class=${c({"spectrum-Menu-back":!0})}
				>
					<button
						aria-label="Back to previous menu"
						class="spectrum-Menu-backButton"
						type="button"
						role="menuitem"
					>
						${A({iconName:L(r),setName:"ui",size:r,customClasses:["spectrum-Menu-backIcon"]},k)}
					</button>
					${o(t,()=>l`
							<span
								class=${c({"spectrum-Menu-sectionHeading":!0,"spectrum-Menu-itemLabel--truncate":f})}
								style=${P(d)}
								id=${i}
								aria-hidden="true"
							>
								${t}
							</span>
						`)}
				</div>
			`)}
		${g({role:"group",subrole:u,labelledby:i,hasActions:e,items:h,isDisabled:$,isSelectable:w,selectionMode:M,shouldTruncate:!0,size:r},k)}
	</li>
`,g=({rootClass:e="spectrum-Menu",customClasses:t=[],customStyles:i={},id:a=I("menu"),hasActions:h=!1,hasDividers:$=!1,isDisabled:w=!1,isOpen:S=!1,isTraySubmenu:f=!1,items:u=[],labelledby:r=I("menu-label"),role:M="menu",selectionMode:d="none",singleItemValue:k,shouldTruncate:x,size:m="m",subrole:p="menuitem"}={},v={})=>{const y=l`
		<ul
			class=${c({[e]:!0,[`${e}--size${m==null?void 0:m.toUpperCase()}`]:typeof m<"u","is-selectable":d==="single","is-selectableMultiple":d==="multiple","is-open":S,...t.reduce((n,s)=>({...n,[s]:!0}),{})})}
			id=${b(a)}
			role=${b(M)}
			aria-labelledby=${b(r)}
			aria-disabled=${w?"true":"false"}
			style=${P(i)}
		>
			${u.map((n,s)=>n.type==="divider"?l`${$?U({tag:"li",size:"s",customClasses:[`${e}-divider`]}):""}`:n.heading||n.isTraySubmenu?W({...n,subrole:p,size:m,selectionMode:d,isTraySubmenu:f,shouldTruncate:x},v):V({...n,hasActions:h,idx:s,isDisabled:w||n.isDisabled,role:p,rootClass:`${e}-item`,selectionMode:d,shouldTruncate:x,size:m,value:k||n.value},v))}
		</ul>
	`;return f?F({isOpen:!0,content:[y]},v):y},te=(e,t)=>T({withBorder:!1,content:[{heading:"Menu with icons",items:[{label:"Cut",iconName:"Cut"},{label:"Copy",iconName:"Copy"},{label:"Paste",iconName:"Paste",isDisabled:!0}]},{heading:"Menu with descriptions",items:[{label:"Quick export",description:"Share a snapshot"},{label:"Open a copy",description:"Illustrator for iPad"},{label:"Share link",description:"Enable comments and download",isDisabled:!0}]},{heading:"Menu with icons & descriptions",items:[{label:"Quick export",description:"Share a snapshot",iconName:"Export"},{label:"Open a copy",description:"Illustrator for iPad",iconName:"FolderOpen"},{label:"Share link",description:"Enable comments and download",iconName:"Share",isDisabled:!0}]}].map(a=>l`
			${T({heading:a.heading,content:l`
					${g({...e,context:t,shouldTruncate:a.shouldTruncate||!1,items:a.items})}
				`})}	
		`)}),ae=(e,t)=>T({withBorder:!1,content:[{heading:"Text overflow without descriptions",items:[{label:"Small (works best for mobile phones)"},{label:"Medium (all purpose)"},{label:"Large (works best for printing)"}]},{heading:"Text overflow with descriptions",items:[{label:"Small (works best for mobile phones)",description:"A small description about small is here"},{label:"Medium (all purpose)",description:"A medium description about medium is here"},{label:"Large (works best for printing)",description:"A large description about large is here"}]},{heading:"Text truncation with descriptions",shouldTruncate:!0,items:[{label:"Small (works best for mobile phones)",description:"A small description about small is here"},{label:"Medium (all purpose)",description:"A medium description about medium is here"},{label:"Large (works best for printing)",description:"A large description about large is here"}]},{heading:"Text truncation for section headings",shouldTruncate:!0,items:[{idx:1,heading:"Section heading with longer text that truncates",id:"menu-heading",items:[{label:"Small (works best for mobile phones)"},{label:"Medium (all purpose)"},{label:"Large (works best for printing)"}]}]},{heading:"Text truncation with drill-ins and values",shouldTruncate:!0,items:[{label:"Quick export truncated text",iconName:"Export",description:"Share a low-res snapshot"},{label:"Open a copy truncated text",iconName:"Copy",description:"Illustrator for iPad or desktop",isDrillIn:!0},{label:"Preview timelapse truncated text",iconName:"Pending",value:"Value"}]}].map(a=>l`
			${T({heading:a.heading,content:l`
					${g({...e,context:t,shouldTruncate:a.shouldTruncate||!1,items:a.items})}
				`})}	
		`)}),le=(e,t)=>T({withBorder:!1,content:[{heading:"No selection",items:[{label:"Cut"},{label:"Copy"},{label:"Paste"}]},{heading:"Single selection",selectionMode:"single",items:[{label:"Marquee",isSelected:!0},{label:"Add"},{label:"Subtract"}]},{heading:"Multiple selection with checkboxes",selectionMode:"multiple",items:[{label:"Marquee",isSelected:!0},{label:"Add"},{label:"Subtract"}]},{heading:"Multiple selection with checkboxes and icons",selectionMode:"multiple",items:[{label:"Marquee",iconName:"Selection",isSelected:!0},{label:"Add",iconName:"SelectAdd"},{label:"Subtract",iconName:"SelectSubtract"}]},{heading:"Multiple selection with switches",selectionMode:"multiple",hasActions:!0,items:[{label:"Guides",isSelected:!0},{label:"Grid"},{label:"Rulers",isSelected:!0}]},{heading:"Multiple selection with switches and icons",selectionMode:"multiple",hasActions:!0,items:[{label:"Marquee",iconName:"Selection",isSelected:!0},{label:"Add",iconName:"SelectAdd"},{label:"Subtract",iconName:"SelectSubtract"}]}].map(a=>l`${T({heading:a.heading,content:l`
			${g({...e,context:t,selectionMode:a.selectionMode||"none",hasActions:a.hasActions||!1,items:a.items})}
			`})}`)}),ie=e=>l`${O({isOpen:!0,position:"end-top",customStyles:{"inline-size":"200px"},trigger:(t,i)=>H({label:"Settings",iconName:"Settings",...t},i),content:[(t,i)=>g({items:[{label:"Language",value:"English (US)",isDrillIn:!0,isHovered:!0},{label:"Notifications"},{label:"Show grid"}],...t},i),(t,i)=>O({isOpen:!0,position:"end-top",customStyles:{"--mod-popover-animation-distance":"-4px",top:"-105px","inline-size":"120px"},content:[(a,h)=>g({selectionMode:"single",items:[{label:"Deutsch"},{label:"English (US)",isSelected:!0},{label:"Español"},{label:"Français"},{label:"Italiano"},{label:"日本語"}],...a},h)],...t},i)]},e)}`;export{te as D,V as M,ae as O,ie as S,g as T,le as a};
