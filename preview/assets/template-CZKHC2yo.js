import{T as l}from"./template-CU9oPm8-.js";import{Template as o}from"./template-Df-YB4AQ.js";import"./lit-element-CJjJlyWZ.js";import{x as a}from"./lit-html-BdGv-Ldy.js";import{a as c}from"./class-map-sTkR_Npl.js";import{o as t}from"./style-map-yx2CMG_J.js";const p=({rootClass:e="spectrum-ButtonGroup",customClasses:r=[],size:i="m",items:s=[],vertical:m=!1})=>a`
	<div
		class=${c({[e]:!0,[`${e}--size${i==null?void 0:i.toUpperCase()}`]:typeof i<"u",[`${e}--vertical`]:m,...r.reduce((d,n)=>({...d,[n]:!0}),{})})}
	>
		${s.map(d=>l({...d,size:i,customClasses:[`${e}-item`]}))}
	</div>
`,u=(e,r)=>["s","m","l","xl"].map(i=>a`
	<div>
		${o({semantics:"heading",size:"xs",content:[{s:"Small",m:"Medium",l:"Large",xl:"Extra-large"}[i]],customClasses:["chromatic-ignore"]})}
		<div>
			${p({...e,size:i})}
		</div>
	</div>
`),h=(e,r)=>a`
	<div
		style=${t({display:window.isChromatic()?"none":"contents"})}
	>
		${p(e)}
	</div>
	<div
		style=${t({display:window.isChromatic()?"flex":"none","flex-direction":"column","align-items":"flex-start",gap:"32px"})}
	>
		${[{heading:"Default"},{heading:"Vertical",vertical:!0}].map(({heading:i,...s})=>a`
				<div class="spectrum-Typography">
					${o({semantics:"heading",size:"s",content:[i]})}
					<div
						style=${t({padding:"12px",border:"1px solid var(--spectrum-gray-200)","border-radius":"4px"})}
					>
						${p({...e,...s})}
					</div>
				</div>
			`)}
		<div class="spectrum-Typography">
			${o({semantics:"heading",size:"s",content:["Sizing"]})}
			<div
				style=${t({display:"flex","flex-direction":"column","align-items":"flex-start",gap:"16px",padding:"12px",border:"1px solid var(--spectrum-gray-200)","border-radius":"4px"})}
			>
				${u(e)}
			</div>
		</div>
	</div>
`;export{h as B,p as T};
