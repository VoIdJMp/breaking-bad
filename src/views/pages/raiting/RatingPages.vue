<template>
  <div>
    <h3>Top 5 raiting</h3>
    <div v-if="raiting">
      <masonry :cols="3">
        <router-link
          :to="{
            name: 'character.detail',
            params: { char_id: item.item.char_id },
          }"
          v-for="item in getRaiting"
          :key="item.item.char_id"
          style="text-decoration: none"
        >
          <div class="vs-card-content mt-4 mb-4 type-1">
            <div class="vs-card" style="width: 85%">
              <div class="vs-card__img">
                <img :src="item.item.img" alt="" />
                <div class="vs-card__interactions">
                  <button
                    class="vs-button vs-button--null vs-button--size-null vs-button--icon vs-button--danger vs-button--default"
                  ></button>
                </div>
              </div>
              <div class="vs-card__text">
                <div class="vs-card__title">
                  <h3>
                    {{ item.item.name }}
                    <span>
                      {{ item.countDeath }}
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </masonry>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "RatingPages",
  data: () => ({
    raiting: {},
  }),
  computed: {
    ...mapState({
      characters: (state) => state.character.characters,
      death: (state) => state.character.death,
    }),

    getRaiting() {
      return this.raiting;
    },
  },
  created() {
    this.characters.forEach((item) => {
      this.death.forEach((dItem) => {
        if (item.name === dItem.responsible) {
          if (!this.raiting[item.name]) {
            this.raiting[item.name] = {
              countDeath: 0,
              item: item,
            };
          }
          if (item.name === "Gustavo Fring") {
            console.log(dItem.number_of_deaths);
          }
          this.raiting[item.name].countDeath =
            this.raiting[item.name].countDeath + dItem.number_of_deaths;
        }
      });
    });
  },
};
</script>

<style scoped></style>
