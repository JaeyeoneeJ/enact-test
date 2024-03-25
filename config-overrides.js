const { override, adjustStyleLoaders } = require("customize-cra");
const addLessLoader = require("customize-cra-less-loader");
const postcssPresetEnv = require("postcss-preset-env");

const themeConfig = require("./package.json").enact;
const baseSize = themeConfig?.ri?.baseSize || 24;

module.exports = override(
  addLessLoader({
    lessLoaderOptions: {
      lessOptions: {
        javascriptEnabled: true,
      },
    },
  }),
  adjustStyleLoaders((rule) => {
    if (rule.test.toString().includes("less")) {
      const loaders = rule.use;
      loaders.splice(loaders.length - 1, 0, {
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugins: [
              postcssPresetEnv({
                stage: 3, // 4단계 중 3단계 사용. 최신 문법 지원 중 3단계가 안정적
              }),
              require("postcss-pxtorem")({
                rootValue: baseSize,
                propList: ["*"],
              }),
            ],
          },
        },
      });
    }
  })
);
