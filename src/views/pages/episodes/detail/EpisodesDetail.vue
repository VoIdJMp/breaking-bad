<template>
  <div>
    <vs-alert style="margin-top: 80px">
      <template #title> Weather at Albuquerque</template>
    </vs-alert>
    <vs-alert shadow class="mt-4">
      <template #title>
        Total number of deaths in this episode: {{ deathEpisodes }}
      </template>
    </vs-alert>
    <masonry :cols="3">
      <router-link
        :to="{ name: 'character.detail', params: { char_id: item.char_id } }"
        v-for="item in charactersEpisode"
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
import { mapState, mapGetters } from "vuex";
import { episodesService } from "../../../../services/episodesService";
import { weatherService } from "../../../../services/weatherService";

export default {
  name: "EpisodesDetail",
  props: { id: Number },
  data: () => ({
    deathEpisodes: 0,
    active: false,
    episode: [],
    deathCount: {},
    charactersEpisode: [],
  }),
  created() {
    this.getEpisode();
  },
  computed: {
    ...mapState({
      characters: (state) => state.character.characters,
      death: (state) => state.character.death,
    }),
  },
  mounted() {
    this.death.forEach((item) => {
      if (+item.episode === +this.id) {
        this.deathEpisodes += item.number_of_deaths;
        if (!this.deathCount[item.death]) this.deathCount[item.death] = 0;
        this.deathCount[item.death] += item.number_of_deaths;
      }
    });
  },
  methods: {
    ...mapGetters({
      countDeathAtEpisodes: "character/countDeathAtEpisodes",
    }),

    getEpisode() {
      const loading = this.$vs.loading();
      episodesService.getEpisode(this.id).then((res) => {
        this.episode = res.data[0];
        this.charactersEpisode = this.characters.filter((item) => {
          return this.episode.characters.indexOf(item.name) !== -1;
        });
        this.getWeather(loading);
      });
    },

    getWeather(loading) {
      const dateEpisode = new Date(this.episode.air_date);
      console.log(dateEpisode);
      weatherService
        .getWeather({
          year: dateEpisode.getFullYear(),
          mounth: dateEpisode.getMonth() + 1,
          day: dateEpisode.getDay() + 1,
        })
        .then((res) => {
          this.weather = res.date;
        })
        .finally(() => {
          loading.close();
        });
    },
  },
};
</script>
