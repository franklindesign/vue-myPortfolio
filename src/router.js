import Vue from "vue";
import Router from "vue-router";
import Meta from "vue-meta";
import Home from "./views/Home.vue";

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/work",
      name: "work",
      component: () => import("./views/Work.vue")
    },
    {
      path: "/work/buildyourcreativity",
      name: "nu",
      component: () => import("./projects/BYC.vue")
    },
    {
      path: "/work/hibikisushi",
      name: "hibikisushi",
      component: () => import("./projects/Hibikisushi.vue")
    },
    {
      path: "/work/nu",
      name: "nu",
      component: () => import("./projects/Nu.vue")
    },
    {
      path: "/work/tangerines",
      name: "tangerines",
      component: () => import("./projects/Tangerines.vue")
    },
    // {
    //   path: "/blog",
    //   name: "blog",
    //   component: () => import("./views/Blog.vue")
    // },
    {
      path: "/resources",
      name: "resources",
      component: () => import("./views/Resources.vue")
    },
    {
      path: "*",
      name: "home",
      component: Home
    }
  ],
  // Scroll to Top on Navigation
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
