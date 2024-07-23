import V from"./actionbutton.stories-A3GYwxv4.js";import{d as le}from"./index-BCEELo55.js";import{a as ce,d as ue}from"./states-DzrSzBKQ.js";import{T as G}from"./template-Zxf6qo95.js";import{a as me}from"./decorator-Dl7o6wQR.js";import{V as fe}from"./utilities-BisrhIqU.js";import"./lit-element-CJjJlyWZ.js";import{x as A}from"./lit-html-BdGv-Ldy.js";import{a as I}from"./class-map-sTkR_Npl.js";import{o as be}from"./if-defined-Bo9G1hLT.js";import{c as z}from"./repeat-Du-egFmu.js";import{o as ge}from"./style-map-yx2CMG_J.js";const pe="5.1.2",ye=[...Array(12).keys()].map(a=>new Date(0,a).toLocaleString("en",{month:"long"})),b=({rootClass:a="spectrum-Calendar",month:p,selectedDay:J,lastDay:Y,year:y,padded:x,isDisabled:h=!1,isFocused:K=!1,useDOWAbbrev:X=!1,buttonSize:q="s",customClasses:Z=[],customStyles:ee={"--mod-actionbutton-icon-size":"10px"},onDateClick:$,previousHandler:v,nextHandler:D,id:te}={},C={})=>{const{globals:ae={},updateArgs:c}=C,W=ae.lang??"en-US",d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ne={weekday:"long",month:"long",day:"numeric",year:"numeric"},O=(t,e="long")=>{let m;if(typeof t=="number")m=new Date().setMonth(t-1);else if(t instanceof Date)m=t;else{console.warn("Calendar: getMonthName() requires a date object or a number.");return}return m.toLocaleString(W??"default",{month:e})};let l=new Date;window.isChromatic()&&(l=new Date(`${p??"January"} 1, ${y??"2021"}`)),l&&(p=p??O(l),y=y??l.getFullYear());const R=new Date(`${p} 1, ${y}`),n=R.getMonth(),u=R.getFullYear(),oe=({selectedDate:t,lastSelectedDate:e})=>{l.setHours(0,0,0,0);const m=l.getTime();let r,s;t&&typeof t.setHours=="function"&&(t.setHours(0,0,0,0),r=t&&t.getTime()),e&&typeof e.setHours=="function"&&(e.setHours(0,0,0,0),s=e&&e.getTime()),s&&r&&s<r&&(s=void 0,console.warn("Calendar: last selected date must occur after the selected date."));const k=new Date(u,n+1,0).getDate(),L=new Date(u,n,1).getDay();let _=Math.ceil(k/d.length);const re=k%d.length;return L>d.length-re&&_++,n===1&&L>0&&_++,new Array(Math.ceil(_)).fill(0).map((De,se)=>new Array(d.length).fill(0).map((we,ie)=>{const f=se*d.length+ie+1-L,H=f<1||f>k;let w=H?n+(f<1?-1:1):n,N=u;H&&(w<0?(w=11,N-=1):w>11&&(w=0,N+=1));const E=new Date(N,n,f,0,0,0,0),i=E.getTime(),de=i===m,S=!!(i&&r&&s&&i>=r&&i<=s);return{date:E,isSelected:!!(t&&r===i||S),isToday:de,isOutsideMonth:H,isInRange:S,isRangeStart:!!(S&&i===r),isRangeEnd:!!(S&&i===s),isFocused:f===5}}))};return(!$||typeof $!="function")&&($=(t,e)=>{!t||t.isDisabled||!t.date||(c({selectedDay:t.date}),me(`click .${a}-date`)(e))}),(!v||typeof v!="function")&&(v=({displayedMonth:t,displayedYear:e})=>{if(typeof t>"u"||typeof e>"u"){console.warn("Calendar: No month or year could be determined.");return}return c({month:O(t<1?12:t),year:t===0?e-1:e})}),(!D||typeof D!="function")&&(D=({displayedMonth:t,displayedYear:e})=>{if(typeof t>"u"||typeof e>"u"){console.warn("Calendar: No month or year could be determined.");return}return c({month:O(t>10?1:t+2),year:t===11?e+1:e})}),A`
		<div
			class=${I({[a]:!0,[`${a}--padded`]:x,...Z.reduce((t,e)=>({...t,[e]:!0}),{})})}
			style=${ge(ee)}
			id=${be(te)}
		>
			<div class="${a}-header">
				<div
					class="${a}-title"
					role="heading"
					aria-live="assertive"
					aria-atomic="true"
				>
					${R.toLocaleString(W??"default",{month:"long",year:"numeric"})}
				</div>
				${G({label:"Previous",hideLabel:!0,isQuiet:!0,isDisabled:h,size:q,iconName:"ChevronLeft100",customClasses:[`${a}-prevMonth`],onclick:v.bind(null,{displayedMonth:n,displayedYear:u})},C)}
				${G({label:"Next",hideLabel:!0,isQuiet:!0,isDisabled:h,size:q,iconName:"ChevronRight100",customClasses:[`${a}-nextMonth`],onclick:D.bind(null,{displayedMonth:n,displayedYear:u})},C)}
			</div>
			<div
				class="${a}-body"
				role="grid"
				tabindex="0"
				aria-readonly="true"
				aria-disabled=${h?"true":"false"}
			>
				<table role="presentation" class="${a}-table">
					<thead role="presentation">
						<tr role="row">
							${z(d,t=>A` <th
									role="columnheader"
									scope="col"
									class="${a}-tableCell"
								>
									<abbr class="${a}-dayOfWeek" title=${t}
										>${t.slice(0,X?3:1)}</abbr
									>
								</th>`)}
						</tr>
					</thead>
					<tbody role="presentation">
						${z(oe({selectedDate:J,lastSelectedDate:Y}),t=>A` <tr role="row">
								${z(t,e=>A` <td
										role="gridcell"
										class="${a}-tableCell"
										tabindex=${e.isOutsideMonth?"":"-1"}
										aria-disabled=${e.isDisabled?"true":"false"}
										aria-selected=${e.isSelected===!0?"true":"false"}
										aria-invalid="false"
										title="${e.date.toLocaleDateString(W,ne)}"
									>
										<span
											role="presentation"
											class=${I({[`${a}-date`]:!0,"is-outsideMonth":e.isOutsideMonth,"is-today":e.isToday,"is-range-selection":e.isInRange,"is-range-start":e.isRangeStart,"is-range-end":e.isRangeEnd,"is-selected":e.isSelected,"is-disabled":h,"is-focused":K&&e.isFocused||e.isSelected})}
											@click=${$.bind(null,e)}
											@focusin=${()=>{c({isFocused:!0})}}
											@focusout=${()=>{c({isFocused:!1})}}
											>${e.date.getDate()}</span
										>
									</td>`)}
							</tr>`)}
					</tbody>
				</table>
			</div>
		</div>
	`},he=fe({Template:b,testData:[{testHeading:"Default"},{testHeading:"Padded",padded:!0},{testHeading:"Abbreviated days of the week",useDOWAbbrev:!0},{testHeading:"Range selection",month:ye[6],selectedDay:new Date(2023,6,3),year:2023,lastDay:new Date(2023,6,7),useDOWAbbrev:!0,padded:!0},{testHeading:"Today highlighted",month:void 0,selectedDay:void 0,year:void 0}],stateData:[{testHeading:"Disabled",isDisabled:!0},{testHeading:"Focused",isFocused:!0}]}),P=[...Array(12).keys()].map(a=>new Date(0,a).toLocaleString("en",{month:"long"})),$e={title:"Calendar",component:"Calendar",argTypes:{month:{name:"Month",type:{name:"string",required:!0},table:{type:{summary:"number"},category:"Content"},options:P,control:"select"},selectedDay:{name:"Selected date or range start (date)",description:"Highlight a selected date on the calendar or indicate the start of a date range.",type:{name:"number"},table:{type:{summary:"datetime"},category:"Content"},control:"date",if:{arg:"isDisabled",truthy:!1}},lastDay:{name:"Range end (date)",description:"Defines the end of a date range.",type:{name:"number"},table:{type:{summary:"datetime"},category:"Content"},control:"date"},year:{name:"Year",type:{name:"number",required:!0},table:{type:{summary:"number"},category:"Content"},control:"number"},isDisabled:ce,padded:{name:"Padded",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Advanced"},control:"boolean"},useDOWAbbrev:{name:"Use 3 letter abbreviation for day of week",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Advanced"},control:"boolean"},buttonSize:{table:{disable:!0}},isFocused:ue},args:{rootClass:"spectrum-Calendar",padded:!1,isDisabled:!1,isFocused:!1,useDOWAbbrev:!1,buttonSize:V.args.size},parameters:{actions:{handles:[...V.parameters.actions.handles??[]]},componentVersion:pe,docs:{description:{component:"Calendars display a grid of days in one or more months and allow users to select a single date."}}}},F=he.bind({});F.args={month:P[6],selectedDay:new Date(2023,6,3),year:2023};const M=b.bind({});M.args={useDOWAbbrev:!0};M.tags=["autodocs","!dev"];M.parameters={chromatic:{disableSnapshot:!0}};const T=b.bind({});T.args={month:P[6],selectedDay:new Date(2023,6,3),year:2023,lastDay:new Date(2023,6,7),useDOWAbbrev:!0,padded:!0};T.tags=["autodocs","!dev"];T.parameters={chromatic:{disableSnapshot:!0}};const g=b.bind({});g.args={month:void 0,selectedDay:void 0,year:void 0,isFocused:!0};g.tags=["autodocs","!dev"];g.parameters={chromatic:{disableSnapshot:!0}};const j=b.bind({});j.tags=["autodocs","!dev"];j.args={isDisabled:!0};g.parameters={chromatic:{disableSnapshot:!0}};const o=F.bind({});o.args=F.args;o.tags=["!autodocs","!dev","test"];o.parameters={chromatic:{forcedColors:"active",modes:le}};var Q,U,B;o.parameters={...o.parameters,docs:{...(Q=o.parameters)==null?void 0:Q.docs,source:{originalSource:"CalendarGroup.bind({})",...(B=(U=o.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};const ve=["Default","AbbreviatedWeekdays","RangeSelection","Focused","Disabled","WithForcedColors"],ze=Object.freeze(Object.defineProperty({__proto__:null,AbbreviatedWeekdays:M,Default:F,Disabled:j,Focused:g,RangeSelection:T,WithForcedColors:o,__namedExportsOrder:ve,default:$e},Symbol.toStringTag,{value:"Module"}));export{M as A,ze as C,F as D,g as F,T as R,b as T,j as a,$e as b};
