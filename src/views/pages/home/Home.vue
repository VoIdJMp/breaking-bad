<template>
  <div>
    <NavBar />
    <div class="container" v-if="loadingCount === 2">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { characterService } from "../../../services/characterService";
import NavBar from "../../components/navbar/NavBar";

export default {
  name: "Home",
  components: { NavBar },
  data: () => ({
    loadingCount: 0,
  }),
  created() {
    this.getAllCharacter();
    this.getAllDeath();
  },
  methods: {
    ...mapActions({
      setCharacter: "character/setCharacter",
      setDeath: "character/setDeath",
    }),

    getAllCharacter() {
      characterService
        .getAllCharacter()
        .then((res) => {
          this.setCharacter(res.data);
        })
        .finally(() => {
          this.loadingCount++;
        });
    },

    getAllDeath() {
      characterService
        .getAllDeath()
        .then((res) => {
          this.setDeath(res.data);
        })
        .finally(() => {
          this.loadingCount++;
        });
    },
  },
};
</script>
