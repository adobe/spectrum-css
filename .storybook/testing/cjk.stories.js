
import { Template as AssetCardTemplate } from "../../components/assetcard/stories/template.js";
import { ButtonsWithIconOptions } from "../../components/button/stories/template.js";
import { TagGroups } from "../../components/tag/stories//tag.test.js";
import { ToastGroup } from "../../components/toast/stories/toast.test.js";
import { TypographyGroup } from "../../components/typography/stories/typography.test.js";

const longPhrase = "無料で作りましょう"; // Let's make it for free
const shortPhrase = "買う"; // Purchase

export default {
    title: "CJK Stories",
    tags: ["!autodocs"],
}

export const Button = ButtonsWithIconOptions.bind({});
Button.args = {
	label: longPhrase,
};
Button.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Toast = ToastGroup.bind({});
Toast.args = {
	message: longPhrase,
	inlineButtonLabel: shortPhrase,
	variant: "neutral"
};

export const Tag = TagGroups.bind({});
Tag.args = {label: shortPhrase};

export const AssetCard = AssetCardTemplate.bind({});
AssetCard.args = {
	title: 'Instagram ' + longPhrase,
	headerContent: "39:02",
	exampleImage: "square",
};


export const Typography = TypographyGroup.bind({});
Typography.args = {
	content: [
		{
			semantics: "heading",
			content: ['Heading ' + longPhrase],
		},
		{
			semantics: "code",
			content: ['Code ' + longPhrase],
		},
		{
			semantics: "detail",
			content: ['detail ' + longPhrase],
		},
		{
            semantics: "body",
			content: [
'Body ' + longPhrase			],
		},
	],
};
