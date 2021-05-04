const state = {
  characters: [],
  death: [],
};

const mutations = {
  SET_ALL_CHARACTER: (state, characters) => {
    state.characters = characters;
  },

  SET_ALL_DEATH: (state, death) => {
    state.death = death;
  },
};

const actions = {
  setCharacter: ({ commit }, characters) => {
    commit("SET_ALL_CHARACTER", characters);
  },

  setDeath: ({ commit }, death) => {
    commit("SET_ALL_DEATH", death);
  },
};

const getters = {
  countDeathAtEpisodes: (state, episode_id, character) => {
    return state.death.reduce((acc, item) => {
      if (item.responsible === character && episode_id === item.episode) {
        acc += item.number_of_deaths;
      }
      return acc;
    });
  },
};

const namespaced = true;

export const character = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
