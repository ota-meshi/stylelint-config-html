"use strict";

module.exports = {
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  extends: [
    "plugin:@ota-meshi/recommended",
    "plugin:@ota-meshi/+node",
    "plugin:@ota-meshi/+json",
    "plugin:@ota-meshi/+yaml",
    "plugin:@ota-meshi/+prettier",
  ],
  overrides: [
    {
      // CommonJS files, including the fixture that emulates a CommonJS consumer.
      files: ["*.cjs", "tests/fixtures/**/*.js"],
      extends: ["plugin:n/recommended-script"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
};
