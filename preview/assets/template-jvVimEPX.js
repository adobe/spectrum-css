import{T as s}from"./template-CNHi6PLw.js";import{R as c,a as f,s as o,g as l}from"./template-C7mrcesf.js";import{k as b}from"./lit-element-C96egxJg.js";const k=({rootClass:e="spectrum-ClearButton",isDisabled:a=!1,size:t="m",isQuiet:u=!1,staticColor:m,id:$=l("clearbutton"),customClasses:d=[],customStyles:i={}},n)=>b`
	<button
		type="reset"
		class=${c({[e]:!0,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",[`${e}--quiet`]:u,[`${e}--overBackground`]:m==="white",[`${e}--staticWhite`]:m==="white","is-disabled":a,...d.reduce((p,r)=>({...p,[r]:!0}),{})})}
		id=${f($)}
		style=${o(i)}
		?disabled=${a}
	>
		<div class="${e}-fill">
			${s({size:t,iconName:"Cross",setName:"ui",customClasses:[`${e}-icon`]},n)}
		</div>
	</button>
`;export{k as T};
