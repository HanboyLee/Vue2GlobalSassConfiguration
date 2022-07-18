# vue2template

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

##vue.config.js 配置參考

```js
  scss: {
                // 向全局sass样式传入共享的全局变量, $src可以配置图片cdn前缀
                // 详情: https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
                additionalData: `
                @import "~@/styles/element-variables.scss";
                @import "element-ui/lib/theme-chalk/index.css";
                `,
            },
```

### 出現 Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\_@jie 錯誤

####問題描述:

-   新写项目编译时，遇到 sass 语法报错，现已解决，记录一下

```js
EPRECATION WARNING: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.

Recommendation: math.div($px, $html-font-size)

More info and automated migrator: https://sass-lang.com/d/slash-div

   ╷
18 │   @return $px / $html-font-size * 1rem;
   │           ^^^^^^^^^^^^^^^^^^^^^
   ╵
    src\assets\scss\variable.scss 18:11  computer()
    src\assets\scss\coverAntd.scss 4:16  @import
    src\assets\scss\index.scss 8:9       @import
    stdin 477:9                          root stylesheet


```

####解決方案
版本太高導致

```
"sass": "^1.43.4",    替换为  "sass": "~1.26.5",
```

```js
module.exports = {
   css: {
     loaderOptions: {
        sass: {
        	prependData:`@import "./src/assets/scss/style.scss";` 
        	// sass 版本 9 中使用 additionalData 版本 8 中使用 prependData  
            }
        }
    }
}
```
