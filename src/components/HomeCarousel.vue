<template>
  <v-carousel height="100vh" hide-delimiters>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <div>
        <div class="text">
          <h3 class="display-1">{{ item.featuredProject }}</h3>
          <span class="subheading">{{ item.description }}</span>
          <v-divider class="my-3"></v-divider>
          <v-btn class="mx-0" color="primary" :to="`${item.link}`"
            >View Project</v-btn
          >
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "HomeCarousel",
  data() {
    return {
      items: [
        {
          featuredProject: "Hibiki Sushi & Bar",
          src: "../img/work/carousel/HIBIKI.jpg",
          description: "Santa Clarita's All-You-Can-Eat Restaurant",
          link: "/work"
        },
        {
          featuredProject: "Build Your Creativity",
          src: "../img/work/carousel/BuildYourCreativity.jpg",
          description: "Wendy's connectible Kid's Toy",
          link: "/work"
        },
        {
          featuredProject: "TANGERINES",
          src: "../img/work/carousel/OCFHC.jpg",
          description: "Orange County Field Hockey Club",
          link: "/work"
        },
        {
          featuredProject: "Dribbble Shots",
          src: "../img/work/carousel/BuildYourCreativity.jpg",
          description: "Select Shots of UI/UX Challenges",
          link: "/work"
        }
      ]
    };
  }
};
</script>

<style scoped>
.header {
  position: relative;
}
.text {
  width: 100%;
  text-align: center;
  color: white;
  position: relative;
  padding: 10px;
  left: 0;
  top: 65vh;
  background: rgba(0, 0, 0, 0.4);
}
/* desktop styles */
@media screen and (min-width: 768px) {
  .text {
    position: relative;
    text-align: left;
    width: 400px;
    left: 50px;
    padding: 20px;
    top: 450px;
  }
}
</style>
