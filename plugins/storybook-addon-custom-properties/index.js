export { CssPropsBlock } from "./components/CssPropsBlock";
export { extract } from "./tools/extractor";

if (module && module.hot && module.hot.decline) {
	module.hot.decline();
}
