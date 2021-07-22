<!-- !!! DO NOT EDIT, THIS FILE IS GENERATED AUTOMATICALLY !!!  -->

> :information_source: Please, see the full project documentation here: [https://softvisio.github.io/ext/](https://softvisio.github.io/ext/).

# Introduction

<!-- Tell about the project -->

## Install

```shell
npm i --save-dev @softvisio/ext@github:softvisio/ext#latest
```

## Usage

## Prepare build

-   Patch `css-vars.js`.
-   Patch `css` files:
    -   remove css blocks, containing `ext-watermark`;
    -   remove css blocks, that belongs to the `ext-font-awesome`;
    -   replace `%s/url(images\//url(resources\/images\//g`;
    -   compress / decompress .css files;
