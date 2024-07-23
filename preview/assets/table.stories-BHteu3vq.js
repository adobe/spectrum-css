import{d as ee}from"./index-BCEELo55.js";import{T as te}from"./template-CU9oPm8-.js";import{T as K}from"./template-BSRXx7Ch.js";import{T as M}from"./template-D5ShUZ_q.js";import{T as le}from"./template-DF3injel.js";import{a as $}from"./class-map-sTkR_Npl.js";import{o}from"./if-defined-Bo9G1hLT.js";import{n as v}from"./when-BR7zwNJC.js";import{x as oe}from"./lit-html-BdGv-Ldy.js";import"./decorator-Dl7o6wQR.js";import"./utilities-BisrhIqU.js";import"./lit-element-CJjJlyWZ.js";import"./style-map-yx2CMG_J.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./v4-CQkTLCs1.js";import"./template-BTVRUgwL.js";import"./capitalize-D60SaZ2R.js";import"./lowerCase-CIorQk0G.js";import"./_createCompounder-DY9ZW94_.js";import"./template-VCbHummt.js";const ae="6.1.1";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=Symbol.for(""),re=e=>{if((e==null?void 0:e.r)===P)return e==null?void 0:e._$litStatic$},i=(e,...l)=>({_$litStatic$:l.reduce((a,c,d)=>a+(t=>{if(t._$litStatic$!==void 0)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(c)+e[d+1],e[0]),r:P}),F=new Map,ne=e=>(l,...a)=>{const c=a.length;let d,t;const m=[],C=[];let w,n=0,g=!1;for(;n<c;){for(w=l[n];n<c&&(t=a[n],(d=re(t))!==void 0);)w+=d+l[++n],g=!0;n!==c&&C.push(t),m.push(w),n++}if(n===c&&m.push(l[c]),g){const T=m.join("$$lit$$");(l=F.get(T))===void 0&&(m.raw=m,F.set(T,l=m)),a=C}return e(l,...a)},p=ne(oe),ie=({rootClass:e="spectrum-Table",cellContent:l="Row Item Text",showCheckbox:a=!1,isSelected:c=!1,isSummaryRow:d=!1,isSectionHeader:t=!1,tableIsEmphasized:m=!0,isCollapsible:C=!1,isExpanded:w=!1,isHidden:n=!1,tier:g,isLastTier:T=!1,useDivs:s=!1,showThumbnails:I=!1,isDropTarget:D=!1,ariaControls:E,customClasses:L=[],size:b="m"}={},R={})=>{const h=I&&!d&&!t,x=s?i`div`:i`tr`,r=s?i`div`:i`td`,f=B=>{const N=Array.isArray(l)?l[B]:l;return h&&B<2?p`
				<div class="spectrum-Table-thumbnailInner">
					${le({size:"300",imageURL:"example-card-landscape.png",isCover:!0},R)}
					<div class="spectrum-Table-thumbnailContent">${N}</div>
				</div>
			`:N};return p`
	<${x}
		class=${$({[`${e}-row`]:!0,[`${e}-row--summary`]:d,[`${e}-row--sectionHeader`]:t,[`${e}-row--collapsible`]:C,[`${e}-row--thumbnail`]:h,"is-selected":c,"is-expanded":w,"is-last-tier":T,"is-drop-target":D,...L.reduce((B,N)=>({...B,[N]:!0}),{})})}
		role=${o(s?"row":void 0)}
		aria-selected=${o(a?"true":void 0)}
		data-tier=${o(g)}
		?hidden=${n}
	>
		${v(a&&!t,()=>p`
			<${r}
				role="gridcell"
				class="spectrum-Table-cell spectrum-Table-checkboxCell"
			>
				${v(!d,()=>K({size:b,isEmphasized:m,isChecked:c,customClasses:[`${e}-checkbox`]},R))}
			</${r}>`)}

		${C?p`
					<${r}
						role=${o(a?"gridcell":s?"cell":void 0)}
						class=${$({[`${e}-cell`]:!0,[`${e}-cell--collapsible`]:!0,[`${e}-cell--thumbnail`]:h})}
					>
						<div class="${e}-collapseInner">
							${v(!T,()=>te({size:b,iconName:"ChevronRight100",hideLabel:!0,customClasses:[`${e}-disclosureIcon`],ariaExpanded:w,ariaControls:E},R))}
							${h?f(0):p`<div class="${e}-collapseContent">${f(0)}</div>`}
						</div>
					</${r}>`:p`
					<${r}
						role=${o(a?"gridcell":s?"cell":void 0)}
						class=${$({[`${e}-cell`]:!0,[`${e}-cell--thumbnail`]:h})}
						colspan=${o(t&&a?"4":t?"3":void 0)}
					>${f(0)}</${r}>`}

		${v(!t,()=>p`
			<${r}
				role=${o(a?"gridcell":s?"cell":void 0)}
				class=${$({[`${e}-cell`]:!0,[`${e}-cell--thumbnail`]:h})}
			>${f(1)}</${r}>

			<${r}
				role=${o(a?"gridcell":s?"cell":void 0)}
				class=${$({[`${e}-cell`]:!0})}
			>${f(2)}</${r}>`)}
	</${x}>
  `},u=({rootClass:e="spectrum-Table",size:l="m",density:a="standard",isQuiet:c=!1,isEmphasized:d=!0,useDivs:t=!1,useScroller:m=!1,showThumbnails:C=!1,isDropTarget:w=!1,rowItems:n=[],customClasses:g=[],id:T}={},s={})=>{if(!n||!n.length)return p``;const I=t?i`div`:i`table`,D=t?i`div`:i`thead`,E=t?i`div`:i`tbody`,L=t?i`div`:i`tr`,b=t?i`div`:i`th`,R={[`${e}--size${l==null?void 0:l.toUpperCase()}`]:typeof l<"u",[`${e}--${a}`]:a!=="standard",[`${e}--quiet`]:c,[`${e}--emphasized`]:d,...g.reduce((r,f)=>({...r,[f]:!0}),{})},h=n.some(r=>r.showCheckbox===!0),x=p`
	<${I}
		class=${$({[e]:!m,[`${e}-main`]:m,...R})}
		id=${o(T)}
		role=${o(h?"grid":t?"table":void 0)}
		aria-multiselectable=${o(h?"true":void 0)}
		style="max-width: 800px;"
	>
		<${D}
			class="${e}-head"
			role=${o(t?"rowgroup":void 0)}
		>
			<${L}
				role=${o(t?"row":void 0)}
			>
				${v(h,()=>p`
					<${b}
						class="spectrum-Table-headCell spectrum-Table-checkboxCell"
						role=${o(t?"columnheader":void 0)}
					>
						${K({size:l,isEmphasized:d,isChecked:!1,isIndeterminate:!0,customClasses:[`${e}-checkbox`]},s)}
					</${b}>`)}
				<${b}
					class="${e}-headCell is-sortable is-sorted-desc"
					role=${o(t?"columnheader":void 0)}
					aria-sort="descending"
					tabindex="0"
				>
					${M({iconName:"ArrowDown100",size:l,customClasses:[`${e}-sortedIcon`]},s)}<span class="${e}-columnTitle">Column title</span>${M({iconName:"ChevronDown100",size:l,customClasses:[`${e}-menuIcon`]},s)}
				</${b}>
				<${b}
					class="${e}-headCell is-sortable"
					role=${o(t?"columnheader":void 0)}
					aria-sort="none"
					tabindex="0"
				>
					${M({iconName:"ArrowDown100",size:l,customClasses:[`${e}-sortedIcon`]},s)}<span class="${e}-columnTitle">Column title</span>
				</${b}>
				<${b}
					class="${e}-headCell"
					role=${o(t?"columnheader":void 0)}
				>Column title</${b}>
			</${L}>
		</${D}>
		<${E}
			class=${$({[`${e}-body`]:!0,"is-drop-target":w})}
			role=${o(t?"rowgroup":void 0)}
		>
			${n.map(r=>ie({rootClass:e,size:l,useDivs:t,showThumbnails:C,tableIsEmphasized:d,...r},s))}
		</${E}>
	</${I}>
	`;return m?p`
			<div
				class=${$({[e]:!0,[`${e}-scroller`]:!0,...R})}
				style="height: 200px;"
			>
				${x}
			</div>
		`:x},Ne={title:"Table",component:"Table",argTypes:{size:{name:"Size",table:{type:{summary:"string"},category:"Component"},options:["s","m","l","xl"],control:"select"},density:{name:"Density",table:{type:{summary:"string"},category:"Component"},options:["standard","compact","spacious"],control:"select"},isQuiet:{name:"Quiet styling",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},isEmphasized:{name:"Emphasized",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},useDivs:{name:"Use Divs for Markup",description:"Use 'div' elements for all of the table markup instead of the 'table' element.",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},useScroller:{name:"Scrollable Body and Fixed Column Headers",description:"Uses a wrapper element that can have a fixed height and allows scrolling, along with column headers that are fixed to the top on scroll.",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},showThumbnails:{name:"Show Thumbnails in Content",description:"Uses the Thumbnail component at the start of the first column's cells.",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},isDropTarget:{name:"Dropzone (Drop Target)",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},rowItems:{table:{disable:!0}}},args:{rootClass:"spectrum-Table",size:"m",density:"standard",isQuiet:!1,isEmphasized:!0,useDivs:!1,showThumbnails:!1,isDropTarget:!1,useScroller:!1,rowItems:[{cellContent:"Row Item Alpha"},{cellContent:"Row Item Bravo"},{cellContent:"Row Item Charlie"},{cellContent:"Row Item Delta"},{cellContent:"Row Item Echo"}]},parameters:{componentVersion:ae,docs:{description:{component:"A table is used to create a container for displaying information. It allows users to sort, compare, and take action on large amounts of data."}}}},se=u.bind({});se.args={};const X=u.bind({});X.tags=["!autodocs","!dev","test"];X.parameters={chromatic:{forcedColors:"active",modes:ee}};const S=u.bind({});S.args={rowItems:[{cellContent:"Table Row Alpha"},{cellContent:"Table Row Bravo"},{cellContent:"Table Row Charlie",isSelected:!0},{cellContent:"Table Row Delta"},{cellContent:"Summary Row",isSummaryRow:!0}]};const Y=u.bind({});Y.storyName="Multi-select";Y.args={rowItems:[{cellContent:["Table Row Alpha","Alpha","Table Row Alpha"],showCheckbox:!0},{cellContent:["Table Row Bravo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Bravo","Table Row Bravo. Lorem ipsum dolor sit amet."],showCheckbox:!0,isSelected:!0},{cellContent:"Table Row Charlie",showCheckbox:!0,isSelected:!0},{cellContent:"Table Row Delta",showCheckbox:!0},{cellContent:"Echo",showCheckbox:!0},{cellContent:"Foxtrot",showCheckbox:!0}]};const k=u.bind({});k.args={useScroller:!0,rowItems:[{cellContent:"Table Row Alpha"},{cellContent:"Table Row Bravo"},{cellContent:"Table Row Charlie",isSelected:!0},{cellContent:"Table Row Delta"},{cellContent:"Table Row Echo"},{cellContent:"Table Row Foxtrot"},{cellContent:"Summary Row",isSummaryRow:!0}]};const y=u.bind({});y.storyName="Divs and scrollable";y.args={useDivs:!0,useScroller:!0,rowItems:[{cellContent:["Table Row Alpha","Alpha","Table Row Alpha"],showCheckbox:!0},{cellContent:["Table Row Bravo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Bravo","Table Row Bravo. Lorem ipsum dolor sit amet."],showCheckbox:!0,isSelected:!0},{cellContent:"Table Row Charlie",showCheckbox:!0,isSelected:!0},{cellContent:"Table Row Delta",showCheckbox:!0},{cellContent:"Echo",showCheckbox:!0},{cellContent:"Foxtrot",showCheckbox:!0}]};const ce=u.bind({});ce.args={rowItems:[{cellContent:"Section Header",isSectionHeader:!0},{cellContent:"Table Row Alpha"},{cellContent:"Table Row Bravo"},{cellContent:"Table Row Charlie"},{cellContent:"Another Section Header",isSectionHeader:!0},{cellContent:"Table Row Delta"},{cellContent:"Table Row Echo"}]};const de=u.bind({});de.args={rowItems:[{cellContent:"Table Row Alpha",isCollapsible:!0,isExpanded:!0,tier:0,ariaControls:"table-cr-bravo table-cr-delta",id:"table-cr-alpha"},{cellContent:"Table Row Bravo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",isCollapsible:!0,tier:1,ariaControls:"table-cr-charlie",id:"table-cr-bravo"},{cellContent:["Table Row Charlie","Default Not Visible","Default Not Visible"],isCollapsible:!0,isHidden:!0,tier:2,id:"table-cr-charlie"},{cellContent:"Table Row Delta",isSelected:!0,isCollapsible:!0,isExpanded:!0,tier:1,ariaControls:"table-cr-echo table-cr-foxtrot",id:"table-cr-delta"},{cellContent:"Table Row Echo",tier:2,isLastTier:!0,isCollapsible:!0,id:"table-cr-echo"},{cellContent:"Table Row Foxtrot",tier:2,isLastTier:!0,isCollapsible:!0,id:"table-cr-foxtrot"},{cellContent:"Summary Row",isSummaryRow:!0}]};const Z=u.bind({});Z.storyName="Collapsible Multi-select";Z.args={rowItems:[{showCheckbox:!0,cellContent:"Table Row Alpha",isCollapsible:!0,isExpanded:!0,tier:0,ariaControls:"table-cr-bravo table-cr-delta",id:"table-cr-alpha"},{showCheckbox:!0,cellContent:"Table Row Bravo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",isCollapsible:!0,tier:1,ariaControls:"table-cr-charlie",id:"table-cr-bravo"},{showCheckbox:!0,cellContent:["Table Row Charlie","Default Not Visible","Default Not Visible"],isCollapsible:!0,isHidden:!0,tier:2,id:"table-cr-charlie"},{showCheckbox:!0,cellContent:"Table Row Delta",isSelected:!0,isCollapsible:!0,isExpanded:!0,tier:1,ariaControls:"table-cr-echo table-cr-foxtrot",id:"table-cr-delta"},{showCheckbox:!0,cellContent:"Table Row Echo",tier:2,isLastTier:!0,isCollapsible:!0,id:"table-cr-echo"},{showCheckbox:!0,cellContent:"Table Row Foxtrot",tier:2,isLastTier:!0,isCollapsible:!0,id:"table-cr-foxtrot"},{showCheckbox:!0,cellContent:"Summary Row",isSummaryRow:!0}]};const me=u.bind({});me.args={showThumbnails:!0,rowItems:[{cellContent:["Table Row Alpha","Test","2"]},{cellContent:["Table Row Bravo","Test","28"]},{cellContent:["Table Row Charlie. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.","Test","23"]},{cellContent:["Table Row Delta","Test","7"]}]};const ue=u.bind({});ue.args={showThumbnails:!0,rowItems:[{cellContent:"Table Row Alpha",isCollapsible:!0,isExpanded:!0,tier:0,ariaControls:"table-cr-bravo",id:"table-cr-alpha"},{cellContent:"Table Row Bravo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",isCollapsible:!0,tier:1,ariaControls:"table-cr-charlie",id:"table-cr-bravo"},{cellContent:"Table Row Charlie",tier:2,isLastTier:!0,isCollapsible:!0,id:"table-cr-charlie"},{cellContent:"Table Row Delta",tier:2,isLastTier:!0,isCollapsible:!0,id:"table-cr-delta"},{cellContent:"Summary Row",isSummaryRow:!0}]};const A=u.bind({});A.args={rowItems:[{cellContent:"Table Row Alpha",isDropTarget:!0},{cellContent:"Table Row Bravo"},{cellContent:"Table Row Charlie",isDropTarget:!0},{cellContent:"Table Row Delta"},{cellContent:"Table Row Echo"},{cellContent:"Table Row Foxtrot",isDropTarget:!0}]};var U,V,_;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,description:{story:"An example showing both the optional summary row, and a row marked as selected.",...(_=(V=S.parameters)==null?void 0:V.docs)==null?void 0:_.description}}};var H,q,z;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,description:{story:"An example showing the use of the scrollable wrapper element with table markup. This allows a fixed height and scrolling, along with column headers that are fixed to the top on scroll.",...(z=(q=k.parameters)==null?void 0:q.docs)==null?void 0:z.description}}};var Q,O,W;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,description:{story:"A table can also be made up of divs if needed. This uses both the div markup, and the scrollable wrapper.",...(W=(O=y.parameters)==null?void 0:O.docs)==null?void 0:W.description}}};var j,G,J;A.parameters={...A.parameters,docs:{...(j=A.parameters)==null?void 0:j.docs,description:{story:"In addition to the overall table, individual rows can be designated as a drop target. Only one dropzone row should show at a time, but this example sets multiple at different parts of the table to test that they all display the same.",...(J=(G=A.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};const Me=["Default","WithForcedColors","SummaryAndSelected","MultiSelect","Scrollable","DivsScrollable","SectionHeader","Collapsible","CollapsibleMultiSelect","Thumbnails","ThumbnailsCollapsible","RowDropzone"];export{de as Collapsible,Z as CollapsibleMultiSelect,se as Default,y as DivsScrollable,Y as MultiSelect,A as RowDropzone,k as Scrollable,ce as SectionHeader,S as SummaryAndSelected,me as Thumbnails,ue as ThumbnailsCollapsible,X as WithForcedColors,Me as __namedExportsOrder,Ne as default};
