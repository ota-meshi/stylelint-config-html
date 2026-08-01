---
"stylelint-config-html": major
---

Migrate the package to ESM. On the supported Node.js versions, the configs can still be loaded from CommonJS via `require()`. The package now also defines an `exports` field; deep imports keep working both with and without the `.js` extension (e.g. `stylelint-config-html/vue` and `stylelint-config-html/vue.js`).
