import{T as c}from"./template-Dm-5u57m.js";import{T as o}from"./template-BJlsLmf1.js";import{x as m}from"./lit-element-Cr8ugfRm.js";import{o as d,n as i}from"./decorator-DlLJAwnS.js";const x=({rootClass:r="spectrum-ColorHandle",customClasses:a=[],isDisabled:e=!1,isFocused:n=!1,isWithColorLoupe:t=!1,selectedColor:s="rgba(255, 0, 0, 50%)",customStyles:p={}}={},l={})=>m`
		<div style=${d({"padding-block-start":t?"67px":0,"padding-inline":t?"6px":0})}>
			${o({customClasses:[`${r}`,...!e&&n?["is-focused"]:[],...e?["is-disabled"]:[],...a],customStyles:{...p,"--spectrum-picked-color":s},content:[m`
						<div class="${r}-inner"></div>
						${i(t,()=>m`
							${c({isOpen:!0,isDisabled:e,selectedColor:s})}
						`)}
					`]})}
		</div>
	`;export{x as T};
