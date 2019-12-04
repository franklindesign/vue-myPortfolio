<template>
  <div class="home">
    <v-container class="mt-5">
      <div class="vueTyper">
        <vue-typer
          :text="franklin"
          :shuffle="false"
          :repeat="false"
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
        <p
          class="about"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          I'm designer/developer in Los Angeles, CA.
        </p>
        <p
          class="subText"
          data-aos="fade-up"
          data-aos-duration="1100"
          data-aos-easing="ease-in-out"
        >
          Hireable, email me at manghi@gmail.com.
        </p>
      </div>
    </v-container>
    <Projects
      data-aos="fade-up"
      data-aos-duration="1250"
      data-aos-easing="ease-in-out"
    ></Projects>
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
      franklin: ["Hello, World!", "My name is Franklin!"]
    };
  }
};
</script>

<style scoped>
.about {
  font-size: 2em;
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
    font-size: 2em;
    width: 1000px;
  }
  .subText {
    font-size: 1em;
  }
}
</style>
