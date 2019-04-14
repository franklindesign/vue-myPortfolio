<template>
  <v-container class="mt-5 topSpacing">
    <h1>UX Design</h1>
    <h4>User Experience and User Interface Resources</h4>

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
            <v-img class="white--text" height="200px" :src="`${source.image}`">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">{{ source.title }}</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
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
          title: "",
          subtitle: "Nielsen Norman Group",
          description:
            "NN/g UX research reports include thousands of actionable, illustrated user experience guidelines for creating and improving your web, mobile, and intranet sites.",
          image: "../img/src/nng.jpg",
          link: "https://www.nngroup.com/reports/"
        },
        {
          title: "",
          subtitle: "UXPin",
          description:
            "Thoughtful content on mobile & web prototyping, wireframing, mockups, usability testing, project management, design process & more.",
          image: "../img/src/uxpin.jpg",
          link: "https://www.uxpin.com/studio/ebooks/"
        },
        {
          title: "",
          subtitle: "ADELE by UXPin",
          description:
            "The repository of publicly available design systems and pattern libraries.",
          image: "../img/src/adele.jpg",
          link: "https://adele.uxpin.com/"
        }
      ]
    };
  }
};
</script>
