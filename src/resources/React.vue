<template>
  <v-container class="mt-5 topSpacing">
    <h1>React</h1>
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
          subtitle: "Github/Awesome-React",
          description:
            "A collection of awesome things regarding React ecosystem.",
          image: "../img/src/awesome-react.jpg",
          link: "https://github.com/enaqx/awesome-react"
        }
      ]
    };
  }
};
</script>
