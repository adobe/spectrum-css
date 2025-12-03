import{x as S}from"./lit-element-Cr8ugfRm.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=Symbol.for(""),d=t=>{if((t==null?void 0:t.r)===p)return t==null?void 0:t._$litStatic$},v=(t,...e)=>({_$litStatic$:e.reduce((a,o,l)=>a+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+t[l+1],t[0]),r:p}),f=new Map,h=t=>(e,...a)=>{const o=a.length;let l,r;const s=[],u=[];let n,i=0,c=!1;for(;i<o;){for(n=e[i];i<o&&(r=a[i],(l=d(r))!==void 0);)n+=l+e[++i],c=!0;i!==o&&u.push(r),s.push(n),i++}if(i===o&&s.push(e[o]),c){const $=s.join("$$lit$$");(e=f.get($))===void 0&&(s.raw=s,f.set($,e=s)),a=u}return t(e,...a)},_=h(S);export{v as i,_ as u};
