# TODO
- remove font avesome;
- remove other fonts;

# HOW TO BUILD EXTJS

```
npm i -g @vue/cli

vue create --default ext-web-components-boilerplate-vue-cli

cd ext-web-components-boilerplate-vue-cli

set EXT=7.2.0
set EWC=7.1.0
npm install @sencha/ext@%EXT% @sencha/ext-modern@%EXT% @sencha/ext-modern-theme-material@%EXT%
npm install @sencha/ext-web-components@%EWC% @sencha/ext-webpack-plugin@%EWC%

# TODO create vue.config.js

# build ExtJS framework
npx vue-cli-service build

# - src -a compress -t css .
# - src -a decompress -t css .

# remove watermark:
# - remove watermark font ```resources/ext/```
# - search and remove "watermark" keyword in css

# remove ```resources/font-awesome```
# remove font awesome from ext_1.css

# remove ```resources/images/pictos```

# TODO patch ext.js, add module.exports = Ext;

# TODO patch css-vars.js

```
/* eslint-disable */
```

```
var Fashion;

(function (f) {
    Fashion = window.Fashion = f();
    return;
```

# TODO patch ext.js

```
/* eslint-disable */
```

```
module.exports = Ext;
```

# TODO copy resources

# check, you can install package deps globally
yarn serve

# TODO fix css errors

# or create production build
yarn build
```

```vue.config.js```
```
const ExtWebpackPlugin = require('@sencha/ext-webpack-plugin');
const path = require('path');

module.exports = {
    outputDir: path.join(__dirname, 'build'),
    configureWebpack: {
        plugins: [
            new ExtWebpackPlugin({
                framework: 'web-components',
                toolkit: 'modern',
                emit: 'yes',
                browser: 'no',
                packages: [],
                profile: '',
                verbose: 'no',
                treeshake: 'no',
                environment: 'development',
            }),
        ],
    },
};
```
