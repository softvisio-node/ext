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

npm run build --mode=development

# TODO remove watermark from ext_1.css

# TODO remove font awesome from ext_1.css




cp ./build/ext/ext.js ./build/ext/ext-devel.js
terser ./build/ext/ext.js --compress --mangle -o ./build/ext/ext.js

cp ./build/ext/css-vars.js ./build/ext/css-vars-devel.js
terser ./build/ext/css-vars.js --compress --mangle -o ./build/ext/css-vars.js

# TODO remove watermark manually from css

# TODO remove font-awesome manually from css

# compress css
src -a compress -t css build/ext

```

```vue.config.js ```
```
const ExtWebpackPlugin = require('@sencha/ext-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    contentBase: 'build',
    hot: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: '8080',
    disableHostCheck: false,
    compress: false,
    inline: true,
    stats: 'none',
  },
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
            treeshake:'no',
            environment: 'development'
        }),
    ]
  }
}
```
