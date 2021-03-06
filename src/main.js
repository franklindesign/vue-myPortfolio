import Vue from "vue";
import App from "./App.vue";

import ToolBar from "./components/ToolBar.vue";
import BottomNav from "./components/BottomNav.vue";
import router from "./router";
import "./registerServiceWorker";

import "./app.css";
import VueTyperPlugin from "vue-typer";
import AOS from "aos";
import "aos/dist/aos.css";
// import vuetify from "@/plugins/vuetify";
import vuetify from "./plugins/vuetify";

Vue.use(VueTyperPlugin);

Vue.component("toolbar", ToolBar);
Vue.component("bottomnav", BottomNav);

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({ disable: "phone" });
  },
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
