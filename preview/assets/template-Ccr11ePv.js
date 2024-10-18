import{T as c}from"./template-eqdomZzy.js";import{T as d}from"./template-Deiy8Oth.js";import{k as t}from"./lit-element-C96egxJg.js";import{s as i,n as o}from"./template-C7mrcesf.js";const k=({rootClass:a="spectrum-ColorHandle",customClasses:m=[],isDisabled:e=!1,isFocused:r=!1,isWithColorLoupe:s=!1,selectedColor:n="rgba(255, 0, 0, 50%)",customStyles:p={}}={},l={})=>t`
		<div style=${i({"padding-block-start":s?"67px":0,"padding-inline":s?"6px":0})}>
			${d({customClasses:[`${a}`,...!e&&r?["is-focused"]:[],...e?["is-disabled"]:[],...m],customStyles:{...p,"--spectrum-picked-color":n},content:[t`
						<div class="${a}-inner"></div>
						${o(s,()=>t`
							${c({isOpen:!0,isDisabled:e,selectedColor:n})}
						`)}
					`]})}
		</div>
	`;export{k as T};
