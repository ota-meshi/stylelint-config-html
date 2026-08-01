const extensions = [
  // https://github.com/Microsoft/vscode/blob/master/extensions/html/package.json
  ".html",
  ".htm",
  ".shtml",
  ".xhtml",
  ".xht",
  ".mdoc",
  ".jsp",
  ".asp",
  ".aspx",
  ".jshtm",
  ".volt",
  ".ejs",
  ".rhtml",
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
