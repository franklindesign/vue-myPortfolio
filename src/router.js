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
      name: "buildyourcreativity",
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
    {
      path: "/demo/clientc",
      name: "clientc",
      component: () => import("./projects/demo/ClientC.vue")
    },
    {
      path: "/demo/disneyplus",
      name: "disneyplus",
      component: () => import("./projects/demo/DisneyPlus.vue")
    },
    // {
    //   path: "/blog",
    //   name: "blog",
    //   component: () => import("./views/Blog.vue")
    // },
    {
      path: "/work/illustrations",
      name: "illustrations",
      component: () => import("./views/Illustrations.vue")
    },
    {
      path: "/work/Illustrations/Jordan94",
      name: "jordan94",
      component: () => import("./projects/illustrations/Jordan94FluGame.vue")
    },
    {
      path: "/work/Illustrations/WinFromWithin",
      name: "WinFromWithin",
      component: () => import("./projects/illustrations/WinFromWithin.vue")
    },
    {
      path: "/work/Illustrations/AirMax90",
      name: "airmax90",
      component: () => import("./projects/illustrations/AirMax.vue")
    },
    {
      path: "/work/Illustrations/WalterWhite",
      name: "ww",
      component: () => import("./projects/illustrations/BrBa.vue")
    },
    {
      path: "/resources",
      name: "resources",
      component: () => import("./views/Resources.vue")
    },
    {
      path: "/resources/vue",
      name: "vue",
      component: () => import("./resources/Vue.vue")
    },
    {
      path: "/resources/react",
      name: "react",
      component: () => import("./resources/React.vue")
    },
    {
      path: "/resources/graphicdesign",
      name: "graphicdesign",
      component: () => import("./resources/GraphicDesign.vue")
    },
    {
      path: "/resources/ux",
      name: "uxdesign",
      component: () => import("./resources/UX.vue")
    },
    {
      path: "*",
      name: "404",
      component: () => import("./views/404.vue")
    }
  ],
  // Scroll to Top on Navigation
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
