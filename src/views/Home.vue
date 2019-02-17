<template>
  <div class="home">
    <v-container class="mt-5">
      <p class="about aboutText">
        I'm Franklin, your design partner based in Los Angeles. Helping
        companies develop consumer products and user friendly websites/apps.
        I've worked alongside small businesses and entrepreneurs.
      </p>
      <p class="about">Available for work, email me at manghi@gmail.com</p>
    </v-container>
    <Projects></Projects>
  </div>
</template>

<script>
// @ is an alias to /src
import Projects from "@/components/Projects.vue";
export default {
  name: "Home",
  components: {
    Projects
  }
};
</script>

<style scoped>
.about {
  text-align: center;
  margin: 1em;
}
.aboutText {
  font-size: 1.2em;
}

@media screen and (min-width: 768px) {
  .about {
    margin: 3em auto;
    width: 75vw;
  }
  .aboutText {
    font-size: 2em;
  }
}
</style>
