// const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = {
  transpileDependencies: ["vuetify"],
  lintOnSave: false,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/assets/scss/mixins.scss")],
    },
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          data: ` @import "@/assets/scss/_mixins.scss";`,
        },
      },
    },
  },
  chainWebpack: config => {
    config.performance
      .maxEntrypointSize(6000000)
      .maxAssetSize(6000000)
  },
};
