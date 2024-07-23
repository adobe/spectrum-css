import{d as h}from"./index-BCEELo55.js";import{T}from"./template-Zxf6qo95.js";import{T as B}from"./template-D5ShUZ_q.js";import"./decorator-Dl7o6wQR.js";import{V as N}from"./utilities-BisrhIqU.js";import"./lit-element-CJjJlyWZ.js";import{x as i}from"./lit-html-BdGv-Ldy.js";import{a as o}from"./class-map-sTkR_Npl.js";import{o as g}from"./if-defined-Bo9G1hLT.js";import{n}from"./when-BR7zwNJC.js";import"./style-map-yx2CMG_J.js";import"./capitalize-D60SaZ2R.js";import"./lowerCase-CIorQk0G.js";import"./_createCompounder-DY9ZW94_.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./v4-CQkTLCs1.js";const H="9.1.2",V=({rootClass:e="spectrum-Breadcrumbs",customClasses:D=[],items:v=[],variant:d,isDragged:y=!1},l)=>i`
	<nav>
		<ul
			class=${o({[e]:!0,[`${e}--${d}`]:typeof d<"u",...D.reduce((r,t)=>({...r,[t]:!0}),{})})}
		>
			${v.map((r,t,c)=>{const{label:p,isDisabled:s,iconName:u}=r;return i` <li
					class=${o({[`${e}-item`]:!0,"is-dragged":y&&r.isDragged})}
				>
					${n(u,()=>T({iconName:u,isDisabled:s,isQuiet:!0,customIconClasses:[`${e}-folder`],size:"m"},l),()=>n(t!==c.length-1,()=>i`<div
										class=${o({[`${e}-itemLink`]:!0,"is-disabled":s})}
										aria-disabled=${g(s?"true":void 0)}
										role="link"
										tabindex=${g(s?void 0:"0")}
									>
										${p}
									</div>`,()=>i`<a class="${e}-itemLink" aria-current="page"
										>${p}</a
									>`))}
					${n(t!==c.length-1,()=>B({iconName:"ChevronRight100",setName:"ui",customClasses:[`${e}-itemSeparator`]},l))}
				</li>`})}
		</ul>
	</nav>
`,k=N({Template:V,testData:[{testHeading:"Default"},{testHeading:"Compact",variant:"compact"},{testHeading:"Multiline",variant:"multiline",items:[{label:"Nav root"},{iconName:"FolderOpen",isDisabled:!0},{label:"Trend",isDragged:!0},{label:"January 2019 Assets"}]}],stateData:[{testHeading:"Dragged",isDragged:!0}]}),R={title:"Breadcrumbs",component:"Breadcrumbs",argTypes:{items:{table:{disable:!0}},variant:{name:"Variants",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},options:["compact","multiline"],control:"inline-radio"},isDragged:{name:"Dragged",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"}},args:{rootClass:"spectrum-Breadcrumbs",isDragged:!1},parameters:{componentVersion:H,docs:{description:{component:"Breadcrumbs show hierarchy and navigational context for a user's location within an app."}}}},m=k.bind({});m.args={items:[{label:"Nav root",isDragged:!0},{label:"Trend",isDisabled:!0},{label:"January 2019 Assets"}]};const a=m.bind({});a.args=m.args;a.tags=["!autodocs","!dev","test"];a.parameters={chromatic:{forcedColors:"active",modes:h}};var b,f,$;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"BreadcrumbGroup.bind({})",...($=(f=a.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};const j=["Default","WithForcedColors"];export{m as Default,a as WithForcedColors,j as __namedExportsOrder,R as default};
