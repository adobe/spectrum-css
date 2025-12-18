import{T as y}from"./template-Cug7zURX.js";import{C as a,n as m,a as c,o as v}from"./decorator-DlLJAwnS.js";import{x as n}from"./lit-element-Cr8ugfRm.js";import{c as f}from"./capitalize-A3_7q2MJ.js";const d=({rootClass:t="spectrum-Tooltip",label:e,variant:o="neutral",placement:s,isOpen:r=!0,isFocused:$=!1,showOnHover:h=!1,customStyles:g={},customClasses:b=[]}={},w={})=>{let p;return o==="info"?p="Info":o==="positive"?p="CheckmarkCircle":o==="negative"&&(p="Alert"),h&&document.addEventListener("DOMContentLoaded",()=>{[...document.querySelectorAll(`.${t}`)].forEach(l=>{var i;(i=l.parentElement)==null||i.classList.add("u-tooltip-showOnHover")})}),n`
		<span
			class=${c({[t]:!0,[`${t}--${o}`]:typeof o<"u"&&o!=="neutral",[`${t}--${s}`]:typeof s<"u","is-open":r,"is-focused":$,...b.reduce((l,i)=>({...l,[i]:!0}),{})})}
			style=${v(g)}
		>
			${m(p,()=>y({iconName:p,setName:"workflow",size:"m",customClasses:[`${t}-typeIcon`]},w))}
			${m(e,()=>n`
				<span class=${c({[`${t}-label`]:!0})}>
					${e}
				</span>
			`)}
			<span class=${c({[`${t}-tip`]:!0})}></span>
		</span>
	`},u=["top","top-left","top-right","top-start","top-end","bottom","bottom-left","bottom-right","bottom-start","bottom-end","right","right-bottom","right-top","left","left-bottom","left-top","start","start-top","start-bottom","end","end-top","end-bottom"],k=(t,e)=>a({withBorder:!1,content:["top","bottom","right","left","start","end"].map(s=>n`
			${a({heading:s,content:n`
					<div style="display: flex; flex-wrap: wrap;">
						${u.map(r=>m(r.startsWith(s),()=>n`
									<span class="u-tooltip-showOnHover" style="margin: 15px 50px; cursor: default;">
										${f(r.replace(/-/g," "))}
										${d({...t,placement:r})}
									</span>
								`))}
					</div>
				`},e)}
		`)},e),x=(t,e)=>a({withBorder:!1,content:u.map(o=>n`
		${a({heading:f(o.replace(/-/g," ")),content:n`
				${d({...t,placement:o})}
			`},e)}
	`)},e),B=(t,e)=>a({withBorder:!1,content:["neutral","info","positive","negative"].map(s=>n`
			${a({heading:f(s.replace(/-/g," ")),content:n`
					${d({...t,variant:s})}
				`},e)}
		`)},e);export{B as S,d as T,x as a,k as b};
