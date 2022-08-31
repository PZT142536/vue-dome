export default {
  incrementAsync({ commit, state }, payload) {
    setTimeout(() => {
      commit("increment", payload);
    }, 1000);
  }
};
