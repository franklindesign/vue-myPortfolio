<template>
  <v-container class="mt-5 topSpacing">
    <h1>Vue</h1>
    <h4>Great sources for Vue Javascript UI Library.</h4>

    <v-layout wrap mt-3>
      <v-flex
        xs12
        sm6
        md4
        lg4
        xl3
        v-for="source in sources"
        :key="source.title"
      >
        <a :href="`${source.link}`" target="_blank">
          <v-card style="margin: 5px;" class="sourceCard">
            <v-img
              class="white--text"
              height="200px"
              :src="`${source.image}`"
            ></v-img>
            <v-card-title>
              <div>
                <span class="grey--text">{{ source.subtitle }}</span>
                <br />
                <br />
                <span>{{ source.description }}</span>
                <br />
              </div>
            </v-card-title>
            <!-- <v-card-actions>
            <v-btn flat color="green">Visit Link</v-btn>
            </v-card-actions>-->
          </v-card>
        </a>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      sources: [
        {
          subtitle: "Github/Awesome-Vue",
          description:
            "A curated list of awesome things related to Vue.js, including lists of tutorials and Github repositories.",
          image: "/img/src/logos/awesome-vue-logo.svg",
          link: "https://github.com/vuejs/awesome-vue"
        },
        {
          subtitle: "Vue School",
          description:
            "Learn Vue.js and modern, cutting-edge front-end technologies from core-team members and industry experts with free tutorials and video courses.",
          image: "../img/src/vueSchool.jpg",
          link: "https://vueschool.io/"
        },
        {
          subtitle: "VueMastery",
          description:
            "Download Vue cheatsheets, watch videos on VueJs and conference videos.",
          image: "../img/src/vue-mastery.jpg",
          link: "https://www.vuemastery.com/vue-cheat-sheet"
        },
        {
          subtitle: "The Vue Handbook by Flavio Copes",
          description:
            "Free Vue handbook written by Flavio Copes, available in PDF, ePub, and Mobi.",
          image: "../img/src/vue-handbook-flavio.jpg",
          link: "https://flaviocopes.com/page/ebooks-links/"
        },
        {
          subtitle: "Laracasts / Learn Vue 2: Step By Step",
          description:
            "Push your web development skills to the next level, through expert screencasts on Laravel, Vue, and so much more. ",
          image: "../img/src/laracasts.jpg",
          link: "https://laracasts.com/series/learn-vue-2-step-by-step"
        },
        {
          subtitle: "Vue Vixens",
          description:
            "Vue Vixens are foxy people who identify as women and who want to learn Vue.js to make websites and mobile apps.",
          image: "../img/src/vueVixens.jpg",
          link: "https://vuevixens.org/"
        },
        {
          subtitle: "Made With Vue",
          description: "A collection of projects made with vue.js by others.",
          image: "../img/src/madewithvuejs.jpg",
          link: "https://madewithvuejs.com/"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
