# TODO
- remove font avesome;
- remove other fonts;

# HOW TO BUILD EXTJS

```
npm i -g @vue/cli

vue create --default ext-web-components-boilerplate-vue-cli

cd ext-web-components-boilerplate-vue-cli

npm install --save @sencha/ext-web-components @sencha/ext @sencha/ext-modern @sencha/ext-modern-theme-material @sencha/ext-webpack-plugin

# TODO create vue.config.js

# build ExtJS framework
npx vue-cli-service build

# TODO remove watermark from ext_1.css

# TODO remove font awesome from ext_1.css

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
npm run serve

# or create production build
npm run build
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
