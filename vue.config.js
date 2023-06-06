const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  configureWebpack: {
  module: {
    rules: [
      {
        test: /\.(glb|gltf)$/,
        use: [
          {
            loader: 'gltf-loader'
          }
        ]
      }
    ]
  }
},
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: (config) => {
    // 添加three-obj-loader依赖
    // HDR Loader
    config.module
      .rule("hdr")
      .test(/\.(hdr)$/i)
      .use("hdr-loader")
      .loader("file-loader")
      .options({
        name: "[name].[ext]",
      })
      .end();

    // GLB Loader
    config.module
      .rule("glb")
      .test(/\.(glb)$/i)
      .use("glb-loader")
      .loader("file-loader")
      .options({
        name: "[name].[ext]",
      })
      .end();
  },
});
