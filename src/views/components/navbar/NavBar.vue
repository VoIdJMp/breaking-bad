<template>
  <div class="container">
    <vs-navbar center-collapsed>
      <vs-navbar-item
        :to="{ name: 'episodes' }"
        :active="$route.path === '/episodes'"
      >
        Episodes
      </vs-navbar-item>

      <vs-navbar-item
        :to="{ name: 'search' }"
        :active="$route.path === '/search'"
      >
        Search
      </vs-navbar-item>
      <vs-navbar-item
        :to="{ name: 'occupation' }"
        :active="$route.path === '/occupation'"
      >
        Occupation
      </vs-navbar-item>
      <vs-navbar-item
        :to="{ name: 'raiting' }"
        :active="$route.path === '/raiting'"
      >
        Raiting
      </vs-navbar-item>
      <vs-navbar-item
        :to="{ name: 'favorites' }"
        :active="$route.path === '/favorites'"
      >
        Favorites
      </vs-navbar-item>
      <vs-navbar-item
        :to="{ name: 'about' }"
        :active="$route.path === '/about'"
      >
        About
      </vs-navbar-item>
    </vs-navbar>
    <div class="square">
      <div class="child mt-5"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped></style>
