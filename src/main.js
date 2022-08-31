import Vue from "vue";
import App from "./App.vue";
// 引入Vuex
import store from "./store/index.js";

new Vue({
  store,
  render: (h) => h(App)
}).$mount("#app");
