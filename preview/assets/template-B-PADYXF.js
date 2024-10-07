import{T as p}from"./template-CjNf7Zto.js";import{R as c,a as i,s as f,g as l}from"./template-CykOH8vE.js";import{k as b}from"./lit-element-C96egxJg.js";const v=({rootClass:e="spectrum-ClearButton",isDisabled:a=!1,size:t="m",isQuiet:m=!1,staticColor:r,id:s=l("clearbutton"),customClasses:u=[],customStyles:d={}},o)=>b`
	<button
		type="reset"
		class=${c({[e]:!0,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",[`${e}--quiet`]:m,[`${e}--overBackground`]:r==="white","is-disabled":a,...u.reduce(($,n)=>({...$,[n]:!0}),{})})}
		id=${i(s)}
		style=${f(d)}
		?disabled=${a}
	>
		<div class="${e}-fill">
			${p({size:t,iconName:"Cross",setName:"ui",customClasses:[`${e}-icon`]},o)}
		</div>
	</button>
`;export{v as T};
