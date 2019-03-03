<template>
  <v-container class="mt-5 topSpacing">
    <h1>Resources</h1>
    <h2>A collection of references for designers and developers.</h2>
    <div class="mt-4">
      <v-card style="background-color: #222222;">
        <v-container grid-list-lg fluid>
          <v-layout wrap>
            <v-flex
              mt-2
              xs12
              md6
              lg6
              xl4
              v-for="source in sources"
              :key="source.title"
              class="sourceCard"
            >
              <router-link :to="`${source.link}`">
                <v-card
                  :color="`${source.color}`"
                  style="height: auto;"
                  :class="`${source.class}`"
                >
                  <v-layout>
                    <v-flex xs4>
                      <v-img
                        :src="`${source.image}`"
                        height="100px"
                        width="80px"
                        style="margin: 10px; left: 20px; max-width: 400px;"
                        contain
                      ></v-img>
                    </v-flex>
                    <v-flex xs8>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline">{{ source.title }}</div>
                          <div>{{ source.description }}</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                  </v-layout>
                  <v-divider light></v-divider>
                </v-card>
              </router-link>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      sources: [
        {
          title: "Graphic Design",
          description: "Inspirations and resources for graphic designers",
          color: "grey lighten-3",
          class: "black",
          image: "../img/src/logos/Creative_Cloud.svg",
          link: "/resources/graphicdesign"
        },
        {
          title: "UX Design",
          description: "UX/UI resources",
          color: "white",
          class: "white",
          image: "../img/src/logos/UX.png",
          link: "/resources/ux"
        },
        {
          title: "Vue",
          description: "Great resources for Vue Javascript UI Library",
          color: "green",
          class: "white--text",
          image: "../img/src/logos/Vue.js_Logo_2.svg",
          link: "/resources/vue"
        },
        {
          title: "React",
          description: "Great resources for React Javascript UI Library",
          color: "blue",
          class: "white--text",
          image: "../img/src/logos/React-icon.svg",
          link: "/resources/react"
        }
      ]
    };
  }
};
</script>
