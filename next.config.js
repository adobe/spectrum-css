const path = require('path')
const fs = require('fs')
const util = require("util")
const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const withCSS = require('@zeit/next-css');
const cssLoaderConfig = require('@zeit/next-css/css-loader-config');
const webpack = require('webpack');
const yaml = require('js-yaml');
const glob = require('glob');

// Using git checkout origin/master -- `git ls-tree origin/master -r --name-only | grep ".yml"`
// Using git checkout adobe/master -- `git ls-tree adobe/master -r --name-only | grep ".yml"`
// Get all the yml files from master
function gatherYML() {
  glob("components/**/*.yml", {}, (er, files) => {
    files.forEach((file) => {
      const filename = path.basename(file);
      fs.renameSync(file,path.join('data','yml',filename))
      try {
        fs.rmdirSync(path.dirname(file));
        fs.rmdirSync(path.dirname(path.dirname(file)));
      }
      catch(err) {
        // ignore not empty file
      }
    })
  });
}

//const nodeExternals = require('webpack-node-externals');
if (typeof require !== "undefined") {
  require.extensions[".css"] = (file) => {};
}
console.log(process.env.NODE_ENV);
console.log(process.env.BUILD);
module.exports = withCSS({
  env: {
    build: process.env.BUILD
  },
  exportTrailingSlash: true,
  pageExtensions: ['js', 'jsx'],
  assetPrefix: process.env.NODE_ENV === 'production' ? '/spectrum-css/' : '',
  webpack(config, options) {
    const { dev, isServer } = options;
    // Next.js externalizes all code in node_modules. Override to include
    // react-spectrum

    if(process.env.NODE_ENV === 'production') {
      config.externals = [ '@react', '@spectrum', '@adobe' , '@adcloud'];
    }

    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();
      if (entries['main.js'] && !entries['main.js'].includes('./polyfills.js')) {
        entries['main.js'].unshift('./polyfills.js');
      }
      return entries;
    };

    // We cannot use both css and sass nextjs plugins because they use the same
    // options object for all plugins. This prevents us from using cssModules
    // for sass (app source code) but not for css (component library code)
    // https://github.com/zeit/next-plugins/issues/128
    options.defaultLoaders.sass = cssLoaderConfig(config, {
      extensions: ['scss', 'sass'],
      cssModules: true,
      cssLoaderOptions: {
        url: false,
        localIdentName: "[local]___[hash:base64:5]"
      },
      postcssLoaderOptions: {},
      dev,
      isServer,
      loaders: [
        {
          loader: 'sass-loader',
          options: {}
        }
      ]
    });

    config.module.rules.push(
      {
        test: /\.scss$/,
        use: options.defaultLoaders.sass
      },
      {
        test: /\.sass$/,
        use: options.defaultLoaders.sass
      }
    );

    config.module.rules.push({
      test: /\.ya?ml$/,
      include: path.resolve('data'),
      use: 'js-yaml-loader',
    });

    // react-spectrum constants
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.SCALE_MEDIUM': 'true',
        'process.env.SCALE_LARGE': 'true',
        'process.env.THEME_LIGHT': 'true',
        'process.env.THEME_LIGHTEST': 'false',
        'process.env.THEME_DARK': 'false',
        'process.env.THEME_DARKEST': 'false'
      })
    );
    return config;
  },
  exportPathMap: async function() {
    const paths = {
      '/': {
        page: '/'
      },
      '/getting-started': {
        page: '/getting-started'
      }
    }
    gatherYML();
    const components = await readdir('data/yml')
    const menuJSON = await readFile('data/menu.json', {
      encoding: 'utf8'
    });
    let menu = JSON.parse(menuJSON);
    components.forEach(component => {
      const componentYaml = fs.readFileSync(`data/yml/${component}`, {
        encoding: 'utf8'
      });
      const componentData = yaml.safeLoad(componentYaml);
      const slug = path.basename(component, '.yml');
      paths[`/components/${slug}`] = {
        page: `/components/id`,
        query: {
          id: slug
        }
      };
      const menuComponentData = {
        "title": componentData.name,
        "url": slug,
        "linkType": "Internal",
        "parent": "top-level-menu-item,WebsiteMenu,Components"
      };
      menu.menu[0].children[1].children.push(menuComponentData);
      menu.key.push(menuComponentData);
    })
    await writeFile('data/newmenu.json', JSON.stringify(menu));
    return paths;
  }
})
