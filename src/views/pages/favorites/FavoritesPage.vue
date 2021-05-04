<template>
  <div>
    <masonry :cols="3">
      <router-link
        :to="{ name: 'character.detail', params: { char_id: item.char_id } }"
        v-for="item in favorites"
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
</template>

<script>
export default {
  name: "FavoritesPage",
  data: () => ({
    favorites: [],
  }),
  created() {
    this.favorites = JSON.parse(localStorage.getItem("favorite"));
  },
};
</script>

<style scoped></style>
