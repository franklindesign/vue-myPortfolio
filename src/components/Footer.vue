<template>
  <v-footer dark height="auto" class="mt-3 mb-3">
    <v-card class="flex" flat>
      <v-card-title class="justify-center" style="background-color: #131313">
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

      <v-card-actions
        class="justify-center pb-5"
        style="background-color: #131313"
      >
        <div style="text-align: center;">
          &copy;2019 —
          <strong>Design By Franklin</strong>
          <p class="mt-2">Built with VueJS. Deployed to Netlify.</p>
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
        title: "LinkedIn",
        icon: "fab fa-linkedin",
        link: "http://www.linkedin.com/in/franklinmanghi"
      },
      {
        title: "Behance",
        icon: "fab fa-behance",
        link: "http://www.behance.net/franklinmanghi"
      },
      {
        title: "Dribbble",
        icon: "fab fa-dribbble",
        link: "http://www.dribbble.com/franklinm"
      },

      {
        title: "Github",
        icon: "fab fa-github",
        link: "http://www.github.com/franklindesign"
      },

      {
        title: "Twitter",
        icon: "fab fa-twitter",
        link: "http://www.twitter.com/franklinsans"
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
