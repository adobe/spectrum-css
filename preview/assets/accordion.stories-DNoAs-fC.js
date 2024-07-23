import{T as u}from"./template-BzbLabtx.js";import{d as T}from"./index-BCEELo55.js";import{Template as b}from"./template-Df-YB4AQ.js";import{T as F}from"./template-D5ShUZ_q.js";import"./decorator-Dl7o6wQR.js";import{V as H}from"./utilities-BisrhIqU.js";import"./lit-element-CJjJlyWZ.js";import{x as I}from"./lit-html-BdGv-Ldy.js";import{a as D}from"./class-map-sTkR_Npl.js";import{o as P}from"./if-defined-Bo9G1hLT.js";import{c as O}from"./repeat-Du-egFmu.js";import{o as k}from"./style-map-yx2CMG_J.js";const W="5.2.0",E=({heading:r,content:a,rootClass:e="spectrum-Accordion-item",id:i,idx:n=0,isDisabled:c=!1,isOpen:p=!1,iconSize:h="m",customStyles:A={},customClasses:m=[],onclick:g}={},s={})=>I`
		<div
			class=${D({[e]:!0,"is-open":p&&!c,"is-disabled":c,...m.reduce((d,t)=>({...d,[t]:!0}),{})})}
			id=${P(i)}
			style=${k(A)}
			role="presentation"
			@click=${g}
		>
			<!-- WAI-ARIA 1.1: Item header is a <button> wrapped within a <h3> element, rather than a <div> element with role="tab" -->
			<h3 class="${e}Heading">
				<!-- WAI-ARIA 1.1: Item header <button> uses aria-expanded attribute to indicate expanded state. -->
				<button
					class="${e}Header"
					type="button"
					?disabled=${c}
					id="spectrum-accordion-item-${n}-header"
					aria-controls="spectrum-accordion-item-${n}-content"
					aria-expanded="${open?"true":"false"}"
				>
					${r}
				</button>
				<span class="${e}IconContainer">
					${F({iconName:p?"ChevronDown":"ChevronRight",setName:"ui",size:h,customClasses:[`${e}Indicator`]},s)}
				</span>
			</h3>
			<!-- WAI-ARIA 1.1: Item content role changed from "tabpanel" to "region" -->
			<div
				class="${e}Content"
				role="region"
				id="spectrum-accordion-item-${n}-content"
				aria-labelledby="spectrum-accordion-item-${n}-header"
			>
				${a}
			</div>
		</div>
	`,f=({rootClass:r="spectrum-Accordion",size:a="m",density:e="regular",items:i=[],id:n,disableAll:c=!1,collapseAll:p=!1,customClasses:h=[],customStyles:A={}}={},m={})=>{const{updateArgs:g}=m;return I`
		<div
			class="${D({[r]:!0,[`${r}--size${a==null?void 0:a.toUpperCase()}`]:typeof a<"u",[`${r}--${e}`]:typeof e<"u"&&e!=="regular",...h.reduce((s,d)=>({...s,[d]:!0}),{})})}"
			id=${P(n)}
			role="region"
			style=${k(A)}
		>
			${O(Array.from(i.keys()),(s,d)=>{const t=i.get(s);return E({...t,rootClass:`${r}-item`,heading:s,idx:d,iconSize:`${a}`,isDisabled:t.isDisabled||c,isOpen:p===!0?!1:t.isOpen,onclick:()=>{if(t.isDisabled)return;const S=new Map(i);S.set(s,{...t,isOpen:!t.isOpen}),g({items:S})}},m)})}
		</div>
	`},_=H({Template:f,testData:[{testHeading:"Standard",customStyles:{maxInlineSize:"500px"}},{testHeading:"Compact",density:"compact",collapseAll:!0,customStyles:{maxInlineSize:"500px"},withStates:!1},{testHeading:"Spacious",density:"spacious",collapseAll:!0,customStyles:{maxInlineSize:"500px"},withStates:!1},{testHeading:"Text wrapping",collapseAll:!0,customStyles:{maxInlineSize:"300px"},withStates:!1}],stateData:[{testHeading:"Disabled",disableAll:!0}]}),z={title:"Accordion",component:"Accordion",argTypes:{items:{table:{disable:!0}},size:{name:"Size",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["s","m","l","xl"],control:"select"},disableAll:{name:"Disable all items",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},collapseAll:{name:"Collapse all items",type:{name:"boolean"},table:{disable:!0,type:{summary:"boolean"}},control:"boolean"},density:{name:"Density",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["compact","regular","spacious"],control:"select"}},args:{rootClass:"spectrum-Accordion",size:"m",density:"regular",collapseAll:!1,disableAll:!1},parameters:{actions:{handles:["click .spectrum-Accordion-item"]},chromatic:{disableSnapshot:!0},componentVersion:W,docs:{description:{component:"The accordion element contains a list of items that can be expanded or collapsed to reveal additional content or information associated with each item. There can be zero expanded items, exactly one expanded item, or more than one item expanded at a time, depending on the configuration. This list of items is defined by child accordion item elements."}}}},y=new Map([["Are any Adobe products free?",{content:"Yes, Adobe offers free products like Acrobat Reader, Aero, Fill & Sign, Photoshop Express, and Adobe Scan. You can also use Creative Cloud Express, Fresco, and Lightroom Mobile for free, with the option of making in-app purchases.",isDisabled:!0}],["Are Adobe products worth it?",{content:b({semantics:"body",content:["Adobe makes some of the most widely used software applications in the world, many of which are industry standard. Get started with free apps like Adobe Acrobat Reader, Aero, Fill & Sign, Photoshop Express, and Adobe Scan. Or consider Creative Cloud, with plans starting at just US$9.99/mo. Every Adobe Creative Cloud plan includes perks like free stock images and fonts, collaboration tools, and cloud storage as well as regular feature updates to deliver the latest technology.",u({url:"https://www.adobe.com/creativecloud/plans.html",text:"Learn more about Adobe Creative Cloud plans and pricing."})]}),isOpen:!0}],["Which Adobe product is best for editing PDFs?",{content:b({semantics:"body",content:["You can edit PDFs with Adobe Acrobat, which is available in two editions: Standard and Pro. Acrobat Standard provides basic tools to create, edit, and sign PDFs on Windows devices. Acrobat Pro is the complete PDF solution with tools to edit, convert, and sign PDFs across web, mobile, and tablet, as well as on Windows and macOS computers. If you'd like to try before you buy, you can get a free 7-day trial of Acrobat Pro.",u({url:"https://www.adobe.com/acrobat.html",text:"Learn more about Acrobat."})]})}],["How many products does Adobe have?",{content:"Adobe offers nearly 100 products. Get creative with industry-standard apps like Adobe Photoshop, Illustrator InDesign, and Lightroom. Create, edit, and sign PDFs with Adobe Acrobat and Acrobat Sign. And deliver exceptional customer experiences with our marketing and commerce apps such as Adobe Experience Manager, Campaign, and Target.",isOpen:!0}],["How much do Adobe products cost?",{content:b({semantics:"body",content:["Creative Cloud plans start at US$9.99/mo. You can subscribe to specific Single App plans or get 20+ creative apps and services in the Creative Cloud All Apps plan.",u({url:"https://www.adobe.com/creativecloud/plans.html",text:"Explore Creative Cloud plans."})]})}],["What are the most popular Adobe products?",{content:"Adobe makes some of the most widely used software in the world, including popular apps like Acrobat Pro, Photoshop, Illustrator, InDesign, Lightroom, and Premiere Pro."}],["How can I get a student discount on Adobe products?",{content:b({semantics:"body",content:[`Students who provide a valid school-issued email address at purchase are eligible to save over 60% on Creative Cloud All Apps, which includes 20+ apps such as Photoshop, Illustrator, InDesign, Acrobat Pro, and more. ${u({url:"https://www.adobe.com/creativecloud/buy/students.html",text:"Learn more about Creative Cloud for students."})}`]})}]]),l=_.bind({});l.args={items:y};l.parameters={chromatic:{disableSnapshot:!1}};const o=l.bind({});o.args=l.args;o.tags=["!autodocs","!dev","test"];o.parameters={chromatic:{forcedColors:"active",modes:T}};const w=f.bind({});w.tags=["autodocs","!dev"];w.args={items:y,density:"compact"};const v=f.bind({});v.tags=["autodocs","!dev"];v.args={items:y,density:"spacious"};var $,C,x;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:"AccordionGroup.bind({})",...(x=(C=o.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const L=["Default","WithForcedColors","Compact","Spacious"],Q=Object.freeze(Object.defineProperty({__proto__:null,Compact:w,Default:l,Spacious:v,WithForcedColors:o,__namedExportsOrder:L,default:z},Symbol.toStringTag,{value:"Module"}));export{Q as A,w as C,l as D,v as S};
