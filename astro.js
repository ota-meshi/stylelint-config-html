const extensions = [
  // https://github.com/withastro/language-tools/blob/main/packages/vscode/package.json
  ".astro",
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
