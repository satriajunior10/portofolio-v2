const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
    config.module
      .rule("images")
      .test(/\.(jpe?g|png|gif|bmp|webp|svg)$/i)
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: 8192, // Gambar yang lebih kecil dari 8KB akan diubah menjadi data URL
        name: "assets/[name].[hash:8].[ext]",
      })
      .end();
  },
});
