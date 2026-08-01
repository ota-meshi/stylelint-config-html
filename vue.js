const extensions = [
  // https://v3.vuejs.org/api/sfc-spec.html
  ".vue",
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
