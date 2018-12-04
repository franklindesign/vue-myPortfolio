<template>
  <v-carousel height="100vh">
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
      <v-responsive height="80vh">
        <v-container fill-height>
          <v-layout class="header">
            <v-flex class="text">
              <h3 class="display-3">{{item.featuredProject}}</h3>
              <span class="subheading">{{item.description}}</span>
              <v-divider class="my-3"></v-divider>
              <v-btn class="mx-0" color="primary" large :to="`${ item.link }`">View Project</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
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
          featuredProject: "Hibiki Sushi & Bar",
          src: "https://source.unsplash.com/random/1400x800",
          description: "Santa Clarita's Local All-You-Can-Eat restaurant",
          link: "/hibikisushi"
        },
        {
          featuredProject: "Build Your Creativity",
          src: "https://source.unsplash.com/random/1400x800",
          description: "Wendy's connectible Kid's Toy",
          link: "/about"
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
  color: white;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>
