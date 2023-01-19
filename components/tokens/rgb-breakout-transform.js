module.exports = {
    name: 'attribute/rgbBreakout',
    type: 'attribute',
    matcher: function(token) {
      return token.original.value.startsWith('rgb') && !token.original.value.startsWith('rgba');
    },
    transformer: (prop) => {
      const [ , r, g, b ] = (prop.original.value).match(/rgb\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?)\)/);
      return {
        rgb: `${r}, ${g}, ${b}`
      };
    }
};
