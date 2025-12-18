import{C as i,g as L,a as c,o as C,n as D}from"./decorator-DlLJAwnS.js";import{x as t}from"./lit-element-Cr8ugfRm.js";import{o as m}from"./if-defined-C5sRMNk0.js";import{c as V}from"./capitalize-A3_7q2MJ.js";const g=(n={},e={})=>{var A;let{rootClass:d,semantics:r,size:l="m",variant:p,weight:S,glyph:v="sans-serif",id:h=L("typography"),content:u=[],customClasses:k=[],customStyles:b={},skipLineBreak:H=!1,lang:j=((A=e.globals)==null?void 0:A.lang)||"en-US"}=n;if(Array.isArray(u)||(u=[u]),u.length===0)return t``;const I=u.map(a=>{if(typeof a!="string"&&typeof a=="object"&&!a._$litType$)return g({...n,...a},e);switch(l){case"xxs":["body","code"].includes(r)?l="xs":["detail"].includes(r)&&(l="s");break;case"xs":["detail"].includes(r)&&(l="s");break;case"xxl":["detail","code"].includes(r)&&(l="xl");break;case"xxxl":["detail","code"].includes(r)&&(l="xl");break}if(typeof r>"u")return t`
				<div
					class=${c({"spectrum-Typography":!0,...k.reduce(($,B)=>({...$,[B]:!0}),{})})}
					id=${m(h)}
				>${a}</div>`;d=`spectrum-${V(r)}`;const w={[d]:!0,[`${d}--${v}`]:typeof v<"u"&&v!=="sans-serif",[`${d}--size${l==null?void 0:l.toUpperCase()}`]:typeof l<"u",[`${d}--${S}`]:typeof S<"u",...k.reduce(($,B)=>({...$,[B]:!0}),{})};return p&&Array.isArray(p)&&(["strong","emphasized"].every($=>p.includes($))?a=t`<span
					class=${c({[`${d}-strong`]:!0,[`${d}-emphasized`]:!0})}
					>${a}</span
				>`:p.includes("strong")?a=t`<strong
					class=${c({[`${d}-strong`]:!0})}
					>${a}</strong
				>`:p.includes("emphasized")&&(a=t`<em
					class=${c({[`${d}-emphasized`]:!0})}
					>${a}</em
				>`)),r==="heading"?t`
				<h2 class=${c(w)} style=${C(b)} id=${m(h)}>${a}</h2>
			`:r==="body"?t`
				<p class=${c(w)} style=${C(b)} id=${m(h)}>${a}</p>
			`:r==="code"?t`
				<code class=${c(w)} style=${C(b)} id=${m(h)}>${a}</code>${D(!H,()=>t`<br/>`)}
			`:t`
			<span class=${c(w)} style=${C(b)} id=${m(h)}>${a}</span>${D(!H,()=>t`<br/>`)}
		`});return t`${D(u.length>1,()=>t`<div class="spectrum-Typography" id=${m(h)} lang=${m(j)}>${I}</div>`,()=>t`${I}`)}`},o=(n,e)=>i({direction:"column",withBorder:!1,wrapperStyles:{"row-gap":"0"},content:t`
		${g({...n,content:[{content:`Regular ${n.semantics} text`,customStyles:{"margin-block-start":"0"}},{content:`Emphasized ${n.semantics} text`,variant:["emphasized"]},{content:`Strong ${n.semantics} text`,variant:["strong"]},{content:`Strong & emphasized ${n.semantics} text`,variant:["strong","emphasized"]}]},e)}`},e),U=(n,e)=>i({withBorder:!1,content:t`
		${i({direction:"column",heading:"Default/sans serif",content:o({...n,semantics:"heading"},e)},e)}
		${i({direction:"column",heading:"Heavy sans serif",content:o({...n,semantics:"heading",weight:"heavy"},e)},e)}
		${i({direction:"column",heading:"Light sans serif",content:o({...n,semantics:"heading",weight:"light"},e)},e)}
		${i({direction:"column",heading:"Serif",content:o({...n,semantics:"heading",glyph:"serif"},e)},e)}
		${i({direction:"column",heading:"Heavy serif",content:o({...n,semantics:"heading",weight:"heavy",glyph:"serif"},e)},e)}
		${i({direction:"column",heading:"Light serif",content:o({...n,semantics:"heading",weight:"light",glyph:"serif"},e)},e)}
	`},e),P=(n,e)=>i({withBorder:!1,content:t`
		${i({direction:"column",heading:"Default/sans serif",content:o({...n,semantics:"body"},e)},e)}
		${i({direction:"column",heading:"Serif",content:o({...n,semantics:"body",glyph:"serif"},e)},e)}
	`},e),G=(n,e)=>i({withBorder:!1,content:t`
		${i({direction:"column",heading:"Default/sans serif",content:o({...n,semantics:"detail"},e)},e)}
		${i({direction:"column",heading:"Serif",content:o({...n,semantics:"detail",glyph:"serif"},e)},e)}
		${i({direction:"column",heading:"Light sans serif",content:o({...n,semantics:"detail",weight:"light"},e)},e)}
		${i({direction:"column",heading:"Light Serif",content:o({...n,semantics:"detail",glyph:"serif",weight:"light"},e)},e)}
	`},e),M=(n,e)=>i({withBorder:!1,content:t`
		${i({direction:"column",heading:"Default/sans serif",content:o({...n,semantics:"code"},e)},e)}
	`},e),E=(n,e)=>i({direction:"column",withBorder:!1,content:g({...n,content:[{semantics:"heading",content:"Lorem ipsum dolor",customStyles:{"margin-block-start":"0"}},{semantics:"body",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend est mollis ligula lobortis, tempus ultricies sapien lacinia. Nulla ut turpis velit. Sed finibus dapibus diam et sollicitudin. Phasellus in ipsum nec ante elementum congue eget in leo. Morbi eleifend justo non rutrum venenatis. Fusce cursus et lectus eu facilisis. Ut laoreet felis in magna dignissim feugiat. Ut et lectus finibus, aliquet mauris eu, tincidunt mi. Donec scelerisque orci sit amet venenatis luctus. Morbi eget lacus est. Duis iaculis magna quis aliquam lacinia."}]},e)},e),s=(n,e)=>i({direction:"column",withBorder:!1,wrapperStyles:{"row-gap":"0"},content:g({...n,content:[{content:t`${n.internationalizedContent.regular} (regular ${n.semantics})`,customStyles:{"margin-block-start":"0"}},{content:t`${n.internationalizedContent.emphasized} (emphasized ${n.semantics})`,variant:["emphasized"]},{content:t`${n.internationalizedContent.strong} (strong ${n.semantics})`,variant:["strong"]}]},e)},e),f={regular:"見出し",emphasized:"見出し 重点",strong:"見出し 強い強調"},y={regular:"القسم",emphasized:"القسم تشديد",strong:"القسم تأكيد قو"},z={regular:"גוף הדגשות",emphasized:"גוף חזק",strong:"גוף חזק"},F=(n,e)=>i({withBorder:!1,content:t`
		${i({direction:"column",heading:"Japanese (default)",content:s({...n,semantics:"heading",lang:"ja",internationalizedContent:f},e)},e)}
		${i({direction:"column",heading:"Japanese (heavy)",content:s({...n,semantics:"heading",lang:"ja",internationalizedContent:f,weight:"heavy"},e)},e)}
		${i({direction:"column",heading:"Japanese (light)",content:s({...n,semantics:"heading",lang:"ja",internationalizedContent:f,weight:"light"},e)},e)}
		${i({direction:"column",heading:"Arabic (default)",content:s({...n,semantics:"heading",lang:"ar",internationalizedContent:y},e)},e)}
		${i({direction:"column",heading:"Arabic (heavy)",content:s({...n,semantics:"heading",lang:"ar",internationalizedContent:y,weight:"heavy"},e)},e)}
		${i({direction:"column",heading:"Arabic (light)",content:s({...n,semantics:"heading",lang:"ar",internationalizedContent:y,weight:"light"},e)},e)}
		${i({direction:"column",heading:"Hebrew (default)",content:s({...n,semantics:"heading",lang:"he",internationalizedContent:z},e)},e)}
		${i({direction:"column",heading:"Hebrew (heavy)",content:s({...n,semantics:"heading",lang:"he",internationalizedContent:z,weight:"heavy"},e)},e)}
		${i({direction:"column",heading:"Hebrew (light)",content:s({...n,semantics:"heading",lang:"he",internationalizedContent:z,weight:"light"},e)},e)}
	`}),N=(n,e)=>i({withBorder:!1,content:t`
		${i({direction:"column",heading:"Japanese",content:s({...n,semantics:"body",lang:"ja",internationalizedContent:f},e)},e)}
		${i({direction:"column",heading:"Arabic",content:s({...n,semantics:"body",lang:"ar",internationalizedContent:y},e)},e)}
		${i({direction:"column",heading:"Hebrew",content:s({...n,semantics:"body",lang:"he",internationalizedContent:z},e)},e)}
	`}),_=(n,e)=>i({withBorder:!1,content:t`
		${i({direction:"column",heading:"Japanese",content:s({...n,semantics:"detail",lang:"ja",internationalizedContent:f},e)},e)}
		${i({direction:"column",heading:"Arabic",content:s({...n,semantics:"detail",lang:"ar",internationalizedContent:y},e)},e)}
		${i({direction:"column",heading:"Hebrew",content:s({...n,semantics:"detail",lang:"he",internationalizedContent:z},e)},e)}
	`},e),K=(n,e)=>i({withBorder:!1,wrapperStyles:{"row-gap":"0"},content:i({direction:"column",heading:"Japanese",wrapperStyles:{"row-gap":"0"},content:g({...n,content:["暗号","Code"],semantics:"code",lang:"ja",skipLineBreak:!0},e)},e)},e),O=(n,e)=>i({direction:"column",withBorder:!1,content:g({...n,lang:"ja",content:[{semantics:"heading",content:"見出し",customStyles:{"margin-block-start":"0"}},{semantics:"body",content:"見出しとよく対になる本文。"}]},e)},e);export{U as D,g as T,P as a,G as b,M as c,F as d,N as e,_ as f,K as g,E as h,O as i};
