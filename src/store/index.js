import Vue from "vue";
import Vuex from "vuex";
import { character } from "./character";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    character,
  },
});
