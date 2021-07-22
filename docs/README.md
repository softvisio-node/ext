# Introduction

<!-- Tell about the project -->

## Install

```shell
npm i --save-dev @softvisio/ext@github:softvisio/ext#latest
```

## Usage

-   Patch `css-vars.js`.
-   Patch `css` files:
    -   remove css blocks, containing `ext-watermark`;
    -   remove css blocks, that belongs to the `ext-font-awesome`;
    -   replace `%s/url(images\//url(resources\/images\//g`;
    -   compress / decompress .css files;
