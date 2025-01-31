import{T as k}from"./template-B52pacml.js";import{R as A,s as I,n as T,g as y}from"./decorator-BtqfPG1l.js";import{k as R}from"./lit-element-C96egxJg.js";import{t as s}from"./if-defined-B5hOZ0d5.js";const L=({rootClass:a="spectrum-FieldLabel",customClasses:d=[],customStyles:i={},size:e="m",label:r,id:o=y("fieldlabel"),testId:c,forInput:m,alignment:l,isDisabled:n,isRequired:f}={},p={})=>{r||console.warn("FieldLabel: please provide a label for the field label.");let t="Asterisk100";switch(e){case"s":t="Asterisk100";break;case"l":t="Asterisk200";break;case"xl":t="Asterisk300";break;default:t="Asterisk100"}const $=k({size:e,iconName:t,setName:"ui",customClasses:[`${a}-UIIcon`,`${a}-requiredIcon`]},p);return R`
		<label
			class=${A({[a]:!0,[`${a}--size${e==null?void 0:e.toUpperCase()}`]:typeof e<"u",[`${a}--${l}`]:typeof l<"u","is-disabled":n,...d.reduce((u,b)=>({...u,[b]:!0}),{})})}
			style=${I(i)}
			id=${s(o)}
			data-testid=${s(c)}
			for=${s(m)}
		>
			${r}
			${T(f,()=>$)}
		</label>
	`};export{L as T};
