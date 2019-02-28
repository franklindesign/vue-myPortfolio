<template>
  <div class="home">
    <v-container class="mt-5">
      <div class="vueTyper">
        <vue-typer
          :text="franklin"
          :repeat="infinity"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="50"
          :type-delay="50"
          :pre-erase-delay="1000"
          :erase-delay="100"
          erase-style="clear"
          :erase-on-complete="false"
          caret-animation="blink"
        ></vue-typer>
      </div>
      <div class="about-container">
        <p class="about">
          Los Angeles based designer helping entrepreneurs, startups, and small
          businesses elevate their branding through visual communication.
        </p>
        <p class="subText">Available for work, email me at manghi@gmail.com</p>
      </div>
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
  },
  data() {
    return {
      franklin: [
        "Graphic Designer",
        "Product Designer",
        "UI Developer",
        "I am Franklin."
      ]
    };
  }
};
</script>

<style scoped>
.about {
  font-size: 1.5em;
}
.vueTyper {
  margin-top: 80px;
  margin-bottom: 30px;
  display: inline-block;
}
.about-container {
  margin-bottom: 50px;
}

@media screen and (min-width: 768px) {
  .about {
    font-size: 1.5em;
    width: 800px;
  }
  .subText {
    font-size: 1em;
  }
}
</style>
