import{T as p}from"./template-DYhcAYpa.js";import{d as P}from"./index-BL42WGY7.js";import{s as T}from"./variants-YiDXN7gG.js";import{R as x,a as $,s as C,g as k,V as F,T as m}from"./template-CykOH8vE.js";import{T as H}from"./template-CjNf7Zto.js";import{k as I}from"./lit-element-C96egxJg.js";import{Q as O}from"./repeat-BXd58rDM.js";const R="@spectrum-css/accordion",W="5.2.2",j="The Spectrum CSS accordion component",E="Apache-2.0",_="Adobe",z="https://opensource.adobe.com/spectrum-css/accordion",L={type:"git",url:"https://github.com/adobe/spectrum-css.git",directory:"components/accordion"},M={url:"https://github.com/adobe/spectrum-css/issues"},Y={".":"./dist/index.css","./*.md":"./*.md","./dist/*":"./dist/*","./index-*.css":"./dist/index-*.css","./index.css":"./dist/index.css","./metadata.json":"./metadata/metadata.json","./metadata/*":"./metadata/*","./package.json":"./package.json","./stories/*":"./stories/*"},G="dist/index.css",U=["dist/*","*.md","package.json","stories/*","metadata/*"],J={"@spectrum-css/icon":">=7","@spectrum-css/tokens":">=14"},N={"@spectrum-css/icon":"workspace:^","@spectrum-css/tokens":"workspace:^"},Q=["spectrum","css","design system","adobe"],V={access:"public"},q={name:R,version:W,description:j,license:E,author:_,homepage:z,repository:L,bugs:M,exports:Y,main:G,files:U,peerDependencies:J,devDependencies:N,keywords:Q,publishConfig:V},B=({heading:a,content:o,rootClass:e="spectrum-Accordion-item",id:r=k("accordion-item"),idx:n=0,isDisabled:i=!1,isOpen:d=!1,iconSize:h="m",customStyles:g={},customClasses:l=[],onclick:A}={},s={})=>I`
		<div
			class=${x({[e]:!0,"is-open":d&&!i,"is-disabled":i,...l.reduce((c,t)=>({...c,[t]:!0}),{})})}
			id=${$(r)}
			style=${C(g)}
			role="presentation"
			@click=${A}
		>
			<!-- WAI-ARIA 1.1: Item header is a <button> wrapped within a <h3> element, rather than a <div> element with role="tab" -->
			<h3 class="${e}Heading">
				<!-- WAI-ARIA 1.1: Item header <button> uses aria-expanded attribute to indicate expanded state. -->
				<button
					class="${e}Header"
					type="button"
					?disabled=${i}
					id="spectrum-accordion-item-${n}-header"
					aria-controls="spectrum-accordion-item-${n}-content"
					aria-expanded="${open?"true":"false"}"
				>
					${a}
				</button>
				<span class="${e}IconContainer">
					${H({iconName:d?"ChevronDown":"ChevronRight",setName:"ui",size:h,customClasses:[`${e}Indicator`]},s)}
				</span>
			</h3>
			<!-- WAI-ARIA 1.1: Item content role changed from "tabpanel" to "region" -->
			<div
				class="${e}Content"
				role="region"
				id="spectrum-accordion-item-${n}-content"
				aria-labelledby="spectrum-accordion-item-${n}-header"
			>
				${o}
			</div>
		</div>
	`,f=({rootClass:a="spectrum-Accordion",size:o="m",density:e="regular",items:r=[],id:n=k("accordion"),disableAll:i=!1,collapseAll:d=!1,customClasses:h=[],customStyles:g={}}={},l={})=>{const{updateArgs:A}=l;return I`
		<div
			class="${x({[a]:!0,[`${a}--size${o==null?void 0:o.toUpperCase()}`]:typeof o<"u",[`${a}--${e}`]:typeof e<"u"&&e!=="regular",...h.reduce((s,c)=>({...s,[c]:!0}),{})})}"
			id=${$(n)}
			role="region"
			style=${C(g)}
		>
			${O(Array.from(r.keys()),(s,c)=>{const t=r.get(s);return B({...t,rootClass:`${a}-item`,heading:s,idx:c,iconSize:`${o}`,isDisabled:t.isDisabled||i,isOpen:d===!0?!1:t.isOpen,onclick:function(){if(t.isDisabled)return;const S=new Map(r);S.set(s,{...t,isOpen:!t.isOpen}),A({items:S})}},l)})}
		</div>
	`},D=F({Template:f,testData:[{testHeading:"Standard",customStyles:{maxInlineSize:"500px"}},{testHeading:"Compact",density:"compact",collapseAll:!0,customStyles:{maxInlineSize:"500px"},withStates:!1},{testHeading:"Spacious",density:"spacious",collapseAll:!0,customStyles:{maxInlineSize:"500px"},withStates:!1},{testHeading:"Text wrapping",collapseAll:!0,customStyles:{maxInlineSize:"300px"},withStates:!1}],stateData:[{testHeading:"Disabled",disableAll:!0}]}),K={title:"Accordion",component:"Accordion",argTypes:{items:{table:{disable:!0}},size:T(["s","m","l","xl"]),disableAll:{name:"Disable all items",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},collapseAll:{name:"Collapse all items",type:{name:"boolean"},table:{disable:!0,type:{summary:"boolean"}},control:"boolean"},density:{name:"Density",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["compact","regular","spacious"],control:"select"}},args:{rootClass:"spectrum-Accordion",size:"m",density:"regular",collapseAll:!1,disableAll:!1},parameters:{actions:{handles:["click .spectrum-Accordion-item"]},chromatic:{disableSnapshot:!0},packageJson:q,docs:{description:{component:"The accordion element contains a list of items that can be expanded or collapsed to reveal additional content or information associated with each item. There can be zero expanded items, exactly one expanded item, or more than one item expanded at a time, depending on the configuration. This list of items is defined by child accordion item elements."}}},tags:["!autodocs"]},y=new Map([["Are any Adobe products free?",{content:"Yes, Adobe offers free products like Acrobat Reader, Aero, Fill & Sign, Photoshop Express, and Adobe Scan. You can also use Creative Cloud Express, Fresco, and Lightroom Mobile for free, with the option of making in-app purchases.",isDisabled:!0}],["Are Adobe products worth it?",{content:m({semantics:"body",content:["Adobe makes some of the most widely used software applications in the world, many of which are industry standard. Get started with free apps like Adobe Acrobat Reader, Aero, Fill & Sign, Photoshop Express, and Adobe Scan. Or consider Creative Cloud, with plans starting at just US$9.99/mo. Every Adobe Creative Cloud plan includes perks like free stock images and fonts, collaboration tools, and cloud storage as well as regular feature updates to deliver the latest technology.",p({url:"https://www.adobe.com/creativecloud/plans.html",text:"Learn more about Adobe Creative Cloud plans and pricing."})]}),isOpen:!0}],["Which Adobe product is best for editing PDFs?",{content:m({semantics:"body",content:["You can edit PDFs with Adobe Acrobat, which is available in two editions: Standard and Pro. Acrobat Standard provides basic tools to create, edit, and sign PDFs on Windows devices. Acrobat Pro is the complete PDF solution with tools to edit, convert, and sign PDFs across web, mobile, and tablet, as well as on Windows and macOS computers. If you'd like to try before you buy, you can get a free 7-day trial of Acrobat Pro.",p({url:"https://www.adobe.com/acrobat.html",text:"Learn more about Acrobat."})]})}],["How many products does Adobe have?",{content:"Adobe offers nearly 100 products. Get creative with industry-standard apps like Adobe Photoshop, Illustrator InDesign, and Lightroom. Create, edit, and sign PDFs with Adobe Acrobat and Acrobat Sign. And deliver exceptional customer experiences with our marketing and commerce apps such as Adobe Experience Manager, Campaign, and Target.",isOpen:!0}],["How much do Adobe products cost?",{content:m({semantics:"body",content:["Creative Cloud plans start at US$9.99/mo. You can subscribe to specific Single App plans or get 20+ creative apps and services in the Creative Cloud All Apps plan.",p({url:"https://www.adobe.com/creativecloud/plans.html",text:"Explore Creative Cloud plans."})]})}],["What are the most popular Adobe products?",{content:"Adobe makes some of the most widely used software in the world, including popular apps like Acrobat Pro, Photoshop, Illustrator, InDesign, Lightroom, and Premiere Pro."}],["How can I get a student discount on Adobe products?",{content:m({semantics:"body",content:[`Students who provide a valid school-issued email address at purchase are eligible to save over 60% on Creative Cloud All Apps, which includes 20+ apps such as Photoshop, Illustrator, InDesign, Acrobat Pro, and more. ${p({url:"https://www.adobe.com/creativecloud/buy/students.html",text:"Learn more about Creative Cloud for students."})}`]})}]]),u=D.bind({});u.args={items:y};u.parameters={chromatic:{disableSnapshot:!1}};const b=D.bind({});b.args=u.args;b.tags=["!autodocs","!dev"];b.parameters={chromatic:{forcedColors:"active",modes:P}};const w=f.bind({});w.tags=["!dev"];w.args={items:y,density:"compact"};const v=f.bind({});v.tags=["!dev"];v.args={items:y,density:"spacious"};const X=["Default","WithForcedColors","Compact","Spacious"],re=Object.freeze(Object.defineProperty({__proto__:null,Compact:w,Default:u,Spacious:v,WithForcedColors:b,__namedExportsOrder:X,default:K},Symbol.toStringTag,{value:"Module"}));export{re as A,w as C,u as D,v as S};
