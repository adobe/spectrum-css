import q from"./actionbutton.stories-9e_KVnsd.js";import{d as ie}from"./index-BL42WGY7.js";import{i as de,e as ce}from"./states-D366RZcH.js";import{R as E,s as le,a as ue,g as me,p as ge,V as pe}from"./template-CykOH8vE.js";import{T as I}from"./template-C9PkAyt7.js";import{k as w}from"./lit-element-C96egxJg.js";import{Q as H}from"./repeat-BXd58rDM.js";const be="@spectrum-css/calendar",fe="5.2.0",ye="The Spectrum CSS calendar component",he="Apache-2.0",$e="Adobe",ve="https://opensource.adobe.com/spectrum-css/calendar",De={type:"git",url:"https://github.com/adobe/spectrum-css.git",directory:"components/calendar"},we={url:"https://github.com/adobe/spectrum-css/issues"},Se={".":"./dist/index.css","./*.md":"./*.md","./dist/*":"./dist/*","./index-*.css":"./dist/index-*.css","./index.css":"./dist/index.css","./metadata.json":"./metadata/metadata.json","./metadata/*":"./metadata/*","./package.json":"./package.json","./stories/*":"./stories/*"},ke="dist/index.css",Ae=["dist/*","*.md","package.json","stories/*","metadata/*"],Fe={"@spectrum-css/actionbutton":">=6","@spectrum-css/tokens":">=14"},Te={"@spectrum-css/actionbutton":"workspace:^","@spectrum-css/tokens":"workspace:^"},Ce=["spectrum","css","design system","adobe"],Me={access:"public"},Re={name:be,version:fe,description:ye,license:he,author:$e,homepage:ve,repository:De,bugs:we,exports:Se,main:ke,files:Ae,peerDependencies:Fe,devDependencies:Te,keywords:Ce,publishConfig:Me},g=({rootClass:a="spectrum-Calendar",month:p,selectedDay:U,lastDay:V,year:b,isPadded:B,isDisabled:f=!1,isFocused:G=!1,useDOWAbbrev:Y=!1,buttonSize:z="s",customClasses:K=[],customStyles:X={},onDateClick:y,previousHandler:h,nextHandler:$,id:Z=me("calendar")}={},C={})=>{const{globals:ee={},updateArgs:c}=C,M=ee.lang??"en-US",i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],te={weekday:"long",month:"long",day:"numeric",year:"numeric"},R=(t,e="long")=>{let u;if(typeof t=="number")u=new Date().setMonth(t-1);else if(t instanceof Date)u=t;else{console.warn("Calendar: getMonthName() requires a date object or a number.");return}return u.toLocaleString(M??"default",{month:e})};let d=new Date;window.isChromatic()&&(d=new Date(`${p??"January"} 1, ${b??"2021"}`)),d&&(p=p??R(d),b=b??d.getFullYear());const W=new Date(`${p} 1, ${b}`),s=W.getMonth(),l=W.getFullYear(),ae=({selectedDate:t,lastSelectedDate:e})=>{d.setHours(0,0,0,0);const u=d.getTime();let n,o;t&&typeof t.setHours=="function"&&(t.setHours(0,0,0,0),n=t&&t.getTime()),e&&typeof e.setHours=="function"&&(e.setHours(0,0,0,0),o=e&&e.getTime()),o&&n&&o<n&&(o=void 0,console.warn("Calendar: last selected date must occur after the selected date."));const O=new Date(l,s+1,0).getDate(),j=new Date(l,s,1).getDay();let L=Math.ceil(O/i.length);const se=O%i.length;return j>i.length-se&&L++,s===1&&j>0&&L++,new Array(Math.ceil(L)).fill(0).map((Le,ne)=>new Array(i.length).fill(0).map((_e,oe)=>{const m=ne*i.length+oe+1-j,_=m<1||m>O;let v=_?s+(m<1?-1:1):s,x=l;_&&(v<0?(v=11,x-=1):v>11&&(v=0,x+=1));const Q=new Date(x,s,m,0,0,0,0),r=Q.getTime(),re=r===u,D=!!(r&&n&&o&&r>=n&&r<=o);return{date:Q,isSelected:!!(t&&n===r||D),isToday:re,isOutsideMonth:_,isInRange:D,isRangeStart:!!(D&&r===n),isRangeEnd:!!(D&&r===o),isFocused:m===5}}))};return(!y||typeof y!="function")&&(y=function(t,e){!t||t.isDisabled||!t.date||(c({selectedDay:t.date}),ge(`click .${a}-date`)(e))}),(!h||typeof h!="function")&&(h=function({displayedMonth:t,displayedYear:e}){if(typeof t>"u"||typeof e>"u"){console.warn("Calendar: No month or year could be determined.");return}return c({month:R(t<1?12:t),year:t===0?e-1:e})}),(!$||typeof $!="function")&&($=({displayedMonth:t,displayedYear:e})=>{if(typeof t>"u"||typeof e>"u"){console.warn("Calendar: No month or year could be determined.");return}return c({month:R(t>10?1:t+2),year:t===11?e+1:e})}),w`
		<div
			class=${E({[a]:!0,[`${a}--padded`]:B,...K.reduce((t,e)=>({...t,[e]:!0}),{})})}
			style=${le({"--mod-actionbutton-icon-size":"10px",...X})}
			id=${ue(Z)}
		>
			<div class="${a}-header">
				<div
					class="${a}-title"
					role="heading"
					aria-live="assertive"
					aria-atomic="true"
				>
					${W.toLocaleString(M??"default",{month:"long",year:"numeric"})}
				</div>
				${I({label:"Previous",hideLabel:!0,isQuiet:!0,isDisabled:f,size:z,iconName:"ChevronLeft100",iconSet:"ui",customClasses:[`${a}-prevMonth`],onclick:h.bind(null,{displayedMonth:s,displayedYear:l})},C)}
				${I({label:"Next",hideLabel:!0,isQuiet:!0,isDisabled:f,size:z,iconName:"ChevronRight100",iconSet:"ui",customClasses:[`${a}-nextMonth`],onclick:$.bind(null,{displayedMonth:s,displayedYear:l})},C)}
			</div>
			<div
				class="${a}-body"
				role="grid"
				tabindex="0"
				aria-readonly="true"
				aria-disabled=${f?"true":"false"}
			>
				<table role="presentation" class="${a}-table">
					<thead role="presentation">
						<tr role="row">
							${H(i,t=>w` <th
									role="columnheader"
									scope="col"
									class="${a}-tableCell"
								>
									<abbr class="${a}-dayOfWeek" title=${t}
										>${t.slice(0,Y?3:1)}</abbr
									>
								</th>`)}
						</tr>
					</thead>
					<tbody role="presentation">
						${H(ae({selectedDate:U,lastSelectedDate:V}),t=>w` <tr role="row">
								${H(t,e=>w` <td
										role="gridcell"
										class="${a}-tableCell"
										tabindex=${e.isOutsideMonth?"":"-1"}
										aria-disabled=${e.isDisabled?"true":"false"}
										aria-selected=${e.isSelected===!0?"true":"false"}
										aria-invalid="false"
										title="${e.date.toLocaleDateString(M,te)}"
									>
										<span
											role="presentation"
											class=${E({[`${a}-date`]:!0,"is-outsideMonth":e.isOutsideMonth,"is-today":e.isToday,"is-range-selection":e.isInRange,"is-range-start":e.isRangeStart,"is-range-end":e.isRangeEnd,"is-selected":e.isSelected,"is-disabled":f,"is-focused":G&&e.isFocused||e.isSelected})}
											@click=${y.bind(null,e)}
											@focusin=${function(){c({isFocused:!0})}}
											@focusout=${function(){c({isFocused:!1})}}
											>${e.date.getDate()}</span
										>
									</td>`)}
							</tr>`)}
					</tbody>
				</table>
			</div>
		</div>
	`},We=[...Array(12).keys()].map(a=>new Date(0,a).toLocaleString("en",{month:"long"})),J=pe({Template:g,testData:[{testHeading:"Default"},{testHeading:"Padded",padded:!0},{testHeading:"Abbreviated days of the week",useDOWAbbrev:!0},{testHeading:"Range selection",month:We[6],selectedDay:new Date(2023,6,3),year:2023,lastDay:new Date(2023,6,7),useDOWAbbrev:!0,padded:!0},{testHeading:"Today highlighted",month:void 0,selectedDay:void 0,year:void 0}],stateData:[{testHeading:"Disabled",isDisabled:!0},{testHeading:"Focused",isFocused:!0}]}),N=[...Array(12).keys()].map(a=>new Date(0,a).toLocaleString("en",{month:"long"})),Oe={title:"Calendar",component:"Calendar",argTypes:{month:{name:"Month",type:{name:"string",required:!0},table:{type:{summary:"number"},category:"Content"},options:N,control:"select"},selectedDay:{name:"Selected date or range start (date)",description:"Highlight a selected date on the calendar or indicate the start of a date range.",type:{name:"number"},table:{type:{summary:"datetime"},category:"Content"},control:"date",if:{arg:"isDisabled",truthy:!1}},lastDay:{name:"Range end (date)",description:"Defines the end of a date range.",type:{name:"number"},table:{type:{summary:"datetime"},category:"Content"},control:"date"},year:{name:"Year",type:{name:"number",required:!0},table:{type:{summary:"number"},category:"Content"},control:"number"},isDisabled:de,isPadded:{name:"Padded",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Advanced"},control:"boolean"},useDOWAbbrev:{name:"Use 3 letter abbreviation for day of week",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Advanced"},control:"boolean"},buttonSize:{table:{disable:!0}},isFocused:ce},args:{rootClass:"spectrum-Calendar",isPadded:!1,isDisabled:!1,isFocused:!1,useDOWAbbrev:!1,buttonSize:q.args.size},parameters:{actions:{handles:[...q.parameters.actions.handles??[]]},packageJson:Re,docs:{description:{component:"Calendars display a grid of days in one or more months and allow users to select a single date."}}},tags:["!autodocs"]},P=J.bind({});P.args={month:N[6],selectedDay:new Date(2023,6,3),year:2023};const S=g.bind({});S.args={useDOWAbbrev:!0};S.tags=["!dev"];S.parameters={chromatic:{disableSnapshot:!0}};const k=g.bind({});k.args={month:N[6],selectedDay:new Date(2023,6,3),year:2023,lastDay:new Date(2023,6,7),useDOWAbbrev:!0,isPadded:!0};k.tags=["!dev"];k.parameters={chromatic:{disableSnapshot:!0}};const A=g.bind({});A.args={month:void 0,selectedDay:void 0,year:void 0,isFocused:!0};A.tags=["!dev"];A.parameters={chromatic:{disableSnapshot:!0}};const F=g.bind({});F.tags=["!dev"];F.args={isDisabled:!0};F.parameters={chromatic:{disableSnapshot:!0}};const T=J.bind({});T.args=P.args;T.tags=["!autodocs","!dev"];T.parameters={chromatic:{forcedColors:"active",modes:ie}};const je=["Default","AbbreviatedWeekdays","RangeSelection","Focused","Disabled","WithForcedColors"],Je=Object.freeze(Object.defineProperty({__proto__:null,AbbreviatedWeekdays:S,Default:P,Disabled:F,Focused:A,RangeSelection:k,WithForcedColors:T,__namedExportsOrder:je,default:Oe},Symbol.toStringTag,{value:"Module"}));export{S as A,Je as C,P as D,A as F,k as R,g as T,F as a,Oe as b};
