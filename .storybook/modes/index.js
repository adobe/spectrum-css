const modes = {
    "Context: Spectrum 1": {
        scale: "medium",
        color: "light",
        textDirection: "ltr",
        context: "spectrum1",
    },
    "Context: Express": {
        context: "express",
    },
    "Dark | RTL": {
        color: "dark",
        textDirection: "rtl",
    },
};

export default modes;

export const disableDefaultModes = {
    ...Object.keys(modes).reduce((acc, key) => {
        acc[key] = { disable: true };
        return acc;
    }, {}),
};

export const mobile = {
    "Mobile": {
        scale: "large",
    },
};
