<template>
  <div>
    <v-toolbar dark text class="toolbar-transparent" fixed height="70">
      <v-toolbar-title>
        <router-link to="/" class="title white--text">
          Franklin Design
          <span class="caretColor blink">|</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          text
          v-for="item in items"
          :key="item.title"
          :to="`${item.link}`"
        >
          <v-icon>{{ item.icon }}</v-icon>
          <p class="ma-2">{{ item.title }}</p>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>
<style scoped>
.caretColor {
  color: rgb(155, 155, 155);
  margin-left: -3px;
}
.blink {
  animation: blink-animation 950ms steps(4, start) infinite;
  -webkit-animation: blink-animation 950ms steps(4, start) infinite;
}
@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
@-webkit-keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
.title {
  font-family: "fira code" !important;
}
.toolbar-transparent {
  background-color: rgba(0, 0, 0, 0.9) !important;
}

@media screen and (min-width: 768px) {
  .toolbar-transparent {
    background-color: rgba(0, 0, 0, 0.8) !important;
  }
}
</style>

<script>
export default {
  name: "ToolBar",
  data() {
    return {
      // drawer: null,
      items: [
        { title: "Work", icon: "view_module", link: "/work" },
        { title: "About", icon: "person", link: "/about" },
        { title: "Resources", icon: "local_library", link: "/resources" }
      ]
    };
  }
};
</script>
