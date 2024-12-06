import { Content, Heading, InlineAlert } from "@react-spectrum/s2";

/**
 * An informative message to display in the panel.
 * @param {import("@react-spectrum/s2").InlineAlert} settings
 * @returns
 */
export const PanelMessage = ({
	variant = "informative",
	heading,
	children,
}) => (
	<InlineAlert variant={variant} className="docblock-emptyblock sb-unstyled" styles={{ margin: "1rem" }}>
		{heading && <Heading>{heading}</Heading>}
		<Content>{children}</Content>
	</InlineAlert>
);
