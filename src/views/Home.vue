<template>
  <div class="home">
    <HomeCarousel></HomeCarousel>
    <section>
      <p class="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vitae earum doloremque quis, esse voluptatum ab illo ipsa pariatur quidem, ex libero in natus error est tempora officia voluptatem neque?
      </p>
      
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
  font-size: 1.5em;
  margin: 2em;
}
</style>
