import { AddonPanel } from "@storybook/components";
import { addons, types } from "@storybook/manager-api";
import { CssPropsPanel } from "./components/CssPropsPanel";
import { ADDON_ID, PARAM_KEY } from "./constants";
import { getTitle } from "./title";

addons.register(ADDON_ID, (api) => {
	addons.add(ADDON_ID, {
		title: getTitle,
		type: types.PANEL,
		paramKey: PARAM_KEY,
		render: ({ active }) => (
			<AddonPanel active={!!active}>
				<CssPropsPanel api={api}/>
			</AddonPanel>
		),
	});
});
