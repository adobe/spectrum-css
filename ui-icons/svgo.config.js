module.exports = ({
  clean = false,
  idPrefix = false,
  classPrefix = 'spectrum-UIIcon',
  removeViewBox = false,
} = {}) => ({
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: true,
  },
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          cleanupIds: clean,
          removeDesc: false,
          removeTitle: false,
          removeViewBox,
          removeUnusedNS: false,
        },
      },
    },
    clean
      ? {
        name: 'removeAttrs',
        params: {
          attrs: ['class', 'data-name', 'id'],
        },
      }
      : undefined,
    idPrefix
      ? {
        name: 'prefixIds',
        params: { delim: '-', prefix: idPrefix, prefixClassNames: false },
      }
      : undefined,
    classPrefix
      ? {
        name: 'prefixIds',
        params: {
          delim: '--',
          prefix: classPrefix,
          prefixClassNames: true,
          prefixIds: false,
        },
      }
      : undefined,
  ].filter(Boolean),
});
