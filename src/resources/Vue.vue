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
          description: "A curated list of awesome things related to Vue.js",
          image: "/img/src/logos/awesome-vue-logo.svg",
          link: "https://github.com/vuejs/awesome-vue"
        },
        {
          subtitle: "The Vue Handbook by Flavio Copes",
          description:
            "Free Vue handbook written by Flavio Copes, available in PDF, ePub, and Mobi.",
          image: "../img/src/vue-handbook-flavio.jpg",
          link: "https://flaviocopes.com/page/ebooks-links/"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
