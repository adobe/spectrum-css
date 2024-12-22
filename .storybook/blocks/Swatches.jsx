import { styled } from "@storybook/theming";

export const SwatchGroupLabel = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 16px;
	align-self: flex-start;
	justify-content: center;
	text-wrap: nowrap;
	inline-size: max-content;
	block-size: ${props => props.size ?? 32}px;
	color: ${props => `var(--spectrum-neutral-subdued-content-color-default, ${props.theme.defaultText})`};
`;

export const SwatchSet = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2px;
	color: ${props => `var(--spectrum-neutral-subdued-content-color-default, ${props.theme.defaultText})`};
`;

export const Swatch = styled.div`
	position: relative;
	inline-size: var(--swatch-size, ${props => props.size ?? 32}px);
	block-size: var(--swatch-size, ${props => props.size ?? 32}px);
	outline: none;
	user-select: none;

	&::before {
		position: absolute;
		inset: 0;
		inline-size: 100%;
		block-size: 100%;
		content: "";
		opacity: 1;

		border: 1px solid rgba(0, 0, 0, 51%);

		border-radius: ${props => `${props.theme.appBorderRadius}px` ?? `var(--spectrum-corner-radius-100, 4px)`};
		${props => props.background && `background: ${props.background};`}
	}

	.spectrum--dark &::before,
	.spectrum--darkest &::before {
		border-color: rgba(255, 255, 255, 51%);
	}
`;

export const SwatchColors = styled.div`
	display: inline-flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: ${props => props.size > 0 ? (props.size * 0.2) : 8}px;
	align-items: flex-start;
	justify-content: flex-start;
`;

export const SwatchGroup = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	flex: 1;
`;
