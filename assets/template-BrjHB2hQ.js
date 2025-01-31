import{T as y}from"./template-B52pacml.js";import{R as m,s as v,n as c,C as a}from"./decorator-BtqfPG1l.js";import{k as s}from"./lit-element-C96egxJg.js";import{c as f}from"./capitalize-D60SaZ2R.js";const d=({rootClass:e="spectrum-Tooltip",label:t,variant:o="neutral",placement:n,isOpen:r=!0,isFocused:$=!1,showOnHover:h=!1,customStyles:g={},customClasses:b=[]}={},w={})=>{let p;return o==="info"?p="Info":o==="positive"?p="CheckmarkCircle":o==="negative"&&(p="Alert"),h&&document.addEventListener("DOMContentLoaded",()=>{[...document.querySelectorAll(`.${e}`)].forEach(l=>{var i;(i=l.parentElement)==null||i.classList.add("u-tooltip-showOnHover")})}),s`
		<span
			class=${m({[e]:!0,[`${e}--${o}`]:typeof o<"u"&&o!=="neutral",[`${e}--${n}`]:typeof n<"u","is-open":r,"is-focused":$,...b.reduce((l,i)=>({...l,[i]:!0}),{})})}
			style=${v(g)}
		>
			${c(p,()=>y({iconName:p,setName:"workflow",size:"m",customClasses:[`${e}-typeIcon`]},w))}
			${c(t,()=>s`
				<span class=${m({[`${e}-label`]:!0})}>
					${t}
				</span>
			`)}
			<span class=${m({[`${e}-tip`]:!0})}></span>
		</span>
	`},u=["top","top-left","top-right","top-start","top-end","bottom","bottom-left","bottom-right","bottom-start","bottom-end","right","right-bottom","right-top","left","left-bottom","left-top","start","start-top","start-bottom","end","end-top","end-bottom"],S=(e,t)=>a({withBorder:!1,content:["top","bottom","right","left","start","end"].map(n=>s`
			${a({heading:n,content:s`
					<div style="display: flex; flex-wrap: wrap;">
						${u.map(r=>c(r.startsWith(n),()=>s`
									<span class="u-tooltip-showOnHover" style="margin: 15px 50px; cursor: default;">
										${f(r.replace(/-/g," "))}
										${d({...e,context:t,placement:r})}
									</span>
								`))}
					</div>
				`},t)}
		`)},t),B=(e,t)=>a({withBorder:!1,content:u.map(o=>s`
		${a({heading:f(o.replace(/-/g," ")),content:s`
				${d({...e,context:t,placement:o})}
			`},t)}
	`)},t),E=(e,t)=>a({withBorder:!1,content:["neutral","info","positive","negative"].map(n=>s`
			${a({heading:f(n.replace(/-/g," ")),content:s`
					${d({...e,context:t,variant:n})}
				`},t)}
		`)},t);export{E as S,d as T,B as a,S as b};
