module.exports = {
  // devServer: {
  //     proxy: {
  //         '/api': {
  //             target: 'http://1.117.107.95:8000/',
  //             ws: true,
  //             changeOrigin: true,
  //             pathRewrite: {
  //                 '^/api': ''
  //             }
  //         }
  //     }
  // },
  // css: {
  //   loaderOptions: {
  //   css: {},
  //   postcss: 
  //   {
  //     plugins: [require('postcss-px2rem')({remUnit: 37.5})]
  //   }
  //   }
  // },
  transpileDependencies: [
    'vuetify'
  ]
}
