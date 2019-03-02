<template>
  <v-app>
    <v-content id="app">
      <div id="nav">
        <ToolBar></ToolBar>
      </div>
      <router-view />
    </v-content>
    <Footer />
    <BottomNav />
  </v-app>
</template>

<script>
// @ is an alias to /src
import ToolBar from "@/components/ToolBar.vue";
import Footer from "@/components/Footer.vue";
import BottomNav from "@/components/BottomNav.vue";
export default {
  name: "App",
  metaInfo: {
    title:
      "Franklin Manghi: [Graphic Designer + Product Designer + UI Developer]",
    titleTemplate: "%s"
  },
  components: {
    ToolBar,
    Footer,
    BottomNav
  }
};
</script>
