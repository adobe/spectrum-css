import"./decorator-Dl7o6wQR.js";import{V as h}from"./utilities-BisrhIqU.js";import{Template as z}from"./template-Df-YB4AQ.js";import"./lit-element-CJjJlyWZ.js";import{x as i}from"./lit-html-BdGv-Ldy.js";import{a as A}from"./class-map-sTkR_Npl.js";import{o as m}from"./if-defined-Bo9G1hLT.js";import{o as p}from"./style-map-yx2CMG_J.js";import{n}from"./when-BR7zwNJC.js";const l=({rootClass:e="spectrum-Avatar",image:s="example-ava.png",altText:a,isDisabled:t=!1,isFocused:r=!1,size:o="700",hasLink:c,id:u,customClasses:$=[]}={},f={})=>{const{updateArgs:d}=f;return i`
		<div
			class=${A({[e]:!0,[`${e}--size${o}`]:!0,"is-disabled":t,"is-focused":r,...$.reduce((g,v)=>({...g,[v]:!0}),{})})}
			id=${m(u)}
			@focusin=${()=>{d({isFocused:!0})}}
			@focusout=${()=>{d({isFocused:!1})}}
		>
			${n(c,()=>i`
					<a class="spectrum-Avatar-link" href="#">
						<img class="${e}-image" data-chromatic="ignore" src=${s} alt=${m(a)} />
					</a>
					`)}
			${n(!c,()=>i`
					<img class="${e}-image" data-chromatic="ignore" src=${s} alt=${m(a)} />
				`)}
		</div>
	`},V=(e,s)=>{var t,r;const a=((r=(t=s==null?void 0:s.argTypes)==null?void 0:t.size)==null?void 0:r.options)??[];return a.length?i`
		<div
			style=${p({display:"flex",gap:"16px"})}
		>
			${a.map(o=>i`
				<div
					style=${p({display:"flex",gap:"16px","flex-direction":"column","align-items":"center"})}
				>
					${l({...e,size:o})}
					${z({semantics:"heading",size:"xs",content:[o],customClasses:["chromatic-ignore"]})}
				</div>
			`)}
		</div>
	`:i`<div>No size options</div>`},w=h({Template:l,stateData:[{testHeading:"Not linked",hasLink:!1},{testHeading:"Disabled",isDisabled:!0},{testHeading:"Focused",isFocused:!0}],sizeDirection:"row"});export{w as A,l as T,V as a};
