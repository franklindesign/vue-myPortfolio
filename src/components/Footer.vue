<template>
  <v-footer dark height="auto" color="blue pb-4">
    <v-card class="flex" flat>
      <v-card-title class="blue justify-center">
        <div>
          <v-btn
            v-for="(item, i) in items"
            :key="i"
            class="mx-3"
            icon
            :href="`${item.link}`"
            target="_blank"
          >
            <v-icon medium dark>{{ item.icon }}</v-icon>
          </v-btn>
        </div>
      </v-card-title>

      <v-card-actions class="blue justify-center pb-5">
        <div>
          &copy;2019 —
          <strong>Design By Franklin</strong>
        </div>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "Twitter",
        icon: "fab fa-twitter",
        link: "http://www.twitter.com/franklinsans"
      },
      {
        title: "Dribbble",
        icon: "fab fa-dribbble",
        link: "http://www.dribbble.com/franklinm"
      },

      {
        title: "Behance",
        icon: "fab fa-behance",
        link: "http://www.behance.net/franklinmanghi"
      },
      {
        title: "Github",
        icon: "fab fa-github",
        link: "http://www.github.com/franklindesign"
      },

      {
        title: "LinkedIn",
        icon: "fab fa-linkedin",
        link: "http://www.linkedin.com/in/franklinmanghi"
      }
    ]
  })
};
</script>

<style scoped>
.bottomSpace {
  padding-bottom: 3em;
}
</style>
