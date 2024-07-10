// Use the document.fonts API to check if fonts have loaded
export const FontLoader = async () => ({
	fonts: document.fonts ? await document.fonts.ready : true,
});
