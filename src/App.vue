<template>
  <v-app>
    <v-main>
      <HomeVue />
    </v-main>
  </v-app>
</template>

<script>
import HomeVue from "./components/HomeVue.vue";

export default {
  name: "App",

  components: {
    HomeVue,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
@import "./assets/sass/app.scss";
</style>