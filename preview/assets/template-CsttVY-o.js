import{T as g}from"./template-D5ShUZ_q.js";import"./decorator-Dl7o6wQR.js";import{V as b}from"./utilities-BisrhIqU.js";import"./lit-element-CJjJlyWZ.js";import{x as r}from"./lit-html-BdGv-Ldy.js";import{a as s}from"./class-map-sTkR_Npl.js";import{o as h}from"./style-map-yx2CMG_J.js";import{n as a}from"./when-BR7zwNJC.js";import{c as m}from"./capitalize-D60SaZ2R.js";const T=({rootClass:t="spectrum-Tooltip",label:p,variant:e="neutral",placement:i,isOpen:n=!0,isFocused:f=!1,customStyles:c={},customClasses:l=[]}={},u={})=>{let o;return e==="info"?o="Info":e==="positive"?o="CheckmarkCircle":e==="negative"&&(o="Alert"),r`
		<span
			class=${s({[t]:!0,[`${t}--${e}`]:typeof e<"u"&&e!=="neutral",[`${t}--${i}`]:typeof i<"u","is-open":n,"is-focused":f,...l.reduce((d,$)=>({...d,[$]:!0}),{})})}
			style=${h(c)}
		>
			${a(o,()=>g({iconName:o,size:"m",customClasses:[`${t}-typeIcon`]},u))}
			${a(p,()=>r`
				<span class=${s({[`${t}-label`]:!0})}>
					${p}
				</span>
			`)}
			<span class=${s({[`${t}-tip`]:!0})}></span>
		</span>
	`},P=b({Template:T,testData:[...["neutral","info","positive","negative"].map(t=>({testHeading:m(t),variant:t})),...["top","top-left","top-right","top-start","top-end","bottom","bottom-left","bottom-right","bottom-start","bottom-end","right","right-bottom","right-top","left","left-bottom","left-top","start","start-top","start-bottom","end","end-top","end-bottom"].map(t=>({testHeading:m(t.replace(/-/g," ")),placement:t}))],stateData:[{testHeading:"Focused",isFocused:!0}]});export{P,T};
