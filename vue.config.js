// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('json')
      .test(/\.json$/)
      .use('raw-loader')
      .loader('raw-loader')
      .options({
        esModule: false,
      });
  },
};
