import{T as k}from"./template-Cug7zURX.js";import{a as A,o as I,n as T,g as x}from"./decorator-DlLJAwnS.js";import{x as y}from"./lit-element-Cr8ugfRm.js";import{o as r}from"./if-defined-C5sRMNk0.js";const N=({rootClass:a="spectrum-FieldLabel",customClasses:o=[],customStyles:d={},size:e="m",label:s,id:i=x("fieldlabel"),testId:c,forInput:m,alignment:l,isDisabled:$,isRequired:f}={},p={})=>{s||console.warn("FieldLabel: please provide a label for the field label.");let t="Asterisk100";switch(e){case"s":t="Asterisk100";break;case"l":t="Asterisk200";break;case"xl":t="Asterisk300";break;default:t="Asterisk100"}const n=k({size:e,iconName:t,setName:"ui",customClasses:[`${a}-UIIcon`,`${a}-requiredIcon`]},p);return y`
		<label
			class=${A({[a]:!0,[`${a}--size${e==null?void 0:e.toUpperCase()}`]:typeof e<"u",[`${a}--${l}`]:typeof l<"u","is-disabled":$,...o.reduce((u,b)=>({...u,[b]:!0}),{})})}
			style=${I(d)}
			id=${r(i)}
			data-testid=${r(c)}
			for=${r(m)}
		>
			${s}
			${T(f,()=>n)}
		</label>
	`};export{N as T};
