<template>
  <div style="border: 5px solid #333">
    <h3>geeter</h3>
    <p>{{ doneTodosCount }}</p>
    <p>{{ doneTodosLength }}</p>
    <p>{{ doneTodos }}</p>
    <p>{{ doneCount }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    doneTodosCount() {
      //传递参数
      return this.$store.getters.getTodoById(2);
      // return this.$store.state.todos.filter((todo) => todo.done).length;
    },
    ...mapGetters([
      "doneTodosLength",
      "doneTodos",
      // ...
    ]),
    ...mapGetters({ doneCount: "doneTodosLength" }),
  },
};
</script>


<style>
</style>