import { styled } from "@storybook/theming";
import { fetchToken } from "./utilities";

export const Heading = styled.h3`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    color: inherit;
    font-size: ${({ size }) => fetchToken(`font-size-${size === "xs" ? 200 : size === "s" ? 300 : size === "l" ? 700 : size === "xl" ? 900 : 500}`, 22)};
    -webkit-font-smoothing: antialiased;
    margin: 0;

    > strong {
        font-weight: 900;
    }

    > em {
        font-style: ${() => fetchToken(
            "heading-sans-serif-emphasized-font-style",
            "italic",
        )};
    }
`;

export const Body = styled.div(
	({ theme, size = "m", scale = "desktop", ...props }) => {
		const fontSize =
			size === "s" ? 100 : size === "l" ? 300 : size === "xl" ? 400 : 200;
		return {
			fontFamily: theme.typography.fontFamily,
			fontWeight: "normal",
			color: "inherit",
			fontSize: fetchToken(`font-size-${fontSize}`, 16),
			"> strong": {
				fontWeight: 900, // @todo: this uses "black" which isn't valid CSS
			},
			"> em": {
				fontStyle: fetchToken(
					"body-sans-serif-emphasized-font-style",
					"italic",
				),
			},
			...props,
		};
	},
);

export const Code = styled.div(
	({ theme, size = "m", scale = "desktop", ...props }) => {
		return {
			fontFamily: theme.typography.fonts.mono,
			fontStyle: fetchToken("code-font-style", "normal"),
			fontWeight: fetchToken("code-font-weight", "400"),
			color: fetchToken("code-color", "inherit"),
			fontSize: fetchToken(`code-size-${size}`, 22),
			backgroundColor: props => props.backgroundColor ?? fetchToken("gray-200"),
			padding: "0.125em 0.25em",
			borderRadius: "0.125em",
			...props,
		};
	},
);

export const LinkableHeading = styled(Heading)`
    margin: 20px 0 8px;
    padding: 0;
    cursor: text;
    position: relative;
    padding-bottom: 4px;
    border-bottom: 1px solid hsla(203, 50%, 30%, 0.15);

    a {
        float: left;
        line-height: inherit;
        padding-right: 10px;
        margin-left: -24px;
        color: inherit;
    }

    a::after {
        display: inline-block;
        content: "";
        visibility: hidden;
        background: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M11.841%202.159a2.25%202.25%200%2000-3.182%200l-2.5%202.5a2.25%202.25%200%20000%203.182.5.5%200%2001-.707.707%203.25%203.25%200%20010-4.596l2.5-2.5a3.25%203.25%200%20014.596%204.596l-2.063%202.063a4.27%204.27%200%2000-.094-1.32l1.45-1.45a2.25%202.25%200%20000-3.182z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M3.61%207.21c-.1-.434-.132-.88-.095-1.321L1.452%207.952a3.25%203.25%200%20104.596%204.596l2.5-2.5a3.25%203.25%200%20000-4.596.5.5%200%2000-.707.707%202.25%202.25%200%20010%203.182l-2.5%202.5A2.25%202.25%200%20112.159%208.66l1.45-1.45z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E');
        block-size: 14px;
        inline-size: 14px;
    }

    &:hover a::after {
        visibility: visible;
    }
`;
