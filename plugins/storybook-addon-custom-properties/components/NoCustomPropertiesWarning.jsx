import { Content, InlineAlert, Link } from "@adobe/react-spectrum";
import { styled } from "@storybook/theming";

const NoCustomPropertiesWrapper = styled.div(({ theme }) => ({
	padding: "10px 15px",
	lineHeight: "20px",
	boxShadow: `${theme.appBorderColor} 0 -1px 0 0 inset`,
}));

export const NoCustomPropertiesWarning = () => (
	<NoCustomPropertiesWrapper>
    <InlineAlert variant="info">
      <Content>
        This story is not configured with the custom properties add-on.&nbsp;
        <Link
          href="https://github.com/kickstartds/storybook-addon-component-tokens/blob/main/README.md#usage"
          target="_blank"
          cancel={false}
        >
          Learn how to add definitions to your story »
        </Link>
      </Content>
    </InlineAlert>
	</NoCustomPropertiesWrapper>
);
