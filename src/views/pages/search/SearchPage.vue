<template>
  <div>
    <div class="center content-inputs" style="margin-top: 100px">
      <div class="center content-inputs">
        <div
          class="vs-input-parent vs-input-parent--state-dark vs-component--primary"
        >
          <div class="vs-input-content">
            <input
              placeholder=""
              id="vs-input--464"
              class="vs-input"
              v-model="valueSearch"
            />
            <label
              for="vs-input--464"
              class="vs-input__label"
              v-if="!valueSearch.length"
            >
              Search text (episodes, character, quoute and death)
            </label>
            <div class="vs-input__affects">
              <div class="vs-input__affects__1"></div>
              <div class="vs-input__affects__2"></div>
              <div class="vs-input__affects__3"></div>
              <div class="vs-input__affects__4"></div>
            </div>
          </div>
        </div>
      </div>
      <vs-button
        flat
        :active="true"
        class="float-right"
        @click="search = valueSearch"
      >
        Search
      </vs-button>
    </div>
    <div class="mt-4">
      <h3>Episodes:</h3>
      <div v-if="search.length">
        <masonry :cols="3">
          <router-link
            :to="{ name: 'episodes.detail', params: { id: item.episode_id } }"
            v-for="item in showEpisodes"
            :key="item.episode_id"
          >
            <vs-card class="mt-4">
              <template #title>
                <div class="d-flex items-center justify-content-between">
                  <h3 class="text-primary">{{ item.series }}</h3>
                  <strong>
                    {{
                      new Date(item.air_date).toLocaleDateString("en", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                    }}
                  </strong>
                </div>
              </template>
              <template #text>
                <span
                  class="badge bg-light text-dark mr-2 mt-2"
                  style="color: white; font-size: 0.8rem"
                  v-for="(item, index) in item.characters"
                  :key="index"
                >
                  {{ item }}
                </span>
              </template>
              <template #interactions>
                <vs-button danger icon>
                  <i class="bx bx-heart"></i>
                </vs-button>
                <vs-button class="btn-chat" shadow primary>
                  <i class="bx bx-chat"></i>
                  <span class="span"> 54 </span>
                </vs-button>
              </template>
            </vs-card>
          </router-link>
        </masonry>
      </div>
      <div v-else class="text-center text-muted">
        <span>No data, empty block</span>
      </div>
    </div>
    <div class="mt-4">
      <h3>Characters:</h3>
      <div v-if="search.length">
        <masonry :cols="3">
          <router-link
            :to="{
              name: 'character.detail',
              params: { char_id: item.char_id },
            }"
            v-for="item in showCharacters"
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
      <div v-else class="text-center text-muted">
        <span>No data, empty block</span>
      </div>
    </div>
    <div class="mt-4">
      <h3>Quotes:</h3>
      <div v-if="search.length">
        <span
          class="badge bg-primary text-white mr-2 mt-2"
          style="color: white; font-size: 0.8rem"
          v-for="(item, index) in showQuotes"
          :key="index"
        >
          {{ item.author }} : {{ item.quote }}
        </span>
      </div>
      <div v-else class="text-center text-muted">
        <span>No data, empty block</span>
      </div>
    </div>
  </div>
</template>

<script>
import { episodesService } from "../../../services/episodesService";
import { mapState } from "vuex";
import { characterService } from "../../../services/characterService";

export default {
  name: "SearchPage",
  data: () => ({
    episodes: [],
    quotes: [],
    valueSearch: "",
    search: "",
  }),
  created() {
    this.getEpisodes();
    this.getQuotes();
  },
  computed: {
    ...mapState({
      characters: (state) => state.character.characters,
    }),

    showEpisodes() {
      return this.episodes.filter(
        (item) => item.title.indexOf(this.search) !== -1
      );
    },

    showCharacters() {
      return this.characters.filter(
        (item) => item.name.indexOf(this.search) !== -1
      );
    },

    showQuotes() {
      return this.quotes.filter(
        (item) => item.quote.indexOf(this.search) !== -1
      );
    },
  },
  methods: {
    getEpisodes(query = {}) {
      const loading = this.$vs.loading();
      episodesService
        .getAllEpisodes(query)
        .then((res) => {
          this.episodes = res.data;
        })
        .finally(() => {
          loading.close();
        });
    },

    getQuotes() {
      const loading = this.$vs.loading();
      characterService
        .getQuotes()
        .then((res) => {
          this.quotes = res.data;
        })
        .finally(() => {
          loading.close();
        });
    },
  },
};
</script>

<style scoped>
.vs-input-parent {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-item-align: center;
  align-self: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
}

.vs-input {
  border: 2px solid transparent;
  background: rgba(var(--vs-gray-2), 1);
  color: rgba(var(--vs-text), 1);
  padding: 7px 13px;
  border-radius: inherit;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  padding-left: 10px;
  width: 100%;
}

.vs-card__img {
  position: relative;
  max-height: 100%;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-radius: 20px;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

.vs-card__img img {
  width: 100%;
  border-radius: 20px;
  display: block;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
</style>
