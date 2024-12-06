/** @import type { FC, PropsWithChildren } from 'react' */
/** @import type { CssPropsContextStore } from '../types' */

import { useChannel } from "@storybook/manager-api";
import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";

import { HIGHLIGHT } from "@storybook/addon-highlight";
import { convert, themes } from "@storybook/theming";

/**
 * @type {import("react").Context<CssPropsContextStore>}
 */
export const CssPropsContext = createContext({
	highlighted: [],
	toggleHighlight: () => {},
	clearHighlights: () => {},
});

/**
 * @type {FC<PropsWithChildren>}
 */
export const CssPropsContextProvider = (props) => {
	const highlightColor = convert(themes.light).color.positive;
	/** @type {string[]} */
	const [highlighted, setHighlighted] = useState([]);

	/**
	 * @type {(target: string[], highlight: boolean) => void}
	 */
	const handleToggleHighlight = useCallback((target, highlight) => {
		setHighlighted((prevHighlighted) =>
			highlight
				? [...prevHighlighted, ...target]
				: prevHighlighted.filter((t) => !target.includes(t)),
		);
	}, []);

	const handleClearHighlights = useCallback(() => setHighlighted([]), []);

	const emit = useChannel({
    [HIGHLIGHT]: ({ elements, color }) => {
      handleToggleHighlight(elements, !!color);
    },
  }, [handleToggleHighlight]);

	useEffect(() => {
		emit(HIGHLIGHT, { elements: highlighted, color: highlightColor });
	}, [emit, highlighted, highlightColor]);

	return (
		<CssPropsContext.Provider
			value={{
				highlighted,
				toggleHighlight: handleToggleHighlight,
				clearHighlights: handleClearHighlights,
			}}
			{...props}
		/>
	);
};

export const useCssPropsContext = () => useContext(CssPropsContext);
