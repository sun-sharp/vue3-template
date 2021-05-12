/**
 * vue webpack主配置文件
 * */

module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC,
  // 打包文件目录地址
  outputDir: "dist",
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: "static",
  lintOnSave: true, // 是否开启eslint保存检测 ,它的有效值为 true || false || 'error'\
  productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  chainWebpack: config => {
    // 打包分析
    if (process.env.NODE_ENV === "production") {
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin)
        .end();
    }
  },
  pages: {
    index: {
      // page 的入口
      entry: "src/main",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "vue3模板",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: "src/subpage/main.js"
  },
  /* 配置 webpack-dev-server 行为 */
  devServer: {
    // 当出现编译器错误或警告时，在浏览器中同时显示警告和错误
    overlay: {
      warnings: true,
      errors: true
    },
    open: false, // 告诉 dev-server 在 server 启动后打开浏览器
    host: "localhost", // 指定使用一个 host
    port: 1300, // 指定要监听请求的端口号
    https: false, // 是否指定 dev-server 通过 HTTP 提供服务
    hotOnly: false, // 是否启用热模块替换
    /* 后端开发服务器 API 配置  target：重写路径 ws：代理服务器交互 */
    proxy: {
      "/nfsq": {
        // 后端接口
        target: process.env.VUE_APP_URL,
        changeOrigin: true,
        pathRewrite: {
          "^/nfsq": ""
        }
      }
    }
  }
};
