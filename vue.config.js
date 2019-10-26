//vue.config.js
module.exports = {
  devServer: {
    port: 8080,
    proxy: 'http://localhost:5000',
  },
  transpileDependencies: [
    'vuex-module-decorators',
    'vuetify'
  ],
};

// vue.config.js
// module.exports = {
//   // proxy all webpack dev-server requests starting with /api
//   // to our Spring Boot backend (localhost:8088) using http-proxy-middleware
//   // see https://cli.vuejs.org/config/#devserver-proxy
//   chainWebpack: config => {
//     config.module.rules.delete("eslint");
//   },
//   devServer: {
//     proxy: {
//       "/": {
//         target: "http://localhost:5000",
//         ws: true,
//         changeOrigin: true
//       }
//     }
//   },
//   // Change build paths to make them Maven compatible
//   // see https://cli.vuejs.org/config/
//   outputDir: "dist/FrontOffice",
//   assetsDir: "static"
// };

// vue.config.js
// module.exports = {
//   // proxy all webpack dev-server requests starting with /api
//   // to our Spring Boot backend (localhost:8088) using http-proxy-middleware
//   // see https://cli.vuejs.org/config/#devserver-proxy
//   devServer: {
//     // proxy: {
//     //   '/api': {
//     //     target: 'http://localhost:5000',
//     //     ws: true,
//     //     changeOrigin: true,
//     //   },
//     // },
//     proxy: {
//       '': {
//         target: 'http://localhost:5000/',
//         ws: true,
//         changeOrigin: true,
//       },
//     },
//   },
//   // Change build paths to make them Maven compatible
//   // see https://cli.vuejs.org/config/
//   outputDir: 'dist/FrontOffice',
//   assetsDir: 'static',
// };
