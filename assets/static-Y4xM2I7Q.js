import{k as S}from"./lit-element-C96egxJg.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=Symbol.for(""),d=e=>{if((e==null?void 0:e.r)===p)return e==null?void 0:e._$litStatic$},m=(e,...t)=>({_$litStatic$:t.reduce((r,a,l)=>r+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(a)+e[l+1],e[0]),r:p}),f=new Map,h=e=>(t,...r)=>{const a=r.length;let l,o;const s=[],u=[];let n,i=0,$=!1;for(;i<a;){for(n=t[i];i<a&&(o=r[i],(l=d(o))!==void 0);)n+=l+t[++i],$=!0;i!==a&&u.push(o),s.push(n),i++}if(i===a&&s.push(t[a]),$){const c=s.join("$$lit$$");(t=f.get(c))===void 0&&(s.raw=s,f.set(c,t=s)),r=u}return e(t,...r)},v=h(S);export{m as e,v as k};
