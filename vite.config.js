import path from "path";
import copy from "rollup-plugin-copy";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default {
  resolve: {
    alias: [
      { find: /^\@\//, replacement: path.resolve(__dirname, "src") + "/" },
    ],
  },
  // 配置选项
  build: {
    outDir: "./build",
    lib: {
      entry: "./index.jsx",
      name: "MokelayWidgetSample", // 全局变量名
      formats: ["es", "umd"],
      fileName: "index",
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["react", "react-dom"],
      output: {
        generatedCode: "es5", // 让浏览器能执行
      },
    },
  },
  plugins: [
    // 将css文件打入到js中，不要出现css文件
    cssInjectedByJsPlugin({
      styleId: "mokelay-widget-sample", // style标签会多一个id，标识是哪个组件的样式 <style id="mokelay-widget-sample">
    }),
    // 用于将静态资源拷贝到build目录
    copy({
      targets: [
        { src: "prototype", dest: "build" },
        { src: "example", dest: "build" },
      ],
      hook: "writeBundle",
      copyOnce: true,
    }),
  ],
  server: {
    host: "0.0.0.0",
    open: true,
  },
};
