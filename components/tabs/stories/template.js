import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { Template as Picker } from "@spectrum-css/picker/stories/template.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { html, literal } from "lit/static-html.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Tabs",
	customClasses = [],
	size = "m",
	orientation = "horizontal",
	isQuiet = false,
	isOpen = false,
	isEmphasized = false,
	isCompact = false,
	iconOnly = false,
	hasRightAlignedTabs = false,
	useAnchors = false,
	customStyles = {},
	content = [],
} = {}, context = {}) => {
	if (!content || !content.length) {
		console.warn("Tabs: content required");
		return html``;
	}

	const isVertical = orientation === "vertical";
	const isHorizontal = orientation === "horizontal";
	const isOverflow = orientation === "overflow";

	// Use div tags or anchor tags.
	// Note: Lit must use the 'literal' function for dynamic tags to work.
	const tabMarkup = useAnchors ? literal`a` : literal`div`;

	const selectionIndicator = (isSelected) => when(
		isSelected,
		() => html`
			<div
				class="${rootClass}-selectionIndicator"
				style=${ifDefined(
					styleMap({
						blockSize: isVertical ? "100%" : undefined,
						inlineSize: !isVertical ? "100%" : undefined,
						maxInlineSize: isOverflow ? "50px" : undefined,
						marginInlineStart: isVertical ? "calc(-1 * var(--spectrum-tabs-start-to-edge))" : undefined,
						insetInline: hasRightAlignedTabs ? "auto calc(-1* var(--spectrum-tabs-start-to-edge))" : undefined,
					})
				)}
			></div>`
	);

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--horizontal`]: isHorizontal || isOverflow,
				[`${rootClass}--vertical`]: isVertical,
				[`${rootClass}--vertical-right`]: hasRightAlignedTabs,
				[`${rootClass}--quiet`]: isQuiet,
				[`${rootClass}--emphasized`]: isEmphasized,
				[`${rootClass}--compact`]: isCompact,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(customStyles)}
		>
			${when(!isOverflow, () => repeat(
				content,
				(item) => item.id,
				(item) => {
					if (typeof item === "object") {
						return html`
							<${tabMarkup}
								class=${classMap({
									[`${rootClass}-item`]: true,
									"is-selected": item?.isSelected ?? false,
									"is-disabled": item?.isDisabled ?? false,
								})}
								tabindex="0"
							>
								${when(item.icon, () =>
									Icon({
										iconName: item.icon,
										size
									}, context)
								)}
								${when(item.label && !iconOnly, () => html`
									<span class="${rootClass}-itemLabel">
										${item.label}
									</span>
								`)}
								${selectionIndicator(item.isSelected)}
							</${tabMarkup}>
						`;
					}
					else {
						return item;
					}
				}
			), () => html`
				${Picker({
					isQuiet: true,
					size,
					isOpen,
					placeholder: !iconOnly ? content?.[0].label : Icon({ iconName: content?.[0].icon, size }, context),
					name: content?.[0].label,
					id: "tab-selector",
					customPopoverStyles: {
						insetBlockStart: "24px",
					},
					content: [
						() => Menu({
							selectionMode: "none",
							size,
							role: "listbox",
							subrole: "option",
							customStyles: { minWidth: "max-content" },
							items: content.filter((_, idx) => idx !== 0).map(item => {
								return {
									...item,
									iconName: item.icon,
									label: !iconOnly ? item.label : undefined,
								};
							}),
						}, context),
					]
				}, context)}
				${selectionIndicator(true)}
			`)}
		</div>
	`;
};

export const StatesGroup = (args, context) => html`
  <div style=${styleMap({
		"display": "flex",
		"flex-direction": `${args.orientation === "horizontal"
			? "column"
			: "row"}`,
		"gap": "32px",
	})}>
		<div style="display: flex; flex-direction: column;">
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Text"],
				customClasses: ["chromatic-ignore"],
			}, context)}
			${Template({
				...args,
				content: [
					{
						id: "tab-1",
						label: "Selected tab",
						isSelected: true,
					},
					{
						id: "tab-2",
						label: "Disabled tab",
						isDisabled: true,
					},
					{
						id: "tab-3",
						label: "Tab 3",
					},
				],
			}, context)}
		</div>

		<div style="display: flex; flex-direction: column;">
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Text and icon"],
				customClasses: ["chromatic-ignore"],
			}, context)}
			${Template({
				...args,
			}, context)}
		</div>

		<div style="display: flex; flex-direction: column;">
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Icon-only"],
				customClasses: ["chromatic-ignore"],
			})}
			${Template({
				...args,
				iconOnly: true,
				content: [
					{
						id: "tab-1",
						label: "Tab 1",
						icon: "Folder",
						isSelected: true,
					},
					{
						id: "tab-2",
						label: "Tab",
						icon: "Image",
						isDisabled: true,
					},
					{
						id: "tab-3",
						label: "Tab 3",
						icon: "Document",
					},
				],
			}, context)}
		</div>
  </div>
`;

export const TabsVariantsGroup = (args, context) => html`
  ${window.isChromatic() ? html`
		<div style=${styleMap({
		"display": "grid",
		"gap": "32px",
		"max-inline-size": `${args.orientation === "overflow" ? "100px" : ""}`,
	})}>
    <div style=${styleMap({
			"display": "flex",
			"flex-flow": "column nowrap",
			"gap": "8px",
		})}>
      ${Typography({
				semantics: "heading",
				size: "s",
				content: ["Basic/default"],
				customClasses: ["chromatic-ignore"],
			}, context)}
      ${StatesGroup({
				...args,
			}, context)}
    </div>

   	<div style=${styleMap({
			"display": "flex",
			"flex-flow": "column nowrap",
			"gap": "8px",
		})}>
     ${Typography({
				semantics: "heading",
				size: "s",
				content: ["Emphasized"],
				customClasses: ["chromatic-ignore"],
			}, context)}
      ${StatesGroup({
				...args,
				isEmphasized: true,
			}, context)}
    </div>

    <div style=${styleMap({
			"display": "flex",
			"flex-flow": "column nowrap",
			"gap": "8px",
		})}>
      ${Typography({
				semantics: "heading",
				size: "s",
				content: ["Quiet"],
				customClasses: ["chromatic-ignore"],
			}, context)}
      ${StatesGroup({
				...args,
				isQuiet: true
			}, context)}
    </div>

    <div style=${styleMap({
			"display": "flex",
			"flex-flow": "column nowrap",
			"gap": "8px",
		})}>
			${Typography({
				semantics: "heading",
				size: "s",
				content: ["Quiet + compact"],
				customClasses: ["chromatic-ignore"],
			}, context)}
			${StatesGroup({
				...args,
				isQuiet: true,
				isCompact: true,
			}, context)}
    </div>

  </div>
` : Template({
			...args,
			content: [
				{
					id: "tab-1",
					label: "Tab 1",
					isSelected: true,
				},
				{
					id: "tab-2",
					label: "Tab 2",
					isDisabled: true,
				},
				{
					id: "tab-3",
					label: "Tab 3",
				},
			],
		},context)}
`;

export const SizingGroup = (args, context) => html `
	${["s", "m", "l", "xl"].map((size) => html`
		<div style=${styleMap({
			"display": "flex",
			"flex-direction": "column",
			"gap": "8px",
		})}>
			${Typography({
				semantics: "detail",
				size: "s",
				content: [
					{
						s: "Small",
						m: "Medium (default)",
						l: "Large",
						xl: "Extra-large",
					}[size]
				],
			}, context)}
			<div style=${styleMap({
				"margin": "0 0 32px",
			})}>
				${Template({
					...args,
					size,
				}, context)}
			</div>
		</div>
	`)}
`;

export const OverflowGroup = (args, context) => html `
	<div style=${styleMap({
		"display": "flex",
		"flex-direction": "column",
		"gap": "32px",
	})}>
		<div style="${styleMap({
			"display": "flex",
			"flex-direction": "column",
			"gap": "8px",
		})}">
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Default with overflow"],
				customClasses: ["chromatic-ignore"],
			})}

			<div style="${styleMap({
				"display": "flex",
				"flex-direction": "column",
				"gap": "16px",
			})}">
				${Template({
					...args,
				}, context)}
				${Template({
					...args,
					isEmphasized: true,
				}, context)}
				${Template({
					...args,
					content: [
						{
							id: "tab-1",
							label: "Tab 1",
							icon: "Folder",
							isSelected: true,
						},
						{
							id: "tab-2",
							label: "Tab 2",
							icon: "Image",
						},
						{
							id: "tab-3",
							label: "Tab 3",
							icon: "Document",
							isDisabled: true,
						},
					],
					iconOnly: true,
				}, context)}
				${Template({
					...args,
					isQuiet: true,
					isEmphasized: true,
					content: [
						{
							id: "tab-1",
							label: "Tab 1",
							icon: "Folder",
							isSelected: true,
						},
						{
							id: "tab-2",
							label: "Tab 2",
							icon: "Image",
						},
						{
							id: "tab-3",
							label: "Tab 3",
							icon: "Document",
							isDisabled: true,
						},
					],
					iconOnly: true,
				}, context)}
			</div>
		</div>

		<div style="${styleMap({
			"display": "flex",
			"flex-direction": "column",
			"gap": "8px",
		})}">
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Compact with overflow"],
				customClasses: ["chromatic-ignore"],
			})}
			<div style="${styleMap({
				"display": "flex",
				"flex-direction": "column",
				"gap": "16px",
			})}">
				${Template({
					...args,
					isCompact: true,
					isQuiet: true,
				})}
				${Template({
					...args,
					isCompact: true,
					isQuiet: true,
					isEmphasized: true,
				}, context)}
				${Template({
					...args,
					isCompact: true,
					isQuiet: true,
					content: [
						{
							id: "tab-1",
							label: "Tab 1",
							icon: "Folder",
							isSelected: true,
						},
						{
							id: "tab-2",
							label: "Tab 2",
							icon: "Image",
						},
						{
							id: "tab-3",
							label: "Tab 3",
							icon: "Document",
							isDisabled: true,
						},
					],
					iconOnly: true,
				}, context)}
				${Template({
					...args,
					isCompact: true,
					isQuiet: true,
					isEmphasized: true,
					content: [
						{
							id: "tab-1",
							label: "Tab 1",
							icon: "Folder",
							isSelected: true,
						},
						{
							id: "tab-2",
							label: "Tab 2",
							icon: "Image",
						},
						{
							id: "tab-3",
							label: "Tab 3",
							icon: "Document",
							isDisabled: true,
						},
					],
					iconOnly: true,
				}, context)}
			</div>
		</div>
	</div>
`;

export const VerticalGroup = (args, context) => html `
	<div style=${styleMap({
		"display": "flex",
		"flex-flow": "row wrap",
		"gap": "64px",
	})}>
		<div>
			${Typography({
				semantics: "detail",
				size: "m",
				content: ["Default text"],
				customClasses: ["chromatic-ignore"],
			})}
			<div style=${styleMap({
				"display": "flex",
				"flex-flow": "column nowrap",
				"gap": "8px",
				"margin": "0 0 16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Default"],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
					content: [
						{
							id: "tab-1",
							label: "Selected tab",
							isSelected: true,
						},
						{
							id: "tab-2",
							label: "Disabled tab",
							isDisabled: true,
						},
						{
							id: "tab-3",
							label: "Tab 3",
						},
					],
				}, context)}
			</div>

			<div style=${styleMap({
				"display": "flex",
				"flex-flow": "column nowrap",
				"gap": "8px",
				"margin": "0 0 16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Compact"],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
					isCompact: true,
					isQuiet: true,
					content: [
						{
							id: "tab-1",
							label: "Selected tab",
							isSelected: true,
						},
						{
							id: "tab-2",
							label: "Disabled tab",
							isDisabled: true,
						},
						{
							id: "tab-3",
							label: "Tab 3",
						},
					],
				}, context)}
			</div>

			<div style=${styleMap({
				"display": "flex",
				"flex-flow": "column nowrap",
				"gap": "8px",
				"margin": "0 0 16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Emphasized"],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
					isEmphasized: true,
					content: [
						{
							id: "tab-1",
							label: "Selected tab",
							isSelected: true,
						},
						{
							id: "tab-2",
							label: "Disabled tab",
							isDisabled: true,
						},
						{
							id: "tab-3",
							label: "Tab 3",
						},
					],
				}, context)}
			</div>

			<div style=${styleMap({
				"display": "flex",
				"flex-flow": "column nowrap",
				"gap": "8px",
				"margin": "0 0 16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Compact, emphasized"],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
					isCompact: true,
					isQuiet: true,
					isEmphasized: true,
					content: [
						{
							id: "tab-1",
							label: "Selected tab",
							isSelected: true,
						},
						{
							id: "tab-2",
							label: "Disabled tab",
							isDisabled: true,
						},
						{
							id: "tab-3",
							label: "Tab 3",
						},
					],
				}, context)}
			</div>
		</div>

		<div>
			${Typography({
				semantics: "detail",
				size: "m",
				content: ["With icons and text"],
				customClasses: ["chromatic-ignore"],
			})}
			<div style=${styleMap({
				"display": "flex",
				"flex-flow": "column nowrap",
				"gap": "8px",
				"margin": "0 0 16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Default"],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
				}, context)}
			</div>

			<div style=${styleMap({
				"display": "flex",
				"flex-flow": "column nowrap",
				"gap": "8px",
				"margin": "0 0 16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Compact"],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
					isCompact: true,
					isQuiet: true,
				}, context)}
			</div>

			<div style=${styleMap({
				"display": "flex",
				"flex-flow": "column nowrap",
				"gap": "8px",
				"margin": "0 0 16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Emphasized"],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
					isEmphasized: true,
				}, context)}
			</div>

			<div style=${styleMap({
				"display": "flex",
				"flex-flow": "column nowrap",
				"gap": "8px",
				"margin": "0 0 16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Compact, emphasized"],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
					isCompact: true,
					isQuiet: true,
					isEmphasized: true,
				}, context)}
			</div>
		</div>

		<div>
			${Typography({
					semantics: "detail",
					size: "m",
					content: ["Icon-only"],
					customClasses: ["chromatic-ignore"],
				})}
			<div style=${styleMap({
				"display": "flex",
				"flex-flow": "column nowrap",
				"gap": "8px",
				"margin": "0 0 16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Default"],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
					iconOnly: true,
				}, context)}
			</div>

			<div style=${styleMap({
				"display": "flex",
				"flex-flow": "column nowrap",
				"gap": "8px",
				"margin": "0 0 16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Compact"],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
					isCompact: true,
					isQuiet: true,
					iconOnly: true,
				}, context)}
			</div>

			<div style=${styleMap({
				"display": "flex",
				"flex-flow": "column nowrap",
				"gap": "8px",
				"margin": "0 0 16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Emphasized"],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
					isEmphasized: true,
					iconOnly: true,
				}, context)}
			</div>

			<div style=${styleMap({
				"display": "flex",
				"flex-flow": "column nowrap",
				"gap": "8px",
				"margin": "0 0 16px",
			})}>
				${Typography({
					semantics: "detail",
					size: "s",
					content: ["Compact, emphasized"],
					customClasses: ["chromatic-ignore"],
				})}
				${Template({
					...args,
					isCompact: true,
					isQuiet: true,
					isEmphasized: true,
					iconOnly: true,
				}, context)}
			</div>
		</div>
	</div>
`;

export const QuietGroup = (args, context) => html`
  <div style=${styleMap({
		"display": "flex",
		"flex-direction": "column",
		"gap": "32px",
	})}>
		<div style="display: flex; flex-direction: column;">
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Text"],
				customClasses: ["chromatic-ignore"],
			}, context)}
			${Template({
				...args,
				content: [
					{
						id: "tab-1",
						label: "Tab 1",
						isSelected: true,
					},
					{
						id: "tab-2",
						label: "Tab 2",
						isDisabled: true,
					},
					{
						id: "tab-3",
						label: "Tab 3",
					},
				],
			}, context)}
		</div>

		<div style="display: flex; flex-direction: column;">
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Text and icon"],
				customClasses: ["chromatic-ignore"],
			}, context)}
			${Template({
				...args,
			}, context)}
		</div>

		<div style="display: flex; flex-direction: column;">
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Emphasized"],
				customClasses: ["chromatic-ignore"],
			}, context)}
			${Template({
				...args,
				isEmphasized: true,
			}, context)}
		</div>

		<div style="display: flex; flex-direction: column;">
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Icon-only"],
				customClasses: ["chromatic-ignore"],
			})}
			${Template({
				...args,
				iconOnly: true,
			}, context)}
		</div>

		<div style="display: flex; flex-direction: column;">
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Compact"],
				customClasses: ["chromatic-ignore"],
			})}
			${Template({
				...args,
				isCompact: true,
			}, context)}
		</div>

			<div style="display: flex; flex-direction: column;">
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Compact, icon-only"],
				customClasses: ["chromatic-ignore"],
			})}
			${Template({
				...args,
				isCompact: true,
				iconOnly: true,
			}, context)}
		</div>
  </div>
`;

export const CompactGroup = (args, context) => html`
	<div style=${styleMap({
		"display": "flex",
		"flex-direction": "column",
		"gap": "32px",
	})}>
		<div style="display: flex; flex-direction: column;">
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Text"],
				customClasses: ["chromatic-ignore"],
			}, context)}
			${Template({
				...args,
				content: [
					{
						id: "tab-1",
						label: "Selected tab",
						isSelected: true,
					},
					{
						id: "tab-2",
						label: "Disabled tab",
						isDisabled: true,
					},
					{
						id: "tab-3",
						label: "Tab 3",
					},
				],
			}, context)}
		</div>

		<div style="display: flex; flex-direction: column;">
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Text and icon"],
				customClasses: ["chromatic-ignore"],
			}, context)}
			${Template({
				...args,
			}, context)}
		</div>

		<div style="display: flex; flex-direction: column;">
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Emphasized"],
				customClasses: ["chromatic-ignore"],
			}, context)}
			${Template({
				...args,
				isEmphasized: true,
			}, context)}
		</div>

		<div style="display: flex; flex-direction: column;">
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Icon-only"],
				customClasses: ["chromatic-ignore"],
			})}
			${Template({
				...args,
				iconOnly: true,
				content: [
					{
						id: "tab-1",
						label: "Selected tab",
						icon: "Folder",
						isSelected: true,
					},
					{
						id: "tab-2",
						label: "Disabled tab",
						icon: "Image",
						isDisabled: true,
					},
					{
						id: "tab-3",
						label: "Tab 3",
						icon: "Document",
					},
				],
			}, context)}
		</div>

		<div style="display: flex; flex-direction: column;">
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Emphasized, icon-only"],
				customClasses: ["chromatic-ignore"],
			})}
			${Template({
				...args,
				iconOnly: true,
				isEmphasized: true,
				content: [
					{
						id: "tab-1",
						label: "Selected tab",
						icon: "Folder",
						isSelected: true,
					},
					{
						id: "tab-2",
						label: "Disabled tab",
						icon: "Image",
						isDisabled: true,
					},
					{
						id: "tab-3",
						label: "Tab 3",
						icon: "Document",
					},
				],
			}, context)}
		</div>
  </div>
`;
