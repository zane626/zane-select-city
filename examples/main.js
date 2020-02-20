import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import { Button, Cascader } from "element-ui";
import ZaneSelectCity from "../packages/index";

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Cascader);
Vue.use(ZaneSelectCity);
new Vue({
  render: h => h(App)
}).$mount("#app");
