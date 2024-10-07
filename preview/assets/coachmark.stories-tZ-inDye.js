import M from"./actionbutton.stories-9e_KVnsd.js";import w from"./menu.stories-DLuPYTSF.js";import{d as $}from"./index-BL42WGY7.js";import{R as h,s as g,n as c,V as x}from"./template-CykOH8vE.js";import{k as o}from"./lit-element-C96egxJg.js";import{T as S}from"./template-DLun6ykU.js";import{T}from"./template-BRMtA7j6.js";import{T as D}from"./template-DczifWPo.js";import{T as A}from"./template-CFzFm5hn.js";const P="@spectrum-css/coachmark",I="7.1.3",W="The Spectrum CSS coachmark component",j="Apache-2.0",z="Adobe",_="https://opensource.adobe.com/spectrum-css/coachmark",H={type:"git",url:"https://github.com/adobe/spectrum-css.git",directory:"components/coachmark"},O={url:"https://github.com/adobe/spectrum-css/issues"},N={".":"./dist/index.css","./*.md":"./*.md","./dist/*":"./dist/*","./index-*.css":"./dist/index-*.css","./index.css":"./dist/index.css","./metadata.json":"./metadata/metadata.json","./metadata/*":"./metadata/*","./package.json":"./package.json","./stories/*":"./stories/*"},R="dist/index.css",B=["dist/*","*.md","package.json","stories/*","metadata/*"],F={"@spectrum-css/actionbutton":">=6","@spectrum-css/actionmenu":">=6","@spectrum-css/button":">=13","@spectrum-css/buttongroup":">=7","@spectrum-css/menu":">=7","@spectrum-css/popover":">=7","@spectrum-css/tokens":">=14"},J={"@spectrum-css/button":{optional:!0}},L={"@spectrum-css/actionbutton":"workspace:^","@spectrum-css/actionmenu":"workspace:^","@spectrum-css/button":"workspace:^","@spectrum-css/buttongroup":"workspace:^","@spectrum-css/menu":"workspace:^","@spectrum-css/popover":"workspace:^","@spectrum-css/tokens":"workspace:^"},V=["spectrum","css","design system","adobe"],E={access:"public"},G={name:P,version:I,description:W,license:j,author:z,homepage:_,repository:H,bugs:O,exports:N,main:R,files:B,peerDependencies:F,peerDependenciesMeta:J,devDependencies:L,keywords:V,publishConfig:E},b=({rootClass:e="spectrum-CoachMark",hasActionMenu:s=!1,hasPagination:t,hasImage:a,isOpen:f=!1}={},p={})=>{const{globals:C={}}=p,r=C.scale??"medium";return o`
		${c(a,()=>o`
			<div class="${e}-image-wrapper">
				<img
					class="${e}-image"
					src="example-card-landscape.png"
				/>
			</div>
		`)}
		<div class="spectrum-CoachMark-header">
			<div class="spectrum-CoachMark-title">
				Try playing with a pixel brush
			</div>
			<div class="spectrum-CoachMark-action-menu">
				${c(s,()=>S({isOpen:f,position:"bottom-start",iconName:"More",size:r==="large"?"s":"m",items:[{label:"Skip tour"},{label:"Reset tour"}],popoverHeight:68,popoverWidth:84},p))}
			</div>
		</div>
		<div class="spectrum-CoachMark-content">
			Pixel brushes use pixels to create brush strokes, just like in
			other design and drawing tools. Start drawing, and zoom in to
			see the pixels in each stroke.
		</div>
		<div class="${e}-footer">
			${c(t,()=>o`
				<div class="spectrum-CoachMark-step">
					<bdo dir="ltr">2 of 8</bdo>
				</div>
			`)}
			${T({customClasses:r==="large"?[`${e}-buttongroup--mobile`]:[`${e}-buttongroup`],size:r==="large"?"s":"m",items:r==="large"?[{variant:"secondary",treatment:"outline",hideLabel:!0,iconName:"ChevronLeft75",iconSet:"ui"},{variant:"primary",treatment:"outline",label:"Next"}]:[{variant:"secondary",treatment:"outline",label:"Previous"},{variant:"primary",treatment:"outline",label:"Next"}]})}
		</div>
	`},k=(e,s)=>o`
		<div
			class=${h({[e.rootClass]:!0,...e.customClasses.reduce((t,a)=>({...t,[a]:!0}),{})})}
			style=${g(e.customStyles)}
		>
			${A({customStyles:{"inline-size":"var(--spectrum-coach-mark-width)"},customClasses:[`${e.rootClass}-popover`],isOpen:!0,position:"right-top",trigger:t=>D(t),content:[b(e,s)]},s)}
		</div>
	`,q=(e,s)=>o`
		<div
			class=${h({[e.rootClass]:!0,...e.customClasses.reduce((t,a)=>({...t,[a]:!0}),{})})}
			style=${g(e.customStyles)}
		>${b(e,s)}</div>
	`,y=x({Template:k,TestTemplate:q,skipBorders:!1,wrapperStyles:{"z-index":"1","min-block-size":"auto"},testData:[{testHeading:"Default",hasActionMenu:!1,hasPagination:!1,hasImage:!1,wrapperStyles:{"background-color":"var(--spectrum-gray-50, white)"}},{testHeading:"With media",hasActionMenu:!1,hasPagination:!1,hasImage:!0,wrapperStyles:{"background-color":"var(--spectrum-gray-50, white)"}},{testHeading:"With action menu",hasPagination:!1,hasActionMenu:!0,hasImage:!1,isOpen:!0,wrapperStyles:{"background-color":"var(--spectrum-gray-50, white)"}},{testHeading:"With pagination",hasPagination:!0,hasActionMenu:!1,hasImage:!1,wrapperStyles:{"background-color":"var(--spectrum-gray-50, white)"}}],stateData:[]});var m,u,l,d;const K={title:"Coach mark",component:"CoachMark",argTypes:{hasActionMenu:{name:"ActionMenu",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},hasPagination:{name:"Pagination",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},hasImage:{name:"Image",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"}},args:{rootClass:"spectrum-CoachMark",hasActionMenu:!0,hasPagination:!0,hasImage:!1},parameters:{layout:"padded",actions:{handles:[...((u=(m=M.parameters)==null?void 0:m.actions)==null?void 0:u.handles)??[],...((d=(l=w.parameters)==null?void 0:l.actions)==null?void 0:d.handles)??[]]},packageJson:G,docs:{story:{height:"300px"},description:{component:"The coach mark component can be used to bring added attention to specific parts of a page. It is a separate component from the coach indicator."}}},tags:["!autodocs"]},v=y.bind({});v.args={};const n=k.bind({});n.tags=["!dev"];n.args={hasImage:!0};n.parameters={chromatic:{disableSnapshot:!0},docs:{story:{height:"500px"}}};const i=y.bind({});i.tags=["!autodocs","!dev"];i.parameters={chromatic:{forcedColors:"active",modes:$}};const Q=["Default","WithMedia","WithForcedColors"],re=Object.freeze(Object.defineProperty({__proto__:null,Default:v,WithForcedColors:i,WithMedia:n,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{re as C,v as D,n as W};
