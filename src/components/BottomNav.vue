<template>
  <v-card text class="hidden-md-and-up">
    <v-bottom-navigation
      :value="true"
      fixed
      dark
      background-color="grey darken-4"
      height="70"
      class="pt-3"
    >
      <router-link to="/">
        <v-btn color="white" text>
          <span>Home</span>
          <v-icon>home</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/about">
        <v-btn color="white" text>
          <span>About</span>
          <v-icon>person</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/work">
        <v-btn color="white" text>
          <span>Work</span>
          <v-icon>view_module</v-icon>
        </v-btn>
      </router-link>

      <router-link to="/resources">
        <v-btn color="white" text>
          <span>Resources</span>
          <v-icon>local_library</v-icon>
        </v-btn>
      </router-link>
    </v-bottom-navigation>
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
