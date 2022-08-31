import { SOME_MUTATION } from "./mutation-types";
export default {
  increment(state, payload) {
    // 变更状态
    state.count += payload.num;
  },
  // 我们可以使用 ES2015 风格的计算属性命名功能
  // 来使用一个常量作为函数名
  [SOME_MUTATION](state, payload) {
    // 修改 state
    state.count += payload.num;
  }
};
