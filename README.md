# 动态加载组件开发示例

## 项目说明

- example 为本地调试目录，也可以是demo
- src为组件目录，一般包含jsx和css样式文件
- prototype 目录主要包含组件的描述文件,包括组件名称、属性、方法、事件，以及缩略图等
- 组件可能有多个导出，所以根目录下有一个index.jsx文件，用于导出组件的内容, 也是vite的entry文件


## 调试

- npm run start

## 打包

- npm run build

## 发布

- npm publish


## 注意事项

1. 组件依赖的第三方包必须全部在vite.config.js 文件 external 配置中声明，不要将第三方包打入组件，保证组件build资源尽量小
2. 尽量使用css module，如果不使用，请保证class命名加上namespace，保证命名唯一。
3. 组件同时打出 es 和 umd 格式文件，并将样式文件打入到了js中。为了保证后期排查样式属于哪个组件，再vite.config.js中 cssInjectedByJsPlugin 属性需要设置 styleId
4. 因为库模式开启了umd格式，所以vite.config.js文件中需要配置 组件挂在window对象上的变量名 build.lib.name ， 一般大写开头
