<template>
  <v-card height="180px" flat class="hidden-md-and-up">
    <v-bottom-nav :value="true" fixed color="grey darken-4">
      <router-link to="/">
        <v-btn color="white" flat>
          <span>Home</span>
          <v-icon>home</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/work">
        <v-btn color="white" flat>
          <span>Work</span>
          <v-icon>view_module</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/blog">
        <v-btn color="white" flat>
          <span>Blog</span>
          <v-icon>message</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/about">
        <v-btn color="white" flat>
          <span>About</span>
          <v-icon>person</v-icon>
        </v-btn>
      </router-link>
    </v-bottom-nav>
  </v-card>
</template>

<script>
export default {
  name: "BottomNav",
  data() {
    return {
      bottomNav: "recent"
    };
  }
};
</script>
