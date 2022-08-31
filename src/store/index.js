import Vue from "vue";
import Vuex, { createLogger } from "vuex";

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state from "./state";
import cart from "./modules/cart.js";
// const modulesFiles = require.context("./modules", true, /\.js$/);

// // 自动化处理文件
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   // 处理名称
//   const moduleName = modulePath.replace(/^\.\/(.*)\.js$/, "$1");
//   // 取值
//   const value = modulesFiles(modulePath);
//   modules[moduleName] = value.default;
//   return modules;
// }, {});
Vue.use(Vuex);
// 引入 modules 文件夹下的文件
// const debug = process.env.NODE_ENV === "development"; // 开发环境

const store = new Vuex.Store({
  //state相当于组建中的data,专门用来存放全局的数据
  state,
  //geeter相当于组件汇总的computed,getters是全局的 computed是组件内部使用的
  getters,
  //mutations相当于组件中的methods,但是他不能使用异步方法(定时器,axios)
  mutations,
  //actions 专门用来处理异步,实际修改装置的依然是mutations
  actions,
  // strict: debug, // true 严格使用 mutations 改变 state
  // plugins: debug ? [createLogger()] : [], // 开发模式使用日志 非开发不使用
  //主模块
  modules: {
    cart
  }
});
export default store;
