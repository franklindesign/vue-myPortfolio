<template>
  <div>
    <v-container
      class="mt-5 topSpacing"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <h1>Work</h1>
      <p>Selection of Projects</p>
    </v-container>
    <Projects
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    ></Projects>
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

<style scoped></style>
