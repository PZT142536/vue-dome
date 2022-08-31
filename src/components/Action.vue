<template>
  <div style="border: 5px solid #333">
    <h2>Actions</h2>
    <button @click="addclk">异步增加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    // addclk() {
    //方法一
    // this.$store.dispatch("incrementAsync", { num: 10 });
    //方法二
    // this.$store.dispatch({
    //   type: "incrementAsync",
    //   num: 10,
    // });
    // },
    //方法三
    ...mapActions({
      addclk: { type: "incrementAsync", num: 10 },
    }),
  },
};
</script>


<style>
</style>