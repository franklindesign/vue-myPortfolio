<template>
  <div>
    <v-toolbar absolute dark>
      <v-toolbar-title class="white--text">
        <router-link to="/" class="title">FRANKLIN DESIGN</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down">
        <v-btn icon @click="drawer = !drawer">
          <v-icon>menu</v-icon>
        </v-btn>
      </div>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      right
      dark
      app
      temporary
      class="grey darken-4 hidden-sm-and-down"
    >
      <v-list class="pa-1">
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://avatars1.githubusercontent.com/u/6743753?s=100" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Franklin Manghi</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list>
        <v-divider light></v-divider>

        <v-list-tile
          ripple
          v-for="item in items"
          :key="item.title"
          :to="`${item.link}`"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "AppBar",
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "home", link: "/" },
        { title: "About", icon: "person", link: "/about" },
        { title: "Work", icon: "view_module", link: "/work" },
        { title: "Blog", icon: "message", link: "/blog" },
        { title: "Resources", icon: "local_library", link: "/resources" }
      ]
    };
  }
};
</script>
