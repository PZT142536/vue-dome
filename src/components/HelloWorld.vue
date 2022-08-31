<template>
  <div>
    <div style="border: 5px solid #333">
      <h2>state</h2>
      <p>{{ count }}-----{{ countPlusLocalState }}</p>
    </div>
    <getter />
    <mutations />
    <Action />
  </div>
</template>

<script>
import getter from "./getter.vue";
import mutations from "./mutations.vue";
import Action from "./Action.vue";
import { mapState } from "vuex";
export default {
  components: {
    getter,
    mutations,
    Action,
  },
  data() {
    return {
      localCount: 1,
    };
  },
  // computed: mapState({
  //   //箭头函数可使代码更简练
  //   count: (state) => state.count,
  //   // 使用字符串参数 'count' 等同于 'state=> state.count'
  //   countAlias: "count",
  //   // 为了能够使用 `this` 获取局部状态，必须使用常规函数
  //   countPlusLocalState(state) {
  //     return state.count + this.localCount;
  //   },
  // }),
  computed: {
    countPlusLocalState() {
      return 0;
    },
    ...mapState({
      count: (state) => state.count,
      countPlusLocalState(state) {
        return state.count + this.localCount;
      },
    }),
  },
  // count() {
  //   return this.$store.state.count;
  // },
};
</script>


<style>
</style>