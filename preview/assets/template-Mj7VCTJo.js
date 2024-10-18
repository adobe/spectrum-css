import{T as k}from"./template-CNHi6PLw.js";import{R as A,s as I,a as t,n as T,g as y}from"./template-C7mrcesf.js";import{k as R}from"./lit-element-C96egxJg.js";const F=({rootClass:a="spectrum-FieldLabel",customClasses:d=[],customStyles:i={},size:e="m",label:r,id:o=y("fieldlabel"),testId:c,forInput:n,alignment:l,isDisabled:$,isRequired:f}={},m={})=>{r||console.warn("FieldLabel: please provide a label for the field label.");let s="Asterisk100";switch(e){case"s":s="Asterisk100";break;case"l":s="Asterisk200";break;case"xl":s="Asterisk300";break;default:s="Asterisk100"}const p=k({size:e,iconName:s,setName:"ui",customClasses:[`${a}-UIIcon`,`${a}-requiredIcon`]},m);return R`
		<label
			class=${A({[a]:!0,[`${a}--size${e==null?void 0:e.toUpperCase()}`]:typeof e<"u",[`${a}--${l}`]:typeof l<"u","is-disabled":$,...d.reduce((u,b)=>({...u,[b]:!0}),{})})}
			style=${I(i)}
			id=${t(o)}
			data-testid=${t(c)}
			for=${t(n)}
		>
			${r}
			${T(f,()=>p)}
		</label>
	`};export{F as T};
