<template>
  <div>
    <div class="center mt-4" v-if="episodes.length">
      <vs-select v-model="query.season" state="dark">
        <vs-option label="All season" value="0"> All season </vs-option>
        <vs-option label="Season 1" value="1"> Season 1 </vs-option>
        <vs-option label="Season 2" value="2"> Season 2 </vs-option>
        <vs-option label="Season 3" value="3"> Season 3 </vs-option>
        <vs-option label="Season 4" value="4"> Season 4 </vs-option>
        <vs-option label="Season 5" value="5"> Season 5 </vs-option>
      </vs-select>
    </div>
    <masonry :cols="3">
      <router-link
        :to="{ name: 'episodes.detail', params: { id: item.episode_id } }"
        v-for="item in showEpisodes"
        :key="item.episode_id"
      >
        <vs-card class="mt-4">
          <template #title>
            <div class="d-flex items-center justify-content-between">
              <h3 class="text-primary">{{ item.title }}</h3>
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
</template>

<script>
import { episodesService } from "../../../services/episodesService";

export default {
  name: "EpisodesPage",
  data: () => ({
    episodes: [],
    query: { season: 0 },
    value: "",
    loading: false,
  }),
  created() {
    this.getEpisodes();
  },
  computed: {
    showEpisodes() {
      return this.episodes.filter(
        (item) => item.season === this.query.season || !+this.query.season
      );
    },
  },
  methods: {
    getEpisodes(query = {}) {
      query = this.query;
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
  },
};
</script>
