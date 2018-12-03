<template>
  <div id="app">
    <div id="nav">
      <AppBar></AppBar>
    </div>
    <router-view/>
    <BottomNav />
  </div>
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
