module.exports = ({
	clean = false,
	idPrefix = false,
	// classPrefix = "spectrum-UIIcon",
	removeViewBox = false,
} = {}) => ({
	multipass: true,
	js2svg: {
		indent: 2,
		pretty: true,
	},
	plugins: [
		{
			name: "preset-default",
			params: {
				overrides: {
					cleanupIds: clean,
					removeDesc: false,
					removeTitle: false,
					removeViewBox,
					removeHiddenElems: false,
					removeUnusedNS: false,
				},
			},
		},
		...(clean ? [{
			name: "removeAttrs",
			params: {
				attrs: ["class", "data-name", "id"],
			},
		}] : []),
		...(idPrefix ? [{
			name: "prefixIds",
			params: { delim: "-", prefix: idPrefix, prefixClassNames: false },
		}] : []),
		{
			name: "addClassesToSVGElement",
			params: {
				classNames: ["spectrum-UIIcon"]
			}
		},
		{
			name: "sortAttrs",
			params: {
				order: ["id", "width", "height", "x", "x1", "x2", "y", "y1", "y2", "cx", "cy", "r", "fill", "stroke", "marker", "d", "points"],
				xmlnsOrder: "front"
			}
		},
	],
});
