const path = require('path');
const fs = require('fs');
const util = require("util");
const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const withCSS = require('@zeit/next-css');
const cssLoaderConfig = require('@zeit/next-css/css-loader-config');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const yaml = require('js-yaml');
const glob = require('glob');
const lunr = require('lunr');
const resolve = require('resolve');
const npmPackage = util.promisify(require('npm-package-info'));

// Using git checkout origin/master -- `git ls-tree origin/master -r --name-only | grep ".yml"`
// Using git checkout adobe/master -- `git ls-tree adobe/master -r --name-only | grep ".yml"`
// Get all the yml files from master
function gatherYML() {
  glob("components/**/*.yml", {}, (er, files) => {
    files.forEach((file) => {
      const filename = path.basename(file);
      const componentYaml = fs.readFileSync(file, {
        encoding: 'utf8'
      });
      const componentData = yaml.safeLoad(componentYaml);
      componentData.packageSlug = path.basename(path.dirname(path.dirname(file)));
      componentData.indexCSS = fs.readFileSync(resolve.sync(`@adobe/spectrum-css/dist/components/${componentData.packageSlug}/index-vars.css`), {
        encoding: 'utf8'
      });
      const packageJson = require(`@adobe/spectrum-css/dist/components/${componentData.packageSlug}/package.json`)
      componentData.peerDependencies = packageJson.peerDependencies || {};
      componentData.packageVersion = packageJson.version;
      componentData.packageName = packageJson.name;
      // npmPackage(componentData.packageName, function(err, pkg) {
      //   console.log(pkg.time[pkg['dist-tags'].latest])
      //   // console.log(pkg.versions[pkg['dist-tags'].latest]);
      // })
      componentData.peerCSS = '';
      Object.keys(componentData.peerDependencies).forEach((dep) => {
        const result = dep.split("/")[1];
        if(result !== 'vars') {
          componentData.peerCSS += fs.readFileSync(resolve.sync(`@adobe/spectrum-css/dist/components/${result}/index-vars.css`), {
            encoding: 'utf8'
          });
        }
      });
      fs.writeFileSync(file, yaml.safeDump(componentData));
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

function generateSearchIndex() {
  glob('data/yml/**/*.yml', {}, (er, files) => {
    const metaDataDocs = [];
    const store = {};
    files.forEach(file => {
      let componentData = yaml.safeLoad(String(fs.readFileSync(file, {encoding: 'utf8'})));
      let fileName = `${path.basename(file, '.yml')}`;
      metaDataDocs.push({
        href: fileName,
        name: componentData.name,
        description: componentData.description
      });

      store[fileName] = {
        href: fileName,
        name: componentData.name,
        component: fileName,
        description: componentData.description,
        slug: fileName,
        type: 'page',
        pageType: 'Component'
      };
    });

    const index = lunr(function() {
      this.ref('href');
      this.field('name', { boost: 10 });
      this.field('description');
      metaDataDocs.forEach(doc => this.add(doc), this);
    });

    fs.writeFileSync('data/search_index.json', JSON.stringify(index));
    fs.writeFileSync('data/search_store.json', JSON.stringify(store));
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
    build: process.env.BUILD,
    adobeLaunchEnv: process.env.ADOBE_LAUNCH_ENV
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

    // copying Spectrum CSS SVG sprite to /static/images/svg
    // and copying loadicons script to /static/javascript/loadicons
    // so the Spectrum UI icons can be used with NextJS
    config.plugins.push(
      new CopyWebpackPlugin([
        {
          from: path.join(__dirname, 'node_modules/@adobe/spectrum-css-workflow-icons/dist/sites/spectrum-css/spectrum-css-icons.svg'),
          to: path.join(__dirname, 'static/images/svg/')
        },
        {
          from: path.join(__dirname, 'node_modules/loadicons/index.js'),
          to: path.join(__dirname, 'static/javascript/loadicons/')
        }
      ])
    );

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
        'process.env.THEME_LIGHTEST': 'true',
        'process.env.THEME_DARK': 'true',
        'process.env.THEME_DARKEST': 'true'
      })
    );
    return config;
  },
  exportPathMap: async function() {
    const paths = {
      '/': {
        page: '/'
      },
      '/get-started': {
        page: '/get-started'
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
      menu.menu[0].children[2].children.push(menuComponentData); // TODO: this is brittle
      menu.key.push(menuComponentData);
    })
    await writeFile('data/newmenu.json', JSON.stringify(menu));

    generateSearchIndex();
    return paths;
  }
})
