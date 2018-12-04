<template>
  <v-app>
    <div id="nav">
      <AppBar></AppBar>
    </div>
    <v-content id="app">
      <router-view/>
    </v-content>
    <BottomNav/>
  </v-app>
</template>

<script>
// @ is an alias to /src
import AppBar from "@/components/AppBar.vue";
import BottomNav from "@/components/BottomNav.vue";
export default {
  name: "App",
  components: {
    AppBar,
    BottomNav
  }
};
</script>
