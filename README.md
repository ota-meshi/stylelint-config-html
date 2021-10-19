# stylelint-config-html

[![NPM license](https://img.shields.io/npm/l/stylelint-config-html.svg)](https://www.npmjs.com/package/stylelint-config-html)
[![NPM version](https://img.shields.io/npm/v/stylelint-config-html.svg)](https://www.npmjs.com/package/stylelint-config-html)
[![NPM downloads](https://img.shields.io/npm/dw/stylelint-config-html.svg)](http://www.npmtrends.com/stylelint-config-html)
[![NPM downloads](https://img.shields.io/npm/dm/stylelint-config-html.svg)](http://www.npmtrends.com/stylelint-config-html)
[![Build Status](https://github.com/ota-meshi/stylelint-config-html/workflows/CI/badge.svg?branch=main)](https://github.com/ota-meshi/stylelint-config-html/actions?query=workflow%3ACI)

> The shareable HTML (and HTML-like) config for [Stylelint].

This config bundles the [`postcss-html` custom syntax](https://github.com/ota-meshi/postcss-html) and configures it.  
If you use this config in your Stylelint config, HTML, XML, [Vue], [Svelte] and [PHP] files will be parsable. The Stylelint rules you have configured will be able to check these files.

> **Requirements**
>
> - [Stylelint] v14.0.0 and above  
>   It cannot be used with Stylelint v13 and below.

To see this config, please read the [config itself](/index.js).

## :cd: Installation

```shell
npm install --save-dev stylelint-config-html
```

## :book: Usage

Set your `stylelint` config to:

```json
{
  "extends": "stylelint-config-html"
}
```

Note: This config enables HTML (and HTML-like) syntax parsing.

If you want to enable parsing for only specific language, use each language config as follows:

```json
{
  "extends": [
    "stylelint-config-html/html",
    "stylelint-config-html/xml",
    "stylelint-config-html/vue",
    "stylelint-config-html/svelte",
    "stylelint-config-html/php"
  ]
}
```

## :lock: License

See the [LICENSE](LICENSE) file for license rights and limitations (MIT).

[Stylelint]: https://stylelint.io/
[Vue]: https://v3.vuejs.org/guide/single-file-component.html
[Svelte]: https://svelte.dev/docs#Component_format
[PHP]: https://www.php.net/manual/en/intro-whatis.php
