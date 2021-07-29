# Build

## Prepare build

```txt
node_modules/@sencha/ext-modern-theme-base/sass/etc/all.scss
$ext-trial: false!default;
```

## Build

```sh
npx sencha app build development
```

## Prepare build

-   Patch `css-vars.js`.
-   Patch `css` files:
    -   remove css blocks, containing `ext-watermark`;
    -   remove css blocks, that belongs to the `ext-font-awesome`;
    -   replace `%s/url(images\//url(resources\/images\//g`;
    -   compress / decompress .css files;
