<template>
  <div>
    <div>demolist - {{$route.query.a}}</div>
    <div>
      <button v-on:click="grow">返回首页{{this.$store.state.name}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "demo",
  data: function() {
    return {
      age: 1
    };
  },
  methods: {
    grow: function() {
      // return (this.age += 1);
      // this.$router.push("/");
      this.$store.commit("changeName", "xk234");
    }
  }
};
</script>

<style lang="scss">
</style>