const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const fs = require("fs");
const postcss = require("postcss");

const resolve = (dir) => path.resolve(__dirname, dir);
const IS_PROD = ["prod", "production"].includes(process.env.NODE_ENV);
const modifyVars = getLessVaribles(resolve("./src/styles/variables.less"));
module.exports = defineConfig({
    transpileDependencies: true,

    chainWebpack: (config) => {
        // 添加别名
        config.resolve.alias
            .set("vue$", "vue/dist/vue.esm.js")
            .set("@", resolve("src"))
            .set("@components", resolve("src/components"))
            .set("@plugins", resolve("src/plugins"))
            .set("@views", resolve("src/views"))
            .set("@router", resolve("src/router"))
            .set("@store", resolve("src/store"))
            .set("@layouts", resolve("src/layouts"))
            .set("@static", resolve("src/static"));
    },
    css: {
        extract: IS_PROD,
        // sourceMap: false,
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars,
                },
            },
            scss: {
                // 向全局sass样式传入共享的全局变量, $src可以配置图片cdn前缀
                // 详情: https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
                additionalData: `
                @import "element-ui/lib/theme-chalk/index.css";
                @import "~@/styles/element-variables.scss";
                `,
            },
        },
    },
});

function getLessVaribles(fileUrl, list = {}) {
    if (!fs.existsSync(fileUrl)) return {};
    let lessFile = fs.readFileSync(fileUrl, "utf8");
    return postcss.parse(lessFile).nodes.reduce((acc, curr) => {
        acc[`${curr.name.replace(/:/, "")}`] = `${curr.params}`;
        return acc;
    }, list);
}
