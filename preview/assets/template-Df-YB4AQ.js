import"./decorator-Dl7o6wQR.js";import{V as A}from"./utilities-BisrhIqU.js";import"./lit-element-CJjJlyWZ.js";import{x as t}from"./lit-html-BdGv-Ldy.js";import{a as o}from"./class-map-sTkR_Npl.js";import{o as n}from"./if-defined-Bo9G1hLT.js";import{o as u}from"./style-map-yx2CMG_J.js";import{n as C}from"./when-BR7zwNJC.js";import{c as b}from"./capitalize-D60SaZ2R.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./v4-CQkTLCs1.js";const z=(c,x)=>{let{rootClass:s="spectrum-Typography",semantics:r="body",size:d="m",variant:p,weight:g,glyph:y="sans-serif",id:i,content:a=[],customClasses:h=[],customStyles:f={}}=c;Array.isArray(a)||(a=[a]);const v=a.length;if(v===0)return t``;const T=t`
		${a.map(e=>{if(typeof e!="string"&&typeof e=="object"&&!e._$litType$)return z({...c,...e});if(typeof r>"u")return t`
					<div
						class=${o({"spectrum-Typography":!0,...h.reduce(($,l)=>({...$,[l]:!0}),{})})}
						id=${n(i)}
					>${e}</div>`;s=`spectrum-${b(r)}`;const m={[s]:!0,[`${s}--${y}`]:typeof r<"u"&&typeof y<"u"&&y!=="sans-serif",[`${s}--size${d==null?void 0:d.toUpperCase()}`]:typeof r<"u"&&typeof d<"u",[`${s}--${g}`]:typeof r<"u"&&typeof g<"u",...h.reduce(($,l)=>({...$,[l]:!0}),{})};return p&&Array.isArray(p)&&(["strong","emphasized"].every($=>p.includes($))?e=t`<span
						class=${o({[`${s}-strong`]:!0,[`${s}-emphasized`]:!0})}
						>${e}</span
					>`:p.includes("strong")?e=t`<strong
						class=${o({[`${s}-strong`]:!0})}
						>${e}</strong
					>`:p.includes("emphasized")&&(e=t`<em
						class=${o({[`${s}-emphasized`]:!0})}
						>${e}</em
					>`)),r==="heading"?t`
					<h2 class=${o(m)} style=${u(f)} id=${n(i)}>${e}</h2>
				`:r==="body"?t`
					<p class=${o(m)} style=${u(f)} id=${n(i)}>${e}</p>
				`:r==="code"?t`
					<code class=${o(m)} style=${u(f)} id=${n(i)}>${e}</code>
				`:t`
				<span class=${o(m)} style=${u(f)} id=${n(i)}>${e}</span>
			`})}
	`;return t`${C(v>1,()=>t`<div class="spectrum-Typography" id=${n(i)}>${T}</div>`,()=>T)}`},E=A({Template:z});export{z as Template,E as TypographyGroup};
