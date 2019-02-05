<template>
  <v-footer dark height="auto" color="blue pb-4">
    <v-card class="flex" flat>
      <v-card-title class="blue justify-center">
        <div>
          <v-btn v-for="item in items" :key="item" class="mx-3" icon>
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
        title: "Dribbble",
        icon: "fab fa-dribbble",
        link: "http://www.dribbble.com"
      },
      {
        title: "Instagram",
        icon: "fab fa-instagram",
        link: "http://www.instagram.com"
      },
      {
        title: "Behance",
        icon: "fab fa-behance",
        link: "http://www.behance.net"
      },
      {
        title: "LinkedIn",
        icon: "fab fa-linkedin",
        link: "http://www.linkedin.com"
      },
      {
        title: "Facebook",
        icon: "fab fa-facebook",
        link: "http://www.facebook.com"
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

