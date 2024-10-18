import{T as y}from"./template-CNHi6PLw.js";import{R as c,s as v,n as m,C as a}from"./template-C7mrcesf.js";import{k as o}from"./lit-element-C96egxJg.js";import{c as f}from"./capitalize-D60SaZ2R.js";const d=({rootClass:t="spectrum-Tooltip",label:n,variant:e="neutral",placement:s,isOpen:r=!0,isFocused:$=!1,showOnHover:h=!1,customStyles:g={},customClasses:b=[]}={},w={})=>{let p;return e==="info"?p="Info":e==="positive"?p="CheckmarkCircle":e==="negative"&&(p="Alert"),h&&document.addEventListener("DOMContentLoaded",()=>{[...document.querySelectorAll(`.${t}`)].forEach(l=>{var i;(i=l.parentElement)==null||i.classList.add("u-tooltip-showOnHover")})}),o`
		<span
			class=${c({[t]:!0,[`${t}--${e}`]:typeof e<"u"&&e!=="neutral",[`${t}--${s}`]:typeof s<"u","is-open":r,"is-focused":$,...b.reduce((l,i)=>({...l,[i]:!0}),{})})}
			style=${v(g)}
		>
			${m(p,()=>y({iconName:p,setName:"workflow",size:"m",customClasses:[`${t}-typeIcon`]},w))}
			${m(n,()=>o`
				<span class=${c({[`${t}-label`]:!0})}>
					${n}
				</span>
			`)}
			<span class=${c({[`${t}-tip`]:!0})}></span>
		</span>
	`},u=["top","top-left","top-right","top-start","top-end","bottom","bottom-left","bottom-right","bottom-start","bottom-end","right","right-bottom","right-top","left","left-bottom","left-top","start","start-top","start-bottom","end","end-top","end-bottom"],O=(t,n)=>a({withBorder:!1,content:["top","bottom","right","left","start","end"].map(s=>o`
			${a({heading:s,content:o`
					<div style="display: flex; flex-wrap: wrap;">
						${u.map(r=>m(r.startsWith(s),()=>o`
									<span class="u-tooltip-showOnHover" style="margin: 15px 50px; cursor: default;">
										${f(r.replace(/-/g," "))}
										${d({...t,context:n,placement:r})}
									</span>
								`))}
					</div>
				`})}
			`)}),S=(t,n)=>a({withBorder:!1,content:u.map(e=>o`
		${a({heading:f(e.replace(/-/g," ")),content:o`
				${d({...t,context:n,placement:e})}
			`})}
	`)}),B=(t,n)=>a({withBorder:!1,content:["neutral","info","positive","negative"].map(s=>o`
			${a({heading:f(s.replace(/-/g," ")),content:o`
					${d({...t,context:n,variant:s})}
				`})}
		`)});export{B as S,d as T,S as a,O as b};
