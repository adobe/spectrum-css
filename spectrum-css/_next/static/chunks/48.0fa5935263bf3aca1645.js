(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{LSX4:function(e,n){const r=[{name:"Link",examples:[{id:"link",name:"Standard",status:"Verified",markup:'<a href="#" class="spectrum-Link">Link using spectrum-Link</a>\n'},{id:"link-quiet",name:"Link - Quiet",status:"Verified",markup:'<p> This uses <a href="#" class="spectrum-Link spectrum-Link--quiet">spectrum-Link--quiet</a>.</p>\n'},{id:"link-over-background",name:"Link - Over Background",status:"Verified",markup:'<div style="background-color: rgb(15, 121, 125); padding: 15px 20px; display: inline-block;">\n  <p class="spectrum-Body" style="color: rgb(255, 255, 255);">\n    Hello, this is my <a href="#" class="spectrum-Link spectrum-Link--overBackground"> spectrum-Link--overBackground</a>. This is just filler text, but if you keep reading maybe something good will happen.\n  </p>\n</div>\n'},{id:"link-disabled",name:"Link - Disabled",status:"Deprecated",details:"Do not use disabled links.",markup:'<p>This uses <a class="spectrum-Link is-disabled">is-disabled</a>.</p>\n'},{id:"link-subtle",name:"Link - Subtle",status:"Deprecated",details:"Use `quiet` instead.",markup:'<p> This uses <a href="#" class="spectrum-Link spectrum-Link--subtle">spectrum-Link--subtle</a>.</p>\n'}],packageName:"link",indexCSS:".spectrum-Link {\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n  text-decoration: none;\n  transition: color var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;\n  outline: none;\n}\n\n.spectrum-Link:hover {\n    text-decoration: underline;\n  }\n\n.spectrum-Link.focus-ring {\n    text-decoration: underline;\n  }\n\n.spectrum-Link.focus-ring {\n    text-decoration: underline;\n    -webkit-text-decoration-style: double;\n            text-decoration-style: double;\n  }\n\n.spectrum-Link.is-disabled {\n    cursor: default;\n    pointer-events: none;\n  }\n\n.spectrum-Link.is-disabled:hover,\n    .spectrum-Link.is-disabled:focus {\n      text-decoration: none;\n    }\n\n.spectrum-Link--subtle,\n/** @deprecated */.spectrum-Link--quiet {\n  text-decoration: underline;\n}\n\n.spectrum-Link--overBackground {\n  text-decoration: underline;\n}\n\n.spectrum-Link {\n  color: var(--spectrum-link-text-color, var(--spectrum-global-color-blue-600));\n}\n\n.spectrum-Link:hover {\n    color: var(--spectrum-link-text-color-hover, var(--spectrum-global-color-blue-600));\n  }\n\n.spectrum-Link:active {\n    color: var(--spectrum-link-text-color-down, var(--spectrum-global-color-blue-700));\n  }\n\n.spectrum-Link.focus-ring {\n    color: var(--spectrum-link-text-color-key-focus, var(--spectrum-alias-text-color-key-focus));\n  }\n\n.spectrum-Link.is-disabled {\n    color: var(--spectrum-link-text-color-disabled, var(--spectrum-alias-text-color-disabled));\n  }\n\n.spectrum-Link--quiet,\n/** @deprecated */.spectrum-Link--subtle {\n  color: inherit;\n}\n\n.spectrum-Link--quiet:hover, .spectrum-Link--subtle:hover {\n    color: inherit;\n  }\n\n.spectrum-Link--quiet:active, .spectrum-Link--subtle:active {\n    color: inherit;\n  }\n\n.spectrum-Link--quiet:focus, .spectrum-Link--subtle:focus {\n    color: inherit;\n  }\n\n.spectrum-Link--overBackground {\n  color: var(--spectrum-link-over-background-text-color, var(--spectrum-global-color-static-white));\n}\n\n.spectrum-Link--overBackground:hover {\n    color: var(--spectrum-link-over-background-text-color-hover, var(--spectrum-global-color-static-white));\n  }\n\n.spectrum-Link--overBackground:active {\n    color: var(--spectrum-link-over-background-text-color-down, var(--spectrum-global-color-static-white));\n  }\n\n.spectrum-Link--overBackground:focus {\n    color: var(--spectrum-link-over-background-text-color-key-focus, var(--spectrum-global-color-static-white));\n  }\n\n.spectrum-Link--overBackground.is-disabled {\n    color: var(--spectrum-link-over-background-text-color-disabled, rgba(255,255,255,0.5));\n  }\n",peerDependencies:{"@spectrum-css/vars":"^2.0.0"},peerCSS:""}];e.exports=r.length<=1?r[0]:r}}]);