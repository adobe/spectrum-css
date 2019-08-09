const path = require('path')
const fs = require('fs')
const util = require("util")
const readdir = util.promisify(fs.readdir);

module.exports = {
  pageExtensions: ['js', 'jsx'],
  assetPrefix: process.env.NODE_ENV === 'production' ? '/spectrum-css' : '',
  webpack: function(config, { dev, defaultLoaders }) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      include: path.resolve('data'),
      use: 'js-yaml-loader',
    })

    config.node = {
      Buffer: false
    }

    return config
  },
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' }
    };
    const components = await readdir('data')
    components.forEach(component => {
      const slug = path.basename(component, '.yml');
      paths[`/components/${slug}`] = { page: '/components/[id]', query: {id: slug} };
    })
    return paths;
  }
}
