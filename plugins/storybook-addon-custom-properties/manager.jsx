import { Provider } from "@react-spectrum/s2";
import { Badge, Spaced } from "@storybook/components";
import { addons, types, useAddonState } from "@storybook/manager-api";
import { CssPropsContextProvider } from "./components/CssPropsContext";
import { CssPropsPanel } from "./components/CssPropsPanel";
import { ADDON_ID, PARAM_KEY } from "./constants";

const Title = () => {
	const [addonState] = useAddonState(ADDON_ID);
	console.log("addonState", addonState);

	const customProperties = addonState?.customProperties || {};

	const controlsCount = Object.values(customProperties).flat().length;

	return (
		<Spaced col={1}>
			<span style={{ display: 'inline-block', verticalAlign: 'middle' }}>Custom properties</span>
			{controlsCount !== 0 ? <Badge status="neutral">{controlsCount}</Badge> : null}
		</Spaced>
	);
};

addons.register(ADDON_ID, (api) => {
	addons.add(ADDON_ID, {
		title: Title,
		type: types.PANEL,
		paramKey: PARAM_KEY,
		render: ({ active = true }) => (
			<Provider locale="en-US">
				<CssPropsContextProvider>
					{active ? <CssPropsPanel api={api}/> : null}
				</CssPropsContextProvider>
			</Provider>
		),
	});
});
