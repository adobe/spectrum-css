import{T as s}from"./template-CKQlC29v.js";import{R as c,s as o,g as f}from"./decorator-BliclrE4.js";import{k as l}from"./lit-element-C96egxJg.js";import{t as b}from"./if-defined-B5hOZ0d5.js";const v=({rootClass:e="spectrum-ClearButton",isDisabled:a=!1,size:t="m",isQuiet:r=!1,staticColor:m,id:u=f("clearbutton"),customClasses:$=[],customStyles:d={}},i)=>l`
	<button
		type="reset"
		class=${c({[e]:!0,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",[`${e}--quiet`]:r,[`${e}--overBackground`]:m==="white",[`${e}--staticWhite`]:m==="white","is-disabled":a,...$.reduce((p,n)=>({...p,[n]:!0}),{})})}
		id=${b(u)}
		style=${o(d)}
		?disabled=${a}
	>
		<div class="${e}-fill">
			${s({size:t,iconName:"Cross",setName:"ui",customClasses:[`${e}-icon`]},i)}
		</div>
	</button>
`;export{v as T};
