<template>
  <v-carousel height="100vh" hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
      <v-responsive height="80vh">
        <v-container fill-height>
          <v-layout class="header">
            <v-flex class="text">
              <h3 class="display-3">{{item.featuredProject}}</h3>
              <span class="subheading">{{item.description}}</span>
              <v-divider class="my-3"></v-divider>
              <v-btn
                class="mx-0"
                color="primary"
                large
                :to="`${ item.link }`"
              >
                View Project
              </v-btn>
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
          featuredProject: "title1",
          src: "https://source.unsplash.com/random/1400x800",
          description: "desc1",
          link: "/work"
        },
        {
          featuredProject: "title2",
          src: "https://source.unsplash.com/random/1400x800",
          description: "desc2",
          link: "/about"
        },
        {
          featuredProject: "title3",
          src: "https://source.unsplash.com/random/1200x800",
          description: "desc3",
          link: "/blog"
        },
        {
          featuredProject: "title4",
          src: "https://source.unsplash.com/random/1200x800",
          description: "desc4",
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
