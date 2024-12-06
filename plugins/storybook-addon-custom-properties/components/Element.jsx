import { styled } from "@storybook/theming";
import React from "react";
import HighlightToggle from "./HighlightToggle";

const Item = styled.li({
	fontWeight: 600,
});

const ItemTitle = styled.span(({ theme }) => ({
	borderBottom: `1px solid ${theme.appBorderColor}`,
	width: "100%",
	display: "flex",
	paddingBottom: 6,
	marginBottom: 6,
	justifyContent: "space-between",
}));

const HighlightToggleElement = styled.span({
	fontWeight: "normal",
	alignSelf: "center",
	paddingRight: 15,
	input: {
		margin: 0,
		display: "block",
	},
});

/**
 * @typedef {Object} NodeResult
 * @property {Array} any - The 'any' rules.
 * @property {Array} all - The 'all' rules.
 * @property {Array} none - The 'none' rules.
 * @property {Array} target - The target elements.
 */

/**
 * @typedef {Object} ElementProps
 * @property {NodeResult} element - The element to display.
 * @property {string} type - The type of rule.
 */

/**
 * @param {ElementProps} props - The props for the Element component.
 * @returns {JSX.Element} - The Element component.
 */
export const Element = ({ selector, props }) => {
	console.log("Is this where we fetch the element?", selector);
	// Get the element from the DOM using the selector
	// const element = document.querySelector(selector);
	const element = { target: [] };
	const highlightToggleId = element.target[0];

	return (
		<>
			<Item>
				<ItemTitle>
					{element.target[0]}
					<HighlightToggleElement>
						<HighlightToggle
							toggleId={highlightToggleId}
							elementsToHighlight={[element]}
						/>
					</HighlightToggleElement>
				</ItemTitle>
			</Item>
			<PropertiesTable {...props} inAddonPanel={true} />
		</>
	);
};
