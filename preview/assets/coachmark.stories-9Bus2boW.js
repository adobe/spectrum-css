import $ from"./actionbutton.stories-A3GYwxv4.js";import C from"./menu.stories-DXtsL2KW.js";import{a as x,d as T}from"./index-BCEELo55.js";import{T as I}from"./template-BJ-RZ1z1.js";import{T as S}from"./template-CZKHC2yo.js";import{T as _}from"./template-BCjEPzLh.js";import"./lit-element-CJjJlyWZ.js";import{x as a}from"./lit-html-BdGv-Ldy.js";import{a as P}from"./class-map-sTkR_Npl.js";import{o as i}from"./style-map-yx2CMG_J.js";import{n as W}from"./when-BR7zwNJC.js";const w="7.1.1",r=({rootClass:e="spectrum-CoachMark",customClasses:u=[],customStyles:g={},hasActionMenu:h=!1,hasPagination:b,hasImage:v,isOpen:y=!0}={},o={})=>{const{globals:f={}}=o,t=f.scale??"medium";return a`
		<div style=${i({"margin-top":"8px"})}>
			<div
				class=${P({[e]:!0,...u.reduce((k,M)=>({...k,[M]:!0}),{})})}
				style=${i(g)}
			>
				${_({nested:!0,testId:"popover-nested",id:"popover-nested",triggerId:"trigger-nested",customStyles:{"margin-inline-start":"0px"},customClasses:[`${e}-popover`],isOpen:!0,content:[a`
						${v?a`
							<div class="${e}-image-wrapper">
								<img class="${e}-image" src="example-card-landscape.png" />
							</div>`:""}
						<div class="spectrum-CoachMark-header">
							<div class="spectrum-CoachMark-title">Try playing with a pixel brush</div>
							<div class="spectrum-CoachMark-action-menu">
							${W(h,()=>I({isOpen:y,position:"bottom",id:"popover-nested-2",triggerId:"trigger-nested-2",customStyles:{"inset-inline-start":"unset","inset-block-start":"unset","margin-block-start":"30px","margin-inline-start":"-32px"},iconName:"More",size:t==="large"?"s":"m",items:[{label:"Skip tour"},{label:"Reset tour"}]},o))}
						</div>
						</div>
						<div class="spectrum-CoachMark-content">
							Pixel brushes use pixels to create brush strokes, just like in other design and drawing tools. Start drawing, and zoom in to see the pixels in each stroke.
						</div>
						<div class="${e}-footer">
						${b?a`<div class="spectrum-CoachMark-step"><bdo dir="ltr">2 of 8</bdo></div>`:""}
						${S({customClasses:t==="large"?[`${e}-buttongroup--mobile`]:[`${e}-buttongroup`],size:t==="large"?"s":"m",items:t==="large"?[{variant:"secondary",treatment:"outline",hideLabel:!0,iconName:"ChevronLeft75"},{variant:"primary",treatment:"outline",label:"Next"}]:[{variant:"secondary",treatment:"outline",label:"Previous"},{variant:"primary",treatment:"outline",label:"Next"}]})}
						</div>
						`]},o)}
			</div>
		</div>
	`};var m,c,l,p;const z={title:"Coach mark",component:"CoachMark",argTypes:{hasActionMenu:{name:"ActionMenu",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},hasPagination:{name:"Pagination",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},hasImage:{name:"Image",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"}},args:{rootClass:"spectrum-CoachMark",hasActionMenu:!0,hasPagination:!0,hasImage:!1},parameters:{actions:{handles:[...((c=(m=$.parameters)==null?void 0:m.actions)==null?void 0:c.handles)??[],...((p=(l=C.parameters)==null?void 0:l.actions)==null?void 0:p.handles)??[]]},docs:{story:{height:"300px"},description:{component:"The coach mark component can be used to bring added attention to specific parts of a page. It is a separate component from the coach indicator."}},componentVersion:w,chromatic:{modes:x}}},d=r.bind({});d.args={};const s=r.bind({});s.args={hasImage:!0};s.parameters={docs:{story:{inline:!1,height:"475px"}}};const n=r.bind({});n.tags=["!autodocs","!dev","test"];n.parameters={chromatic:{forcedColors:"active",modes:T}};const A=["Default","WithMedia","WithForcedColors"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:d,WithForcedColors:n,WithMedia:s,__namedExportsOrder:A,default:z},Symbol.toStringTag,{value:"Module"}));export{G as C,d as D,s as W};
