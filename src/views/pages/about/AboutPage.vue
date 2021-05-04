<template>
  <div>
    <div class="d-flex">
      <div>
        <div class="vs-card-content mt-4 mb-4 type-1">
          <div class="vs-card" style="width: 85%">
            <div class="vs-card__img">
              <img :src="about.Poster" alt="" />
              <div class="vs-card__interactions">
                <button
                  class="vs-button vs-button--null vs-button--size-null vs-button--icon vs-button--danger vs-button--default"
                ></button>
              </div>
            </div>
            <div class="vs-card__text">
              <div class="vs-card__title">
                <h3>
                  {{ about.Title }}
                </h3>
              </div>
              <p>
                <span
                  class="badge bg-light text-dark mr-2 mt-2"
                  style="color: white; font-size: 0.8rem"
                  v-for="(item, index) in about.Ratings"
                  :key="index"
                >
                  {{ item.Source }} : {{ item.Value }}
                </span>
              </p>
              <p
                class="badge bg-light text-dark mr-2 mt-2"
                style="color: white; font-size: 0.8rem"
              >
                Country: {{ about.Country }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <vs-alert shadow>
          <template #title> Actors: </template>
          <p>
            {{ about.Actors }}
          </p>
        </vs-alert>
      </div>
    </div>
    <vs-alert shadow color="dark">
      <template #title> Plot </template>
      <p>
        {{ about.Plot }}
      </p>
    </vs-alert>
  </div>
</template>

<script>
import { aboutService } from "../../../services/aboutService";

export default {
  name: "AboutPage",
  data: () => ({
    about: {},
  }),
  created() {
    this.getAboutSeries();
  },
  methods: {
    getAboutSeries() {
      const loading = this.$vs.loading();
      aboutService
        .getAbout({ i: "tt0903747" })
        .then((res) => {
          this.about = res.data;
        })
        .finally(() => {
          loading.close();
        });
    },
  },
};
</script>
