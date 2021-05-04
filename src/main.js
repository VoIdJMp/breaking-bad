import Vue from "vue";
import Vuesax from "vuesax";
import VueMasonry from "vue-masonry-css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vuesax/dist/vuesax.css";
import "./assets/scss/main.css";

Vue.config.productionTip = false;

Vue.use(Vuesax, {});
Vue.use(VueMasonry);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
