import{T as n}from"./template-Cug7zURX.js";import{a as c,o as f,g as s}from"./decorator-DlLJAwnS.js";import{x as l}from"./lit-element-Cr8ugfRm.js";import{o as b}from"./if-defined-C5sRMNk0.js";const y=({rootClass:e="spectrum-ClearButton",isDisabled:m=!1,size:t="m",isQuiet:$=!1,staticColor:a,id:r=s("clearbutton"),customClasses:u=[],customStyles:d={}},i)=>l`
	<button
		type="reset"
		class=${c({[e]:!0,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",[`${e}--quiet`]:$,[`${e}--overBackground`]:a==="white",[`${e}--staticWhite`]:a==="white","is-disabled":m,...u.reduce((o,p)=>({...o,[p]:!0}),{})})}
		id=${b(r)}
		style=${f(d)}
		?disabled=${m}
	>
		<div class="${e}-fill">
			${n({size:t,iconName:"Cross",setName:"ui",customClasses:[`${e}-icon`]},i)}
		</div>
	</button>
`;export{y as T};
