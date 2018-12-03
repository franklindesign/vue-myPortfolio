import Vue from "vue";
import App from "./App.vue";
import HomeCarousel from "./components/HomeCarousel.vue";
import AppBar from "./components/AppBar.vue";
import BottomNav from "./components/BottomNav.vue";
import router from "./router";
import "./registerServiceWorker";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "./app.css";

Vue.use(Vuetify);

Vue.component("homecarousel", HomeCarousel);
Vue.component("appbar", AppBar);
Vue.component("bottomnav", BottomNav);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
