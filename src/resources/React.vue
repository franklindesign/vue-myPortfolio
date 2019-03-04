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
        },
        {
          subtitle: "Design+Code",
          description: "Learn to design and code as a designer or developer.",
          image: "../img/src/designcode.jpg",
          link: "https://designcode.io/"
        },
        {
          subtitle: "The React Handbook by Flavio Copes",
          description:
            "Free React handbook written by Flavio Copes, available in PDF, ePub, and Mobi.",
          image: "../img/src/react-handbook-flavio.jpg",
          link: "https://flaviocopes.com/page/ebooks-links/"
        },
        {
          subtitle: "Wes Bos",
          description:
            "Listing of all the courses by Wes Bos. Some of them are paid and some of them are free.",
          image: "../img/src/wesbos.jpg",
          link: "https://wesbos.com/courses/"
        },
        {
          subtitle: "Level Up Tutorials",
          description:
            "Free and premium tutorials on web design, development and react ecosystem.",
          image: "../img/src/leveluptuts.jpg",
          link: "https://www.leveluptutorials.com/tutorials"
        },
        {
          subtitle: "Syntax.fm",
          description: "A Tasty Treats Podcast for Web Developers.",
          image: "../img/src/syntax.jpg",
          link: "https://syntax.fm/"
        },
        {
          subtitle: "Made With React",
          description: "A collection of projects made with React",
          image: "../img/src/madewithreact.jpg",
          link: "https://madewithreactjs.com/"
        }
      ]
    };
  }
};
</script>
