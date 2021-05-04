import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/pages/home/Home"),
    meta: {
      title: "Home Page",
    },
    redirect: {
      name: "episodes",
    },
    children: [
      {
        path: "/episodes",
        name: "episodes",
        component: () => import("../views/pages/episodes/EpisodesPage"),
        meta: {
          title: "Episodes",
        },
      },
      {
        path: "/episodes/:id",
        name: "episodes.detail",
        component: () =>
          import("../views/pages/episodes/detail/EpisodesDetail"),
        meta: {
          title: "Episodes detail",
        },
        props: true,
      },
      {
        path: "/episodes/:id/:char_id",
        name: "character.detail",
        component: () =>
          import(
            "../views/pages/episodes/detail/characterDetail/CharacterDetail"
          ),
        meta: {
          title: "Character detail",
        },
        props: true,
      },
      {
        path: "/search",
        name: "search",
        component: () => import("../views/pages/search/SearchPage"),
        meta: {
          title: "Search Page",
        },
      },
      {
        path: "/occupation",
        name: "occupation",
        component: () => import("../views/pages/occupation/OccupationPage"),
        meta: {
          title: "Occupation Page",
        },
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../views/pages/about/AboutPage"),
        meta: {
          title: "About Page",
        },
      },
      {
        path: "/favorites",
        name: "favorites",
        component: () => import("../views/pages/favorites/FavoritesPage"),
        meta: {
          title: "Favorites Page",
        },
      },
      {
        path: "/raiting",
        name: "raiting",
        component: () => import("../views/pages/raiting/RatingPages"),
        meta: {
          title: "Raiting Page",
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
