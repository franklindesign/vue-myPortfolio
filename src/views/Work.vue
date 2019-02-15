<template>
  <div>
    <v-container class="mt-5 topSpacing">
      <h1>Work</h1>

      <p>Selection of Projects</p>
    </v-container>
    <Projects></Projects>
  </div>
</template>

<script>
import Projects from "@/components/Projects.vue";
export default {
  name: "Home",
  components: {
    Projects
  }
};
</script>

<style scoped>
.topSpacing {
  padding-top: 50px;
}
</style>
