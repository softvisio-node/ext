# INSTALL

## NPM

```
npm i --save-dev @softvisio/ext@git+https://bitbucket.org/softvisio/softvisio-ext.git#latest
```

# PREPARE DISTRIBUTION

-   Patch `css-vars.js`.

-   Patch `css` files:

    -   remove css blocks, containing `ext-watermark`;
    -   remove css blocks, that belongs to the `ext-font-awesome`;
    -   replace `%s/url(images\//url(resources\/images\//g`;
    -   remove comments `%s/\/\*\_.\{-}\*\/\n//g`;
