# cnode-react-webpack
Highly optimized cnode.org forum

Implementation of [cnode|https://cnodejs.org/]

Tech stack: react, webpack, mobx, react-ssr

react

babel

webpack

eslint

editorconfig

1. webpack 4.* 需要安装webpack-cli

2. Babel Preset视为Babel Plugin的集合(多个plugins)
先执行完所有Plugin，再执行Preset。
多个Plugin，按照声明次序顺序执行。
多个Preset，按照声明次序逆序执行。

3. babel-code >= 7 and babel-loader >= 8的情况下
presets使用"@babel/preset-env", "@babel/preset-react"

4. webpack output 的 output为什么要指定打包后的js publicPath路径？因为做ssr的时候，需要将请求fallback to服务端渲染后的html,
但是这样会导致前端正常的js情况也会被返回html。所以需要区分哪些是js的请求，哪些是非js的请求，加上一个publicPath路径就能区分了。

5. react 16如果在使用ssr时候，不推荐在客户端渲染使用ReactDOM.render,应该使用ReactDOM.hydrate. 如果不同构，用客户端的代码替代.

6. process.env.NODE_ENV

7. 设置环境变量使用cross_env,否则mac或者window环境中会有问题.

8. 有可能没有module.hot这个属性
const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;

9. Chrome preserve log选项很有用，特别在单页面HMR的时候。