const { resolve, relative, basename } = require('path');
const { existsSync } = require('fs');

const simpleBuilder = require('@spectrum-css/component-builder-simple/css/processors.js');
const legacyBuilder = require('@spectrum-css/component-builder/css/processors.js');

module.exports = (ctx) => {
    let plugins = [];
    const componentPath = resolve(__dirname, '../../components');
    const folderName = relative(componentPath, ctx.file).split('/')[0];
    const pkgPath = resolve(componentPath, folderName, 'package.json');
    const isExpress = folderName === 'expressvars';
    const modifier = basename(ctx.file, '.css').startsWith('spectrum') ? basename(ctx.file, '.css').replace('spectrum-', '') : '';

    if (existsSync(pkgPath)) {
        const { devDependencies } = require(pkgPath);
        if (Object.keys(devDependencies).includes('@spectrum-css/component-builder')) {
            plugins.push(...legacyBuilder.processors);
        } else {
            plugins.push(...simpleBuilder.processors);
        }
    }

    if (['expressvars', 'vars', 'tokens'].includes(folderName)) {
        plugins = [
            require('postcss-import')(),
            require('postcss-selector-replace')({
                before: [':root'],
                after: [`${isExpress ? `.spectrum--express` : ''}${modifier ? `.spectrum--${modifier}` : ''}${!isExpress && !modifier ? `.spectrum` : ''}`]
              })
        ];
    }

    return {
        plugins: [
            ...plugins
        ],
    };
};