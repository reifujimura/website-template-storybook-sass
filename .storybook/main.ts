module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
    config.module.rules[0].use[0].options.plugins.push([
      require.resolve("babel-plugin-remove-graphql-queries"),
      {
        stage: config.mode === `development` ? "develop-html" : "build-html",
        staticQueryDir: "page-data/sq/d",
      },
    ]);
    return config;
  },
};
