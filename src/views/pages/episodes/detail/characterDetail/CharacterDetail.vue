<template>
  <div>
    <div>
      <div class="d-flex">
        <div class="vs-card-content mt-4 mb-4 type-1">
          <div class="vs-card" style="width: 85%">
            <div class="vs-card__img">
              <img :src="character.img" alt="" />
              <div class="vs-card__interactions">
                <button
                  class="vs-button vs-button--null vs-button--size-null vs-button--icon vs-button--danger vs-button--default"
                ></button>
              </div>
            </div>
            <div class="vs-card__text">
              <div class="vs-card__title d-flex">
                <h3>
                  {{ character.name }}
                </h3>
                <span @click="addFavorite">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    :stroke="favorite ? 'red' : 'black'"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-heart"
                  >
                    <path
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    />
                  </svg>
                </span>
              </div>
              <p>
                <span
                  class="badge bg-light text-dark mr-2 mt-2"
                  style="color: white; font-size: 0.8rem"
                  v-for="(item, index) in character.occupation"
                  :key="index"
                >
                  {{ item }}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="card card-fill mt-4">
              <div class="card-header">
                <h5 class="card-header-title">Character timeline</h5>
              </div>
              <div class="card-body">
                <div
                  class="list-group list-group-flush list-group-activity my-n3"
                >
                  <div class="list-group-item">
                    <div class="row">
                      <div class="col-auto">
                        <div class="avatar avatar-sm">
                          <div
                            class="avatar-title font-size-lg bg-primary-soft rounded-circle text-primary"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-clock"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <polyline points="12 6 12 12 16 14" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div class="col ml-n2">
                        <h5 class="mb-1">Character birthday date</h5>
                        <p class="small text-gray-700 mb-0">
                          {{
                            new Date(character.birthday).toLocaleDateString(
                              "en",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )
                          }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="list-group-item">
                    <div class="row">
                      <div class="col-auto">
                        <div class="avatar avatar-sm">
                          <div
                            class="avatar-title font-size-lg bg-primary-soft rounded-circle text-primary"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-calendar"
                            >
                              <rect
                                x="3"
                                y="4"
                                width="18"
                                height="18"
                                rx="2"
                                ry="2"
                              />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                              <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div class="col ml-n2">
                        <h5 class="mb-1">Responsible episodes</h5>
                        <p class="small text-gray-700 mb-0">
                          Count: {{ episodes.length }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="list-group-item">
                    <div class="row">
                      <div class="col-auto">
                        <div class="avatar avatar-sm">
                          <div
                            class="avatar-title font-size-lg bg-primary-soft rounded-circle text-primary"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-calendar"
                            >
                              <rect
                                x="3"
                                y="4"
                                width="18"
                                height="18"
                                rx="2"
                                ry="2"
                              />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                              <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div class="col ml-n2">
                        <h5 class="mb-1">Responsible death</h5>
                        <p class="small text-gray-700 mb-0">
                          Count: {{ deathCharacter.length }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="list-group-item">
                    <div class="row">
                      <div class="col-auto">
                        <div class="avatar avatar-sm">
                          <div
                            class="avatar-title font-size-lg bg-primary-soft rounded-circle text-primary"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke-width="2"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-activity"
                            >
                              <polyline
                                points="22 12 18 12 15 21 9 3 6 12 2 12"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div class="col ml-n2">
                        <h5 class="mb-1">Character status</h5>
                        <p class="small text-gray-700 mb-0">
                          {{ character.status }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span
          class="badge bg-primary mr-2 mt-2"
          style="color: white; font-size: 1rem"
          v-for="item in quotes"
          :key="item.quote_id"
        >
          {{ item.quote }}
        </span>
      </div>
    </div>
    <vs-card-group>
      <router-link
        :to="{ name: 'episodes.detail', params: { id: item.episode_id } }"
        v-for="item in episodes"
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
    </vs-card-group>
    <vs-table class="mt-5" style="overflow-y: scroll; height: 800px">
      <template #thead>
        <vs-tr>
          <vs-th style="width: 20%">Responsible</vs-th>
          <vs-th>Death </vs-th>
          <vs-th>Cause </vs-th>
          <vs-th>Last words </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr v-for="(tr, index) in deathCharacter" :key="index" :data="tr">
          <vs-td>{{ tr.responsible }}</vs-td>
          <vs-td>{{ tr.death }}</vs-td>
          <vs-td>{{ tr.cause }}</vs-td>
          <vs-td>{{ tr.last_words }}</vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
import { characterService } from "../../../../../services/characterService";
import { episodesService } from "../../../../../services/episodesService";
import { mapState } from "vuex";

export default {
  name: "CharacterDetail",
  props: { char_id: [String, Number] },
  data: () => ({
    character: [],
    episodes: [],
    quotes: [],
    favorite: false,
    deathCharacter: [],
    loading: false,
  }),
  created() {
    this.getCharacter();
  },
  computed: {
    ...mapState({
      death: (state) => state.character.death,
    }),
  },
  methods: {
    setFavorite() {
      let obj = JSON.parse(localStorage.getItem("favorite"));
      if (obj[this.character.name]) {
        this.favorite = true;
      }
    },

    addFavorite() {
      let obj = JSON.parse(localStorage.getItem("favorite")) || {};
      this.favorite = !this.favorite;
      if (this.favorite) {
        obj[this.character.name] = this.character;
      } else {
        delete obj[this.character.name];
      }
      localStorage.setItem("favorite", JSON.stringify(obj));
    },

    getCharacter() {
      const loading = this.$vs.loading();
      characterService
        .getCharacter(this.char_id)
        .then((res) => {
          this.character = res.data[0];
          this.getEpisodes();
          this.getQuote();
          this.deathCharacter = this.death.filter(
            (item) => (item.responsible = this.character.name)
          );
          this.setFavorite();
        })
        .finally(() => {
          loading.close();
        });
    },

    getEpisodes() {
      this.episodes = [];
      let series = this.character.category.split(", ");
      series.forEach((item, index) => {
        episodesService
          .getAllEpisodes({ series: item })
          .then((res) => {
            this.episodes.push(res.data);
          })
          .finally(() => {
            if (index === series.length - 1) {
              this.episodes = this.episodes.flat(Infinity);
            }
          });
      });
    },

    getQuote() {
      const loading = this.$vs.loading();
      characterService
        .getQuote({ author: this.character.name })
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
.d-flex {
  display: -ms-flexbox !important;
  display: flex;
  justify-content: space-between;
}
</style>
