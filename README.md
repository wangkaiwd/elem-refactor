## `vue`最新版本学习

### 通过`webpack`自动导入
> 在`vue.config.js`中添加配置，这里的`css`文件包括:`less,scss,styl`等
在新版的`vue-cli3`中，支持自动化导入：即在每个`css`文件和单文件组件中引入配置的`css`文件(颜色、变量、mixins...)

这里需要安装一个第三方依赖[`style-resources-loader`](https://github.com/yenshih/style-resources-loader)来实现  
**注意：`npm`中介绍的配置方式是有问题的，要以`github`为主**
```
vue add style-resources-loader
```

在`vue.config.js`中进行配置

```js
'style-resources-loader': {
  preProcessor: 'less',
  patterns: [ //全局引入vars.less和mixins.less
    path.resolve(__dirname, "src/assets/styles/mixins.less"),
    path.resolve(__dirname, "src/assets/styles/vars.less"),
  ]
}
```

在`vue`组件和其它`css`文件中使用
```css
/* common.less */
body {
  font-size: @font-medium;
}

 /* App.vue */
<style lang="less">
.test-button {
  background-color: @blue;
  height: 0.8rem;
}
</style>
```

### `rem`进行移动端适配
`rem` : (font size of the root element)是指相对于根元素(`html`)的字体大小的单位。如果`html`的`font-size`是`16px`,那么`1rem=16px`。

我们可以以`iphone6/7/8`为例，此时屏幕宽度为`375px`,即`document.documentElement.offsetWidth=375`。在现实开发中，我们会使用二倍图，所以设计图中的宽度如果是`80px`，那么在`iphone6/7/8`中应该现实为`40px`。所以为了计算方便,在设计图的基础上除以100来转换为`rem`,代码中应该写`0.8rem`，这样就可以推算出我们应该使用屏幕宽度/7.5。

```js
// rem.js
const setHtmlFont = () => {
  const htmlWidth = document.documentElement.offsetWidth
  const htmlEle = document.querySelector('html')
  htmlEle.style.fontSize = `${htmlWidth / 7.5}px`
}
setHtmlFont()
window.addEventListener('resize', setHtmlFont)
```
* `1px`和字体要使用`px`单位
* 如果使用第三方`ui`库以及`postcss-pxtorem`的话，在进行转换的时候可以`selectorBlackList`属性中将组件的类名排除

