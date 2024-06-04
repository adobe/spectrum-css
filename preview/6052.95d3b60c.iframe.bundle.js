(globalThis.webpackChunk_spectrum_css_preview=globalThis.webpackChunk_spectrum_css_preview||[]).push([[6052],{"../components/menu/stories/menu.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Collapsible:()=>Collapsible,Default:()=>Default,MenuItemOnly:()=>MenuItemOnly,MenuWithVariants:()=>MenuWithVariants,TraySubmenu:()=>TraySubmenu,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _spectrum_css_icon_stories_icon_stories_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../components/icon/stories/icon.stories.js"),_spectrum_css_typography_stories_template_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../components/typography/stories/template.js"),lit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/lit/index.js"),lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/lit/directives/style-map.js"),_template__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../components/menu/stories/template.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Menu",component:"Menu",argTypes:{selectionMode:{name:"Selection Mode",description:"Determines whether items in the menu can be selected, and how many",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Selection"},options:["none","single","multiple"],control:"select"},size:{name:"Size",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["s","m","l","xl"],control:"select"},shouldTruncate:{name:"Truncate menu item label",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},maxInlineSize:{name:"Max Inline Size",type:{name:"text",required:!0},table:{type:{summary:"text"},category:"Component"},control:"text",if:{arg:"shouldTruncate",truthy:!0}},labelledby:{table:{disable:!0}},items:{table:{disable:!0}},role:{table:{disable:!0}},subrole:{table:{disable:!0}}},args:{rootClass:"spectrum-Menu",selectionMode:"none",size:"m",shouldTruncate:!1,maxInlineSize:"150px"},parameters:{actions:{handles:["click .spectrum-Menu-item"]},docs:{story:{height:"300px"},description:{component:"A menu is used for creating a menu list. The various elements inside a menu can be: a menu group, a menu item, or a menu divider. Often a menu will appear in a popover so that it displays as a togglig menu."}}},decorators:[(Story,context)=>window.isChromatic()?lit__WEBPACK_IMPORTED_MODULE_2__.qy`
                <style>
                    .spectrum-Detail { display: inline-block; }
                    .spectrum-Typography > div {
                        border: 1px solid var(--spectrum-gray-200);
                        border-radius: 4px;
                        padding: 0 1em 1em;
                        /* Why seafoam? Because it separates it from the component styles. */
                        --mod-detail-font-color: var(--spectrum-seafoam-900);
                    }
                </style>
                <div
                    style=${(0,lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_3__.W)({display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"1rem","--mod-detail-margin-end":".3rem"})}
                >
                    ${Story(context)}
                </div>
            `:Story(context)]},MenuWithVariants=args=>window.isChromatic()?(args=>[{stateTitle:"No selection",args:{...args,selectionMode:"none"}},{stateTitle:"With dividers",args:{...args,selectionMode:"none",hasDividers:!0}},{stateTitle:"Single selection",args:{...args,selectionMode:"single"}},{stateTitle:"Multi selection",args:{...args,selectionMode:"multiple"}}].map((item=>lit__WEBPACK_IMPORTED_MODULE_2__.qy`
    <style>
        /* For this testing preview, this is the heading closest to the component and therefore needs a separate color */
        .spectrum-Detail { --mod-detail-font-color: var(--spectrum-seafoam-900); }
    </style>
    <div class="spectrum-Typography">
        ${(0,_spectrum_css_typography_stories_template_js__WEBPACK_IMPORTED_MODULE_1__.B)({semantics:"detail",size:"l",content:[item.stateTitle]})}
        <div>
            ${(0,_template__WEBPACK_IMPORTED_MODULE_4__.Bj)({...args,...item.args})}
        </div>
    </div>

`)))(args):(0,_template__WEBPACK_IMPORTED_MODULE_4__.Bj)(args);MenuWithVariants.argTypes={hasDividers:{name:"Has dividers",description:"Shows dividers between sections",table:{type:{summary:"boolean"},category:"Component"},control:"boolean"}},MenuWithVariants.args={role:"listbox",subrole:"option",customStyles:{maxWidth:"400px"},selectionMode:"none",hasDividers:!1,items:[{idx:1,heading:"Menu header - Menu with icons",id:"menu-heading-with-icons",items:[{label:"Default menu item",iconName:"Export"},{label:"Focused menu item",iconName:"FolderOpen",isFocused:!0},{label:"A menu item with a longer label that causes the text to wrap to the next line",iconName:"Send"},{label:"Menu item with no icon"},{label:"Disabled menu item",iconName:"Share",isDisabled:!0}]},{type:"divider"},{idx:2,heading:"Menu header - With descriptions and icons",id:"menu-heading-short-desc",items:[{label:"Menu item with description",description:"Short description"},{label:"Selected item",description:"This item is checked if single-select or multi-select mode is turned on",isSelected:!0},{label:"Selected item with icon",iconName:"Cloud",description:"This item is checked if single-select or multi-select mode is turned on",isSelected:!0}]},{type:"divider"},{idx:3,heading:"Menu header - With actions, icons, short descriptions, and values and longer header text that wraps",id:"menu-heading-desc-icon-value",hasActions:!0,items:[{label:"Menu item with action and a longer label that truncates if it is long enough to truncate",iconName:"Cut",description:"This item has a switch if multi-select mode is turned on."},{label:"Menu item with action",iconName:"Copy",description:"In multi-select mode, this item will be switched on. In single-select mode, this item will be checked.",isSelected:!0},{label:"Menu item with action and value",iconName:"Paste",description:"This item has a value. If multi-select mode is turned on, it also has a switch and the value can be used to label the switch.",value:"⌘ C"},{label:"Disabled menu item with action",iconName:"Archive",description:"Disabled menu item with description and icon",isDisabled:!0}]},{idx:4,heading:"Menu header - These menu items have drill-ins for a submenu",id:"menu-heading-drillin",items:[{label:"Menu item with drill-in",isDrillIn:!0},{label:"Menu item with drill-in and open submenu (not rendered)",isDrillIn:!0,isOpen:!0},{label:"Menu item with drill-in and value",isDrillIn:!0,value:"Value"},{label:"Disabled menu item with drill-in",isDrillIn:!0,isDisabled:!0}]}]};const Collapsible=_template__WEBPACK_IMPORTED_MODULE_4__.Bj.bind({});Collapsible.argTypes={selectionMode:{table:{disable:!0}}},Collapsible.args={shouldTruncate:!0,items:[{label:"Web Design",iconName:"DesktopAndMobile",isCollapsible:!0,isOpen:!0,items:[{label:"Web Large",itemValue:"1920 x 1080"},{label:"Web Medium",itemValue:"1366 x 768"},{label:"Web Small",itemValue:"1280 x 800"}]},{label:"Mobile",isCollapsible:!0,isOpen:!0,items:[{label:"Web Large",itemValue:"1920 x 1080"},{label:"Web Medium",itemValue:"1366 x 768"},{label:"Web Small",itemValue:"1280 x 800"}]},{label:"Tablet",iconName:"DeviceTablet",isCollapsible:!0,items:[{label:"Defaults to not visible within closed item"}]},{label:"Social Media",iconName:"ShareAndroid",isCollapsible:!0,items:[{label:"Defaults to not visible within closed item"}]},{label:"Watches",iconName:"Watch",isCollapsible:!0,items:[{label:"Defaults to not visible within closed item"}]}]};const TraySubmenu=_template__WEBPACK_IMPORTED_MODULE_4__.Bj.bind({});TraySubmenu.argTypes={selectionMode:{table:{disable:!0}},isTraySubmenu:{name:"Is tray submenu",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"}},TraySubmenu.args={selectionMode:"multiple",customStyles:{"--mod-menu-inline-size":"100%"},isTraySubmenu:!0,items:[{heading:"Snap to",items:[{label:"Guides",isSelected:!0},{label:"Grid"},{label:"Rulers"}]}]};const Sizes=args=>["s","m","l","xl"].map((size=>lit__WEBPACK_IMPORTED_MODULE_2__.qy`
    <div>
        ${(0,_spectrum_css_typography_stories_template_js__WEBPACK_IMPORTED_MODULE_1__.B)({semantics:"detail",size:"s",content:[{s:"Small",m:"Medium",l:"Large",xl:"Extra-large"}[size]]})}
        <div>
            ${(0,_template__WEBPACK_IMPORTED_MODULE_4__.Bj)({...args,size})}
        </div>
    </div>
`)),States=args=>{const{titlePrefix,firstAndLast}=args;let stateData=[{stateTitle:"Default",args:{}},{stateTitle:"Hover",args:{...args,isItemHovered:!0}},{stateTitle:"Active (Down)",args:{...args,isItemActive:!0}},{stateTitle:"Focused",args:{...args,isItemFocused:!0}},{stateTitle:"Disabled",args:{...args,isDisabled:!0}}];return firstAndLast&&(stateData=[stateData[0],stateData[stateData.length-1]]),stateData.map((stateItem=>lit__WEBPACK_IMPORTED_MODULE_2__.qy`
        <div>
            ${(0,_spectrum_css_typography_stories_template_js__WEBPACK_IMPORTED_MODULE_1__.B)({semantics:"detail",size:"s",content:[`${titlePrefix?titlePrefix+", ":""}${stateItem.stateTitle}`]})}
            <div>
                ${(0,_template__WEBPACK_IMPORTED_MODULE_4__.Bj)({...args,...stateItem.args})}
            </div>
        </div>
    `))},SingleItemSelectedStates=args=>lit__WEBPACK_IMPORTED_MODULE_2__.qy`
            ${States({...args,items:[{label:"Not selected",isSelected:!1,...args.items[0]}],titlePrefix:"Not selected",firstAndLast:!0})}
            ${States({...args,items:[{label:"Selected item",isSelected:!0,...args.items[0]}],titlePrefix:"Selected",firstAndLast:!0})}
    `,MultiCheckboxSelectedStates=args=>lit__WEBPACK_IMPORTED_MODULE_2__.qy`
        ${States({...args,items:[{label:"Not selected",isSelected:!1,...args.items[0]}],titlePrefix:"Not Selected",firstAndLast:!0})}
        ${States({...args,items:[{label:"Selected item",isSelected:!0,...args.items[0]}],titlePrefix:"Selected",firstAndLast:!0})}
    `,WithValueStates=args=>{const baseValueArgs={...args,hasValue:!0,singleItemValue:"Value"};return[{stateTitle:"With value",args:{...baseValueArgs}},{stateTitle:"With value, disabled",args:{...baseValueArgs,isDisabled:!0}},{stateTitle:"With value and switch",args:{...baseValueArgs,hasActions:!0}},{stateTitle:"With value, truncated label",args:{...baseValueArgs,shouldTruncate:!0,maxInlineSize:"195px",items:[{label:"Truncated label on menu item"}]}}].map((valueItem=>lit__WEBPACK_IMPORTED_MODULE_2__.qy`
        <div>
        ${(0,_spectrum_css_typography_stories_template_js__WEBPACK_IMPORTED_MODULE_1__.B)({semantics:"detail",size:"s",content:[valueItem.stateTitle]})}
            <div>
                ${(0,_template__WEBPACK_IMPORTED_MODULE_4__.Bj)({...args,...valueItem.args})}
            </div>
        </div>
    `))},MenuItemOnly=args=>window.isChromatic()?(args=>[{sectionTitle:"No selection",sectionMarkup:States(args)},{sectionTitle:"With item description and truncation",sectionMarkup:States({...args,shouldTruncate:!0,maxInlineSize:"150px",items:[{label:"This is a longer menu item that will truncate",description:"This is a description of the menu item"}]})},{sectionTitle:"Single selection",sectionMarkup:SingleItemSelectedStates({...args,selectionMode:"single"})},{sectionTitle:"Single selection with icon",sectionMarkup:SingleItemSelectedStates({...args,selectionMode:"single",items:[{label:"With icon",iconName:"Share"}]})},{sectionTitle:"Multi-selection with checkboxes",sectionMarkup:MultiCheckboxSelectedStates({...args,selectionMode:"multiple"})},{sectionTitle:"Multi-selection with checkboxes and icon",sectionMarkup:MultiCheckboxSelectedStates({...args,selectionMode:"multiple",items:[{label:"With icon",iconName:"Share"}]})},{sectionTitle:"Multi-selection with switches",sectionMarkup:MultiCheckboxSelectedStates({...args,selectionMode:"multiple",hasActions:!0})},{sectionTitle:"Multi-selection with switches and switch label",sectionMarkup:MultiCheckboxSelectedStates({...args,selectionMode:"multiple",hasActions:!0,items:[{label:"Menu item",value:"switch label"}]})},{sectionTitle:"With values",sectionMarkup:WithValueStates(args)},{sectionTitle:"Sizes",sectionMarkup:Sizes({...args,selectionMode:"single",items:[{label:"With sizing",isSelected:!0,iconName:"Share"}]})}].map((sectionItem=>lit__WEBPACK_IMPORTED_MODULE_2__.qy`
        <div class="spectrum-Typography">
        ${(0,_spectrum_css_typography_stories_template_js__WEBPACK_IMPORTED_MODULE_1__.B)({semantics:"detail",size:"l",content:[sectionItem.sectionTitle]})}
        <div
            style=${(0,lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_3__.W)({display:"flex",flexWrap:"wrap",gap:"1.5rem"})}
        >
            ${sectionItem.sectionMarkup}
        </div>
    </div>
    `)))(args):(0,_template__WEBPACK_IMPORTED_MODULE_4__.Bj)(args);MenuItemOnly.args={items:[{label:"Hello menu item"}],hasActions:!1,hasValue:!1,hasItemDescription:!1,isDisabled:!1,isItemActive:!1,isItemFocused:!1,isItemHovered:!1,isItemSelected:!1,singleItemDescription:"Menu item description",singleItemValue:"Value"},MenuItemOnly.argTypes={isItemActive:{table:{disable:!0}},isItemFocused:{table:{disable:!0}},isItemHovered:{table:{disable:!0}},isDisabled:{name:"Menu item is disabled",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},itemIcon:{..._spectrum_css_icon_stories_icon_stories_js__WEBPACK_IMPORTED_MODULE_0__.default?.argTypes?.iconName??{},if:!1},isItemSelected:{name:"Menu item is selected",description:"Selected state when single or multi-select mode is turned on",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Selection",control:"boolean"},if:{arg:"selectionMode",not:{eq:"none"}}},hasItemDescription:{name:"Has menu item description",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Content",control:"boolean"}},hasActions:{name:"Has switches",description:"If multiple selection is enabled, show switches instead of checkboxes to show which items have been selected",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Selection"},control:"boolean",if:{arg:"selectionMode",eq:"multiple"}},singleItemDescription:{name:"Menu item description for single menu item",type:{name:"text",required:!0},table:{type:{summary:"text"},category:"Content"},control:"text",if:{arg:"hasItemDescription",truthy:!0}},hasValue:{name:"Has value text",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Content",control:"boolean"}},singleItemValue:{name:"Menu item value for single menu item",type:{name:"text",required:!0},table:{type:{summary:"text"},category:"Content"},control:"text",if:{arg:"hasValue",truthy:!0}}};const Default=_template__WEBPACK_IMPORTED_MODULE_4__.Bj.bind({});Default.storyName="Standard with Dividers",Default.tags=["docs-only"],Default.parameters={chromatic:{disableSnapshot:!0}},Default.args={items:[{label:"Deselect"},{label:"Select inverse"},{label:"Feather"},{label:"Select and mask"},{type:"divider"},{label:"Save selection"},{label:"Make work path",isDisabled:!0}],hasDividers:!0},MenuWithVariants.parameters={...MenuWithVariants.parameters,docs:{...MenuWithVariants.parameters?.docs,source:{originalSource:"args => window.isChromatic() ? ChromaticMenuWithVariants(args) : Template(args)",...MenuWithVariants.parameters?.docs?.source}}},MenuItemOnly.parameters={...MenuItemOnly.parameters,docs:{...MenuItemOnly.parameters?.docs,source:{originalSource:"args => window.isChromatic() ? ChromaticMenuItem(args) : Template(args)",...MenuItemOnly.parameters?.docs?.source}}};const __namedExportsOrder=["MenuWithVariants","Collapsible","TraySubmenu","MenuItemOnly","Default"]},"../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/checkbox/index.css":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"assets/css/components/checkbox/index.css"},"../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/divider/index.css":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"assets/css/components/divider/index.css"},"../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/menu/index.css":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"assets/css/components/menu/index.css"},"../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/modal/index.css":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"assets/css/components/modal/index.css"},"../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/switch/index.css":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"assets/css/components/switch/index.css"},"../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/tray/index.css":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"assets/css/components/tray/index.css"},"../components/checkbox/stories/template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>Template});var lit=__webpack_require__("../node_modules/lit/index.js"),class_map=__webpack_require__("../node_modules/lit/directives/class-map.js"),if_defined=__webpack_require__("../node_modules/lit/directives/if-defined.js"),style_map=__webpack_require__("../node_modules/lit/directives/style-map.js"),when=__webpack_require__("../node_modules/lit-html/directives/when.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),template=__webpack_require__("../components/icon/stories/template.js"),injectStylesIntoLinkTag=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js"),injectStylesIntoLinkTag_default=__webpack_require__.n(injectStylesIntoLinkTag),insertBySelector=__webpack_require__("../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),cjs_ruleSet_1_rules_10_use_2_components_checkbox=__webpack_require__("../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/checkbox/index.css"),checkbox_default=__webpack_require__.n(cjs_ruleSet_1_rules_10_use_2_components_checkbox),options={attributes:{"data-source":"processed"}};options.insert=insertBySelector_default().bind(null,"head");injectStylesIntoLinkTag_default()(checkbox_default(),options);const Template=({rootClass="spectrum-Checkbox",size="m",label,isChecked=!1,isEmphasized=!1,isIndeterminate=!1,isDisabled=!1,isInvalid=!1,isReadOnly=!1,title,value,id,ariaLabelledby,customStyles={},customClasses=[],...globals})=>{const[,updateArgs]=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useArgs)();let iconSize="75";switch(size){case"s":iconSize="50";break;case"l":iconSize="100";break;case"xl":iconSize="200";break;default:iconSize="75"}return lit.qy`
		<label
			class=${(0,class_map.H)({[rootClass]:!0,[`${rootClass}--size${size?.toUpperCase()}`]:void 0!==size,[`${rootClass}--emphasized`]:isEmphasized,"is-indeterminate":isIndeterminate,"is-disabled":isDisabled||isReadOnly,"is-invalid":isInvalid,"is-readOnly":isReadOnly,...customClasses.reduce(((a,c)=>({...a,[c]:!0})),{})})}
			id=${(0,if_defined.J)(id)}
			style=${(0,if_defined.J)((0,style_map.W)(customStyles))}
		>
			<input
				type="checkbox"
				class="${rootClass}-input"
				aria-labelledby=${(0,if_defined.J)(ariaLabelledby)}
				?checked=${isChecked}
				?disabled=${isDisabled||isReadOnly}
				title=${(0,if_defined.J)(title)}
				value=${(0,if_defined.J)(value)}
				@change=${()=>{isDisabled||updateArgs({isChecked:!isChecked})}}
				id=${(0,if_defined.J)(id?`${id}-input`:void 0)}
			/>
			<span class="${rootClass}-box">
				${(0,template.B)({...globals,size,iconName:`Checkmark${iconSize}`,customClasses:[`${rootClass}-checkmark`]})}
				${(0,template.B)({...globals,size,iconName:`Dash${iconSize}`,customClasses:[`${rootClass}-partialCheckmark`]})}
			</span>
			${(0,when.z)(label,(()=>lit.qy`<span class="${rootClass}-label">${label}</span>`))}
		</label>
	`}},"../components/divider/stories/template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>Template});var lit=__webpack_require__("../node_modules/lit/index.js"),class_map=__webpack_require__("../node_modules/lit/directives/class-map.js"),upperCase=__webpack_require__("../node_modules/lodash-es/upperCase.js"),capitalize=__webpack_require__("../node_modules/lodash-es/capitalize.js"),lowerCase=__webpack_require__("../node_modules/lodash-es/lowerCase.js"),injectStylesIntoLinkTag=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js"),injectStylesIntoLinkTag_default=__webpack_require__.n(injectStylesIntoLinkTag),insertBySelector=__webpack_require__("../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),divider=__webpack_require__("../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/divider/index.css"),divider_default=__webpack_require__.n(divider),options={attributes:{"data-source":"processed"}};options.insert=insertBySelector_default().bind(null,"head");injectStylesIntoLinkTag_default()(divider_default(),options);const Template=({rootClass="spectrum-Divider",size="m",tag="hr",staticColor,vertical=!1,customClasses=[]})=>"hr"===tag?lit.qy`
    <hr
      class=${(0,class_map.H)({[rootClass]:!0,[`${rootClass}--size${(0,upperCase.A)(size)}`]:void 0!==size,[`${rootClass}--vertical`]:!0===vertical,[`${rootClass}--static${(0,capitalize.A)((0,lowerCase.A)(staticColor))}`]:void 0!==staticColor,...customClasses.reduce(((a,c)=>({...a,[c]:!0})),{})})}
      style=${!0===vertical?"min-height: 20px; height: auto; align-self: stretch":""}
      role="separator"
      >
    </hr>`:lit.qy` <div
		class=${(0,class_map.H)({[rootClass]:!0,[`${rootClass}--size${size?.toUpperCase()}`]:void 0!==size,[`${rootClass}--vertical`]:!0===vertical,[`${rootClass}--static${(0,capitalize.A)((0,lowerCase.A)(staticColor))}`]:void 0!==staticColor,...customClasses.reduce(((a,c)=>({...a,[c]:!0})),{})})}
		style=${!0===vertical?"min-height: 20px; height: auto; align-self: stretch":""}
		role="separator"
	></div>`},"../components/menu/stories/template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Bj:()=>Template});var lit=__webpack_require__("../node_modules/lit/index.js"),class_map=__webpack_require__("../node_modules/lit/directives/class-map.js"),if_defined=__webpack_require__("../node_modules/lit/directives/if-defined.js"),style_map=__webpack_require__("../node_modules/lit/directives/style-map.js"),when=__webpack_require__("../node_modules/lit-html/directives/when.js"),template=__webpack_require__("../components/checkbox/stories/template.js"),stories_template=__webpack_require__("../components/divider/stories/template.js"),icon_stories_template=__webpack_require__("../components/icon/stories/template.js"),switch_stories_template=__webpack_require__("../components/switch/stories/template.js"),tray_stories_template=__webpack_require__("../components/tray/stories/template.js"),injectStylesIntoLinkTag=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js"),injectStylesIntoLinkTag_default=__webpack_require__.n(injectStylesIntoLinkTag),insertBySelector=__webpack_require__("../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),menu=__webpack_require__("../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/menu/index.css"),menu_default=__webpack_require__.n(menu),options={attributes:{"data-source":"processed"}};options.insert=insertBySelector_default().bind(null,"head");injectStylesIntoLinkTag_default()(menu_default(),options);const MenuItem=({description,iconName,hasActions,id,idx=0,isActive=!1,isCollapsible=!1,isDisabled=!1,isDrillIn=!1,isFocused=!1,isHighlighted=!1,isHovered=!1,isOpen=!1,isSelected=!1,items=[],label,role="menuitem",rootClass,shouldTruncate,size,selectionMode,value,...globals})=>lit.qy`
  <li
    class=${(0,class_map.H)({[`${rootClass}`]:!0,"is-highlighted":isHighlighted,"is-active":isActive,"is-focus-visible":isFocused,"is-selected":isSelected,"is-disabled":isDisabled,"is-hover":isHovered,[`${rootClass}--drillIn`]:isDrillIn,[`${rootClass}--collapsible`]:isCollapsible,"is-open":isOpen})}
    id=${(0,if_defined.J)(id)}
    role=${(0,if_defined.J)(role)}
    aria-selected=${isSelected?"true":"false"}
    aria-disabled=${isDisabled?"true":"false"}
    tabindex=${(0,if_defined.J)(isDisabled?void 0:"0")}>
      ${(({hasActions,idx,isCollapsible,isDisabled,isSelected,rootClass,selectionMode,size,...globals})=>isCollapsible?lit.qy`
      ${(0,icon_stories_template.B)({...globals,iconName:"ChevronRight100",size,customClasses:[`${rootClass}Icon`,"spectrum-Menu-chevron"]})}
    `:"single"==selectionMode&&isSelected?lit.qy`
    ${(0,icon_stories_template.B)({...globals,iconName:"Checkmark100",size,customClasses:[`${rootClass}Icon`,"spectrum-Menu-checkmark"]})}`:"multiple"!=selectionMode||hasActions?null:lit.qy`
      ${(0,template.B)({...globals,size,isEmphasized:!0,isChecked:isSelected,isDisabled,id:`menu-checkbox-${idx}`,customClasses:[`${rootClass}Checkbox`]})}`)({hasActions,idx,isCollapsible,isDisabled,isSelected,rootClass,selectionMode,size,...globals})}
      ${(({iconName,rootClass,size,...globals})=>{if(iconName)return lit.qy`
    ${(0,icon_stories_template.B)({...globals,iconName,size,customClasses:[`${rootClass}Icon`,`${rootClass}Icon--workflowIcon`]})}
    `})({iconName,rootClass,size,...globals})}
      ${(({hasActions,isCollapsible,label,rootClass,shouldTruncate})=>isCollapsible?lit.qy`<span class="spectrum-Menu-sectionHeading ${shouldTruncate?"spectrum-Menu-itemLabel--truncate":""}">${label}</span>`:lit.qy`<span class=${(0,class_map.H)({[`${rootClass}Label`]:!0,"spectrum-Switch-label":hasActions,"spectrum-Menu-itemLabel--truncate":shouldTruncate})}>
      ${label}
    </span>`)({hasActions,isCollapsible,label,rootClass,shouldTruncate})}
      ${(0,when.z)(description,(()=>(({description,rootClass})=>lit.qy`<span class="${rootClass}Description">${description}</span>`)({description,rootClass})))}
      ${(({hasActions,idx,isDisabled,isDrillIn,isSelected,rootClass,selectionMode,size,value,...globals})=>lit.qy`
${value?lit.qy`<span class="${rootClass}Value">${value}</span>`:""}
${hasActions&&"multiple"==selectionMode?lit.qy`<div class="${rootClass}Actions">
  ${(0,switch_stories_template.B)({...globals,size,isChecked:isSelected,isDisabled,label:null,id:`menu-switch-${idx}`,customClasses:[`${rootClass}Switch`]})}
    </div>`:""}
  ${isDrillIn?lit.qy`${(0,icon_stories_template.B)({...globals,iconName:"ChevronRight100",size,customClasses:[`${rootClass}Icon`,"spectrum-Menu-chevron"]})}`:""}
`)({hasActions,idx,isDisabled,isDrillIn,isSelected,rootClass,selectionMode,size,value,...globals})}
      ${isCollapsible&&items.length>0?Template({...globals,items,isOpen,size,shouldTruncate}):""}
  </li>
`,backArrowWithScale=(size="m",iconName="ArrowLeft")=>{switch(size){case"s":return`${iconName}200`;case"l":return`${iconName}400`;case"xl":return`${iconName}500`;default:return`${iconName}300`}},Template=({customClasses=[],customStyles={},hasActions,hasDividers=!1,id,isDisabled=!1,isItemActive=!1,isItemFocused=!1,isItemHovered=!1,isItemSelected=!1,isOpen=!1,isTraySubmenu=!1,itemIcon,items=[],labelledby,maxInlineSize,role="menu",rootClass="spectrum-Menu",selectionMode="none",singleItemDescription,singleItemValue,shouldTruncate,size,subrole="menuitem",...globals})=>{const menuMarkup=lit.qy`
    <ul
      class=${(0,class_map.H)({[rootClass]:!0,[`${rootClass}--size${size?.toUpperCase()}`]:void 0!==size,"is-selectable":"single"===selectionMode,"is-selectableMultiple":"multiple"===selectionMode,"is-open":isOpen,...customClasses.reduce(((a,c)=>({...a,[c]:!0})),{})})}
      id=${(0,if_defined.J)(id)}
      role=${(0,if_defined.J)(role)}
      aria-labelledby=${(0,if_defined.J)(labelledby)}
      aria-disabled=${isDisabled?"true":"false"}
      style=${maxInlineSize?`max-inline-size: ${maxInlineSize};`:(0,style_map.W)(customStyles)}
    >
      ${items.map(((i,idx)=>"divider"===i.type?lit.qy`${hasDividers?(0,stories_template.B)({...globals,tag:"li",size:"s",customClasses:[`${rootClass}-divider`]}):""}`:i.heading||i.isTraySubmenu?(({heading,id,idx=0,items=[],isDisabled=!1,isSelectable=!1,isTraySubmenu=!1,shouldTruncate,maxInlineSize,subrole,size,...globals})=>lit.qy`
  <li
    id=${(0,if_defined.J)(id)}
    role="presentation"
  >
    ${isTraySubmenu?lit.qy`<div class="spectrum-Menu-back">
          <button aria-label="Back to previous menu" class="spectrum-Menu-backButton" type="button" role="menuitem">
            ${(0,icon_stories_template.B)({...globals,iconName:backArrowWithScale(size),size,customClasses:["spectrum-Menu-backIcon"]})}
          </button>
          ${heading?lit.qy`<span
              class="spectrum-Menu-sectionHeading ${shouldTruncate?"spectrum-Menu-itemLabel--truncate":""}"
              style=${maxInlineSize?`max-inline-size: ${maxInlineSize}px;`:""}
              id=${id??`menu-heading-category-${idx}`}
              aria-hidden="true"
              >${heading}</span
            >`:""}
        </div>`:lit.qy`<span
          class="spectrum-Menu-sectionHeading ${shouldTruncate?"spectrum-Menu-itemLabel--truncate":""}"
          id=${id??`menu-heading-category-${idx}`}
          aria-hidden="true"
        >${heading}</span>`}
    ${Template({...globals,role:"group",subrole,labelledby:id??`menu-heading-category-${idx}`,items,isDisabled,isSelectable,shouldTruncate:!0,maxInlineSize,size})}
  </li>
`)({...i,...globals,subrole,size,selectionMode,isTraySubmenu,shouldTruncate}):MenuItem({...globals,...i,description:singleItemDescription||i.description,hasActions,iconName:itemIcon||i.iconName,idx,isActive:isItemActive,isDisabled:isDisabled||i.isDisabled,isFocused:isItemFocused||i.isFocused,isHovered:isItemHovered,isSelected:isItemSelected||i.isSelected,role:subrole,rootClass:`${rootClass}-item`,selectionMode,shouldTruncate,size,value:singleItemValue||i.value})))}
    </ul>
  `;return isTraySubmenu?(0,tray_stories_template.B)({content:[menuMarkup]}):menuMarkup}},"../components/switch/stories/template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>Template});var lit=__webpack_require__("../node_modules/lit/index.js"),class_map=__webpack_require__("../node_modules/lit/directives/class-map.js"),if_defined=__webpack_require__("../node_modules/lit/directives/if-defined.js"),style_map=__webpack_require__("../node_modules/lit/directives/style-map.js"),injectStylesIntoLinkTag=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js"),injectStylesIntoLinkTag_default=__webpack_require__.n(injectStylesIntoLinkTag),insertBySelector=__webpack_require__("../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),cjs_ruleSet_1_rules_10_use_2_components_switch=__webpack_require__("../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/switch/index.css"),switch_default=__webpack_require__.n(cjs_ruleSet_1_rules_10_use_2_components_switch),options={attributes:{"data-source":"processed"}};options.insert=insertBySelector_default().bind(null,"head");injectStylesIntoLinkTag_default()(switch_default(),options);const Template=({rootClass="spectrum-Switch",size="m",label="Switch label",isDisabled,isChecked,isEmphasized,customClasses=[],customStyles={},id})=>{const inputId=id?`${id}-input`:"switch-onoff-0";return lit.qy`
		<div
			class=${(0,class_map.H)({[rootClass]:!0,[`${rootClass}--disabled`]:isDisabled,[`${rootClass}--emphasized`]:isEmphasized,[`${rootClass}--size${size?.toUpperCase()}`]:void 0!==size,...customClasses.reduce(((a,c)=>({...a,[c]:!0})),{})})}
			id=${(0,if_defined.J)(id)}
			style=${(0,if_defined.J)((0,style_map.W)(customStyles))}
		>
			<input
				type="checkbox"
				class="${rootClass}-input"
				id=${inputId}
				?disabled=${isDisabled}
				?checked=${isChecked}
			/>
			<span class="${rootClass}-switch"></span>
			${label?lit.qy`<label class="${rootClass}-label" for=${inputId}
						>${label}</label
				  >`:""}
		</div>
	`}},"../components/tray/stories/template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>Template});var lit=__webpack_require__("../node_modules/lit/index.js"),class_map=__webpack_require__("../node_modules/lit/directives/class-map.js"),if_defined=__webpack_require__("../node_modules/lit/directives/if-defined.js"),style_map=__webpack_require__("../node_modules/lit/directives/style-map.js"),injectStylesIntoLinkTag=(__webpack_require__("../components/modal/index.css"),__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js")),injectStylesIntoLinkTag_default=__webpack_require__.n(injectStylesIntoLinkTag),insertBySelector=__webpack_require__("../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),tray=__webpack_require__("../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/tray/index.css"),tray_default=__webpack_require__.n(tray),options={attributes:{"data-source":"processed"}};options.insert=insertBySelector_default().bind(null,"head");injectStylesIntoLinkTag_default()(tray_default(),options);const Template=({rootClass="spectrum-Tray",isOpen=!0,content=[],customClasses=["spectrum-Modal"],customStyles={},id})=>lit.qy`
		<div
			class="${rootClass}-wrapper"
			style=${(0,if_defined.J)((0,style_map.W)(customStyles))}
		>
			<div
				class=${(0,class_map.H)({[rootClass]:!0,"is-open":isOpen,...customClasses.reduce(((a,c)=>({...a,[c]:!0})),{})})}
				id=${(0,if_defined.J)(id)}
			>
			${content.map((c=>"function"==typeof c?c({}):c))}
			</div>
		</div>
	`},"../node_modules/lodash-es/upperCase.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("../node_modules/lodash-es/_createCompounder.js").A)((function(result,word,index){return result+(index?" ":"")+word.toUpperCase()}))},"../components/modal/index.css":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var _node_modules_style_loader_dist_runtime_injectStylesIntoLinkTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoLinkTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoLinkTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_file_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_10_use_2_index_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/modal/index.css"),_node_modules_file_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_10_use_2_index_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_file_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_10_use_2_index_css__WEBPACK_IMPORTED_MODULE_2__),options={attributes:{"data-source":"processed"}};options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_1___default().bind(null,"head");_node_modules_style_loader_dist_runtime_injectStylesIntoLinkTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_file_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_10_use_2_index_css__WEBPACK_IMPORTED_MODULE_2___default(),options)}}]);
//# sourceMappingURL=6052.95d3b60c.iframe.bundle.js.map