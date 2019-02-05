<template>
  <div class="home">
    <HomeCarousel></HomeCarousel>
    <section>
      <p
        class="about aboutText"
      >I'm Franklin, your design partner based in Los Angeles. Helping companies develop consumer products and user friendly websites/apps. I've worked alongside small businesses and entrepreneurs.</p>
      <p class="about">Available for work, email me at manghi@gmail.com</p>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeCarousel from "@/components/HomeCarousel.vue";

export default {
  name: "home",
  components: {
    HomeCarousel
  }
};
</script>

<style scoped>
.about {
  text-align: center;
  margin: 1em;
}
.aboutText {
  font-size: 1.6em;
}

@media screen and (min-width: 768px) {
  .about {
    margin: 3em auto;
    width: 800px;
  }
}
</style>
