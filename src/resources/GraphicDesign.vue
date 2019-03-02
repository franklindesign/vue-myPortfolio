<template>
  <v-container class="mt-5 topSpacing">
    <h1>Graphic Design</h1>
    <h4>Resources, books, and articles for graphic designers.</h4>

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
          subtitle: "theFutur",
          description:
            "You’ll find recent podcasts, helpful guides, worksheets, and infographics to help you grow your design business from theFutur.",
          image: "../img/src/thefutur.jpg",
          link: "https://www.thefutur.com/resources/"
        },
        {
          subtitle: "The Win Without Pitching Manifesto",
          description:
            "A manifesto of business practices for those who sell ideas and advice, The Win Without Pitching Manifesto lays out twelve steps in the form of proclamations that owners of creative businesses can take to distance themselves from their competition, regain the high ground in their client relationships and learn to win business without first parting with their thinking or writing lengthy proposals. ",
          image: "../img/src/books/TheWinWithoutPitchingManifesto-book.jpg",
          link:
            "https://www.amazon.com/Win-Without-Pitching-Manifesto/dp/1999523504/"
        }
      ]
    };
  }
};
</script>
