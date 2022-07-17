import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
// import "./styles/element-variables.scss";
// import "element-ui/packages/theme-chalk/src/index.scss";
//國際化
import locale from "element-ui/lib/locale/lang/en";
Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });

new Vue({
    render: (h) => h(App),
}).$mount("#app");
