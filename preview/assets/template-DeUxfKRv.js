import{k as t}from"./lit-element-C96egxJg.js";import{R as m,s as x}from"./template-C7mrcesf.js";import{u as k}from"./upperCase-0eNr0WW7.js";import{c as y}from"./capitalize-D60SaZ2R.js";const T=({rootClass:e="spectrum-Divider",size:p="m",tag:c="hr",staticColor:r,vertical:d=!1,minDimensionValues:f,customClasses:$=[],customStyles:i={}}={})=>c==="hr"?t` <hr
			class=${m({[e]:!0,[`${e}--size${k(p)}`]:typeof p<"u",[`${e}--vertical`]:d===!0,[`${e}--static${y(r)}`]:typeof r<"u",...$.reduce((n,u)=>({...n,[u]:!0}),{})})}
			style=${x({"min-inline-size":f&&!d?"200px":void 0,"min-block-size":f&&d?"20px":void 0,...i})}
			role="separator"
		/>`:t` <div
		class=${m({[e]:!0,[`${e}--size${p==null?void 0:p.toUpperCase()}`]:typeof p<"u",[`${e}--vertical`]:d===!0,[`${e}--static${y(r)}`]:typeof r<"u",...$.reduce((n,u)=>({...n,[u]:!0}),{})})}
		style=${x({"min-inline-size":f&&!d?"200px":void 0,"min-block-size":f&&d?"20px":void 0,...i})}
		role="separator"
	></div>`;export{T};
