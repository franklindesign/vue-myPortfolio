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
              contain
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
          image:
            "https://github.com/vuejs/awesome-vue/raw/master/logo.svg?sanitize=true",
          link: "https://github.com/vuejs/awesome-vue"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
