"use strict";

const { fail } = require("assert");
const cp = require("child_process");
const path = require("path");

const STYLELINT = `.${path.sep}node_modules${path.sep}.bin${path.sep}stylelint`;

describe("Integration with stylelint", () => {
  let originalCwd;

  before(() => {
    originalCwd = process.cwd();
    process.chdir(path.join(__dirname, "../fixtures/integrations/stylelint"));
    cp.execSync("npm i --no-package-lock --legacy-peer-deps", {
      stdio: "inherit",
    });
  });
  after(() => {
    process.chdir(originalCwd);
  });

  it("should lint without errors with html", () => {
    cp.execSync(`${STYLELINT} src/valid.html`, { stdio: "inherit" });
  });
  it("should lint without errors with vue", () => {
    cp.execSync(`${STYLELINT} src/valid.vue`, { stdio: "inherit" });
  });
  it("should lint without errors with svelte", () => {
    cp.execSync(`${STYLELINT} src/valid.svelte`, { stdio: "inherit" });
  });
  it("should lint without errors with astro", () => {
    cp.execSync(`${STYLELINT} src/valid.astro`, { stdio: "inherit" });
  });
  it("should lint without errors with php", () => {
    cp.execSync(`${STYLELINT} src/valid.php`, { stdio: "inherit" });
  });
  it("should lint with errors with html", () => {
    try {
      cp.execSync(`${STYLELINT} src/invalid.html`, { stdio: "inherit" });
      fail("Expect an error, but without errors");
    } catch {
      // Expected!
    }
  });
  it("should lint with errors with vue", () => {
    try {
      cp.execSync(`${STYLELINT} src/invalid.vue`, { stdio: "inherit" });
      fail("Expect an error, but without errors");
    } catch {
      // Expected!
    }
  });
  it("should lint with errors with svelte", () => {
    try {
      cp.execSync(`${STYLELINT} src/invalid.svelte`, { stdio: "inherit" });
      fail("Expect an error, but without errors");
    } catch {
      // Expected!
    }
  });
  it("should lint with errors with astro", () => {
    try {
      cp.execSync(`${STYLELINT} src/invalid.astro`, { stdio: "inherit" });
      fail("Expect an error, but without errors");
    } catch {
      // Expected!
    }
  });
});
