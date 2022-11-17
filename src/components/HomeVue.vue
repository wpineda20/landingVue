<template>
  <LayoutVue />
</template>

<script>
import LayoutVue from "./LayoutVue.vue";
export default {
  name: "LandingHome",
  components: {
    LayoutVue,
  },
  props: {
    msg: String,
  },
};
</script>