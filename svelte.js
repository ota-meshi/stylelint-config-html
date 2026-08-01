const extensions = [
  // https://github.com/sveltejs/language-tools/blob/master/packages/svelte-vscode/package.json
  ".svelte",
];

const config = {
  overrides: [
    {
      files: extensions.flatMap((ext) => [`*${ext}`, `**/*${ext}`]),
      customSyntax: "postcss-html",
    },
  ],
};

export default config;
export { config as "module.exports" };
