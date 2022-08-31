<template>
  <div style="border: 5px solid #333">
    <h2>mutations</h2>
    <button @click="addclk">count加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    // addclk() {
    //方法一
    // this.$store.commit("increment", { num: 10 });
    //方法二
    // this.$store.commit({
    //   type: "increment",
    //   num: 10,
    // });
    // },
    //方法三
    ...mapMutations({
      addclk: { type: "increment", num: 10 },
    }),
  },
};
</script>


<style>
</style>