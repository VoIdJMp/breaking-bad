<template>
  <div>
    <div v-for="(item, index) in occupation" :key="index">
      <h4>{{ item[0] }}</h4>
      <masonry :cols="3">
        <router-link
          :to="{ name: 'character.detail', params: { char_id: item.char_id } }"
          v-for="item in item[1]"
          :key="item.char_id"
          style="text-decoration: none"
        >
          <div class="vs-card-content mt-4 mb-4 type-1">
            <div class="vs-card" style="width: 85%">
              <div class="vs-card__img">
                <img :src="item.img" alt="" />
                <div class="vs-card__interactions">
                  <button
                    class="vs-button vs-button--null vs-button--size-null vs-button--icon vs-button--danger vs-button--default"
                  ></button>
                </div>
              </div>
              <div class="vs-card__text">
                <div class="vs-card__title">
                  <h3>
                    {{ item.name }}
                  </h3>
                </div>
                <p>
                  <span
                    class="badge bg-light text-dark mr-2 mt-2"
                    style="color: white; font-size: 0.8rem"
                    v-for="(item, index) in item.occupation"
                    :key="index"
                  >
                    {{ item }}
                  </span>
                </p>
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
  name: "OccupationPage",
  data: () => ({
    occupation: {},
  }),
  computed: {
    ...mapState({
      characters: (state) => state.character.characters,
    }),
  },
  created() {
    this.characters.forEach((item) => {
      item.occupation.forEach((occ) => {
        if (!this.occupation[occ]) this.occupation[occ] = [];
        this.occupation[occ].push(item);
      });
    });

    this.occupation = Object.entries(this.occupation);
  },
};
</script>
