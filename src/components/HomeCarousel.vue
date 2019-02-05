<template>
  <v-carousel height="100vh" hide-delimiters>
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
      <v-responsive height="80vh">
        <div fill-height>
          <div>
            <div class="text">
              <h3 class="display-1">{{item.featuredProject}}</h3>
              <span class="subheading">{{item.description}}</span>
              <v-divider class="my-3"></v-divider>
              <v-btn class="mx-0" color="primary" :to="`${ item.link }`">View Project</v-btn>
            </div>
          </div>
        </div>
      </v-responsive>
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
          featuredProject: "Build Your Creativity",
          src: "../img/work/carousel/BuildYourCreativity.jpg",
          description: "Wendy's connectible Kid's Toy",
          link: "/about"
        },
        {
          featuredProject: "Hibiki Sushi & Bar",
          src: "https://source.unsplash.com/random/1400x800",
          description: "Santa Clarita's Local All-You-Can-Eat restaurant",
          link: "/hibikisushi"
        },
        {
          featuredProject: "Bulma UI",
          src: "https://source.unsplash.com/random/1200x800",
          description: "Component UI made in Adobe XD",
          link: "/blog"
        },
        {
          featuredProject: "Daily UI",
          src: "https://source.unsplash.com/random/1200x800",
          description: "Daily Challenges in User Interface",
          link: "/resources"
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
  width: 100vw;
  text-align: center;
  color: white;
  position: absolute;
  padding: 10px;
  bottom: 10px;
  background: rgba(0, 0, 0, 0.2);
}
/* desktop styles */
@media screen and (min-width: 768px) {
  .text {
    text-align: left;
    width: 400px;
    left: 100px;
    padding: 20px;
    bottom: 0;
  }
}
</style>
