import{x as t}from"./lit-element-Cr8ugfRm.js";import{a as m,o as x}from"./decorator-DlLJAwnS.js";import{c as y}from"./capitalize-A3_7q2MJ.js";import{u as h}from"./upperCase-DWj-oqyk.js";const U=({rootClass:e="spectrum-Divider",size:p="m",tag:c="hr",staticColor:r,vertical:d=!1,minDimensionValues:f,customClasses:$=[],customStyles:i={}}={})=>c==="hr"?t` <hr
			class=${m({[e]:!0,[`${e}--size${h(p)}`]:typeof p<"u",[`${e}--vertical`]:d===!0,[`${e}--static${y(r)}`]:typeof r<"u",...$.reduce((n,u)=>({...n,[u]:!0}),{})})}
			style=${x({"min-inline-size":f&&!d?"200px":void 0,"min-block-size":f&&d?"20px":void 0,...i})}
			role="separator"
		/>`:t` <div
		class=${m({[e]:!0,[`${e}--size${p==null?void 0:p.toUpperCase()}`]:typeof p<"u",[`${e}--vertical`]:d===!0,[`${e}--static${y(r)}`]:typeof r<"u",...$.reduce((n,u)=>({...n,[u]:!0}),{})})}
		style=${x({"min-inline-size":f&&!d?"200px":void 0,"min-block-size":f&&d?"20px":void 0,...i})}
		role="separator"
	></div>`;export{U as T};
