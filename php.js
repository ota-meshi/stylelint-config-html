const extensions = [
  // https://github.com/Microsoft/vscode/blob/main/extensions/php/package.json
  ".php",
  ".php4",
  ".php5",
  ".phtml",
  ".ctp",
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
