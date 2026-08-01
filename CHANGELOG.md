# stylelint-config-html

## 2.0.0

### Major Changes

- [#62](https://github.com/ota-meshi/stylelint-config-html/pull/62) [`615ed21`](https://github.com/ota-meshi/stylelint-config-html/commit/615ed216f87180f03dc2476e5644b3e8bd752502) Thanks [@ota-meshi](https://github.com/ota-meshi)! - Drop support for old Node.js versions. Node.js `^22.12 || >=24` is now required.

- [#67](https://github.com/ota-meshi/stylelint-config-html/pull/67) [`aee16e6`](https://github.com/ota-meshi/stylelint-config-html/commit/aee16e6585016225e558cda1f974ee42e30aa4bb) Thanks [@ota-meshi](https://github.com/ota-meshi)! - Migrate the package to ESM. On the supported Node.js versions, the configs can still be loaded from CommonJS via `require()`. The package now also defines an `exports` field; deep imports keep working both with and without the `.js` extension (e.g. `stylelint-config-html/vue` and `stylelint-config-html/vue.js`).

- [#66](https://github.com/ota-meshi/stylelint-config-html/pull/66) [`d94ec9e`](https://github.com/ota-meshi/stylelint-config-html/commit/d94ec9e1eebffa3b33cb7c599e1583a825072705) Thanks [@ota-meshi](https://github.com/ota-meshi)! - Update peer dependencies: `postcss-html` now requires `^2.0.0`, and `stylelint` now requires `>=16.0.0`.
