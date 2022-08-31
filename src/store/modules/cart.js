export default {
  //命名空间
  namespaced: true,
  //state相当于组建中的data,专门用来存放全局的数据
  state: {
    count2: 2
  },
  //geeter相当于组件汇总的computed,getters是全局的 computed是组件内部使用的
  getters: {
    //局部 state
    //全局 rootState
    sumWithRootCount(state, getters, rootState) {
      return state.count2 + rootState.count;
    }
  },
  //mutations相当于组件中的methods,但是他不能使用异步方法(定时器,axios)
  mutations: {
    increment(state) {
      // 这里的 `state` 对象是模块的局部状态
      state.count2++;
    }
  },
  //actions 专门用来处理异步,实际修改装置的依然是mutations
  actions: {
    //局部 state
    //commit
    //全局 rootState
    incrementIfOddOnRootSum({ state, commit, rootState }) {
      if ((state.count2 + rootState.count) % 2 === 1) {
        commit("increment");
      }
    }
  }
};
